import { useState } from "react";
import confetti from "canvas-confetti";
import { ChefHat, Users, Sparkles, RotateCcw, Trophy, CheckCircle2, X } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useProgress } from "@/lib/progress-context";
import missionsData from "@/data/missions.json";

const game = missionsData.finalChallenge.games.stage3;
const FACTOR = game.targetPax / game.basePax;

export function PestaRiaFeast() {
  const { markComplete } = useProgress();
  const [values, setValues] = useState<Record<string, string>>(
    Object.fromEntries(game.ingredients.map((i) => [i.key, ""])),
  );
  const [feedback, setFeedback] = useState<string | null>(null);
  const [won, setWon] = useState(false);

  const setVal = (key: string, v: string) => {
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
      (i) => Number(values[i.key]) === i.base * FACTOR,
    );
    if (allCorrect) {
      setWon(true);
      markComplete("final");
      blast();
    } else {
      setFeedback(game.hint);
    }
  };

  const reset = () => {
    setValues(Object.fromEntries(game.ingredients.map((i) => [i.key, ""])));
    setFeedback(null);
    setWon(false);
  };

  return (
    <>
      <Card className="overflow-hidden mint-card-shadow">
        <CardHeader>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-mint-100 text-primary">
              <ChefHat className="h-6 w-6" />
            </span>
            <div>
              <CardTitle className="text-xl">{game.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{game.standard}</p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-5">
          <div className="rounded-2xl border-2 border-cta/30 bg-cta/5 p-5">
            <Badge className="mb-2 bg-cta text-cta-foreground">Non-Routine · PL6</Badge>
            <p className="font-display text-base font-bold leading-snug">{game.scenario}</p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {/* Original recipe card */}
            <div className="rounded-2xl border border-border bg-card p-5 mint-card-shadow">
              <div className="mb-3 flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <p className="font-display font-bold">Original Recipe ({game.basePax} Pax)</p>
              </div>
              <ul className="space-y-3">
                {game.ingredients.map((i) => (
                  <li key={i.key} className="flex items-center justify-between rounded-xl bg-muted/50 px-4 py-3">
                    <span className="text-sm font-medium">{i.label}</span>
                    <span className={`rounded-lg px-3 py-1 font-display text-sm font-extrabold ${i.accent}`}>
                      {i.base} {i.unit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mega order form */}
            <div className="rounded-2xl border-2 border-cta/40 bg-cta/5 p-5">
              <div className="mb-3 flex items-center gap-2">
                <Users className="h-5 w-5 text-cta" />
                <p className="font-display font-bold">Mega Order Form ({game.targetPax} Pax)</p>
              </div>
              <div className="space-y-4">
                {game.ingredients.map((i) => (
                  <div key={i.key}>
                    <Label htmlFor={`feast-${i.key}`} className="text-sm font-medium">
                      Required {i.label.split(" (")[0]} ({i.unit})
                    </Label>
                    <Input
                      id={`feast-${i.key}`}
                      inputMode="numeric"
                      value={values[i.key]}
                      onChange={(e) => setVal(i.key, e.target.value)}
                      placeholder={`e.g. ${i.base} × ${FACTOR}`}
                      className="mt-1 font-display text-lg font-bold"
                      disabled={won}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {feedback && (
            <div className="animate-fade-in flex items-start gap-2 rounded-2xl border border-amber-300 bg-amber-50 p-4 text-sm font-medium text-amber-800">
              <ChefHat className="mt-0.5 h-5 w-5 shrink-0" />
              <p>{feedback}</p>
            </div>
          )}

          <div className="flex flex-wrap items-center gap-3">
            <Button
              type="button"
              onClick={verify}
              disabled={won}
              className="gap-2 bg-cta text-cta-foreground hover:bg-cta/90 cta-shadow"
            >
              <Sparkles className="h-4 w-4" /> Verify Catering Order
            </Button>
            <Button type="button" variant="ghost" onClick={reset} className="gap-2">
              <RotateCcw className="h-4 w-4" /> Reset
            </Button>
          </div>
        </CardContent>
      </Card>

      {won && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 p-4 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-md rounded-3xl border-2 border-cta/30 bg-card p-8 text-center mint-card-shadow">
            <button
              type="button"
              onClick={() => setWon(false)}
              className="absolute right-4 top-4 text-muted-foreground hover:text-foreground"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <span className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-3xl bg-cta/15 text-cta">
              <Trophy className="h-10 w-10" />
            </span>
            <Badge className="mb-3 gap-1.5 bg-cta text-cta-foreground">
              <Sparkles className="h-3.5 w-3.5" /> PL6 Mastery
            </Badge>
            <h3 className="font-display text-2xl font-extrabold">{game.successTitle}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{game.successBody}</p>
            <ul className="mt-5 space-y-2 text-left">
              {game.ingredients.map((i) => (
                <li key={i.key} className="flex items-center gap-2 rounded-xl bg-mint-100/60 px-4 py-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="font-medium">
                    {i.label.split(" (")[0]}: {i.base} × {FACTOR} = {i.base * FACTOR} {i.unit}
                  </span>
                </li>
              ))}
            </ul>
            <Button
              type="button"
              onClick={() => setWon(false)}
              className="mt-6 w-full bg-cta text-cta-foreground hover:bg-cta/90 cta-shadow"
            >
              Continue the Celebration 🎉
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
