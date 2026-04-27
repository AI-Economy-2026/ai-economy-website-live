'use client';

import { useState, useEffect } from 'react';

const CORRECT_PASSWORD = 'SarahSpeaksAI';
const SESSION_KEY = 'stn_report_unlocked';

export default function SignalToNoiseReportPage() {
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

  if (unlocked) {
    return (
      <iframe
        src="/reports/signaltonoise-april-2026.html"
        title="Signal to Noise SEO Report — April 2026"
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', border: 'none', zIndex: 9999 }}
      />
    );
  }

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
            GEO Audit Report
          </h1>
          <p style={{ fontSize: '14px', color: '#666' }}>
            Signal to Noise — April 2026
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
            View Report
          </button>
        </form>
      </div>
    </div>
  );
}
