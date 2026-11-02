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
  x?: number;
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

export interface CardQuestionAnalysis {
  cardId: string;
  cardNameVi: string;
  isReversed: boolean;
  positionNameVi: string;
  directAnswerToQuestion: string; // Câu trả lời cụ thể cho câu hỏi từ lá bài này
  actionStep: string; // Chỉ dẫn thực tế
}

export interface DirectQuestionVerdict {
  verdict: string; // e.g. "CÂU TRẢ LỜI: RẤT KHẢ QUAN & THUẬN LỢI (85%)"
  confidenceLevel: string; // "Rất Thuận Lợi" | "Cần Thận Trọng" | "Nên Chuyển Hướng" | "Thời Cơ Chín Muồi"
  signalColor: 'green' | 'yellow' | 'red';
  signalLabel: string;
  coreReason: string; // Lý do cốt lõi tại sao đưa ra kết luận này
  directAnswerSummary: string; // Đoạn phân tích sắc bén trả lời thẳng vào câu hỏi
  keyDecision: string; // Quyết định then chốt
  whatToAvoid: string; // Điều cấm kỵ / Cần tránh tuyệt đối
  timingAdvice: string; // Thời điểm hành động tối ưu
}

export interface ReadingSynthesis {
  directVerdict: DirectQuestionVerdict;
  cardQuestionAnalyses: CardQuestionAnalysis[];
  overallSummary: string;
  elementalBalance: string;
  coreDynamics: string;
  actionableAdvice: string;
  reflectionPrompts: string[];
}

export interface ReadingResult {
  id: string;
  timestamp: number;
  question: string;
  topic: string;
  spreadType: SpreadType;
  drawnCards: DrawnCard[];
  synthesis: ReadingSynthesis;
  isFavorite?: boolean;
  userNotes?: string;
}

export type ReadingStep = 'question' | 'focus' | 'spread' | 'draw' | 'result';
