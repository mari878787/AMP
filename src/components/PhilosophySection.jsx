import React from 'react';

export default function PhilosophySection() {
  const stats = [
    {
      title: "Years Of Experience",
      value: "10 Yrs ⁺",
      desc: "Delivering consistent, high-quality work backed by expertise."
    },
    {
      title: "Licensed & Insured",
      value: "100%",
      desc: "Fully certified and compliant with all required standards."
    },
    {
      title: "Safety Commitment",
      value: "24/7",
      desc: "Safety is prioritized at every stage of every project."
    },
    {
      title: "Client Satisfaction",
      value: "5/5",
      desc: "Consistently rated for care, results, and experience."
    }
  ];

  return (
    <section className="section about-section" id="about">
      <div className="container">
        
        {/* Top Grid: Headings and Intro Paragraph */}
        <div className="about-top-grid">
          <div className="about-left-col">
            <span className="about-tag">About Us</span>
            <h2 className="about-title">
              We design and build your vision into reality.
            </h2>
          </div>
          
          <div className="about-right-col">
            <p className="about-desc">
              Adhithya Mohan has been shaping Chennai landscape with excellence and dedication. With years of experience in residential, Plotted and commercial construction, where seamless architecture meets modern sophistication, crafted for those who seek more than a home. they seek a legacy.
            </p>
            <a href="#contact" className="btn-about">
              Know More
            </a>
          </div>
        </div>

        {/* Bottom Grid: Statistics Columns */}
        <div className="about-stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-column">
              <span className="stat-title">{stat.title}</span>
              <span className="stat-value">{stat.value}</span>
              <p className="stat-desc">{stat.desc}</p>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .about-section {
          background-color: #ffffff;
          padding: 60px 0;
          color: var(--color-text-dark);
        }
        
        .about-top-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 80px;
          margin-bottom: 48px;
          align-items: flex-start;
        }
        
        .about-tag {
          display: block;
          font-family: var(--font-sans);
          font-size: 15px;
          font-weight: 500;
          color: var(--color-text-muted);
          margin-bottom: 16px;
          letter-spacing: 0.02em;
        }
        
        .about-title {
          font-family: var(--font-heading);
          font-size: 32px;
          font-weight: 400;
          line-height: 1.25;
          color: var(--color-text-dark);
          letter-spacing: -0.01em;
          max-width: 500px;
        }
        
        .about-desc {
          font-family: var(--font-sans);
          font-size: 15px;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 28px;
        }
        
        .btn-about {
          display: inline-block;
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #ba944c;
          background: rgba(186, 148, 76, 0.05);
          border: 1px solid rgba(186, 148, 76, 0.25);
          padding: 10px 30px;
          border-radius: 50px;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          text-align: center;
        }
        
        .btn-about:hover {
          background: rgba(186, 148, 76, 0.9);
          border-color: #ba944c;
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(186, 148, 76, 0.25);
        }
        
        /* Stats Grid Details */
        .about-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          padding-top: 40px;
          border-top: 1px solid #f1f5f9;
        }
        
        .stat-column {
          display: flex;
          flex-direction: column;
          padding-right: 40px;
        }
        
        .stat-column:not(:first-child) {
          border-left: 1px solid #eae8e8; /* Thin divider line from screenshot */
          padding-left: 40px;
        }
        
        .stat-title {
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 500;
          color: var(--color-text-muted);
          margin-bottom: 12px;
        }
        
        .stat-value {
          font-family: var(--font-heading);
          font-size: 40px;
          font-weight: 500;
          color: var(--color-text-dark);
          line-height: 1.1;
          margin-bottom: 16px;
          letter-spacing: -0.03em;
        }
        
        .stat-desc {
          font-family: var(--font-sans);
          font-size: 13px;
          color: var(--color-text-muted);
          line-height: 1.5;
        }
        
        @media (max-width: 1024px) {
          .about-top-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .about-title {
            font-size: 26px;
            max-width: 100%;
          }
          .about-stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px 0;
          }
          .stat-column {
            padding-right: 20px;
          }
          .stat-column:nth-child(even) {
            padding-left: 40px;
          }
          .stat-column:nth-child(odd) {
            border-left: none;
            padding-left: 0;
          }
        }
        
        @media (max-width: 640px) {
          .about-stats-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .stat-column {
            padding: 0 !important;
            border-left: none !important;
          }
          .about-title {
            font-size: 22px;
          }
        }
      `}</style>
    </section>
  );
}
