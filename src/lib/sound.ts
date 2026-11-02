/**
 * High-Fidelity Audio Engine for Mystic Tarot & Tử Vi
 * Replaces harsh synthetic oscillators with pristine, studio-recorded Zen meditation audio
 * and silky-smooth Web Audio chimes without clipping or buzzing.
 */

export interface AmbientTrack {
  id: string;
  nameVi: string;
  icon: string;
  description: string;
  src: string;
}

export const AMBIENT_TRACKS: AmbientTrack[] = [
  {
    id: 'piano',
    nameVi: 'Nhạc Thiền Piano Du Dương',
    icon: '🎹',
    description: 'Giai điệu piano êm dịu, sâu lắng, tĩnh tâm giải tỏa ưu phiền',
    src: '/audio/meditation-piano.mp3'
  },
  {
    id: 'singing-bowl',
    nameVi: 'Chuông Xoay Tây Tạng',
    icon: '🔔',
    description: 'Tiếng chuông xoay ngân vang thanh khiết, cộng hưởng năng lượng tích cực',
    src: '/audio/singing-bowl.mp3'
  },
  {
    id: 'temple',
    nameVi: 'Không Gian Thiền Tự',
    icon: '⛩️',
    description: 'Âm hưởng thiền môn thanh tịnh, chuông chùa huyền bí phương Đông',
    src: '/audio/temple.mp3'
  },
  {
    id: 'wind-chimes',
    nameVi: 'Chuông Gió Phong Linh',
    icon: '🎐',
    description: 'Tiếng chuông gió pha lê nhẹ nhàng, trong trẻo lay động theo làn gió',
    src: '/audio/wind-chimes.mp3'
  }
];

class SoundEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private volume: number = 0.5;
  private audioElement: HTMLAudioElement | null = null;
  private isAmbientPlaying: boolean = false;
  private currentTrackId: string = 'piano';
  private listeners: Set<() => void> = new Set();

  constructor() {
    if (typeof window !== 'undefined') {
      const savedMuted = localStorage.getItem('mystic_tarot_sound_muted');
      if (savedMuted !== null) {
        this.isMuted = savedMuted === 'true';
      }
      const savedVol = localStorage.getItem('mystic_tarot_volume');
      if (savedVol !== null) {
        this.volume = parseFloat(savedVol) || 0.5;
      }
      const savedTrack = localStorage.getItem('mystic_tarot_ambient_track');
      if (savedTrack && AMBIENT_TRACKS.some((t) => t.id === savedTrack)) {
        this.currentTrackId = savedTrack;
      }
    }
  }

  private notify() {
    this.listeners.forEach((fn) => {
      try {
        fn();
      } catch {}
    });
  }

  public subscribe(fn: () => void): () => void {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }

  private initContext() {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
    if (this.audioElement) {
      this.audioElement.muted = muted;
    }
    if (typeof window !== 'undefined') {
      localStorage.setItem('mystic_tarot_sound_muted', muted ? 'true' : 'false');
    }
    this.notify();
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.audioElement) {
      this.audioElement.volume = this.volume;
    }
    if (typeof window !== 'undefined') {
      localStorage.setItem('mystic_tarot_volume', this.volume.toString());
    }
    this.notify();
  }

  public getVolume(): number {
    return this.volume;
  }

  public getCurrentTrack(): AmbientTrack {
    return (
      AMBIENT_TRACKS.find((t) => t.id === this.currentTrackId) || AMBIENT_TRACKS[0]
    );
  }

  public setTrack(trackId: string) {
    if (this.currentTrackId === trackId) return;
    this.currentTrackId = trackId;
    if (typeof window !== 'undefined') {
      localStorage.setItem('mystic_tarot_ambient_track', trackId);
    }

    if (this.isAmbientPlaying && this.audioElement) {
      const track = this.getCurrentTrack();
      this.audioElement.src = track.src;
      this.audioElement.load();
      this.audioElement.play().catch(() => {});
    }
    this.notify();
  }

  /**
   * Bật/Tắt Nhạc Thiền
   */
  public toggleAmbient(): boolean {
    if (this.isAmbientPlaying) {
      this.stopAmbient();
      return false;
    } else {
      this.startAmbient();
      return true;
    }
  }

  public startAmbient(trackId?: string) {
    if (trackId && AMBIENT_TRACKS.some((t) => t.id === trackId)) {
      this.currentTrackId = trackId;
      if (typeof window !== 'undefined') {
        localStorage.setItem('mystic_tarot_ambient_track', trackId);
      }
    }

    if (typeof window === 'undefined') return;

    const track = this.getCurrentTrack();

    if (!this.audioElement) {
      this.audioElement = new Audio();
      this.audioElement.loop = true;
      this.audioElement.preload = 'auto';
    }

    // Set src if different
    if (!this.audioElement.src.endsWith(track.src)) {
      this.audioElement.src = track.src;
    }

    this.audioElement.volume = this.volume;
    this.audioElement.muted = this.isMuted;

    this.audioElement
      .play()
      .then(() => {
        this.isAmbientPlaying = true;
        this.notify();
      })
      .catch((err) => {
        console.warn('[SoundEngine] Play prevented by browser autoplay policy:', err);
        this.isAmbientPlaying = false;
        this.notify();
      });
  }

  public stopAmbient() {
    if (this.audioElement) {
      try {
        this.audioElement.pause();
      } catch {}
    }
    this.isAmbientPlaying = false;
    this.notify();
  }

  public getIsAmbientPlaying(): boolean {
    return this.isAmbientPlaying;
  }

  /**
   * Tiếng chuông thanh tịnh / Chọn lá bài (Sóng sin thuần khiết, không méo tiếng)
   */
  public playChime(freq = 528) {
    if (this.isMuted) return;
    const ctx = this.initContext();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      // Khởi tạo mượt mà tránh tiếng click/rè ở đầu xung
      const now = ctx.currentTime;
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(this.volume * 0.18, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 1.25);
    } catch {}
  }

  /**
   * Tiếng xáo bài (Bộ lọc dải tần ấm, êm dịu như bài nhung)
   */
  public playShuffle() {
    if (this.isMuted) return;
    const ctx = this.initContext();
    if (!ctx) return;

    try {
      const bufferSize = Math.floor(ctx.sampleRate * 0.35);
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);

      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.09));
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1100, ctx.currentTime);
      filter.Q.setValueAtTime(1.8, ctx.currentTime);

      const gain = ctx.createGain();
      const now = ctx.currentTime;
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(this.volume * 0.18, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      noise.start(now);
    } catch {}
  }

  /**
   * Tiếng lật bài (Lướt nhẹ kèm chuông thanh)
   */
  public playCardFlip() {
    if (this.isMuted) return;
    const ctx = this.initContext();
    if (!ctx) return;

    try {
      const bufferSize = Math.floor(ctx.sampleRate * 0.18);
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * 0.15;
      }
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(600, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(1400, ctx.currentTime + 0.12);

      const gain = ctx.createGain();
      const now = ctx.currentTime;
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(this.volume * 0.12, now + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      noise.start(now);

      setTimeout(() => {
        this.playChime(640);
      }, 50);
    } catch {}
  }

  /**
   * Hợp âm vũ trụ khi hoàn tất trải bài
   */
  public playCompletionChord() {
    if (this.isMuted) return;
    const notes = [432, 540, 648, 864];
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playChime(freq);
      }, idx * 130);
    });
  }
}

export const sound = new SoundEngine();
