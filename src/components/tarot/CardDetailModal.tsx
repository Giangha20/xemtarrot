'use client';

import React, { useState } from 'react';
import { TarotCard } from '@/types/tarot';
import { TarotCardView } from './TarotCardView';
import { X, Sparkles, Heart, Briefcase, DollarSign, Users, Compass, BookOpen, AlertTriangle } from 'lucide-react';

interface CardDetailModalProps {
  card: TarotCard | null;
  isOpen: boolean;
  onClose: () => void;
  initialOrientation?: 'upright' | 'reversed';
}

export const CardDetailModal: React.FC<CardDetailModalProps> = ({
  card,
  isOpen,
  onClose,
  initialOrientation = 'upright'
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'upright' | 'reversed' | 'advice'>('overview');
  const [viewOrientation, setViewOrientation] = useState<'upright' | 'reversed'>(initialOrientation);

  if (!isOpen || !card) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-gradient-to-b from-[#1C1233] via-[#150D27] to-[#100B1D] border-2 border-[#D8B56D]/70 rounded-2xl shadow-[0_0_60px_rgba(216,181,109,0.3)] overflow-hidden flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#D8B56D]/30 bg-[#24143F]/80">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#D8B56D]/20 border border-[#D8B56D]/50 flex items-center justify-center text-[#D8B56D]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-serif text-lg sm:text-xl font-bold text-[#F5F0FF]">
                {card.nameVi}
              </h2>
              <p className="text-xs text-slate-400 font-sans">
                {card.name} • {card.arcana === 'major' ? 'Ẩn Chính (Major Arcana)' : `Ẩn Phụ (${card.suit?.toUpperCase()})`} • {card.element}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors border border-white/10"
            aria-label="Đóng cửa sổ"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex overflow-x-auto border-b border-[#D8B56D]/20 bg-[#100B1D]/90 px-4 gap-2 scrollbar-none">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2.5 text-xs sm:text-sm font-medium whitespace-nowrap transition-colors border-b-2 flex items-center gap-1.5 ${
              activeTab === 'overview'
                ? 'border-[#D8B56D] text-[#D8B56D]'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <BookOpen className="w-4 h-4" /> Tổng Quan & Biểu Tượng
          </button>
          <button
            onClick={() => setActiveTab('upright')}
            className={`px-4 py-2.5 text-xs sm:text-sm font-medium whitespace-nowrap transition-colors border-b-2 flex items-center gap-1.5 ${
              activeTab === 'upright'
                ? 'border-emerald-400 text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Compass className="w-4 h-4" /> Ý Nghĩa Lá Xuôi
          </button>
          <button
            onClick={() => setActiveTab('reversed')}
            className={`px-4 py-2.5 text-xs sm:text-sm font-medium whitespace-nowrap transition-colors border-b-2 flex items-center gap-1.5 ${
              activeTab === 'reversed'
                ? 'border-rose-400 text-rose-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <AlertTriangle className="w-4 h-4" /> Ý Nghĩa Lá Ngược
          </button>
          <button
            onClick={() => setActiveTab('advice')}
            className={`px-4 py-2.5 text-xs sm:text-sm font-medium whitespace-nowrap transition-colors border-b-2 flex items-center gap-1.5 ${
              activeTab === 'advice'
                ? 'border-[#A78BFA] text-[#A78BFA]'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-4 h-4" /> Lời Khuyên & Tự Vấn
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6 flex-1 text-slate-200 text-sm leading-relaxed">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Left Card Visual Preview */}
            <div className="md:col-span-4 flex flex-col items-center justify-center p-4 bg-black/40 rounded-xl border border-[#D8B56D]/20">
              <TarotCardView
                card={card}
                isFlipped={true}
                isReversed={viewOrientation === 'reversed'}
                size="lg"
                interactive={false}
              />
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => setViewOrientation('upright')}
                  className={`px-3 py-1 text-xs rounded-full border transition-all ${
                    viewOrientation === 'upright'
                      ? 'bg-emerald-950/80 border-emerald-400 text-emerald-300 font-semibold shadow-md'
                      : 'bg-white/5 border-white/10 text-slate-400'
                  }`}
                >
                  Xem Xuôi
                </button>
                <button
                  onClick={() => setViewOrientation('reversed')}
                  className={`px-3 py-1 text-xs rounded-full border transition-all ${
                    viewOrientation === 'reversed'
                      ? 'bg-rose-950/80 border-rose-400 text-rose-300 font-semibold shadow-md'
                      : 'bg-white/5 border-white/10 text-slate-400'
                  }`}
                >
                  Xem Ngược
                </button>
              </div>
            </div>

            {/* Right Detailed Information Tabs */}
            <div className="md:col-span-8 space-y-5">
              {/* TAB 1: OVERVIEW & SYMBOLISM */}
              {activeTab === 'overview' && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  {/* Poetic Message Box */}
                  <div className="p-4 rounded-xl bg-gradient-to-r from-[#24143F] to-[#1E1136] border border-[#D8B56D]/40">
                    <span className="text-[11px] font-semibold text-[#D8B56D] uppercase tracking-wider block mb-1">
                      ✦ Thông Điệp Thiêng Liêng ✦
                    </span>
                    <p className="font-serif text-base italic text-[#F5F0FF]">
                      "{card.message}"
                    </p>
                  </div>

                  {/* Quick Info Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
                    <div className="p-2.5 rounded-lg bg-black/30 border border-white/5">
                      <span className="text-slate-400 block text-[10px]">Cung/Hành tinh</span>
                      <span className="font-semibold text-[#D8B56D]">{card.astrology}</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-black/30 border border-white/5">
                      <span className="text-slate-400 block text-[10px]">Nguyên tố</span>
                      <span className="font-semibold text-[#A78BFA]">{card.element}</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-black/30 border border-white/5 col-span-2 sm:col-span-1">
                      <span className="text-slate-400 block text-[10px]">Số thứ tự</span>
                      <span className="font-semibold text-slate-200">{card.romanNumeral || card.number}</span>
                    </div>
                  </div>

                  {/* Keywords */}
                  <div>
                    <h4 className="text-xs font-semibold text-[#D8B56D] uppercase tracking-wider mb-2">
                      Từ Khóa Cốt Lõi
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {card.keywordsVi.map((kw, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-md bg-[#24143F] border border-[#D8B56D]/30 text-xs text-[#F5F0FF]">
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Symbolism Breakdown */}
                  <div>
                    <h4 className="text-xs font-semibold text-[#D8B56D] uppercase tracking-wider mb-2">
                      Giải Mã Biểu Tượng Học Chi Tiết
                    </h4>
                    <div className="space-y-2">
                      {card.symbolism.map((sym, i) => (
                        <div key={i} className="p-2.5 rounded-lg bg-black/30 border border-white/5 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                          <span className="font-semibold text-[#D8B56D] text-xs min-w-[140px]">
                            • {sym.element}:
                          </span>
                          <span className="text-xs text-slate-300">{sym.meaning}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: UPRIGHT MEANING */}
              {activeTab === 'upright' && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40">
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wide block mb-1">
                      Thông Điệp Lá Xuôi (Upright)
                    </span>
                    <p className="text-emerald-100 font-medium">
                      {card.upright.keyMessage}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-[#D8B56D] uppercase tracking-wider mb-1">
                      Ý Nghĩa Tổng Quan
                    </h4>
                    <p className="text-slate-300 text-xs leading-relaxed bg-black/20 p-3 rounded-lg border border-white/5">
                      {card.upright.general}
                    </p>
                  </div>

                  {/* 6 Key Life Dimensions */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-black/30 border border-white/5 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-300">
                        <Heart className="w-3.5 h-3.5" /> Tình Yêu & Mối Quan Hệ
                      </div>
                      <p className="text-xs text-slate-300">{card.upright.love}</p>
                    </div>

                    <div className="p-3 rounded-lg bg-black/30 border border-white/5 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-sky-300">
                        <Briefcase className="w-3.5 h-3.5" /> Sự Nghiệp & Công Việc
                      </div>
                      <p className="text-xs text-slate-300">{card.upright.career}</p>
                    </div>

                    <div className="p-3 rounded-lg bg-black/30 border border-white/5 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-300">
                        <DollarSign className="w-3.5 h-3.5" /> Tài Chính & Tiền Bạc
                      </div>
                      <p className="text-xs text-slate-300">{card.upright.finance}</p>
                    </div>

                    <div className="p-3 rounded-lg bg-black/30 border border-white/5 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-300">
                        <Users className="w-3.5 h-3.5" /> Gia Đình & Xã Hội
                      </div>
                      <p className="text-xs text-slate-300">{card.upright.family}</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-[#24143F]/60 border border-[#D8B56D]/30 space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#D8B56D]">
                      <Compass className="w-3.5 h-3.5" /> Lời Khuyên Hành Động
                    </div>
                    <p className="text-xs text-purple-100">{card.upright.advice}</p>
                  </div>
                </div>
              )}

              {/* TAB 3: REVERSED MEANING */}
              {activeTab === 'reversed' && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-500/40">
                    <span className="text-xs font-bold text-rose-400 uppercase tracking-wide block mb-1">
                      Thông Điệp Lá Ngược (Reversed)
                    </span>
                    <p className="text-rose-100 font-medium">
                      {card.reversed.keyMessage}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-[#D8B56D] uppercase tracking-wider mb-1">
                      Năng Lượng Bị Cản Trở / Mất Cân Bằng
                    </h4>
                    <p className="text-slate-300 text-xs leading-relaxed bg-black/20 p-3 rounded-lg border border-white/5">
                      {card.reversed.general}
                    </p>
                  </div>

                  {/* Reversed Dimensions */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-black/30 border border-white/5 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-300">
                        <Heart className="w-3.5 h-3.5" /> Tình Cảm Khi Ngược
                      </div>
                      <p className="text-xs text-slate-300">{card.reversed.love}</p>
                    </div>

                    <div className="p-3 rounded-lg bg-black/30 border border-white/5 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-sky-300">
                        <Briefcase className="w-3.5 h-3.5" /> Công Việc Khi Ngược
                      </div>
                      <p className="text-xs text-slate-300">{card.reversed.career}</p>
                    </div>

                    <div className="p-3 rounded-lg bg-black/30 border border-white/5 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-300">
                        <DollarSign className="w-3.5 h-3.5" /> Tài Chính Khi Ngược
                      </div>
                      <p className="text-xs text-slate-300">{card.reversed.finance}</p>
                    </div>

                    <div className="p-3 rounded-lg bg-black/30 border border-white/5 space-y-1">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-300">
                        <Users className="w-3.5 h-3.5" /> Gia Đình Khi Ngược
                      </div>
                      <p className="text-xs text-slate-300">{card.reversed.family}</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-rose-950/30 border border-rose-500/30 space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-300">
                      <Compass className="w-3.5 h-3.5" /> Lời Khuyên Chuyển Hóa
                    </div>
                    <p className="text-xs text-rose-100">{card.reversed.advice}</p>
                  </div>
                </div>
              )}

              {/* TAB 4: DEEP ADVICE & REFLECTIONS */}
              {activeTab === 'advice' && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-black/30 border border-white/5 space-y-1">
                      <span className="text-[10px] uppercase font-bold text-amber-400 block">
                        Cần Chú Ý Điều Gì?
                      </span>
                      <p className="text-xs text-slate-300">{card.adviceDetail.whatToWatch}</p>
                    </div>

                    <div className="p-3 rounded-lg bg-black/30 border border-white/5 space-y-1">
                      <span className="text-[10px] uppercase font-bold text-rose-400 block">
                        Điều Gì Nên Thay Đổi?
                      </span>
                      <p className="text-xs text-slate-300">{card.adviceDetail.whatToChange}</p>
                    </div>

                    <div className="p-3 rounded-lg bg-black/30 border border-white/5 space-y-1">
                      <span className="text-[10px] uppercase font-bold text-emerald-400 block">
                        Phát Huy Điều Gì?
                      </span>
                      <p className="text-xs text-slate-300">{card.adviceDetail.whatToEmbrace}</p>
                    </div>

                    <div className="p-3 rounded-lg bg-black/30 border border-white/5 space-y-1">
                      <span className="text-[10px] uppercase font-bold text-violet-400 block">
                        Cạm Bẫy Cần Tránh
                      </span>
                      <p className="text-xs text-slate-300">{card.adviceDetail.pitfalls}</p>
                    </div>
                  </div>

                  {/* Reflection Questions */}
                  <div className="p-4 rounded-xl bg-[#24143F]/70 border border-[#D8B56D]/40 space-y-2">
                    <h4 className="text-xs font-bold text-[#D8B56D] uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4" /> 3 Câu Hỏi Tự Soi Chiếu Nội Tâm (Journaling)
                    </h4>
                    <div className="space-y-1.5">
                      {card.reflectionQuestions.map((q, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-purple-100">
                          <span className="font-bold text-[#D8B56D]">{idx + 1}.</span>
                          <span>{q}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
