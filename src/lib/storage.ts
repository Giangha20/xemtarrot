import { ReadingResult } from '@/types/tarot';

const STORAGE_KEYS = {
  HISTORY: 'mystic_tarot_readings_history',
  PREFERENCES: 'mystic_tarot_preferences'
};

export interface UserPreferences {
  allowReversed: boolean;
  soundEnabled: boolean;
  volume: number;
  reduceMotion: boolean;
}

export const defaultPreferences: UserPreferences = {
  allowReversed: true,
  soundEnabled: true,
  volume: 0.5,
  reduceMotion: false
};

export function getReadingsHistory(): ReadingResult[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.HISTORY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to load history from LocalStorage:', e);
    return [];
  }
}

export function saveReadingToHistory(reading: ReadingResult): void {
  if (typeof window === 'undefined') return;
  try {
    const history = getReadingsHistory();
    // Prepend latest reading
    const updated = [reading, ...history];
    // Keep last 100 readings
    const trimmed = updated.slice(0, 100);
    localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(trimmed));
  } catch (e) {
    console.error('Failed to save reading:', e);
  }
}

export function deleteReading(id: string): ReadingResult[] {
  if (typeof window === 'undefined') return [];
  try {
    const history = getReadingsHistory();
    const updated = history.filter((item) => item.id !== id);
    localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(updated));
    return updated;
  } catch (e) {
    console.error('Failed to delete reading:', e);
    return [];
  }
}

export function toggleFavoriteReading(id: string): ReadingResult[] {
  if (typeof window === 'undefined') return [];
  try {
    const history = getReadingsHistory();
    const updated = history.map((item) => {
      if (item.id === id) {
        return { ...item, isFavorite: !item.isFavorite };
      }
      return item;
    });
    localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(updated));
    return updated;
  } catch (e) {
    console.error('Failed to toggle favorite:', e);
    return [];
  }
}

export function clearAllHistory(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(STORAGE_KEYS.HISTORY);
  } catch (e) {
    console.error('Failed to clear history:', e);
  }
}

export function getUserPreferences(): UserPreferences {
  if (typeof window === 'undefined') return defaultPreferences;
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.PREFERENCES);
    if (!raw) return defaultPreferences;
    return { ...defaultPreferences, ...JSON.parse(raw) };
  } catch (e) {
    return defaultPreferences;
  }
}

export function saveUserPreferences(prefs: Partial<UserPreferences>): UserPreferences {
  if (typeof window === 'undefined') return defaultPreferences;
  try {
    const current = getUserPreferences();
    const updated = { ...current, ...prefs };
    localStorage.setItem(STORAGE_KEYS.PREFERENCES, JSON.stringify(updated));
    return updated;
  } catch (e) {
    return defaultPreferences;
  }
}
