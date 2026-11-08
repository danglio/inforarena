import { UserProfile, RoundResult, Challenge } from '../types/arena';
import { INITIAL_CHALLENGES } from '../data/challenges';

const PROFILE_KEY = 'info_arena_profile';
const HISTORY_KEY = 'info_arena_history';
const CUSTOM_CHALLENGES_KEY = 'info_arena_custom_challenges';

export const AVATAR_OPTIONS = [
  '⚡ Chiến Binh Số',
  '🛡️ Hộ Vệ Nhận Thức',
  '🧠 Trí Tuệ Sắc Bén',
  '🕵️ Thợ Săn Sự Thật',
  '🔍 Thẩm Định Công Nghệ',
  '🔬 Nhà Khoa Học',
  '🎯 Xạ Thủ Phản Biện',
  '🦉 Cú Vọ Thông Thái'
];

export function getRankTitle(points: number): string {
  if (points >= 5000) return 'Đại Kiện Tướng Trí Tuệ';
  if (points >= 3000) return 'Chuyên Gia Thẩm Định';
  if (points >= 1500) return 'Thợ Săn Bẫy AI';
  if (points >= 500) return 'Thám Tử Thông Tin';
  return 'Tân Binh Phản Biện';
}

export function getDefaultProfile(): UserProfile {
  return {
    id: 'user-' + Math.random().toString(36).substring(2, 9),
    name: 'Chiến Binh EIU',
    avatar: '⚡ Chiến Binh Số',
    rankTitle: 'Tân Binh Phản Biện',
    totalScore: 0,
    exp: 0,
    currentStreak: 0,
    maxStreak: 0,
    matchesPlayed: 0,
    roundsCompleted: 0,
    soundEnabled: true,
    createdAt: Date.now()
  };
}

export function loadUserProfile(): UserProfile {
  if (typeof window === 'undefined') return getDefaultProfile();
  try {
    const raw = localStorage.getItem(PROFILE_KEY);
    if (!raw) {
      const defaultProf = getDefaultProfile();
      localStorage.setItem(PROFILE_KEY, JSON.stringify(defaultProf));
      return defaultProf;
    }
    const prof: UserProfile = JSON.parse(raw);
    prof.rankTitle = getRankTitle(prof.totalScore);
    return prof;
  } catch {
    return getDefaultProfile();
  }
}

export function saveUserProfile(profile: UserProfile): void {
  if (typeof window === 'undefined') return;
  profile.rankTitle = getRankTitle(profile.totalScore);
  localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
}

export function loadMatchHistory(): RoundResult[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveRoundResult(result: RoundResult): RoundResult[] {
  const history = loadMatchHistory();
  const updated = [result, ...history];
  if (typeof window !== 'undefined') {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
  }
  return updated;
}

export function loadAllChallenges(): Challenge[] {
  let custom: Challenge[] = [];
  if (typeof window !== 'undefined') {
    try {
      const raw = localStorage.getItem(CUSTOM_CHALLENGES_KEY);
      if (raw) custom = JSON.parse(raw);
    } catch {
      // Ignore
    }
  }
  return [...INITIAL_CHALLENGES, ...custom];
}

export function addCustomChallenge(challenge: Challenge): Challenge[] {
  let custom: Challenge[] = [];
  if (typeof window !== 'undefined') {
    try {
      const raw = localStorage.getItem(CUSTOM_CHALLENGES_KEY);
      if (raw) custom = JSON.parse(raw);
    } catch {
      // Ignore
    }
    custom = [challenge, ...custom];
    localStorage.setItem(CUSTOM_CHALLENGES_KEY, JSON.stringify(custom));
  }
  return [...INITIAL_CHALLENGES, ...custom];
}
