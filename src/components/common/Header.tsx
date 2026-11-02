'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { sound, AMBIENT_TRACKS, AmbientTrack } from '@/lib/sound';
import {
  Sparkles,
  Volume2,
  VolumeX,
  Music,
  Menu,
  X,
  Compass,
  Layers,
  BookOpen,
  Clock,
  Info,
  Moon,
  ChevronRight,
  ChevronDown,
  Heart,
  Briefcase,
  Eye,
  Star,
  CheckCircle2,
  Home,
  Check
} from 'lucide-react';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(() => (typeof window !== 'undefined' ? sound.getIsMuted() : false));
  const [isAmbientPlaying, setIsAmbientPlaying] = useState(() => (typeof window !== 'undefined' ? sound.getIsAmbientPlaying() : false));
  const [currentTrack, setCurrentTrack] = useState<AmbientTrack>(() => sound.getCurrentTrack());
  const [isTrackPickerOpen, setIsTrackPickerOpen] = useState(false);
  const [volume, setVolume] = useState(() => sound.getVolume());
  const [openSubmenu, setOpenSubmenu] = useState<string | null>('tarot');

  useEffect(() => {
    return sound.subscribe(() => {
      setIsMuted(sound.getIsMuted());
      setIsAmbientPlaying(sound.getIsAmbientPlaying());
      setCurrentTrack(sound.getCurrentTrack());
      setVolume(sound.getVolume());
    });
  }, []);

  const toggleSoundMute = () => {
    const nextMuted = !isMuted;
    sound.setMuted(nextMuted);
    setIsMuted(nextMuted);
    if (!nextMuted) {
      sound.playChime(660);
    }
  };

  const toggleAmbientMusic = () => {
    const playing = sound.toggleAmbient();
    setIsAmbientPlaying(playing);
    if (isMuted && playing) {
      sound.setMuted(false);
      setIsMuted(false);
    }
  };

  const handleSelectTrack = (trackId: string) => {
    sound.setTrack(trackId);
    if (!isAmbientPlaying) {
      sound.startAmbient(trackId);
    }
    sound.playChime(640);
  };

  const toggleSubmenu = (key: string) => {
    setOpenSubmenu((prev) => (prev === key ? null : key));
  };

  const navLinks = [
    { href: '/', label: 'Trang Chủ' },
    { href: '/reading', label: 'Xem Trải Bài Tarot', highlight: true },
    { href: '/tu-vi', label: 'Xem Tử Vi Đẩu Số', isNew: true },
    { href: '/cards', label: 'Bộ Bài 78 Lá' },
    { href: '/knowledge', label: 'Kiến Thức Tarot' },
    { href: '/history', label: 'Lịch Sử Xem' },
    { href: '/about', label: 'Giới Thiệu' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0E061D] border-b border-[#D8B56D]/30 transition-all shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
          onClick={() => {
            setIsMobileMenuOpen(false);
            sound.playChime(528);
          }}
        >
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-[#24143F] to-[#4C2882] border-2 border-[#D8B56D] flex items-center justify-center shadow-[0_0_15px_rgba(216,181,109,0.35)] group-hover:shadow-[0_0_25px_rgba(216,181,109,0.6)] transition-all">
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#D8B56D] group-hover:rotate-45 transition-transform duration-500" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-black tracking-widest text-base sm:text-xl text-[#F5F0FF] group-hover:text-[#D8B56D] transition-colors">
              MYSTIC TAROT
            </span>
            <span className="text-[9px] sm:text-[10px] text-[#A78BFA] tracking-tighter uppercase font-sans font-semibold">
              Tarot & Tử Vi Đẩu Số
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2.5">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#24143F] text-[#D8B56D] border border-[#D8B56D]/60 shadow-sm font-semibold'
                    : link.highlight
                    ? 'bg-[#D8B56D] text-[#100B1D] font-bold hover:bg-[#E8C882] shadow-[0_0_15px_rgba(216,181,109,0.3)]'
                    : link.isNew
                    ? 'bg-[#2D1B4E] text-amber-300 hover:text-white border border-amber-500/50 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
                {link.isNew && (
                  <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-gradient-to-r from-amber-500 to-amber-300 text-black font-extrabold uppercase tracking-tighter">
                    Mới
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Sound Controls & Mobile Hamburger */}
        <div className="flex items-center gap-2">
          {/* Ambient Music Toggle & Track Picker */}
          <div className="relative flex items-center">
            <button
              onClick={toggleAmbientMusic}
              title={isAmbientPlaying ? 'Tắt nhạc thiền' : 'Bật nhạc thiền phòng thu'}
              className={`p-2 rounded-l-full border-y border-l transition-all text-xs flex items-center gap-1.5 ${
                isAmbientPlaying
                  ? 'bg-[#24143F] border-[#D8B56D] text-[#D8B56D] shadow-[0_0_12px_rgba(216,181,109,0.4)]'
                  : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
              }`}
            >
              <Music className={`w-4 h-4 ${isAmbientPlaying ? 'animate-bounce text-amber-400' : ''}`} />
              <span className="hidden md:inline text-[11px] font-sans">
                {isAmbientPlaying ? currentTrack.nameVi.split(' ')[2] || 'Nhạc Thiền' : 'Nhạc Thiền'}
              </span>
            </button>
            <button
              onClick={() => setIsTrackPickerOpen(!isTrackPickerOpen)}
              title="Đổi bài nhạc thiền & điều chỉnh âm lượng"
              className={`p-2 pr-2.5 rounded-r-full border transition-all text-xs ${
                isAmbientPlaying
                  ? 'bg-[#24143F] border-[#D8B56D] text-[#D8B56D]'
                  : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
              }`}
            >
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  isTrackPickerOpen ? 'rotate-180 text-amber-300' : ''
                }`}
              />
            </button>

            {/* Desktop Track Picker Popover */}
            {isTrackPickerOpen && (
              <div
                className="absolute right-0 top-full mt-2 w-80 rounded-2xl border-2 border-[#D8B56D]/50 p-3.5 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-150"
                style={{ backgroundColor: '#0D061A' }}
              >
                <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2.5">
                  <span className="text-xs font-bold text-[#D8B56D] font-serif uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Chọn Nhạc Thiền Tĩnh Tâm
                  </span>
                  <button
                    onClick={() => setIsTrackPickerOpen(false)}
                    className="text-slate-400 hover:text-white text-xs px-1.5 py-0.5 rounded border border-white/10"
                  >
                    ✕
                  </button>
                </div>

                <div className="flex flex-col gap-1.5 mb-3">
                  {AMBIENT_TRACKS.map((track) => {
                    const isCurrent = currentTrack.id === track.id;
                    return (
                      <button
                        key={track.id}
                        onClick={() => handleSelectTrack(track.id)}
                        className={`p-2.5 rounded-xl text-left border flex items-center justify-between transition-all ${
                          isCurrent
                            ? 'border-[#D8B56D] bg-[#24143F] text-[#D8B56D] shadow-md font-bold'
                            : 'border-white/5 bg-white/5 text-slate-300 hover:bg-white/10'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-lg">{track.icon}</span>
                          <div>
                            <div className="text-xs font-semibold leading-snug">{track.nameVi}</div>
                            <div className="text-[10px] text-slate-400 font-normal leading-snug line-clamp-1">
                              {track.description}
                            </div>
                          </div>
                        </div>
                        {isCurrent && (
                          <div className="flex items-center gap-1 text-emerald-400">
                            {isAmbientPlaying && <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />}
                            <Check className="w-4 h-4 text-emerald-400" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Volume Slider */}
                <div className="pt-2 border-t border-white/10">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                    <span>Âm lượng nhạc</span>
                    <span>{Math.round(volume * 100)}%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Volume2 className="w-3.5 h-3.5 text-slate-400" />
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.05"
                      value={volume}
                      onChange={(e) => {
                        const v = parseFloat(e.target.value);
                        setVolume(v);
                        sound.setVolume(v);
                      }}
                      className="w-full accent-[#D8B56D] h-1.5 bg-white/10 rounded-lg cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Master Sound FX Mute Toggle */}
          <button
            onClick={toggleSoundMute}
            title={isMuted ? 'Bật hiệu ứng âm thanh' : 'Tắt âm thanh'}
            className={`p-2 rounded-full border transition-all ${
              !isMuted
                ? 'bg-[#24143F] border-[#A78BFA] text-[#A78BFA] shadow-[0_0_10px_rgba(167,139,250,0.3)]'
                : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
            }`}
          >
            {!isMuted ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-[#1A102E] border-2 border-[#D8B56D]/60 text-[#D8B56D] hover:bg-[#24143F] focus:outline-none shadow-lg active:scale-95 transition-transform"
            aria-label="Mở menu điều hướng"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN - HOÀN TOÀN TỰ NHIÊN TRONG DÒNG CHẢY, 100% ĐẶC, KHÔNG TRONG SUỐT, ĐẦY ĐỦ CÁC MỤC CON */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden w-full border-t-2 border-[#D8B56D]/40 shadow-[0_20px_50px_rgba(0,0,0,0.95)] max-h-[84vh] overflow-y-auto animate-in slide-in-from-top-2 duration-200"
          style={{ backgroundColor: '#090414', opacity: 1 }}
        >
          {/* Top Bar inside Menu */}
          <div
            className="px-4 py-3 flex items-center justify-between border-b border-white/10 sticky top-0 z-10"
            style={{ backgroundColor: '#130A24' }}
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D8B56D]" />
              <span className="text-xs uppercase tracking-wider font-serif font-black text-[#D8B56D]">
                DANH MỤC TRẢI BÀI & TỬ VI
              </span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xs text-white hover:text-amber-300 px-3 py-1.5 rounded-lg border border-white/20 font-bold active:scale-95 transition-transform"
              style={{ backgroundColor: '#24143F' }}
            >
              Đóng ✕
            </button>
          </div>

          <div className="p-4 flex flex-col gap-3">
            {/* KHỐI TRÌNH PHÁT NHẠC THIỀN PHÒNG THU TRÊN MOBILE (CHUẨN ÂM HƯỞNG, KHÔNG RÈ) */}
            <div
              className="p-3.5 rounded-xl border border-[#D8B56D]/40 text-left"
              style={{ backgroundColor: '#140A26' }}
            >
              <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Music className="w-4 h-4 text-[#D8B56D]" />
                  <div>
                    <span className="text-xs font-bold text-amber-300 font-serif uppercase tracking-wider block">
                      Nhạc Thiền Tĩnh Tâm
                    </span>
                    <span className="text-[10px] text-slate-300">Âm thanh phòng thu êm dịu, không rè</span>
                  </div>
                </div>
                <button
                  onClick={toggleAmbientMusic}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all shadow-md active:scale-95 ${
                    isAmbientPlaying
                      ? 'bg-rose-900/90 text-rose-200 border border-rose-500/80 animate-pulse'
                      : 'bg-[#D8B56D] text-black font-extrabold hover:bg-[#E8C882]'
                  }`}
                >
                  {isAmbientPlaying ? 'Tắt Nhạc' : 'Bật Nhạc'}
                </button>
              </div>

              {/* Danh sách 4 bản nhạc thiền */}
              <div className="grid grid-cols-2 gap-2">
                {AMBIENT_TRACKS.map((track) => {
                  const isCurrent = currentTrack.id === track.id;
                  return (
                    <button
                      key={track.id}
                      onClick={() => handleSelectTrack(track.id)}
                      className={`p-2.5 rounded-xl text-left border flex flex-col justify-between transition-all active:scale-95 ${
                        isCurrent
                          ? 'border-[#D8B56D] bg-[#2D164F] text-[#D8B56D] font-bold shadow-md'
                          : 'border-white/10 bg-[#0C0617] text-slate-300 hover:border-[#D8B56D]/30'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="text-base">{track.icon}</span>
                        <span className="text-xs font-semibold leading-tight line-clamp-1">{track.nameVi}</span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-normal line-clamp-1">
                        {track.description}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* NHÓM 1: XEM TRẢI BÀI TAROT & CÁC MỤC CON */}
            <div className="rounded-xl border border-[#D8B56D]/40 overflow-hidden" style={{ backgroundColor: '#140A24' }}>
              <div className="p-3 flex items-center justify-between bg-gradient-to-r from-[#24143F] to-[#1A0E2E] border-b border-[#D8B56D]/20">
                <Link
                  href="/reading"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    sound.playChime(580);
                  }}
                  className="flex items-center gap-2.5 flex-1"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#D8B56D] text-[#100B1D] flex items-center justify-center font-bold">
                    <Compass className="w-5 h-5 text-[#100B1D]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#F5F0FF] flex items-center gap-1.5">
                      Xem Trải Bài Tarot
                      <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-[#D8B56D] text-black font-extrabold uppercase">
                        BẮT ĐẦU
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300">5 phương pháp trải bài chuyên sâu</p>
                  </div>
                </Link>
                <button
                  onClick={() => toggleSubmenu('tarot')}
                  className="p-1.5 rounded-lg hover:bg-white/10 text-[#D8B56D]"
                  aria-label="Thu gọn/mở rộng mục con Tarot"
                >
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${
                      openSubmenu === 'tarot' ? 'rotate-180 text-amber-400' : 'text-slate-400'
                    }`}
                  />
                </button>
              </div>

              {/* CÁC MỤC CON CỦA TRẢI BÀI TAROT */}
              {openSubmenu === 'tarot' && (
                <div className="p-2.5 flex flex-col gap-1.5 bg-[#0C0617]">
                  <p className="text-[10px] uppercase font-bold text-slate-400 px-2 py-0.5 tracking-wider">
                    Các kiểu trải bài (Mục con):
                  </p>

                  <Link
                    href="/reading?spread=one-card"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      sound.playChime(580);
                    }}
                    className="p-2 rounded-lg hover:bg-white/5 border border-white/5 hover:border-[#D8B56D]/30 flex items-center justify-between text-xs text-slate-200"
                  >
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-amber-400" />
                      <span>Trải Bài 1 Lá — Thông điệp & Lời khuyên nhanh</span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  </Link>

                  <Link
                    href="/reading?spread=three-card"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      sound.playChime(580);
                    }}
                    className="p-2 rounded-lg hover:bg-white/5 border border-white/5 hover:border-[#D8B56D]/30 flex items-center justify-between text-xs text-slate-200"
                  >
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-sky-400" />
                      <span>Trải Bài 3 Lá — Quá khứ • Hiện tại • Tương lai</span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  </Link>

                  <Link
                    href="/reading?spread=love-five"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      sound.playChime(580);
                    }}
                    className="p-2 rounded-lg hover:bg-white/5 border border-white/5 hover:border-[#D8B56D]/30 flex items-center justify-between text-xs text-slate-200"
                  >
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-rose-400" />
                      <span>Trải Bài Tình Yêu & Mối Quan Hệ (4 lá)</span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  </Link>

                  <Link
                    href="/reading?spread=career-five"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      sound.playChime(580);
                    }}
                    className="p-2 rounded-lg hover:bg-white/5 border border-white/5 hover:border-[#D8B56D]/30 flex items-center justify-between text-xs text-slate-200"
                  >
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-emerald-400" />
                      <span>Trải Bài Công Việc & Sự Nghiệp (5 lá)</span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  </Link>

                  <Link
                    href="/reading?spread=celtic-cross"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      sound.playChime(580);
                    }}
                    className="p-2 rounded-lg hover:bg-white/5 border border-white/5 hover:border-[#D8B56D]/30 flex items-center justify-between text-xs text-slate-200"
                  >
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4 text-purple-400" />
                      <span>Trải Bài Celtic Cross (10 lá toàn diện)</span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  </Link>
                </div>
              )}
            </div>

            {/* NHÓM 2: XEM TỬ VI ĐẨU SỐ & CÁC MỤC CON */}
            <div className="rounded-xl border border-amber-500/50 overflow-hidden" style={{ backgroundColor: '#140A24' }}>
              <div className="p-3 flex items-center justify-between bg-gradient-to-r from-[#291709]/40 via-[#24143F] to-[#1A0E2E] border-b border-amber-500/30">
                <Link
                  href="/tu-vi"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    sound.playChime(580);
                  }}
                  className="flex items-center gap-2.5 flex-1"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-600 to-amber-400 text-black flex items-center justify-center font-bold">
                    <Moon className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-amber-300 flex items-center gap-1.5">
                      Xem Tử Vi Đẩu Số
                      <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-amber-400 text-black font-extrabold uppercase">
                        MỚI
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300">Lập lá số & bình giải 12 cung số</p>
                  </div>
                </Link>
                <button
                  onClick={() => toggleSubmenu('tuvi')}
                  className="p-1.5 rounded-lg hover:bg-white/10 text-amber-400"
                  aria-label="Thu gọn/mở rộng mục con Tử Vi"
                >
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${
                      openSubmenu === 'tuvi' ? 'rotate-180 text-amber-400' : 'text-slate-400'
                    }`}
                  />
                </button>
              </div>

              {/* CÁC MỤC CON CỦA TỬ VI ĐẨU SỐ */}
              {openSubmenu === 'tuvi' && (
                <div className="p-2.5 flex flex-col gap-1.5 bg-[#0C0617]">
                  <p className="text-[10px] uppercase font-bold text-slate-400 px-2 py-0.5 tracking-wider">
                    Chức năng Tử Vi (Mục con):
                  </p>

                  <Link
                    href="/tu-vi"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      sound.playChime(580);
                    }}
                    className="p-2 rounded-lg hover:bg-white/5 border border-white/5 hover:border-amber-500/40 flex items-center justify-between text-xs text-slate-200"
                  >
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-amber-400" />
                      <span>Lập Lá Số Tử Vi Mệnh Bàn Trọn Đời</span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  </Link>

                  <Link
                    href="/tu-vi"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      sound.playChime(580);
                    }}
                    className="p-2 rounded-lg hover:bg-white/5 border border-white/5 hover:border-amber-500/40 flex items-center justify-between text-xs text-slate-200"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Luận Giải 12 Cung (Mệnh, Thân, Tài, Quan...)</span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  </Link>

                  <Link
                    href="/tu-vi"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      sound.playChime(580);
                    }}
                    className="p-2 rounded-lg hover:bg-white/5 border border-white/5 hover:border-amber-500/40 flex items-center justify-between text-xs text-slate-200"
                  >
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-sky-400" />
                      <span>14 Chính Tinh & Bảng Đắc Hãm Chiếu Mệnh</span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  </Link>
                </div>
              )}
            </div>

            {/* NHÓM 3: BỘ BÀI 78 LÁ & KIẾN THỨC TAROT */}
            <div className="rounded-xl border border-white/10 overflow-hidden" style={{ backgroundColor: '#140A24' }}>
              <div className="p-3 flex items-center justify-between bg-gradient-to-r from-[#1A0E2E] to-[#140A24] border-b border-white/10">
                <Link
                  href="/cards"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    sound.playChime(580);
                  }}
                  className="flex items-center gap-2.5 flex-1"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#24143F] border border-[#A78BFA]/50 text-[#A78BFA] flex items-center justify-center font-bold">
                    <Layers className="w-5 h-5 text-[#A78BFA]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#F5F0FF]">Bộ Bài 78 Lá & Kiến Thức</div>
                    <p className="text-[11px] text-slate-300">Hình ảnh thật Rider-Waite 1909</p>
                  </div>
                </Link>
                <button
                  onClick={() => toggleSubmenu('cards')}
                  className="p-1.5 rounded-lg hover:bg-white/10 text-slate-300"
                  aria-label="Thu gọn/mở rộng mục con Bộ Bài"
                >
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${
                      openSubmenu === 'cards' ? 'rotate-180 text-amber-400' : 'text-slate-400'
                    }`}
                  />
                </button>
              </div>

              {/* CÁC MỤC CON CỦA BỘ BÀI & KIẾN THỨC */}
              {openSubmenu === 'cards' && (
                <div className="p-2.5 flex flex-col gap-1.5 bg-[#0C0617]">
                  <p className="text-[10px] uppercase font-bold text-slate-400 px-2 py-0.5 tracking-wider">
                    Tra cứu & Tìm hiểu (Mục con):
                  </p>

                  <Link
                    href="/cards"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      sound.playChime(580);
                    }}
                    className="p-2 rounded-lg hover:bg-white/5 border border-white/5 hover:border-[#A78BFA]/30 flex items-center justify-between text-xs text-slate-200"
                  >
                    <div className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-[#A78BFA]" />
                      <span>Tra Cứu Toàn Bộ 78 Lá Bài Thật RWS</span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  </Link>

                  <Link
                    href="/knowledge"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      sound.playChime(580);
                    }}
                    className="p-2 rounded-lg hover:bg-white/5 border border-white/5 hover:border-sky-500/30 flex items-center justify-between text-xs text-slate-200"
                  >
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-sky-400" />
                      <span>Cẩm Nang & Ý Nghĩa Biểu Tượng Tarot</span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  </Link>
                </div>
              )}
            </div>

            {/* NHÓM 4: CÁC TRANG TRỰC TIẾP KHÁC */}
            <div className="grid grid-cols-3 gap-2 pt-1">
              <Link
                href="/"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  sound.playChime(580);
                }}
                className={`p-2.5 rounded-xl border text-center flex flex-col items-center gap-1 transition-all ${
                  pathname === '/'
                    ? 'border-[#D8B56D] bg-[#24143F] text-[#D8B56D]'
                    : 'border-white/10 bg-[#140A24] text-slate-200 hover:border-white/20'
                }`}
              >
                <Home className="w-4 h-4 text-[#D8B56D]" />
                <span className="text-[11px] font-bold">Trang Chủ</span>
              </Link>

              <Link
                href="/history"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  sound.playChime(580);
                }}
                className={`p-2.5 rounded-xl border text-center flex flex-col items-center gap-1 transition-all ${
                  pathname === '/history'
                    ? 'border-[#D8B56D] bg-[#24143F] text-[#D8B56D]'
                    : 'border-white/10 bg-[#140A24] text-slate-200 hover:border-white/20'
                }`}
              >
                <Clock className="w-4 h-4 text-emerald-400" />
                <span className="text-[11px] font-bold">Lịch Sử</span>
              </Link>

              <Link
                href="/about"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  sound.playChime(580);
                }}
                className={`p-2.5 rounded-xl border text-center flex flex-col items-center gap-1 transition-all ${
                  pathname === '/about'
                    ? 'border-[#D8B56D] bg-[#24143F] text-[#D8B56D]'
                    : 'border-white/10 bg-[#140A24] text-slate-200 hover:border-white/20'
                }`}
              >
                <Info className="w-4 h-4 text-amber-300" />
                <span className="text-[11px] font-bold">Giới Thiệu</span>
              </Link>
            </div>

            {/* Bottom Footer Box */}
            <div
              className="p-3.5 rounded-xl border border-[#D8B56D]/30 text-center mt-1"
              style={{ backgroundColor: '#130A24' }}
            >
              <p className="text-xs text-slate-200 font-serif italic mb-1.5">
                "Mỗi lá bài là một câu chuyện. Mỗi lá số là một thiên mệnh."
              </p>
              <div className="flex flex-wrap justify-center gap-2.5 text-[11px] text-[#A78BFA] font-medium">
                <span>✦ 78 Lá RWS Thật</span>
                <span>•</span>
                <span>✦ Tử Vi 12 Cung</span>
                <span>•</span>
                <span>✦ 4 Bản Nhạc Thiền</span>
                <span>•</span>
                <span className="text-emerald-400">✦ Hỗ Trợ Offline</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
