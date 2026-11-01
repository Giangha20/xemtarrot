'use client';

import React, { useState } from 'react';
import { ReadingResult, ReadingStep, SpreadType, DrawnCard } from '@/types/tarot';
import { synthesizeReading } from '@/lib/tarotEngine';
import { saveReadingToHistory, toggleFavoriteReading, getUserPreferences } from '@/lib/storage';
import { Step1Question } from '@/components/reading/Step1Question';
import { Step2Focus } from '@/components/reading/Step2Focus';
import { Step3SpreadSelect } from '@/components/reading/Step3SpreadSelect';
import { Step4Draw } from '@/components/reading/Step4Draw';
import { Step5Interpretation } from '@/components/reading/Step5Interpretation';
import { Starfield } from '@/components/common/Starfield';

export default function ReadingPage() {
  const [currentStep, setCurrentStep] = useState<ReadingStep>('question');
  const [question, setQuestion] = useState('');
  const [topic, setTopic] = useState('Tổng quát');
  const [spreadType, setSpreadType] = useState<SpreadType>('three-card');
  const [allowReversed, setAllowReversed] = useState<boolean>(() => {
    return getUserPreferences().allowReversed;
  });
  const [readingResult, setReadingResult] = useState<ReadingResult | null>(null);

  // Step 1: Set intention and proceed to meditation focus
  const handleSetIntention = (q: string, t: string) => {
    setQuestion(q);
    setTopic(t);
    setCurrentStep('focus');
  };

  // Step 2: From focus to spread select
  const handleFocusProceed = () => {
    setCurrentStep('spread');
  };

  // Step 3: From spread select to draw arena
  const handleSpreadProceed = () => {
    setCurrentStep('draw');
  };

  // Step 4: Draw completed -> generate synthesis & save to history
  const handleDrawComplete = (drawnCards: DrawnCard[]) => {
    const synthesis = synthesizeReading(question, topic, spreadType, drawnCards);
    const reading: ReadingResult = {
      id: `reading_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      timestamp: Date.now(),
      question,
      topic,
      spreadType,
      drawnCards,
      synthesis,
      isFavorite: false
    };

    saveReadingToHistory(reading);
    setReadingResult(reading);
    setCurrentStep('result');
  };

  // Step 5: Start new reading
  const handleNewReading = () => {
    setQuestion('');
    setTopic('Tổng quát');
    setReadingResult(null);
    setCurrentStep('question');
  };

  const handleToggleFavorite = (id: string) => {
    toggleFavoriteReading(id);
  };

  return (
    <div className="relative min-h-screen py-8 sm:py-12 px-4 sm:px-6">
      <Starfield />

      <main className="relative z-10 max-w-6xl mx-auto">
        {currentStep === 'question' && (
          <Step1Question
            question={question}
            topic={topic}
            onSetIntention={handleSetIntention}
          />
        )}

        {currentStep === 'focus' && (
          <Step2Focus
            question={question}
            topic={topic}
            onProceed={handleFocusProceed}
            onBack={() => setCurrentStep('question')}
          />
        )}

        {currentStep === 'spread' && (
          <Step3SpreadSelect
            selectedSpread={spreadType}
            allowReversed={allowReversed}
            onSelectSpread={setSpreadType}
            onToggleReversed={setAllowReversed}
            onProceed={handleSpreadProceed}
            onBack={() => setCurrentStep('focus')}
          />
        )}

        {currentStep === 'draw' && (
          <Step4Draw
            spreadType={spreadType}
            allowReversed={allowReversed}
            onDrawComplete={handleDrawComplete}
            onBack={() => setCurrentStep('spread')}
          />
        )}

        {currentStep === 'result' && readingResult && (
          <Step5Interpretation
            reading={readingResult}
            onNewReading={handleNewReading}
            onToggleFavorite={handleToggleFavorite}
          />
        )}
      </main>
    </div>
  );
}
