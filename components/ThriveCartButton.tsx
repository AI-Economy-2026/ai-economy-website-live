"use client";

import { useEffect, useRef } from "react";

interface ThriveCartButtonProps {
  className?: string;
  label?: string;
  productId?: number;
}

export default function ThriveCartButton({
  className = "",
  label = "Get the Toolkit — $49",
  productId = 7,
}: ThriveCartButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (scriptLoaded.current) return;
    scriptLoaded.current = true;

    // Only inject once globally
    if (document.querySelector('script[src*="tinder.thrivecart.com/embed/v2/thrivecart.js"]')) {
      return;
    }

    const script = document.createElement("script");
    script.src = "//tinder.thrivecart.com/embed/v2/thrivecart.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    /*
      We render ThriveCart's exact required markup but override the visual styling.
      ThriveCart's script scans for .tc-v2-embeddable-trigger and attaches the modal
      handler directly to the inner button — no proxy click needed.
    */
    <div
      ref={containerRef}
      className={`builder-v2-widget tc-v2-widget-embeddable_button tc-v2-embeddable-trigger ${className}`}
      data-widget-layout="embeddable_button"
      data-thrivecart-account="aieconomy"
      data-thrivecart-tpl="v2"
      data-thrivecart-product={productId}
      data-thrivecart-modal="on"
      data-thrivecart-modal-opts={JSON.stringify({
        style_modal_width: "40",
        style_content_border_radius: "0.5",
        attr_modal_background: "on",
        style_modal_background_color: "#000000",
        style_modal_background_opacity: "40",
        attr_modal_blur: "off",
        attr_content_shadow: "off",
      })}
    >
      <div
        data-size="auto"
        data-style="rounded"
        data-align="center"
        data-block="embeddable_button"
        className="builder-v2-block builder-v2-block-embeddable_button"
      >
        {/*
          This is the actual button ThriveCart attaches its modal handler to.
          We style it to match our design system.
        */}
        <button
          className="tc-v2-embeddable-trigger-el button w-full"
          style={{
            all: "unset",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            cursor: "pointer",
          }}
        >
          <span
            className="builder-v2-block builder-v2-block-plaintext"
            data-block="plaintext"
            style={{ color: "inherit" }}
          >
            {label}
          </span>
        </button>
      </div>
    </div>
  );
}
