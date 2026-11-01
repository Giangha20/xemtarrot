'use client';

import React, { useState } from 'react';
import { TAROT_KNOWLEDGE_ARTICLES, KnowledgeArticle } from '@/data/knowledge';
import { Starfield } from '@/components/common/Starfield';
import { sound } from '@/lib/sound';
import {
  Sparkles,
  BookOpen,
  Layers,
  Compass,
  ShieldCheck,
  Clock,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

export default function KnowledgePage() {
  const [activeArticleId, setActiveArticleId] = useState<string>(TAROT_KNOWLEDGE_ARTICLES[0].id);

  const activeArticle = TAROT_KNOWLEDGE_ARTICLES.find((a) => a.id === activeArticleId) || TAROT_KNOWLEDGE_ARTICLES[0];

  const getCategoryIcon = (cat: KnowledgeArticle['category']) => {
    switch (cat) {
      case 'basics':
        return <Sparkles className="w-4 h-4 text-[#D8B56D]" />;
      case 'structure':
        return <Layers className="w-4 h-4 text-[#A78BFA]" />;
      case 'reading':
        return <Compass className="w-4 h-4 text-emerald-400" />;
      case 'philosophy':
        return <ShieldCheck className="w-4 h-4 text-sky-400" />;
      default:
        return <BookOpen className="w-4 h-4 text-[#D8B56D]" />;
    }
  };

  return (
    <div className="relative min-h-screen py-10 px-4 sm:px-6">
      <Starfield />

      <main className="relative z-10 max-w-7xl mx-auto space-y-8">
        {/* Page Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#24143F] border border-[#D8B56D]/40 text-[#D8B56D] text-xs font-serif">
            <BookOpen className="w-3.5 h-3.5" /> HỆ THỐNG TRI THỨC TAROT CHUẨN MỰC
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#F5F0FF] tracking-wide">
            CẨM NANG HỌC TAROT TỪ CƠ BẢN ĐẾN CHUYÊN SÂU
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Học cách đọc biểu tượng, thấu hiểu năng lượng các nguyên tố và làm chủ nghệ thuật kết nối trực giác với 78 lá bài.
          </p>
        </div>

        {/* 2-Column Layout: Articles Sidebar & Active Reader */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Articles Index Navigation (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D8B56D] px-2 block">
              Mục Lục Bài Học:
            </span>

            <div className="space-y-2">
              {TAROT_KNOWLEDGE_ARTICLES.map((article) => {
                const isSelected = article.id === activeArticleId;
                return (
                  <div
                    key={article.id}
                    onClick={() => {
                      sound.playChime(528);
                      setActiveArticleId(article.id);
                    }}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-[#24143F] border-[#D8B56D] text-[#D8B56D] shadow-[0_0_20px_rgba(216,181,109,0.3)] font-bold'
                        : 'bg-black/40 border-white/5 hover:border-white/20 text-slate-300 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      {getCategoryIcon(article.category)}
                      <span className="text-[11px] font-sans font-normal text-slate-400">
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="font-serif text-sm font-semibold text-[#F5F0FF] leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 font-sans font-normal mt-1 line-clamp-1">
                      {article.subtitle}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Quick Banner CTA */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#24143F] to-[#120B20] border border-[#D8B56D]/30 space-y-3 text-center">
              <Sparkles className="w-6 h-6 text-[#D8B56D] mx-auto" />
              <h4 className="font-serif text-sm font-bold text-[#F5F0FF]">
                Sẵn Sàng Thực Hành?
              </h4>
              <p className="text-xs text-slate-300">
                Lý thuyết chỉ sống động khi được đối chiếu với trải nghiệm thực tế của chính bạn.
              </p>
              <Link
                href="/reading"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#D8B56D] text-[#100B1D] font-serif font-bold text-xs uppercase tracking-wider hover:bg-[#E8C882] transition-colors"
              >
                <span>Bắt Đầu Trải Bài</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Active Article Content (8 cols) */}
          <div className="lg:col-span-8 p-6 sm:p-10 rounded-3xl bg-[#150D27]/90 border border-[#D8B56D]/30 shadow-2xl space-y-8 animate-in fade-in duration-300">
            {/* Article Heading */}
            <div className="border-b border-white/10 pb-6 space-y-3">
              <div className="flex items-center gap-2 text-xs text-[#A78BFA] font-medium">
                <Clock className="w-3.5 h-3.5" />
                <span>{activeArticle.readTime}</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5F0FF] leading-tight">
                {activeArticle.title}
              </h2>

              <p className="text-sm text-slate-300 italic font-serif">
                {activeArticle.subtitle}
              </p>
            </div>

            {/* Article Sections */}
            <div className="space-y-8 text-slate-200 text-sm sm:text-base leading-relaxed">
              {activeArticle.content.map((sec, idx) => (
                <div key={idx} className="space-y-4">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#D8B56D] flex items-center gap-2 border-l-2 border-[#D8B56D] pl-3">
                    {sec.sectionTitle}
                  </h3>

                  <div className="space-y-3 text-slate-300 font-sans text-sm sm:text-[15px] leading-relaxed">
                    {sec.paragraphs.map((para, pIdx) => (
                      <p key={pIdx}>{para}</p>
                    ))}
                  </div>

                  {sec.quote && (
                    <blockquote className="p-4 rounded-xl bg-gradient-to-r from-[#24143F] to-black/40 border-l-4 border-[#D8B56D] font-serif text-base italic text-purple-100 my-4">
                      "{sec.quote}"
                    </blockquote>
                  )}

                  {sec.bulletPoints && (
                    <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2">
                      {sec.bulletPoints.map((bp, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm text-purple-200">
                          <span className="text-[#D8B56D] font-bold">•</span>
                          <span>{bp}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
