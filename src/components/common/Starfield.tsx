'use client';

import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  alphaSpeed: number;
  color: string;
}

interface Meteor {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  alpha: number;
}

export const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener('resize', handleResize);

    // Stars collection
    let stars: Star[] = [];
    const starColors = ['#FFFFFF', '#F5F0FF', '#D8B56D', '#A78BFA', '#C4B5FD'];

    const initStars = () => {
      const starCount = Math.min(220, Math.floor((width * height) / 6000));
      stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.4 + 0.4,
          alpha: Math.random() * 0.8 + 0.2,
          alphaSpeed: (Math.random() * 0.015 + 0.005) * (Math.random() < 0.5 ? 1 : -1),
          color: starColors[Math.floor(Math.random() * starColors.length)]
        });
      }
    };

    initStars();

    // Meteors
    const meteors: Meteor[] = [];
    const maybeSpawnMeteor = () => {
      if (meteors.length < 2 && Math.random() < 0.015) {
        meteors.push({
          x: Math.random() * width * 0.8,
          y: Math.random() * height * 0.4,
          length: Math.random() * 80 + 50,
          speed: Math.random() * 8 + 6,
          angle: Math.PI / 4 + (Math.random() * 0.2 - 0.1),
          alpha: 1
        });
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle nebula ambient gradients
      const grad1 = ctx.createRadialGradient(width * 0.2, height * 0.2, 50, width * 0.2, height * 0.2, 450);
      grad1.addColorStop(0, 'rgba(36, 20, 63, 0.45)');
      grad1.addColorStop(1, 'rgba(16, 11, 29, 0)');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      const grad2 = ctx.createRadialGradient(width * 0.8, height * 0.7, 50, width * 0.8, height * 0.7, 500);
      grad2.addColorStop(0, 'rgba(167, 139, 250, 0.12)');
      grad2.addColorStop(1, 'rgba(16, 11, 29, 0)');
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // Draw & animate stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.alpha += star.alphaSpeed;
        if (star.alpha <= 0.15 || star.alpha >= 0.95) {
          star.alphaSpeed = -star.alphaSpeed;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = Math.max(0.1, Math.min(1, star.alpha));
        ctx.shadowBlur = star.radius > 1 ? 4 : 0;
        ctx.shadowColor = star.color;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      // Draw & animate meteors
      maybeSpawnMeteor();
      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        const endX = m.x - Math.cos(m.angle) * m.length;
        const endY = m.y - Math.sin(m.angle) * m.length;

        const meteorGrad = ctx.createLinearGradient(m.x, m.y, endX, endY);
        meteorGrad.addColorStop(0, `rgba(255, 255, 255, ${m.alpha})`);
        meteorGrad.addColorStop(0.3, `rgba(216, 181, 109, ${m.alpha * 0.8})`);
        meteorGrad.addColorStop(1, 'rgba(16, 11, 29, 0)');

        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = meteorGrad;
        ctx.lineWidth = 1.8;
        ctx.stroke();

        m.x += Math.cos(m.angle) * m.speed;
        m.y += Math.sin(m.angle) * m.speed;
        m.alpha -= 0.015;

        if (m.alpha <= 0 || m.x > width || m.y > height) {
          meteors.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.9 }}
      aria-hidden="true"
    />
  );
};
