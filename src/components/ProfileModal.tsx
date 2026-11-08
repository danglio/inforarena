import React, { useState } from 'react';
import { UserProfile, RoundResult } from '../types/arena';
import { computeAnalytics } from '../utils/analytics';
import { RadarChart } from './RadarChart';
import { sound } from '../utils/sound';
import { 
  X, 
  Brain, 
  ShieldAlert, 
  Award, 
  History, 
  CheckCircle2, 
  AlertTriangle, 
  ExternalLink,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface ProfileModalProps {
  isOpen: boolean;
  profile: UserProfile;
  history: RoundResult[];
  onClose: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  profile,
  history,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<'analytics' | 'history'>('analytics');
  const [expandedHistoryId, setExpandedHistoryId] = useState<string | null>(null);

  if (!isOpen) return null;

  const stats = computeAnalytics(history);

  const toggleExpand = (id: string) => {
    sound.playClick();
    setExpandedHistoryId(expandedHistoryId === id ? null : id);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl glass-panel-glow border border-cyan-500/40 p-6 sm:p-8 bg-slate-950/95 shadow-[0_0_60px_rgba(6,182,212,0.35)] animate-scale-up overflow-hidden"
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

        {/* Dossier Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-cyan-500/20">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 p-[2px] shadow-[0_0_25px_rgba(6,182,212,0.4)]">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-3xl">
                {profile.avatar.split(' ')[0]}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-orbitron font-extrabold text-white tracking-wide">
                  {profile.name}
                </h2>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-950 border border-cyan-500/50 text-cyan-300 font-orbitron font-bold">
                  {profile.rankTitle}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Hồ Sơ Năng Lực Tư Duy Phản Biện & Phân Tích Bẫy Nhận Thức
              </p>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="flex-1 sm:flex-initial px-3.5 py-2 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-center">
              <div className="text-[10px] text-slate-400 font-medium">TỔNG ĐIỂM</div>
              <div className="font-orbitron font-bold text-sm text-cyan-300">{profile.totalScore.toLocaleString()}</div>
            </div>
            <div className="flex-1 sm:flex-initial px-3.5 py-2 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-center">
              <div className="text-[10px] text-slate-400 font-medium">SỐ LƯỢT ĐẤU</div>
              <div className="font-orbitron font-bold text-sm text-white">{history.length}</div>
            </div>
            <div className="flex-1 sm:flex-initial px-3.5 py-2 rounded-xl bg-slate-900/90 border border-emerald-500/20 text-center">
              <div className="text-[10px] text-slate-400 font-medium">CHÍNH XÁC</div>
              <div className="font-orbitron font-bold text-sm text-emerald-400">{stats.overallAccuracy}%</div>
            </div>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 pt-4 pb-2">
          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('analytics');
            }}
            className={`px-4 py-2 rounded-xl text-xs font-orbitron font-bold transition-all flex items-center gap-2 ${
              activeTab === 'analytics'
                ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.5)]'
                : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Brain className="w-4 h-4" />
            BIỂU ĐỒ NĂNG LỰC & BẪY NHẬN THỨC
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setActiveTab('history');
            }}
            className={`px-4 py-2 rounded-xl text-xs font-orbitron font-bold transition-all flex items-center gap-2 ${
              activeTab === 'history'
                ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.5)]'
                : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <History className="w-4 h-4" />
            NHẬT KÝ THI ĐẤU ({history.length})
          </button>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto space-y-6 pt-2 pr-1 custom-scrollbar">
          {activeTab === 'analytics' ? (
            <div className="space-y-6">
              
              {/* Radar Chart & Key Bias Meters */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {/* Visual SVG Radar */}
                <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-900/60 border border-cyan-500/20">
                  <span className="text-xs font-orbitron font-bold text-cyan-400 uppercase tracking-wider mb-2">
                    BIỂU ĐỒ NĂNG LỰC 5 TRỤC
                  </span>
                  <RadarChart scores={stats.radarScores} size={300} />
                </div>

                {/* Đo Lường Bẫy AI vs Bẫy Nhãn Người (Yêu cầu cốt lõi của khách) */}
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-cyan-500/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-200 flex items-center gap-2">
                        <ShieldAlert className="w-4 h-4 text-cyan-400" />
                        TỶ LỆ KHÁNG BẪY ẢO GIÁC AI
                      </span>
                      <span className="font-orbitron font-bold text-sm text-cyan-300">
                        {stats.aiTrapDefenseRate}%
                      </span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden border border-cyan-500/20">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full transition-all duration-700 shadow-[0_0_10px_#22d3ee]"
                        style={{ width: `${stats.aiTrapDefenseRate}%` }}
                      />
                    </div>
                    <p className="text-[11px] text-slate-400 mt-2">
                      {stats.aiTrapEncountered > 0
                        ? `Gặp ${stats.aiTrapEncountered} tình huống AI đưa tin sai, mắc bẫy ${stats.aiTrapFellCount} lần (${Math.round((stats.aiTrapFellCount / stats.aiTrapEncountered) * 100)}% mắc bẫy).`
                        : 'Chưa đối đầu câu hỏi do AI tạo có thông tin sai.'}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-cyan-500/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-200 flex items-center gap-2">
                        <Award className="w-4 h-4 text-amber-400" />
                        TỶ LỆ KHÁNG BẪY UY TÍN NGƯỜI
                      </span>
                      <span className="font-orbitron font-bold text-sm text-amber-300">
                        {stats.humanBiasDefenseRate}%
                      </span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden border border-amber-500/20">
                      <div 
                        className="h-full bg-gradient-to-r from-amber-600 to-yellow-400 rounded-full transition-all duration-700 shadow-[0_0_10px_#fbbf24]"
                        style={{ width: `${stats.humanBiasDefenseRate}%` }}
                      />
                    </div>
                    <p className="text-[11px] text-slate-400 mt-2">
                      {stats.humanTrapEncountered > 0
                        ? `Gặp ${stats.humanTrapEncountered} tình huống Người tạo đưa tin sai, mắc bẫy ${stats.humanTrapFellCount} lần (${Math.round((stats.humanTrapFellCount / stats.humanTrapEncountered) * 100)}% mắc bẫy).`
                        : 'Chưa đối đầu câu hỏi do Người tạo có thông tin sai.'}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-700/60">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-slate-300">
                        ĐỘ CHUẨN XÁC TRỰC GIÁC BAN ĐẦU
                      </span>
                      <span className="font-orbitron font-bold text-sm text-emerald-400">
                        {stats.radarScores.intuitionCalibration}%
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400">
                      Đo lường mức độ đồng điệu giữa % tin tưởng bạn chọn ở Bước 1 và kết quả xác thực thực tế.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bảng Tổng Kết: Điểm Làm Được vs Điểm Chưa Làm Được */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Strengths */}
                <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30">
                  <h3 className="text-xs font-orbitron font-bold text-emerald-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ĐIỂM MẠNH ĐÃ LÀM ĐƯỢC
                  </h3>
                  <ul className="space-y-2">
                    {stats.strengths.map((str, idx) => (
                      <li key={idx} className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed">
                        <span className="text-emerald-400 mt-0.5">•</span>
                        <span>{str}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Weaknesses to improve */}
                <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-500/30">
                  <h3 className="text-xs font-orbitron font-bold text-rose-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-rose-400" />
                    ĐIỂM CẦN RÈN LUYỆN THÊM
                  </h3>
                  <ul className="space-y-2">
                    {stats.weaknesses.map((weak, idx) => (
                      <li key={idx} className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed">
                        <span className="text-rose-400 mt-0.5">•</span>
                        <span>{weak}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          ) : (
            /* History Tab */
            <div className="space-y-3">
              {history.length === 0 ? (
                <div className="py-12 text-center text-slate-500">
                  <History className="w-10 h-10 mx-auto mb-3 opacity-30" />
                  <p className="text-sm">Bạn chưa tham gia vòng đấu nào. Hãy vào Đấu trường để thử sức!</p>
                </div>
              ) : (
                history.map((record, index) => {
                  const isExpanded = expandedHistoryId === record.challengeId + index;
                  return (
                    <div 
                      key={record.challengeId + index}
                      className="rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden transition-all"
                    >
                      <div 
                        onClick={() => toggleExpand(record.challengeId + index)}
                        className="p-4 flex items-center justify-between cursor-pointer hover:bg-slate-800/40"
                      >
                        <div className="flex items-center gap-3">
                          <span className={`w-2.5 h-2.5 rounded-full ${record.isVerdictCorrect ? 'bg-emerald-400 shadow-[0_0_8px_#34d399]' : 'bg-rose-400 shadow-[0_0_8px_#f43f5e]'}`} />
                          <div>
                            <div className="text-sm font-bold text-white line-clamp-1">
                              {record.challengeTitle}
                            </div>
                            <div className="text-[11px] text-slate-400 flex flex-wrap items-center gap-2 mt-0.5">
                              <span>Trực giác: <b className="text-cyan-300">{record.intuitionPercent}%</b></span>
                              <span>➔</span>
                              <span>Đọc nguồn: <b className="text-teal-300">{record.reevaluatedPercent !== undefined ? `${record.reevaluatedPercent}%` : (record.userVerdict ? 'Đúng' : 'Sai')}</b></span>
                              <span>•</span>
                              <span>Thực tế: <b className={record.isActuallyTrue ? 'text-emerald-400' : 'text-rose-400'}>{record.isActuallyTrue ? 'ĐÚNG' : 'SAI'}</b></span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className="font-orbitron font-bold text-sm text-cyan-300">
                            +{record.totalRoundPoints} ĐIỂM
                          </span>
                          {isExpanded ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                        </div>
                      </div>

                      {isExpanded && (
                        <div className="px-4 pb-4 pt-2 border-t border-slate-800/80 bg-slate-950/60 text-xs space-y-2.5">
                          <p className="text-slate-300 italic bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                            "{record.statement}"
                          </p>
                          {record.userNotes && (
                            <div>
                              <span className="font-semibold text-slate-400">Luận cứ của bạn: </span>
                              <span className="text-slate-200">{record.userNotes}</span>
                            </div>
                          )}
                          {record.userEvidenceUrl && (
                            <div className="flex items-center gap-1.5 text-cyan-400">
                              <ExternalLink className="w-3.5 h-3.5" />
                              <a href={record.userEvidenceUrl} target="_blank" rel="noreferrer" className="underline truncate">
                                {record.userEvidenceUrl}
                              </a>
                            </div>
                          )}
                          <div className="flex items-center gap-3 pt-1 text-[11px]">
                            {record.fellIntoAiTrap && (
                              <span className="px-2 py-0.5 rounded bg-rose-950 border border-rose-500/40 text-rose-300">
                                ⚠️ Mắc bẫy ảo giác AI
                              </span>
                            )}
                            {record.fellIntoHumanTrap && (
                              <span className="px-2 py-0.5 rounded bg-amber-950 border border-amber-500/40 text-amber-300">
                                ⚠️ Mắc bẫy uy tín người tạo
                              </span>
                            )}
                            {!record.fellIntoAiTrap && !record.fellIntoHumanTrap && (
                              <span className="px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/40 text-emerald-300">
                                🛡️ Né bẫy an toàn
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
