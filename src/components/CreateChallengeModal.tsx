import React, { useState } from 'react';
import { Challenge, ChallengeCategory, ChallengeLabelType } from '../types/arena';
import { sound } from '../utils/sound';
import { X, PlusCircle, Check, Bot, User, Globe } from 'lucide-react';

interface CreateChallengeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddChallenge: (challenge: Challenge) => void;
}

export const CreateChallengeModal: React.FC<CreateChallengeModalProps> = ({
  isOpen,
  onClose,
  onAddChallenge
}) => {
  const [title, setTitle] = useState('');
  const [statement, setStatement] = useState('');
  const [category, setCategory] = useState<ChallengeCategory>('science');
  const [sourceOrigin, setSourceOrigin] = useState<'ai' | 'human' | 'none'>('ai');
  const [labelAuthor, setLabelAuthor] = useState('');
  const [isActuallyTrue, setIsActuallyTrue] = useState<boolean>(true);
  const [trapExplanation, setTrapExplanation] = useState('');
  const [psychologicalDebunk, setPsychologicalDebunk] = useState('');
  const [keyFlawOrProof, setKeyFlawOrProof] = useState('');
  const [sourceName, setSourceName] = useState('');
  const [sourceUrl, setSourceUrl] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !statement.trim()) return;

    sound.playLock();

    // Tự động map sang labelType nội bộ chuẩn cho hệ thống chấm điểm và phân tích bẫy
    let labelType: ChallengeLabelType = 'none';
    let trapType: 'none' | 'human_bias' | 'ai_hallucination' = 'none';

    if (sourceOrigin === 'ai') {
      labelType = isActuallyTrue ? 'ai_true' : 'ai_false';
      if (!isActuallyTrue) trapType = 'ai_hallucination';
    } else if (sourceOrigin === 'human') {
      labelType = isActuallyTrue ? 'human_true' : 'human_false';
      if (!isActuallyTrue) trapType = 'human_bias';
    } else {
      labelType = 'none';
      trapType = 'none';
    }

    const newChallenge: Challenge = {
      id: 'custom-' + Date.now(),
      title: title.trim(),
      statement: statement.trim(),
      category,
      labelType,
      labelAuthor: labelAuthor.trim() || (sourceOrigin === 'ai' ? 'Trợ lý AI' : sourceOrigin === 'human' ? 'Chuyên gia nghiên cứu' : 'Nguồn tổng hợp'),
      isActuallyTrue,
      trapType,
      trapExplanation: trapExplanation.trim() || 'Thông tin đã được hội đồng thẩm định ghi nhận.',
      psychologicalDebunk: psychologicalDebunk.trim() || 'Cần chú ý cẩn trọng với các khẳng định thiếu căn cứ thực nghiệm.',
      keyFlawOrProof: keyFlawOrProof.trim() || 'Căn cứ các tài liệu tham chiếu chuyên ngành.',
      verifiedSources: [
        {
          name: sourceName.trim() || 'Nguồn Kiểm Chứng Khoa Học',
          url: sourceUrl.trim() || 'https://google.com',
          domain: sourceUrl.trim() ? new URL(sourceUrl.trim().startsWith('http') ? sourceUrl.trim() : `https://${sourceUrl.trim()}`).hostname : 'kiemchung.vn'
        }
      ],
      verifiedFact: {
        sourceName: sourceName.trim() || 'Cơ Quan Chuyên Môn Xác Thực',
        sourceDomain: sourceUrl.trim() ? new URL(sourceUrl.trim().startsWith('http') ? sourceUrl.trim() : `https://${sourceUrl.trim()}`).hostname : 'kiemchung.vn',
        sourceUrl: sourceUrl.trim() || 'https://google.com',
        factQuote: trapExplanation.trim() || 'Dữ liệu thực nghiệm xác thực từ tổ chức khoa học có thẩm quyền.',
        coreConclusion: keyFlawOrProof.trim() || 'Kết luận dựa trên các bằng chứng khoa học thực tế.'
      },
      difficulty: 'medium'
    };

    onAddChallenge(newChallenge);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 600);
  };

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
        <div className="flex items-center gap-3.5 mb-5">
          <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-400/50 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
            <PlusCircle className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-orbitron font-extrabold text-white tracking-wide">
              ĐÓNG GÓP TÌNH HUỐNG MỚI
            </h2>
            <p className="text-xs text-cyan-400">
              Tạo câu hỏi thử thách kiểm chứng thông tin thực tế cho Đấu Trường
            </p>
          </div>
        </div>

        {/* Scrollable Form */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto space-y-4 pr-1 custom-scrollbar">
          
          {/* Tiêu đề */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              Tiêu Đề Tình Huống *
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="VD: Hiện Tượng Lượng Tử Phá Vỡ Mã Hóa..."
              className="w-full px-4 py-2.5 bg-slate-900/90 border border-cyan-500/30 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400"
            />
          </div>

          {/* Nguồn Gốc Thông Tin - Chọn AI tạo hay Người tạo */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              Nguồn Gốc Nhận Định (Gắn dòng mở ngoặc nhỏ dưới câu) *
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  setSourceOrigin('ai');
                }}
                className={`py-2.5 px-3 rounded-xl border text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 ${
                  sourceOrigin === 'ai'
                    ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.4)] ring-1 ring-cyan-400'
                    : 'bg-slate-900/60 border-slate-700 text-slate-400 hover:border-slate-500'
                }`}
              >
                <Bot className="w-4 h-4 text-cyan-400" />
                <span>AI tạo (AI tạo)</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  setSourceOrigin('human');
                }}
                className={`py-2.5 px-3 rounded-xl border text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 ${
                  sourceOrigin === 'human'
                    ? 'bg-amber-500/20 border-amber-400 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.4)] ring-1 ring-amber-400'
                    : 'bg-slate-900/60 border-slate-700 text-slate-400 hover:border-slate-500'
                }`}
              >
                <User className="w-4 h-4 text-amber-400" />
                <span>Người tạo (Người tạo)</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  setSourceOrigin('none');
                }}
                className={`py-2.5 px-3 rounded-xl border text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 ${
                  sourceOrigin === 'none'
                    ? 'bg-slate-700/50 border-slate-400 text-slate-200 shadow-[0_0_15px_rgba(148,163,184,0.3)] ring-1 ring-slate-400'
                    : 'bg-slate-900/60 border-slate-700 text-slate-400 hover:border-slate-500'
                }`}
              >
                <Globe className="w-4 h-4 text-slate-400" />
                <span>Nguồn mở / Ẩn danh</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Lĩnh Vực */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Lĩnh Vực
              </label>
              <select
                value={category}
                onChange={e => setCategory(e.target.value as ChallengeCategory)}
                className="w-full px-4 py-2.5 bg-slate-900 border border-cyan-500/30 rounded-xl text-white text-sm focus:outline-none focus:border-cyan-400"
              >
                <option value="science">Khoa Học Tự Nhiên</option>
                <option value="ai_tech">AI & Công Nghệ</option>
                <option value="health">Y Tế & Sức Khỏe</option>
                <option value="space_environment">Vũ Trụ & Môi Trường</option>
                <option value="general">Đời Sống & Tổng Hợp</option>
              </select>
            </div>

            {/* Chi tiết nguồn / Tác giả cụ thể */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Chi Tiết Tác Giả / Mô Hình AI
              </label>
              <input
                type="text"
                value={labelAuthor}
                onChange={e => setLabelAuthor(e.target.value)}
                placeholder="VD: Trợ lý AI DeepSearch / GS. Nguyễn Văn A..."
                className="w-full px-4 py-2.5 bg-slate-900/90 border border-cyan-500/30 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400"
              />
            </div>
          </div>

          {/* Đoạn Thông Tin Cần Phản Biện */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              Đoạn Thông Tin Cần Đưa Ra Đấu Trường *
            </label>
            <textarea
              required
              rows={3}
              value={statement}
              onChange={e => setStatement(e.target.value)}
              placeholder="Nhập nội dung nhận định người chơi sẽ đọc và chọn % tin tưởng..."
              className="w-full px-4 py-2.5 bg-slate-900/90 border border-cyan-500/30 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400"
            />
            {/* Live Preview of Note underneath */}
            <div className="mt-1.5 text-xs">
              <span className="text-slate-400">Dòng mở ngoặc nhỏ người chơi nhìn thấy: </span>
              {sourceOrigin === 'ai' && <span className="text-cyan-400 font-medium">(AI tạo)</span>}
              {sourceOrigin === 'human' && <span className="text-amber-400 font-medium">(Người tạo)</span>}
              {sourceOrigin === 'none' && <span className="text-slate-400 font-medium">(Nguồn mở)</span>}
            </div>
          </div>

          {/* Bản Chất Sự Thật Khách Quan */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Bản Chất Sự Thật Khách Quan (Đáp Án Chuẩn) *
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  setIsActuallyTrue(true);
                }}
                className={`py-2.5 px-4 rounded-xl border text-sm font-bold transition-all ${
                  isActuallyTrue
                    ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.3)] ring-1 ring-emerald-400'
                    : 'bg-slate-900/60 border-slate-700 text-slate-400 hover:border-slate-500'
                }`}
              >
                ✅ THỰC TẾ LÀ ĐÚNG
              </button>
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  setIsActuallyTrue(false);
                }}
                className={`py-2.5 px-4 rounded-xl border text-sm font-bold transition-all ${
                  !isActuallyTrue
                    ? 'bg-rose-500/20 border-rose-400 text-rose-300 shadow-[0_0_15px_rgba(244,63,94,0.3)] ring-1 ring-rose-400'
                    : 'bg-slate-900/60 border-slate-700 text-slate-400 hover:border-slate-500'
                }`}
              >
                ❌ THỰC TẾ LÀ SAI
              </button>
            </div>
          </div>

          {/* Dữ Liệu Hồ Sơ Kiểm Chứng */}
          <div className="p-4 rounded-xl bg-slate-900/70 border border-teal-500/30 space-y-3">
            <span className="text-xs font-orbitron font-bold text-teal-300 uppercase tracking-wider block">
              HỒ SƠ XÁC THỰC TỪ CƠ QUAN CHUYÊN MÔN (BƯỚC 2)
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Tên Cơ Quan Thẩm Quyền (Tiếng Việt) *
                </label>
                <input
                  type="text"
                  required
                  value={sourceName}
                  onChange={e => setSourceName(e.target.value)}
                  placeholder="VD: Bộ Y tế Việt Nam / Bệnh viện Bạch Mai / NCSC..."
                  className="w-full px-3 py-2 bg-slate-950 border border-teal-500/30 rounded-lg text-white text-xs placeholder-slate-500 focus:outline-none focus:border-teal-400"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Link / Tên Miền Tài Liệu Gốc *
                </label>
                <input
                  type="text"
                  required
                  value={sourceUrl}
                  onChange={e => setSourceUrl(e.target.value)}
                  placeholder="VD: https://moh.gov.vn hoặc https://tuoitre.vn..."
                  className="w-full px-3 py-2 bg-slate-950 border border-teal-500/30 rounded-lg text-white text-xs placeholder-slate-500 focus:outline-none focus:border-teal-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                Trích Dẫn Kết Luận Khoa Học Chuẩn Xác *
              </label>
              <textarea
                required
                rows={2}
                value={trapExplanation}
                onChange={e => setTrapExplanation(e.target.value)}
                placeholder="Nhập đoạn trích dẫn báo cáo khoa học chính thống để người chơi đọc ở Bước 2..."
                className="w-full px-3 py-2 bg-slate-950 border border-teal-500/30 rounded-lg text-white text-xs placeholder-slate-500 focus:outline-none focus:border-teal-400"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                Điểm Then Chốt Để Bác Bỏ / Chứng Minh
              </label>
              <input
                type="text"
                value={keyFlawOrProof}
                onChange={e => setKeyFlawOrProof(e.target.value)}
                placeholder="Tóm tắt ngắn gọn 1 câu then chốt..."
                className="w-full px-3 py-2 bg-slate-950 border border-teal-500/30 rounded-lg text-white text-xs placeholder-slate-500 focus:outline-none focus:border-teal-400"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                Giải Mã Tâm Lý Người Chơi (Tại Sao Dễ Tin Hoặc Ngờ Vực)
              </label>
              <input
                type="text"
                value={psychologicalDebunk}
                onChange={e => setPsychologicalDebunk(e.target.value)}
                placeholder="VD: Bẫy uy tín con người, thiên kiến xác nhận, ảo giác công nghệ..."
                className="w-full px-3 py-2 bg-slate-950 border border-teal-500/30 rounded-lg text-white text-xs placeholder-slate-500 focus:outline-none focus:border-teal-400"
              />
            </div>
          </div>

          {/* Submit Actions */}
          <div className="pt-3 border-t border-slate-800 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="py-2.5 px-5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 text-xs font-semibold"
            >
              HỦY BỎ
            </button>
            <button
              type="submit"
              className="py-2.5 px-6 rounded-xl font-orbitron font-extrabold text-xs uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:shadow-[0_0_25px_rgba(6,182,212,0.8)] transition-all duration-200 flex items-center gap-2 cursor-pointer"
            >
              {isSuccess ? <Check className="w-4 h-4" /> : <PlusCircle className="w-4 h-4" />}
              <span>{isSuccess ? 'ĐÃ LƯU THÀNH CÔNG!' : 'LƯU VÀO ĐẤU TRƯỜNG'}</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
