import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as confetti } from "../_libs/canvas-confetti.mjs";
import { C as Card, a as CardContent } from "./card-Cv0nPOlO.mjs";
import { u as useProgress, B as Button } from "./router-D1ajX3Va.mjs";
import { m as missionsData } from "./missions-CyskUf-I.mjs";
import { E as ExternalLink, a as ClipboardCheck, X, T as Trophy } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-separator.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/radix-ui__react-tooltip.mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-arrow.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
function StudentFeedbackView() {
  const {
    markComplete,
    addPoints
  } = useProgress();
  const [celebrate, setCelebrate] = reactExports.useState(false);
  const embedUrl = missionsData.meta.studentFeedbackFormUrl;
  const fallbackUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeoDA4-mmGPt1e7-lajYeshgPaWa8S4krzN5Dnw2uiV3fH6eA/viewform";
  const blast = () => {
    const end = Date.now() + 1e3;
    const colors = ["#10B981", "#F97316", "#ec4899", "#ffffff"];
    (function frame() {
      confetti({
        particleCount: 6,
        angle: 60,
        spread: 70,
        origin: {
          x: 0
        },
        colors
      });
      confetti({
        particleCount: 6,
        angle: 120,
        spread: 70,
        origin: {
          x: 1
        },
        colors
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
    confetti({
      particleCount: 180,
      spread: 120,
      origin: {
        y: 0.5
      }
    });
  };
  const completeJourney = () => {
    markComplete("reflection");
    addPoints(100);
    blast();
    setCelebrate(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-full max-w-3xl px-4 py-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 text-5xl", role: "img", "aria-label": "thinking face", children: "🤔" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-foreground", children: "Mission Reflection & Feedback" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Please share your valuable thoughts and adventure feedback with us using the secure form below." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", size: "sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: fallbackUrl, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-4 w-4" }),
        "Open Form in New Tab"
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "overflow-hidden border-primary/10 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { src: embedUrl, title: "Student Feedback Form", className: "h-[1100px] w-full border-0", loading: "lazy", referrerPolicy: "no-referrer", sandbox: "allow-scripts allow-forms allow-same-origin allow-popups", children: "Loading questionnaire..." }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-mint-50 to-mint-100 p-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 font-display text-base font-bold text-foreground", children: "Finished the questionnaire? Submit your adventure data to claim your final points!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: completeJourney, size: "lg", className: "animate-bounce rounded-xl bg-primary font-bold text-primary-foreground shadow-md transition-transform hover:scale-[1.02] hover:bg-primary/90", children: "✨ Click Here After Submitting Google Form to Complete Your Journey! 🏁" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-center gap-2 text-center text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardCheck, { className: "h-4 w-4 text-primary" }),
      "Your input helps Wong & Shyafina refine this Year 5 Math Multimedia resource!"
    ] }),
    celebrate && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 p-4 backdrop-blur-sm animate-fade-in", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-md rounded-3xl border-2 border-primary/30 bg-card p-8 text-center mint-card-shadow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setCelebrate(false), className: "absolute right-4 top-4 text-muted-foreground hover:text-foreground", "aria-label": "Close", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/15 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "h-10 w-10" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-extrabold text-foreground", children: "🎉 Quest Complete, Master Explorer!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-sm text-muted-foreground", children: [
        "You earned ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-primary", children: "100 PTS" }),
        " and fully completed your Math Quest across coordinates, ratio, proportion and the grand carnival finale!"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", onClick: () => setCelebrate(false), className: "mt-6 w-full rounded-xl bg-primary font-bold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90", children: "I am a Master Explorer! 🏆" })
    ] }) })
  ] });
}
export {
  StudentFeedbackView as component
};
