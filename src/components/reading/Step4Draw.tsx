'use client';

import React, { useState } from 'react';
import { DrawnCard, SpreadType, TarotCard } from '@/types/tarot';
import { TAROT_CARDS } from '@/data/tarotCards';
import { getSpreadById } from '@/data/spreads';
import { shuffleDeck } from '@/lib/tarotEngine';
import { sound } from '@/lib/sound';
import { Sparkles, Shuffle, Zap, RotateCcw, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';

interface Step4DrawProps {
  spreadType: SpreadType;
  allowReversed: boolean;
  onDrawComplete: (drawnCards: DrawnCard[]) => void;
  onBack: () => void;
}

export const Step4Draw: React.FC<Step4DrawProps> = ({
  spreadType,
  allowReversed,
  onDrawComplete,
  onBack
}) => {
  const spreadConfig = getSpreadById(spreadType);
  const targetCount = spreadConfig.cardCount;

  // Working deck of 78 cards
  const [deck, setDeck] = useState<TarotCard[]>(() => shuffleDeck(TAROT_CARDS));
  const [isShuffling, setIsShuffling] = useState(false);
  const [chosenCards, setChosenCards] = useState<TarotCard[]>([]);
  const [shuffleCount, setShuffleCount] = useState(1);

  const handleShuffle = (playSound = true) => {
    if (playSound) {
      sound.playShuffle();
    }
    setIsShuffling(true);
    setTimeout(() => {
      const newDeck = shuffleDeck(TAROT_CARDS);
      setDeck(newDeck);
      setChosenCards([]);
      setIsShuffling(false);
      setShuffleCount((prev) => prev + 1);
    }, 450);
  };

  // User manual pick of a card from the deck
  const handlePickCard = (card: TarotCard) => {
    if (chosenCards.length >= targetCount) return;
    if (chosenCards.some((c) => c.id === card.id)) return;

    sound.playCardFlip();
    const updated = [...chosenCards, card];
    setChosenCards(updated);
  };

  // Instant auto draw
  const handleAutoDraw = () => {
    sound.playShuffle();
    setIsShuffling(true);
    setTimeout(() => {
      const freshShuffled = shuffleDeck(TAROT_CARDS);
      const picked = freshShuffled.slice(0, targetCount);
      setChosenCards(picked);
      setIsShuffling(false);
      sound.playCompletionChord();
    }, 400);
  };

  // Final confirmation to proceed to Step 5
  const handleProceedToReading = () => {
    if (chosenCards.length < targetCount) return;

    sound.playCompletionChord();
    // Build DrawnCard objects
    const drawn: DrawnCard[] = chosenCards.map((card, idx) => {
      const isReversed = allowReversed ? Math.random() < 0.35 : false;
      return {
        card,
        isReversed,
        position: spreadConfig.positions[idx]
      };
    });

    onDrawComplete(drawn);
  };

  const remainingNeeded = targetCount - chosenCards.length;

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-300">
      {/* Header Info */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#24143F] border border-[#D8B56D]/40 text-[#D8B56D] text-xs font-serif">
          <Sparkles className="w-3.5 h-3.5" /> BƯỚC 4: XÁO & RÚT BÀI
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5F0FF] tracking-wide">
          {spreadConfig.nameVi.toUpperCase()}
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
          {remainingNeeded > 0
            ? `Hãy chọn thêm ${remainingNeeded} lá bài từ bộ 78 lá bên dưới, hoặc nhấn "Rút Nhanh" để vũ trụ chọn ngẫu nhiên cho bạn.`
            : `Tuyệt vời! Bạn đã chọn đủ ${targetCount} lá bài cho trải bài này.`}
        </p>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
          <button
            onClick={onBack}
            className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 text-xs font-medium flex items-center gap-1.5 transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Chọn Lại Bố Cục</span>
          </button>

          <button
            onClick={() => handleShuffle(true)}
            disabled={isShuffling}
            className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 text-xs font-medium flex items-center gap-1.5 transition-all"
          >
            <Shuffle className={`w-3.5 h-3.5 ${isShuffling ? 'animate-spin' : ''}`} />
            <span>Xáo Lại Bộ Bài ({shuffleCount})</span>
          </button>

          <button
            onClick={handleAutoDraw}
            disabled={isShuffling}
            className="px-4 py-2 rounded-full bg-[#24143F] hover:bg-[#321A58] text-[#D8B56D] border border-[#D8B56D]/40 text-xs font-medium flex items-center gap-1.5 transition-all shadow-sm"
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Rút Nhanh Tự Động</span>
          </button>

          {chosenCards.length > 0 && (
            <button
              onClick={() => {
                sound.playChime(350);
                setChosenCards([]);
              }}
              className="px-4 py-2 rounded-full bg-rose-950/40 hover:bg-rose-950/60 text-rose-300 border border-rose-500/30 text-xs font-medium flex items-center gap-1.5 transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Chọn Lại Từ Đầu</span>
            </button>
          )}
        </div>
      </div>

      {/* SPREAD SLOTS: Visual preview of picked cards */}
      <div className="p-4 sm:p-6 rounded-2xl bg-black/40 border border-[#D8B56D]/30 space-y-4">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D8B56D]">
            Các Vị Trí Trong Trải Bài ({chosenCards.length}/{targetCount})
          </span>
          {chosenCards.length === targetCount && (
            <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4" /> Đã chọn đủ lá
            </span>
          )}
        </div>

        {/* Responsive Grid of Slots */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 overflow-x-auto py-2">
          {spreadConfig.positions.map((pos, idx) => {
            const card = chosenCards[idx];
            return (
              <div
                key={pos.index}
                className="flex flex-col items-center text-center space-y-1.5 min-w-[90px] max-w-[130px]"
              >
                <div
                  className={`w-20 h-32 sm:w-24 sm:h-36 rounded-xl border-2 flex flex-col items-center justify-center p-2 transition-all relative ${
                    card
                      ? 'border-[#D8B56D] bg-gradient-to-b from-[#24143F] to-[#100B1D] shadow-[0_0_20px_rgba(216,181,109,0.3)]'
                      : 'border-dashed border-white/20 bg-white/5'
                  }`}
                >
                  {card ? (
                    <div className="text-center">
                      <span className="text-[10px] text-[#D8B56D] font-serif font-bold block mb-1">
                        {card.romanNumeral || card.number}
                      </span>
                      <p className="text-[11px] font-bold text-[#F5F0FF] line-clamp-2">
                        {card.nameVi.split('–')[1] ? card.nameVi.split('–')[1].trim() : card.nameVi}
                      </p>
                    </div>
                  ) : (
                    <span className="text-xs text-slate-500 font-serif font-bold">
                      {idx + 1}
                    </span>
                  )}
                </div>

                <div className="text-center w-full">
                  <span className="text-[10px] sm:text-xs font-semibold text-slate-200 block truncate">
                    {pos.nameVi}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* PROCEED BUTTON (When ready) */}
      {chosenCards.length === targetCount && (
        <div className="text-center py-2 animate-in zoom-in-95 duration-200">
          <button
            onClick={handleProceedToReading}
            className="px-10 py-4 rounded-full bg-gradient-to-r from-[#D8B56D] via-[#F3DE9A] to-[#D8B56D] text-[#100B1D] font-serif font-black text-base sm:text-lg tracking-widest uppercase shadow-[0_0_35px_rgba(216,181,109,0.6)] hover:shadow-[0_0_50px_rgba(216,181,109,0.85)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 mx-auto"
          >
            <span>✦ LẬT BÀI & XEM GIẢI NGHĨA ✦</span>
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>
      )}

      {/* THE 78 CARDS FANNING / PICKING ARENA */}
      {chosenCards.length < targetCount && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-400 px-1">
            <span>Chạm hoặc nhấn vào lá bài bạn cảm thấy có duyên:</span>
            <span>{deck.length} lá bài khả dụng</span>
          </div>

          <div
            className={`p-4 sm:p-6 rounded-2xl bg-[#0E091A] border border-[#D8B56D]/20 overflow-x-auto scrollbar-thin transition-opacity ${
              isShuffling ? 'opacity-40 pointer-events-none' : 'opacity-100'
            }`}
          >
            <div className="flex gap-2 sm:gap-2.5 min-w-max pb-2">
              {deck.map((card, idx) => {
                const isAlreadyChosen = chosenCards.some((c) => c.id === card.id);
                if (isAlreadyChosen) return null;

                return (
                  <div
                    key={card.id}
                    onClick={() => handlePickCard(card)}
                    className="w-16 h-28 sm:w-20 sm:h-32 rounded-lg border border-[#D8B56D]/60 bg-gradient-to-br from-[#24143F] to-[#100B1D] cursor-pointer hover:-translate-y-4 hover:border-[#D8B56D] hover:shadow-[0_0_20px_rgba(216,181,109,0.5)] transition-all duration-200 flex flex-col items-center justify-center relative p-1 text-center shrink-0 group select-none"
                    title={`Lá bài số ${idx + 1}`}
                  >
                    <div className="w-8 h-8 rounded-full border border-[#D8B56D]/40 flex items-center justify-center text-[#D8B56D] group-hover:scale-110 transition-transform">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <span className="text-[9px] text-[#A78BFA]/70 tracking-tighter mt-2 font-serif">
                      ✦ TAROT ✦
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
