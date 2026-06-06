import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { M as MissionContent } from "./MissionContent-DRTAq_xp.mjs";
import { C as Card, b as CardHeader, c as CardTitle, a as CardContent } from "./card-CooUgIdt.mjs";
import { u as useProgress, B as Button } from "./router-CB_-ibMA.mjs";
import { B as Badge } from "./badge-DCw9rMcX.mjs";
import { m as missionsData } from "./missions-CyskUf-I.mjs";
import { S as Scale, j as ChefHat, k as Egg, l as Salad, m as RotateCcw, f as CircleCheck, n as Minus, o as Plus } from "../_libs/lucide-react.mjs";
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
const MAX = 10;
const target = missionsData.missions.find((m) => m.id === "ratio").learn.target;
const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
function simplify(a, b) {
  if (a === 0 && b === 0) return "0 : 0";
  const d = gcd(a, b) || 1;
  return `${a / d} : ${b / d}`;
}
function NasiLemakRatioMaster() {
  const { markComplete, isCompleted } = useProgress();
  const [eggs, setEggs] = reactExports.useState(2);
  const [cucumbers, setCucumbers] = reactExports.useState(3);
  const [status, setStatus] = reactExports.useState("idle");
  const done = isCompleted("ratio");
  const total = eggs + cucumbers;
  const clamp = (v) => Math.max(0, Math.min(MAX, v));
  const matchesTarget = eggs > 0 && cucumbers > 0 && simplify(eggs, cucumbers) === simplify(target.eggs, target.cucumbers);
  const validate = () => {
    if (matchesTarget) {
      setStatus("ok");
      markComplete("ratio");
    } else {
      setStatus("fail");
    }
  };
  const reset = () => {
    setEggs(2);
    setCucumbers(3);
    setStatus("idle");
  };
  const Counter = ({
    label,
    value,
    setValue,
    color,
    icon,
    badge
  }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border-2 border-border bg-card p-4 mint-card-shadow", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-2 font-display font-bold", children: [
        icon,
        " ",
        label
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", children: value })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex min-h-[72px] flex-wrap content-start gap-1.5 rounded-xl bg-muted/40 p-3", children: [
      Array.from({ length: value }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: `flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${color}`,
          children: badge
        },
        i
      )),
      value === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Empty plate" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          type: "button",
          variant: "outline",
          size: "icon",
          onClick: () => setValue(clamp(value - 1)),
          disabled: value <= 0,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-4 w-4" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-8 text-center font-display text-xl font-extrabold", children: value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          type: "button",
          variant: "outline",
          size: "icon",
          onClick: () => setValue(clamp(value + 1)),
          disabled: value >= MAX,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" })
        }
      )
    ] })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mint-card-shadow", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChefHat, { className: "h-5 w-5 text-primary" }),
        " Nasi Lemak Ingredient Ratio Master"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "School culinary lab — plate up the lauk and read every ratio form. (LS 7.2.1 · PL1–PL3)" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Counter,
          {
            label: "Plate A: Sambal Eggs (Telur Sambal)",
            value: eggs,
            setValue: (v) => {
              setEggs(v);
              setStatus("idle");
            },
            color: "bg-amber-100 text-amber-700",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Egg, { className: "h-4 w-4 text-amber-600" }),
            badge: "🥚"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Counter,
          {
            label: "Plate B: Cucumber Slices (Timun)",
            value: cucumbers,
            setValue: (v) => {
              setCucumbers(v);
              setStatus("idle");
            },
            color: "bg-emerald-100 text-emerald-700",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Salad, { className: "h-4 w-4 text-emerald-600" }),
            badge: "🥒"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-primary/20 bg-mint-50/60 p-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "1. Part-to-Part" }),
          " (Nisbah Bahagian ke Bahagian): Eggs to Cucumbers =",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-extrabold text-primary", children: [
            eggs,
            " : ",
            cucumbers
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-primary/20 bg-mint-50/60 p-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "2. Part-to-Whole" }),
          " (Nisbah Bahagian ke Keseluruhan): Eggs to Total =",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-extrabold text-primary", children: [
            eggs,
            " : ",
            total
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-primary/20 bg-mint-50/60 p-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "3. Whole-to-Part" }),
          " (Nisbah Keseluruhan ke Bahagian): Total to Cucumbers =",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-extrabold text-primary", children: [
            total,
            " : ",
            cucumbers
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border-2 border-cta/30 bg-cta/5 p-4 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wide text-cta", children: "Simplest Form (Nisbah Termudah)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl font-extrabold", children: simplify(eggs, cucumbers) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-muted/40 p-4 text-center text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-3 text-muted-foreground", children: [
          "Target recipe ratio (Eggs : Cucumbers) =",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: simplify(target.eggs, target.cucumbers) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              onClick: validate,
              className: "bg-primary text-primary-foreground hover:bg-primary/90",
              children: "Validate Recipe"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", variant: "ghost", onClick: reset, className: "gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "h-4 w-4" }),
            " Reset"
          ] })
        ] }),
        status === "ok" && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "animate-fade-in mt-3 flex items-center justify-center gap-1.5 font-semibold text-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4" }),
          " Perfect ratio! Mission marked complete."
        ] }),
        status === "fail" && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Adjust the plates until the simplest form matches the target ratio." }),
        done && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "mt-3 gap-1 bg-primary text-primary-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5" }),
          " Completed"
        ] })
      ] })
    ] })
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-5xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MissionContent, { missionId: "ratio", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Scale, { className: "h-6 w-6" }), nextTo: "/proportion", learnTool: /* @__PURE__ */ jsxRuntimeExports.jsx(NasiLemakRatioMaster, {}) }) });
export {
  SplitComponent as component
};
