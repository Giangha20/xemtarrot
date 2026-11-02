'use client';

import React, { useState } from 'react';
import { TuViChartResult, TuViInput } from '@/types/tuvi';
import { calculateTuViChart } from '@/lib/tuviEngine';
import { TuViForm } from '@/components/tuvi/TuViForm';
import { TuViDetailedAnalysis } from '@/components/tuvi/TuViDetailedAnalysis';
import { Sparkles, Moon, Compass, Shield, BookOpen } from 'lucide-react';

export default function TuViPage() {
  const [chartResult, setChartResult] = useState<TuViChartResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = (input: TuViInput) => {
    setIsLoading(true);
    setTimeout(() => {
      const result = calculateTuViChart(input);
      setChartResult(result);
      setIsLoading(false);
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 400);
  };

  const handleNewChart = () => {
    setChartResult(null);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-10">
        {!chartResult ? (
          <div className="space-y-10 animate-in fade-in duration-500">
            {/* Header section */}
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#24143F] border border-[#D8B56D]/40 text-[#D8B56D] text-xs font-serif font-bold tracking-widest uppercase shadow-sm">
                <Moon className="w-3.5 h-3.5" /> HUYỀN HỌC ĐÔNG PHƯƠNG
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl font-black text-[#F5F0FF] tracking-tight leading-tight">
                LẬP LÁ SỐ TỬ VI ĐẨU SỐ
              </h1>
              <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
                Khám phá bản mệnh, 12 cung định mệnh, 14 chính tinh và dự báo vận trình cuộc đời với hệ thống luận giải sâu sắc, chuẩn mực.
              </p>
            </div>

            {/* Input Form */}
            <TuViForm onSubmit={handleFormSubmit} isLoading={isLoading} />

            {/* Introductory Cards on Tu Vi */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              <div className="p-6 rounded-2xl bg-[#140B24] border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#24143F] border border-[#D8B56D]/40 flex items-center justify-center text-[#D8B56D]">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-base font-bold text-white">
                  12 Cung Định Mệnh
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  Chiếu rọi toàn bộ các khía cạnh cuộc sống: Mệnh, Quan Lộc, Tài Bạch, Phu Thê, Phúc Đức, Điền Trạch, Tật Ách...
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#140B24] border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#24143F] border border-[#A78BFA]/40 flex items-center justify-center text-[#A78BFA]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-base font-bold text-white">
                  14 Chính Tinh & Tứ Hóa
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  Hệ thống sao Tử Vi, Thiên Phủ, Vũ Khúc, Thái Dương cùng các cát tinh phò trợ và hung tinh thử thách được an chuẩn xác.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#140B24] border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#24143F] border border-emerald-500/40 flex items-center justify-center text-emerald-300">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-base font-bold text-white">
                  Đức Năng Thắng Số
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  Lá số là bản đồ định hướng, sự tu dưỡng tâm tính, tích lũy tri thức và hành thiện mới là chìa khóa mở ra tương lai rực rỡ nhất.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <TuViDetailedAnalysis chart={chartResult} onNewChart={handleNewChart} />
        )}
      </div>
    </div>
  );
}
