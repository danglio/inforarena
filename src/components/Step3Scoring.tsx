import React, { useEffect } from 'react';
import { Challenge, RoundResult } from '../types/arena';
import { sound } from '../utils/sound';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, 
  XCircle, 
  ShieldAlert, 
  User, 
  ExternalLink, 
  ArrowRight,
  Trophy,
  TrendingDown,
  TrendingUp,
  Minus,
  Sparkles,
  BrainCircuit
} from 'lucide-react';

interface Step3ScoringProps {
  challenge: Challenge;
  roundResult: RoundResult;
  onNextRound: () => void;
  isLastRound: boolean;
}

export const Step3Scoring: React.FC<Step3ScoringProps> = ({
  challenge,
  roundResult,
  onNextRound,
  isLastRound
}) => {
  useEffect(() => {
    if (roundResult.isVerdictCorrect) {
      sound.playCorrect();
      confetti({
        particleCount: 70,
        spread: 75,
        origin: { y: 0.6 }
      });
    } else {
      sound.playWrong();
    }
  }, [roundResult.isVerdictCorrect]);

  const verifiedFact = challenge.verifiedFact || {
    sourceName: challenge.verifiedSources?.[0]?.name || 'Cơ Quan Thẩm Quyền Quốc Tế',
    sourceDomain: challenge.verifiedSources?.[0]?.domain || 'who.int',
    sourceUrl: challenge.verifiedSources?.[0]?.url || 'https://www.who.int',
    factQuote: challenge.trapExplanation,
    coreConclusion: challenge.keyFlawOrProof
  };

  const beliefShift = roundResult.beliefShift ?? (roundResult.reevaluatedPercent - roundResult.intuitionPercent);

  // Nhận xét khoa học hành vi về sự điều chỉnh nhận thức
  const renderCognitiveAnalysis = () => {
    const isActuallyTrue = challenge.isActuallyTrue;
    const initial = roundResult.intuitionPercent;
    const final = roundResult.reevaluatedPercent;

    // Trường hợp 1: Thông tin là SAI
    if (!isActuallyTrue) {
      if (initial >= 50 && final <= 25) {
        return {
          title: '🌟 PHẢN ỨNG THÍCH ỨNG NHẬN THỨC XUẤT SẮC!',
          desc: `Ban đầu bạn dành ${initial}% tin tưởng cho nhận định này, nhưng ngay khi tiếp cận báo cáo chính thống từ ${verifiedFact.sourceName}, bạn đã dũng cảm hạ xuống ${final}%. Bạn sở hữu tư duy phản biện cởi mở và không bị định kiến chi phối!`,
          type: 'success'
        };
      }
      if (initial <= 25 && final <= 25) {
        return {
          title: '🛡️ SẮC BÉN TOÀN DIỆN TỪ ĐẦU ĐẾN CUỐI!',
          desc: `Bạn đã tỉnh táo nhận ra điểm bất thường ngay từ Bước 1 (${initial}%), và số liệu chính thức của ${verifiedFact.sourceName} ở Bước 2 hoàn toàn khẳng định phán đoán chuẩn xác của bạn.`,
          type: 'success'
        };
      }
      if (final >= 50) {
        return {
          title: '⚠️ CẢNH BÁO BẪY TÂM LÝ: BẢO THỦ NHẬN THỨC (CỐ CHẤP BÁM VÀO TIN SAI)!',
          desc: `Dù đã đọc thông tin xác thực từ ${verifiedFact.sourceName}, bạn vẫn giữ mức tin tưởng cao (${final}%) vào nhận định sai lệch ban đầu. Hãy cẩn trọng trước xu hướng cố bám víu vào ấn tượng đầu tiên!`,
          type: 'danger'
        };
      }
    }

    // Trường hợp 2: Thông tin là ĐÚNG
    if (isActuallyTrue) {
      if (initial <= 50 && final >= 75) {
        return {
          title: '🌟 TIẾP THU BẰNG CHỨNG & CỦNG CỐ NIỀM TIN ĐÚNG ĐẮN!',
          desc: `Ban đầu bạn thận trọng ngờ vực (${initial}%), nhưng sau khi đọc dẫn chứng thực nghiệm từ ${verifiedFact.sourceName}, bạn đã nâng mức tin tưởng lên ${final}%. Đây là phẩm chất quan trọng của người làm khoa học!`,
          type: 'success'
        };
      }
      if (initial >= 75 && final >= 75) {
        return {
          title: '🎯 TRỰC GIÁC & PHÂN TÍCH ĐẠT ĐỘ CHUẨN XÁC TUYỆT ĐỐI!',
          desc: `Bạn vừa có trực giác xuất sắc từ bước đầu (${initial}%), vừa vững vàng xác thực chuẩn mực qua tài liệu của ${verifiedFact.sourceName}.`,
          type: 'success'
        };
      }
      if (final < 50) {
        return {
          title: '⚠️ CẢNH BÁO BẪY TÂM LÝ: HOÀI NGHI THÁI QUÁ!',
          desc: `Đây là thông tin khoa học đã được ${verifiedFact.sourceName} công bố chính thức, nhưng bạn vẫn còn quá ngờ vực (${final}%). Sự hoài nghi là tốt nhưng cần dựa trên bằng chứng cụ thể.`,
          type: 'warning'
        };
      }
    }

    return {
      title: '⚖️ ĐIỀU CHỈNH TRUNG LẬP',
      desc: `Bạn duy trì quan điểm thận trọng với mức tin tưởng ${final}%.`,
      type: 'neutral'
    };
  };

  const cognitiveInsight = renderCognitiveAnalysis();

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6 animate-fade-in">
      
      {/* Header Banner */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-2">
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-400 flex items-center justify-center font-orbitron font-bold text-xs text-cyan-300 shadow-[0_0_10px_#22d3ee]">
            03
          </span>
          <span className="font-orbitron font-bold text-xs uppercase tracking-wider text-cyan-300">
            BƯỚC 3: ĐỐI CHIẾU NHẬN THỨC & GIẢI MÃ BẪY TÂM LÝ
          </span>
        </div>

        <div className="font-orbitron font-extrabold text-sm text-cyan-300 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950 border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
          <Trophy className="w-4 h-4 text-amber-400" />
          <span>+{roundResult.totalRoundPoints} ĐIỂM</span>
        </div>
      </div>

      {/* Main Score Result Card */}
      <div className="relative rounded-2xl glass-panel-glow border border-cyan-500/30 p-6 sm:p-8 bg-slate-900/90 shadow-[0_0_50px_rgba(6,182,212,0.2)] space-y-6">
        
        {/* Victory or Defeat Banner */}
        <div className={`p-4 rounded-xl border flex items-center gap-4 ${
          roundResult.isVerdictCorrect
            ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.2)]'
            : 'bg-rose-950/40 border-rose-500/50 text-rose-300 shadow-[0_0_20px_rgba(244,63,94,0.2)]'
        }`}>
          {roundResult.isVerdictCorrect ? (
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-7 h-7 text-emerald-400 animate-pulse" />
            </div>
          ) : (
            <div className="w-12 h-12 rounded-xl bg-rose-500/20 border border-rose-400 flex items-center justify-center shrink-0">
              <XCircle className="w-7 h-7 text-rose-400 animate-pulse" />
            </div>
          )}

          <div>
            <div className="font-orbitron font-extrabold text-base sm:text-lg">
              {roundResult.isVerdictCorrect 
                ? 'ĐIỀU CHỈNH NHẬN THỨC CHÍNH XÁC! XÁC THỰC THÀNH CÔNG'
                : 'CHƯA ĐIỀU CHỈNH CHÍNH XÁC! HÃY RÚT KINH NGHIỆM'}
            </div>
            <div className="text-xs text-slate-300 mt-0.5">
              Thực tế nhận định ban đầu là: <b className={challenge.isActuallyTrue ? 'text-emerald-400 font-orbitron' : 'text-rose-400 font-orbitron'}>
                {challenge.isActuallyTrue ? '[THÔNG TIN ĐÚNG ✅]' : '[THÔNG TIN SAI ❌]'}
              </b>
            </div>
          </div>
        </div>

        {/* BẢNG ĐỐI CHIẾU 2 LẦN CHỌN % (BEFORE VS AFTER CALIBRATION) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
          
          {/* Lần 1: Trực giác ban đầu */}
          <div className="p-4 rounded-xl bg-slate-950/80 border border-cyan-500/20">
            <span className="text-[10px] font-orbitron font-semibold uppercase tracking-wider text-slate-400 block mb-1">
              BƯỚC 1: TRỰC GIÁC BAN ĐẦU
            </span>
            <div className="text-xl font-orbitron font-black text-cyan-300">
              {roundResult.intuitionPercent}%
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              Điểm trực giác: <b className="text-cyan-300">+{roundResult.intuitionScore} ĐIỂM</b>
            </p>
          </div>

          {/* Dịch chuyển nhận thức (Delta Shift) */}
          <div className="p-3 rounded-xl bg-slate-950/90 border border-slate-700/80 text-center flex flex-col items-center justify-center space-y-1">
            <span className="text-[10px] font-orbitron font-semibold uppercase tracking-wider text-slate-400">
              CHUYỂN BIẾN NIỀM TIN
            </span>
            <div className="flex items-center gap-1.5">
              {beliefShift < 0 && (
                <div className="inline-flex items-center gap-1 font-orbitron font-extrabold text-emerald-400 text-base">
                  <TrendingDown className="w-4 h-4" />
                  <span>GIẢM {Math.abs(beliefShift)}%</span>
                </div>
              )}
              {beliefShift > 0 && (
                <div className="inline-flex items-center gap-1 font-orbitron font-extrabold text-cyan-400 text-base">
                  <TrendingUp className="w-4 h-4" />
                  <span>TĂNG {beliefShift}%</span>
                </div>
              )}
              {beliefShift === 0 && (
                <div className="inline-flex items-center gap-1 font-orbitron font-extrabold text-amber-400 text-base">
                  <Minus className="w-4 h-4" />
                  <span>GIỮ NGUYÊN</span>
                </div>
              )}
            </div>
            <span className="text-[10px] text-slate-400">
              {roundResult.bonusPoints > 0 ? `Thưởng chuyển biến: +${roundResult.bonusPoints} ĐIỂM` : 'Đối chiếu khoa học'}
            </span>
          </div>

          {/* Lần 2: Đánh giá lại sau khi đọc nguồn */}
          <div className="p-4 rounded-xl bg-slate-950/80 border border-teal-500/30">
            <span className="text-[10px] font-orbitron font-semibold uppercase tracking-wider text-teal-400 block mb-1">
              BƯỚC 2: SAU KHI ĐỌC NGUỒN
            </span>
            <div className="text-xl font-orbitron font-black text-teal-300">
              {roundResult.reevaluatedPercent}%
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              Điểm xác thực: <b className="text-teal-300">+{roundResult.verdictScore} ĐIỂM</b>
            </p>
          </div>

        </div>

        {/* NHẬN XÉT HÀNH VI / TÂM LÝ NHẬN THỨC (COGNITIVE PLASTICITY) */}
        <div className={`p-4 rounded-xl border space-y-1.5 ${
          cognitiveInsight.type === 'success' 
            ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-200' 
            : cognitiveInsight.type === 'danger'
            ? 'bg-rose-950/30 border-rose-500/40 text-rose-200'
            : 'bg-amber-950/30 border-amber-500/40 text-amber-200'
        }`}>
          <div className="flex items-center gap-2 font-orbitron font-bold text-xs uppercase tracking-wide">
            <BrainCircuit className="w-4 h-4 shrink-0" />
            <span>{cognitiveInsight.title}</span>
          </div>
          <p className="text-xs leading-relaxed text-slate-200">
            {cognitiveInsight.desc}
          </p>
        </div>

        {/* GIẢI MÃ BẪY TÂM LÝ: Bẫy AI vs Bẫy Người Tạo */}
        <div className="p-5 rounded-xl bg-gradient-to-br from-slate-950 to-blue-950/50 border border-cyan-500/30 space-y-3">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-amber-400" />
            <h4 className="text-xs sm:text-sm font-orbitron font-bold text-white uppercase tracking-wider">
              GIẢI MÃ BẪY TÂM LÝ & SỰ THẬT KHOA HỌC
            </h4>
          </div>

          {/* Phân tích mắc bẫy AI */}
          {challenge.labelType === 'ai_false' && (
            <div className={`p-3 rounded-lg border text-xs leading-relaxed ${
              roundResult.fellIntoAiTrap
                ? 'bg-rose-950/40 border-rose-500/50 text-rose-200'
                : 'bg-emerald-950/40 border-emerald-500/50 text-emerald-200'
            }`}>
              <div className="font-bold mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                {roundResult.fellIntoAiTrap ? '⚠️ BẠN ĐÃ BỊ DẪN DẮT BỞI ẢO GIÁC AI!' : '🛡️ BẠN ĐÃ THOÁT BẪY ẢO GIÁC AI!'}
              </div>
              <p>{challenge.psychologicalDebunk}</p>
            </div>
          )}

          {/* Phân tích mắc bẫy Người tạo */}
          {challenge.labelType === 'human_false' && (
            <div className={`p-3 rounded-lg border text-xs leading-relaxed ${
              roundResult.fellIntoHumanTrap
                ? 'bg-rose-950/40 border-rose-500/50 text-rose-200'
                : 'bg-emerald-950/40 border-emerald-500/50 text-emerald-200'
            }`}>
              <div className="font-bold flex items-center gap-1.5 mb-1">
                <User className="w-4 h-4 text-amber-400" />
                {roundResult.fellIntoHumanTrap ? '⚠️ BẠN ĐÃ MẮC BẪY UY TÍN DANH XƯNG NGƯỜI TẠO!' : '🛡️ BẠN KHÔNG BỊ LỪA BỞI DANH XƯNG CHUYÊN GIA!'}
              </div>
              <p>{challenge.psychologicalDebunk}</p>
            </div>
          )}

          {/* Phân tích tâm lý tiếp nhận cho các câu khác */}
          {challenge.labelType !== 'ai_false' && challenge.labelType !== 'human_false' && challenge.psychologicalDebunk && (
            <div className="p-3 rounded-lg border border-cyan-500/30 bg-slate-950/60 text-xs text-slate-200 leading-relaxed">
              <div className="font-bold mb-1 flex items-center gap-1.5 text-cyan-300">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>💡 Góc nhìn tâm lý nhận thức:</span>
              </div>
              <p>{challenge.psychologicalDebunk}</p>
            </div>
          )}

          {/* Bản chất khoa học thực tế */}
          <div className="pt-2 text-xs text-slate-300 leading-relaxed">
            <span className="font-bold text-cyan-300">Bản chất khoa học: </span>
            {challenge.trapExplanation}
          </div>

          {/* Nguồn xác thực đối chiếu */}
          <div className="pt-2 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-400">Cơ quan thẩm quyền xác thực:</span>
              <span className="text-xs font-bold text-teal-300">{verifiedFact.sourceName}</span>
            </div>
            <a
              href={verifiedFact.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-200 hover:underline"
            >
              <span>Xem tài liệu gốc ({verifiedFact.sourceDomain})</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Continue Action Button */}
        <div className="pt-4 flex justify-center">
          <button
            type="button"
            onClick={() => {
              sound.playClick();
              onNextRound();
            }}
            className="w-full sm:w-auto min-w-[300px] py-4 px-8 rounded-xl font-orbitron font-extrabold text-sm tracking-wider uppercase bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 text-slate-950 shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:shadow-[0_0_40px_rgba(6,182,212,0.9)] hover:scale-102 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
          >
            <span>{isLastRound ? 'HOÀN THÀNH VÒNG ĐẤU & XEM HỒ SƠ' : 'TIẾP TỤC CÂU TIẾP THEO'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
};
