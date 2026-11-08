import React from 'react';
import { UserProfile } from '../types/arena';
import { sound } from '../utils/sound';
import { 
  Trophy, 
  Flame, 
  Volume2, 
  VolumeX, 
  Award, 
  User 
} from 'lucide-react';

interface HeaderNavProps {
  profile: UserProfile;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onOpenProfile: () => void;
  onOpenLeaderboard: () => void;
  onOpenAuth: () => void;
  onReturnLobby?: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  profile,
  soundEnabled,
  onToggleSound,
  onOpenProfile,
  onOpenLeaderboard,
  onOpenAuth,
  onReturnLobby
}) => {
  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-cyan-500/20 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div 
          onClick={() => {
            sound.playClick();
            if (onReturnLobby) onReturnLobby();
          }}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 p-[1.5px] shadow-[0_0_15px_rgba(6,182,212,0.3)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all duration-300">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-extrabold text-cyan-400 text-sm tracking-wider">
              IA
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-orbitron font-extrabold text-xl sm:text-2xl tracking-wider bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
                INFOR ARENA
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-orbitron font-semibold uppercase tracking-widest text-cyan-300 bg-cyan-950/80 border border-cyan-500/30 rounded">
                EIU STAGE
              </span>
            </div>
            <p className="text-[11px] text-slate-400 tracking-wide font-medium">
              Đấu Trường Thông Tin
            </p>
          </div>
        </div>

        {/* Center / Stats (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          {/* Total Score Badge */}
          <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-slate-900/80 border border-cyan-500/20">
            <Trophy className="w-4 h-4 text-amber-400" />
            <div className="text-left">
              <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Điểm Đấu Trường</div>
              <div className="font-orbitron font-bold text-sm text-cyan-300">
                {profile.totalScore.toLocaleString()} <span className="text-xs text-slate-500">ĐIỂM</span>
              </div>
            </div>
          </div>

          {/* Streak Combo Badge */}
          <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-slate-900/80 border border-orange-500/20">
            <Flame className={`w-4 h-4 ${profile.currentStreak > 0 ? 'text-orange-400 animate-bounce' : 'text-slate-500'}`} />
            <div className="text-left">
              <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Chuỗi Thắng</div>
              <div className="font-orbitron font-bold text-sm text-orange-400">
                {profile.currentStreak} <span className="text-xs text-slate-500">CÂU LIÊN TIẾP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Controls & User Card */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          
          {/* Audio SFX Toggle */}
          <button
            onClick={() => {
              sound.playClick();
              onToggleSound();
            }}
            title={soundEnabled ? 'Tắt âm thanh' : 'Bật âm thanh'}
            className="w-10 h-10 rounded-xl bg-slate-900/80 border border-cyan-500/25 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-200 active:scale-95"
          >
            {soundEnabled ? <Volume2 className="w-5 h-5 text-cyan-400" /> : <VolumeX className="w-5 h-5 text-slate-500" />}
          </button>

          {/* Leaderboard Button */}
          <button
            onClick={() => {
              sound.playClick();
              onOpenLeaderboard();
            }}
            title="Bảng Xếp Hạng Tuyển Thủ"
            className="w-10 h-10 rounded-xl bg-slate-900/80 border border-cyan-500/25 flex items-center justify-center text-slate-300 hover:text-amber-400 hover:border-amber-400/50 hover:shadow-[0_0_15px_rgba(251,191,36,0.3)] transition-all duration-200 active:scale-95"
          >
            <Award className="w-5 h-5 text-amber-400" />
          </button>

          {/* Player Badge / Profile Trigger */}
          <button
            onClick={() => {
              sound.playClick();
              onOpenProfile();
            }}
            className="flex items-center gap-2.5 pl-2 pr-3 py-1.5 rounded-xl bg-gradient-to-r from-slate-900/90 to-blue-950/80 border border-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-200 active:scale-95 text-left"
          >
            <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-400/50 flex items-center justify-center text-base">
              {profile.avatar.split(' ')[0] || '⚡'}
            </div>
            <div className="hidden sm:block">
              <div className="text-xs font-bold text-white flex items-center gap-1.5 leading-none">
                {profile.name}
              </div>
              <div className="text-[10px] font-orbitron font-semibold text-cyan-400 leading-tight mt-0.5">
                {profile.rankTitle}
              </div>
            </div>
          </button>

          {/* Auth Button */}
          <button
            onClick={() => {
              sound.playClick();
              onOpenAuth();
            }}
            title="Tài khoản / Đổi tên"
            className="w-10 h-10 rounded-xl bg-slate-900/80 border border-cyan-500/25 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-200 active:scale-95"
          >
            <User className="w-5 h-5" />
          </button>

        </div>

      </div>
    </header>
  );
};
