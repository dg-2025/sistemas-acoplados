"use client";

import { useEffect, useRef } from 'react';
import { Smartphone, Code } from 'lucide-react';
import QRCode from 'qrcode';

export default function SlideQRCodes() {
const canvasAoVivoRef = useRef(null);
  const canvasGitHubRef = useRef(null);

  useEffect(() => {
    
    if (canvasAoVivoRef.current) {
      QRCode.toCanvas(canvasAoVivoRef.current, 'https://sistemas-acoplados.vercel.app/', {
        width: 500,                   
        margin: 2,
        errorCorrectionLevel: 'H',    
        color: { dark: '#000000', light: '#FFFFFF' }
      });
    }

    
    if (canvasGitHubRef.current) {
      QRCode.toCanvas(canvasGitHubRef.current, 'https://github.com/dg-2025/dg-2025', {
        width: 500,
        margin: 2,
        errorCorrectionLevel: 'H',
        color: { dark: '#000000', light: '#FFFFFF' }
      });
    }
  }, []);

  return (
    <div className="slide-container layout-center">
      <div className="glass-panel" style={{ alignItems: 'center', textAlign: 'center', justifyContent: 'center' }}>
        
        {}
        <h1 className="slide-title" style={{ border: 'none', marginBottom: '0.5vh', fontSize: 'clamp(3rem, 10vh, 5.5rem)', fontWeight: 'bold' }}>
          ACOMPANHE A APRESENTAÇÃO
        </h1>

        {}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'clamp(1rem, 2vw, 2rem)',
            justifyContent: 'center',
            width: '100%',
            marginTop: '1vh'
          }}
        >
          {}
          <div className="gamma-card" style={{
            flex: '1 1 350px',
            maxWidth: '650px',
            borderColor: 'rgba(0, 229, 255, 0.5)',
            background: 'rgba(0, 229, 255, 0.03)',
            alignItems: 'center',
            textAlign: 'center',
            padding: 'clamp(1rem, 2vh, 2rem)'
          }}>
            <div className="gamma-card-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', color: '#00E5FF', fontSize: 'clamp(1rem, 3vh, 1.4rem)' }}>
              <Smartphone size={24} /> Ao Vivo
            </div>
            
            {}
            <div style={{ background: '#FFFFFF', padding: '1rem', borderRadius: '1.5rem', display: 'inline-block', margin: '0.5rem 0', boxShadow: '0 0 20px rgba(0, 229, 255, 0.6)' }}>
              <canvas
                ref={canvasAoVivoRef}
                style={{
                  width: '100%',
                  maxWidth: '500px',
                  height: 'auto',
                  display: 'block',
                  imageRendering: 'crisp-edges' 
                }}
              />
            </div>
            
            <p className="slide-content" style={{ fontSize: '0.9rem', textAlign: 'center', marginBottom: 0, opacity: 0.8 }}>
              Tenha a experiência interativa 3D ao vivo em tempo real!
            </p>
          </div>

          {}
          <div className="gamma-card" style={{
            flex: '1 1 350px',
            maxWidth: '650px',
            borderColor: 'rgba(0, 255, 136, 0.4)',
            background: 'rgba(0, 255, 136, 0.02)',
            alignItems: 'center',
            textAlign: 'center',
            padding: 'clamp(1rem, 2vh, 2rem)'
          }}>
            <div className="gamma-card-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', color: '#00FF88', fontSize: 'clamp(1rem, 3vh, 1.4rem)' }}>
              <Code size={24} /> Código-Fonte
            </div>
            
            {}
            <div style={{ background: '#FFFFFF', padding: '1rem', borderRadius: '1.5rem', display: 'inline-block', margin: '0.5rem 0', boxShadow: '0 0 20px rgba(0, 255, 136, 0.6)' }}>
              <canvas
                ref={canvasGitHubRef}
                style={{
                  width: '100%',
                  maxWidth: '500px',
                  height: 'auto',
                  display: 'block',
                  imageRendering: 'crisp-edges'
                }}
              />
            </div>
            
            <p className="slide-content" style={{ fontSize: '0.9rem', textAlign: 'center', marginBottom: 0, opacity: 0.8 }}>
              Acesse o repositório oficial e visualize o código do projeto.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}