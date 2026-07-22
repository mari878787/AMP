import React, { useState, useCallback } from 'react';
import ScrollReveal from './ScrollReveal';

const BLOGS = [
  {
    id: 1,
    image: '/images/hero_placeholders/p1.png',
    title: 'Looking for your dream home?',
    excerpt: 'Discover expert tips, market insights, and practical advice to help you find the perfect place to call home.',
  },
  {
    id: 2,
    image: '/images/hero_placeholders/p4.png',
    title: 'Investing in property made simple',
    excerpt: 'Explore easy-to-understand guides on real estate investment, rental income, and long-term growth.',
  },
  {
    id: 3,
    image: '/images/hero_placeholders/p3.png',
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

        {/* â”€â”€ Header row â”€â”€ */}
        <div className="blog-header">
          <div className="blog-header-left">
            <ScrollReveal animation="fadeUp" delay={0.05}>
              <h2 className="section-title">Updates that matter to you</h2>
            </ScrollReveal>
            <ScrollReveal animation="fadeUp" delay={0.2}>
              <p className="blog-subtitle">
                Discover homes and investment opportunities tailored to you.<br className="desktop-only-br" />
                With our trusted expertise and local knowledge.
              </p>
            </ScrollReveal>
          </div>

          {/* Arrows – top right */}
          <ScrollReveal className="blog-arrows" animation="fadeUp" delay={0.35}>
            <button
              className="slider-arrow"
              onClick={prev}
              disabled={start === 0}
              aria-label="Previous blog posts"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
            </button>
            <button
              className="slider-arrow"
              onClick={next}
              disabled={start >= maxStart}
              aria-label="Next blog posts"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </ScrollReveal>
        </div>

        {/* â”€â”€ Blog cards â”€â”€ */}
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
                      fontWeight: '400', 
                      color: 'rgba(255, 255, 255, 0.4)' 
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

        /* â”€â”€ Header â”€â”€ */
        .blog-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        .blog-header-left { flex: 1; }

        /* â”€â”€ Arrows â”€â”€ */
        .blog-arrows {
          display: flex;
          gap: 10px;
          align-items: center;
          padding-top: 4px;
          flex-shrink: 0;
        }

        /* â”€â”€ Grid â”€â”€ */
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-4);
        }

        /* â”€â”€ Card â”€â”€ */
        .blog-card {
          position: relative;
          min-height: 620px;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
          transition: transform 0.4s var(--ease-luxury), box-shadow 0.4s var(--ease-luxury);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        .blog-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.15);
        }

        .blog-img-wrap {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }
        .blog-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .blog-card:hover .blog-img { transform: scale(1.05); }

        /* â”€â”€ Body (Glassmorphism Overlay) â”€â”€ */
        .blog-body {
          position: relative;
          z-index: 2;
          width: 100%;
          padding: 30px 24px 24px;
          background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 60%, transparent 100%);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .blog-card-title {
          line-height: 1.35;
          color: #ffffff;
          font-size: 20px;
          letter-spacing: 0.1em;
        }

        .blog-excerpt {

          font-size: 14px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.85);
        }

        .blog-read-more {
          display: inline-flex;
          align-items: center;
          gap: 8px;

          font-size: 13px;
          font-weight: 400;
          color: #ffffff;
          text-transform: uppercase;

          text-decoration: none;
          transition: opacity 0.3s ease;
        }

        .blog-card:hover .blog-read-more {
          opacity: 0.7;
        }

        .blog-card.dark .blog-read-more {
          color: var(--color-white);
        }

        .blog-card:hover .blog-read-more svg {
          transform: translateX(4px);
        }

        /* â”€â”€ Responsive â”€â”€ */
        @media (max-width: 900px) {
          .blog-grid { grid-template-columns: repeat(2, 1fr); }
          .blog-header { flex-direction: column; align-items: flex-start;  }
          .blog-arrows { align-self: flex-end; }
        }
        @media (max-width: 600px) {
          .blog-grid { grid-template-columns: 1fr; }
          .blog-section { padding: 60px 0; }
        }
      `}</style>
    </section>
  );
}
