/**
 * Procedural Web Audio API Sound Engine for Mystic Tarot
 * 100% self-contained, high quality, zero external audio asset dependencies.
 */

class SoundEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private volume: number = 0.5;
  private ambientGain: GainNode | null = null;
  private ambientOscillators: OscillatorNode[] = [];
  private isAmbientPlaying: boolean = false;

  private initContext() {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
    if (this.ambientGain) {
      this.ambientGain.gain.setValueAtTime(muted ? 0 : this.volume * 0.15, this.ctx?.currentTime || 0);
    }
    if (typeof window !== 'undefined') {
      localStorage.setItem('mystic_tarot_sound_muted', muted ? 'true' : 'false');
    }
  }

  public getIsMuted(): boolean {
    if (typeof window !== 'undefined' && this.ctx === null) {
      const saved = localStorage.getItem('mystic_tarot_sound_muted');
      if (saved !== null) {
        this.isMuted = saved === 'true';
      }
    }
    return this.isMuted;
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.ambientGain && !this.isMuted && this.ctx) {
      this.ambientGain.gain.setValueAtTime(this.volume * 0.15, this.ctx.currentTime);
    }
    if (typeof window !== 'undefined') {
      localStorage.setItem('mystic_tarot_volume', this.volume.toString());
    }
  }

  public getVolume(): number {
    return this.volume;
  }

  /**
   * Play a delicate card shuffle sound (synthesized filtered paper noise)
   */
  public playShuffle() {
    if (this.isMuted) return;
    const ctx = this.initContext();
    if (!ctx) return;

    const bufferSize = ctx.sampleRate * 0.45;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      // Pink/brown noise decay
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.12));
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1400, ctx.currentTime);
    filter.Q.setValueAtTime(2.5, ctx.currentTime);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(this.volume * 0.25, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.45);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start();
  }

  /**
   * Play crystal chime / card selection note
   */
  public playChime(freq = 528) {
    if (this.isMuted) return;
    const ctx = this.initContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    // Ethereal harmonics
    gain.gain.setValueAtTime(this.volume * 0.22, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 1.2);
  }

  /**
   * Play 3D Card Flip whoosh with gentle bell
   */
  public playCardFlip() {
    if (this.isMuted) return;
    const ctx = this.initContext();
    if (!ctx) return;

    // 1. Whoosh filter
    const bufferSize = ctx.sampleRate * 0.25;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * 0.2;
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(400, ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(1800, ctx.currentTime + 0.15);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(this.volume * 0.18, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    noise.start();

    // 2. Gentle chime harmonic
    setTimeout(() => {
      this.playChime(660);
    }, 60);
  }

  /**
   * Play Grand Cosmic Chime on reading completion
   */
  public playCompletionChord() {
    if (this.isMuted) return;
    const notes = [432, 540, 648, 864]; // Sacred geometry / cosmic tuning
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playChime(freq);
      }, idx * 140);
    });
  }

  /**
   * Start or toggle mystical background drone / singing bowl
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

  public startAmbient() {
    if (this.isAmbientPlaying) return;
    const ctx = this.initContext();
    if (!ctx) return;

    this.ambientGain = ctx.createGain();
    this.ambientGain.gain.setValueAtTime(this.isMuted ? 0 : this.volume * 0.12, ctx.currentTime);
    this.ambientGain.connect(ctx.destination);

    // Warm sacred chord frequencies (C3, G3, D4)
    const freqs = [130.81, 196.0, 293.66, 392.0];
    this.ambientOscillators = freqs.map((f, i) => {
      const osc = ctx.createOscillator();
      osc.type = i % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(f, ctx.currentTime);

      // Subtle LFO modulation for breathing drone
      const lfo = ctx.createOscillator();
      const lfoGain = ctx.createGain();
      lfo.frequency.setValueAtTime(0.1 + i * 0.05, ctx.currentTime);
      lfoGain.gain.setValueAtTime(2.5, ctx.currentTime);
      lfo.connect(lfoGain);
      lfoGain.connect(osc.frequency);
      lfo.start();

      osc.connect(this.ambientGain!);
      osc.start();
      return osc;
    });

    this.isAmbientPlaying = true;
  }

  public stopAmbient() {
    if (!this.isAmbientPlaying) return;
    this.ambientOscillators.forEach((osc) => {
      try {
        osc.stop();
        osc.disconnect();
      } catch {}
    });
    this.ambientOscillators = [];
    if (this.ambientGain) {
      this.ambientGain.disconnect();
      this.ambientGain = null;
    }
    this.isAmbientPlaying = false;
  }

  public getIsAmbientPlaying(): boolean {
    return this.isAmbientPlaying;
  }
}

export const sound = new SoundEngine();
