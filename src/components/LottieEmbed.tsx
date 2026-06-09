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

// Safe accessor mapping player methods down to the native Web Component instance context
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

  // Injects critical dependencies scripts safely client-side
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

  // Safeguard: Wait until the web component reports it is ready, then fire playing trigger securely
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onLoad = () => {
      getDotLottie(el)?.play();
    };
    el.addEventListener("load", onLoad);
    return () => el.removeEventListener("load", onLoad);
  }, []);

  // Fix 1: Flawlessly resume animation playback through internal sub-instance upon tab reactivation
  useEffect(() => {
    const handleVisibility = () => {
      if (!document.hidden && ref.current) {
        getDotLottie(ref.current)?.play();
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  // Fix 2: Eradicate stretching and layout freezes on Sidebar events by re-evaluating layout boundaries via internal .dotLottie reference
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof ResizeObserver === "undefined") return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (width > 0 && height > 0) {
          const dl = getDotLottie(el);
          dl?.resize();
          dl?.play();
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
