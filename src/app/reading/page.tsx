'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { ReadingResult, ReadingStep, SpreadType, DrawnCard } from '@/types/tarot';
import { synthesizeReading } from '@/lib/tarotEngine';
import { saveReadingToHistory, toggleFavoriteReading, getUserPreferences } from '@/lib/storage';
import { Step1Question } from '@/components/reading/Step1Question';
import { Step2Focus } from '@/components/reading/Step2Focus';
import { Step3SpreadSelect } from '@/components/reading/Step3SpreadSelect';
import { Step4Draw } from '@/components/reading/Step4Draw';
import { Step5Interpretation } from '@/components/reading/Step5Interpretation';
import { Starfield } from '@/components/common/Starfield';

function ReadingInner() {
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState<ReadingStep>('question');
  const [question, setQuestion] = useState('');
  const [topic, setTopic] = useState('Tổng quát');
  const [spreadType, setSpreadType] = useState<SpreadType>('three-card');
  const [allowReversed, setAllowReversed] = useState<boolean>(() => {
    return getUserPreferences().allowReversed;
  });
  const [readingResult, setReadingResult] = useState<ReadingResult | null>(null);

  useEffect(() => {
    const s = searchParams.get('spread');
    if (s) {
      if (s === 'one-card' || s === 'three-card' || s === 'love-five' || s === 'career-five' || s === 'celtic-cross') {
        setSpreadType(s as SpreadType);
        if (s === 'love-five') setTopic('Tình cảm');
        else if (s === 'career-five') setTopic('Công việc');
      } else if (s === 'love-relationship') {
        setSpreadType('love-five');
        setTopic('Tình cảm');
      } else if (s === 'career-path') {
        setSpreadType('career-five');
        setTopic('Công việc');
      }
    }
  }, [searchParams]);

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
    setReadingResult(null);
    setCurrentStep('question');
  };

  // Toggle favorite in history
  const handleToggleFavorite = () => {
    if (!readingResult) return;
    toggleFavoriteReading(readingResult.id);
    setReadingResult({
      ...readingResult,
      isFavorite: !readingResult.isFavorite
    });
  };

  return (
    <div className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center py-8 sm:py-12 px-4 overflow-hidden">
      <Starfield />

      <main className="relative z-10 w-full flex flex-col items-center">
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

export default function ReadingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#100B1D]" />}>
      <ReadingInner />
    </Suspense>
  );
}
