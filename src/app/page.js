"use client";
import { useState, useEffect, useCallback, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import BackgroundWrapper from '@/componentes/Background/BackgroundWrapper';

import Slide1 from '@/componentes/Slides/Slide1';
import Slide2 from '@/componentes/Slides/Slide2';
import Slide3 from '@/componentes/Slides/Slide3';
import Slide4 from '@/componentes/Slides/Slide4';
import Slide5 from '@/componentes/Slides/Slide5';
import Slide6 from '@/componentes/Slides/Slide6';
import Slide7 from '@/componentes/Slides/Slide7';
import Slide8 from '@/componentes/Slides/Slide8';
import Slide9 from '@/componentes/Slides/Slide9';
import Slide10 from '@/componentes/Slides/Slide10';
import Slide11 from '@/componentes/Slides/Slide11';
import Slide12 from '@/componentes/Slides/Slide12';

const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9, Slide10, Slide11, Slide12];

export default function Home() {
  const [slideAtivo, setSlideAtivo] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const proximoSlide = useCallback(() => {
    setSlideAtivo((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  }, []);

  const slideAnterior = useCallback(() => {
    setSlideAtivo((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') proximoSlide();
      if (e.key === 'ArrowLeft') slideAnterior();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [proximoSlide, slideAnterior]);

  
  useEffect(() => {
    const handleTouchStart = (e) => {
      touchStartX.current = e.changedTouches[0].screenX;
    };
    const handleTouchEnd = (e) => {
      touchEndX.current = e.changedTouches[0].screenX;
      const diff = touchStartX.current - touchEndX.current;
      
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          
          proximoSlide();
        } else {
          
          slideAnterior();
        }
      }
    };
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [proximoSlide, slideAnterior]);

  const SlideAtual = slides[slideAtivo];

  return (
    <main style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <BackgroundWrapper slideAtivo={slideAtivo} />

      <AnimatePresence mode="wait">
        <motion.div
          key={slideAtivo}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
        >
          <SlideAtual />
        </motion.div>
      </AnimatePresence>
    </main>
  );
}