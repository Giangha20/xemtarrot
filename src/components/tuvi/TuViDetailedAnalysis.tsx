'use client';

import React, { useState } from 'react';
import { TuViChartResult, TuViPalace } from '@/types/tuvi';
import { TuViLaSoView } from './TuViLaSoView';
import { sound } from '@/lib/sound';
import {
  Sparkles,
  BookOpen,
  Compass,
  Calendar,
  Flame,
  Shield,
  Heart,
  Briefcase,
  Coins,
  Copy,
  Check,
  RotateCcw,
  Share2,
  ChevronDown,
  ChevronUp,
  Star
} from 'lucide-react';

interface TuViDetailedAnalysisProps {
  chart: TuViChartResult;
  onNewChart: () => void;
}

export const TuViDetailedAnalysis: React.FC<TuViDetailedAnalysisProps> = ({
  chart,
  onNewChart
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'laso' | 'palaces' | 'vanhan' | 'phongthuy'>('overview');
  const [expandedPalaceId, setExpandedPalaceId] = useState<string>('menh');
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    sound.playChime(528);
    let text = `📜 LÁ SỐ TỬ VI ĐẨU SỐ – ${chart.profile.hoTen}\n`;
    text += `Năm sinh: ${chart.profile.canChiNam} | Mệnh: ${chart.profile.menhNapAm} | Cục: ${chart.profile.cucNameVi}\n`;
    text += `Giờ sinh: ${chart.profile.canChiGio}\n\n`;
    text += `🌟 TỔNG QUAN BẢN MỆNH:\n${chart.fullInterpretation.tongQuanBanMenh}\n\n`;
    text += `💼 CÔNG DANH SỰ NGHIỆP:\n${chart.fullInterpretation.congDanhSuNghiep}\n\n`;
    text += `💰 TÀI LỘC TIỀN BẠC:\n${chart.fullInterpretation.taiLocTienBac}\n\n`;
    text += `❤️ TÌNH DUYÊN HÔN NHÂN:\n${chart.fullInterpretation.tinhDuyenGiaDao}\n\n`;
    text += `⏳ VẬN HẠN NĂM ${chart.profile.namXemHan}:\n${chart.fullInterpretation.vanHanNamNay}\n\n`;
    text += `https://xemtarrot.vercel.app/tu-vi`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    }
  };

  const tabs = [
    { id: 'overview', label: 'Tổng Quan Bản Mệnh', icon: Sparkles },
    { id: 'laso', label: 'Bàn Đồ 12 Cung', icon: Compass },
    { id: 'palaces', label: 'Luận Giải 12 Cung Chi Tiết', icon: BookOpen },
    { id: 'vanhan', label: `Vận Hạn Năm ${chart.profile.namXemHan}`, icon: Calendar },
    { id: 'phongthuy', label: 'Phong Thủy & Tu Thân', icon: Flame }
  ] as const;

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500 pb-16 font-sans">
      {/* Top Banner: Đương Số Profile */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#24133F] via-[#1A0E2E] to-[#10091D] border-2 border-[#D8B56D]/60 shadow-[0_0_40px_rgba(216,181,109,0.3)] space-y-5 text-center relative overflow-hidden">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#10071D] border border-[#D8B56D]/40 text-[#D8B56D] text-xs font-serif font-bold">
          <Sparkles className="w-3.5 h-3.5" /> LÁ SỐ TỬ VI ĐẨU SỐ TOÀN THƯ
        </div>

        <div>
          <h2 className="font-serif text-2xl sm:text-4xl font-black text-[#F5F0FF] tracking-wider mb-1">
            {chart.profile.hoTen}
          </h2>
          <p className="text-xs sm:text-sm text-[#A78BFA]">
            {chart.profile.gioiTinhVi} mạng • Sinh ngày {chart.profile.duongLichDisplay} ({chart.profile.canChiGio})
          </p>
        </div>

        {/* Vital Info Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-3xl mx-auto text-xs text-slate-200">
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
            <span className="text-[10px] text-slate-400 block">Can Chi Năm</span>
            <strong className="text-amber-300 font-serif">{chart.profile.canChiNam}</strong>
          </div>
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
            <span className="text-[10px] text-slate-400 block">Bản Mệnh Nạp Âm</span>
            <strong className="text-purple-300">{chart.profile.menhNapAm}</strong>
          </div>
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
            <span className="text-[10px] text-slate-400 block">Ngũ Hành Cục</span>
            <strong className="text-emerald-300">{chart.profile.cucNameVi}</strong>
          </div>
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
            <span className="text-[10px] text-slate-400 block">Mệnh / Thân Cư</span>
            <strong className="text-[#D8B56D]">{chart.profile.cungMenhChi} / {chart.profile.cungThanChi}</strong>
          </div>
        </div>

        {/* Toolbar: Copy & New */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={handleCopy}
            className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 text-xs font-semibold flex items-center gap-1.5 transition-all"
          >
            {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{isCopied ? 'Đã Sao Chép Lá Số!' : 'Sao Chép Toàn Bộ Luận Giải'}</span>
          </button>
          <button
            onClick={onNewChart}
            className="px-4 py-2 rounded-full bg-[#D8B56D] hover:bg-[#F3E2B8] text-[#100B1D] font-bold text-xs flex items-center gap-1.5 transition-all shadow-md"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Lập Lá Số Khác
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-white/10">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                sound.playChime(660);
                setActiveTab(tab.id);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 whitespace-nowrap transition-all border ${
                isActive
                  ? 'bg-[#29174A] text-[#D8B56D] border-[#D8B56D] shadow-md font-bold'
                  : 'bg-white/5 text-slate-300 border-white/10 hover:text-white hover:bg-white/10'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: TỔNG QUAN BẢN MỆNH */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-[#140B24] border-2 border-[#D8B56D]/40 shadow-xl space-y-4">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#D8B56D] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#D8B56D]" /> TỔNG QUAN BẢN MỆNH & CỐT CÁCH
            </h3>
            <p className="text-slate-200 text-sm leading-relaxed whitespace-pre-line font-sans">
              {chart.fullInterpretation.tongQuanBanMenh}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#170E2B] border border-white/10 space-y-3">
              <h4 className="font-serif text-base font-bold text-amber-300 flex items-center gap-2">
                <Shield className="w-4 h-4 text-amber-400" /> Cốt Cách Nội Tâm & Phong Thái
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line">
                {chart.fullInterpretation.tinhCachCotCach}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#170E2B] border border-white/10 space-y-3">
              <h4 className="font-serif text-base font-bold text-purple-300 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-purple-400" /> Điểm Nhấn Công Danh & Tài Lộc
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line">
                {chart.fullInterpretation.congDanhSuNghiep}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: BÀN ĐỒ 12 CUNG */}
      {activeTab === 'laso' && (
        <TuViLaSoView
          chart={chart}
          onSelectPalace={(p) => {
            setExpandedPalaceId(p.id);
            setActiveTab('palaces');
          }}
        />
      )}

      {/* TAB 3: LUẬN GIẢI 12 CUNG ĐẦY ĐỦ */}
      {activeTab === 'palaces' && (
        <div className="space-y-4">
          <div className="text-center space-y-1 mb-4">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F5F0FF]">
              LUẬN GIẢI CHI TIẾT 12 CUNG MỆNH
            </h3>
            <p className="text-xs text-slate-400">
              Bấm vào từng cung để đọc phân tích chuyên sâu về các phương diện trong cuộc đời.
            </p>
          </div>

          <div className="space-y-3">
            {chart.palaces.map((palace) => {
              const isExpanded = expandedPalaceId === palace.id;
              return (
                <div
                  key={palace.id}
                  className={`rounded-2xl border transition-all overflow-hidden ${
                    isExpanded
                      ? 'bg-[#180E2B] border-[#D8B56D]/60 shadow-lg'
                      : 'bg-[#120A20] border-white/10 hover:border-white/20'
                  }`}
                >
                  <button
                    onClick={() => {
                      sound.playChime(600);
                      setExpandedPalaceId(isExpanded ? '' : palace.id);
                    }}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-[#24143F] border border-[#D8B56D]/50 text-[#D8B56D] text-xs font-serif font-black flex items-center justify-center">
                        {palace.nameVi.charAt(0)}
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-serif text-base sm:text-lg font-bold text-white">
                            Cung {palace.nameVi}
                          </h4>
                          <span className="text-xs text-slate-400 font-mono">
                            (Tại {palace.chiNameVi})
                          </span>
                          {palace.isMenhCung && (
                            <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500 text-black font-extrabold uppercase">
                              MỆNH CUNG
                            </span>
                          )}
                          {palace.isThanCung && (
                            <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500 text-white font-extrabold uppercase">
                              THÂN CUNG
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-400 line-clamp-1">
                          {palace.summary}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="hidden sm:inline text-xs text-amber-300 font-medium">
                        {palace.rating}
                      </span>
                      {isExpanded ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-5 pb-5 pt-2 border-t border-white/5 space-y-4 animate-in fade-in duration-300">
                      {/* Star summary pills */}
                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className="text-slate-400 self-center">Chính tinh:</span>
                        {palace.chinhTinh.length > 0 ? (
                          palace.chinhTinh.map((s, idx) => (
                            <span key={idx} className="px-2.5 py-1 rounded-full bg-[#24143F] border border-amber-400/40 text-amber-200 font-bold flex items-center gap-1">
                              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                              {s.name} ({s.brightness || 'Miếu'})
                            </span>
                          ))
                        ) : (
                          <span className="text-slate-500 italic">Vô Chính Diệu</span>
                        )}

                        <span className="text-slate-400 self-center ml-2">Phụ tinh:</span>
                        {palace.phuTinh.map((s, idx) => (
                          <span key={idx} className="px-2 py-0.5 rounded bg-white/5 text-purple-200 text-[11px]">
                            {s.name}
                          </span>
                        ))}
                      </div>

                      {/* Detailed analysis paragraph */}
                      <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2">
                        <span className="text-xs font-serif font-bold text-[#D8B56D] uppercase block">
                          Luận Giải Chuyên Sâu:
                        </span>
                        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre-line">
                          {palace.detailedAnalysis}
                        </p>
                      </div>

                      {/* Advice */}
                      <div className="p-3.5 rounded-xl bg-[#24143F]/50 border border-[#D8B56D]/30 flex items-start gap-2.5">
                        <span className="text-amber-300 text-xs font-bold whitespace-nowrap">Lời khuyên:</span>
                        <p className="text-xs text-slate-300 italic">{palace.advice}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 4: VẬN HẠN NĂM 2026 */}
      {activeTab === 'vanhan' && (
        <div className="space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#1C0F33] to-[#120822] border-2 border-[#D8B56D] shadow-xl space-y-4">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#D8B56D] flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#D8B56D]" /> DỰ BÁO VẬN HẠN NĂM {chart.profile.namXemHan}
            </h3>
            <div className="p-5 rounded-2xl bg-black/40 border border-white/10 text-slate-200 text-sm leading-relaxed whitespace-pre-line">
              {chart.fullInterpretation.vanHanNamNay}
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: PHONG THỦY & TU THÂN */}
      {activeTab === 'phongthuy' && (
        <div className="space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#1E1035] to-[#110720] border-2 border-amber-500/50 shadow-xl space-y-4">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-amber-300 flex items-center gap-2">
              <Flame className="w-5 h-5 text-amber-400" /> PHONG THỦY HỢP MỆNH & ĐẠO TU THÂN
            </h3>
            <div className="p-5 rounded-2xl bg-black/40 border border-white/10 text-slate-200 text-sm leading-relaxed whitespace-pre-line">
              {chart.fullInterpretation.loiKhuyenPhongThuy}
            </div>
          </div>
        </div>
      )}

      {/* Bottom Footer Actions */}
      <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          onClick={onNewChart}
          className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D8B56D] to-[#E8C882] text-[#100B1D] font-serif font-black text-xs sm:text-sm tracking-widest uppercase shadow-[0_0_25px_rgba(216,181,109,0.5)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
        >
          <RotateCcw className="w-4 h-4" /> LẬP LÁ SỐ MỚI
        </button>

        <button
          onClick={handleCopy}
          className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 text-xs font-bold tracking-wide uppercase flex items-center justify-center gap-2 transition-all"
        >
          <Share2 className="w-4 h-4" /> Chia Sẻ Lá Số
        </button>
      </div>
    </div>
  );
};
