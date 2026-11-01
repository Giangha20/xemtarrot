'use client';

import React from 'react';
import { TarotCard } from '@/types/tarot';
import { sound } from '@/lib/sound';
import { Sparkles, Moon, Sun, Flame, Droplets, Wind, Mountain, Eye } from 'lucide-react';

interface TarotCardViewProps {
  card: TarotCard;
  isFlipped?: boolean; // true = show face, false = show back
  isReversed?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  interactive?: boolean;
  onFlip?: () => void;
  onClick?: () => void;
  showDetailsButton?: boolean;
  className?: string;
}

export const TarotCardView: React.FC<TarotCardViewProps> = ({
  card,
  isFlipped = true,
  isReversed = false,
  size = 'md',
  interactive = true,
  onFlip,
  onClick,
  showDetailsButton = false,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-24 h-40 text-xs',
    md: 'w-36 h-60 text-xs sm:w-44 sm:h-72 sm:text-sm',
    lg: 'w-48 h-80 text-sm sm:w-56 sm:h-96 sm:text-base',
    xl: 'w-64 h-[26rem] sm:w-72 sm:h-[30rem] text-base'
  }[size];

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isFlipped && onFlip) {
      sound.playCardFlip();
      onFlip();
    } else if (onClick) {
      sound.playChime(580);
      onClick();
    }
  };

  const getElementIcon = (element: string) => {
    switch (element) {
      case 'Lửa':
        return <Flame className="w-3.5 h-3.5 text-amber-400" />;
      case 'Nước':
        return <Droplets className="w-3.5 h-3.5 text-sky-400" />;
      case 'Khí':
        return <Wind className="w-3.5 h-3.5 text-violet-300" />;
      case 'Đất':
        return <Mountain className="w-3.5 h-3.5 text-emerald-400" />;
      default:
        return <Sparkles className="w-3.5 h-3.5 text-[#D8B56D]" />;
    }
  };

  // Suit Color Accent
  const getSuitAccent = (suit?: string) => {
    switch (suit) {
      case 'wands':
        return 'from-amber-600/20 via-orange-950/40 to-slate-950';
      case 'cups':
        return 'from-sky-600/20 via-indigo-950/40 to-slate-950';
      case 'swords':
        return 'from-violet-600/20 via-purple-950/40 to-slate-950';
      case 'pentacles':
        return 'from-emerald-600/20 via-emerald-950/40 to-slate-950';
      default:
        return 'from-amber-500/20 via-purple-950/50 to-slate-950'; // Major Arcana
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`relative select-none perspective-1000 ${sizeClasses} ${
        interactive ? 'cursor-pointer hover:-translate-y-1.5 transition-transform duration-300' : ''
      } ${className}`}
    >
      <div
        className={`w-full h-full duration-700 transform-style-3d transition-transform ${
          isFlipped ? '' : 'rotate-y-180'
        }`}
      >
        {/* CARD FACE */}
        <div
          className={`absolute inset-0 backface-hidden rounded-xl overflow-hidden border-2 border-[#D8B56D]/80 bg-gradient-to-b ${getSuitAccent(
            card.suit
          )} shadow-2xl flex flex-col justify-between p-2.5 sm:p-3.5 transition-shadow hover:shadow-[0_0_25px_rgba(216,181,109,0.45)]`}
        >
          {/* Outer Filigree Inset Frame */}
          <div className="absolute inset-1 rounded-lg border border-[#D8B56D]/30 pointer-events-none" />
          <div className="absolute inset-1.5 rounded-md border border-[#D8B56D]/15 pointer-events-none" />

          {/* Top Header: Numeral & Element */}
          <div className="relative z-10 flex items-center justify-between text-[#D8B56D] font-serif border-b border-[#D8B56D]/20 pb-1">
            <span className="font-bold tracking-widest text-xs sm:text-sm">
              {card.romanNumeral || card.number}
            </span>
            <div className="flex items-center gap-1 text-[11px] font-sans text-slate-300">
              {getElementIcon(card.element)}
              <span className="hidden sm:inline font-medium">{card.element}</span>
            </div>
          </div>

          {/* Central Artwork Illustration Area */}
          <div
            className={`relative flex-1 my-1.5 rounded-lg overflow-hidden flex flex-col items-center justify-center bg-black/40 border border-[#D8B56D]/25 p-2 ${
              isReversed ? 'rotate-180 transition-transform' : ''
            }`}
          >
            {/* Celestial Geometry Background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none">
              <div className="w-28 h-28 rounded-full border border-[#D8B56D] flex items-center justify-center">
                <div className="w-20 h-20 rotate-45 border border-[#D8B56D]" />
              </div>
            </div>

            {/* Central Mystical Motif */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#24143F] to-[#4C2882] border border-[#D8B56D]/60 flex items-center justify-center shadow-lg mb-1.5">
                {card.arcana === 'major' ? (
                  <Sun className="w-6 h-6 sm:w-8 sm:h-8 text-[#D8B56D] animate-pulse" />
                ) : (
                  <Moon className="w-6 h-6 sm:w-8 sm:h-8 text-[#A78BFA]" />
                )}
              </div>

              <span className="text-[10px] sm:text-xs text-[#D8B56D] font-serif tracking-wider uppercase opacity-90 line-clamp-1">
                {card.astrology}
              </span>

              <div className="mt-1 flex flex-wrap gap-1 justify-center max-w-[90%]">
                {card.keywordsVi.slice(0, 2).map((kw, i) => (
                  <span
                    key={i}
                    className="text-[9px] px-1.5 py-0.5 rounded-full bg-[#100B1D]/80 border border-[#A78BFA]/30 text-purple-200"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card Footer Banner */}
          <div className="relative z-10 text-center border-t border-[#D8B56D]/20 pt-1.5">
            <h4 className="font-serif font-bold text-xs sm:text-sm text-[#F5F0FF] tracking-wide line-clamp-1">
              {card.nameVi.split('–')[1] ? card.nameVi.split('–')[1].trim() : card.nameVi}
            </h4>
            <p className="text-[10px] text-slate-400 font-sans tracking-tight truncate">
              {card.name}
            </p>

            {/* Upright / Reversed Tag */}
            {isReversed !== undefined && (
              <div className="mt-1 flex items-center justify-center">
                <span
                  className={`text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full font-medium ${
                    isReversed
                      ? 'bg-rose-950/80 text-rose-300 border border-rose-500/40'
                      : 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/40'
                  }`}
                >
                  {isReversed ? 'Lá Ngược (Reversed)' : 'Lá Xuôi (Upright)'}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* CARD BACK */}
        <div
          className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl overflow-hidden border-2 border-[#D8B56D] bg-gradient-to-br from-[#100B1D] via-[#24143F] to-[#0A0714] shadow-2xl flex flex-col items-center justify-center p-3 text-[#D8B56D]"
        >
          {/* Card Back Filigree Pattern */}
          <div className="absolute inset-1.5 rounded-lg border border-[#D8B56D]/40 pointer-events-none" />
          <div className="absolute inset-3 rounded-md border border-[#D8B56D]/20 pointer-events-none" />

          {/* Center Sacred Mandala */}
          <div className="relative flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-[#D8B56D]/70 flex items-center justify-center relative">
              <div className="absolute inset-1 rounded-full border border-dashed border-[#A78BFA]/50 animate-spin" style={{ animationDuration: '30s' }} />
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#D8B56D]/20 to-[#A78BFA]/30 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-[#D8B56D]" />
              </div>
            </div>

            <div className="mt-3 text-center">
              <span className="font-serif tracking-widest text-[10px] sm:text-xs text-[#D8B56D] uppercase block">
                MYSTIC TAROT
              </span>
              <span className="text-[9px] text-[#A78BFA]/70 tracking-tighter">
                ✦ Tĩnh Tâm & Khám Phá ✦
              </span>
            </div>
          </div>
        </div>
      </div>

      {showDetailsButton && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (onClick) onClick();
          }}
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-20 px-2.5 py-1 rounded-full bg-[#24143F] hover:bg-[#3A2366] text-[#D8B56D] text-[10px] font-sans border border-[#D8B56D]/50 shadow-lg flex items-center gap-1 whitespace-nowrap"
        >
          <Eye className="w-3 h-3" /> Chi tiết
        </button>
      )}
    </div>
  );
};
