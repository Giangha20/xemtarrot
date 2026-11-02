'use client';

import React, { useState } from 'react';
import { ReadingResult, TarotCard } from '@/types/tarot';
import { TarotCardView } from '../tarot/TarotCardView';
import { CardDetailModal } from '../tarot/CardDetailModal';
import { sound } from '@/lib/sound';
import {
  Sparkles,
  Bookmark,
  Copy,
  Check,
  RotateCcw,
  Compass,
  Layers,
  HelpCircle,
  Share2,
  CheckCircle2,
  Clock,
  AlertCircle,
  Flame,
  ArrowRight,
  Target,
  ShieldAlert,
  Zap
} from 'lucide-react';

interface Step5InterpretationProps {
  reading: ReadingResult;
  onNewReading: () => void;
  onToggleFavorite: (id: string) => void;
}

export const Step5Interpretation: React.FC<Step5InterpretationProps> = ({
  reading,
  onNewReading,
  onToggleFavorite
}) => {
  const [selectedCardForModal, setSelectedCardForModal] = useState<{
    card: TarotCard;
    orientation: 'upright' | 'reversed';
  } | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const [isFavorited, setIsFavorited] = useState(reading.isFavorite || false);

  const handleFavoriteClick = () => {
    sound.playChime(660);
    setIsFavorited(!isFavorited);
    onToggleFavorite(reading.id);
  };

  const handleCopyReading = () => {
    sound.playChime(528);
    let text = `🔮 MYSTIC TAROT – KẾT QUẢ GIẢI ĐÁP ĐÚNG TRỌNG TÂM\n`;
    text += `❓ Câu hỏi: ${reading.question} (${reading.topic})\n`;
    if (reading.synthesis?.directVerdict) {
      text += `🎯 Kết luận trọng tâm: ${reading.synthesis.directVerdict.verdict}\n`;
      text += `🌟 Lý do cốt lõi: ${reading.synthesis.directVerdict.coreReason}\n`;
      text += `⚡ Quyết định then chốt: ${reading.synthesis.directVerdict.keyDecision}\n`;
      text += `🚫 Điều cần tránh: ${reading.synthesis.directVerdict.whatToAvoid}\n`;
      text += `⏳ Thời điểm vàng: ${reading.synthesis.directVerdict.timingAdvice}\n\n`;
    }
    text += `🌟 CÁC LÁ BÀI RÚT ĐƯỢC:\n`;
    reading.drawnCards.forEach((dc, i) => {
      text += `${i + 1}. [${dc.position.nameVi}]: ${dc.card.nameVi} (${dc.isReversed ? 'Ngược' : 'Xuôi'})\n`;
    });
    text += `\n✨ TỔNG QUAN NĂNG LƯỢNG:\n${reading.synthesis.overallSummary}\n\n`;
    text += `🧭 CHỈ DẪN HÀNH ĐỘNG:\n${reading.synthesis.actionableAdvice}\n\n`;
    text += `https://xemtarrot.vercel.app`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    }
  };

  const directVerdict = reading.synthesis?.directVerdict;
  const cardAnalyses = reading.synthesis?.cardQuestionAnalyses || [];

  return (
    <div className="max-w-5xl mx-auto space-y-10 animate-in fade-in duration-500 pb-12 font-sans">
      {/* Top Banner: Question & Spread Info */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#24143F] via-[#1A0E2E] to-[#100B1D] border-2 border-[#D8B56D]/60 shadow-[0_0_40px_rgba(216,181,109,0.3)] space-y-4 text-center relative overflow-hidden">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#100B1D]/80 border border-[#D8B56D]/40 text-[#D8B56D] text-xs font-serif font-bold">
          <Sparkles className="w-3.5 h-3.5" /> KẾT QUẢ GIẢI BÀI CHUYÊN SÂU
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl font-black text-[#F5F0FF] max-w-2xl mx-auto leading-snug">
          "{reading.question}"
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-300">
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
            Chủ đề: <strong className="text-[#D8B56D]">{reading.topic}</strong>
          </span>
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
            Trải bài: <strong className="text-[#A78BFA]">{reading.drawnCards.length} Lá Bài</strong>
          </span>
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
            Thời gian: <strong>{new Date(reading.timestamp).toLocaleDateString('vi-VN')}</strong>
          </span>
        </div>

        {/* Quick Toolbar */}
        <div className="pt-2 flex items-center justify-center gap-2.5">
          <button
            onClick={handleFavoriteClick}
            className={`px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all border ${
              isFavorited
                ? 'bg-rose-950/80 border-rose-500 text-rose-300 shadow-md'
                : 'bg-white/5 border-white/10 text-slate-300 hover:text-white'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isFavorited ? 'fill-rose-400 text-rose-400' : ''}`} />
            <span>{isFavorited ? 'Đã Lưu Yêu Thích' : 'Lưu Vào Yêu Thích'}</span>
          </button>

          <button
            onClick={handleCopyReading}
            className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 text-xs font-semibold flex items-center gap-1.5 transition-all"
          >
            {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{isCopied ? 'Đã Sao Chép!' : 'Sao Chép Kết Quả'}</span>
          </button>
        </div>
      </div>

      {/* MỤC TRẢ LỜI ĐÚNG VÀO TRỌNG TÂM CÂU HỎI (DIRECT PINPOINT ANSWER BOX) */}
      {directVerdict && (
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#200F36] via-[#160B29] to-[#0D061A] border-2 border-[#D8B56D] shadow-[0_0_40px_rgba(216,181,109,0.4)] space-y-6 relative overflow-hidden">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#D8B56D]/30 pb-4">
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-xl bg-[#D8B56D] text-black shadow-md">
                <Target className="w-6 h-6" />
              </span>
              <div>
                <span className="text-[11px] font-bold text-[#A78BFA] uppercase tracking-wider block font-sans">
                  KẾT LUẬN GIẢI ĐÁP THẲNG VÀO TRỌNG TÂM
                </span>
                <h3 className="font-serif text-lg sm:text-2xl font-black text-[#D8B56D] leading-tight">
                  {directVerdict.verdict}
                </h3>
              </div>
            </div>

            <span
              className={`self-start sm:self-auto px-4 py-1.5 rounded-full font-bold text-xs flex items-center gap-1.5 border shadow-sm ${
                directVerdict.signalColor === 'green'
                  ? 'bg-emerald-950 text-emerald-300 border-emerald-500'
                  : directVerdict.signalColor === 'red'
                  ? 'bg-rose-950 text-rose-300 border-rose-500'
                  : 'bg-amber-950 text-amber-300 border-amber-500'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              {directVerdict.signalLabel}
            </span>
          </div>

          {/* 4 Targeted Core Takeaway Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* 1. Lý do cốt lõi */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#170E2B] border border-[#D8B56D]/40 space-y-2">
              <span className="text-xs font-serif font-black text-[#D8B56D] flex items-center gap-2 uppercase tracking-wide">
                <Sparkles className="w-4 h-4 text-[#D8B56D]" /> 1. Lý Do Cốt Lõi (Bản Chất Vấn Đề):
              </span>
              <p className="text-xs sm:text-sm text-slate-100 leading-relaxed">
                {directVerdict.coreReason}
              </p>
            </div>

            {/* 2. Quyết định then chốt */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#170E2B] border border-emerald-500/40 space-y-2">
              <span className="text-xs font-serif font-black text-emerald-300 flex items-center gap-2 uppercase tracking-wide">
                <Zap className="w-4 h-4 text-emerald-400" /> 2. Quyết Định Cần Làm Ngay:
              </span>
              <p className="text-xs sm:text-sm text-slate-100 leading-relaxed">
                {directVerdict.keyDecision}
              </p>
            </div>

            {/* 3. Điều cấm kỵ cần tránh */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#170E2B] border border-rose-500/40 space-y-2">
              <span className="text-xs font-serif font-black text-rose-300 flex items-center gap-2 uppercase tracking-wide">
                <ShieldAlert className="w-4 h-4 text-rose-400" /> 3. Điều Tuyệt Đối Cần Tránh:
              </span>
              <p className="text-xs sm:text-sm text-slate-100 leading-relaxed">
                {directVerdict.whatToAvoid}
              </p>
            </div>

            {/* 4. Thời điểm vàng hành động */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#170E2B] border border-[#A78BFA]/40 space-y-2">
              <span className="text-xs font-serif font-black text-[#A78BFA] flex items-center gap-2 uppercase tracking-wide">
                <Clock className="w-4 h-4 text-[#A78BFA]" /> 4. Thời Điểm Vàng Để Hành Động:
              </span>
              <p className="text-xs sm:text-sm text-slate-100 leading-relaxed">
                {directVerdict.timingAdvice}
              </p>
            </div>
          </div>

          {/* Detailed Paragraph Breakdown */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#0E061A]/95 border border-white/10 text-slate-200 text-xs sm:text-sm leading-relaxed whitespace-pre-line space-y-3">
            {directVerdict.directAnswerSummary}
          </div>
        </div>
      )}

      {/* SPREAD CARDS DISPLAY SECTION WITH REAL IMAGES */}
      <div className="space-y-4">
        <div className="text-center space-y-1">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F5F0FF]">
            CÁC LÁ BÀI RÚT ĐƯỢC TRONG TRẢI BÀI
          </h3>
          <p className="text-xs text-slate-400">
            Chạm vào bất kỳ lá bài nào để phóng to xem chi tiết biểu tượng học và ý nghĩa 8 khía cạnh.
          </p>
        </div>

        {/* Responsive Layout of Drawn Cards with Real Illustrations */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 py-4">
          {reading.drawnCards.map((drawnCard, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-2 group"
            >
              <div className="px-3 py-1 rounded-full bg-[#24143F] border border-[#D8B56D]/40 text-[#D8B56D] text-[11px] font-serif font-bold tracking-wide shadow-sm">
                {drawnCard.position.nameVi}
              </div>

              <TarotCardView
                card={drawnCard.card}
                isFlipped={true}
                isReversed={drawnCard.isReversed}
                size="md"
                interactive={true}
                onClick={() => {
                  setSelectedCardForModal({
                    card: drawnCard.card,
                    orientation: drawnCard.isReversed ? 'reversed' : 'upright'
                  });
                }}
                showDetailsButton={true}
              />

              <p className="text-[11px] text-slate-400 max-w-[160px] line-clamp-2">
                {drawnCard.position.descriptionVi}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* OVERALL SYNTHESIS & ELEMENTAL BALANCE */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Overall Summary (8 cols) */}
        <div className="md:col-span-8 p-6 sm:p-7 rounded-2xl bg-[#1C1233]/90 border border-[#D8B56D]/40 shadow-xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-serif font-bold text-[#D8B56D] uppercase tracking-wider">
            <Compass className="w-4 h-4 text-[#D8B56D]" /> Tổng Quan Trải Bài & Bức Tranh Toàn Cảnh
          </div>
          <p className="text-slate-200 text-sm leading-relaxed whitespace-pre-line">
            {reading.synthesis.overallSummary}
          </p>
        </div>

        {/* Elemental Balance (4 cols) */}
        <div className="md:col-span-4 p-6 rounded-2xl bg-[#150D27]/90 border border-[#A78BFA]/30 shadow-xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-serif font-bold text-[#A78BFA] uppercase tracking-wider">
            <Layers className="w-4 h-4 text-[#A78BFA]" /> Cân Bằng Nguyên Tố
          </div>
          <p className="text-slate-300 text-xs leading-relaxed">
            {reading.synthesis.elementalBalance}
          </p>
        </div>
      </div>

      {/* CARD-BY-CARD DEEP BREAKDOWN ALIGNED WITH QUESTION */}
      <div className="space-y-4">
        <div className="text-center space-y-1">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F5F0FF]">
            GIẢI ĐÁP TỪNG LÁ BÀI ĐÚNG VÀO CÂU HỎI CỦA BẠN
          </h3>
          <p className="text-xs text-slate-400 max-w-xl mx-auto">
            Chi tiết từng vị trí bài đang trả lời khía cạnh nào cho câu hỏi: "{reading.question}".
          </p>
        </div>

        <div className="space-y-4">
          {reading.drawnCards.map((drawnCard, idx) => {
            const card = drawnCard.card;
            const isRev = drawnCard.isReversed;
            const content = isRev ? card.reversed : card.upright;
            const analysis = cardAnalyses[idx];

            return (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-[#140C24] border-2 border-white/10 hover:border-[#D8B56D]/50 transition-all space-y-4 shadow-lg"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-full bg-[#24143F] border border-[#D8B56D] text-[#D8B56D] text-xs font-serif font-bold flex items-center justify-center shadow-sm">
                      {idx + 1}
                    </span>
                    <h4 className="font-serif text-base sm:text-lg font-bold text-[#F5F0FF]">
                      {drawnCard.position.nameVi}: <span className="text-[#D8B56D]">{card.nameVi}</span>
                    </h4>
                  </div>

                  <span
                    className={`text-[11px] px-3 py-1 rounded-full font-medium self-start sm:self-auto ${
                      isRev
                        ? 'bg-rose-950 text-rose-300 border border-rose-500/40'
                        : 'bg-emerald-950 text-emerald-300 border border-emerald-500/40'
                    }`}
                  >
                    {isRev ? 'Lá Ngược (Reversed)' : 'Lá Xuôi (Upright)'}
                  </span>
                </div>

                {/* Question-Specific Interpretation */}
                <div className="p-4 rounded-xl bg-[#1E1136] border border-[#D8B56D]/30 space-y-2">
                  <span className="text-xs font-serif font-bold text-amber-300 flex items-center gap-1.5 uppercase">
                    <Target className="w-4 h-4 text-amber-400" />
                    Ý Nghĩa Trực Diện Ứng Vào Câu Hỏi Của Bạn:
                  </span>
                  <p className="text-slate-100 text-xs sm:text-sm leading-relaxed">
                    {analysis?.directAnswerToQuestion || `Ứng vào câu hỏi "${reading.question}", tại vị trí [${drawnCard.position.nameVi}], lá ${card.nameVi} mang lời giải đáp: ${content.keyMessage}.`}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 text-xs sm:text-sm">
                  <div className="md:col-span-8 space-y-2">
                    <p className="text-slate-300 leading-relaxed">
                      <strong className="text-[#A78BFA]">Biểu tượng & Thông điệp gốc: </strong>
                      {content.keyMessage}
                    </p>
                    <p className="text-slate-400 leading-relaxed">
                      <strong className="text-slate-300">Khía cạnh {reading.topic}: </strong>
                      {content.general}
                    </p>
                  </div>

                  <div className="md:col-span-4 p-3.5 rounded-xl bg-white/5 border border-white/5 space-y-1.5 text-xs">
                    <span className="font-bold text-emerald-400 block flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Chỉ dẫn hành động:
                    </span>
                    <p className="text-slate-200 italic">{content.advice}</p>
                    <button
                      onClick={() => {
                        setSelectedCardForModal({
                          card,
                          orientation: isRev ? 'reversed' : 'upright'
                        });
                      }}
                      className="mt-2 text-[11px] text-[#D8B56D] hover:underline flex items-center gap-1 font-semibold"
                    >
                      Xem toàn bộ 8 khía cạnh của lá bài →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CORE DYNAMICS & ACTIONABLE ADVICE */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#24143F]/90 to-[#190E2D]/90 border-2 border-[#D8B56D]/50 space-y-5">
        <div>
          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#D8B56D] flex items-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-[#D8B56D]" /> Mối Tương Tác & Lời Khuyên Hành Động
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
            {reading.synthesis.coreDynamics}
          </p>
        </div>

        <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block">
            Chỉ Dẫn Ứng Dụng Thực Tiễn:
          </span>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre-line">
            {reading.synthesis.actionableAdvice}
          </p>
        </div>
      </div>

      {/* 3 REFLECTION QUESTIONS (JOURNALING) */}
      <div className="p-6 rounded-2xl bg-black/40 border border-[#A78BFA]/30 space-y-3">
        <h4 className="font-serif text-base font-bold text-[#A78BFA] flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-[#A78BFA]" /> 3 Câu Hỏi Tự Soi Chiếu Dành Riêng Cho Bạn
        </h4>
        <div className="space-y-2 text-xs sm:text-sm text-purple-100">
          {reading.synthesis.reflectionPrompts.map((prompt, i) => (
            <div key={i} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-white/5 border border-white/5">
              <span className="font-bold text-[#D8B56D]">{i + 1}.</span>
              <span>{prompt}</span>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER ACTIONS: New Reading & Share */}
      <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          onClick={onNewReading}
          className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D8B56D] to-[#E8C882] text-[#100B1D] font-serif font-black text-xs sm:text-sm tracking-widest uppercase shadow-[0_0_25px_rgba(216,181,109,0.5)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
        >
          <RotateCcw className="w-4 h-4" /> BẮT ĐẦU TRẢI BÀI MỚI
        </button>

        <button
          onClick={handleCopyReading}
          className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 text-xs font-bold tracking-wide uppercase flex items-center justify-center gap-2 transition-all"
        >
          <Share2 className="w-4 h-4" /> Chia Sẻ Trải Bài
        </button>
      </div>

      {/* Card Detail Modal */}
      {selectedCardForModal && (
        <CardDetailModal
          card={selectedCardForModal.card}
          isOpen={true}
          onClose={() => setSelectedCardForModal(null)}
          initialOrientation={selectedCardForModal.orientation}
        />
      )}
    </div>
  );
};
