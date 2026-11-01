'use client';

import React from 'react';
import { SpreadType } from '@/types/tarot';
import { TAROT_SPREADS } from '@/data/spreads';
import { sound } from '@/lib/sound';
import { Sparkles, ArrowLeft, ArrowRight, RotateCw, Check } from 'lucide-react';

interface Step3SpreadSelectProps {
  selectedSpread: SpreadType;
  allowReversed: boolean;
  onSelectSpread: (spread: SpreadType) => void;
  onToggleReversed: (allowed: boolean) => void;
  onProceed: () => void;
  onBack: () => void;
}

export const Step3SpreadSelect: React.FC<Step3SpreadSelectProps> = ({
  selectedSpread,
  allowReversed,
  onSelectSpread,
  onToggleReversed,
  onProceed,
  onBack
}) => {
  const handleSpreadClick = (id: SpreadType) => {
    sound.playChime(528);
    onSelectSpread(id);
  };

  const handleToggleReversed = () => {
    sound.playChime(440);
    onToggleReversed(!allowReversed);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#24143F] border border-[#D8B56D]/40 text-[#D8B56D] text-xs font-serif">
          <Sparkles className="w-3.5 h-3.5" /> BƯỚC 3: CHỌN PHƯƠNG PHÁP TRẢI BÀI
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5F0FF] tracking-wide">
          CHỌN BỐ CỤC TRẢI BÀI PHÙ HỢP
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
          Mỗi phương pháp trải bài mang đến một góc nhìn và chiều sâu riêng biệt. Hãy chọn bố cục phù hợp nhất với câu hỏi của bạn.
        </p>
      </div>

      {/* Reversed Cards Toggle Box */}
      <div className="p-4 rounded-xl bg-[#24143F]/60 border border-[#D8B56D]/30 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3 text-left">
          <div className="w-9 h-9 rounded-full bg-[#D8B56D]/20 border border-[#D8B56D]/50 flex items-center justify-center text-[#D8B56D] shrink-0">
            <RotateCw className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold text-[#F5F0FF] block">
              Chế Độ Bài Ngược (Reversed Cards)
            </span>
            <span className="text-[11px] text-slate-300 block">
              Cho phép xuất hiện các lá bài ngược biểu thị năng lượng nội tâm, sự tắc nghẽn hoặc bài học cần nhìn nhận lại.
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={handleToggleReversed}
          className={`px-4 py-2 rounded-full text-xs font-bold transition-all border shrink-0 ${
            allowReversed
              ? 'bg-emerald-900/80 border-emerald-400 text-emerald-200 shadow-sm'
              : 'bg-white/5 border-white/10 text-slate-400'
          }`}
        >
          {allowReversed ? '✓ Đang Bật Bài Ngược' : '✕ Tắt Bài Ngược (Chỉ Xuôi)'}
        </button>
      </div>

      {/* Spreads Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {TAROT_SPREADS.map((spread) => {
          const isSelected = selectedSpread === spread.id;
          return (
            <div
              key={spread.id}
              onClick={() => handleSpreadClick(spread.id)}
              className={`p-5 rounded-2xl border-2 cursor-pointer transition-all relative overflow-hidden flex flex-col justify-between ${
                isSelected
                  ? 'bg-gradient-to-br from-[#2D1B4E] to-[#150D27] border-[#D8B56D] shadow-[0_0_30px_rgba(216,181,109,0.35)] scale-[1.01]'
                  : 'bg-black/40 border-white/10 hover:border-white/25 hover:bg-black/60'
              }`}
            >
              {isSelected && (
                <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-[#D8B56D] text-[#100B1D] flex items-center justify-center shadow-md">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
              )}

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#100B1D] border border-[#D8B56D]/40 text-[#D8B56D] text-[10px] font-bold">
                    {spread.cardCount} LÁ BÀI
                  </span>
                  <span className="text-xs text-[#A78BFA] font-serif italic">
                    {spread.tagline}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#F5F0FF]">
                  {spread.nameVi}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {spread.description}
                </p>

                {/* Positions Preview Tags */}
                <div className="pt-2">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                    Các Vị Trí Trong Trải Bài:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {spread.positions.map((pos) => (
                      <span
                        key={pos.index}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-slate-300"
                      >
                        {pos.nameVi}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-white/10">
        <button
          onClick={onBack}
          className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 text-xs font-medium flex items-center justify-center gap-2 transition-all"
        >
          <ArrowLeft className="w-4 h-4" /> Quay Lại
        </button>

        <button
          onClick={() => {
            sound.playChime(660);
            onProceed();
          }}
          className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D8B56D] via-[#E8C882] to-[#D8B56D] text-[#100B1D] font-serif font-bold text-sm tracking-widest uppercase shadow-[0_0_25px_rgba(216,181,109,0.4)] hover:shadow-[0_0_35px_rgba(216,181,109,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          <span>TIẾP TỤC: XÁO & RÚT BÀI</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
