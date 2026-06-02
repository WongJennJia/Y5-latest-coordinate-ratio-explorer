import { useState } from "react";
import { MapPin, DoorOpen, Beef, Sparkles, RotateCcw, ArrowRight } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import missionsData from "@/data/missions.json";

const game = missionsData.finalChallenge.games.stage1;

const TARGET_X = game.reference.x + game.offsetRight;
const TARGET_Y = game.reference.y + game.offsetUp;

export function GeraiSatayChallenge({ onSolved }: { onSolved: () => void }) {
  const [pick, setPick] = useState<{ x: number; y: number } | null>(null);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [solved, setSolved] = useState(false);

  const size = game.gridSize; // 0..size (inclusive)
  const cols = Array.from({ length: size + 1 }, (_, i) => i);
  const rows = Array.from({ length: size + 1 }, (_, i) => size - i); // top = highest y

  const handleClick = (x: number, y: number) => {
    setPick({ x, y });
    if (x === TARGET_X && y === TARGET_Y) {
      setSolved(true);
      setFeedback({
        type: "success",
        text: game.successTemplate
          .replace("{x}", String(x))
          .replace("{y}", String(y))
          .replace("{dx}", String(game.offsetRight))
          .replace("{dy}", String(game.offsetUp)),
      });
    } else {
      setFeedback({
        type: "error",
        text: `That's (${x}, ${y}). Count carefully from ${game.reference.label} (${game.reference.x}, ${game.reference.y}) — ${game.offsetRight} right, then ${game.offsetUp} up!`,
      });
    }
  };

  const reset = () => {
    setPick(null);
    setFeedback(null);
    setSolved(false);
  };

  return (
    <Card className="overflow-hidden mint-card-shadow">
      <CardHeader>
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-mint-100 text-primary">
            <MapPin className="h-6 w-6" />
          </span>
          <div>
            <CardTitle className="text-xl">{game.title}</CardTitle>
            <p className="text-sm text-muted-foreground">{game.standard}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="grid gap-6 lg:grid-cols-[auto_1fr]">
        {/* Grid */}
        <div className="flex flex-col items-center">
          <div className="rounded-2xl bg-gradient-to-br from-mint-100 to-mint-100/40 p-3 mint-card-shadow">
            <div className="flex">
              <div className="w-6" />
              <div
                className="grid flex-1"
                style={{ gridTemplateColumns: `repeat(${size + 1}, minmax(0, 1fr))` }}
              >
                {cols.map((c) => (
                  <span key={c} className="text-center text-[10px] font-bold text-primary/70">
                    {c}
                  </span>
                ))}
              </div>
            </div>
            {rows.map((y) => (
              <div key={y} className="flex items-center">
                <span className="w-6 text-center text-[10px] font-bold text-primary/70">{y}</span>
                <div
                  className="grid flex-1"
                  style={{ gridTemplateColumns: `repeat(${size + 1}, minmax(0, 1fr))` }}
                >
                  {cols.map((x) => {
                    const isOrigin = x === 0 && y === 0;
                    const isRef = x === game.reference.x && y === game.reference.y;
                    const isPick = pick?.x === x && pick?.y === y;
                    return (
                      <button
                        key={x}
                        type="button"
                        onClick={() => handleClick(x, y)}
                        aria-label={`Coordinate ${x}, ${y}`}
                        className={`relative m-[2px] flex aspect-square items-center justify-center rounded-md border text-[10px] transition-colors ${
                          isRef
                            ? "border-primary bg-primary/15"
                            : "border-primary/15 bg-card hover:bg-cta/10"
                        }`}
                      >
                        {isOrigin && <DoorOpen className="h-3.5 w-3.5 text-primary" />}
                        {isRef && <MapPin className="h-3.5 w-3.5 text-primary" />}
                        {isPick && !isRef && (
                          <Beef
                            className={`h-4 w-4 ${
                              isPick && solved ? "text-cta" : "text-amber-600"
                            }`}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap justify-center gap-3 text-[11px] text-muted-foreground">
            <span className="flex items-center gap-1"><DoorOpen className="h-3.5 w-3.5 text-primary" /> {game.originLabel}</span>
            <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5 text-primary" /> {game.reference.label}</span>
            <span className="flex items-center gap-1"><Beef className="h-3.5 w-3.5 text-amber-600" /> Gerai Satay</span>
          </div>
        </div>

        {/* Mission */}
        <div className="space-y-4">
          <div className="rounded-2xl border-2 border-primary/20 bg-mint-100/60 p-5">
            <Badge className="mb-2 bg-primary text-primary-foreground">Mission</Badge>
            <p className="font-display text-base font-bold leading-snug">{game.mission}</p>
          </div>

          {feedback && (
            <div
              className={`animate-fade-in rounded-2xl border p-4 text-sm font-medium ${
                feedback.type === "success"
                  ? "border-primary/40 bg-mint-100 text-primary"
                  : "border-amber-300 bg-amber-50 text-amber-800"
              }`}
            >
              <div className="flex items-start gap-2">
                {feedback.type === "success" ? (
                  <Sparkles className="mt-0.5 h-5 w-5 shrink-0" />
                ) : (
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0" />
                )}
                <p>{feedback.text}</p>
              </div>
            </div>
          )}

          <div className="flex flex-wrap items-center gap-3">
            {solved ? (
              <Button
                type="button"
                onClick={onSolved}
                className="gap-2 bg-cta text-cta-foreground hover:bg-cta/90 cta-shadow"
              >
                Next Stage: Drink Stall <ArrowRight className="h-4 w-4" />
              </Button>
            ) : (
              <p className="text-sm text-muted-foreground">Click the grid to place your Gerai Satay.</p>
            )}
            <Button type="button" variant="ghost" onClick={reset} className="gap-2">
              <RotateCcw className="h-4 w-4" /> Reset
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
