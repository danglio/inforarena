import React, { useState } from 'react';
import { Challenge, IntuitionPercent } from '../types/arena';
import { sound } from '../utils/sound';
import { 
  Lock, 
  ShieldCheck, 
  ExternalLink, 
  Sparkles, 
  TrendingDown, 
  TrendingUp, 
  Minus, 
  Building2,
  FileText
} from 'lucide-react';

interface Step2VerificationProps {
  challenge: Challenge;
  lockedIntuition: IntuitionPercent;
  onReevaluate: (reevaluatedPercent: IntuitionPercent) => void;
}

export const Step2Verification: React.FC<Step2VerificationProps> = ({
  challenge,
  lockedIntuition,
  onReevaluate
}) => {
  const [selectedPercent, setSelectedPercent] = useState<IntuitionPercent | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const percents: IntuitionPercent[] = [0, 25, 50, 75, 100];

  const percentLabels: Record<IntuitionPercent, { title: string; desc: string }> = {
    0: { title: '0%', desc: 'Bác bỏ hoàn toàn' },
    25: { title: '25%', desc: 'Nghi ngờ cao' },
    50: { title: '50%', desc: 'Lưỡng lự / Chưa rõ' },
    75: { title: '75%', desc: 'Khá tin tưởng' },
    100: { title: '100%', desc: 'Tin tuyệt đối' }
  };

  const handleSelect = (p: IntuitionPercent) => {
    sound.playClick(400 + p * 4);
    setSelectedPercent(p);
  };

  const handleConfirm = () => {
    if (selectedPercent === null || isSubmitting) return;
    setIsSubmitting(true);
    sound.playLock();
    setTimeout(() => {
      onReevaluate(selectedPercent);
    }, 400);
  };

  // Nguồn xác thực chuẩn
  const verifiedFact = challenge.verifiedFact || {
    sourceName: challenge.verifiedSources?.[0]?.name || 'Cơ Quan Thẩm Quyền Quốc Tế',
    sourceDomain: challenge.verifiedSources?.[0]?.domain || 'who.int',
    sourceUrl: challenge.verifiedSources?.[0]?.url || 'https://www.who.int',
    factQuote: challenge.trapExplanation,
    coreConclusion: challenge.keyFlawOrProof
  };

  // Tính mức độ thay đổi niềm tin
  const beliefShift = selectedPercent !== null ? selectedPercent - lockedIntuition : null;

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6 animate-fade-in">
      
      {/* Step Indicator Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-2">
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-teal-500/20 border border-teal-400 flex items-center justify-center font-orbitron font-bold text-xs text-teal-300 shadow-[0_0_10px_#14b8a6]">
            02
          </span>
          <span className="font-orbitron font-bold text-xs uppercase tracking-wider text-teal-300">
            BƯỚC 2: ĐỐI CHIẾU NGUỒN CHÍNH THỐNG & ĐÁNH GIÁ LẠI
          </span>
        </div>

        {/* Locked Intuition Indicator */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950 border border-cyan-400/60 text-cyan-300 text-xs font-orbitron font-bold shadow-[0_0_15px_rgba(6,182,212,0.25)]">
          <Lock className="w-3.5 h-3.5 text-cyan-400" />
          <span>TRỰC GIÁC BAN ĐẦU: {lockedIntuition}% TIN TƯỞNG</span>
        </div>
      </div>

      {/* Main Container Card */}
      <div className="relative rounded-2xl glass-panel-glow border border-teal-500/30 p-6 sm:p-8 bg-slate-900/90 shadow-[0_0_45px_rgba(20,184,166,0.18)] space-y-6">
        
        {/* Compact Review of Original Statement */}
        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
          <div className="text-[11px] font-orbitron font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1 mb-1.5">
            <FileText className="w-3.5 h-3.5 text-slate-400" />
            Nhận định ban đầu cần kiểm chứng
          </div>
          <div className="text-sm font-medium text-slate-200 italic leading-relaxed">
            "{challenge.statement}"
          </div>
          <div className="mt-2 text-xs font-medium">
            {(challenge.labelType === 'ai_false' || challenge.labelType === 'ai_true') && (
              <span className="text-cyan-400">(AI tạo)</span>
            )}
            {(challenge.labelType === 'human_false' || challenge.labelType === 'human_true') && (
              <span className="text-amber-400">(Người tạo)</span>
            )}
            {challenge.labelType === 'none' && (
              <span className="text-slate-400">(Nguồn mở)</span>
            )}
          </div>
        </div>

        {/* PROMINENT OFFICIAL EVIDENCE DOSSIER CARD */}
        <div className="relative rounded-xl border border-teal-400/50 bg-gradient-to-br from-teal-950/40 via-slate-950/90 to-cyan-950/40 p-5 sm:p-6 shadow-[0_0_30px_rgba(20,184,166,0.15)] overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header of Dossier */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3.5 pb-3 border-b border-teal-500/20">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-teal-500/20 border border-teal-400/60 flex items-center justify-center text-teal-300">
                <ShieldCheck className="w-4 h-4 text-teal-300" />
              </div>
              <div>
                <span className="text-xs font-orbitron font-extrabold text-teal-300 tracking-wider uppercase block">
                  HỒ SƠ XÁC THỰC TỪ CƠ QUAN CHUYÊN MÔN
                </span>
                <span className="text-[11px] text-slate-400">
                  Dữ liệu thực nghiệm & số liệu khoa học chính thức
                </span>
              </div>
            </div>

            {/* Authority Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-teal-950/80 border border-teal-400/50 text-teal-200 text-xs font-semibold">
              <Building2 className="w-3.5 h-3.5 text-teal-300" />
              <span>{verifiedFact.sourceName}</span>
            </div>
          </div>

          {/* Official Quote */}
          <div className="space-y-3">
            <div className="p-3.5 rounded-lg bg-slate-950/70 border border-teal-500/25">
              <div className="text-[11px] font-semibold text-teal-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                Trích dẫn kết luận khoa học chuẩn xác:
              </div>
              <p className="text-sm text-slate-100 font-medium leading-relaxed">
                "{verifiedFact.factQuote}"
              </p>
            </div>

            {/* Core Conclusion */}
            {verifiedFact.coreConclusion && (
              <div className="flex items-start gap-2 text-xs text-teal-200/90 bg-teal-950/30 p-2.5 rounded-lg border border-teal-500/20">
                <span className="font-bold shrink-0 text-teal-300">📌 Điểm then chốt:</span>
                <span>{verifiedFact.coreConclusion}</span>
              </div>
            )}

            {/* Link to Official Source */}
            <div className="flex justify-end pt-1">
              <a
                href={verifiedFact.sourceUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playClick(600)}
                className="inline-flex items-center gap-1.5 text-xs text-teal-300 hover:text-teal-100 underline decoration-teal-500/50 hover:decoration-teal-300 transition-colors"
              >
                <span>Xem tài liệu gốc ({verifiedFact.sourceDomain})</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* RE-EVALUATION INTERACTIVE SECTION */}
        <div className="space-y-4 pt-2">
          <div className="text-center space-y-1">
            <label className="block text-sm sm:text-base font-orbitron font-extrabold text-white tracking-wide">
              BẠN ĐÁNH GIÁ LẠI MỨC ĐỘ TIN TƯỞNG LÀ BAO NHIÊU %?
            </label>
            <p className="text-xs text-slate-300 max-w-xl mx-auto">
              Sau khi đối chiếu với thông tin khoa học chuẩn xác từ <b>{verifiedFact.sourceName}</b> ở trên, mức độ tin tưởng của bạn vào nhận định ban đầu hiện tại là bao nhiêu?
            </p>
          </div>

          {/* Percent Option Buttons */}
          <div className="grid grid-cols-5 gap-2 sm:gap-3">
            {percents.map((p) => {
              const isSelected = selectedPercent === p;
              return (
                <button
                  key={p}
                  type="button"
                  onClick={() => handleSelect(p)}
                  className={`relative flex flex-col items-center justify-center py-3.5 px-2 rounded-xl border transition-all duration-200 cursor-pointer active:scale-95 ${
                    isSelected
                      ? 'bg-gradient-to-b from-teal-500/30 to-cyan-600/30 border-teal-400 text-teal-200 shadow-[0_0_20px_rgba(20,184,166,0.6)] scale-103 ring-2 ring-teal-400/50'
                      : 'bg-slate-950/70 border-slate-700/80 text-slate-300 hover:border-teal-400/50 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  <span className="font-orbitron font-black text-base sm:text-xl">
                    {p}%
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-center font-medium line-clamp-1 mt-0.5 opacity-80">
                    {percentLabels[p].desc}
                  </span>
                  {isSelected && (
                    <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full bg-teal-400 shadow-[0_0_8px_#2dd4bf]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Real-time Belief Shift Feedback Badge */}
          {selectedPercent !== null && beliefShift !== null && (
            <div className="flex justify-center pt-2 animate-scale-up">
              {beliefShift < 0 && (
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-950/70 border border-emerald-500/50 text-emerald-300 text-xs sm:text-sm font-semibold shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                  <TrendingDown className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    Bạn đã <b>giảm {Math.abs(beliefShift)}%</b> niềm tin (Từ {lockedIntuition}% ➔ {selectedPercent}%). Phản ứng điều chỉnh rất tích cực trước dữ liệu!
                  </span>
                </div>
              )}
              {beliefShift > 0 && (
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-950/70 border border-cyan-500/50 text-cyan-300 text-xs sm:text-sm font-semibold shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                  <TrendingUp className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>
                    Bạn đã <b>tăng {beliefShift}%</b> niềm tin (Từ {lockedIntuition}% ➔ {selectedPercent}%). Củng cố nhận thức sau khi xác thực!
                  </span>
                </div>
              )}
              {beliefShift === 0 && (
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-950/70 border border-amber-500/50 text-amber-300 text-xs sm:text-sm font-semibold shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                  <Minus className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>
                    Bạn <b>giữ nguyên {lockedIntuition}%</b> niềm tin ban đầu.
                  </span>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Submit Confirmation Button */}
        <div className="pt-4 flex justify-center border-t border-slate-800">
          <button
            type="button"
            disabled={selectedPercent === null || isSubmitting}
            onClick={handleConfirm}
            className={`w-full sm:w-auto min-w-[320px] py-4 px-8 rounded-xl font-orbitron font-extrabold text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-3 ${
              selectedPercent !== null
                ? 'bg-gradient-to-r from-teal-400 via-cyan-300 to-blue-500 text-slate-950 shadow-[0_0_30px_rgba(20,184,166,0.6)] hover:shadow-[0_0_40px_rgba(20,184,166,0.9)] hover:scale-102 active:scale-95 cursor-pointer'
                : 'bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed opacity-60'
            }`}
          >
            CHỐT ĐÁNH GIÁ & XEM KẾT QUẢ ĐỐI CHIẾU (BƯỚC 3)
          </button>
        </div>

      </div>

    </div>
  );
};
