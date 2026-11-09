import React, { useState } from 'react';
import { ShieldAlert, Wrench, Clock, Lock, Sparkles, KeyRound } from 'lucide-react';

interface MaintenanceScreenProps {
  onUnlock?: () => void;
}

export const MaintenanceScreen: React.FC<MaintenanceScreenProps> = ({ onUnlock }) => {
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleAdminAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.trim() === 'inforarena2026' || passcode.trim() === 'admin' || passcode.trim() === '123456') {
      if (onUnlock) onUnlock();
    } else {
      setErrorMsg('Mật mã quản trị chưa chính xác');
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col justify-between relative overflow-hidden font-sans selection:bg-amber-500 selection:text-black">
      {/* Background Cyber Grid & Glow Orbs */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-amber-500/15 via-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Top Header Branding */}
      <header className="relative z-10 w-full max-w-5xl mx-auto px-6 py-6 flex items-center justify-between border-b border-slate-900/80">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 ring-1 ring-white/20">
            <ShieldAlert className="w-5 h-5 text-black" />
          </div>
          <div>
            <span className="font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-cyan-400 text-lg block">
              INFOR ARENA
            </span>
            <span className="text-[10px] tracking-widest text-slate-400 uppercase font-semibold block">
              Đấu Trường Thông Tin
            </span>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold shadow-sm">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <span>TẠM ĐÓNG TRUY CẬP</span>
        </div>
      </header>

      {/* Center Maintenance Message */}
      <main className="relative z-10 w-full max-w-2xl mx-auto px-6 py-12 flex flex-col items-center text-center my-auto">
        {/* Animated Icon Box */}
        <div className="relative mb-8 group">
          <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/30 to-cyan-500/30 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse" />
          <div className="relative w-24 h-24 rounded-3xl bg-slate-900/90 border border-amber-500/40 flex items-center justify-center shadow-2xl backdrop-blur-xl">
            <Wrench className="w-12 h-12 text-amber-400 animate-[spin_8s_linear_infinite]" />
            <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center">
              <Lock className="w-4 h-4 text-cyan-400" />
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4 leading-tight">
          Hệ Thống Đang <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">Tạm Đóng</span>
        </h1>

        <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
          Đấu trường thông tin đang tạm dừng hoạt động công khai để tiến hành nâng cấp hạ tầng máy chủ và bảo trì dữ liệu định kỳ.
        </p>

        {/* Status Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mb-8">
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm text-center">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 mx-auto mb-2">
              <Clock className="w-4 h-4" />
            </div>
            <div className="text-xs text-slate-400 font-medium">Trạng thái</div>
            <div className="text-sm font-bold text-amber-400 mt-0.5">Bảo trì kỹ thuật</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm text-center">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 mx-auto mb-2">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="text-xs text-slate-400 font-medium">Nâng cấp</div>
            <div className="text-sm font-bold text-cyan-300 mt-0.5">Kho dữ liệu THPT</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm text-center">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 mx-auto mb-2">
              <ShieldAlert className="w-4 h-4" />
            </div>
            <div className="text-xs text-slate-400 font-medium">Dữ liệu đấu</div>
            <div className="text-sm font-bold text-emerald-400 mt-0.5">Được lưu an toàn</div>
          </div>
        </div>

        {/* Notice Box */}
        <div className="w-full p-4 rounded-2xl bg-slate-900/40 border border-slate-800 text-xs sm:text-sm text-slate-400 leading-relaxed">
          Xin chân thành cảm ơn sự quan tâm của quý thầy cô và các bạn học sinh. Hệ thống sẽ mở lại phục vụ sau khi hoàn tất công tác bảo dưỡng.
        </div>

        {/* Hidden Admin Access Trigger */}
        <div className="mt-8">
          {!showAdminLogin ? (
            <button
              onClick={() => setShowAdminLogin(true)}
              className="text-xs text-slate-600 hover:text-slate-400 transition-colors inline-flex items-center gap-1.5 py-1 px-2.5 rounded-lg border border-slate-900 hover:border-slate-800"
            >
              <KeyRound className="w-3.5 h-3.5" />
              <span>Chế độ quản trị viên</span>
            </button>
          ) : (
            <form onSubmit={handleAdminAuth} className="flex flex-col items-center gap-2 mt-2">
              <div className="flex items-center gap-2">
                <input
                  type="password"
                  placeholder="Nhập mã truy cập..."
                  value={passcode}
                  onChange={(e) => {
                    setPasscode(e.target.value);
                    setErrorMsg('');
                  }}
                  autoFocus
                  className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 w-48"
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold transition shadow-md"
                >
                  Mở
                </button>
                <button
                  type="button"
                  onClick={() => setShowAdminLogin(false)}
                  className="px-2 py-1.5 text-xs text-slate-500 hover:text-slate-300"
                >
                  Đóng
                </button>
              </div>
              {errorMsg && <p className="text-[11px] text-red-400">{errorMsg}</p>}
            </form>
          )}
        </div>
      </main>

      {/* Footer Branding */}
      <footer className="relative z-10 py-6 border-t border-slate-900/80 text-center text-xs text-slate-600">
        INFOR ARENA: Đấu Trường Thông Tin • Bản quyền thuộc dự án giáo dục
      </footer>
    </div>
  );
};
