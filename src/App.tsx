import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';

function CanonicalUpdater() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on every route change
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Set canonical URL to the live site
    const canonicalUrl = `https://aieconomy.ai${location.pathname}`;

    // Update or create the canonical link tag
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }

    canonicalLink.setAttribute('href', canonicalUrl);
  }, [location.pathname]);

  return null;
}

import { SubscriptionModal } from './components/ui/SubscriptionModal';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { AIToolkitToolsPage } from './pages/AIToolkitToolsPage';
import { AIToolkitCategoryPage } from './pages/AIToolkitCategoryPage';

function App() {
  return (
    <>
      <CanonicalUpdater />
      <SubscriptionModal />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/ai-toolkit/tools" element={<AIToolkitToolsPage />} />
        <Route path="/product/ai-toolkit/category/:category" element={<AIToolkitCategoryPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
    </>
  );
}

export default App;
