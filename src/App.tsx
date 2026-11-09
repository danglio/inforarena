import { useState, useEffect } from 'react';
import { Challenge, ChallengeCategory, RoundResult, UserProfile } from './types/arena';
import { 
  loadUserProfile, 
  loadMatchHistory, 
  loadAllChallenges, 
  addCustomChallenge,
  saveUserProfile 
} from './utils/storage';
import { sound } from './utils/sound';
import { HeaderNav } from './components/HeaderNav';
import { Lobby } from './components/Lobby';
import { ArenaBattle } from './components/ArenaBattle';
import { AuthModal } from './components/AuthModal';
import { ProfileModal } from './components/ProfileModal';
import { LeaderboardModal } from './components/LeaderboardModal';
import { CreateChallengeModal } from './components/CreateChallengeModal';
import { MaintenanceScreen } from './components/MaintenanceScreen';

export default function App() {
  const [profile, setProfile] = useState<UserProfile>(loadUserProfile());
  const [history, setHistory] = useState<RoundResult[]>(loadMatchHistory());
  const [challenges, setChallenges] = useState<Challenge[]>(loadAllChallenges());
  const [soundEnabled, setSoundEnabled] = useState<boolean>(!sound.isMuted);

  // Maintenance state: false (Đã mở lại hoạt động bình thường 100%)
  const [isMaintenanceActive, setIsMaintenanceActive] = useState<boolean>(false);

  // View state: 'lobby' | 'battle'
  const [currentView, setCurrentView] = useState<'lobby' | 'battle'>('lobby');
  const [activeBattleChallenges, setActiveBattleChallenges] = useState<Challenge[]>([]);

  // Modals state
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  // Sync state on mount & handle query params
  useEffect(() => {
    setProfile(loadUserProfile());
    setHistory(loadMatchHistory());
    setChallenges(loadAllChallenges());

    const params = new URLSearchParams(window.location.search);
    const viewParam = params.get('view');
    const modalParam = params.get('modal');

    if (viewParam === 'battle') {
      const allCh = loadAllChallenges();
      setActiveBattleChallenges(allCh.slice(0, 5));
      setCurrentView('battle');
    }
    if (modalParam === 'profile') setIsProfileOpen(true);
    if (modalParam === 'leaderboard') setIsLeaderboardOpen(true);
    if (modalParam === 'create') setIsCreateOpen(true);
    if (modalParam === 'auth') setIsAuthOpen(true);
  }, []);

  const handleToggleSound = () => {
    const isMuted = sound.toggleMute();
    setSoundEnabled(!isMuted);
    const updated = { ...profile, soundEnabled: !isMuted };
    setProfile(updated);
    saveUserProfile(updated);
  };

  const handleStartMatch = (category: ChallengeCategory | 'all') => {
    sound.playLock();
    let filtered = challenges;
    if (category !== 'all') {
      filtered = challenges.filter(c => c.category === category);
      // Fallback if not enough questions in this specific category
      if (filtered.length < 3) {
        filtered = challenges;
      }
    }

    // THUẬT TOÁN ĐỔI MỚI LIÊN TỤC - CHỐNG TRÙNG LẶP CÂU HỎI:
    // 1. Lấy danh sách ID các câu đã chơi từ lịch sử đấu
    const playedIds = new Set(history.map(r => r.challengeId));

    // 2. Ưu tiên lọc các câu hỏi người chơi CHƯA TỪNG CHƠI trong danh mục đã chọn
    let candidatePool = filtered.filter(c => !playedIds.has(c.id));

    // 3. Nếu số câu chưa chơi ít hơn 5 (người chơi đã trải nghiệm gần hết cả kho),
    // xoay vòng lại chu kỳ mới nhưng loại trừ các câu vừa xuất hiện ở 3 trận gần nhất (15 câu gần nhất)
    if (candidatePool.length < 5) {
      const recentIds = new Set(history.slice(0, 15).map(r => r.challengeId));
      candidatePool = filtered.filter(c => !recentIds.has(c.id));
      if (candidatePool.length < 5) {
        candidatePool = filtered;
      }
    }

    // 4. Xáo trộn ngẫu nhiên và chọn đúng 5 câu độc bản cho vòng đấu
    const shuffled = [...candidatePool].sort(() => 0.5 - Math.random());
    setActiveBattleChallenges(shuffled.slice(0, 5));
    setCurrentView('battle');
  };

  const handleAddChallenge = (newChallenge: Challenge) => {
    const updated = addCustomChallenge(newChallenge);
    setChallenges(updated);
  };

  const handleUpdateProfile = (updated: UserProfile) => {
    setProfile(updated);
    saveUserProfile(updated);
  };

  const handleExitArena = () => {
    sound.playClick();
    setHistory(loadMatchHistory());
    setCurrentView('lobby');
  };

  const handleViewProfileFromBattle = () => {
    setHistory(loadMatchHistory());
    setCurrentView('lobby');
    setIsProfileOpen(true);
  };

  // If maintenance mode is active, display the maintenance screen
  if (isMaintenanceActive) {
    return <MaintenanceScreen onUnlock={() => setIsMaintenanceActive(false)} />;
  }

  return (
    <div className="min-h-screen cyber-grid-bg text-slate-100 flex flex-col relative overflow-x-hidden">
      {/* Ambient Radial Vignette */}
      <div className="absolute inset-0 cyber-vignette pointer-events-none" />

      {/* Top Header Navigation */}
      <HeaderNav
        profile={profile}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        onOpenProfile={() => setIsProfileOpen(true)}
        onOpenLeaderboard={() => setIsLeaderboardOpen(true)}
        onOpenAuth={() => setIsAuthOpen(true)}
        onReturnLobby={() => setCurrentView('lobby')}
      />

      {/* Main View Area */}
      <main className="relative z-10 flex-1">
        {currentView === 'lobby' ? (
          <Lobby
            userProfile={profile}
            totalChallengesCount={challenges.length}
            onStartMatch={handleStartMatch}
            onOpenCreate={() => setIsCreateOpen(true)}
            onOpenLeaderboard={() => setIsLeaderboardOpen(true)}
            onOpenProfile={() => setIsProfileOpen(true)}
          />
        ) : (
          <ArenaBattle
            challenges={activeBattleChallenges}
            userProfile={profile}
            onUpdateProfile={handleUpdateProfile}
            onExitArena={handleExitArena}
            onViewProfile={handleViewProfileFromBattle}
          />
        )}
      </main>

      {/* Global Modals */}
      <AuthModal
        isOpen={isAuthOpen}
        profile={profile}
        onClose={() => setIsAuthOpen(false)}
        onUpdateProfile={handleUpdateProfile}
      />

      <ProfileModal
        isOpen={isProfileOpen}
        profile={profile}
        history={history}
        onClose={() => setIsProfileOpen(false)}
      />

      <LeaderboardModal
        isOpen={isLeaderboardOpen}
        currentUser={profile}
        onClose={() => setIsLeaderboardOpen(false)}
      />

      <CreateChallengeModal
        isOpen={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
        onAddChallenge={handleAddChallenge}
      />

      {/* Footer Branding */}
      <footer className="relative z-10 py-6 border-t border-slate-900/80 text-center text-xs text-slate-500 font-medium">
        INFOR ARENA: Đấu Trường Thông Tin • Chuẩn Đấu Trường Trí Tuệ EIU
      </footer>
    </div>
  );
}
