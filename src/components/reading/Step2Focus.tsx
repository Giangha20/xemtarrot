'use client';

import React from 'react';
import { sound } from '@/lib/sound';
import { Sparkles, ArrowLeft, ArrowRight, Moon, Sun } from 'lucide-react';

interface Step2FocusProps {
  question: string;
  topic: string;
  onProceed: () => void;
  onBack: () => void;
}

export const Step2Focus: React.FC<Step2FocusProps> = ({
  question,
  topic,
  onProceed,
  onBack
}) => {
  const handleProceed = () => {
    sound.playChime(660);
    onProceed();
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8 text-center animate-in fade-in duration-500">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#24143F] border border-[#D8B56D]/40 text-[#D8B56D] text-xs font-serif">
          <Sparkles className="w-3.5 h-3.5" /> BƯỚC 2: TẬP TRUNG Ý NIỆM
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5F0FF] tracking-wide">
          HÃY LẮNG LÒNG VÀ TẬP TRUNG
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
          Hãy dành một chút thời gian tập trung vào câu hỏi của bạn. Hít một hơi thật sâu, lắng nghe tiếng gọi trực giác. Khi đã sẵn sàng, hãy chọn phương pháp trải bài.
        </p>
      </div>

      {/* Intention Display Box */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-[#24143F]/90 via-[#190E2C]/90 to-[#100B1D]/90 border-2 border-[#D8B56D]/60 shadow-[0_0_35px_rgba(216,181,109,0.25)] space-y-3">
        <span className="text-[10px] font-bold tracking-widest text-[#D8B56D] uppercase block">
          Ý Niệm Của Bạn (Chủ Đề: {topic})
        </span>
        <p className="font-serif text-lg sm:text-xl text-[#F5F0FF] italic leading-snug">
          "{question}"
        </p>
      </div>

      {/* Meditative Glowing Celestial Orb */}
      <div className="py-6 flex flex-col items-center justify-center relative">
        <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full border border-[#D8B56D]/40 flex items-center justify-center relative animate-pulse-glow">
          <div className="absolute inset-2 rounded-full border border-[#A78BFA]/30" />
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-[#24143F] via-[#3E1D70] to-[#D8B56D]/30 border border-[#D8B56D] flex items-center justify-center shadow-[0_0_40px_rgba(216,181,109,0.5)]">
            <Sun className="w-10 h-10 text-[#D8B56D] animate-spin" style={{ animationDuration: '45s' }} />
          </div>
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <Moon className="w-5 h-5 text-[#A78BFA]" />
          </div>
        </div>

        <p className="mt-4 text-xs text-slate-400 italic">
          "Hít vào sự bình an • Thở ra mọi nghi ngờ • Đón nhận chân lý"
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
        <button
          onClick={onBack}
          className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 text-xs font-medium flex items-center justify-center gap-2 transition-all"
        >
          <ArrowLeft className="w-4 h-4" /> Đổi Câu Hỏi
        </button>
        <button
          onClick={handleProceed}
          className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D8B56D] via-[#E8C882] to-[#D8B56D] text-[#100B1D] font-serif font-bold text-sm tracking-widest uppercase shadow-[0_0_25px_rgba(216,181,109,0.4)] hover:shadow-[0_0_35px_rgba(216,181,109,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          <span>TÔI ĐÃ SẴN SÀNG</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
