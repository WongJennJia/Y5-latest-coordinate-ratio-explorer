import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { M as MissionContent } from "./MissionContent-DRTAq_xp.mjs";
import { C as Card, b as CardHeader, c as CardTitle, a as CardContent } from "./card-CooUgIdt.mjs";
import { u as useProgress, I as Input, B as Button } from "./router-CB_-ibMA.mjs";
import { L as Label, S as Slider } from "./slider-BOa_ljLt.mjs";
import { B as Badge } from "./badge-DCw9rMcX.mjs";
import { m as missionsData } from "./missions-CyskUf-I.mjs";
import { P as Percent, p as Palette, q as Tag, r as CircleQuestionMark, f as CircleCheck, m as RotateCcw, A as ArrowRight } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-slider.mjs";
import "../_libs/radix-ui__number.mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
const cfg = missionsData.missions.find((m) => m.id === "proportion").learn.scaler;
function BatikDyeScaler() {
  const { markComplete, isCompleted } = useProgress();
  const done = isCompleted("proportion");
  const [unit, setUnit] = reactExports.useState("");
  const [final, setFinal] = reactExports.useState("");
  const [sliderMeters, setSliderMeters] = reactExports.useState(cfg.refMeters);
  const unitCorrect = Number(unit) === cfg.unitPrice;
  const finalCorrect = unitCorrect && Number(final) === cfg.finalPrice;
  reactExports.useEffect(() => {
    if (finalCorrect && !done) markComplete("proportion");
  }, [finalCorrect, done, markComplete]);
  const reset = () => {
    setUnit("");
    setFinal("");
    setSliderMeters(cfg.refMeters);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mint-card-shadow", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Palette, { className: "h-5 w-5 text-primary" }),
        " Kampung Batik Dye Scaler"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "A traditional Batik workshop — use the unitary method to find the price. (LS 7.3.1 · PL2–PL3)" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border-2 border-primary/25 bg-mint-50/60 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-3 bg-primary text-primary-foreground", children: "The Standard" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 flex items-center gap-1.5 text-2xl", children: Array.from({ length: cfg.refMeters }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { title: "Batik roll", children: "🧵" }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
              cfg.refMeters,
              " meters"
            ] }),
            " of Batik fabric costs"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 inline-flex items-center gap-1.5 rounded-lg bg-primary/10 px-3 py-1 font-display text-lg font-extrabold text-primary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "h-4 w-4" }),
            " RM ",
            cfg.refPrice
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border-2 border-cta/30 bg-cta/5 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-3 bg-cta text-cta-foreground", children: "The Target Query" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleQuestionMark, { className: "mt-0.5 h-5 w-5 shrink-0 text-cta" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-medium", children: [
              '"How much do ',
              /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
                cfg.queryMeters,
                " meters"
              ] }),
              ' of this same Batik fabric cost?"'
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2 font-display font-bold", children: "Step 1 — Find the cost of 1 meter (Unitary Method)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Cost of 1 meter = RM ",
            cfg.refPrice,
            " ÷ ",
            cfg.refMeters,
            " = RM"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              inputMode: "numeric",
              value: unit,
              onChange: (e) => setUnit(e.target.value.replace(/[^0-9]/g, "")),
              className: "w-24 font-display font-bold",
              placeholder: "?"
            }
          ),
          unitCorrect && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-primary" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `rounded-2xl border p-4 transition-opacity ${unitCorrect ? "border-border bg-card" : "border-dashed border-border bg-muted/30 opacity-60"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-2 font-display font-bold", children: [
              "Step 2 — Scale up to ",
              cfg.queryMeters,
              " meters"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "Cost of ",
                cfg.queryMeters,
                " meters = RM ",
                cfg.unitPrice,
                " × ",
                cfg.queryMeters,
                " = RM"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  inputMode: "numeric",
                  value: final,
                  onChange: (e) => setFinal(e.target.value.replace(/[^0-9]/g, "")),
                  disabled: !unitCorrect,
                  className: "w-24 font-display font-bold",
                  placeholder: "?"
                }
              ),
              finalCorrect && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-primary" })
            ] })
          ]
        }
      ),
      finalCorrect && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-fade-in rounded-2xl border-2 border-primary/30 bg-mint-100 p-4 text-center font-semibold text-primary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mr-1.5 inline h-5 w-5" }),
        "Betul! ",
        cfg.queryMeters,
        " meters cost RM ",
        cfg.finalPrice,
        ". Mission complete!"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-muted/40 p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "font-display font-bold", children: "Drag to explore proportion" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-lg bg-cta px-3 py-1 font-display text-lg font-extrabold text-cta-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "h-4 w-4" }),
            " RM ",
            sliderMeters * cfg.unitPrice
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Slider,
          {
            value: [sliderMeters],
            onValueChange: (v) => setSliderMeters(v[0]),
            min: 1,
            max: 10,
            step: 1
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-center text-sm text-muted-foreground", children: [
          sliderMeters,
          " meter",
          sliderMeters > 1 ? "s" : "",
          " × RM ",
          cfg.unitPrice,
          " = RM",
          " ",
          sliderMeters * cfg.unitPrice
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", variant: "ghost", onClick: reset, className: "gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "h-4 w-4" }),
          " Reset"
        ] }),
        done && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "gap-1 bg-primary text-primary-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5" }),
          " Completed ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
        ] })
      ] })
    ] })
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-5xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MissionContent, { missionId: "proportion", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Percent, { className: "h-6 w-6" }), nextTo: "/final-challenge", learnTool: /* @__PURE__ */ jsxRuntimeExports.jsx(BatikDyeScaler, {}) }) });
export {
  SplitComponent as component
};
