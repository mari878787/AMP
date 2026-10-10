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
          <div className="teaser-coming-soon-badge">
            <span className="teaser-badge-dot"></span>
            COMING SOON
          </div>
          <img 
            src={posterImage} 
            alt={projectTitle ? `${projectTitle} Teaser` : 'Upcoming Project Teaser'} 
            className="teaser-poster-img" 
          />
          {projectTitle && (
            <div className="teaser-caption-overlay">
              <span className="teaser-project-tag">UPCOMING LUXURY PROJECT</span>
              <h3 className="teaser-project-title">{projectTitle}</h3>
            </div>
          )}
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
          position: relative;
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

        .teaser-coming-soon-badge {
          position: absolute;
          top: 20px;
          left: 20px;
          background: rgba(180, 133, 100, 0.9);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          color: #ffffff;
          padding: 8px 18px;
          border-radius: 100px;
          font-family: var(--font-sans, 'IBM Plex Sans', sans-serif);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
          z-index: 5;
        }

        .teaser-badge-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #ffffff;
          box-shadow: 0 0 8px #ffffff;
          animation: pulseDot 2s infinite ease-in-out;
        }

        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.8); }
        }

        .teaser-caption-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 40px 24px 20px 24px;
          background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.85) 100%);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          z-index: 4;
        }

        .teaser-project-tag {
          font-family: var(--font-sans, 'IBM Plex Sans', sans-serif);
          font-size: 10px;
          letter-spacing: 0.18em;
          color: #b48564;
          text-transform: uppercase;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .teaser-project-title {
          font-family: var(--font-heading, 'Playfair Display', serif);
          font-size: clamp(22px, 3vw, 34px);
          color: #ffffff;
          margin: 0;
          font-weight: 400;
          letter-spacing: -0.01em;
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
