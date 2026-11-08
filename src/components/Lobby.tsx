import React, { useState } from 'react';
import { ChallengeCategory, UserProfile } from '../types/arena';
import { sound } from '../utils/sound';
import { 
  Play, 
  PlusCircle, 
  Brain, 
  ShieldCheck, 
  Flame, 
  Trophy
} from 'lucide-react';

interface LobbyProps {
  userProfile: UserProfile;
  totalChallengesCount: number;
  onStartMatch: (category: ChallengeCategory | 'all') => void;
  onOpenCreate: () => void;
  onOpenLeaderboard: () => void;
  onOpenProfile: () => void;
}

export const Lobby: React.FC<LobbyProps> = ({
  userProfile,
  totalChallengesCount,
  onStartMatch,
  onOpenCreate,
  onOpenLeaderboard,
  onOpenProfile
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ChallengeCategory | 'all'>('all');

  const categories: { id: ChallengeCategory | 'all'; label: string; icon: string }[] = [
    { id: 'all', label: 'Tất Cả Lĩnh Vực', icon: '🌌' },
    { id: 'science', label: 'Khoa Học Tự Nhiên', icon: '🔬' },
    { id: 'ai_tech', label: 'AI & Công Nghệ', icon: '💻' },
    { id: 'health', label: 'Y Tế & Đời Sống', icon: '🧬' },
    { id: 'space_environment', label: 'Vũ Trụ & Môi Trường', icon: '🚀' },
  ];

  const handleStart = () => {
    sound.playLock();
    onStartMatch(selectedCategory);
  };

  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-10 animate-fade-in">
      
      {/* Hero Arena Section */}
      <div className="relative rounded-3xl glass-panel-glow border border-cyan-500/40 p-8 sm:p-12 bg-gradient-to-br from-slate-950 via-slate-900/90 to-blue-950/70 shadow-[0_0_60px_rgba(6,182,212,0.25)] overflow-hidden text-center sm:text-left">
        
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-4">
          
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-cyan-950/90 border border-cyan-400/50 text-cyan-300 text-xs font-orbitron font-bold tracking-widest shadow-[0_0_15px_rgba(6,182,212,0.4)]">
            <span>CHUẨN ĐẤU TRƯỜNG EIU ARENA</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-orbitron font-black text-white tracking-wide leading-tight">
            INFOR ARENA
            <span className="block bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400 bg-clip-text text-transparent mt-1">
              ĐẤU TRƯỜNG THÔNG TIN
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            Bước vào sàn đấu phản biện học đường: Đọc thông tin, chọn % tin tưởng ban đầu, tiếp cận dữ liệu xác thực trực tiếp từ các cơ quan chuyên môn uy tín hàng đầu Việt Nam (Bộ Y tế, Bệnh viện Bạch Mai, Viện Hàn lâm KH&CN, Trung tâm NCSC...) và đánh giá lại độ chuẩn xác của nhận thức!
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={handleStart}
              className="w-full sm:w-auto py-4 px-8 rounded-2xl font-orbitron font-black text-base uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400 hover:shadow-[0_0_35px_rgba(6,182,212,0.8)] hover:scale-103 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer group"
            >
              <Play className="w-5 h-5 fill-slate-950 group-hover:scale-110 transition-transform" />
              <span>BẮT ĐẦU VÀO ĐẤU TRƯỜNG</span>
            </button>

            <button
              onClick={() => {
                sound.playClick();
                onOpenProfile();
              }}
              className="w-full sm:w-auto py-4 px-6 rounded-2xl font-orbitron font-bold text-sm uppercase tracking-wider text-cyan-300 bg-slate-900/80 border border-cyan-500/40 hover:bg-slate-800 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Brain className="w-4 h-4 text-cyan-400" />
              <span>HỒ SƠ & ĐÁNH GIÁ NĂNG LỰC</span>
            </button>

            <button
              onClick={() => {
                sound.playClick();
                onOpenLeaderboard();
              }}
              className="w-full sm:w-auto py-4 px-6 rounded-2xl font-orbitron font-bold text-sm uppercase tracking-wider text-amber-300 bg-slate-900/80 border border-amber-500/40 hover:bg-slate-800 hover:border-amber-400 hover:shadow-[0_0_20px_rgba(251,191,36,0.3)] transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Trophy className="w-4 h-4 text-amber-400" />
              <span>BẢNG XẾP HẠNG</span>
            </button>

            <button
              onClick={() => {
                sound.playClick();
                onOpenCreate();
              }}
              className="w-full sm:w-auto py-4 px-6 rounded-2xl font-orbitron font-bold text-sm uppercase tracking-wider text-slate-300 bg-slate-900/80 border border-slate-700 hover:border-cyan-400/50 hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
            >
              <PlusCircle className="w-4 h-4" />
              <span>THÊM TÌNH HUỐNG MỚI</span>
            </button>
          </div>

        </div>

      </div>

      {/* 3 Overview Quick Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        
        <div className="p-5 rounded-2xl glass-panel border border-cyan-500/20 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-400/40 flex items-center justify-center text-cyan-400 shrink-0">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Tổng Điểm Tích Lũy</div>
            <div className="text-xl sm:text-2xl font-orbitron font-extrabold text-cyan-300">
              {userProfile.totalScore.toLocaleString()} <span className="text-xs text-slate-400 font-sans">ĐIỂM</span>
            </div>
          </div>
        </div>

        <div className="p-5 rounded-2xl glass-panel border border-orange-500/20 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-orange-950/80 border border-orange-400/40 flex items-center justify-center text-orange-400 shrink-0">
            <Flame className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Chuỗi Thắng Cao Nhất</div>
            <div className="text-xl sm:text-2xl font-orbitron font-extrabold text-orange-400">
              {userProfile.maxStreak || userProfile.currentStreak} <span className="text-xs text-slate-400 font-sans">CÂU LIÊN TIẾP</span>
            </div>
          </div>
        </div>

        <div className="p-5 rounded-2xl glass-panel border border-blue-500/20 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-950/80 border border-blue-400/40 flex items-center justify-center text-blue-400 shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Kho Thử Thách Độc Bản</div>
            <div className="text-xl sm:text-2xl font-orbitron font-extrabold text-blue-300">
              {totalChallengesCount} <span className="text-xs text-slate-400 font-sans">TÌNH HUỐNG (ĐỔI MỚI)</span>
            </div>
          </div>
        </div>

      </div>

      {/* Category Selection Filter */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-orbitron font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <span>CHỌN LĨNH VỰC THI ĐẤU</span>
          </h3>
          <span className="text-xs text-slate-400">
            Chọn chủ đề hoặc thi đấu tổng hợp
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                type="button"
                key={cat.id}
                onClick={() => {
                  sound.playClick();
                  setSelectedCategory(cat.id);
                }}
                className={`p-3.5 rounded-xl border text-left transition-all duration-200 flex flex-col gap-1.5 ${
                  isSelected
                    ? 'bg-cyan-950/70 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)] scale-102 ring-1 ring-cyan-400'
                    : 'bg-slate-900/70 border-slate-800 hover:border-slate-700 text-slate-300'
                }`}
              >
                <span className="text-2xl">{cat.icon}</span>
                <span className={`text-xs font-bold leading-tight ${isSelected ? 'text-cyan-300' : 'text-slate-200'}`}>
                  {cat.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
};
