import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { C as Card, a as CardContent } from "./card-CooUgIdt.mjs";
import { u as useProgress, B as Button, c as cn } from "./router-CB_-ibMA.mjs";
import { R as Root, I as Indicator } from "../_libs/radix-ui__react-progress.mjs";
import { B as Badge } from "./badge-DCw9rMcX.mjs";
import { m as missionsData } from "./missions-CyskUf-I.mjs";
import { h as Sparkles, R as Rocket, a as ClipboardCheck, T as Trophy, P as Percent, S as Scale, G as Grid3x3, f as CircleCheck, L as Lock, A as ArrowRight } from "../_libs/lucide-react.mjs";
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
const Progress = reactExports.forwardRef(({ className, value, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Root,
  {
    ref,
    className: cn("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Indicator,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (value || 0)}%)` }
      }
    )
  }
));
Progress.displayName = Root.displayName;
const ICONS = {
  Grid3x3,
  Scale,
  Percent,
  Trophy,
  ClipboardCheck
};
function HomePage() {
  const {
    percent,
    completedCount,
    totalCount,
    isUnlocked,
    isCompleted,
    scorePoints
  } = useProgress();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative mb-10 overflow-hidden rounded-3xl bg-gradient-to-br from-mint-100 to-mint-200 p-8 sm:p-12 mint-card-shadow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-10 -top-10 h-44 w-44 rounded-full bg-primary/15 blur-2xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "mb-4 gap-1.5 bg-primary text-primary-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
          " ",
          missionsData.meta.curriculum
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl font-extrabold leading-tight text-foreground sm:text-5xl", children: "Welcome, Explorer!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-base text-foreground/70 sm:text-lg", children: [
          "Begin your ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: missionsData.meta.subtitle }),
          ". Complete each mission to unlock the next and reach the Pesta Ria Sekolah Final Challenge."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "bg-cta text-cta-foreground cta-shadow hover:bg-cta/90", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/getting-started", className: "gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Rocket, { className: "h-4 w-4" }),
            " Start Adventure"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/coordinates", children: "Jump to Missions" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "mb-10 mint-card-shadow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg font-bold", children: "Your Adventure Progress" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
          "Milestone ",
          completedCount,
          "/",
          totalCount,
          " completed"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: percent, className: "mt-3 h-3" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl font-extrabold text-cta", children: scorePoints }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-wide text-muted-foreground", children: "PTS" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-4xl font-extrabold text-primary", children: [
          percent,
          "%"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-8 font-display text-2xl font-bold", children: "Adventure Roadmap" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 top-0 bottom-0 w-1.5 -translate-x-1/2 rounded-full bg-gradient-to-b from-emerald-400 via-blue-400 via-purple-400 to-orange-400 hidden lg:block" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8 lg:space-y-4", children: missionsData.milestones.map((m, i) => {
        const Icon = ICONS[m.icon];
        const unlocked = isUnlocked(m.id);
        const done = isCompleted(m.id);
        const active = unlocked && !done;
        const isLeft = i % 2 === 0;
        const points = POINTS[i] ?? 100;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative flex ${isLeft ? "lg:pr-[55%] lg:text-right ml-0 mr-auto lg:justify-end" : "lg:pl-[55%] lg:text-left mr-0 ml-auto lg:justify-start"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 top-6 z-20 hidden -translate-x-1/2 lg:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `flex h-12 w-12 items-center justify-center rounded-full border-4 border-background font-display text-base font-extrabold shadow-lg ${done ? "bg-primary text-primary-foreground ring-4 ring-emerald-300/40" : active ? "bg-cta text-cta-foreground ring-4 ring-cta/40 animate-pulse" : "bg-slate-300 text-slate-600"}`, children: done ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-6 w-6" }) : !unlocked ? /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-4 w-4" }) : i + 1 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: `w-full overflow-hidden transition-all ${unlocked ? "mint-card-shadow hover:-translate-y-1" : "opacity-70"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "flex flex-col gap-4 p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center justify-between ${isLeft ? "lg:flex-row-reverse" : ""}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `flex h-12 w-12 items-center justify-center rounded-2xl ${done ? "bg-primary text-primary-foreground" : unlocked ? "bg-mint-100 text-primary" : "bg-muted text-muted-foreground"}`, children: unlocked ? /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: done ? "default" : active ? "secondary" : "outline", className: done ? "bg-primary text-primary-foreground" : "", children: done ? "Completed" : active ? "Active" : "Locked" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg font-bold", children: m.label }),
              "tagline" in m && m.tagline && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-primary/80", children: m.tagline }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                "Mission ",
                i + 1,
                " · ",
                points,
                " points"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex ${isLeft ? "lg:justify-end" : "lg:justify-start"}`, children: unlocked ? /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: done ? "secondary" : "default", size: "sm", className: "w-full sm:w-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: m.to, className: "gap-1.5", children: done ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4" }),
              " Review"
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              "Start ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
            ] }) }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { disabled: true, size: "sm", variant: "secondary", className: "w-full gap-1.5 sm:w-auto", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-3.5 w-3.5" }),
              " Locked"
            ] }) })
          ] }) })
        ] }, m.id);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 rounded-2xl border border-primary/15 bg-mint-50/60 p-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-primary", children: missionsData.meta.curriculum }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-xs text-muted-foreground", children: [
        "Aligned to DSKP KSSR Mathematics Year 5 — Topics 7.1 Coordinates, 7.2 Ratio, 7.3 Proportion & 7.4 Problem Solving. Course ",
        missionsData.meta.course,
        "."
      ] })
    ] })
  ] });
}
const POINTS = [100, 150, 200, 300, 500];
export {
  HomePage as component
};
