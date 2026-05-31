'use client';

import { useEffect, useRef } from 'react';

export default function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let scrollY = window.scrollY;
    let targetScrollY = window.scrollY;

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    // Grid System Setup
    const lines: { y: number; speed: number }[] = [];
    const numLines = 30;
    
    for (let i = 0; i < numLines; i++) {
      lines.push({
        y: (height / numLines) * i,
        speed: 0.5 + Math.random() * 1.5 // Random speed for parallax depth
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Smooth scroll interpolation
      scrollY += (targetScrollY - scrollY) * 0.1;

      ctx.strokeStyle = document.documentElement.classList.contains('dark') 
        ? 'rgba(98, 255, 215, 0.05)' // Theme color for dark mode (#62FFD7)
        : 'rgba(165, 132, 28, 0.05)'; // Gold for light mode (#A5841C)
        
      ctx.lineWidth = 1;

      // Draw horizontal lines with 3D perspective illusion
      lines.forEach((line) => {
        // Perspective calc based on scroll
        const movingY = (line.y - scrollY * line.speed) % height;
        const actualY = movingY < 0 ? movingY + height : movingY;
        
        ctx.beginPath();
        ctx.moveTo(0, actualY);
        
        // Create slight wave/sketch effect in the middle
        ctx.bezierCurveTo(
           width * 0.25, actualY + Math.sin(actualY * 0.01) * 20, 
           width * 0.75, actualY - Math.cos(actualY * 0.01) * 20, 
           width, actualY
        );
        ctx.stroke();
      });

      // Draw vertical lines
      const verticalLines = 15;
      for (let i = 0; i <= verticalLines; i++) {
         const x = (width / verticalLines) * i;
         ctx.beginPath();
         ctx.moveTo(x, 0);
         // Add slight distortion based on scroll
         ctx.bezierCurveTo(
            x + Math.sin(scrollY * 0.005 + x) * 10, height * 0.5,
            x - Math.sin(scrollY * 0.005 + x) * 10, height * 0.75,
            x, height
         );
         ctx.stroke();
      }

      requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
}