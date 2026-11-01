export type ArcanaType = 'major' | 'minor';
export type SuitType = 'wands' | 'cups' | 'swords' | 'pentacles';
export type ElementType = 'Lửa' | 'Nước' | 'Khí' | 'Đất';

export interface CardAspectInterpretation {
  general: string;
  love: string;
  career: string;
  finance: string;
  family: string;
  personalGrowth: string;
  advice: string;
}

export interface SymbolismDetail {
  element: string;
  meaning: string;
}

export interface TarotCard {
  id: string;
  name: string;
  nameVi: string;
  arcana: ArcanaType;
  number: number;
  romanNumeral?: string;
  suit?: SuitType;
  element: ElementType;
  astrology: string;
  imageUrl?: string;
  keywords: string[];
  keywordsVi: string[];
  symbolism: SymbolismDetail[];
  upright: CardAspectInterpretation & {
    keyMessage: string;
    strengths: string[];
    opportunities: string[];
    warnings: string[];
  };
  reversed: CardAspectInterpretation & {
    keyMessage: string;
    blockedEnergy: string;
    hiddenIssues: string[];
    adjustments: string[];
  };
  adviceDetail: {
    whatToWatch: string;
    whatToChange: string;
    whatToEmbrace: string;
    pitfalls: string;
  };
  message: string;
  reflectionQuestions: string[];
}

export type SpreadType = 'one-card' | 'three-card' | 'love-five' | 'career-five' | 'celtic-cross';

export interface SpreadPosition {
  index: number;
  name: string;
  nameVi: string;
  descriptionVi: string;
  x?: number; // relative coordinate for layout
  y?: number;
}

export interface SpreadConfig {
  id: SpreadType;
  name: string;
  nameVi: string;
  cardCount: number;
  tagline: string;
  description: string;
  positions: SpreadPosition[];
  recommendedTopics: string[];
}

export interface DrawnCard {
  card: TarotCard;
  isReversed: boolean;
  position: SpreadPosition;
}

export interface ReadingResult {
  id: string;
  timestamp: number;
  question: string;
  topic: string;
  spreadType: SpreadType;
  drawnCards: DrawnCard[];
  synthesis: {
    overallSummary: string;
    elementalBalance: string;
    coreDynamics: string;
    actionableAdvice: string;
    reflectionPrompts: string[];
  };
  isFavorite?: boolean;
  userNotes?: string;
}

export type ReadingStep = 'question' | 'focus' | 'spread' | 'draw' | 'result';
