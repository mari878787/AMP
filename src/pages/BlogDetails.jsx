import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import Button from '../components/Button';
import { BLOGS } from '../data/blogsData';

export default function BlogDetails() {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Find blog by slug or default to first blog (10 years)
  const blog = BLOGS.find(b => b.slug === slug || b.id === slug) || BLOGS[0];

  return (
    <>
      <Navbar darkText={false} />

      <main className="blog-details-page">
        
        {/* Hero Section */}
        <section className="blog-hero-section">
          <div className="blog-hero-bg" style={{ backgroundImage: `url(${blog.image})` }} />
          <div className="blog-hero-overlay" />
          
          <div className="container blog-hero-container">
            <ScrollReveal animation="fadeUp" delay={0.1}>
              <div className="blog-category-badge">{blog.category}</div>
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={0.2}>
              <h1 className="blog-hero-title">{blog.title}</h1>
            </ScrollReveal>

            {blog.subtitle && (
              <ScrollReveal animation="fadeUp" delay={0.3}>
                <p className="blog-hero-subtitle">{blog.subtitle}</p>
              </ScrollReveal>
            )}

            <ScrollReveal animation="fadeUp" delay={0.4}>
              <div className="blog-meta-bar">
                <span className="blog-meta-item">
                  <i className="fa-regular fa-calendar" /> {blog.date}
                </span>
                <span className="blog-meta-dot">•</span>
                <span className="blog-meta-item">
                  <i className="fa-regular fa-clock" /> {blog.readTime}
                </span>
                <span className="blog-meta-dot">•</span>
                <span className="blog-meta-item">By Aadhithya Mohan Properties</span>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Content Container */}
        <div className="container blog-content-wrapper">
          
          {/* Breadcrumb */}
          <nav className="blog-breadcrumb">
            <Link to="/home">Home</Link>
            <span className="sep">/</span>
            <Link to="/home#blog">Blogs</Link>
            <span className="sep">/</span>
            <span className="current">{blog.title}</span>
          </nav>

          <article className="blog-article-body">
            
            {/* Intro Lead Paragraph */}
            {blog.content?.intro && (
              <ScrollReveal animation="fadeUp" delay={0.1}>
                <p className="blog-lead-text">{blog.content.intro}</p>
              </ScrollReveal>
            )}

            {/* Render Article Sections */}
            {blog.content?.sections?.map((sec, idx) => (
              <div key={idx} className="blog-section-block">
                
                <ScrollReveal animation="fadeUp" delay={0.1}>
                  <h2 className="blog-heading">{sec.heading}</h2>
                </ScrollReveal>

                {sec.body?.map((pText, pIdx) => (
                  <ScrollReveal key={pIdx} animation="fadeUp" delay={0.15}>
                    <p className="blog-paragraph">{pText}</p>
                  </ScrollReveal>
                ))}

                {/* Core Values Cards Grid if present */}
                {sec.values && (
                  <div className="blog-values-grid">
                    {sec.values.map((val, vIdx) => (
                      <ScrollReveal key={vIdx} animation="fadeUp" delay={0.1 * vIdx} className="value-card">
                        <div className="value-card-num">0{vIdx + 1}</div>
                        <h4 className="value-card-title">{val.title}</h4>
                        <p className="value-card-desc">{val.desc}</p>
                      </ScrollReveal>
                    ))}
                  </div>
                )}

                {/* Interactive Timeline Milestones if present */}
                {sec.timeline && (
                  <div className="blog-timeline-container">
                    {sec.timeline.map((tm, tIdx) => (
                      <ScrollReveal key={tIdx} animation="fadeUp" delay={0.15 * tIdx} className="timeline-node">
                        <div className="timeline-year-badge">{tm.year}</div>
                        <div className="timeline-content-card">
                          <h4 className="timeline-node-title">{tm.title}</h4>
                          <p className="timeline-node-desc">{tm.desc}</p>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                )}

                {/* Bullets List if present */}
                {sec.bullets && (
                  <ScrollReveal animation="fadeUp" delay={0.2} className="blog-bullets-box">
                    <ul className="blog-bullets-list">
                      {sec.bullets.map((bItem, bIdx) => (
                        <li key={bIdx}>
                          <i className="fa-solid fa-check" />
                          <span>{bItem}</span>
                        </li>
                      ))}
                    </ul>
                  </ScrollReveal>
                )}

                {/* Note Blockquote if present */}
                {sec.note && (
                  <ScrollReveal animation="fadeUp" delay={0.25}>
                    <blockquote className="blog-quote-box">
                      <p>"{sec.note}"</p>
                    </blockquote>
                  </ScrollReveal>
                )}
              </div>
            ))}

            {/* Summary Highlights */}
            {blog.content?.summary && (
              <ScrollReveal animation="fadeUp" delay={0.2} className="blog-summary-card">
                <div className="summary-badge">MILESTONE DEDICATION</div>
                <h3 className="summary-title">{blog.content.summary[0]}</h3>
                <h4 className="summary-subtitle">{blog.content.summary[1]}</h4>
                <p className="summary-desc">{blog.content.summary[2]}</p>
                <div className="summary-tagline">{blog.content.summary[3]}</div>
              </ScrollReveal>
            )}

            {/* CTA Box */}
            <ScrollReveal animation="fadeUp" delay={0.25} className="blog-cta-box">
              <h3>Explore Our Projects</h3>
              <p>Discover our residential projects, villas, apartments and plotted developments and find a property that fits your vision for the future.</p>
              <div className="cta-btn-wrap">
                <Button href="/projects" theme="dark">
                  PLAN YOUR NEXT STEP
                </Button>
              </div>
            </ScrollReveal>

          </article>
        </div>
      </main>

      <Footer />

      <style>{`
        .blog-details-page {
          background-color: var(--color-bg-light);
          min-height: 100vh;
          padding-bottom: 100px;
        }

        .blog-hero-section {
          position: relative;
          min-height: 480px;
          display: flex;
          align-items: flex-end;
          padding: 160px 0 60px;
          overflow: hidden;
          background-color: var(--color-bg-navy);
        }

        .blog-hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          opacity: 0.35;
          transform: scale(1.05);
        }

        .blog-hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, rgba(13, 20, 33, 0.4) 0%, rgba(13, 20, 33, 0.95) 100%);
        }

        .blog-hero-container {
          position: relative;
          z-index: 2;
          color: #ffffff;
          max-width: 960px;
        }

        .blog-category-badge {
          display: inline-block;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-weight: 600;
          color: #fcedd3;
          background: rgba(252, 237, 211, 0.15);
          border: 1px solid rgba(252, 237, 211, 0.3);
          padding: 6px 14px;
          border-radius: 20px;
          margin-bottom: 20px;
        }

        .blog-hero-title {
          font-family: var(--font-heading);
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 400;
          line-height: 1.2;
          margin-bottom: 16px;
          color: #ffffff;
        }

        .blog-hero-subtitle {
          font-size: clamp(16px, 2vw, 22px);
          color: rgba(255, 255, 255, 0.85);
          font-weight: 300;
          margin-bottom: 24px;
        }

        .blog-meta-bar {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.7);
          flex-wrap: wrap;
        }

        .blog-meta-item i {
          margin-right: 6px;
          color: var(--color-highlight);
        }

        .blog-meta-dot {
          color: rgba(255, 255, 255, 0.3);
        }

        /* Content Container */
        .blog-content-wrapper {
          max-width: 900px;
          margin: 0 auto;
          padding: 40px 20px;
        }

        .blog-breadcrumb {
          font-size: 13px;
          color: #777777;
          margin-bottom: 40px;
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .blog-breadcrumb a {
          color: #444444;
          text-decoration: none;
          transition: color 0.2s;
        }

        .blog-breadcrumb a:hover {
          color: var(--color-highlight);
        }

        .blog-breadcrumb .sep {
          color: #cccccc;
        }

        .blog-breadcrumb .current {
          color: var(--color-highlight);
          font-weight: 500;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 350px;
        }

        /* Article Styling */
        .blog-article-body {
          color: #222222;
        }

        .blog-lead-text {
          font-size: 20px;
          line-height: 1.7;
          color: #1a202c;
          font-weight: 400;
          margin-bottom: 48px;
          border-left: 3px solid var(--color-highlight);
          padding-left: 20px;
        }

        .blog-section-block {
          margin-bottom: 54px;
        }

        .blog-heading {
          font-family: var(--font-heading);
          font-size: clamp(24px, 3vw, 34px);
          font-weight: 400;
          color: #0d1421;
          margin-top: 40px;
          margin-bottom: 20px;
          line-height: 1.3;
        }

        .blog-paragraph {
          font-size: 16px;
          line-height: 1.85;
          color: #444444;
          margin-bottom: 20px;
        }

        /* Core Values Grid */
        .blog-values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 20px;
          margin: 32px 0;
        }

        .value-card {
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.08);
          padding: 24px;
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
          position: relative;
        }

        .value-card-num {
          font-size: 12px;
          font-weight: 700;
          color: var(--color-highlight);
          margin-bottom: 8px;
          letter-spacing: 0.1em;
        }

        .value-card-title {
          font-family: var(--font-heading);
          font-size: 20px;
          color: #111111;
          margin-bottom: 8px;
        }

        .value-card-desc {
          font-size: 14px;
          color: #666666;
          line-height: 1.6;
          margin: 0;
        }

        /* Timeline Container */
        .blog-timeline-container {
          position: relative;
          margin: 40px 0;
          padding-left: 28px;
          border-left: 2px solid rgba(197, 155, 96, 0.3);
        }

        .timeline-node {
          position: relative;
          margin-bottom: 32px;
        }

        .timeline-node:last-child {
          margin-bottom: 0;
        }

        .timeline-year-badge {
          position: absolute;
          left: -48px;
          top: 0;
          background: var(--color-highlight);
          color: #ffffff;
          font-size: 12px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 12px;
          letter-spacing: 0.05em;
        }

        .timeline-content-card {
          background: #ffffff;
          padding: 20px 24px;
          border-radius: 8px;
          border: 1px solid rgba(0, 0, 0, 0.06);
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
        }

        .timeline-node-title {
          font-family: var(--font-heading);
          font-size: 18px;
          color: #111111;
          margin-bottom: 6px;
        }

        .timeline-node-desc {
          font-size: 14px;
          color: #555555;
          line-height: 1.6;
          margin: 0;
        }

        /* Bullets List */
        .blog-bullets-box {
          background: #ffffff;
          padding: 28px 32px;
          border-radius: 8px;
          border: 1px solid rgba(0, 0, 0, 0.06);
          margin: 28px 0;
        }

        .blog-bullets-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 16px;
        }

        .blog-bullets-list li {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 15px;
          color: #333333;
          font-weight: 500;
        }

        .blog-bullets-list li i {
          color: var(--color-highlight);
          background: rgba(197, 155, 96, 0.12);
          width: 26px;
          height: 26px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
        }

        /* Quote Box */
        .blog-quote-box {
          margin: 36px 0;
          padding: 28px 32px;
          background: #fdf8f0;
          border-left: 4px solid var(--color-highlight);
          border-radius: 0 8px 8px 0;
        }

        .blog-quote-box p {
          font-family: var(--font-heading);
          font-size: 20px;
          font-style: italic;
          color: #2c251d;
          line-height: 1.6;
          margin: 0;
        }

        /* Summary Card */
        .blog-summary-card {
          background: linear-gradient(135deg, #0d1421 0%, #1a2538 100%);
          color: #ffffff;
          padding: 44px 36px;
          border-radius: 12px;
          text-align: center;
          margin: 60px 0;
          box-shadow: 0 12px 40px rgba(13, 20, 33, 0.2);
        }

        .summary-badge {
          font-size: 11px;
          letter-spacing: 0.2em;
          color: var(--color-highlight);
          font-weight: 700;
          margin-bottom: 12px;
        }

        .summary-title {
          font-family: var(--font-heading);
          font-size: 28px;
          color: #ffffff;
          margin-bottom: 8px;
        }

        .summary-subtitle {
          font-size: 18px;
          color: #fcedd3;
          font-weight: 300;
          margin-bottom: 16px;
        }

        .summary-desc {
          font-size: 15px;
          color: rgba(255, 255, 255, 0.8);
          max-width: 650px;
          margin: 0 auto 24px;
          line-height: 1.7;
        }

        .summary-tagline {
          font-family: var(--font-heading);
          font-size: 16px;
          letter-spacing: 0.1em;
          color: var(--color-highlight);
        }

        /* CTA Box */
        .blog-cta-box {
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.08);
          padding: 40px;
          border-radius: 12px;
          text-align: center;
          margin-top: 40px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
        }

        .blog-cta-box h3 {
          font-family: var(--font-heading);
          font-size: 26px;
          color: #111111;
          margin-bottom: 12px;
        }

        .blog-cta-box p {
          font-size: 15px;
          color: #666666;
          max-width: 550px;
          margin: 0 auto 24px;
          line-height: 1.6;
        }

        .cta-btn-wrap {
          display: flex;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .blog-timeline-container {
            padding-left: 0;
            border-left: none;
          }

          .timeline-year-badge {
            position: relative;
            left: 0;
            top: 0;
            display: inline-block;
            margin-bottom: 10px;
          }

          .blog-summary-card {
            padding: 30px 20px;
          }
        }
      `}</style>
    </>
  );
}
