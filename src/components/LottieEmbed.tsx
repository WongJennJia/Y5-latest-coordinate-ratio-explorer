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

  // Fix 1: replay when switching back to the tab
  useEffect(() => {
    const handleVisibility = () => {
      if (!document.hidden && ref.current) {
        const player = ref.current as any;
        player?.play?.();
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  // Fix 2: handle distortion after sidebar hide/show via ResizeObserver
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof ResizeObserver === "undefined") return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (width > 0 && height > 0) {
          const player = el as any;
          player?.resize?.();
          player?.play?.();
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
