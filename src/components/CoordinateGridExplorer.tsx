import { useState } from "react";
import { MapPin, RotateCcw, Sparkles, ChevronDown, MoveHorizontal, MoveVertical } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type Point = { x: number; y: number };

const MAX = 5;
const VALUES = Array.from({ length: MAX + 1 }, (_, i) => i); // 0..5

export function CoordinateGridExplorer() {
  const [pointA, setPointA] = useState<Point | null>(null);
  const [pointB, setPointB] = useState<Point | null>(null);
  const [showSteps, setShowSteps] = useState(false);

  const handlePick = (x: number, y: number) => {
    if (!pointA) {
      setPointA({ x, y });
    } else if (!pointB) {
      if (x === pointA.x && y === pointA.y) return; // ignore same point
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
  const hDist = both ? Math.abs(pointB!.x - pointA!.x) : 0;
  const vDist = both ? Math.abs(pointB!.y - pointA!.y) : 0;

  const pct = (v: number) => `${(v / MAX) * 100}%`;

  return (
    <Card className="mint-card-shadow">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-primary" /> Coordinate Click Grid
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Click two points to plot <strong>Point A</strong> (blue) and <strong>Point B</strong>{" "}
          (orange), then read the distances. (LS 7.1.1 · PL1–PL3)
        </p>
      </CardHeader>
      <CardContent className="space-y-5">
        {/* Grid */}
        <div className="flex justify-center">
          <div className="flex w-full max-w-xl flex-col items-center md:max-w-2xl">
            <div className="flex w-full">
              {/* Y-axis labels */}
              <div className="mr-2 flex flex-col justify-between py-[2px] text-sm font-extrabold text-primary sm:text-base">
                {[...VALUES].reverse().map((v) => (
                  <span key={v} className="flex h-0 items-center">
                    {v}
                  </span>
                ))}
              </div>

              {/* Plot area */}
              <div className="relative aspect-square w-full rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-mint-50 to-mint-100/40 p-2">

                {/* grid lines */}
                <div className="absolute inset-1 grid" style={{ gridTemplateColumns: `repeat(${MAX}, 1fr)`, gridTemplateRows: `repeat(${MAX}, 1fr)` }}>
                  {Array.from({ length: MAX * MAX }).map((_, i) => (
                    <div key={i} className="border border-primary/10" />
                  ))}
                </div>

                {/* helper dashed lines */}
                {both && hDist > 0 && (
                  <div
                    className="absolute h-0 border-t-2 border-dashed border-cta/70"
                    style={{
                      left: pct(Math.min(pointA!.x, pointB!.x)),
                      width: pct(hDist),
                      bottom: pct(pointA!.y),
                      transform: "translateY(50%)",
                    }}
                  />
                )}
                {both && vDist > 0 && (
                  <div
                    className="absolute w-0 border-l-2 border-dashed border-primary/70"
                    style={{
                      left: pct(pointB!.x),
                      height: pct(vDist),
                      bottom: pct(Math.min(pointA!.y, pointB!.y)),
                      transform: "translateX(-50%)",
                    }}
                  />
                )}

                {/* intersection buttons */}
                {VALUES.map((y) =>
                  VALUES.map((x) => {
                    const isA = pointA?.x === x && pointA?.y === y;
                    const isB = pointB?.x === x && pointB?.y === y;
                    return (
                      <button
                        key={`${x}-${y}`}
                        type="button"
                        onClick={() => handlePick(x, y)}
                        aria-label={`Plot point ${x}, ${y}`}
                        className="absolute flex h-9 w-9 -translate-x-1/2 translate-y-1/2 items-center justify-center"
                        style={{ left: pct(x), bottom: pct(y) }}
                      >
                        <span
                          className={`flex h-6 w-6 items-center justify-center rounded-full border-2 transition-all ${
                            isA
                              ? "scale-125 border-blue-600 bg-blue-500 ring-4 ring-blue-400/40 animate-pulse"
                              : isB
                                ? "scale-125 border-cta bg-cta ring-4 ring-cta/30 animate-pulse"
                                : "border-primary/30 bg-card hover:scale-110 hover:border-primary"
                          }`}
                        />
                      </button>
                    );
                  }),
                )}
              </div>
            </div>
            {/* X-axis labels */}
            <div className="mt-2 flex w-full justify-between pl-7 text-sm font-extrabold text-primary sm:text-base">
              {VALUES.map((v) => (
                <span key={v}>{v}</span>
              ))}
            </div>
            <p className="mt-1 text-center text-[11px] text-muted-foreground">
              X-axis = horizontal · Y-axis = vertical
            </p>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4 text-xs">
          <span className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-blue-500" /> Point A{" "}
            {pointA ? `(${pointA.x}, ${pointA.y})` : "—"}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-cta" /> Point B{" "}
            {pointB ? `(${pointB.x}, ${pointB.y})` : "—"}
          </span>
        </div>

        {/* Metrics */}
        {both ? (
          <>
            <div className="animate-fade-in rounded-2xl border-2 border-primary/30 bg-mint-100 p-4 text-center text-sm font-bold text-primary">
              <Sparkles className="mr-1 inline h-4 w-4" /> Syabas! You found the distance!
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-cta/30 bg-cta/5 p-4">
                <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-cta">
                  <MoveHorizontal className="h-4 w-4" /> Horizontal Distance
                </p>
                <p className="font-display text-2xl font-extrabold">{hDist} units</p>
                <p className="text-xs text-muted-foreground">|{pointB!.x} − {pointA!.x}|</p>
              </div>
              <div className="rounded-2xl border border-primary/30 bg-primary/5 p-4">
                <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
                  <MoveVertical className="h-4 w-4" /> Vertical Distance
                </p>
                <p className="font-display text-2xl font-extrabold">{vDist} units</p>
                <p className="text-xs text-muted-foreground">|{pointB!.y} − {pointA!.y}|</p>
              </div>
            </div>

            {/* Justification card (PL3) */}
            <button
              type="button"
              onClick={() => setShowSteps((s) => !s)}
              className="flex w-full items-center justify-between rounded-2xl border border-border bg-card px-4 py-3 text-left text-sm font-semibold transition-colors hover:bg-muted"
            >
              <span>How did you get this answer? Click to show steps</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${showSteps ? "rotate-180" : ""}`} />
            </button>
            {showSteps && (
              <div className="animate-fade-in rounded-2xl bg-mint-50/60 p-4 text-sm leading-relaxed">
                First, we started at <Badge variant="outline" className="border-blue-400 text-blue-600">Point A ({pointA!.x}, {pointA!.y})</Badge>. We counted{" "}
                <strong>{hDist} steps</strong> horizontally, and then <strong>{vDist} steps</strong>{" "}
                vertically to reach <Badge variant="outline" className="border-cta text-cta">Point B ({pointB!.x}, {pointB!.y})</Badge>!
              </div>
            )}
          </>
        ) : (
          <p className="text-center text-sm text-muted-foreground">
            {pointA ? "Now click Point B to measure the distance." : "Click anywhere to place Point A."}
          </p>
        )}

        <div className="flex justify-center">
          <Button type="button" variant="ghost" onClick={reset} className="gap-2">
            <RotateCcw className="h-4 w-4" /> Reset Grid
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
