import React, { useState } from 'react';
import { UserProfile } from '../types/arena';
import { AVATAR_OPTIONS, saveUserProfile } from '../utils/storage';
import { sound } from '../utils/sound';
import { X, ShieldCheck, User, Check } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  profile: UserProfile;
  onClose: () => void;
  onUpdateProfile: (updated: UserProfile) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  profile,
  onClose,
  onUpdateProfile
}) => {
  const [name, setName] = useState(profile.name);
  const [avatar, setAvatar] = useState(profile.avatar);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    sound.playLock();
    const updated: UserProfile = {
      ...profile,
      name: name.trim(),
      avatar
    };
    saveUserProfile(updated);
    onUpdateProfile(updated);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-md rounded-2xl glass-panel-glow border border-cyan-500/40 p-6 sm:p-8 bg-slate-950/90 shadow-[0_0_50px_rgba(6,182,212,0.3)] animate-scale-up"
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

        {/* Modal Title */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-400/50 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-orbitron font-bold text-white tracking-wide">
              HỒ SƠ TUYỂN THỦ
            </h2>
            <p className="text-xs text-cyan-400">
              Đăng nhập / Thiết lập danh tính đấu trường
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Avatar Selector */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Chọn Biểu Tượng Avatar
            </label>
            <div className="grid grid-cols-4 gap-2.5">
              {AVATAR_OPTIONS.map((opt) => {
                const isSelected = avatar === opt;
                return (
                  <button
                    type="button"
                    key={opt}
                    onClick={() => {
                      sound.playClick();
                      setAvatar(opt);
                    }}
                    className={`py-2 px-1.5 rounded-xl border text-center transition-all duration-200 flex flex-col items-center gap-1 ${
                      isSelected
                        ? 'bg-cyan-500/20 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.5)] scale-105'
                        : 'bg-slate-900/60 border-slate-700/60 hover:border-slate-500'
                    }`}
                  >
                    <span className="text-2xl">{opt.split(' ')[0]}</span>
                    <span className="text-[10px] text-slate-300 truncate w-full font-medium">
                      {opt.split(' ').slice(1).join(' ')}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Player Name Input */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Tên Tuyển Thủ / Nickname
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <User className="w-4 h-4" />
              </div>
              <input
                type="text"
                required
                maxLength={25}
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Nhập tên của bạn..."
                className="w-full pl-10 pr-4 py-3 bg-slate-900/90 border border-cyan-500/30 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm font-medium tracking-wide transition-all"
              />
            </div>
            <p className="text-[11px] text-slate-500 mt-1">
              Tên này sẽ xuất hiện trên Bảng Xếp Hạng Đấu Trường EIU.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSuccess || !name.trim()}
              className="w-full py-3.5 px-6 rounded-xl font-orbitron font-bold text-sm tracking-wider uppercase text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] active:scale-98 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isSuccess ? (
                <>
                  <Check className="w-5 h-5 text-slate-950" />
                  ĐÃ LƯU THÀNH CÔNG!
                </>
              ) : (
                <>
                  <Check className="w-4 h-4" />
                  LƯU & BƯỚC VÀO ĐẤU TRƯỜNG
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
