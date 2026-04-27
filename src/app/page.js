"use client";
import { useState, useEffect, useCallback, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import BackgroundWrapper from '@/componentes/Background/BackgroundWrapper';

import SlideQRCodes from '@/componentes/Slides/SlideQRCodes/SlideQRCodes';
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

// Array com TODOS os slides originais
const todosOsSlides = [
  SlideQRCodes,
  Slide1, 
  Slide2, 
  Slide3, 
  Slide4, 
  Slide5, 
  Slide6, 
  Slide7, 
  Slide8, 
  Slide9, 
  Slide10, 
  Slide11, 
  Slide12
];

export default function Home() {
  const [slides, setSlides] = useState([]);
  const [slideAtivo, setSlideAtivo] = useState(0);
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  // Lógica de Filtro Mobile: Executa assim que a página carrega
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      // Se for celular, remove o SlideQRCodes (que é o índice 0) da lista
      setSlides(todosOsSlides.slice(1));
    } else {
      // Se for desktop/telão, mantém a lista completa
      setSlides(todosOsSlides);
    }
  }, []);

  const proximoSlide = useCallback(() => {
    setSlideAtivo((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  }, [slides]);

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
      if (e.target.closest('.modelo-3d') || e.target.closest('.gamma-grid')) {
        touchStartX.current = null;
        touchStartY.current = null;
        return;
      }
      
      touchStartX.current = e.changedTouches[0].screenX;
      touchStartY.current = e.changedTouches[0].screenY;
    };

    const handleTouchEnd = (e) => {
      if (touchStartX.current === null || touchStartY.current === null) return;

      const touchEndX = e.changedTouches[0].screenX;
      const touchEndY = e.changedTouches[0].screenY;

      const diffX = touchStartX.current - touchEndX;
      const diffY = touchStartY.current - touchEndY;

      if (Math.abs(diffY) > Math.abs(diffX)) return; 

      if (Math.abs(diffX) > 50) {
        if (diffX > 0) proximoSlide();
        else slideAnterior();
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [proximoSlide, slideAnterior]);

  // Evita tela em branco no primeiro milissegundo de carregamento
  if (slides.length === 0) return null;

  const SlideAtual = slides[slideAtivo];

  return (
    <main className="main-wrapper">
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