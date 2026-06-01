import { type ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  description,
  icon,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  icon?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-4">
        {icon && (
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground mint-card-shadow">
            {icon}
          </span>
        )}
        <div>
          {eyebrow && (
            <p className="text-xs font-bold uppercase tracking-widest text-primary">{eyebrow}</p>
          )}
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h1>
          {description && (
            <p className="mt-1.5 max-w-2xl text-sm text-muted-foreground sm:text-base">{description}</p>
          )}
        </div>
      </div>
      {children && <div className="shrink-0">{children}</div>}
    </div>
  );
}
