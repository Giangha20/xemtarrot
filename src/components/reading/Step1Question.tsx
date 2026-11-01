'use client';

import React, { useState } from 'react';
import { sound } from '@/lib/sound';
import { Sparkles, Heart, Briefcase, DollarSign, Users, User, Compass, HelpCircle } from 'lucide-react';

interface Step1QuestionProps {
  question: string;
  topic: string;
  onSetIntention: (question: string, topic: string) => void;
}

const TOPICS = [
  { id: 'Tình cảm', label: 'Tình yêu & Mối quan hệ', icon: Heart, color: 'text-rose-400' },
  { id: 'Công việc', label: 'Công việc & Sự nghiệp', icon: Briefcase, color: 'text-sky-400' },
  { id: 'Tài chính', label: 'Tài chính & Tiền bạc', icon: DollarSign, color: 'text-emerald-400' },
  { id: 'Gia đình', label: 'Gia đình & Người thân', icon: Users, color: 'text-amber-400' },
  { id: 'Bản thân', label: 'Phát triển bản thân', icon: User, color: 'text-purple-400' },
  { id: 'Tương lai', label: 'Xu hướng tương lai', icon: Compass, color: 'text-indigo-400' },
  { id: 'Tổng quát', label: 'Câu hỏi tổng quát', icon: Sparkles, color: 'text-[#D8B56D]' }
];

const SAMPLE_QUESTIONS = [
  'Tình hình tình cảm hiện tại của tôi như thế nào và tôi nên chú ý điều gì?',
  'Tôi đang gặp khó khăn gì trong công việc và nên nhìn nhận nó ra sao?',
  'Tôi nên tập trung năng lượng vào điều gì trong thời gian tới?',
  'Tôi cần thấu hiểu và chữa lành điều gì bên trong bản thân lúc này?',
  'Thông điệp quan trọng nhất mà vũ trụ muốn gửi gắm tới tôi hôm nay là gì?'
];

export const Step1Question: React.FC<Step1QuestionProps> = ({
  question: initialQuestion,
  topic: initialTopic,
  onSetIntention
}) => {
  const [questionText, setQuestionText] = useState(initialQuestion);
  const [selectedTopic, setSelectedTopic] = useState(initialTopic || 'Tổng quát');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playChime(660);
    onSetIntention(questionText.trim() || 'Thông điệp tổng quan dành cho tôi lúc này', selectedTopic);
  };

  const handleSelectSample = (sample: string) => {
    sound.playChime(528);
    setQuestionText(sample);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in duration-300">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#24143F] border border-[#D8B56D]/40 text-[#D8B56D] text-xs font-serif">
          <Sparkles className="w-3.5 h-3.5" /> BƯỚC 1: THIẾT LẬP Ý ĐỊNH
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5F0FF] tracking-wide">
          ĐIỀU BẠN ĐANG MUỐN TÌM HIỂU LÀ GÌ?
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
          Hãy giữ tâm trí tĩnh lặng, hướng sự chú ý vào điều bạn thực sự trăn trở. Đặt câu hỏi rõ ràng sẽ giúp thông điệp Tarot được soi chiếu sáng tỏ nhất.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Topic Selector Chips */}
        <div className="space-y-2.5">
          <label className="block text-xs font-semibold text-[#D8B56D] uppercase tracking-wider">
            Chọn chủ đề quan tâm (Không bắt buộc):
          </label>
          <div className="flex flex-wrap gap-2">
            {TOPICS.map((t) => {
              const Icon = t.icon;
              const isSelected = selectedTopic === t.id;
              return (
                <button
                  type="button"
                  key={t.id}
                  onClick={() => {
                    sound.playChime(440);
                    setSelectedTopic(t.id);
                  }}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium border flex items-center gap-1.5 transition-all ${
                    isSelected
                      ? 'bg-[#24143F] border-[#D8B56D] text-[#D8B56D] shadow-[0_0_12px_rgba(216,181,109,0.35)] font-semibold'
                      : 'bg-black/30 border-white/10 text-slate-300 hover:border-white/25 hover:text-white'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${t.color}`} />
                  <span>{t.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Question Textarea */}
        <div className="space-y-2">
          <label className="block text-xs font-semibold text-[#D8B56D] uppercase tracking-wider flex items-center justify-between">
            <span>Câu hỏi hoặc tâm nguyện của bạn:</span>
            <span className="text-slate-400 font-sans font-normal text-[11px]">
              {questionText.length}/300 ký tự
            </span>
          </label>
          <div className="relative">
            <textarea
              value={questionText}
              onChange={(e) => setQuestionText(e.target.value.slice(0, 300))}
              placeholder="Nhập câu hỏi của bạn tại đây... (Ví dụ: Tôi cần hiểu điều gì về chuyện tình cảm hiện tại?)"
              rows={4}
              className="w-full rounded-xl bg-black/40 border border-[#D8B56D]/40 p-4 text-sm text-[#F5F0FF] placeholder:text-slate-500 focus:outline-none focus:border-[#D8B56D] focus:ring-1 focus:ring-[#D8B56D] shadow-inner transition-all resize-none"
            />
          </div>
        </div>

        {/* Sample Question Hints */}
        <div className="space-y-2 bg-black/25 p-3.5 rounded-xl border border-white/5">
          <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-[#A78BFA]" /> Gợi ý câu hỏi thường gặp:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {SAMPLE_QUESTIONS.map((sq, i) => (
              <button
                type="button"
                key={i}
                onClick={() => handleSelectSample(sq)}
                className="text-[11px] text-left text-slate-300 hover:text-[#D8B56D] bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-lg border border-white/5 transition-all"
              >
                "{sq}"
              </button>
            ))}
          </div>
        </div>

        {/* Set Intention Button */}
        <div className="pt-2 text-center">
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D8B56D] via-[#E8C882] to-[#D8B56D] text-[#100B1D] font-serif font-bold text-sm tracking-widest uppercase shadow-[0_0_25px_rgba(216,181,109,0.4)] hover:shadow-[0_0_35px_rgba(216,181,109,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            ✦ THIẾT LẬP Ý ĐỊNH & TIẾP TỤC ✦
          </button>
        </div>
      </form>
    </div>
  );
};
