import { j as jsxRuntimeExports } from "../_libs/react.mjs";
function PageHeader({
  eyebrow,
  title,
  description,
  icon,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
      icon && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground mint-card-shadow", children: icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-widest text-primary", children: eyebrow }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl", children: title }),
        description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 max-w-2xl text-sm text-muted-foreground sm:text-base", children: description })
      ] })
    ] }),
    children && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0", children })
  ] });
}
export {
  PageHeader as P
};
