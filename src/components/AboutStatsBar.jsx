import React from 'react';
import { Layers, Users, PieChart } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function AboutStatsBar({
  stats = [
    {
      id: 1,
      icon: <Layers size={36} strokeWidth={1.2} color="#b48564" />,
      value: "~600K+",
      label: "Square Feet of Land Area Developed"
    },
    {
      id: 2,
      icon: <Users size={36} strokeWidth={1.2} color="#b48564" />,
      value: "~500+",
      label: "Happy Families & Homeowners"
    },
    {
      id: 3,
      icon: <PieChart size={36} strokeWidth={1.2} color="#b48564" />,
      value: "9+ Yrs",
      label: "Of Uncompromising Excellence"
    }
  ]
}) {
  return (
    <section className="about-stats-bar-section">
      <div className="container stats-bar-container">
        {stats.map((item, idx) => (
          <React.Fragment key={item.id || idx}>
            <ScrollReveal animation="fadeUp" delay={idx * 0.1} className="stat-bar-item-wrap">
              <div className="stat-bar-item">
                <div className="stat-icon-pane">
                  {item.icon}
                </div>
                
                <div className="stat-inner-divider"></div>

                <div className="stat-text-pane">
                  <h3 className="stat-number">{item.value}</h3>
                  <p className="stat-desc">{item.label}</p>
                </div>
              </div>
            </ScrollReveal>

            {idx < stats.length - 1 && (
              <div className="stat-item-col-divider"></div>
            )}
          </React.Fragment>
        ))}
      </div>

      <style>{`
        .about-stats-bar-section {
          width: 100%;
          background-color: #ffffff;
          padding: 70px 0;
          border-top: 1px solid #EBE7DF;
          border-bottom: 1px solid #EBE7DF;
          box-sizing: border-box;
          background-color: var(--color-bg-light);
        }

        .stats-bar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .stat-bar-item-wrap {
          flex: 1;
          display: flex;
          justify-content: center;
        }

        .stat-bar-item {
          display: flex;
          align-items: center;
        }

        .stat-icon-pane {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .stat-inner-divider {
          width: 1px;
          height: 48px;
          background-color: #E2DDD5;
          margin: 0 24px;
          flex-shrink: 0;
        }

        .stat-text-pane {
          display: flex;
          flex-direction: column;
        }

        .stat-number {
          font-family: var(--font-heading, serif);
          font-size: clamp(32px, 3.6vw, 48px);
          font-weight: 300;
          color: #000000;
          line-height: 1;
          letter-spacing: -0.02em;
          margin: 0 0 6px 0;
        }

        .stat-desc {
          font-family: var(--font-sans);
          font-size: 11.5px;
          font-weight: 500;
          color: #444444;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin: 0;
          line-height: 1.3;
        }

        .stat-item-col-divider {
          width: 1px;
          height: 60px;
          background-color: #E2DDD5;
          flex-shrink: 0;
        }

        @media (max-width: 960px) {
          .stats-bar-container {
            flex-direction: column;
            gap: 40px;
            padding: 0 24px;
          }
          .stat-item-col-divider {
            width: 120px;
            height: 1px;
          }
          .stat-bar-item {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
