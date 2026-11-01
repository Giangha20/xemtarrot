'use client';

import React from 'react';
import { Starfield } from '@/components/common/Starfield';
import { Sparkles, Shield, Compass, BookOpen, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="relative min-h-screen py-10 px-4 sm:px-6">
      <Starfield />

      <main className="relative z-10 max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#24143F] border border-[#D8B56D]/40 text-[#D8B56D] text-xs font-serif">
            <Sparkles className="w-3.5 h-3.5" /> GIỚI THIỆU DỰ ÁN
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#F5F0FF] tracking-wide">
            MYSTIC TAROT
          </h1>
          <p className="font-serif italic text-base sm:text-lg text-[#D8B56D]">
            "Khám Phá Thông Điệp Từ Những Lá Bài – Thấu Hiểu Để Làm Chủ Cuộc Đời"
          </p>
        </div>

        {/* Mission Card */}
        <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#24143F]/90 via-[#190E2D]/90 to-[#100B1D]/90 border border-[#D8B56D]/40 shadow-2xl space-y-4">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#F5F0FF] flex items-center gap-2">
            <Compass className="w-5 h-5 text-[#D8B56D]" /> Sứ Mệnh Của Chúng Tôi
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            <strong>MYSTIC TAROT</strong> được xây dựng với mục tiêu trở thành một không gian chiêm nghiệm tĩnh lặng, thanh khiết và sâu sắc giữa nhịp sống hối hả. Chúng tôi xem Tarot như một tác phẩm nghệ thuật biểu tượng học và là chiếc gương soi chiếu tiềm thức, giúp mỗi người tự đối thoại chân thật với chính mình.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Tại đây, bạn không tìm thấy những lời phán đoán mê tín dị đoan mang tính dọa dẫm hay tước đoạt tự do ý chí. Thay vào đó, mỗi lá bài là một nguồn cảm hứng, một góc nhìn đa chiều và một lời khuyên thực tế để bạn chữa lành tổn thương, đánh thức tiềm năng và can đảm bước tiếp.
          </p>
        </div>

        {/* The Rider-Waite-Smith Heritage */}
        <div className="p-6 sm:p-10 rounded-3xl bg-black/40 border border-white/10 space-y-4">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#D8B56D] flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#D8B56D]" /> Di Sản Rider-Waite-Smith (1909)
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Toàn bộ 78 lá bài trên Mystic Tarot được xây dựng dựa trên hệ thống chuẩn mực kinh điển <strong>Rider-Waite-Smith (RWS)</strong>, được xuất bản lần đầu năm 1909 tại London bởi học giả Arthur Edward Waite và được minh họa bởi nữ nghệ sĩ thiên tài Pamela Colman Smith.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
              <span className="font-bold text-xs uppercase text-[#A78BFA] block">Major Arcana (22 Lá)</span>
              <p className="text-xs text-slate-300">
                Phản ánh cuộc hành trình của Chàng Khờ từ khởi đầu ngây thơ đến sự giác ngộ viên mãn toàn diện.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
              <span className="font-bold text-xs uppercase text-emerald-400 block">Minor Arcana (56 Lá)</span>
              <p className="text-xs text-slate-300">
                Mổ xẻ 4 phương diện thực tế của đời sống: Ý chí (Gậy), Cảm xúc (Cốc), Trí tuệ (Kiếm) và Của cải (Tiền).
              </p>
            </div>
          </div>
        </div>

        {/* Ethical Code of Conduct */}
        <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-[#24143F]/80 to-[#120B20]/80 border-2 border-emerald-500/40 space-y-5">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-emerald-300 flex items-center gap-2">
            <Shield className="w-6 h-6 text-emerald-400" /> Quy Chuẩn Đạo Đức Mystic Tarot
          </h2>
          <div className="space-y-3 text-xs sm:text-sm text-slate-200">
            <div className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Tự do ý chí là tối thượng:</strong> Tương lai chưa bao giờ được khắc lên đá. Mọi quyết định của bạn ở hiện tại đều có quyền năng thay đổi kết quả sau cùng.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Không thay thế chuyên môn:</strong> Tarot là công cụ tham khảo tâm lý và chiêm nghiệm cảm xúc, không thay thế chẩn đoán y khoa, tư vấn pháp luật hoặc quyết định tài chính.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Bảo mật thông tin:</strong> Chúng tôi tôn trọng quyền riêng tư của bạn. Lịch sử xem bài được lưu trữ an toàn trong bộ nhớ trình duyệt (LocalStorage) của bạn.</span>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center pt-4 space-y-4">
          <p className="font-serif text-base text-[#F5F0FF] italic">
            "Vũ trụ luôn có một thông điệp dành riêng cho bạn vào đúng thời điểm bạn sẵn sàng lắng nghe."
          </p>
          <Link
            href="/reading"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D8B56D] to-[#E8C882] text-[#100B1D] font-serif font-bold text-sm uppercase tracking-widest shadow-[0_0_25px_rgba(216,181,109,0.5)] hover:scale-105 transition-all"
          >
            <span>BẮT ĐẦU TRẢI BÀI NGAY</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
    </div>
  );
}
