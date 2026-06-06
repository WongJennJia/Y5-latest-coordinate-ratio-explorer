import { j as jsxRuntimeExports } from "../_libs/react.mjs";
function ResponsiveIframe({
  src,
  title,
  className = "",
  iframeKey
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `aspect-video w-full overflow-hidden rounded-2xl border bg-muted ${className}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "iframe",
        {
          src,
          title,
          className: "h-full w-full",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen",
          allowFullScreen: true,
          loading: "lazy"
        },
        iframeKey
      )
    }
  );
}
export {
  ResponsiveIframe as R
};
