'use client';

import React, { useState } from 'react';
import { TuViGender, TuViInput } from '@/types/tuvi';
import { GIO_SINH_LIST } from '@/data/tuviData';
import { sound } from '@/lib/sound';
import {
  Sparkles,
  Calendar,
  Clock,
  User,
  Compass,
  ArrowRight,
  Flame,
  Check
} from 'lucide-react';

interface TuViFormProps {
  onSubmit: (input: TuViInput) => void;
  isLoading?: boolean;
}

export const TuViForm: React.FC<TuViFormProps> = ({ onSubmit, isLoading = false }) => {
  const [hoTen, setHoTen] = useState('');
  const [gioiTinh, setGioiTinh] = useState<TuViGender>('nam');
  const [ngaySinh, setNgaySinh] = useState(15);
  const [thangSinh, setThangSinh] = useState(8);
  const [namSinh, setNamSinh] = useState(1996);
  const [gioSinhIndex, setGioSinhIndex] = useState(6); // Ngọ: 11h - 13h
  const [loaiLich, setLoaiLich] = useState<'duong_lich' | 'am_lich'>('duong_lich');
  const [namXem, setNamXem] = useState(2026);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playChime(528);

    const chosenGio = GIO_SINH_LIST[gioSinhIndex];
    onSubmit({
      hoTen: hoTen.trim() || 'Đương Số',
      gioiTinh,
      ngaySinh: Number(ngaySinh),
      thangSinh: Number(thangSinh),
      namSinh: Number(namSinh),
      gioSinhChi: chosenGio.chi,
      gioSinhGio: chosenGio.range,
      namXem: Number(namXem),
      loaiLich
    });
  };

  const handleQuickPreset = (name: string, gender: TuViGender, day: number, month: number, year: number, hourIdx: number) => {
    sound.playChime(660);
    setHoTen(name);
    setGioiTinh(gender);
    setNgaySinh(day);
    setThangSinh(month);
    setNamSinh(year);
    setGioSinhIndex(hourIdx);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#1E1136] via-[#150A26] to-[#0D0618] border-2 border-[#D8B56D]/50 shadow-[0_0_50px_rgba(216,181,109,0.3)] space-y-6">
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#24143F] border border-[#D8B56D]/40 text-[#D8B56D] text-xs font-serif font-bold tracking-wider">
          <Sparkles className="w-3.5 h-3.5" /> LẬP LÁ SỐ TỬ VI ĐẨU SỐ TOÀN DIỆN
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-black text-[#F5F0FF]">
          NHẬP THÔNG TIN BẢN MỆNH
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 font-sans max-w-lg mx-auto">
          Hệ thống sẽ an 14 chính tinh, tứ hóa, các phụ tinh cát hung và luận giải chi tiết 12 cung mệnh trọn đời.
        </p>
      </div>

      {/* Quick Presets */}
      <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-xs">
        <span className="text-slate-400 font-sans">Chọn nhanh mẫu thử:</span>
        <button
          type="button"
          onClick={() => handleQuickPreset('Nguyễn Văn An', 'nam', 15, 8, 1996, 6)}
          className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/10 text-amber-300 border border-amber-500/30 text-[11px] font-sans"
        >
          Bính Tý 1996 (Nam)
        </button>
        <button
          type="button"
          onClick={() => handleQuickPreset('Trần Thị Mai', 'nu', 22, 4, 1998, 3)}
          className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/10 text-purple-300 border border-purple-500/30 text-[11px] font-sans"
        >
          Mậu Dần 1998 (Nữ)
        </button>
        <button
          type="button"
          onClick={() => handleQuickPreset('Lê Hoàng Nam', 'nam', 8, 11, 1994, 2)}
          className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/10 text-emerald-300 border border-emerald-500/30 text-[11px] font-sans"
        >
          Giáp Tuất 1994 (Nam)
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 font-sans">
        {/* Họ và tên */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-200 flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-[#D8B56D]" /> Họ và tên của bạn:
          </label>
          <input
            type="text"
            required
            value={hoTen}
            onChange={(e) => setHoTen(e.target.value)}
            placeholder="Ví dụ: Nguyễn Minh Tuấn"
            className="w-full px-4 py-3 rounded-xl bg-[#0F071D] border border-white/15 focus:border-[#D8B56D] text-white text-sm focus:outline-none transition-all placeholder:text-slate-500"
          />
        </div>

        {/* Giới tính & Loại Lịch */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-200 block">
              Giới tính:
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setGioiTinh('nam')}
                className={`py-2.5 rounded-xl text-xs font-bold transition-all border ${
                  gioiTinh === 'nam'
                    ? 'bg-[#24143F] text-[#D8B56D] border-[#D8B56D] shadow-sm'
                    : 'bg-white/5 text-slate-400 border-white/10 hover:text-white'
                }`}
              >
                Nam Mạng
              </button>
              <button
                type="button"
                onClick={() => setGioiTinh('nu')}
                className={`py-2.5 rounded-xl text-xs font-bold transition-all border ${
                  gioiTinh === 'nu'
                    ? 'bg-[#24143F] text-[#D8B56D] border-[#D8B56D] shadow-sm'
                    : 'bg-white/5 text-slate-400 border-white/10 hover:text-white'
                }`}
              >
                Nữ Mạng
              </button>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-200 block">
              Loại ngày sinh nhập vào:
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setLoaiLich('duong_lich')}
                className={`py-2.5 rounded-xl text-xs font-bold transition-all border ${
                  loaiLich === 'duong_lich'
                    ? 'bg-[#24143F] text-amber-300 border-[#D8B56D]'
                    : 'bg-white/5 text-slate-400 border-white/10 hover:text-white'
                }`}
              >
                Dương Lịch
              </button>
              <button
                type="button"
                onClick={() => setLoaiLich('am_lich')}
                className={`py-2.5 rounded-xl text-xs font-bold transition-all border ${
                  loaiLich === 'am_lich'
                    ? 'bg-[#24143F] text-amber-300 border-[#D8B56D]'
                    : 'bg-white/5 text-slate-400 border-white/10 hover:text-white'
                }`}
              >
                Âm Lịch
              </button>
            </div>
          </div>
        </div>

        {/* Ngày - Tháng - Năm sinh */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-200 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#D8B56D]" /> Ngày / Tháng / Năm sinh:
          </label>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <span className="text-[10px] text-slate-400 block mb-1">Ngày (1 - 31)</span>
              <input
                type="number"
                min={1}
                max={31}
                value={ngaySinh}
                onChange={(e) => setNgaySinh(Number(e.target.value))}
                className="w-full px-3 py-2.5 rounded-xl bg-[#0F071D] border border-white/15 focus:border-[#D8B56D] text-white text-sm focus:outline-none"
              />
            </div>

            <div>
              <span className="text-[10px] text-slate-400 block mb-1">Tháng (1 - 12)</span>
              <input
                type="number"
                min={1}
                max={12}
                value={thangSinh}
                onChange={(e) => setThangSinh(Number(e.target.value))}
                className="w-full px-3 py-2.5 rounded-xl bg-[#0F071D] border border-white/15 focus:border-[#D8B56D] text-white text-sm focus:outline-none"
              />
            </div>

            <div>
              <span className="text-[10px] text-slate-400 block mb-1">Năm sinh</span>
              <input
                type="number"
                min={1920}
                max={2030}
                value={namSinh}
                onChange={(e) => setNamSinh(Number(e.target.value))}
                className="w-full px-3 py-2.5 rounded-xl bg-[#0F071D] border border-white/15 focus:border-[#D8B56D] text-white text-sm focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Giờ sinh */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-200 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#D8B56D]" /> Giờ sinh (Địa chi 12 giờ):
          </label>
          <select
            value={gioSinhIndex}
            onChange={(e) => setGioSinhIndex(Number(e.target.value))}
            className="w-full px-4 py-3 rounded-xl bg-[#0F071D] border border-white/15 focus:border-[#D8B56D] text-white text-sm focus:outline-none"
          >
            {GIO_SINH_LIST.map((item, idx) => (
              <option key={idx} value={idx} className="bg-[#100B1D] text-white">
                Giờ {item.chi} ({item.range}) – {item.desc}
              </option>
            ))}
          </select>
          <p className="text-[11px] text-slate-400 italic">
            * {GIO_SINH_LIST[gioSinhIndex].desc}
          </p>
        </div>

        {/* Năm xem hạn */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-200 flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-[#D8B56D]" /> Năm cần luận giải vận hạn:
          </label>
          <input
            type="number"
            min={2020}
            max={2040}
            value={namXem}
            onChange={(e) => setNamXem(Number(e.target.value))}
            className="w-full px-4 py-2.5 rounded-xl bg-[#0F071D] border border-white/15 focus:border-[#D8B56D] text-white text-sm focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-4 rounded-full bg-gradient-to-r from-[#D8B56D] via-[#F3E2B8] to-[#D8B56D] text-[#100B1D] font-serif font-black text-sm tracking-widest uppercase shadow-[0_0_30px_rgba(216,181,109,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          <Sparkles className="w-4 h-4" />
          <span>LẬP LÁ SỐ & LUẬN GIẢI CHI TIẾT</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
