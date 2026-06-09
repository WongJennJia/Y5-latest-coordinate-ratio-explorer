import { useEffect, useRef, type DetailedHTMLProps, type HTMLAttributes } from "react";

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

function getDotLottie(el: HTMLElement): any {
  return (el as any)?.dotLottie ?? null;
}

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
  const ref = useRef<HTMLElement | null>(null);

  // Core web component script initialization
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

  // Fix 1: Component mount and router transition listener
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const tryPlay = () => {
      const dl = getDotLottie(el);
      if (dl) {
        dl.play();
      } else {
        el.addEventListener("load", () => getDotLottie(el)?.play(), { once: true });
      }
    };
    const timer = setTimeout(tryPlay, 100);
    return () => clearTimeout(timer);
  }, []);

  // Fix 1b: Tab focus visibility tracking hooks
  useEffect(() => {
    const handleVisibility = () => {
      if (!document.hidden && ref.current) {
        getDotLottie(ref.current)?.play();
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  // Fix 2: Layout resize handler with microtask source rebind fallback
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof ResizeObserver === "undefined") return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (width > 0 && height > 0) {
          const dl = getDotLottie(el);
          if (dl) {
            dl.resize();
            dl.play();
          } else {
            // Re-bind source path string across execution cycles to enforce browser dimension layout calculation
            const player = el as any;
            const currentSrc = player.src;
            player.src = "";
            requestAnimationFrame(() => {
              player.src = currentSrc;
            });
          }
        }
      }
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <dotlottie-wc
      ref={ref as any}
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
