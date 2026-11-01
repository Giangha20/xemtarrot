import React from 'react';
import { notFound } from 'next/navigation';
import { TAROT_CARDS, getCardById } from '@/data/tarotCards';
import { TarotCardView } from '@/components/tarot/TarotCardView';
import { Starfield } from '@/components/common/Starfield';
import Link from 'next/link';
import {
  Sparkles,
  ArrowLeft,
  Compass,
  AlertTriangle,
  BookOpen
} from 'lucide-react';
import type { Metadata } from 'next';

interface CardPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return TAROT_CARDS.map((card) => ({
    id: card.id
  }));
}

export async function generateMetadata({ params }: CardPageProps): Promise<Metadata> {
  const { id } = await params;
  const card = getCardById(id);
  if (!card) return { title: 'Không tìm thấy lá bài - Mystic Tarot' };

  return {
    title: `${card.nameVi} (${card.name}) – Ý Nghĩa Biểu Tượng & Lời Khuyên Tarot`,
    description: `Khám phá ý nghĩa chi tiết lá bài ${card.nameVi}: biểu tượng học, ý nghĩa xuôi và ngược trong tình yêu, công việc, tài chính và phát triển bản thân.`
  };
}

export default async function CardDetailPage({ params }: CardPageProps) {
  const { id } = await params;
  const card = getCardById(id);

  if (!card) {
    notFound();
  }

  return (
    <div className="relative min-h-screen py-10 px-4 sm:px-6">
      <Starfield />

      <main className="relative z-10 max-w-5xl mx-auto space-y-10">
        {/* Back Link */}
        <Link
          href="/cards"
          className="inline-flex items-center gap-2 text-xs text-[#D8B56D] hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Quay lại thư viện 78 lá bài
        </Link>

        {/* Hero Card Overview */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5 flex flex-col items-center justify-center p-6 bg-black/40 rounded-3xl border border-[#D8B56D]/30 shadow-2xl">
            <TarotCardView
              card={card}
              isFlipped={true}
              size="xl"
              interactive={false}
            />
          </div>

          <div className="md:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-serif text-[#D8B56D]">
                <Sparkles className="w-4 h-4" />
                <span>
                  {card.arcana === 'major' ? 'Lá Ẩn Chính (Major Arcana)' : `Lá Ẩn Phụ (${card.suit?.toUpperCase()})`}
                </span>
                <span>•</span>
                <span>Số {card.romanNumeral || card.number}</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#F5F0FF]">
                {card.nameVi}
              </h1>
              <p className="text-sm text-slate-400 font-sans">{card.name}</p>
            </div>

            {/* Sacred Message Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#24143F] to-[#160E27] border border-[#D8B56D]/40">
              <span className="text-[10px] uppercase font-bold text-[#D8B56D] tracking-wider block mb-1">
                ✦ Thông Điệp Vũ Trụ ✦
              </span>
              <p className="font-serif italic text-base text-[#F5F0FF]">
                "{card.message}"
              </p>
            </div>

            {/* Core Info */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-black/30 border border-white/5">
                <span className="text-slate-400 block text-[10px]">Cung hoàng đạo / Tinh tú:</span>
                <span className="font-semibold text-[#D8B56D]">{card.astrology}</span>
              </div>
              <div className="p-3 rounded-xl bg-black/30 border border-white/5">
                <span className="text-slate-400 block text-[10px]">Nguyên tố:</span>
                <span className="font-semibold text-[#A78BFA]">{card.element}</span>
              </div>
            </div>

            {/* Keywords */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#D8B56D] uppercase tracking-wider block">
                Từ Khóa Trọng Tâm:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {card.keywordsVi.map((kw, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-[#24143F] border border-[#D8B56D]/30 text-xs text-[#F5F0FF]"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Sections: Upright vs Reversed */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* UPRIGHT SECTION */}
          <div className="p-6 sm:p-8 rounded-3xl bg-black/40 border-2 border-emerald-500/40 space-y-4">
            <h2 className="font-serif text-xl font-bold text-emerald-300 flex items-center gap-2 border-b border-emerald-500/20 pb-3">
              <Compass className="w-5 h-5" /> Ý Nghĩa Lá Xuôi (Upright)
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100 font-semibold bg-emerald-950/40 p-3 rounded-xl border border-emerald-500/30">
              {card.upright.keyMessage}
            </p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {card.upright.general}
            </p>
            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-lg bg-white/5 space-y-0.5">
                <span className="font-bold text-rose-300">Tình yêu:</span>
                <p className="text-slate-300">{card.upright.love}</p>
              </div>
              <div className="p-2.5 rounded-lg bg-white/5 space-y-0.5">
                <span className="font-bold text-sky-300">Công việc:</span>
                <p className="text-slate-300">{card.upright.career}</p>
              </div>
              <div className="p-2.5 rounded-lg bg-white/5 space-y-0.5">
                <span className="font-bold text-emerald-300">Tài chính:</span>
                <p className="text-slate-300">{card.upright.finance}</p>
              </div>
            </div>
          </div>

          {/* REVERSED SECTION */}
          <div className="p-6 sm:p-8 rounded-3xl bg-black/40 border-2 border-rose-500/40 space-y-4">
            <h2 className="font-serif text-xl font-bold text-rose-300 flex items-center gap-2 border-b border-rose-500/20 pb-3">
              <AlertTriangle className="w-5 h-5" /> Ý Nghĩa Lá Ngược (Reversed)
            </h2>
            <p className="text-xs sm:text-sm text-rose-100 font-semibold bg-rose-950/40 p-3 rounded-xl border border-rose-500/30">
              {card.reversed.keyMessage}
            </p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {card.reversed.general}
            </p>
            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-lg bg-white/5 space-y-0.5">
                <span className="font-bold text-rose-300">Tình yêu khi ngược:</span>
                <p className="text-slate-300">{card.reversed.love}</p>
              </div>
              <div className="p-2.5 rounded-lg bg-white/5 space-y-0.5">
                <span className="font-bold text-sky-300">Công việc khi ngược:</span>
                <p className="text-slate-300">{card.reversed.career}</p>
              </div>
              <div className="p-2.5 rounded-lg bg-white/5 space-y-0.5">
                <span className="font-bold text-emerald-300">Tài chính khi ngược:</span>
                <p className="text-slate-300">{card.reversed.finance}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Symbolism Section */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#150D27]/90 border border-[#D8B56D]/30 space-y-4">
          <h2 className="font-serif text-xl font-bold text-[#D8B56D] flex items-center gap-2">
            <BookOpen className="w-5 h-5" /> Giải Mã Biểu Tượng Học
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {card.symbolism.map((sym, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <span className="font-bold text-xs text-[#D8B56D]">• {sym.element}</span>
                <p className="text-xs text-slate-300">{sym.meaning}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
