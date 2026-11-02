'use client';

import React, { useState } from 'react';
import { TuViChartResult, TuViPalace } from '@/types/tuvi';
import { Sparkles, Star, Shield, ArrowUpRight, Compass, Moon } from 'lucide-react';

interface TuViLaSoViewProps {
  chart: TuViChartResult;
  onSelectPalace?: (palace: TuViPalace) => void;
}

export const TuViLaSoView: React.FC<TuViLaSoViewProps> = ({ chart, onSelectPalace }) => {
  const [selectedPalaceId, setSelectedPalaceId] = useState<string>('menh');

  // Map palaces by branch index 0 (Tý) to 11 (Hợi)
  const branchMap: Record<number, TuViPalace> = {};
  chart.palaces.forEach((p) => {
    branchMap[p.chiIndex] = p;
  });

  // Traditional layout indexes for 4x4 outer ring:
  // Row 1 (top): Tỵ (5), Ngọ (6), Mùi (7), Thân (8)
  // Row 2: Mão (3), [Center 2 cols], Dậu (9)
  // Row 3: Dần (2), [Center 2 cols], Tuất (10)
  // Row 4 (bottom): Sửu (1), Tý (0), Hợi (11) ... wait, standard layout:
  // Top: Tỵ(5), Ngọ(6), Mùi(7), Thân(8)
  // Right: Dậu(9), Tuất(10)
  // Bottom: Hợi(11), Tý(0), Sửu(1), Dần(2)
  // Left: Mão(3), Thìn(4)
  // Let's verify standard 12 chi grid positions (row 0..3, col 0..3):
  // (0,0): Tỵ(5),   (0,1): Ngọ(6),  (0,2): Mùi(7),  (0,3): Thân(8)
  // (1,0): Thìn(4), (1,1..2): Trung Cung,           (1,3): Dậu(9)
  // (2,0): Mão(3),  (2,1..2): Trung Cung,           (2,3): Tuất(10)
  // (3,0): Dần(2),  (3,1): Sửu(1),  (3,2): Tý(0),   (3,3): Hợi(11)

  const renderPalaceCard = (chiIndex: number) => {
    const palace = branchMap[chiIndex];
    if (!palace) return null;

    const isSelected = selectedPalaceId === palace.id;

    return (
      <div
        key={chiIndex}
        onClick={() => {
          setSelectedPalaceId(palace.id);
          if (onSelectPalace) onSelectPalace(palace);
        }}
        className={`min-h-[140px] sm:min-h-[160px] p-2.5 sm:p-3 rounded-xl border flex flex-col justify-between transition-all cursor-pointer relative overflow-hidden group ${
          palace.isMenhCung
            ? 'bg-gradient-to-br from-[#2D164D] to-[#170B2E] border-[#D8B56D] shadow-[0_0_20px_rgba(216,181,109,0.3)]'
            : isSelected
            ? 'bg-[#24133F] border-[#A78BFA] shadow-md'
            : 'bg-[#120A22] border-white/10 hover:border-[#D8B56D]/50 hover:bg-[#1A0E30]'
        }`}
      >
        {/* Top row: Palace Name & Branch */}
        <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
          <div className="flex items-center gap-1.5">
            <span className="font-serif text-xs sm:text-sm font-black text-[#D8B56D] tracking-wide">
              {palace.nameVi}
            </span>
            {palace.isMenhCung && (
              <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-500 text-black font-extrabold uppercase">
                MỆNH
              </span>
            )}
            {palace.isThanCung && (
              <span className="text-[9px] px-1.5 py-0.2 rounded bg-purple-500 text-white font-extrabold uppercase">
                THÂN
              </span>
            )}
          </div>
          <span className="text-[10px] text-slate-400 font-mono">
            {palace.canNameVi} {palace.chiNameVi}
          </span>
        </div>

        {/* Main Stars (Chính tinh) */}
        <div className="my-1.5 space-y-1">
          {palace.chinhTinh.length > 0 ? (
            palace.chinhTinh.map((star, idx) => (
              <div key={idx} className="flex items-center justify-between text-xs font-bold">
                <span className="text-amber-200 group-hover:text-amber-100 flex items-center gap-1">
                  <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                  {star.name}
                </span>
                <span className="text-[10px] text-emerald-300 font-mono bg-emerald-950/60 px-1 rounded">
                  {star.brightness || 'Miếu'}
                </span>
              </div>
            ))
          ) : (
            <span className="text-[10px] text-slate-500 italic block">
              Vô Chính Diệu
            </span>
          )}
        </div>

        {/* Secondary Stars (Phụ tinh) */}
        <div className="flex flex-wrap gap-1 text-[10px] line-clamp-2">
          {palace.phuTinh.map((star, idx) => (
            <span
              key={idx}
              className={`px-1 rounded ${
                star.type === 'cat_tinh'
                  ? 'text-purple-300 bg-purple-950/60'
                  : 'text-rose-300 bg-rose-950/60'
              }`}
            >
              {star.name}
            </span>
          ))}
        </div>

        {/* Bottom row: Đại vận & Rating */}
        <div className="flex items-center justify-between pt-1 border-t border-white/5 text-[10px] text-slate-400 font-sans">
          <span>Đại vận: <strong className="text-white">{palace.daiHan}</strong></span>
          <span className="text-amber-300 font-semibold">{palace.rating}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* 4x4 Grid for Desktop & Tablet */}
      <div className="p-4 sm:p-6 rounded-3xl bg-[#0B0515] border-2 border-[#D8B56D]/40 shadow-2xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-[#D8B56D]" />
            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#F5F0FF]">
              BÀN ĐỒ LÁ SỐ TỬ VI 12 CUNG
            </h3>
          </div>
          <span className="text-xs text-[#A78BFA] font-sans">
            * Chạm vào cung bất kỳ để xem phân tích luận giải chi tiết ở dưới
          </span>
        </div>

        {/* Authentic 4x4 Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 font-sans">
          {/* Row 1: Tỵ (5), Ngọ (6), Mùi (7), Thân (8) */}
          {renderPalaceCard(5)}
          {renderPalaceCard(6)}
          {renderPalaceCard(7)}
          {renderPalaceCard(8)}

          {/* Row 2: Thìn (4), [Center], Dậu (9) */}
          {renderPalaceCard(4)}
          <div className="col-span-2 hidden md:flex flex-col justify-center items-center text-center p-4 rounded-xl bg-gradient-to-br from-[#1B0F2E] to-[#100720] border-2 border-[#D8B56D]/40 space-y-2">
            <span className="text-xs font-serif font-black tracking-widest text-[#D8B56D] uppercase">
              TRUNG CUNG THIÊN BÀN
            </span>
            <h4 className="font-serif text-lg font-bold text-white">
              {chart.profile.hoTen}
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-slate-300 text-left w-full max-w-xs pt-1">
              <span>Năm sinh: <strong>{chart.profile.canChiNam}</strong></span>
              <span>Bản mệnh: <strong className="text-amber-300">{chart.profile.menhElement}</strong></span>
              <span>Cục: <strong>{chart.profile.cucNameVi}</strong></span>
              <span>Giờ sinh: <strong>{chart.profile.canChiGio.split(' ')[1]}</strong></span>
              <span>Mệnh tại: <strong className="text-[#D8B56D]">{chart.profile.cungMenhChi}</strong></span>
              <span>Thân tại: <strong className="text-purple-300">{chart.profile.cungThanChi}</strong></span>
            </div>
            <p className="text-[10px] text-slate-400 italic pt-1">
              {chart.profile.menhCucTuongQuan}
            </p>
          </div>
          {renderPalaceCard(9)}

          {/* Row 3: Mão (3), [Center], Tuất (10) */}
          {renderPalaceCard(3)}
          <div className="col-span-2 hidden md:flex flex-col justify-center items-center text-center p-3 rounded-xl bg-[#140A24] border border-white/5 text-xs text-slate-300">
            <span className="font-serif text-amber-200 font-bold mb-1">
              Lưu Niên Vận Hạn Năm {chart.profile.namXemHan}
            </span>
            <p className="text-[11px] text-slate-400 max-w-sm">
              Đại vận 10 năm chuyển cung theo chiều {chart.profile.amDuongMenh.includes('Thuận') ? 'Thuận kim đồng hồ' : 'Nghịch kim đồng hồ'}.
            </p>
          </div>
          {renderPalaceCard(10)}

          {/* Row 4: Dần (2), Sửu (1), Tý (0), Hợi (11) */}
          {renderPalaceCard(2)}
          {renderPalaceCard(1)}
          {renderPalaceCard(0)}
          {renderPalaceCard(11)}
        </div>
      </div>
    </div>
  );
};
