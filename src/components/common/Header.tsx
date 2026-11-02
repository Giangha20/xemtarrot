'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { sound } from '@/lib/sound';
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
  ChevronRight
} from 'lucide-react';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(() => (typeof window !== 'undefined' ? sound.getIsMuted() : true));
  const [isAmbientPlaying, setIsAmbientPlaying] = useState(() => (typeof window !== 'undefined' ? sound.getIsAmbientPlaying() : false));

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

  const navLinks = [
    { href: '/', label: 'Trang Chủ' },
    { href: '/reading', label: 'Trải Bài Tarot', highlight: true },
    { href: '/tu-vi', label: 'Lá Số Tử Vi', isNew: true },
    { href: '/cards', label: 'Bộ Bài 78 Lá' },
    { href: '/knowledge', label: 'Kiến Thức Tarot' },
    { href: '/history', label: 'Lịch Sử Xem' },
    { href: '/about', label: 'Giới Thiệu' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#100B1D]/90 border-b border-[#D8B56D]/20 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
          onClick={() => sound.playChime(528)}
        >
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-[#24143F] to-[#4C2882] border-2 border-[#D8B56D] flex items-center justify-center shadow-[0_0_15px_rgba(216,181,109,0.35)] group-hover:shadow-[0_0_25px_rgba(216,181,109,0.6)] transition-all">
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#D8B56D] group-hover:rotate-45 transition-transform duration-500" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-black tracking-widest text-base sm:text-xl text-[#F5F0FF] group-hover:text-[#D8B56D] transition-colors">
              MYSTIC TAROT
            </span>
            <span className="text-[9px] sm:text-[10px] text-[#A78BFA] tracking-tighter uppercase font-sans">
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
                    ? 'bg-[#24143F] text-[#D8B56D] border border-[#D8B56D]/50 shadow-sm font-semibold'
                    : link.highlight
                    ? 'bg-[#D8B56D] text-[#100B1D] font-bold hover:bg-[#E8C882] shadow-[0_0_15px_rgba(216,181,109,0.3)]'
                    : link.isNew
                    ? 'bg-[#2D1B4E] text-[#F5F0FF] hover:text-[#D8B56D] border border-[#A78BFA]/40 font-semibold'
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
          {/* Ambient Music Toggle */}
          <button
            onClick={toggleAmbientMusic}
            title={isAmbientPlaying ? 'Tắt nhạc thiền ambient' : 'Bật nhạc thiền ambient'}
            className={`p-2 rounded-full border transition-all text-xs flex items-center gap-1.5 ${
              isAmbientPlaying
                ? 'bg-[#24143F] border-[#D8B56D] text-[#D8B56D] shadow-[0_0_12px_rgba(216,181,109,0.4)] animate-pulse'
                : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
            }`}
          >
            <Music className="w-4 h-4" />
            <span className="hidden md:inline text-[11px] font-sans">Nhạc Thiền</span>
          </button>

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
            className="lg:hidden p-2.5 rounded-xl bg-[#1A102E] border border-[#D8B56D]/30 text-[#D8B56D] hover:bg-[#24143F] focus:outline-none shadow-md"
            aria-label="Mở menu điều hướng"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER MENU - 100% ĐẶC HOÀN TOÀN (OPAQUE), KHÔNG TRONG SUỐT, KHÔNG RỐI MẮT */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 sm:top-20 bottom-0 bg-[#0C0717] z-50 flex flex-col justify-between border-t-2 border-[#D8B56D]/40 shadow-2xl overflow-y-auto">
          {/* Header row in mobile menu */}
          <div className="px-5 pt-4 pb-2 flex items-center justify-between border-b border-white/10 bg-[#120B22]">
            <span className="text-xs uppercase tracking-wider font-serif font-bold text-[#D8B56D]">
              Danh Mục Chức Năng
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xs text-slate-400 hover:text-white px-2 py-1 rounded bg-white/5"
            >
              Đóng ✕
            </button>
          </div>

          {/* Links list */}
          <nav className="p-4 flex flex-col gap-2.5 flex-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    sound.playChime(580);
                  }}
                  className={`p-3.5 rounded-xl text-sm font-medium flex items-center justify-between transition-all ${
                    isActive
                      ? 'bg-[#29174A] text-[#D8B56D] border-2 border-[#D8B56D] shadow-lg font-bold'
                      : link.highlight
                      ? 'bg-[#24143F] text-[#F5F0FF] border border-[#D8B56D]/60 font-semibold shadow-md'
                      : link.isNew
                      ? 'bg-[#1C1033] text-amber-300 border border-amber-500/40 font-semibold'
                      : 'bg-[#150D26] border border-white/10 text-slate-200 hover:bg-[#201439]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {link.href === '/' && <Sparkles className="w-4 h-4 text-[#D8B56D]" />}
                    {link.href === '/reading' && <Compass className="w-4 h-4 text-[#D8B56D]" />}
                    {link.href === '/tu-vi' && <Moon className="w-4 h-4 text-amber-400" />}
                    {link.href === '/cards' && <Layers className="w-4 h-4 text-[#A78BFA]" />}
                    {link.href === '/knowledge' && <BookOpen className="w-4 h-4 text-sky-400" />}
                    {link.href === '/history' && <Clock className="w-4 h-4 text-emerald-400" />}
                    {link.href === '/about' && <Info className="w-4 h-4 text-amber-300" />}
                    <span>{link.label}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {link.isNew && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500 text-black font-extrabold uppercase">
                        MỚI
                      </span>
                    )}
                    {link.highlight && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#D8B56D] text-[#100B1D] font-bold">
                        BẮT ĐẦU
                      </span>
                    )}
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </div>
                </Link>
              );
            })}
          </nav>

          {/* Bottom Footer box */}
          <div className="p-4 mx-4 mb-5 rounded-xl bg-[#130B24] border border-[#D8B56D]/30 text-center">
            <p className="text-xs text-slate-300 font-serif italic mb-2">
              "Mỗi lá bài là một câu chuyện. Mỗi lá số là một thiên mệnh."
            </p>
            <div className="flex flex-wrap justify-center gap-2.5 text-[11px] text-[#A78BFA] font-medium">
              <span>Tarot 78 Lá</span>
              <span>•</span>
              <span>Tử Vi Đẩu Số</span>
              <span>•</span>
              <span>100% Miễn Phí</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
