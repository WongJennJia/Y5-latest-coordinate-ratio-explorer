import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PageHeader } from "./PageHeader-DEQrH5tk.mjs";
import { C as Card, b as CardHeader, c as CardTitle, a as CardContent } from "./card-CooUgIdt.mjs";
import { u as useProgress, B as Button, I as Input } from "./router-CB_-ibMA.mjs";
import { B as Badge } from "./badge-DCw9rMcX.mjs";
import { m as missionsData } from "./missions-CyskUf-I.mjs";
import { c as confetti } from "../_libs/canvas-confetti.mjs";
import { L as Label, S as Slider } from "./slider-BOa_ljLt.mjs";
import { L as Lock, x as PartyPopper, h as Sparkles, T as Trophy, j as ChefHat, y as CupSoda, z as MapPin, f as CircleCheck, D as Circle, F as DoorOpen, J as Beef, A as ArrowRight, m as RotateCcw, U as Users, X, n as Minus, o as Plus } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-slider.mjs";
import "../_libs/radix-ui__number.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/radix-ui__react-collection.mjs";
const game$1 = missionsData.finalChallenge.games.stage1;
const TARGET_X = game$1.reference.x + game$1.offsetRight;
const TARGET_Y = game$1.reference.y + game$1.offsetUp;
function GeraiSatayChallenge({ onSolved }) {
  const [pick, setPick] = reactExports.useState(null);
  const [feedback, setFeedback] = reactExports.useState(null);
  const [solved, setSolved] = reactExports.useState(false);
  const size = game$1.gridSize;
  const cols = Array.from({ length: size + 1 }, (_, i) => i);
  const rows = Array.from({ length: size + 1 }, (_, i) => size - i);
  const handleClick = (x, y) => {
    setPick({ x, y });
    if (x === TARGET_X && y === TARGET_Y) {
      setSolved(true);
      setFeedback({
        type: "success",
        text: game$1.successTemplate.replace("{x}", String(x)).replace("{y}", String(y)).replace("{dx}", String(game$1.offsetRight)).replace("{dy}", String(game$1.offsetUp))
      });
    } else {
      setFeedback({
        type: "error",
        text: `That's (${x}, ${y}). Count carefully from ${game$1.reference.label} (${game$1.reference.x}, ${game$1.reference.y}) — ${game$1.offsetRight} right, then ${game$1.offsetUp} up!`
      });
    }
  };
  const reset = () => {
    setPick(null);
    setFeedback(null);
    setSolved(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "overflow-hidden mint-card-shadow", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-11 w-11 items-center justify-center rounded-2xl bg-mint-100 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-6 w-6" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xl", children: game$1.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: game$1.standard })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "grid gap-6 lg:grid-cols-[auto_1fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-gradient-to-br from-mint-100 to-mint-100/40 p-3 mint-card-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "grid flex-1",
                style: { gridTemplateColumns: `repeat(${size + 1}, minmax(0, 1fr))` },
                children: cols.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-center text-[10px] font-bold text-primary/70", children: c }, c))
              }
            )
          ] }),
          rows.map((y) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-6 text-center text-[10px] font-bold text-primary/70", children: y }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "grid flex-1",
                style: { gridTemplateColumns: `repeat(${size + 1}, minmax(0, 1fr))` },
                children: cols.map((x) => {
                  const isOrigin = x === 0 && y === 0;
                  const isRef = x === game$1.reference.x && y === game$1.reference.y;
                  const isPick = pick?.x === x && pick?.y === y;
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => handleClick(x, y),
                      "aria-label": `Coordinate ${x}, ${y}`,
                      className: `relative m-[2px] flex aspect-square items-center justify-center rounded-md border text-[10px] transition-colors ${isRef ? "border-primary bg-primary/15" : "border-primary/15 bg-card hover:bg-cta/10"}`,
                      children: [
                        isOrigin && /* @__PURE__ */ jsxRuntimeExports.jsx(DoorOpen, { className: "h-3.5 w-3.5 text-primary" }),
                        isRef && /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5 text-primary" }),
                        isPick && !isRef && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Beef,
                          {
                            className: `h-4 w-4 ${isPick && solved ? "text-cta" : "text-amber-600"}`
                          }
                        )
                      ]
                    },
                    x
                  );
                })
              }
            )
          ] }, y))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex flex-wrap justify-center gap-3 text-[11px] text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DoorOpen, { className: "h-3.5 w-3.5 text-primary" }),
            " ",
            game$1.originLabel
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5 text-primary" }),
            " ",
            game$1.reference.label
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Beef, { className: "h-3.5 w-3.5 text-amber-600" }),
            " Gerai Satay"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border-2 border-primary/20 bg-mint-100/60 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-2 bg-primary text-primary-foreground", children: "Mission" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-base font-bold leading-snug", children: game$1.mission })
        ] }),
        feedback && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `animate-fade-in rounded-2xl border p-4 text-sm font-medium ${feedback.type === "success" ? "border-primary/40 bg-mint-100 text-primary" : "border-amber-300 bg-amber-50 text-amber-800"}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
              feedback.type === "success" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "mt-0.5 h-5 w-5 shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "mt-0.5 h-5 w-5 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: feedback.text })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
          solved ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              type: "button",
              onClick: onSolved,
              className: "gap-2 bg-cta text-cta-foreground hover:bg-cta/90 cta-shadow",
              children: [
                "Next Stage: Drink Stall ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Click the grid to place your Gerai Satay." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", variant: "ghost", onClick: reset, className: "gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "h-4 w-4" }),
            " Reset"
          ] })
        ] })
      ] })
    ] })
  ] });
}
const TARGET_SYRUP = 2;
const TARGET_MILK = 5;
const MAX_UNITS = 12;
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}
function StepperControl({
  label,
  sublabel,
  value,
  onChange,
  accentClass
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-4 mint-card-shadow", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-base font-bold", children: label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: sublabel })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `flex h-12 w-12 items-center justify-center rounded-2xl font-display text-xl font-extrabold ${accentClass}`, children: value })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          type: "button",
          size: "icon",
          variant: "secondary",
          className: "h-9 w-9 shrink-0 rounded-full",
          onClick: () => onChange(Math.max(0, value - 1)),
          "aria-label": `Decrease ${label}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-4 w-4" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Slider,
        {
          value: [value],
          min: 0,
          max: MAX_UNITS,
          step: 1,
          onValueChange: (v) => onChange(v[0]),
          className: "flex-1",
          "aria-label": label
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          type: "button",
          size: "icon",
          variant: "secondary",
          className: "h-9 w-9 shrink-0 rounded-full",
          onClick: () => onChange(Math.min(MAX_UNITS, value + 1)),
          "aria-label": `Increase ${label}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" })
        }
      )
    ] })
  ] });
}
function SirapBandungChallenge({ onSolved } = {}) {
  const { markComplete, isCompleted } = useProgress();
  const [syrup, setSyrup] = reactExports.useState(1);
  const [milk, setMilk] = reactExports.useState(1);
  const [mode, setMode] = reactExports.useState("part-part");
  const [feedback, setFeedback] = reactExports.useState(null);
  const [served, setServed] = reactExports.useState(isCompleted("final"));
  const total = syrup + milk;
  const milkRatio = total > 0 ? milk / total : 0.5;
  const fillPercent = Math.min(100, total / (MAX_UNITS * 2) * 100);
  const simplest = reactExports.useMemo(() => {
    if (syrup === 0 && milk === 0) return { s: 0, m: 0 };
    const d = gcd(syrup, milk) || 1;
    return { s: syrup / d, m: milk / d };
  }, [syrup, milk]);
  const ratioLabel = reactExports.useMemo(() => {
    switch (mode) {
      case "part-whole":
        return {
          title: "Part-to-Whole (Bahagian kepada Keseluruhan)",
          current: `Syrup : Total = ${syrup} : ${total}`,
          hint: "Compares one ingredient to the whole drink."
        };
      case "whole-part":
        return {
          title: "Whole-to-Part (Keseluruhan kepada Bahagian)",
          current: `Total : Milk = ${total} : ${milk}`,
          hint: "Compares the whole drink to one ingredient."
        };
      default:
        return {
          title: "Part-to-Part (Bahagian kepada Bahagian)",
          current: `Syrup : Milk = ${syrup} : ${milk}`,
          hint: "Compares one ingredient directly to the other."
        };
    }
  }, [mode, syrup, milk, total]);
  const handleServe = () => {
    const correct = syrup > 0 && milk > 0 && simplest.s === TARGET_SYRUP && simplest.m === TARGET_MILK;
    if (correct) {
      setServed(true);
      setFeedback({
        type: "success",
        text: "Sedap! Perfect Sirap Bandung — you nailed the golden 2 : 5 ratio! PL6 Achievement Badge unlocked!"
      });
      markComplete("final");
      onSolved?.();
      const burst = (x) => confetti({
        particleCount: 90,
        spread: 70,
        origin: { x, y: 0.6 },
        colors: ["#10B981", "#F97316", "#ec4899", "#ffffff"]
      });
      burst(0.3);
      setTimeout(() => burst(0.7), 200);
      setTimeout(() => confetti({ particleCount: 140, spread: 120, origin: { y: 0.5 } }), 400);
    } else if (simplest.s < TARGET_SYRUP * (simplest.m / TARGET_MILK)) {
      setFeedback({
        type: "error",
        text: "Hmm, too milky! Remember the golden ratio of 2 : 5. Try adding a little more rose syrup."
      });
    } else {
      setFeedback({
        type: "error",
        text: "Whoa, too sweet and rosy! Remember the golden ratio of 2 : 5. Try adjusting your ingredients."
      });
    }
  };
  const reset = () => {
    setSyrup(1);
    setMilk(1);
    setFeedback(null);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "overflow-hidden mint-card-shadow", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-11 w-11 items-center justify-center rounded-2xl bg-mint-100 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CupSoda, { className: "h-6 w-6" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xl", children: "Sirap Bandung Recipe Challenge" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
          "Mix Rose Syrup and Condensed Milk in the perfect ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "2 : 5" }),
          " ratio."
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "grid gap-6 lg:grid-cols-[1fr_auto]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          StepperControl,
          {
            label: "Rose Syrup (Sirap)",
            sublabel: "parts of sweet rose syrup",
            value: syrup,
            onChange: (v) => {
              setSyrup(v);
              setFeedback(null);
            },
            accentClass: "bg-pink-100 text-pink-600"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          StepperControl,
          {
            label: "Condensed Milk (Susu)",
            sublabel: "parts of creamy milk",
            value: milk,
            onChange: (v) => {
              setMilk(v);
              setFeedback(null);
            },
            accentClass: "bg-amber-100 text-amber-700"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: [
          ["part-part", "Part : Part"],
          ["part-whole", "Part : Whole"],
          ["whole-part", "Whole : Part"]
        ].map(([m, label]) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "button",
            size: "sm",
            variant: mode === m ? "default" : "outline",
            onClick: () => setMode(m),
            children: label
          },
          m
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border-2 border-primary/20 bg-mint-100/60 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-sm font-bold text-primary", children: ratioLabel.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-display text-2xl font-extrabold tracking-tight", children: ratioLabel.current }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: ratioLabel.hint }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between rounded-xl bg-card px-4 py-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-muted-foreground", children: "Simplest Form (Nisbah Termudah)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-xl font-extrabold text-cta", children: [
              simplest.s,
              " : ",
              simplest.m
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              type: "button",
              onClick: handleServe,
              className: "gap-2 bg-cta text-cta-foreground hover:bg-cta/90 cta-shadow",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }),
                " Serve Customer (Sajikan)"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", variant: "ghost", onClick: reset, className: "gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "h-4 w-4" }),
            " Reset"
          ] })
        ] }),
        feedback && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `animate-fade-in rounded-2xl border p-4 text-sm font-medium ${feedback.type === "success" ? "border-primary/40 bg-mint-100 text-primary" : "border-amber-300 bg-amber-50 text-amber-800"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                feedback.type === "success" ? /* @__PURE__ */ jsxRuntimeExports.jsx(PartyPopper, { className: "mt-0.5 h-5 w-5 shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CupSoda, { className: "mt-0.5 h-5 w-5 shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: feedback.text })
              ] }),
              feedback.type === "success" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "mt-3 gap-1.5 bg-cta text-cta-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
                " PL6 Achievement Badge"
              ] })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-end gap-3 lg:w-48", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-72 w-40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 overflow-hidden rounded-b-[2.5rem] rounded-t-2xl border-4 border-foreground/15 bg-white/30 backdrop-blur-sm shadow-inner", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "absolute inset-x-0 bottom-0 transition-[height] duration-700 ease-out",
                style: {
                  height: `${fillPercent}%`,
                  background: syrup === 0 && milk === 0 ? "transparent" : syrup > 0 && milk === 0 ? "linear-gradient(to top, #9d174d 0%, #db2777 100%)" : milk > 0 && syrup === 0 ? "linear-gradient(to top, #fef08a 10%, #ffffff 100%)" : `linear-gradient(to top, #be185d 0%, #db2777 ${(1 - milkRatio) * 60}%, #fdf2f8 ${(1 - milkRatio) * 60 + 5}%, #ffffff 100%)`
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-0 h-2 bg-white/40" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-3 top-2 h-16 w-3 rounded-full bg-white/30 blur-[1px]" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-4 top-4 h-24 w-4 rounded-full bg-white/40 blur-[2px]" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-3 top-6 h-8 w-6 rounded-r-full border-4 border-l-0 border-foreground/15" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-4 top-14 h-20 w-8 rounded-l-full border-4 border-r-0 border-foreground/15" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-xs text-muted-foreground", children: [
          total,
          " units in jug",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: served ? "Served! 🎉" : "Mix & serve" })
        ] })
      ] })
    ] })
  ] });
}
const game = missionsData.finalChallenge.games.stage3;
const FACTOR = game.targetPax / game.basePax;
function PestaRiaFeast() {
  const { markComplete, addPoints } = useProgress();
  const [values, setValues] = reactExports.useState(
    Object.fromEntries(game.ingredients.map((i) => [i.key, ""]))
  );
  const [feedback, setFeedback] = reactExports.useState(null);
  const [won, setWon] = reactExports.useState(false);
  const setVal = (key, v) => {
    setValues((prev) => ({ ...prev, [key]: v.replace(/[^0-9]/g, "") }));
    setFeedback(null);
  };
  const blast = () => {
    const end = Date.now() + 900;
    const colors = ["#10B981", "#F97316", "#ec4899", "#ffffff"];
    (function frame() {
      confetti({ particleCount: 6, angle: 60, spread: 70, origin: { x: 0 }, colors });
      confetti({ particleCount: 6, angle: 120, spread: 70, origin: { x: 1 }, colors });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
    confetti({ particleCount: 160, spread: 120, origin: { y: 0.5 } });
  };
  const verify = () => {
    const allCorrect = game.ingredients.every(
      (i) => Number(values[i.key]) === i.base * FACTOR
    );
    if (allCorrect) {
      setWon(true);
      markComplete("final");
      addPoints(50);
      blast();
    } else {
      setFeedback(
        `💡 Chef's Secret: To perfectly scale up our recipe for a massive new group of unexpected guests, first find the scale factor ratio between the new crowd size (${game.targetPax} pax) and our standard recipe base (${game.basePax} pax). Then, apply that same multiplier to scale up each ingredient accordingly!`
      );
    }
  };
  const reset = () => {
    setValues(Object.fromEntries(game.ingredients.map((i) => [i.key, ""])));
    setFeedback(null);
    setWon(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "overflow-hidden mint-card-shadow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-11 w-11 items-center justify-center rounded-2xl bg-mint-100 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChefHat, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-xl", children: game.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: game.standard })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border-2 border-cta/30 bg-cta/5 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-2 bg-cta text-cta-foreground", children: "Non-Routine · PL6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-base font-bold leading-snug", children: game.scenario })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-5 mint-card-shadow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-5 w-5 text-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display font-bold", children: [
                "Original Recipe (",
                game.basePax,
                " Pax)"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: game.ingredients.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between rounded-xl bg-muted/50 px-4 py-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: i.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `rounded-lg px-3 py-1 font-display text-sm font-extrabold ${i.accent}`, children: [
                i.base,
                " ",
                i.unit
              ] })
            ] }, i.key)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border-2 border-cta/40 bg-cta/5 p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-5 w-5 text-cta" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display font-bold", children: [
                "Mega Order Form (",
                game.targetPax,
                " Pax)"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: game.ingredients.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: `feast-${i.key}`, className: "text-sm font-medium", children: [
                "Required ",
                i.label.split(" (")[0],
                " (",
                i.unit,
                ")"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: `feast-${i.key}`,
                  inputMode: "numeric",
                  value: values[i.key],
                  onChange: (e) => setVal(i.key, e.target.value),
                  placeholder: "e.g. 1000",
                  className: "mt-1 font-display text-lg font-bold",
                  disabled: won
                }
              )
            ] }, i.key)) })
          ] })
        ] }),
        feedback && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-fade-in flex items-start gap-2 rounded-2xl border border-amber-300 bg-amber-50 p-4 text-sm font-medium text-amber-800", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChefHat, { className: "mt-0.5 h-5 w-5 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: feedback })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              type: "button",
              onClick: verify,
              disabled: won,
              className: "gap-2 bg-cta text-cta-foreground hover:bg-cta/90 cta-shadow",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }),
                " Verify Catering Order"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", variant: "ghost", onClick: reset, className: "gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "h-4 w-4" }),
            " Reset"
          ] })
        ] })
      ] })
    ] }),
    won && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 p-4 backdrop-blur-sm animate-fade-in", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-md rounded-3xl border-2 border-cta/30 bg-card p-8 text-center mint-card-shadow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setWon(false),
          className: "absolute right-4 top-4 text-muted-foreground hover:text-foreground",
          "aria-label": "Close",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-3xl bg-cta/15 text-cta", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "h-10 w-10" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "mb-3 gap-1.5 bg-cta text-cta-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
        " PL6 Mastery"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-extrabold", children: game.successTitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: game.successBody }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-2 text-left", children: game.ingredients.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 rounded-xl bg-mint-100/60 px-4 py-2 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", children: [
          i.label.split(" (")[0],
          ": ",
          i.base,
          " × ",
          FACTOR,
          " = ",
          i.base * FACTOR,
          " ",
          i.unit
        ] })
      ] }, i.key)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          type: "button",
          onClick: () => setWon(false),
          className: "mt-6 w-full bg-cta text-cta-foreground hover:bg-cta/90 cta-shadow",
          children: "Continue the Celebration 🎉"
        }
      )
    ] }) })
  ] });
}
const ICONS = {
  MapPin,
  CupSoda,
  ChefHat
};
function FinalChallengePage() {
  const {
    isUnlocked
  } = useProgress();
  const unlocked = isUnlocked("final");
  const fc = missionsData.finalChallenge;
  const [currentActiveStage, setCurrentActiveStage] = reactExports.useState(1);
  if (!unlocked) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-md flex-col items-center gap-4 py-24 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-16 w-16 items-center justify-center rounded-2xl bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-7 w-7 text-muted-foreground" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold", children: "Carnival Locked" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Complete the Coordinates, Ratio and Proportion missions to unlock Pesta Ria Sekolah." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: "Back to Roadmap" }) })
    ] });
  }
  const advance = (to) => {
    setCurrentActiveStage(to);
    if (typeof window !== "undefined") {
      window.requestAnimationFrame(() => document.getElementById("active-stage")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      }));
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative mb-8 overflow-hidden rounded-3xl bg-gradient-to-br from-cta/15 to-mint-100 p-8 sm:p-10 mint-card-shadow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PartyPopper, { className: "absolute -right-4 -top-4 h-32 w-32 text-cta/20" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "mb-3 gap-1.5 bg-cta text-cta-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
        " The Carnival Tycoon Challenge"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-extrabold sm:text-4xl", children: fc.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-display text-lg text-primary", children: fc.subtitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-2xl text-foreground/70", children: fc.intro })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Carnival Stages", description: "Advance through three real-world stalls — one for each topic you mastered.", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "h-6 w-6" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 md:grid-cols-3", children: fc.stages.map((stage, i) => {
      const stageNum = i + 1;
      const Icon = ICONS[stage.icon] ?? MapPin;
      const isActive = currentActiveStage === stageNum;
      const isDone = currentActiveStage > stageNum;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: `flex h-full flex-col mint-card-shadow transition-colors ${isActive ? "border-cta ring-2 ring-cta/30" : isDone ? "border-primary/40" : "opacity-70"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `flex h-11 w-11 items-center justify-center rounded-2xl ${isActive ? "bg-cta/15 text-cta" : "bg-mint-100 text-primary"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-sm font-bold text-muted-foreground", children: [
              "Stage ",
              stageNum
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-lg", children: stage.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "w-fit border-primary/30 text-primary", children: stage.topic })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "flex flex-1 flex-col justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: stage.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex items-center gap-2 rounded-xl border-2 p-3 text-xs font-bold ${isDone ? "border-primary/40 bg-mint-100 text-primary" : isActive ? "border-cta/40 bg-cta/5 text-cta" : "border-dashed border-muted-foreground/30 text-muted-foreground"}`, children: isDone ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4" }),
            " Completed"
          ] }) : isActive ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }),
            " Playing now ↓"
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Circle, { className: "h-4 w-4" }),
            " Locked"
          ] }) })
        ] })
      ] }, stage.id);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "active-stage", className: "mt-10 scroll-mt-6", children: [
      currentActiveStage === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Stage 1 — Gerai Satay Setup", description: "Place the satay stall at the perfect spot on the carnival map.", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(GeraiSatayChallenge, { onSolved: () => advance(2) })
      ] }),
      currentActiveStage === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Stage 2 — Mix Sirap Bandung", description: "Run the carnival drink stall! Mix the perfect ratio and serve your customer.", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CupSoda, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SirapBandungChallenge, { onSolved: () => advance(3) })
      ] }),
      currentActiveStage === 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Stage 3 — Pesta Ria Feast", description: "A crowd of teachers arrived! Scale the recipe up with proportion for the win.", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ChefHat, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PestaRiaFeast, {})
      ] })
    ] })
  ] });
}
export {
  FinalChallengePage as component
};
