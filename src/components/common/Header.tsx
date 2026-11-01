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
  Info
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
    { href: '/cards', label: 'Bộ Bài 78 Lá' },
    { href: '/knowledge', label: 'Kiến Thức Tarot' },
    { href: '/history', label: 'Lịch Sử Xem' },
    { href: '/about', label: 'Giới Thiệu' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#100B1D]/85 border-b border-[#D8B56D]/20 transition-all">
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
              Thông Điệp Từ Vũ Trụ
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 xl:gap-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-[#24143F] text-[#D8B56D] border border-[#D8B56D]/50 shadow-sm'
                    : link.highlight
                    ? 'bg-[#D8B56D] text-[#100B1D] font-bold hover:bg-[#E8C882] shadow-[0_0_15px_rgba(216,181,109,0.3)]'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
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
            className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 hover:text-white focus:outline-none"
            aria-label="Mở menu điều hướng"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 sm:top-20 bottom-0 bg-[#100B1D]/95 backdrop-blur-xl z-50 p-6 flex flex-col justify-between border-t border-[#D8B56D]/20 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-3">
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
                  className={`p-3.5 rounded-xl text-sm font-medium flex items-center justify-between border transition-all ${
                    isActive
                      ? 'bg-[#24143F] text-[#D8B56D] border-[#D8B56D]/60 shadow-md font-bold'
                      : link.highlight
                      ? 'bg-[#D8B56D]/15 text-[#D8B56D] border-[#D8B56D]/40 font-semibold'
                      : 'border-white/5 text-slate-200 hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {link.href === '/' && <Sparkles className="w-4 h-4 text-[#D8B56D]" />}
                    {link.href === '/reading' && <Compass className="w-4 h-4 text-[#D8B56D]" />}
                    {link.href === '/cards' && <Layers className="w-4 h-4 text-[#A78BFA]" />}
                    {link.href === '/knowledge' && <BookOpen className="w-4 h-4 text-sky-400]" />}
                    {link.href === '/history' && <Clock className="w-4 h-4 text-emerald-400" />}
                    {link.href === '/about' && <Info className="w-4 h-4 text-amber-300" />}
                    <span>{link.label}</span>
                  </div>
                  {link.highlight && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#D8B56D] text-[#100B1D] font-bold">
                      BẮT ĐẦU
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="p-4 rounded-xl bg-black/40 border border-[#D8B56D]/20 text-center">
            <p className="text-xs text-slate-400 font-serif italic mb-2">
              "Mỗi lá bài là một câu chuyện. Mỗi lần rút bài là một hành trình khám phá bản thân."
            </p>
            <div className="flex justify-center gap-4 text-xs text-[#A78BFA]">
              <span>78 Lá Rider-Waite</span>
              <span>•</span>
              <span>Trải Bài Đa Dạng</span>
              <span>•</span>
              <span>100% Miễn Phí</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
