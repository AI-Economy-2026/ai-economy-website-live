'use client';

import { useState, useEffect } from 'react';

const CORRECT_PASSWORD = 'Parently2026';
const SESSION_KEY = 'aieconomy_reports_unlocked';

const REPORTS = [
  {
    client: 'NMGS',
    items: [
      { title: 'NMGS — SEO Audit', subtitle: 'April 2026', href: '/reports/nmgs-seo-apr-2026.html', tag: 'SEO' },
      { title: 'NMGS — GEO Audit', subtitle: 'February 2026', href: '/reports/nmgs-geo-feb-2026.html', tag: 'GEO' },
      { title: 'NMGS — SEO Report', subtitle: 'June 2026', href: '/reports/nmgs-seo-jun-2026.html', tag: 'SEO' },
    ],
  },
  {
    client: 'Signal to Noise',
    items: [
      { title: 'Signal to Noise — SEO Report', subtitle: 'April 2026', href: '/reports/signaltonoise-april-2026.html', tag: 'SEO' },
      { title: 'Signal to Noise — Social Media Dashboard', subtitle: 'April 2026', href: '/reports/signaltonoise-social-april-2026.html', tag: 'Social' },
    ],
  },
  {
    client: 'Mirvac',
    items: [
      { title: 'Mirvac — GEO Audit', subtitle: 'February 2026', href: '/reports/mirvac-geo-feb-2026.html', tag: 'GEO' },
      { title: 'Mirvac Trielle — GEO Audit', subtitle: '', href: '/reports/mirvac-trielle-geo.html', tag: 'GEO' },
      { title: 'Henleybrook Mirvac — GEO Audit', subtitle: '', href: '/reports/henleybrook-mirvac-geo.html', tag: 'GEO' },
    ],
  },
  {
    client: 'Express Insurance',
    items: [
      { title: 'Express Insurance — SEM Report', subtitle: 'Google Ads Strategy', href: '/reports/express-insurance-sem-v3.html', tag: 'SEM' },
    ],
  },
  {
    client: 'Dexion Victoria',
    items: [
      { title: 'Dexion Victoria — GEO Audit', subtitle: 'February 2026', href: '/reports/dexion-victoria-geo-feb-2026.html', tag: 'GEO' },
    ],
  },
  {
    client: 'Edgewise',
    items: [
      { title: 'Edgewise — GEO Audit', subtitle: 'February 2026', href: '/reports/edgewise-geo-feb-2026.html', tag: 'GEO' },
    ],
  },
  {
    client: 'Avanti Health',
    items: [
      { title: 'Avanti Health — GEO Audit', subtitle: 'February 2026', href: '/reports/avanti-health-geo-feb-2026.html', tag: 'GEO' },
    ],
  },
  {
    client: 'Bentleys',
    items: [
      { title: 'Bentleys — GEO Audit', subtitle: 'February 2026', href: '/reports/bentleys-geo-feb-2026.html', tag: 'GEO' },
    ],
  },
  {
    client: 'Wood Property',
    items: [
      { title: 'Wood Property — GEO Audit', subtitle: 'April 2026', href: '/reports/wood-property-geo-apr-2026.html', tag: 'GEO' },
    ],
  },
  {
    client: 'Insurance Industry',
    items: [
      { title: 'Insurance Industry — GEO Audit', subtitle: 'February 2026', href: '/reports/insurance-industry-geo-feb-2026.html', tag: 'GEO' },
    ],
  },
  {
    client: 'AI Economy',
    items: [
      { title: 'AI Economy — SEO Report', subtitle: 'April 2026', href: '/reports/aieconomy-seo-apr-2026.html', tag: 'SEO' },
      { title: 'Accountant Debrief', subtitle: '', href: '/reports/accountant-debrief.html', tag: 'Internal' },
    ],
  },
];

const TAG_COLORS: Record<string, { bg: string; text: string }> = {
  SEO: { bg: '#1a2e1a', text: '#4ade80' },
  GEO: { bg: '#1a1f2e', text: '#60a5fa' },
  SEM: { bg: '#2e1a2e', text: '#c084fc' },
  Social: { bg: '#2e1f1a', text: '#fb923c' },
  Internal: { bg: '#222', text: '#888' },
};

export default function ReportsIndexPage() {
  const [password, setPassword] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === 'true') {
      setUnlocked(true);
    }
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, 'true');
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setPassword('');
    }
  }

  if (!unlocked) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#000',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}>
        <div style={{
          background: '#111',
          border: '1px solid #333',
          borderRadius: '8px',
          padding: '48px 40px',
          width: '100%',
          maxWidth: '420px',
          textAlign: 'center',
        }}>
          <div style={{ marginBottom: '32px' }}>
            <div style={{
              fontFamily: 'Georgia, serif',
              fontSize: '13px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#888',
              marginBottom: '12px',
            }}>
              AI Economy
            </div>
            <h1 style={{
              fontSize: '22px',
              fontWeight: '700',
              color: '#fff',
              marginBottom: '8px',
              letterSpacing: '-0.02em',
            }}>
              Client Reports
            </h1>
            <p style={{ fontSize: '14px', color: '#666' }}>
              Enter your password to access reports
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(false); }}
              placeholder="Enter password"
              autoFocus
              style={{
                width: '100%',
                padding: '12px 16px',
                background: '#1a1a1a',
                border: error ? '1px solid #ef4444' : '1px solid #333',
                borderRadius: '6px',
                color: '#fff',
                fontSize: '15px',
                marginBottom: '12px',
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
            {error && (
              <p style={{ color: '#ef4444', fontSize: '13px', marginBottom: '12px' }}>
                Incorrect password. Please try again.
              </p>
            )}
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '12px',
                background: '#fff',
                color: '#000',
                border: 'none',
                borderRadius: '6px',
                fontSize: '15px',
                fontWeight: '600',
                cursor: 'pointer',
                letterSpacing: '-0.01em',
              }}
            >
              Access Reports
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#000',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      color: '#fff',
      padding: '60px 24px',
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '56px' }}>
          <div style={{
            fontFamily: 'Georgia, serif',
            fontSize: '12px',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: '#555',
            marginBottom: '16px',
          }}>
            AI Economy
          </div>
          <h1 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#fff',
            letterSpacing: '-0.03em',
            marginBottom: '8px',
          }}>
            Client Reports
          </h1>
          <p style={{ fontSize: '15px', color: '#555' }}>
            SEO, GEO & SEM audits and performance reports
          </p>
        </div>

        {/* Report Groups */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {REPORTS.map((group) => (
            <div key={group.client}>
              <div style={{
                fontSize: '11px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: '#444',
                marginBottom: '12px',
                paddingBottom: '10px',
                borderBottom: '1px solid #1a1a1a',
              }}>
                {group.client}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                {group.items.map((report) => {
                  const tagStyle = TAG_COLORS[report.tag] || TAG_COLORS['Internal'];
                  return (
                    <div key={report.title} style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '14px 16px',
                      borderRadius: '6px',
                      background: report.wip ? 'transparent' : '#0d0d0d',
                      border: report.wip ? '1px dashed #222' : '1px solid #1a1a1a',
                      opacity: report.wip ? 0.5 : 1,
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
                        <span style={{
                          fontSize: '10px',
                          fontWeight: '600',
                          letterSpacing: '1px',
                          textTransform: 'uppercase',
                          padding: '3px 8px',
                          borderRadius: '4px',
                          background: tagStyle.bg,
                          color: tagStyle.text,
                          flexShrink: 0,
                        }}>
                          {report.tag}
                        </span>
                        <div>
                          <div style={{ fontSize: '14px', fontWeight: '500', color: report.wip ? '#555' : '#ddd' }}>
                            {report.title}
                          </div>
                          {report.subtitle && (
                            <div style={{ fontSize: '12px', color: '#444', marginTop: '2px' }}>
                              {report.subtitle}
                            </div>
                          )}
                        </div>
                      </div>
                      {report.wip ? (
                        <span style={{
                          fontSize: '11px',
                          color: '#444',
                          letterSpacing: '1px',
                          textTransform: 'uppercase',
                          flexShrink: 0,
                        }}>
                          Coming soon
                        </span>
                      ) : (
                        <a
                          href={report.href!}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontSize: '13px',
                            color: '#666',
                            textDecoration: 'none',
                            padding: '6px 14px',
                            border: '1px solid #2a2a2a',
                            borderRadius: '5px',
                            flexShrink: 0,
                            transition: 'color 0.15s, border-color 0.15s',
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.color = '#fff';
                            (e.currentTarget as HTMLAnchorElement).style.borderColor = '#555';
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.color = '#666';
                            (e.currentTarget as HTMLAnchorElement).style.borderColor = '#2a2a2a';
                          }}
                        >
                          View report
                        </a>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{
          marginTop: '64px',
          paddingTop: '24px',
          borderTop: '1px solid #1a1a1a',
          fontSize: '12px',
          color: '#333',
        }}>
          AI Economy &mdash; Confidential client reports
        </div>
      </div>
    </div>
  );
}
