export function ResponsiveIframe({
  src,
  title,
  className = "",
  iframeKey,
}: {
  src: string;
  title: string;
  className?: string;
  iframeKey?: string;
}) {
  return (
    <div
      className={`aspect-video w-full overflow-hidden rounded-2xl border bg-muted ${className}`}
    >
      <iframe
        key={iframeKey}
        src={src}
        title={title}
        className="h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
