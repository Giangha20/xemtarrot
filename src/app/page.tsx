'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Starfield } from '@/components/common/Starfield';
import { TarotCardView } from '@/components/tarot/TarotCardView';
import { CardDetailModal } from '@/components/tarot/CardDetailModal';
import { TAROT_CARDS } from '@/data/tarotCards';
import { TAROT_SPREADS } from '@/data/spreads';
import { TarotCard } from '@/types/tarot';
import { sound } from '@/lib/sound';
import {
  Sparkles,
  ArrowRight,
  Compass,
  Layers,
  Heart,
  Briefcase,
  User,
  Eye,
  Sun,
  Moon
} from 'lucide-react';

export default function HomePage() {
  const [dailyCard, setDailyCard] = useState<TarotCard | null>(null);
  const [dailyCardReversed, setDailyCardReversed] = useState(false);
  const [selectedModalCard, setSelectedModalCard] = useState<TarotCard | null>(null);

  // Quick Daily Card Draw
  const handleDrawDailyCard = () => {
    sound.playShuffle();
    const randomIndex = Math.floor(Math.random() * TAROT_CARDS.length);
    const card = TAROT_CARDS[randomIndex];
    const isReversed = Math.random() < 0.35;
    setDailyCard(card);
    setDailyCardReversed(isReversed);
    setTimeout(() => {
      sound.playCompletionChord();
    }, 300);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Starfield />

      {/* 1. HERO SECTION */}
      <section className="relative z-10 pt-12 pb-20 sm:pt-20 sm:pb-28 px-4 sm:px-6 max-w-7xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#24143F]/90 border border-[#D8B56D]/50 text-[#D8B56D] text-xs font-serif tracking-widest shadow-[0_0_20px_rgba(216,181,109,0.25)] animate-pulse-glow">
          <Sparkles className="w-4 h-4 text-[#D8B56D]" /> MYSTIC TAROT – THÔNG ĐIỆP TỪ VŨ TRỤ
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-black text-[#F5F0FF] tracking-wider uppercase leading-tight max-w-4xl mx-auto">
          THE UNIVERSE HAS A <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D8B56D] via-[#F3DE9A] to-[#D8B56D] drop-shadow-[0_0_35px_rgba(216,181,109,0.5)]">
            MESSAGE FOR YOU
          </span>
        </h1>

        <p className="font-serif italic text-base sm:text-xl text-[#A78BFA] max-w-2xl mx-auto leading-relaxed">
          "Mỗi lá bài là một câu chuyện. Mỗi lần rút bài là một hành trình khám phá bản thân."
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/reading"
            onClick={() => sound.playChime(660)}
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-gradient-to-r from-[#D8B56D] via-[#F1D793] to-[#D8B56D] text-[#100B1D] font-serif font-black text-sm sm:text-base tracking-widest uppercase shadow-[0_0_30px_rgba(216,181,109,0.5)] hover:shadow-[0_0_45px_rgba(216,181,109,0.8)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <Compass className="w-5 h-5 stroke-[2.5]" />
            <span>BẮT ĐẦU TRẢI BÀI</span>
          </Link>

          <Link
            href="/cards"
            onClick={() => sound.playChime(528)}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-slate-200 border border-white/15 font-serif font-bold text-sm tracking-wider uppercase backdrop-blur-sm hover:border-[#D8B56D]/50 transition-all flex items-center justify-center gap-2"
          >
            <Layers className="w-5 h-5 text-[#A78BFA]" />
            <span>KHÁM PHÁ 78 LÁ BÀI</span>
          </Link>
        </div>

        {/* Central Visual: Glowing 3D Deck with Orbiting Cosmic Motifs */}
        <div className="pt-8 sm:pt-12 relative flex items-center justify-center">
          <div className="relative w-56 h-72 sm:w-64 sm:h-80 flex items-center justify-center">
            {/* Orbiting celestial circles */}
            <div className="absolute inset-0 rounded-full border border-[#D8B56D]/20 animate-spin" style={{ animationDuration: '60s' }}>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#24143F] border border-[#D8B56D] flex items-center justify-center text-[#D8B56D]">
                <Sun className="w-3.5 h-3.5" />
              </div>
            </div>

            <div className="absolute -inset-4 rounded-full border border-dashed border-[#A78BFA]/20 animate-spin" style={{ animationDuration: '90s', animationDirection: 'reverse' }}>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#24143F] border border-[#A78BFA] flex items-center justify-center text-[#A78BFA]">
                <Moon className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Glowing Stacked Card Deck */}
            <div className="relative w-44 h-64 sm:w-52 sm:h-72 rounded-2xl border-2 border-[#D8B56D] bg-gradient-to-br from-[#24143F] via-[#160D29] to-[#0A0714] shadow-[0_0_50px_rgba(216,181,109,0.45)] flex flex-col items-center justify-center p-4 animate-float cursor-pointer group"
              onClick={handleDrawDailyCard}
            >
              <div className="w-16 h-16 rounded-full border border-[#D8B56D]/70 bg-gradient-to-tr from-[#D8B56D]/20 to-[#A78BFA]/30 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Sparkles className="w-8 h-8 text-[#D8B56D]" />
              </div>
              <span className="font-serif font-black tracking-widest text-xs text-[#D8B56D] uppercase">
                ✦ CHẠM ĐỂ RÚT BÀI NGÀY ✦
              </span>
              <span className="text-[10px] text-slate-400 mt-1">
                Nhận thông điệp trực giác hôm nay
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DAILY CARD REVEAL MODAL / DRAWER */}
      {dailyCard && (
        <section className="relative z-10 max-w-3xl mx-auto px-4 py-8 animate-in fade-in zoom-in-95 duration-300">
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#24143F] via-[#190E2D] to-[#100B1D] border-2 border-[#D8B56D] shadow-[0_0_50px_rgba(216,181,109,0.4)] text-center space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#100B1D] border border-[#D8B56D]/40 text-[#D8B56D] text-xs font-serif font-bold">
              <Sun className="w-3.5 h-3.5" /> THÔNG ĐIỆP HÔM NAY CỦA BẠN
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <TarotCardView
                card={dailyCard}
                isFlipped={true}
                isReversed={dailyCardReversed}
                size="md"
                interactive={false}
              />
              <div className="text-left space-y-3 max-w-md">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F5F0FF]">
                    {dailyCard.nameVi}
                  </h3>
                  <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${
                    dailyCardReversed ? 'bg-rose-950 text-rose-300' : 'bg-emerald-950 text-emerald-300'
                  }`}>
                    {dailyCardReversed ? 'Lá Ngược (Reversed)' : 'Lá Xuôi (Upright)'}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-serif italic">
                  "{dailyCardReversed ? dailyCard.reversed.keyMessage : dailyCard.upright.keyMessage}"
                </p>

                <div className="p-3 rounded-xl bg-black/40 border border-white/10 text-xs text-slate-300">
                  <strong className="text-[#D8B56D] block mb-1">Lời khuyên ngày:</strong>
                  {dailyCardReversed ? dailyCard.reversed.advice : dailyCard.upright.advice}
                </div>

                <div className="flex gap-2 pt-1">
                  <button
                    onClick={() => setSelectedModalCard(dailyCard)}
                    className="px-4 py-2 rounded-full bg-[#24143F] hover:bg-[#381F63] text-[#D8B56D] border border-[#D8B56D]/40 text-xs font-bold flex items-center gap-1.5 transition-all"
                  >
                    <Eye className="w-3.5 h-3.5" /> Xem Chi Tiết
                  </button>
                  <button
                    onClick={() => setDailyCard(null)}
                    className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 text-xs border border-white/10"
                  >
                    Đóng lại
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. CÁC MỤC GIỚI THIỆU: TAROT LÀ GÌ & KHÁM PHÁ ĐIỀU GÌ */}
      <section className="relative z-10 py-16 px-4 sm:px-6 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-[#D8B56D] uppercase tracking-widest font-serif">
            ✦ KHÁM PHÁ CHIỀU SÂU TÂM HỒN ✦
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F5F0FF]">
            TAROT CÓ THỂ GIÚP BẠN ĐIỀU GÌ?
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
            Không phải là bói toán may rủi mù quáng; Tarot là phương tiện chiêm nghiệm sâu sắc mở ra sự sáng rõ cho mọi ngả đường cuộc sống.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-[#150D27]/85 border border-white/10 hover:border-[#D8B56D]/40 transition-all space-y-3">
            <div className="w-10 h-10 rounded-full bg-rose-950/60 border border-rose-500/40 flex items-center justify-center text-rose-400">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#F5F0FF]">Tình Cảm & Mối Quan Hệ</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Thấu hiểu cảm xúc chân thật của bản thân và đối phương, nhận diện những nút thắt tâm lý và tìm kiếm con đường hàn gắn yêu thương.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#150D27]/85 border border-white/10 hover:border-[#D8B56D]/40 transition-all space-y-3">
            <div className="w-10 h-10 rounded-full bg-sky-950/60 border border-sky-500/40 flex items-center justify-center text-sky-400">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#F5F0FF]">Sự Nghiệp & Công Việc</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Soi tỏ cơ hội thăng tiến, phát huy thế mạnh vượt trội, hóa giải xung đột môi trường làm việc và đưa ra chiến lược kinh doanh sáng suốt.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#150D27]/85 border border-white/10 hover:border-[#D8B56D]/40 transition-all space-y-3">
            <div className="w-10 h-10 rounded-full bg-purple-950/60 border border-purple-500/40 flex items-center justify-center text-purple-400">
              <User className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#F5F0FF]">Phát Triển Bản Thân</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Khám phá phần tối (Shadow Self), vượt qua những niềm tin giới hạn, chữa lành các tổn thương tiềm thức và đánh thức tiềm năng vô hạn.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#150D27]/85 border border-white/10 hover:border-[#D8B56D]/40 transition-all space-y-3">
            <div className="w-10 h-10 rounded-full bg-amber-950/60 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#F5F0FF]">Định Hướng Tương Lai</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Nhận diện các xu hướng phát triển tự nhiên, chuẩn bị tâm thế vững vàng trước những bước ngoặt lớn của số phận.
            </p>
          </div>
        </div>
      </section>

      {/* 4. CÁC PHƯƠNG PHÁP TRẢI BÀI */}
      <section className="relative z-10 py-16 px-4 sm:px-6 bg-[#0D0817] border-y border-[#D8B56D]/20">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-[#D8B56D] uppercase tracking-widest font-serif">
              ✦ ĐA DẠNG BỐ CỤC ✦
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F5F0FF]">
              CÁC PHƯƠNG PHÁP TRẢI BÀI
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
              Từ trải bài 1 lá nhanh chóng đến cấu trúc Thập Tự Celtic 10 lá kinh điển.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TAROT_SPREADS.slice(0, 3).map((spread) => (
              <div
                key={spread.id}
                className="p-6 rounded-2xl bg-[#150D27] border border-[#D8B56D]/30 flex flex-col justify-between space-y-4 hover:border-[#D8B56D] transition-all"
              >
                <div className="space-y-2">
                  <span className="px-3 py-1 rounded-full bg-[#24143F] text-[#D8B56D] font-bold text-[10px] inline-block">
                    {spread.cardCount} LÁ BÀI
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#F5F0FF]">
                    {spread.nameVi}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {spread.description}
                  </p>
                </div>

                <Link
                  href="/reading"
                  className="text-xs font-bold text-[#D8B56D] hover:underline flex items-center gap-1.5 pt-2"
                >
                  <span>Chọn trải bài này</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <Link
              href="/reading"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D8B56D] to-[#E8C882] text-[#100B1D] font-serif font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all"
            >
              <span>XEM TẤT CẢ 5 PHƯƠNG PHÁP TRẢI BÀI</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. HƯỚNG DẪN 4 BƯỚC SỬ DỤNG TRỰC QUAN */}
      <section className="relative z-10 py-16 px-4 sm:px-6 max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-[#D8B56D] uppercase tracking-widest font-serif">
            ✦ DỄ DÀNG THAO TÁC ✦
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F5F0FF]">
            HƯỚNG DẪN TRẢI BÀI TRÊN MYSTIC TAROT
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-2 text-center">
            <div className="w-10 h-10 rounded-full bg-[#24143F] border border-[#D8B56D] text-[#D8B56D] font-bold text-sm flex items-center justify-center mx-auto mb-3">
              1
            </div>
            <h4 className="font-serif text-sm font-bold text-[#F5F0FF]">Nhập Câu Hỏi</h4>
            <p className="text-xs text-slate-400">
              Viết ra điều bạn đang băn khoăn và chọn chủ đề liên quan để định hướng năng lượng.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-2 text-center">
            <div className="w-10 h-10 rounded-full bg-[#24143F] border border-[#D8B56D] text-[#D8B56D] font-bold text-sm flex items-center justify-center mx-auto mb-3">
              2
            </div>
            <h4 className="font-serif text-sm font-bold text-[#F5F0FF]">Tĩnh Tâm Ý Niệm</h4>
            <p className="text-xs text-slate-400">
              Dành một chút thời gian hít thở sâu, thả lỏng tâm trí và kết nối với trực giác của bạn.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-2 text-center">
            <div className="w-10 h-10 rounded-full bg-[#24143F] border border-[#D8B56D] text-[#D8B56D] font-bold text-sm flex items-center justify-center mx-auto mb-3">
              3
            </div>
            <h4 className="font-serif text-sm font-bold text-[#F5F0FF]">Tự Tay Rút Bài</h4>
            <p className="text-xs text-slate-400">
              Xáo bộ bài 78 lá và tự tay chọn từng lá bài từ vòng cung fanning hoặc chọn rút tự động.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-2 text-center">
            <div className="w-10 h-10 rounded-full bg-[#24143F] border border-[#D8B56D] text-[#D8B56D] font-bold text-sm flex items-center justify-center mx-auto mb-3">
              4
            </div>
            <h4 className="font-serif text-sm font-bold text-[#F5F0FF]">Nhận Thông Điệp</h4>
            <p className="text-xs text-slate-400">
              Đọc giải nghĩa chi tiết từng lá, bức tranh tổng quan và lời khuyên hành động thực tiễn.
            </p>
          </div>
        </div>
      </section>

      {/* Modal for card detail */}
      {selectedModalCard && (
        <CardDetailModal
          card={selectedModalCard}
          isOpen={true}
          onClose={() => setSelectedModalCard(null)}
          initialOrientation={dailyCardReversed ? 'reversed' : 'upright'}
        />
      )}
    </div>
  );
}
