import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

export function SubscriptionModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setIsOpen(window.location.hash === '#subscribe');
    };

    // Check initial state
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const close = () => {
    window.location.hash = '';
    // If there's pushState needed to cleanly remove hash without scrolling:
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
    setIsOpen(false);
  };



  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all duration-300">
      <div 
        className="relative bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-300 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Block */}
        <div className="bg-[#2563EB] px-8 py-6 text-center relative">
          <button 
            onClick={close}
            className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <h3 className="text-2xl font-bold mb-1 text-white tracking-tight drop-shadow-sm">Coming Soon</h3>
          <p className="text-white/90 font-medium">Subscribe and we will let you know once it's out.</p>
        </div>
        
        {/* Form Container */}
        <div className="w-full bg-slate-50 relative pb-2 pt-4">
          <div className="w-full h-[278px]">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/iqJHFYddF7KWdA8DW2yh"
              style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
              id="inline-iqJHFYddF7KWdA8DW2yh" 
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="AI Economy subscription"
              data-height="278"
              data-layout-iframe-id="inline-iqJHFYddF7KWdA8DW2yh"
              data-form-id="iqJHFYddF7KWdA8DW2yh"
              title="AI Economy subscription"
            />
          </div>
        </div>
      </div>
      
      {/* Click outside to close */}
      <div className="absolute inset-0 z-[-1]" onClick={close} />
    </div>
  );
}
