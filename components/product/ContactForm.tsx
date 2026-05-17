'use client';

import { useEffect } from 'react';

export function ContactForm() {
  useEffect(() => {
    if (document.getElementById('leadconnector-form-script')) return;
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.id = 'leadconnector-form-script';
    document.body.appendChild(script);
  }, []);

  return (
    <div style={{ width: '100%', height: '568px' }}>
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/YiMaMMk32YmHgpIMEHEH"
        style={{ width: '100%', height: '100%', border: 'none', borderRadius: '8px' }}
        id="inline-YiMaMMk32YmHgpIMEHEH"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Contact Us Form - AI Economy website"
        data-height="568"
        data-layout-iframe-id="inline-YiMaMMk32YmHgpIMEHEH"
        data-form-id="YiMaMMk32YmHgpIMEHEH"
        title="Contact Us Form - AI Economy website"
      />
    </div>
  );
}
