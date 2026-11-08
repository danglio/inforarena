import { RoundResult, CriticalRadarScores } from '../types/arena';

export interface AnalyticsSummary {
  totalRounds: number;
  overallAccuracy: number;
  aiTrapEncountered: number;
  aiTrapFellCount: number;
  aiTrapDefenseRate: number; // % thoát bẫy AI
  
  humanTrapEncountered: number;
  humanTrapFellCount: number;
  humanBiasDefenseRate: number; // % thoát bẫy người

  radarScores: CriticalRadarScores;
  strengths: string[];
  weaknesses: string[];
}

export function computeAnalytics(history: RoundResult[]): AnalyticsSummary {
  if (!history || history.length === 0) {
    return {
      totalRounds: 0,
      overallAccuracy: 0,
      aiTrapEncountered: 0,
      aiTrapFellCount: 0,
      aiTrapDefenseRate: 100,
      humanTrapEncountered: 0,
      humanTrapFellCount: 0,
      humanBiasDefenseRate: 100,
      radarScores: {
        aiTrapDefense: 75,
        humanBiasDefense: 70,
        intuitionCalibration: 65,
        factCheckingSkill: 80,
        decisiveSpeed: 70
      },
      strengths: [
        'Sẵn sàng bước vào đấu trường rèn luyện tư duy phản biện',
        'Có tinh thần tìm tòi và kiểm chứng nguồn tin'
      ],
      weaknesses: [
        'Chưa có dữ liệu thi đấu thực tế, hãy bắt đầu vòng đấu đầu tiên!'
      ]
    };
  }

  const totalRounds = history.length;
  const correctVerdicts = history.filter(h => h.isVerdictCorrect).length;
  const overallAccuracy = Math.round((correctVerdicts / totalRounds) * 100);

  // AI traps (chỉ tính các câu gắn nhãn AI mà thông tin SAI)
  const aiFalseRounds = history.filter(h => h.labelType === 'ai_false');
  const aiTrapEncountered = aiFalseRounds.length;
  const aiTrapFellCount = aiFalseRounds.filter(h => h.fellIntoAiTrap).length;
  const aiTrapDefenseRate = aiTrapEncountered > 0 
    ? Math.round(((aiTrapEncountered - aiTrapFellCount) / aiTrapEncountered) * 100) 
    : 80;

  // Human traps (chỉ tính câu gắn nhãn Người mà thông tin SAI)
  const humanFalseRounds = history.filter(h => h.labelType === 'human_false');
  const humanTrapEncountered = humanFalseRounds.length;
  const humanTrapFellCount = humanFalseRounds.filter(h => h.fellIntoHumanTrap).length;
  const humanBiasDefenseRate = humanTrapEncountered > 0
    ? Math.round(((humanTrapEncountered - humanTrapFellCount) / humanTrapEncountered) * 100)
    : 75;

  // Intuition calibration (chênh lệch giữa % chọn và sự thật)
  // Nếu câu đúng: điểm cao nếu chọn >= 75%, nếu câu sai: điểm cao nếu chọn <= 25%
  let intuitionTotalScore = 0;
  history.forEach(h => {
    if (h.isActuallyTrue) {
      intuitionTotalScore += h.intuitionPercent; // 0 - 100
    } else {
      intuitionTotalScore += (100 - h.intuitionPercent); // 0 - 100
    }
  });
  const intuitionCalibration = Math.min(100, Math.max(20, Math.round(intuitionTotalScore / totalRounds)));

  // Fact-checking & Cognitive Adaptation skill: Đánh giá lại đúng + thích ứng nhận thức trước dữ liệu
  let factCheckPoints = 0;
  history.forEach(h => {
    if (h.isVerdictCorrect) factCheckPoints += 60;
    if (h.calibratedCorrectly) {
      factCheckPoints += 40;
    } else if (h.beliefShift !== undefined && (h.isActuallyTrue ? h.beliefShift > 0 : h.beliefShift < 0)) {
      factCheckPoints += 40;
    } else if (h.userNotes && h.userNotes.trim().length > 10) {
      factCheckPoints += 20;
    } else if (h.isVerdictCorrect) {
      factCheckPoints += 20;
    }
  });
  const factCheckingSkill = Math.min(100, Math.max(30, Math.round(factCheckPoints / totalRounds)));

  // Decisive Speed (thời gian trung bình, lý tưởng < 45 giây)
  const avgTime = history.reduce((acc, h) => acc + (h.timeSpentSeconds || 30), 0) / totalRounds;
  let decisiveSpeed = 90;
  if (avgTime > 60) decisiveSpeed = 65;
  else if (avgTime > 40) decisiveSpeed = 80;
  else if (avgTime < 25) decisiveSpeed = 95;

  const radarScores: CriticalRadarScores = {
    aiTrapDefense: aiTrapDefenseRate,
    humanBiasDefense: humanBiasDefenseRate,
    intuitionCalibration,
    factCheckingSkill,
    decisiveSpeed
  };

  // Strengths & Weaknesses evaluation
  const strengths: string[] = [];
  const weaknesses: string[] = [];

  if (aiTrapDefenseRate >= 75) {
    strengths.push('Khả năng kháng bẫy ảo giác AI rất tốt: Cảnh giác cao trước các thuật ngữ hoa mỹ do AI sinh ra.');
  } else {
    weaknesses.push('Dễ bị khuất phục trước ảo giác AI: Có xu hướng tin tưởng các câu chữ logic giả định của mô hình ngôn ngữ.');
  }

  if (humanBiasDefenseRate >= 75) {
    strengths.push('Miễn nhiễm thiên kiến uy tín (Authority Bias): Không bị lung lay bởi danh xưng giáo sư hay chuyên gia giả định.');
  } else {
    weaknesses.push('Thiên kiến danh xưng người tạo: Dễ đặt niềm tin tuyệt đối khi thấy người phát ngôn có học vị cao.');
  }

  if (intuitionCalibration >= 70) {
    strengths.push('Trực giác cảm quan ban đầu sắc bén: Cảm nhận độ chân thực của thông tin trước cả khi tra cứu.');
  } else {
    weaknesses.push('Trực giác ban đầu còn chênh lệch với sự thật: Cần điều chỉnh mức độ hoài nghi lành mạnh.');
  }

  if (factCheckingSkill >= 80) {
    strengths.push('Kỹ năng kiểm chứng xuất sắc: Thường xuyên trích dẫn nguồn chuẩn và có lập luận phản biện vững chắc.');
  } else {
    weaknesses.push('Thiếu thói quen dán link nguồn uy tín: Cần củng cố dẫn chứng trước khi đưa ra phán quyết.');
  }

  return {
    totalRounds,
    overallAccuracy,
    aiTrapEncountered,
    aiTrapFellCount,
    aiTrapDefenseRate,
    humanTrapEncountered,
    humanTrapFellCount,
    humanBiasDefenseRate,
    radarScores,
    strengths,
    weaknesses
  };
}
