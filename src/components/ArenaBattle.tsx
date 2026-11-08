import React, { useState, useEffect, useMemo } from 'react';
import { Challenge, IntuitionPercent, RoundResult, UserProfile } from '../types/arena';
import { Step1Intuition } from './Step1Intuition';
import { Step2Verification } from './Step2Verification';
import { Step3Scoring } from './Step3Scoring';
import { sound } from '../utils/sound';
import { saveRoundResult, saveUserProfile } from '../utils/storage';
import { Flame, Clock, X, Shuffle } from 'lucide-react';

interface ArenaBattleProps {
  challenges: Challenge[];
  userProfile: UserProfile;
  onUpdateProfile: (profile: UserProfile) => void;
  onExitArena: () => void;
  onViewProfile: () => void;
}

export const ArenaBattle: React.FC<ArenaBattleProps> = ({
  challenges,
  userProfile,
  onUpdateProfile,
  onExitArena,
  onViewProfile
}) => {
  // Tự động xáo trộn và chọn 5 câu hỏi ngẫu nhiên từ ngân hàng câu hỏi phong phú
  const matchChallenges = useMemo(() => {
    if (!challenges || challenges.length === 0) return [];
    const copy = [...challenges];
    
    // Ưu tiên câu giấc ngủ vị thành niên (WHO) ở vòng 1 nếu có để test kịch bản của khách
    const sleepChallenge = copy.find(c => c.id === 'ch-sleep-01');
    const otherChallenges = copy.filter(c => c.id !== 'ch-sleep-01');
    
    // Xáo trộn ngẫu nhiên các câu còn lại
    const shuffledOthers = otherChallenges.sort(() => Math.random() - 0.5);

    if (sleepChallenge) {
      return [sleepChallenge, ...shuffledOthers.slice(0, 4)];
    }
    return shuffledOthers.slice(0, 5);
  }, [challenges]);

  const [currentRoundIndex, setCurrentRoundIndex] = useState(0);
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [lockedIntuition, setLockedIntuition] = useState<IntuitionPercent | null>(null);
  const [lastRoundResult, setLastRoundResult] = useState<RoundResult | null>(null);
  
  // Timer state
  const [timeLeft, setTimeLeft] = useState<number>(45);
  const [timerActive, setTimerActive] = useState<boolean>(true);

  const currentChallenge = matchChallenges[currentRoundIndex] || challenges[0];
  const totalRounds = Math.min(matchChallenges.length, 5);

  // Countdown timer effect
  useEffect(() => {
    if (!timerActive || currentStep === 3) return;

    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        if (prev <= 6) {
          sound.playCountdown(true);
        } else if (prev === 15) {
          sound.playCountdown(false);
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timerActive, currentStep]);

  // Step 1: Locked Intuition -> Chuyển sang Bước 2
  const handleLockIntuition = (percent: IntuitionPercent) => {
    setLockedIntuition(percent);
    setCurrentStep(2);
  };

  // Step 2: Re-evaluation Submit (Đánh giá lại sau khi đọc nguồn chuẩn) -> Chuyển sang Bước 3
  const handleReevaluateSubmit = (reevaluatedPercent: IntuitionPercent) => {
    setTimerActive(false);

    const isActuallyTrue = currentChallenge.isActuallyTrue;
    const intuition = lockedIntuition ?? 50;
    const beliefShift = reevaluatedPercent - intuition;
    const timeSpentSeconds = 45 - timeLeft;

    // Phán quyết: nếu đánh giá lại >= 50% coi như người chơi tin đây là tin ĐÚNG
    const userVerdict = reevaluatedPercent >= 50;
    
    // Kết luận đúng:
    // Nếu tin là ĐÚNG thực tế: reevaluatedPercent >= 50 (chuẩn nhất >= 75%)
    // Nếu tin là SAI thực tế: reevaluatedPercent < 50 (chuẩn nhất <= 25%)
    const isVerdictCorrect = isActuallyTrue ? (reevaluatedPercent >= 50) : (reevaluatedPercent < 50);

    // Kiểm tra thích ứng nhận thức đúng hướng (Cognitive Calibration):
    const calibratedCorrectly = isActuallyTrue 
      ? (beliefShift >= 0 && reevaluatedPercent >= 75)
      : (beliefShift <= 0 && reevaluatedPercent <= 25);

    // Phát hiện bẫy:
    // Bẫy AI: Câu nhãn AI - SAI mà sau khi đọc nguồn người chơi vẫn giữ mức tin tưởng >= 50%
    const fellIntoAiTrap = currentChallenge.labelType === 'ai_false' && reevaluatedPercent >= 50;
    // Bẫy người: Câu nhãn Người - SAI mà sau khi đọc nguồn người chơi vẫn giữ mức tin tưởng >= 50%
    const fellIntoHumanTrap = currentChallenge.labelType === 'human_false' && reevaluatedPercent >= 50;

    // TÍNH ĐIỂM ĐẤU TRƯỜNG:
    // 1. Điểm trực giác ban đầu: tối đa 80 pts
    let intuitionScore = isActuallyTrue 
      ? Math.round((intuition / 100) * 80)
      : Math.round(((100 - intuition) / 100) * 80);

    // 2. Điểm xác thực sau khi đọc nguồn: tối đa 200 pts
    let verdictScore = 0;
    if (isActuallyTrue) {
      verdictScore = Math.round((reevaluatedPercent / 100) * 200);
    } else {
      verdictScore = Math.round(((100 - reevaluatedPercent) / 100) * 200);
    }

    // 3. Thưởng chuyển biến nhận thức (Rational Shift Bonus): tối đa 50 pts
    let bonusPoints = 0;
    if (!isActuallyTrue && intuition >= 50 && reevaluatedPercent <= 25) {
      // Dũng cảm hạ % khi nhận ra tin giả nhờ nguồn chính thống
      bonusPoints += 50;
    } else if (isActuallyTrue && intuition <= 50 && reevaluatedPercent >= 75) {
      // Cởi mở nâng % khi nguồn chính thống khẳng định sự thật
      bonusPoints += 50;
    } else if (calibratedCorrectly) {
      bonusPoints += 25;
    }

    // Streak multiplier
    const currentStreak = isVerdictCorrect ? userProfile.currentStreak + 1 : 0;
    const streakMultiplier = currentStreak > 1 ? Math.min(2.0, 1 + currentStreak * 0.1) : 1.0;
    const totalRoundPoints = Math.round((intuitionScore + verdictScore + bonusPoints) * streakMultiplier);

    const result: RoundResult = {
      challengeId: currentChallenge.id,
      challengeTitle: currentChallenge.title,
      labelType: currentChallenge.labelType,
      statement: currentChallenge.statement,
      intuitionPercent: intuition,
      intuitionLockedAt: Date.now(),
      reevaluatedPercent,
      beliefShift,
      calibratedCorrectly,
      userVerdict,
      isActuallyTrue,
      isVerdictCorrect,
      fellIntoAiTrap,
      fellIntoHumanTrap,
      intuitionScore,
      verdictScore,
      bonusPoints,
      totalRoundPoints,
      timeSpentSeconds
    };

    setLastRoundResult(result);
    saveRoundResult(result);

    // Update Profile
    const updatedProfile: UserProfile = {
      ...userProfile,
      totalScore: userProfile.totalScore + totalRoundPoints,
      exp: userProfile.exp + totalRoundPoints,
      currentStreak,
      maxStreak: Math.max(userProfile.maxStreak, currentStreak),
      roundsCompleted: userProfile.roundsCompleted + 1
    };

    saveUserProfile(updatedProfile);
    onUpdateProfile(updatedProfile);

    setCurrentStep(3);
  };

  // Next Round or Finish Match
  const handleNextRound = () => {
    if (currentRoundIndex + 1 < totalRounds) {
      setCurrentRoundIndex(prev => prev + 1);
      setCurrentStep(1);
      setLockedIntuition(null);
      setLastRoundResult(null);
      setTimeLeft(45);
      setTimerActive(true);
    } else {
      // Completed match
      sound.playFanfare();
      const updatedProfile = {
        ...userProfile,
        matchesPlayed: userProfile.matchesPlayed + 1
      };
      saveUserProfile(updatedProfile);
      onUpdateProfile(updatedProfile);
      onViewProfile();
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] py-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col justify-between">
      
      {/* Top HUD Bar */}
      <div className="glass-panel rounded-2xl p-4 sm:p-5 border border-cyan-500/25 mb-8 flex flex-wrap items-center justify-between gap-4">
        
        {/* Match progress */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-400/50 flex items-center justify-center font-orbitron font-extrabold text-cyan-300 text-sm">
            {currentRoundIndex + 1}/{totalRounds}
          </div>
          <div>
            <div className="text-[10px] font-orbitron font-semibold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
              <span>TIẾN TRÌNH ĐẤU TRƯỜNG</span>
              <span className="inline-flex items-center gap-0.5 text-cyan-400 text-[9px] px-1.5 py-0.2 rounded bg-cyan-950/60 border border-cyan-500/30">
                <Shuffle className="w-2.5 h-2.5" /> Ngẫu nhiên
              </span>
            </div>
            <div className="text-sm font-bold text-white">
              Vòng Đấu Thứ {currentRoundIndex + 1}
            </div>
          </div>
        </div>

        {/* Dynamic Countdown Timer */}
        <div className={`flex items-center gap-2.5 px-4 py-2 rounded-xl border transition-all ${
          timeLeft <= 10 
            ? 'bg-rose-950/80 border-rose-500 text-rose-300 animate-pulse shadow-[0_0_15px_rgba(244,63,94,0.5)]'
            : 'bg-slate-900/80 border-cyan-500/20 text-cyan-300'
        }`}>
          <Clock className={`w-4 h-4 ${timeLeft <= 10 ? 'animate-spin' : ''}`} />
          <span className="font-orbitron font-bold text-sm tracking-wider">
            00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}s
          </span>
        </div>

        {/* Streak Multiplier */}
        <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-orange-500/20 text-orange-400">
          <Flame className="w-4 h-4" />
          <span className="font-orbitron font-bold text-xs tracking-wider">
            CHUỖI ĐÚNG x{userProfile.currentStreak}
          </span>
        </div>

        {/* Exit Arena Button */}
        <button
          onClick={() => {
            sound.playClick();
            onExitArena();
          }}
          className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          title="Thoát về Sảnh Chờ"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Step Render Area */}
      <div className="flex-1 flex items-center justify-center">
        {currentStep === 1 && (
          <Step1Intuition
            challenge={currentChallenge}
            onLockIntuition={handleLockIntuition}
          />
        )}

        {currentStep === 2 && lockedIntuition !== null && (
          <Step2Verification
            challenge={currentChallenge}
            lockedIntuition={lockedIntuition}
            onReevaluate={handleReevaluateSubmit}
          />
        )}

        {currentStep === 3 && lastRoundResult && (
          <Step3Scoring
            challenge={currentChallenge}
            roundResult={lastRoundResult}
            onNextRound={handleNextRound}
            isLastRound={currentRoundIndex + 1 >= totalRounds}
          />
        )}
      </div>

      {/* Bottom status notice */}
      <div className="text-center pt-8 text-xs text-slate-500 font-medium">
        Ngân hàng câu hỏi đa dạng (20+ tình huống) - Tự động xáo trộn ngẫu nhiên mỗi lượt chơi.
      </div>
    </div>
  );
};
