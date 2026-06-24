import React, { useState, useCallback } from 'react';
import ScrollReveal from './ScrollReveal';

const BLOGS = [
  {
    id: 1,
    image: '/images/blog_dream_home.png',
    title: 'Looking for your dream home?',
    excerpt: 'Discover expert tips, market insights, and practical advice to help you find the perfect place to call home.',
  },
  {
    id: 2,
    image: '/images/blog_invest_property.png',
    title: 'Investing in property made simple',
    excerpt: 'Explore easy-to-understand guides on real estate investment, rental income, and long-term growth.',
  },
  {
    id: 3,
    image: '/images/blog_smart_marketing.png',
    title: 'Smart marketing tips for selling',
    excerpt: 'Learn proven strategies to showcase your property, attract the right buyers, and close deals quicker.',
  },
];

const VISIBLE = 3;
const TOTAL   = BLOGS.length;

export default function BlogSection() {
  const [start, setStart] = useState(0);
  const maxStart = Math.max(0, TOTAL - VISIBLE);

  const prev = useCallback(() => setStart(s => Math.max(0, s - 1)), []);
  const next = useCallback(() => setStart(s => Math.min(maxStart, s + 1)), [maxStart]);

  const visible = BLOGS.slice(start, start + VISIBLE);

  return (
    <section className="blog-section" id="blog">
      <div className="container">

        {/* ── Header row ── */}
        <ScrollReveal className="blog-header" animation="fadeUp">
          <div className="blog-header-left">
            <h2 className="blog-title">Updates that <span className="highlight-italic">matter to you</span></h2>
            <p className="blog-subtitle">
              Discover homes and investment opportunities tailored to you.<br />
              With our trusted expertise and local knowledge.
            </p>
          </div>

          {/* Arrows – top right */}
          <div className="blog-arrows">
            <button
              className={`blog-arrow ${start === 0 ? 'dimmed' : ''}`}
              onClick={prev}
              disabled={start === 0}
              aria-label="Previous blog posts"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
            </button>
            <button
              className={`blog-arrow ${start >= maxStart ? 'dimmed' : ''}`}
              onClick={next}
              disabled={start >= maxStart}
              aria-label="Next blog posts"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </ScrollReveal>

        {/* ── Blog cards ── */}
        <div className="blog-grid">
          {visible.map((blog, idx) => {
            const isLight = blog.id % 2 === 0;
            return (
              <ScrollReveal
                key={blog.id}
                animation="fadeUp"
                delay={idx * 0.15}
                as="article"
                className={`blog-card ${isLight ? 'light' : 'dark'}`}
              >
                {/* Image */}
                <a href="#blog" className="blog-img-wrap" aria-label={blog.title}>
                  <img src={blog.image} alt={blog.title} className="blog-img" draggable="false" />
                </a>

                {/* Body */}
                <div className="blog-body">
                  <h3 className="blog-card-title">{blog.title}</h3>
                  <p className="blog-excerpt">{blog.excerpt}</p>
                  <div className="blog-card-footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '10px' }}>
                    <a href="#blog" className="blog-read-more">
                      Read More
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </a>
                    <span className="blog-card-number" style={{ 
                      fontFamily: 'var(--font-sans)', 
                      fontSize: '14px', 
                      fontWeight: '700', 
                      color: isLight ? 'rgba(19, 56, 37, 0.15)' : 'rgba(250, 248, 240, 0.3)' 
                    }}>
                      0{blog.id}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>

      <style>{`
        .blog-section {
          background: var(--color-bg-light);
          padding: var(--space-8) 0;
        }

        /* ── Header ── */
        .blog-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: var(--space-4);
          gap: var(--space-3);
        }
        .blog-header-left { flex: 1; }

        .blog-title {
          font-family: var(--font-heading);
          font-size: 42px;
          font-weight: 400;
          color: var(--color-text-dark);
          letter-spacing: -0.01em;
          margin-bottom: 10px;
          line-height: 1.25;
        }
        .blog-subtitle {
          font-family: var(--font-sans);
          font-size: 14px;
          color: var(--color-text-muted);
          line-height: 1.65;
        }

        /* ── Arrows ── */
        .blog-arrows {
          display: flex;
          gap: 10px;
          align-items: center;
          padding-top: 4px;
          flex-shrink: 0;
        }
        .blog-arrow {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 0.8px solid rgba(19, 56, 37, 0.25);
          background: rgba(255, 255, 255, 0.6);
          color: var(--color-gold-accent);
          backdrop-filter: blur(12px) saturate(160%);
          -webkit-backdrop-filter: blur(12px) saturate(160%);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
          transition: all 0.35s var(--ease-luxury);
        }
        .blog-arrow:hover:not(:disabled) {
          background: rgba(19, 56, 37, 0.08);
          border-color: var(--color-gold-accent);
          color: var(--color-gold-accent);
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 6px 20px rgba(19, 56, 37, 0.12);
        }
        .blog-arrow.dimmed {
          border-color: rgba(6, 11, 29, 0.08);
          background: rgba(255, 255, 255, 0.3);
          color: rgba(6, 11, 29, 0.2);
          cursor: not-allowed;
          backdrop-filter: blur(4px);
        }

        /* ── Grid ── */
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-4);
        }

        /* ── Card ── */
        .blog-card {
          display: flex;
          flex-direction: column;
          border-radius: 16px;
          overflow: hidden;
          transition: transform 0.4s var(--ease-luxury), box-shadow 0.4s var(--ease-luxury);
        }
        .blog-card:hover {
          transform: translateY(-4px);
        }

        .blog-card.dark {
          background: #133825;
          border: 1px solid rgba(250, 248, 240, 0.1);
        }

        .blog-card.light {
          background: #ffffff;
          border: 1px solid rgba(19, 56, 37, 0.12);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.01);
        }

        .blog-card.light:hover {
          box-shadow: 0 12px 30px rgba(19, 56, 37, 0.06);
        }

        .blog-img-wrap {
          display: block;
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          margin-bottom: 0;
        }
        .blog-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .blog-card:hover .blog-img { transform: scale(1.04); }

        /* ── Body ── */
        .blog-body {
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 10px;
          padding: 24px;
        }

        .blog-card-title {
          font-family: var(--font-heading);
          font-size: 17px;
          font-weight: 500;
          line-height: 1.35;
          letter-spacing: 0.01em;
        }

        .blog-card.dark .blog-card-title {
          color: #faf8f0;
        }

        .blog-card.light .blog-card-title {
          color: var(--color-primary);
        }

        .blog-excerpt {
          font-family: var(--font-sans);
          font-size: 13.5px;
          line-height: 1.65;
          flex: 1;
        }

        .blog-card.dark .blog-excerpt {
          color: rgba(250, 248, 240, 0.7);
        }

        .blog-card.light .blog-excerpt {
          color: var(--color-text-muted);
        }

        .blog-read-more {
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 6px;
          width: fit-content;
          transition: gap 0.25s ease, color 0.25s ease;
        }

        .blog-card.dark .blog-read-more {
          color: var(--color-sage);
        }

        .blog-card.dark .blog-read-more:hover {
          gap: 10px;
          color: #faf8f0;
        }

        .blog-card.light .blog-read-more {
          color: var(--color-primary);
        }

        .blog-card.light .blog-read-more:hover {
          gap: 10px;
          color: var(--color-primary-hover);
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .blog-title { font-size: 26px; }
          .blog-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .blog-grid { grid-template-columns: 1fr; }
          .blog-title { font-size: 22px; }
          .blog-section { padding: 60px 0; }
        }
      `}</style>
    </section>
  );
}
