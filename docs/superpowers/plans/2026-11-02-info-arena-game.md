# Đấu Trường Thông Tin (Info Arena) - Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Xây dựng Web Game Đấu trường Trí tuệ 2D "Đấu Trường Thông Tin Info Arena: Nhận Thức và Kiểm Chứng" theo chuẩn đấu trường EIU, tone xanh dương - trắng - đen, luồng chơi 4 bước với 5 thể loại bẫy thông tin, chấm điểm trực giác vs kiểm chứng, radar chart phân tích thiên kiến AI/Người và ngân hàng câu hỏi phong phú.

**Architecture:** 
- Frontend SPA bằng Vite + React + TypeScript + Tailwind CSS.
- Âm thanh Game SFX đa kênh tự tạo bằng Web Audio API (không phụ thuộc asset ngoài).
- Hiệu ứng thị giác: Lucide React Icons, Canvas Confetti, Framer Motion / CSS keyframe transitions phong cách Sci-fi Arena.
- Biểu đồ năng lực phản biện: Radar Chart tùy biến SVG hoặc Canvas siêu nhẹ mượt mà.
- Lưu trữ bền vững dữ liệu tuyển thủ, lịch sử đấu và ngân hàng câu hỏi tùy chỉnh qua `localStorage`.

**Tech Stack:** React 18, Vite, TypeScript, Tailwind CSS, Lucide React, Canvas Confetti.

---

## Global Constraints
- Tone màu: Thiên xanh dương (Navy `#0f172a`, Blue `#1d4ed8`, Cyan `#06b6d4`), Trắng `#f8fafc` và Đen carbon `#020617`.
- Tuân thủ nghiêm ngặt 5 thể loại nhãn:
  1. Không nhãn (Chưa phân loại)
  2. Gắn nhãn Người tạo - Thông tin SAI (Bẫy uy tín người)
  3. Gắn nhãn Người tạo - Thông tin ĐÚNG
  4. Gắn nhãn AI tạo - Thông tin SAI (Ảo giác AI / Hallucination)
  5. Gắn nhãn AI tạo - Thông tin ĐÚNG
- Tuân thủ quy trình 4 bước đấu trường:
  - Bước 1: Khóa cảm quan ban đầu (0%, 25%, 50%, 75%, 100%)
  - Bước 2: Kiểm chứng, trích xuất dẫn chứng & chốt ĐÚNG/SAI
  - Bước 3: Chấm điểm đối chiếu, giải mã bẫy tâm lý AI vs Người
  - Bước 4: Hồ sơ phân tích tư duy phản biện & Radar Chart điểm mạnh yếu
- 0 Console Error, chạy độc lập không phụ thuộc backend ngoài.

---

### Task 1: Khởi tạo Project Vite + React + TypeScript + Tailwind CSS & Icon Assets

**Files:**
- Create: `package.json`
- Create: `vite.config.ts`
- Create: `tsconfig.json`
- Create: `tailwind.config.js`
- Create: `postcss.config.js`
- Create: `index.html`
- Create: `src/index.css`

- [ ] **Step 1: Khởi tạo package.json với dependencies chuẩn**
- [ ] **Step 2: Cấu hình vite.config.ts, tsconfig.json, tailwind.config.js và postcss.config.js**
- [ ] **Step 3: Thiết lập index.html và src/index.css với Google Fonts (Orbitron & Plus Jakarta Sans) cùng theme Cyber Arena**
- [ ] **Step 4: Cài đặt node_modules và kiểm tra build `pnpm run build`**

---

### Task 2: Module Types, Sound System (Web Audio API) & Ngân hàng dữ liệu 18 tình huống

**Files:**
- Create: `src/types/arena.ts`
- Create: `src/utils/sound.ts`
- Create: `src/data/challenges.ts`

- [ ] **Step 1: Định nghĩa Typescript interfaces cho UserProfile, Challenge, GuessStep, VerifyStep, MatchRecord, ArenaStats**
- [ ] **Step 2: Xây dựng sound synthesizer bằng Web Audio API (Click, Lock, Countdown, Correct, Wrong, Fanfare, LevelUp, Mute toggle)**
- [ ] **Step 3: Xây dựng ngân hàng 18 câu hỏi thực tế đa dạng theo đúng 5 thể loại nhãn (Khoa học, Y tế, AI, Vũ trụ, Đời sống)**

---

### Task 3: Hệ thống Auth Giả Lập & Quản lý Trạng thái Tuyển thủ (Profile & Storage)

**Files:**
- Create: `src/utils/storage.ts`
- Create: `src/components/AuthModal.tsx`
- Create: `src/components/HeaderNav.tsx`

- [ ] **Step 1: Tạo storage service quản lý UserProfile, Stats, MatchHistory với fallback mặc định**
- [ ] **Step 2: Xây dựng AuthModal cho phép Đăng ký / Đăng nhập / Đổi avatar / Tên tuyển thủ**
- [ ] **Step 3: Xây dựng HeaderNav hiển thị cấp bậc, EXP, điểm Arena, âm thanh toggle, nút mở Profile**

---

### Task 4: Sảnh Chờ Đấu Trường (Lobby) & Bộ Tạo Câu Hỏi Tùy Chỉnh

**Files:**
- Create: `src/components/Lobby.tsx`
- Create: `src/components/CreateChallengeModal.tsx`
- Create: `src/components/LeaderboardModal.tsx`

- [ ] **Step 1: Thiết kế giao diện sảnh chờ phong cách EIU Arena (Lựa chọn chế độ chơi, chủ đề, thống kê nhanh)**
- [ ] **Step 2: Tạo Modal thêm câu hỏi tình huống mới cho giảng viên/người chơi tự đóng góp**
- [ ] **Step 3: Tạo Modal Bảng Xếp Hạng Tuyển Thủ (Leaderboard) với hiệu ứng thứ hạng**

---

### Task 5: Đấu Trường Trực Tiếp - Luồng Chơi 4 Bước (Arena Battle Engine)

**Files:**
- Create: `src/components/ArenaBattle.tsx`
- Create: `src/components/Step1Intuition.tsx`
- Create: `src/components/Step2Verification.tsx`
- Create: `src/components/Step3Scoring.tsx`

- [ ] **Step 1: Xây dựng ArenaBattle điều phối trạng thái vòng đấu, timer, combo streak, thanh tiến trình round**
- [ ] **Step 2: Xây dựng Bước 1 - Cảm quan trực giác (Hiển thị thẻ bài, nhãn nguồn, 5 mức % tin tưởng, khóa kết quả)**
- [ ] **Step 3: Xây dựng Bước 2 - Kiểm chứng (Cổng tra cứu nhanh, ô nhập luận cứ, link dẫn chứng, chốt ĐÚNG/SAI)**
- [ ] **Step 4: Xây dựng Bước 3 - Chấm điểm & Giải mã bẫy tâm lý (So sánh % vs Sự thật, phân tích bẫy AI vs Người, cộng điểm/phạt)**

---

### Task 6: Hồ Sơ Phân Tích Tư Duy Phản Biện & Radar Chart (Profile Analytics)

**Files:**
- Create: `src/components/RadarChart.tsx`
- Create: `src/components/ProfileModal.tsx`
- Create: `src/utils/analytics.ts`

- [ ] **Step 1: Xây dựng thuật toán tính toán 5 chỉ số phản biện & tỉ lệ % Mắc bẫy AI vs Người**
- [ ] **Step 2: Vẽ Radar Chart SVG tương tác mượt mà thể hiện 5 trục năng lực phản biện**
- [ ] **Step 3: Xây dựng giao diện Hồ Sơ Năng Lực hoàn chỉnh với danh sách Điểm mạnh / Điểm yếu và Lịch sử thi đấu**

---

### Task 7: Tích hợp hoàn thiện App.tsx, Polish UI/UX, Kiểm thử và Xác minh

**Files:**
- Modify: `src/App.tsx`
- Create: `test-arena.js`

- [ ] **Step 1: Kết nối toàn bộ các thành phần trong App.tsx**
- [ ] **Step 2: Tối ưu UI/UX, responsive cho cả Desktop và Mobile, kiểm tra hiệu ứng chuyển cảnh và âm thanh**
- [ ] **Step 3: Chạy build `pnpm run build` xác nhận 0 error, kiểm tra độ mượt mà**
