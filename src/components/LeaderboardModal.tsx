import React from 'react';
import { UserProfile } from '../types/arena';
import { sound } from '../utils/sound';
import { X, Flame, Trophy } from 'lucide-react';

interface LeaderboardModalProps {
  isOpen: boolean;
  currentUser: UserProfile;
  onClose: () => void;
}

interface LeaderboardEntry {
  rank: number;
  name: string;
  avatar: string;
  rankTitle: string;
  score: number;
  streak: number;
  accuracy: number;
  isCurrent?: boolean;
}

export const LeaderboardModal: React.FC<LeaderboardModalProps> = ({
  isOpen,
  currentUser,
  onClose
}) => {
  if (!isOpen) return null;

  // Mocked EIU Champions leaderboard combined with current player
  const mockEntries: LeaderboardEntry[] = [
    { rank: 1, name: 'GS. Minh Quân', avatar: '🧠 Trí Tuệ Sắc Bén', rankTitle: 'Đại Kiện Tướng Trí Tuệ', score: 9850, streak: 14, accuracy: 96 },
    { rank: 2, name: 'Lê Hoàng EIU', avatar: '⚡ Chiến Binh Số', rankTitle: 'Đại Kiện Tướng Trí Tuệ', score: 8420, streak: 11, accuracy: 92 },
    { rank: 3, name: 'Thảo Vy Quantum', avatar: '🎯 Xạ Thủ Phản Biện', rankTitle: 'Chuyên Gia Thẩm Định', score: 7190, streak: 9, accuracy: 89 },
    { rank: 4, name: 'Nguyễn Văn Fact', avatar: '🕵️ Thợ Săn Sự Thật', rankTitle: 'Chuyên Gia Thẩm Định', score: 5640, streak: 8, accuracy: 85 },
    { rank: 5, name: 'Trần Bách Khoa', avatar: '🔬 Nhà Khoa Học', rankTitle: 'Thợ Săn Bẫy AI', score: 4890, streak: 7, accuracy: 84 },
    { rank: 6, name: 'Hải Đăng Tech', avatar: '🔍 Thẩm Định Công Nghệ', rankTitle: 'Thợ Săn Bẫy AI', score: 3750, streak: 5, accuracy: 81 },
  ];

  // Insert current user into list based on score
  const allEntries: LeaderboardEntry[] = [
    ...mockEntries,
    {
      rank: 0,
      name: `${currentUser.name} (Bạn)`,
      avatar: currentUser.avatar,
      rankTitle: currentUser.rankTitle,
      score: currentUser.totalScore,
      streak: currentUser.maxStreak || currentUser.currentStreak,
      accuracy: 88,
      isCurrent: true
    }
  ].sort((a, b) => b.score - a.score).map((item, idx) => ({ ...item, rank: idx + 1 }));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-2xl glass-panel-glow border border-cyan-500/40 p-6 sm:p-8 bg-slate-950/95 shadow-[0_0_50px_rgba(6,182,212,0.3)] animate-scale-up overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            sound.playClick();
            onClose();
          }}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3.5 mb-6">
          <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-400/50 flex items-center justify-center text-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.4)]">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-orbitron font-extrabold text-white tracking-wide flex items-center gap-2">
              BẢNG VÀNG ĐẤU TRƯỜNG
              <span className="text-xs px-2 py-0.5 rounded bg-cyan-950 border border-cyan-500/40 text-cyan-300 font-sans font-semibold">
                EIU HALL OF FAME
              </span>
            </h2>
            <p className="text-xs text-slate-400">
              Vinh danh những bậc thầy phản biện và giải mã bẫy thông tin xuất sắc nhất
            </p>
          </div>
        </div>

        {/* Podium Top 3 */}
        <div className="grid grid-cols-3 gap-2.5 sm:gap-4 mb-6">
          {/* Rank 2 */}
          <div className="flex flex-col items-center p-3 rounded-xl bg-slate-900/80 border border-slate-400/30 text-center order-1 sm:order-1 mt-3">
            <div className="w-6 h-6 rounded-full bg-slate-300 text-slate-950 font-orbitron font-bold text-xs flex items-center justify-center mb-1">2</div>
            <div className="text-xl sm:text-2xl mb-1">{allEntries[1]?.avatar.split(' ')[0]}</div>
            <div className="text-xs font-bold text-white truncate w-full">{allEntries[1]?.name}</div>
            <div className="text-[11px] font-orbitron text-cyan-300 font-semibold">{allEntries[1]?.score} ĐIỂM</div>
          </div>

          {/* Rank 1 */}
          <div className="flex flex-col items-center p-3.5 rounded-xl bg-gradient-to-b from-amber-950/60 to-slate-900/90 border border-amber-400/50 text-center order-2 sm:order-2 shadow-[0_0_20px_rgba(251,191,36,0.25)]">
            <div className="w-7 h-7 rounded-full bg-amber-400 text-slate-950 font-orbitron font-extrabold text-sm flex items-center justify-center mb-1 shadow-md">1</div>
            <div className="text-2xl sm:text-3xl mb-1">{allEntries[0]?.avatar.split(' ')[0]}</div>
            <div className="text-xs sm:text-sm font-bold text-amber-300 truncate w-full">{allEntries[0]?.name}</div>
            <div className="text-xs font-orbitron text-amber-400 font-bold">{allEntries[0]?.score} ĐIỂM</div>
          </div>

          {/* Rank 3 */}
          <div className="flex flex-col items-center p-3 rounded-xl bg-slate-900/80 border border-amber-700/40 text-center order-3 sm:order-3 mt-5">
            <div className="w-6 h-6 rounded-full bg-amber-700 text-white font-orbitron font-bold text-xs flex items-center justify-center mb-1">3</div>
            <div className="text-xl sm:text-2xl mb-1">{allEntries[2]?.avatar.split(' ')[0]}</div>
            <div className="text-xs font-bold text-white truncate w-full">{allEntries[2]?.name}</div>
            <div className="text-[11px] font-orbitron text-cyan-300 font-semibold">{allEntries[2]?.score} ĐIỂM</div>
          </div>
        </div>

        {/* Scrollable List */}
        <div className="flex-1 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
          {allEntries.map((entry) => (
            <div
              key={entry.rank}
              className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
                entry.isCurrent
                  ? 'bg-cyan-950/50 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)] ring-1 ring-cyan-400'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`w-7 text-center font-orbitron font-bold text-sm ${
                  entry.rank === 1 ? 'text-amber-400' : entry.rank === 2 ? 'text-slate-300' : entry.rank === 3 ? 'text-amber-600' : 'text-slate-500'
                }`}>
                  #{entry.rank}
                </span>
                <span className="text-xl">{entry.avatar.split(' ')[0]}</span>
                <div>
                  <div className={`text-sm font-bold flex items-center gap-2 ${entry.isCurrent ? 'text-cyan-300' : 'text-white'}`}>
                    {entry.name}
                    {entry.isCurrent && (
                      <span className="text-[10px] uppercase font-orbitron px-1.5 py-0.2 rounded bg-cyan-500 text-slate-950 font-extrabold">
                        BẠN
                      </span>
                    )}
                  </div>
                  <div className="text-[10px] text-slate-400 flex items-center gap-2">
                    <span>{entry.rankTitle}</span>
                    <span>•</span>
                    <span className="flex items-center gap-0.5 text-orange-400 font-medium">
                      <Flame className="w-3 h-3" /> Chuỗi {entry.streak} câu
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="font-orbitron font-bold text-sm text-cyan-300">
                  {entry.score.toLocaleString()} <span className="text-[10px] text-slate-400">ĐIỂM</span>
                </div>
                <div className="text-[10px] text-emerald-400 font-medium">
                  {entry.accuracy}% độ chính xác
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-4 pt-3 border-t border-slate-800 text-center text-xs text-slate-500">
          Điểm số được cập nhật tự động sau mỗi vòng đấu kiểm chứng thành công.
        </div>
      </div>
    </div>
  );
};
