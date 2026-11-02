'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, Shield, Heart, Compass, BookOpen, Layers, Moon } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 bg-[#0A0714] border-t border-[#D8B56D]/20 text-slate-400 text-xs py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
        {/* Col 1: Brand */}
        <div className="space-y-3 md:col-span-1">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#24143F] border border-[#D8B56D] flex items-center justify-center text-[#D8B56D]">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="font-serif font-bold text-base text-[#F5F0FF] tracking-wider">
              MYSTIC TAROT
            </span>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed">
            Hệ thống trải bài Tarot & Tử Vi Đẩu Số chuyên nghiệp, kết hợp tri thức cổ xưa phương Đông và phương Tây với nghệ thuật thấu hiểu tâm lý hiện đại.
          </p>
        </div>

        {/* Col 2: Navigation Links */}
        <div className="space-y-2.5">
          <h4 className="font-serif font-bold text-[#D8B56D] text-xs uppercase tracking-wider">
            Khám Phá
          </h4>
          <ul className="space-y-1.5">
            <li>
              <Link href="/reading" className="hover:text-[#D8B56D] transition-colors flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#D8B56D]" /> Bắt Đầu Trải Bài
              </Link>
            </li>
            <li>
              <Link href="/tu-vi" className="hover:text-[#D8B56D] transition-colors flex items-center gap-1.5 text-amber-300 font-semibold">
                <Moon className="w-3.5 h-3.5 text-amber-400" /> Lập Lá Số Tử Vi (Mới)
              </Link>
            </li>
            <li>
              <Link href="/cards" className="hover:text-[#D8B56D] transition-colors flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#A78BFA]" /> Thư Viện 78 Lá Bài
              </Link>
            </li>
            <li>
              <Link href="/knowledge" className="hover:text-[#D8B56D] transition-colors flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-sky-400" /> Kiến Thức Tarot Nhập Môn
              </Link>
            </li>
            <li>
              <Link href="/history" className="hover:text-[#D8B56D] transition-colors flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" /> Lịch Sử Trải Bài Của Bạn
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Spreads */}
        <div className="space-y-2.5">
          <h4 className="font-serif font-bold text-[#D8B56D] text-xs uppercase tracking-wider">
            Các Kiểu Trải Bài
          </h4>
          <ul className="space-y-1.5 text-slate-400">
            <li>• Trải bài 1 lá – Thông điệp hàng ngày</li>
            <li>• Trải bài 3 lá – Quá khứ, Hiện tại, Tương lai</li>
            <li>• Trải bài Tình yêu 5 lá – Soi tỏ kết nối</li>
            <li>• Trải bài Sự nghiệp 5 lá – Chiến lược bứt phá</li>
            <li>• Thập Tự Celtic 10 lá – Chiều sâu vận mệnh</li>
          </ul>
        </div>

        {/* Col 4: Ethics & Philosophy */}
        <div className="space-y-2.5">
          <h4 className="font-serif font-bold text-[#D8B56D] text-xs uppercase tracking-wider flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-[#D8B56D]" /> Tuyên Ngôn Đạo Đức
          </h4>
          <p className="text-slate-400 leading-relaxed text-[11px]">
            Tarot và Tử Vi là tấm gương soi chiếu nội tâm và bản đồ tiềm năng, không phán xét cố định số phận. Quyền năng tối cao luôn thuộc về sự tự do ý chí và lòng thiện lương của chính bạn.
          </p>
          <div className="pt-1 flex items-center gap-1 text-[11px] text-[#A78BFA]">
            <Heart className="w-3 h-3 text-rose-400" />
            <span>Phát triển vì sự bình an và khai sáng</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
        <p>© 2026 MYSTIC TAROT. Đã đăng ký bản quyền. Phát triển cho cộng đồng yêu thích Tarot & Tử Vi.</p>
        <div className="flex items-center gap-4 text-slate-400">
          <Link href="/about" className="hover:text-white transition-colors">Về chúng tôi</Link>
          <span>•</span>
          <Link href="/knowledge" className="hover:text-white transition-colors">Điều khoản & Đạo đức</Link>
          <span>•</span>
          <Link href="/reading" className="hover:text-white transition-colors">Trải bài ngay</Link>
        </div>
      </div>
    </footer>
  );
};
