'use client';

import React, { useState, useMemo } from 'react';
import { TAROT_CARDS } from '@/data/tarotCards';
import { TarotCard } from '@/types/tarot';
import { TarotCardView } from '@/components/tarot/TarotCardView';
import { CardDetailModal } from '@/components/tarot/CardDetailModal';
import { Starfield } from '@/components/common/Starfield';
import { sound } from '@/lib/sound';
import { Sparkles, Search, Layers, Flame, Droplets, Wind, Mountain, RotateCw } from 'lucide-react';

export default function CardsLibraryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArcana, setSelectedArcana] = useState<'all' | 'major' | 'wands' | 'cups' | 'swords' | 'pentacles'>('all');
  const [previewOrientation, setPreviewOrientation] = useState<'upright' | 'reversed'>('upright');
  const [selectedCardForModal, setSelectedCardForModal] = useState<TarotCard | null>(null);

  // Filter cards
  const filteredCards = useMemo(() => {
    return TAROT_CARDS.filter((card) => {
      // Arcana & Suit filter
      if (selectedArcana === 'major' && card.arcana !== 'major') return false;
      if (selectedArcana === 'wands' && card.suit !== 'wands') return false;
      if (selectedArcana === 'cups' && card.suit !== 'cups') return false;
      if (selectedArcana === 'swords' && card.suit !== 'swords') return false;
      if (selectedArcana === 'pentacles' && card.suit !== 'pentacles') return false;

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchName = card.name.toLowerCase().includes(q);
        const matchNameVi = card.nameVi.toLowerCase().includes(q);
        const matchKeywords = card.keywordsVi.some((kw) => kw.toLowerCase().includes(q)) ||
                              card.keywords.some((kw) => kw.toLowerCase().includes(q));
        const matchAstrology = card.astrology.toLowerCase().includes(q);
        return matchName || matchNameVi || matchKeywords || matchAstrology;
      }

      return true;
    });
  }, [searchQuery, selectedArcana]);

  const handleCardClick = (card: TarotCard) => {
    sound.playChime(580);
    setSelectedCardForModal(card);
  };

  return (
    <div className="relative min-h-screen py-10 px-4 sm:px-6">
      <Starfield />

      <main className="relative z-10 max-w-7xl mx-auto space-y-8">
        {/* Page Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#24143F] border border-[#D8B56D]/40 text-[#D8B56D] text-xs font-serif">
            <Sparkles className="w-3.5 h-3.5" /> THƯ VIỆN BÀI CHUẨN RIDER-WAITE-SMITH
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#F5F0FF] tracking-wide">
            BỘ BÀI TAROT 78 LÁ
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Khám phá ý nghĩa uyên thâm, biểu tượng học cổ xưa và lời khuyên chuyển hóa của từng lá bài trong 22 lá Ẩn Chính và 56 lá Ẩn Phụ.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 sm:p-6 rounded-2xl bg-[#150D27]/85 border border-[#D8B56D]/30 shadow-xl space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full sm:max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm kiếm theo tên tiếng Anh, tiếng Việt, từ khóa..."
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-black/40 border border-white/10 text-xs sm:text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-[#D8B56D] focus:ring-1 focus:ring-[#D8B56D] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Upright / Reversed View Toggle */}
            <button
              onClick={() => {
                sound.playChime(440);
                setPreviewOrientation(previewOrientation === 'upright' ? 'reversed' : 'upright');
              }}
              className="px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-xs text-slate-300 flex items-center gap-1.5 transition-all self-end sm:self-auto"
            >
              <RotateCw className="w-3.5 h-3.5 text-[#D8B56D]" />
              <span>Chế độ xem: {previewOrientation === 'upright' ? 'Lá Xuôi' : 'Lá Ngược'}</span>
            </button>
          </div>

          {/* Arcana & Suit Tabs */}
          <div className="flex flex-wrap gap-2 border-t border-white/5 pt-3">
            {[
              { id: 'all', label: 'Tất Cả (78 Lá)', icon: Layers },
              { id: 'major', label: 'Ẩn Chính Major (22)', icon: Sparkles },
              { id: 'wands', label: 'Wands – Gậy (14)', icon: Flame },
              { id: 'cups', label: 'Cups – Cốc (14)', icon: Droplets },
              { id: 'swords', label: 'Swords – Kiếm (14)', icon: Wind },
              { id: 'pentacles', label: 'Pentacles – Tiền (14)', icon: Mountain }
            ].map((tab) => {
              const isSelected = selectedArcana === tab.id;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    sound.playChime(440);
                    setSelectedArcana(tab.id as typeof selectedArcana);
                  }}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium border flex items-center gap-1.5 transition-all ${
                    isSelected
                      ? 'bg-[#24143F] border-[#D8B56D] text-[#D8B56D] font-bold shadow-sm'
                      : 'bg-black/30 border-white/5 text-slate-400 hover:text-white hover:border-white/20'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-slate-400 px-1">
          <span>
            Hiển thị <strong>{filteredCards.length}</strong> / 78 lá bài
          </span>
          {searchQuery && (
            <span>
              Kết quả tìm kiếm cho: "<strong>{searchQuery}</strong>"
            </span>
          )}
        </div>

        {/* 78 Cards Gallery Grid */}
        {filteredCards.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 justify-items-center">
            {filteredCards.map((card) => (
              <div key={card.id} className="flex flex-col items-center">
                <TarotCardView
                  card={card}
                  isFlipped={true}
                  isReversed={previewOrientation === 'reversed'}
                  size="md"
                  interactive={true}
                  onClick={() => handleCardClick(card)}
                  showDetailsButton={true}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center rounded-2xl bg-black/40 border border-white/5 space-y-3">
            <Sparkles className="w-8 h-8 text-slate-500 mx-auto" />
            <p className="text-slate-300 font-serif text-base">
              Không tìm thấy lá bài nào khớp với từ khóa "{searchQuery}"
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedArcana('all');
              }}
              className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-xs text-[#D8B56D] border border-white/10"
            >
              Xóa bộ lọc và xem tất cả
            </button>
          </div>
        )}

        {/* Detail Modal */}
        {selectedCardForModal && (
          <CardDetailModal
            card={selectedCardForModal}
            isOpen={true}
            onClose={() => setSelectedCardForModal(null)}
            initialOrientation={previewOrientation}
          />
        )}
      </main>
    </div>
  );
}
