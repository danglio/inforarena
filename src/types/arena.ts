export type ChallengeCategory = 
  | 'science' 
  | 'ai_tech' 
  | 'health' 
  | 'space_environment' 
  | 'general';

export type ChallengeLabelType = 
  | 'none'        // 1. Không gắn nhãn gì hết (đúng sai tùy ý)
  | 'human_false' // 2. Gắn nhãn Người tạo - Thông tin SAI (Bẫy uy tín con người)
  | 'human_true'  // 3. Gắn nhãn Người tạo - Thông tin ĐÚNG
  | 'ai_false'    // 4. Gắn nhãn AI tạo - Thông tin SAI (Ảo giác AI)
  | 'ai_true';    // 5. Gắn nhãn AI tạo - Thông tin ĐÚNG

export interface VerifiedSource {
  name: string;
  url: string;
  domain: string;
}

export interface VerifiedFact {
  sourceName: string;         // VD: 'Tổ chức Y tế Thế giới (WHO)'
  sourceDomain: string;       // VD: 'who.int'
  sourceUrl: string;          // VD: 'https://www.who.int'
  factQuote: string;          // Đoạn trích thông tin đúng chuẩn mực từ nguồn chính thống
  coreConclusion?: string;    // Tóm tắt kết luận cốt lõi
}

export interface Challenge {
  id: string;
  title: string;
  statement: string;
  category: ChallengeCategory;
  labelType: ChallengeLabelType;
  labelAuthor: string;
  isActuallyTrue: boolean;
  trapType: 'none' | 'human_bias' | 'ai_hallucination';
  trapExplanation: string;
  psychologicalDebunk: string; // Giải mã tâm lý người chơi tại sao dễ tin hoặc ngờ vực
  verifiedSources: VerifiedSource[];
  verifiedFact: VerifiedFact; // Nguồn chuẩn xác chính thống cung cấp sẵn cho người chơi ở Bước 2
  keyFlawOrProof: string; // Điểm mấu chốt để kiểm chứng
  difficulty: 'easy' | 'medium' | 'hard';
}

export type IntuitionPercent = 0 | 25 | 50 | 75 | 100;

export interface RoundResult {
  challengeId: string;
  challengeTitle: string;
  labelType: ChallengeLabelType;
  statement: string;
  
  // Bước 1: Trực giác ban đầu
  intuitionPercent: IntuitionPercent;
  intuitionLockedAt: number;
  
  // Bước 2: Đánh giá lại sau khi đọc nguồn chính thống
  reevaluatedPercent: IntuitionPercent;
  beliefShift: number; // reevaluatedPercent - intuitionPercent
  calibratedCorrectly: boolean; // Người chơi có cập nhật đúng hướng theo sự thật hay không
  
  userVerdict: boolean; // true = Nghiêng về ĐÚNG (>=50%), false = Nghiêng về SAI (<50%)
  isActuallyTrue: boolean;
  isVerdictCorrect: boolean;
  
  userNotes?: string;
  userEvidenceUrl?: string;
  
  fellIntoAiTrap: boolean;
  fellIntoHumanTrap: boolean;
  
  intuitionScore: number;
  verdictScore: number;
  bonusPoints: number;
  totalRoundPoints: number;
  timeSpentSeconds: number;
}

export interface UserProfile {
  id: string;
  name: string;
  avatar: string;
  rankTitle: string;
  totalScore: number;
  exp: number;
  currentStreak: number;
  maxStreak: number;
  matchesPlayed: number;
  roundsCompleted: number;
  soundEnabled: boolean;
  createdAt: number;
}

export interface CriticalRadarScores {
  aiTrapDefense: number;       // Khả năng kháng bẫy AI (0-100)
  humanBiasDefense: number;    // Khả năng kháng bẫy uy tín người (0-100)
  intuitionCalibration: number; // Độ chuẩn xác trực giác (0-100)
  factCheckingSkill: number;   // Năng lực dẫn chứng và kết luận (0-100)
  decisiveSpeed: number;       // Tốc độ & tính quyết đoán (0-100)
}
