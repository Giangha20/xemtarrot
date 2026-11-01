'use client';

import React, { useState } from 'react';
import { ReadingResult } from '@/types/tarot';
import { getReadingsHistory, deleteReading, toggleFavoriteReading, clearAllHistory } from '@/lib/storage';
import { TarotCardView } from '@/components/tarot/TarotCardView';
import { CardDetailModal } from '@/components/tarot/CardDetailModal';
import { Starfield } from '@/components/common/Starfield';
import { sound } from '@/lib/sound';
import Link from 'next/link';
import {
  Clock,
  Bookmark,
  Trash2,
  Compass,
  ArrowRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export default function HistoryPage() {
  const [history, setHistory] = useState<ReadingResult[]>(() => getReadingsHistory());
  const [filterFavorites, setFilterFavorites] = useState(false);
  const [expandedReadingId, setExpandedReadingId] = useState<string | null>(null);
  const [confirmClearAll, setConfirmClearAll] = useState(false);
  const [selectedCardForModal, setSelectedCardForModal] = useState<{
    card: any;
    orientation: 'upright' | 'reversed';
  } | null>(null);

  const handleDelete = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    sound.playChime(350);
    const updated = deleteReading(id);
    setHistory(updated);
  };

  const handleToggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    sound.playChime(660);
    const updated = toggleFavoriteReading(id);
    setHistory(updated);
  };

  const handleClearAll = () => {
    sound.playChime(300);
    clearAllHistory();
    setHistory([]);
    setConfirmClearAll(false);
  };

  const filteredHistory = filterFavorites
    ? history.filter((item) => item.isFavorite)
    : history;

  return (
    <div className="relative min-h-screen py-10 px-4 sm:px-6">
      <Starfield />

      <main className="relative z-10 max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#24143F] border border-[#D8B56D]/40 text-[#D8B56D] text-xs font-serif">
            <Clock className="w-3.5 h-3.5" /> NHẬT KÝ CHIÊM NGHIỆM
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#F5F0FF] tracking-wide">
            LỊCH SỬ XEM BÀI TAROT
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Xem lại các trải bài đã qua, theo dõi dòng chảy năng lượng và đối chiếu sự chuyển hóa trong cuộc sống của bạn theo thời gian.
          </p>
        </div>

        {/* Toolbar */}
        <div className="p-4 rounded-2xl bg-[#150D27]/80 border border-[#D8B56D]/20 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                sound.playChime(440);
                setFilterFavorites(false);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all ${
                !filterFavorites
                  ? 'bg-[#24143F] border-[#D8B56D] text-[#D8B56D] font-bold'
                  : 'bg-white/5 border-white/10 text-slate-400'
              }`}
            >
              Tất Cả ({history.length})
            </button>
            <button
              onClick={() => {
                sound.playChime(440);
                setFilterFavorites(true);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium border flex items-center gap-1.5 transition-all ${
                filterFavorites
                  ? 'bg-rose-950/80 border-rose-500 text-rose-300 font-bold'
                  : 'bg-white/5 border-white/10 text-slate-400'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5 fill-rose-400 text-rose-400" />
              <span>Đã Lưu Yêu Thích ({history.filter((h) => h.isFavorite).length})</span>
            </button>
          </div>

          {history.length > 0 && (
            <div>
              {confirmClearAll ? (
                <div className="flex items-center gap-2">
                  <span className="text-xs text-rose-300">Xác nhận xóa hết?</span>
                  <button
                    onClick={handleClearAll}
                    className="px-3 py-1 rounded-full bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold"
                  >
                    Xóa
                  </button>
                  <button
                    onClick={() => setConfirmClearAll(false)}
                    className="px-3 py-1 rounded-full bg-white/10 text-slate-300 text-xs"
                  >
                    Hủy
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setConfirmClearAll(true)}
                  className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-rose-950/40 text-slate-400 hover:text-rose-300 border border-white/10 text-xs flex items-center gap-1.5 transition-all"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Xóa Toàn Bộ Lịch Sử</span>
                </button>
              )}
            </div>
          )}
        </div>

        {/* History List */}
        {filteredHistory.length > 0 ? (
          <div className="space-y-4">
            {filteredHistory.map((item) => {
              const isExpanded = expandedReadingId === item.id;
              return (
                <div
                  key={item.id}
                  className="rounded-2xl bg-black/40 border border-white/10 hover:border-[#D8B56D]/40 transition-all overflow-hidden"
                >
                  {/* Summary Bar (Click to expand) */}
                  <div
                    onClick={() => {
                      sound.playChime(500);
                      setExpandedReadingId(isExpanded ? null : item.id);
                    }}
                    className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer hover:bg-white/5"
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#24143F] border border-[#D8B56D]/30 text-[#D8B56D] font-bold">
                          {item.topic}
                        </span>
                        <span className="text-xs text-slate-400">
                          {new Date(item.timestamp).toLocaleString('vi-VN')}
                        </span>
                      </div>
                      <h3 className="font-serif text-base sm:text-lg font-bold text-[#F5F0FF]">
                        "{item.question}"
                      </h3>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {item.drawnCards.map((dc, i) => (
                          <span
                            key={i}
                            className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5"
                          >
                            {dc.card.nameVi.split('–')[1] ? dc.card.nameVi.split('–')[1].trim() : dc.card.nameVi} ({dc.isReversed ? 'Ngược' : 'Xuôi'})
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                      <button
                        onClick={(e) => handleToggleFavorite(item.id, e)}
                        className={`p-2 rounded-full border transition-all ${
                          item.isFavorite
                            ? 'bg-rose-950 border-rose-500 text-rose-400'
                            : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                        }`}
                        title={item.isFavorite ? 'Bỏ yêu thích' : 'Lưu yêu thích'}
                      >
                        <Bookmark className={`w-4 h-4 ${item.isFavorite ? 'fill-rose-400' : ''}`} />
                      </button>

                      <button
                        onClick={(e) => handleDelete(item.id, e)}
                        className="p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-rose-400 transition-colors"
                        title="Xóa lượt trải bài này"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>

                      <div className="p-2 text-slate-400">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </div>
                  </div>

                  {/* Expanded Detail Body */}
                  {isExpanded && (
                    <div className="p-5 sm:p-7 border-t border-white/10 bg-[#150D27]/90 space-y-6 animate-in slide-in-from-top-2 duration-200">
                      {/* Cards Layout in this past reading */}
                      <div>
                        <h4 className="text-xs font-bold text-[#D8B56D] uppercase tracking-wider mb-3">
                          Các Lá Bài Trong Lượt Trải:
                        </h4>
                        <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                          {item.drawnCards.map((dc, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center space-y-1">
                              <span className="text-[10px] text-slate-400">{dc.position.nameVi}</span>
                              <TarotCardView
                                card={dc.card}
                                isFlipped={true}
                                isReversed={dc.isReversed}
                                size="sm"
                                interactive={true}
                                onClick={() => {
                                  setSelectedCardForModal({
                                    card: dc.card,
                                    orientation: dc.isReversed ? 'reversed' : 'upright'
                                  });
                                }}
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Synthesis Text */}
                      <div className="space-y-3 p-4 rounded-xl bg-black/40 border border-white/5">
                        <span className="text-xs font-bold text-[#A78BFA] uppercase tracking-wider block">
                          Tổng Quan Trải Bài:
                        </span>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line">
                          {item.synthesis.overallSummary}
                        </p>
                      </div>

                      {/* Actionable Advice */}
                      <div className="space-y-2 p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/20">
                        <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider block">
                          Lời Khuyên Đã Gợi Ý:
                        </span>
                        <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed whitespace-pre-line">
                          {item.synthesis.actionableAdvice}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="p-12 text-center rounded-3xl bg-black/40 border border-white/5 space-y-4">
            <Compass className="w-10 h-10 text-slate-500 mx-auto" />
            <div className="space-y-1">
              <h3 className="font-serif text-lg font-bold text-slate-200">
                {filterFavorites ? 'Chưa có lượt trải bài yêu thích nào' : 'Chưa có lịch sử trải bài nào'}
              </h3>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                {filterFavorites
                  ? 'Bạn có thể đánh dấu biểu tượng Bookmark ở bất kỳ kết quả trải bài nào để lưu vào danh sách yêu thích.'
                  : 'Hãy bắt đầu trải bài đầu tiên để nhận thông điệp sâu sắc từ vũ trụ và ghi lại nhật ký tâm hồn.'}
              </p>
            </div>
            <Link
              href="/reading"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#D8B56D] to-[#E8C882] text-[#100B1D] font-serif font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all"
            >
              <span>BẮT ĐẦU TRẢI BÀI NGAY</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

        {/* Modal if user clicks on card in past history */}
        {selectedCardForModal && (
          <CardDetailModal
            card={selectedCardForModal.card}
            isOpen={true}
            onClose={() => setSelectedCardForModal(null)}
            initialOrientation={selectedCardForModal.orientation}
          />
        )}
      </main>
    </div>
  );
}
