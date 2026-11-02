'use client';

import React, { useEffect, useState } from 'react';
import { WifiOff, Wifi, Sparkles } from 'lucide-react';

export const PWAProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOffline, setIsOffline] = useState(false);
  const [showReconnected, setShowReconnected] = useState(false);

  useEffect(() => {
    // 1. Register Service Worker for 100% Offline PWA Support
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then((registration) => {
            console.log('[PWA] Service Worker active, offline caching enabled:', registration.scope);
          })
          .catch((error) => {
            console.warn('[PWA] Service Worker registration error:', error);
          });
      });
    }

    // 2. Track online/offline status
    const handleOffline = () => {
      setIsOffline(true);
      setShowReconnected(false);
    };

    const handleOnline = () => {
      setIsOffline(false);
      setShowReconnected(true);
      const timer = setTimeout(() => setShowReconnected(false), 3500);
      return () => clearTimeout(timer);
    };

    if (typeof window !== 'undefined') {
      setIsOffline(!navigator.onLine);
      window.addEventListener('offline', handleOffline);
      window.addEventListener('online', handleOnline);

      return () => {
        window.removeEventListener('offline', handleOffline);
        window.removeEventListener('online', handleOnline);
      };
    }
  }, []);

  return (
    <>
      {children}

      {/* Subtle Offline Badge: Only appears when network is disconnected */}
      {isOffline && (
        <div className="fixed bottom-4 right-4 z-50 animate-in slide-in-from-bottom duration-300">
          <div className="px-4 py-2.5 rounded-full bg-[#1A0E2E]/95 border-2 border-amber-500/70 text-amber-200 text-xs font-sans font-semibold shadow-2xl flex items-center gap-2 backdrop-blur-md">
            <WifiOff className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>Chế độ Ngoại Tuyến (Offline) – Đầy đủ tính năng 100%</span>
          </div>
        </div>
      )}

      {/* Brief Reconnected Toast */}
      {showReconnected && (
        <div className="fixed bottom-4 right-4 z-50 animate-in fade-in duration-300">
          <div className="px-4 py-2 rounded-full bg-emerald-950/95 border-2 border-emerald-500/70 text-emerald-300 text-xs font-sans font-semibold shadow-2xl flex items-center gap-2 backdrop-blur-md">
            <Wifi className="w-4 h-4 text-emerald-400" />
            <span>Đã kết nối Internet trở lại</span>
          </div>
        </div>
      )}
    </>
  );
};
