import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { B as Button } from "./router-CB_-ibMA.mjs";
import { P as PageHeader } from "./PageHeader-DEQrH5tk.mjs";
import { R as ResponsiveIframe } from "./ResponsiveIframe-TooxUA0R.mjs";
import { C as Card, b as CardHeader, c as CardTitle, a as CardContent } from "./card-CooUgIdt.mjs";
import { m as missionsData } from "./missions-CyskUf-I.mjs";
import { R as Rocket, s as CirclePlay, B as BookOpen, t as Bot, A as ArrowRight, u as ListOrdered, v as Layers, w as MessageCircleQuestionMark } from "../_libs/lucide-react.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
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
function GettingStartedPage() {
  const {
    videoId
  } = missionsData.meta;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Before You Begin", title: "Getting Started", description: "Watch your teacher's introduction, then warm up with a quick interactive activity.", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "h-6 w-6" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-stretch gap-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "flex flex-col mint-card-shadow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlay, { className: "h-5 w-5 text-primary" }),
          " Introduction Video"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveIframe, { src: `https://www.youtube.com/embed/${videoId}`, title: "Math Explorer Introduction Video" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2.5 rounded-xl bg-mint-50/60 p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Watch carefully — you'll meet coordinates, ratio and proportion through fun real-world Malaysian examples." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "flex flex-col overflow-hidden border-2 border-cta/30 mint-card-shadow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-5 w-5 text-cta" }),
          " 🤖 AI Study Companion (Pembantu Belajar AI)"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "flex flex-col justify-between flex-1 gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl bg-gradient-to-br from-cta/10 to-mint-100/40 p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/80", children: "Have questions about coordinates or ratios? Chat with our smart AI assistant powered by Google NotebookLM to guide your adventure!" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Ask about any DSKP topic in your own words." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Get child-friendly explanations and examples." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Review before tackling the Practice quizzes." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 pt-2 pb-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://notebooklm.google.com/notebook/615fc237-4016-4367-bf4e-24efcba7286d", target: "_blank", rel: "noopener noreferrer", className: "group flex w-full items-center justify-center gap-2 rounded-xl bg-cta py-6 text-center text-base font-bold text-cta-foreground cta-shadow transition-all hover:bg-cta/90", children: [
            "Open AI Companion",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
          ] }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-5 font-display text-2xl font-bold", children: "Learning Tips: How to make the most of Math Explorer" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 md:grid-cols-3", children: TIPS.map((tip) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "mint-card-shadow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "flex flex-col gap-3 p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-11 w-11 items-center justify-center rounded-2xl bg-mint-100 text-primary", children: tip.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg font-bold", children: tip.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: tip.desc })
      ] }) }, tip.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "gap-2 bg-cta text-cta-foreground cta-shadow hover:bg-cta/90", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/coordinates", children: [
      "Ready to Explore? Start Mission 1: Coordinates Adventure!",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-5 w-5" })
    ] }) }) })
  ] });
}
const TIPS = [{
  title: "1. Follow the Order",
  desc: "Complete missions in sequence. Each mission builds on the previous one.",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ListOrdered, { className: "h-5 w-5" })
}, {
  title: "2. Learn → Explore → Practice",
  desc: "Each mission has three phases. Don't skip ahead!",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "h-5 w-5" })
}, {
  title: "3. Ask Questions",
  desc: "If you're stuck, review the learning materials or ask your teacher for help.",
  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircleQuestionMark, { className: "h-5 w-5" })
}];
export {
  GettingStartedPage as component
};
