import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function TeaserPosterModal({ isOpen, onClose, posterImage, projectTitle }) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !posterImage) return null;

  return (
    <div className="teaser-modal-backdrop" onClick={onClose}>
      <div className="teaser-modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="teaser-modal-close-btn" onClick={onClose} aria-label="Close poster">
          <X size={22} strokeWidth={1.8} />
        </button>
        
        <div className="teaser-poster-wrapper">
          <img 
            src={posterImage} 
            alt={projectTitle ? `${projectTitle} Teaser` : 'Upcoming Project Teaser'} 
            className="teaser-poster-img" 
          />
        </div>
      </div>

      <style>{`
        .teaser-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.88);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          z-index: 999999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: teaserFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .teaser-modal-dialog {
          position: relative;
          max-width: 1100px;
          width: 100%;
          max-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: teaserScaleUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .teaser-modal-close-btn {
          position: absolute;
          top: -46px;
          right: 0;
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #ffffff;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s ease;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 10;
        }

        .teaser-modal-close-btn:hover {
          background: #b48564;
          border-color: #b48564;
          transform: rotate(90deg) scale(1.05);
        }

        .teaser-poster-wrapper {
          width: 100%;
          max-height: 85vh;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.1);
          background: #050505;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .teaser-poster-img {
          width: 100%;
          height: auto;
          max-height: 85vh;
          object-fit: contain;
          display: block;
        }

        @keyframes teaserFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes teaserScaleUp {
          from { opacity: 0; transform: scale(0.95) translateY(12px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        @media (max-width: 768px) {
          .teaser-modal-backdrop {
            padding: 16px;
          }
          .teaser-modal-close-btn {
            top: -42px;
            right: 0;
            width: 34px;
            height: 34px;
          }
        }
      `}</style>
    </div>
  );
}
