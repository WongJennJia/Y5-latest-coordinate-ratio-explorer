import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { M as MissionContent } from "./MissionContent-DRTAq_xp.mjs";
import { C as Card, b as CardHeader, c as CardTitle, a as CardContent } from "./card-CooUgIdt.mjs";
import { B as Button } from "./router-CB_-ibMA.mjs";
import { B as Badge } from "./badge-DCw9rMcX.mjs";
import { G as Grid3x3, z as MapPin, h as Sparkles, K as MoveHorizontal, N as MoveVertical, O as ChevronDown, m as RotateCcw } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-tabs.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-roving-focus.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "./ResponsiveIframe-TooxUA0R.mjs";
import "./PageHeader-DEQrH5tk.mjs";
import "./missions-CyskUf-I.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-separator.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
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
const MAX = 5;
const VALUES = Array.from({ length: MAX + 1 }, (_, i) => i);
function CoordinateGridExplorer() {
  const [pointA, setPointA] = reactExports.useState(null);
  const [pointB, setPointB] = reactExports.useState(null);
  const [showSteps, setShowSteps] = reactExports.useState(false);
  const handlePick = (x, y) => {
    if (!pointA) {
      setPointA({ x, y });
    } else if (!pointB) {
      if (x === pointA.x && y === pointA.y) return;
      setPointB({ x, y });
    } else {
      setPointA({ x, y });
      setPointB(null);
    }
  };
  const reset = () => {
    setPointA(null);
    setPointB(null);
    setShowSteps(false);
  };
  const both = pointA && pointB;
  const hDist = both ? Math.abs(pointB.x - pointA.x) : 0;
  const vDist = both ? Math.abs(pointB.y - pointA.y) : 0;
  const pct = (v) => `${v / MAX * 100}%`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mint-card-shadow", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5 text-primary" }),
        " Coordinate Click Grid"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
        "Click two points to plot ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Point A" }),
        " (blue) and ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Point B" }),
        " ",
        "(orange), then read the distances. (LS 7.1.1 · PL1–PL3)"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full max-w-xl flex-col items-center md:max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mr-2 flex flex-col justify-between py-[2px] text-sm font-extrabold text-primary sm:text-base", children: [...VALUES].reverse().map((v) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-0 items-center", children: v }, v)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-square w-full rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-mint-50 to-mint-100/40 p-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-1 grid", style: { gridTemplateColumns: `repeat(${MAX}, 1fr)`, gridTemplateRows: `repeat(${MAX}, 1fr)` }, children: Array.from({ length: MAX * MAX }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-primary/10" }, i)) }),
            both && hDist > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute h-0 border-t-2 border-dashed border-cta/70",
                style: {
                  left: pct(Math.min(pointA.x, pointB.x)),
                  width: pct(hDist),
                  bottom: pct(pointA.y),
                  transform: "translateY(50%)"
                }
              }
            ),
            both && vDist > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute w-0 border-l-2 border-dashed border-primary/70",
                style: {
                  left: pct(pointB.x),
                  height: pct(vDist),
                  bottom: pct(Math.min(pointA.y, pointB.y)),
                  transform: "translateX(-50%)"
                }
              }
            ),
            VALUES.map(
              (y) => VALUES.map((x) => {
                const isA = pointA?.x === x && pointA?.y === y;
                const isB = pointB?.x === x && pointB?.y === y;
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => handlePick(x, y),
                    "aria-label": `Plot point ${x}, ${y}`,
                    className: "absolute flex h-9 w-9 -translate-x-1/2 translate-y-1/2 items-center justify-center",
                    style: { left: pct(x), bottom: pct(y) },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: `flex h-6 w-6 items-center justify-center rounded-full border-2 transition-all ${isA ? "scale-125 border-blue-600 bg-blue-500 ring-4 ring-blue-400/40 animate-pulse" : isB ? "scale-125 border-cta bg-cta ring-4 ring-cta/30 animate-pulse" : "border-primary/30 bg-card hover:scale-110 hover:border-primary"}`
                      }
                    )
                  },
                  `${x}-${y}`
                );
              })
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 flex w-full justify-between pl-7 text-sm font-extrabold text-primary sm:text-base", children: VALUES.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: v }, v)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-center text-[11px] text-muted-foreground", children: "X-axis = horizontal · Y-axis = vertical" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-4 text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-3 rounded-full bg-blue-500" }),
          " Point A",
          " ",
          pointA ? `(${pointA.x}, ${pointA.y})` : "—"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-3 rounded-full bg-cta" }),
          " Point B",
          " ",
          pointB ? `(${pointB.x}, ${pointB.y})` : "—"
        ] })
      ] }),
      both ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-fade-in rounded-2xl border-2 border-primary/30 bg-mint-100 p-4 text-center text-sm font-bold text-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "mr-1 inline h-4 w-4" }),
          " Syabas! You found the distance!"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-cta/30 bg-cta/5 p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-cta", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MoveHorizontal, { className: "h-4 w-4" }),
              " Horizontal Distance"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-2xl font-extrabold", children: [
              hDist,
              " units"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              "|",
              pointB.x,
              " − ",
              pointA.x,
              "|"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-primary/30 bg-primary/5 p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-primary", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MoveVertical, { className: "h-4 w-4" }),
              " Vertical Distance"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-2xl font-extrabold", children: [
              vDist,
              " units"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              "|",
              pointB.y,
              " − ",
              pointA.y,
              "|"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setShowSteps((s) => !s),
            className: "flex w-full items-center justify-between rounded-2xl border border-border bg-card px-4 py-3 text-left text-sm font-semibold transition-colors hover:bg-muted",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "How did you get this answer? Click to show steps" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `h-4 w-4 transition-transform ${showSteps ? "rotate-180" : ""}` })
            ]
          }
        ),
        showSteps && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-fade-in rounded-2xl bg-mint-50/60 p-4 text-sm leading-relaxed", children: [
          "First, we started at ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "border-blue-400 text-blue-600", children: [
            "Point A (",
            pointA.x,
            ", ",
            pointA.y,
            ")"
          ] }),
          ". We counted",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
            hDist,
            " steps"
          ] }),
          " horizontally, and then ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
            vDist,
            " steps"
          ] }),
          " ",
          "vertically to reach ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "border-cta text-cta", children: [
            "Point B (",
            pointB.x,
            ", ",
            pointB.y,
            ")"
          ] }),
          "!"
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-sm text-muted-foreground", children: pointA ? "Now click Point B to measure the distance." : "Click anywhere to place Point A." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", variant: "ghost", onClick: reset, className: "gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "h-4 w-4" }),
        " Reset Grid"
      ] }) })
    ] })
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-5xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MissionContent, { missionId: "coordinates", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Grid3x3, { className: "h-6 w-6" }), nextTo: "/ratio", learnTool: /* @__PURE__ */ jsxRuntimeExports.jsx(CoordinateGridExplorer, {}) }) });
export {
  SplitComponent as component
};
