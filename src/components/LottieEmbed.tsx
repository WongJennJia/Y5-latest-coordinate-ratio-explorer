import { useEffect, type DetailedHTMLProps, type HTMLAttributes } from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "dotlottie-wc": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        autoplay?: string;
        loop?: string;
      };
    }
  }
}

const SCRIPT_SRC = "https://unpkg.com/@lottiefiles/dotlottie-wc@0.6.2/dist/dotlottie-wc.js";

let scriptInjected = false;

/**
 * Lightweight wrapper around the <dotlottie-wc> web component.
 * Loads the module script once (client-side only) and renders the player.
 *
 * NOTE: The `src` values used across the app are PLACEHOLDER public Lottie
 * animations. Replace them with your own lottie.host / .lottie embed URLs.
 */
export function LottieEmbed({
  src,
  className,
  loop = true,
  autoplay = true,
  ariaLabel,
}: {
  src: string;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
  ariaLabel?: string;
}) {
  useEffect(() => {
    if (scriptInjected || typeof document === "undefined") return;
    if (document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
      scriptInjected = true;
      return;
    }
    const s = document.createElement("script");
    s.type = "module";
    s.src = SCRIPT_SRC;
    document.head.appendChild(s);
    scriptInjected = true;
  }, []);

  return (
    <dotlottie-wc
      src={src}
      className={className}
      autoplay={autoplay ? "" : undefined}
      loop={loop ? "" : undefined}
      role="img"
      aria-label={ariaLabel}
      style={{ width: "100%", height: "100%" }}
    />
  );
}
