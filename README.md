# 🔮 MYSTIC TAROT – Khám Phá Thông Điệp Từ Những Lá Bài

Website xem bài Tarot trực tuyến chuyên nghiệp, có chiều sâu về nội dung biểu tượng học, trải nghiệm huyền bí và giao diện cao cấp.

---

## 🌟 Điểm Nổi Bật Của Dự Án

- **100% Bộ bài chuẩn Rider-Waite-Smith (1909)**: Đầy đủ chính xác **78 lá bài** (22 Major Arcana + 56 Minor Arcana: Gậy, Cốc, Kiếm, Tiền).
- **Thứ tự chuẩn RWS**: *Strength số VIII* và *Justice số XI*.
- **Hệ thống dữ liệu có chiều sâu**: Mỗi lá bài có phân tích biểu tượng học chi tiết, thông điệp thiêng liêng, ý nghĩa xuôi (Upright) và ngược (Reversed) qua 8 khía cạnh (Tổng quan, Tình cảm, Công việc, Tài chính, Gia đình, Bản thân, Lời khuyên, 3 câu hỏi tự vấn).
- **Quy trình trải bài 5 bước chân thực**:
  1. **Bước 1**: Nhập câu hỏi và chọn chủ đề quan tâm (hoặc tùy chọn câu hỏi tự do).
  2. **Bước 2**: Tĩnh tâm ý niệm với quả cầu năng lượng và nhạc thiền ambient.
  3. **Bước 3**: Chọn 1 trong 5 phương pháp trải bài (Một lá, Ba lá Quá khứ - Hiện tại - Tương lai, Trải bài Tình yêu 5 lá, Trải bài Công việc 5 lá, Celtic Cross 10 lá) + Bật/tắt chế độ bài ngược.
  4. **Bước 4**: Xáo bài với thuật toán **Fisher-Yates** ngẫu nhiên cao, tự tay rút từng lá từ vòng xòe 78 lá (Fanning Arc) hoặc rút nhanh tự động.
  5. **Bước 5**: Nhận kết quả giải bài tổng quan, cân bằng nguyên tố (Lửa/Nước/Khí/Đất), phân tích từng lá theo bối cảnh câu hỏi, mối quan hệ tương tác giữa các lá, và lời khuyên hành động thực tiễn.
- **Hệ thống âm thanh giả lập (Web Audio API Procedural Synthesizer)**:
  - Nhạc thiền ambient ngân vang tần số 432Hz / 528Hz.
  - Âm thanh lật bài 3D, xáo bài sột soạt chân thực, chuông chimes vũ trụ.
  - Hoạt động 100% offline, không phụ thuộc file mp3 bên ngoài, không lo bản quyền.
- **Lịch sử xem bài**: Lưu tự động vào `LocalStorage`, đánh dấu yêu thích, sao chép kết quả hoặc xóa lịch sử.
- **Thư viện 78 lá bài**: Tìm kiếm song ngữ Anh - Việt, lọc theo Arcana / Bộ / Nguyên tố, cửa sổ Modal xem chi tiết 4 tab.
- **Cẩm nang kiến thức Tarot**: Các bài viết sâu sắc về nguồn gốc Tarot, cấu trúc 78 lá, cách đặt câu hỏi mở và quy chuẩn đạo đức.
- **Giao diện Mobile-First**: Tối ưu vuốt chạm, hiệu ứng sao lấp lánh (Starfield canvas), bảng màu tím huyền bí `#100B1D`, `#24143F`, lavender `#A78BFA` và vàng ánh kim `#D8B56D`.

---

## 🛠 Công Nghệ Sử Dụng

- **Framework**: [Next.js](https://nextjs.org/) mới nhất (App Router, Turbopack)
- **UI Library**: [React 19](https://react.dev/)
- **Ngôn ngữ**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Hiệu ứng**: Canvas Particle Starfield, 3D CSS Transforms, Web Audio API
- **Lưu trữ**: LocalStorage Persistence

---

## 🚀 Hướng Dẫn Cài Đặt & Chạy Dự Án

### Yêu cầu môi trường
- Node.js >= 18.x
- npm >= 9.x

### 1. Di chuyển vào thư mục dự án
```bash
cd mystic-tarot
```

### 2. Cài đặt các gói phụ thuộc (nếu chưa cài)
```bash
npm install
```

### 3. Chạy môi trường phát triển (Development)
```bash
npm run dev
```
Mở trình duyệt và truy cập: `http://localhost:3000`

### 4. Build sản phẩm hoàn chỉnh (Production)
```bash
npm run build
npm run start
```

---

## 📁 Cấu Trúc Thư Mục

```text
mystic-tarot/
├── src/
│   ├── app/
│   │   ├── page.tsx               # Trang chủ (Hero, Rút bài ngày, Giới thiệu)
│   │   ├── reading/page.tsx       # Hệ thống trải bài 5 bước hoàn chỉnh
│   │   ├── cards/
│   │   │   ├── page.tsx           # Thư viện 78 lá bài (Tìm kiếm, lọc, modal)
│   │   │   └── [id]/page.tsx      # Trang chi tiết từng lá bài chuẩn SEO
│   │   ├── history/page.tsx       # Lịch sử xem bài & Yêu thích (LocalStorage)
│   │   ├── knowledge/page.tsx     # Cẩm nang kiến thức Tarot chuyên sâu
│   │   ├── about/page.tsx         # Giới thiệu sứ mệnh & Quy chuẩn đạo đức
│   │   ├── layout.tsx             # Root layout (Header, Footer, Meta SEO)
│   │   └── globals.css            # Palette màu huyền bí & tiện ích 3D
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.tsx         # Header, điều hướng, sound toggle, mobile drawer
│   │   │   ├── Footer.tsx         # Footer & tuyên bố miễn trừ trách nhiệm
│   │   │   └── Starfield.tsx      # Canvas bầu trời sao & sao băng chuyển động
│   │   ├── reading/
│   │   │   ├── Step1Question.tsx  # Bước 1: Nhập câu hỏi & chọn chủ đề
│   │   │   ├── Step2Focus.tsx     # Bước 2: Tĩnh tâm ý niệm với quả cầu vũ trụ
│   │   │   ├── Step3SpreadSelect.tsx # Bước 3: Chọn 1 trong 5 kiểu trải bài
│   │   │   ├── Step4Draw.tsx      # Bước 4: Xáo bài & tự rút từ 78 lá
│   │   │   └── Step5Interpretation.tsx # Bước 5: Giải nghĩa đa tầng & tổng quan
│   │   └── tarot/
│   │       ├── TarotCardView.tsx  # Component lá bài 3D lật mặt & khung hoa văn
│   │       └── CardDetailModal.tsx # Modal chi tiết 8 khía cạnh của lá bài
│   ├── data/
│   │   ├── tarotCards.ts          # Bộ dữ liệu 78 lá bài RWS đầy đủ tiếng Việt
│   │   ├── spreads.ts             # Cấu hình 5 phương pháp trải bài
│   │   └── knowledge.ts           # Các bài viết cẩm nang Tarot
│   ├── lib/
│   │   ├── sound.ts               # Web Audio API Sound Synthesizer
│   │   ├── tarotEngine.ts         # Thuật toán xáo Fisher-Yates & engine tổng hợp
│   │   └── storage.ts             # Quản lý lưu trữ LocalStorage
│   └── types/
│       └── tarot.ts               # TypeScript interfaces & types chuẩn mực
└── scripts/
    └── build_full_78_cards.py     # Script tạo và kiểm chứng bộ 78 lá bài
```

---

## ⚖️ Quy Chuẩn Đạo Đức & Pháp Lý
- Bộ bài Tarot được xây dựng dựa trên nguyên tác **Rider-Waite-Smith (1909)** vốn thuộc **phạm vi công cộng (Public Domain)** trên toàn cầu.
- Toàn bộ nội dung diễn giải tiếng Việt được biên soạn độc lập, khoa học và giàu tính triết lý, không sao chép nguyên văn sách bản quyền.
- Mystic Tarot không tuyên bố xem trước tương lai tuyệt đối, không đưa ra lời khuyên y tế, pháp lý hoặc tài chính thay thế chuyên gia. Tự do ý chí của bạn là tối thượng.
