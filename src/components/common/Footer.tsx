'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, Shield, Heart, Compass, BookOpen, Layers } from 'lucide-react';

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
            Hệ thống trải bài Tarot chuyên nghiệp, kết hợp tri thức cổ xưa của bộ bài Rider-Waite-Smith 1909 với nghệ thuật tự vấn và thấu hiểu tâm lý hiện đại.
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
            <li>Trải Bài 1 Lá (Thông điệp ngày)</li>
            <li>Trải Bài 3 Lá (Quá khứ – Hiện tại – Tương lai)</li>
            <li>Trải Bài Tình Yêu (5 lá chuyên sâu)</li>
            <li>Trải Bài Công Việc & Sự Nghiệp (5 lá)</li>
            <li>Trải Bài Thập Tự Celtic (Celtic Cross 10 lá)</li>
          </ul>
        </div>

        {/* Col 4: Ethical Disclaimer */}
        <div className="space-y-2.5 p-4 rounded-xl bg-[#100B1D] border border-white/5">
          <h4 className="font-serif font-bold text-[#D8B56D] text-xs uppercase tracking-wider flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-emerald-400" /> Tuyên Bố Trách Nhiệm
          </h4>
          <p className="text-[11px] leading-relaxed text-slate-400">
            Tarot là công cụ hỗ trợ suy ngẫm, kết nối trực giác và khám phá bản thân. Chúng tôi không đưa ra những lời phán đoán tương lai bất biến, và không thay thế lời khuyên y tế, pháp lý hoặc tài chính chuyên môn. Tự do ý chí của bạn là tối thượng.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
        <p>© 2026 MYSTIC TAROT. Rider-Waite-Smith System (1909 Public Domain).</p>
        <p className="flex items-center gap-1 text-slate-400">
          Được thiết kế với <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> cho hành trình chữa lành tâm hồn.
        </p>
      </div>
    </footer>
  );
};
