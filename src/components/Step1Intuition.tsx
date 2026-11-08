import React, { useState } from 'react';
import { Challenge, IntuitionPercent } from '../types/arena';
import { sound } from '../utils/sound';
import { Lock, ShieldAlert } from 'lucide-react';

interface Step1IntuitionProps {
  challenge: Challenge;
  onLockIntuition: (percent: IntuitionPercent) => void;
}

export const Step1Intuition: React.FC<Step1IntuitionProps> = ({
  challenge,
  onLockIntuition
}) => {
  const [selectedPercent, setSelectedPercent] = useState<IntuitionPercent | null>(null);
  const [isLocking, setIsLocking] = useState(false);

  const percents: IntuitionPercent[] = [0, 25, 50, 75, 100];

  const handleSelect = (p: IntuitionPercent) => {
    sound.playClick(400 + p * 4);
    setSelectedPercent(p);
  };

  const handleLock = () => {
    if (selectedPercent === null || isLocking) return;
    setIsLocking(true);
    sound.playLock();
    setTimeout(() => {
      onLockIntuition(selectedPercent);
    }, 450);
  };

  const isAi = challenge.labelType === 'ai_false' || challenge.labelType === 'ai_true';
  const isHuman = challenge.labelType === 'human_false' || challenge.labelType === 'human_true';

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6 animate-fade-in">
      
      {/* Step Indicator Header */}
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-400 flex items-center justify-center font-orbitron font-bold text-xs text-cyan-300 shadow-[0_0_10px_#22d3ee]">
            01
          </span>
          <span className="font-orbitron font-bold text-xs uppercase tracking-wider text-cyan-300">
            BƯỚC 1: CẢM QUAN BAN ĐẦU (TRỰC GIÁC)
          </span>
        </div>
        <span className="text-xs text-slate-400 flex items-center gap-1">
          <ShieldAlert className="w-3.5 h-3.5 text-cyan-400" />
          Bắt buộc chọn & khóa để tiếp tục
        </span>
      </div>

      {/* Main Challenge Card */}
      <div className="relative rounded-2xl glass-panel-glow border border-cyan-500/30 p-6 sm:p-8 bg-slate-900/80 shadow-[0_0_40px_rgba(6,182,212,0.15)] overflow-hidden">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-800 text-cyan-300 border border-slate-700">
            {challenge.category === 'science' && 'Khoa Học Tự Nhiên'}
            {challenge.category === 'ai_tech' && 'AI & Công Nghệ'}
            {challenge.category === 'health' && 'Y Tế & Sức Khỏe'}
            {challenge.category === 'space_environment' && 'Vũ Trụ & Môi Trường'}
            {challenge.category === 'general' && 'Đời Sống & Tổng Hợp'}
          </span>
        </div>

        {/* Statement Title */}
        <h3 className="text-lg sm:text-xl font-bold text-white mb-4 leading-snug tracking-tight">
          {challenge.title}
        </h3>

        {/* Big Statement Block with clean (AI tạo) or (Người tạo) underneath */}
        <div className="relative p-5 sm:p-6 rounded-xl bg-slate-950/80 border border-cyan-500/30 mb-6 text-slate-100 leading-relaxed">
          <div className="text-sm sm:text-base italic font-medium">
            "{challenge.statement}"
          </div>
          <div className="mt-3 text-xs font-medium">
            {isAi && (
              <span className="text-cyan-400">(AI tạo)</span>
            )}
            {isHuman && (
              <span className="text-amber-400">(Người tạo)</span>
            )}
            {!isAi && !isHuman && (
              <span className="text-slate-400">(Nguồn mở)</span>
            )}
          </div>
        </div>

        {/* The 5 Fixed Intuition Percentages */}
        <div className="space-y-3">
          <label className="block text-xs font-orbitron font-bold text-cyan-300 uppercase tracking-wider text-center sm:text-left">
            BẠN TIN TƯỞNG THÔNG TIN NÀY BAO NHIÊU % DỰA VÀO CẢM QUAN BAN ĐẦU?
          </label>

          <div className="grid grid-cols-5 gap-2 sm:gap-3">
            {percents.map((p) => {
              const isSelected = selectedPercent === p;
              return (
                <button
                  type="button"
                  key={p}
                  onClick={() => handleSelect(p)}
                  className={`py-3 sm:py-4 px-1 rounded-xl font-orbitron font-extrabold text-sm sm:text-lg border transition-all duration-200 flex flex-col items-center justify-center gap-1 active:scale-95 cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-b from-cyan-400 to-blue-600 border-cyan-300 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.8)] scale-105'
                      : 'bg-slate-950/80 border-slate-700/80 text-slate-300 hover:border-cyan-500/50 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  <span>{p}%</span>
                  <span className="text-[9px] sm:text-[10px] font-sans font-medium opacity-80">
                    {p === 0 && 'Tuyệt đối sai'}
                    {p === 25 && 'Nghi ngờ cao'}
                    {p === 50 && 'Phân vân'}
                    {p === 75 && 'Khá tin tưởng'}
                    {p === 100 && 'Tin chắc 100%'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Lock Action Button */}
        <div className="mt-8 pt-4 border-t border-slate-800 flex justify-center">
          <button
            type="button"
            disabled={selectedPercent === null || isLocking}
            onClick={handleLock}
            className={`w-full sm:w-auto min-w-[280px] py-3.5 px-8 rounded-xl font-orbitron font-extrabold text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-3 ${
              selectedPercent !== null
                ? 'bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 text-slate-950 shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:shadow-[0_0_40px_rgba(6,182,212,0.9)] hover:scale-102 active:scale-95 cursor-pointer'
                : 'bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed opacity-60'
            }`}
          >
            <Lock className={`w-4 h-4 ${isLocking ? 'animate-spin' : ''}`} />
            {isLocking ? 'ĐANG KHÓA KẾT QUẢ...' : selectedPercent !== null ? `KHÓA MỨC TIN ${selectedPercent}% & TIẾP TỤC` : 'HÃY CHỌN % ĐỂ TIẾP TỤC'}
          </button>
        </div>

      </div>

    </div>
  );
};
