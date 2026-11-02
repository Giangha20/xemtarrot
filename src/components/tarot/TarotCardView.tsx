'use client';

import React, { useState } from 'react';
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
  const [imgError, setImgError] = useState(false);

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
          )} shadow-2xl flex flex-col justify-between p-2 sm:p-2.5 transition-shadow hover:shadow-[0_0_25px_rgba(216,181,109,0.55)]`}
        >
          {/* Outer Filigree Inset Frame */}
          <div className="absolute inset-1 rounded-lg border border-[#D8B56D]/30 pointer-events-none" />
          <div className="absolute inset-1.5 rounded-md border border-[#D8B56D]/15 pointer-events-none" />

          {/* Top Header: Numeral & Element */}
          <div className="relative z-10 flex items-center justify-between text-[#D8B56D] font-serif border-b border-[#D8B56D]/20 pb-0.5 px-1">
            <span className="font-bold tracking-widest text-[11px] sm:text-xs">
              {card.romanNumeral || card.number}
            </span>
            <div className="flex items-center gap-1 text-[10px] font-sans text-slate-300">
              {getElementIcon(card.element)}
              <span className="hidden sm:inline font-medium">{card.element}</span>
            </div>
          </div>

          {/* Central Artwork: Real Authentic 1909 Rider-Waite-Smith Illustration */}
          <div
            className={`relative flex-1 my-1 rounded-md overflow-hidden flex items-center justify-center bg-[#0A0512] border border-[#D8B56D]/40 shadow-inner ${
              isReversed ? 'rotate-180 transition-transform' : ''
            }`}
          >
            {!imgError ? (
              <img
                src={`/images/cards/${card.id}.jpg`}
                alt={`${card.nameVi} - ${card.name}`}
                className="w-full h-full object-cover object-center rounded"
                loading="lazy"
                onError={() => setImgError(true)}
              />
            ) : (
              /* Fallback if image fails */
              <div className="relative z-10 flex flex-col items-center text-center p-2">
                <div className="w-12 h-12 rounded-full bg-[#24143F] border border-[#D8B56D]/60 flex items-center justify-center shadow-lg mb-1">
                  {card.arcana === 'major' ? (
                    <Sun className="w-6 h-6 text-[#D8B56D]" />
                  ) : (
                    <Moon className="w-6 h-6 text-[#A78BFA]" />
                  )}
                </div>
                <span className="text-[10px] text-[#D8B56D] font-serif uppercase line-clamp-1">
                  {card.astrology}
                </span>
              </div>
            )}
          </div>

          {/* Card Footer Banner */}
          <div className="relative z-10 text-center border-t border-[#D8B56D]/20 pt-1">
            <h4 className="font-serif font-black text-xs sm:text-sm text-[#F5F0FF] tracking-wide line-clamp-1">
              {card.nameVi.split('–')[1] ? card.nameVi.split('–')[1].trim() : card.nameVi}
            </h4>
            <p className="text-[9px] sm:text-[10px] text-amber-200/80 font-sans tracking-tight truncate">
              {card.name}
            </p>

            {/* Upright / Reversed Tag */}
            {isReversed !== undefined && (
              <div className="mt-0.5 flex items-center justify-center">
                <span
                  className={`text-[8px] sm:text-[9px] px-2 py-0.2 rounded-full font-semibold ${
                    isReversed
                      ? 'bg-rose-950 text-rose-300 border border-rose-500/50'
                      : 'bg-emerald-950 text-emerald-300 border border-emerald-500/50'
                  }`}
                >
                  {isReversed ? 'Lá Ngược' : 'Lá Xuôi'}
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
            <div className="w-14 h-14 sm:w-18 sm:h-18 rounded-full border border-[#D8B56D]/70 flex items-center justify-center relative">
              <div className="absolute inset-1 rounded-full border border-dashed border-[#A78BFA]/50 animate-spin" style={{ animationDuration: '30s' }} />
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#D8B56D]/20 to-[#A78BFA]/30 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#D8B56D]" />
              </div>
            </div>

            <div className="mt-2.5 text-center">
              <span className="font-serif tracking-widest text-[10px] sm:text-xs text-[#D8B56D] font-black uppercase block">
                MYSTIC TAROT
              </span>
              <span className="text-[9px] text-[#A78BFA]/80 tracking-tighter">
                ✦ Rider-Waite-Smith ✦
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
