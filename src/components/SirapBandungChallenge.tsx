import { useMemo, useState } from "react";
import confetti from "canvas-confetti";
import { Minus, Plus, CupSoda, Sparkles, RotateCcw, PartyPopper } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { useProgress } from "@/lib/progress-context";

const TARGET_SYRUP = 2;
const TARGET_MILK = 5;
const MAX_UNITS = 12;

type RatioMode = "part-part" | "part-whole" | "whole-part";

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

function StepperControl({
  label,
  sublabel,
  value,
  onChange,
  accentClass,
}: {
  label: string;
  sublabel: string;
  value: number;
  onChange: (v: number) => void;
  accentClass: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 mint-card-shadow">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <p className="font-display text-base font-bold">{label}</p>
          <p className="text-xs text-muted-foreground">{sublabel}</p>
        </div>
        <span className={`flex h-12 w-12 items-center justify-center rounded-2xl font-display text-xl font-extrabold ${accentClass}`}>
          {value}
        </span>
      </div>
      <div className="flex items-center gap-3">
        <Button
          type="button"
          size="icon"
          variant="secondary"
          className="h-9 w-9 shrink-0 rounded-full"
          onClick={() => onChange(Math.max(0, value - 1))}
          aria-label={`Decrease ${label}`}
        >
          <Minus className="h-4 w-4" />
        </Button>
        <Slider
          value={[value]}
          min={0}
          max={MAX_UNITS}
          step={1}
          onValueChange={(v) => onChange(v[0])}
          className="flex-1"
          aria-label={label}
        />
        <Button
          type="button"
          size="icon"
          variant="secondary"
          className="h-9 w-9 shrink-0 rounded-full"
          onClick={() => onChange(Math.min(MAX_UNITS, value + 1))}
          aria-label={`Increase ${label}`}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

export function SirapBandungChallenge({ onSolved }: { onSolved?: () => void } = {}) {
  const { markComplete, isCompleted } = useProgress();
  const [syrup, setSyrup] = useState(1);
  const [milk, setMilk] = useState(1);
  const [mode, setMode] = useState<RatioMode>("part-part");
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [served, setServed] = useState(isCompleted("final"));

  const total = syrup + milk;
  const milkRatio = total > 0 ? milk / total : 0.5;
  const fillPercent = Math.min(100, (total / (MAX_UNITS * 2)) * 100);

  const simplest = useMemo(() => {
    if (syrup === 0 && milk === 0) return { s: 0, m: 0 };
    const d = gcd(syrup, milk) || 1;
    return { s: syrup / d, m: milk / d };
  }, [syrup, milk]);

  const ratioLabel = useMemo(() => {
    switch (mode) {
      case "part-whole":
        return {
          title: "Part-to-Whole (Bahagian kepada Keseluruhan)",
          current: `Syrup : Total = ${syrup} : ${total}`,
          hint: "Compares one ingredient to the whole drink.",
        };
      case "whole-part":
        return {
          title: "Whole-to-Part (Keseluruhan kepada Bahagian)",
          current: `Total : Milk = ${total} : ${milk}`,
          hint: "Compares the whole drink to one ingredient.",
        };
      default:
        return {
          title: "Part-to-Part (Bahagian kepada Bahagian)",
          current: `Syrup : Milk = ${syrup} : ${milk}`,
          hint: "Compares one ingredient directly to the other.",
        };
    }
  }, [mode, syrup, milk, total]);

  const handleServe = () => {
    const correct = syrup > 0 && milk > 0 && simplest.s === TARGET_SYRUP && simplest.m === TARGET_MILK;
    if (correct) {
      setServed(true);
      setFeedback({
        type: "success",
        text: "Sedap! Perfect Sirap Bandung — you nailed the golden 2 : 5 ratio! PL6 Achievement Badge unlocked!",
      });
      markComplete("final");
      onSolved?.();
      const burst = (x: number) =>
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { x, y: 0.6 },
          colors: ["#10B981", "#F97316", "#ec4899", "#ffffff"],
        });
      burst(0.3);
      setTimeout(() => burst(0.7), 200);
      setTimeout(() => confetti({ particleCount: 140, spread: 120, origin: { y: 0.5 } }), 400);
    } else if (simplest.s < TARGET_SYRUP * (simplest.m / TARGET_MILK)) {
      setFeedback({
        type: "error",
        text: "Hmm, too milky! Remember the golden ratio of 2 : 5. Try adding a little more rose syrup.",
      });
    } else {
      setFeedback({
        type: "error",
        text: "Whoa, too sweet and rosy! Remember the golden ratio of 2 : 5. Try adjusting your ingredients.",
      });
    }
  };

  const reset = () => {
    setSyrup(1);
    setMilk(1);
    setFeedback(null);
  };

  return (
    <Card className="overflow-hidden mint-card-shadow">
      <CardHeader>
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-mint-100 text-primary">
            <CupSoda className="h-6 w-6" />
          </span>
          <div>
            <CardTitle className="text-xl">Sirap Bandung Recipe Challenge</CardTitle>
            <p className="text-sm text-muted-foreground">
              Mix Rose Syrup and Condensed Milk in the perfect <strong>2 : 5</strong> ratio.
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="grid gap-6 lg:grid-cols-[1fr_auto]">
        {/* Left: controls + ratio displays */}
        <div className="space-y-4">
          <StepperControl
            label="Rose Syrup (Sirap)"
            sublabel="parts of sweet rose syrup"
            value={syrup}
            onChange={(v) => {
              setSyrup(v);
              setFeedback(null);
            }}
            accentClass="bg-pink-100 text-pink-600"
          />
          <StepperControl
            label="Condensed Milk (Susu)"
            sublabel="parts of creamy milk"
            value={milk}
            onChange={(v) => {
              setMilk(v);
              setFeedback(null);
            }}
            accentClass="bg-amber-100 text-amber-700"
          />

          {/* Ratio mode toggle */}
          <div className="flex flex-wrap gap-2">
            {([
              ["part-part", "Part : Part"],
              ["part-whole", "Part : Whole"],
              ["whole-part", "Whole : Part"],
            ] as [RatioMode, string][]).map(([m, label]) => (
              <Button
                key={m}
                type="button"
                size="sm"
                variant={mode === m ? "default" : "outline"}
                onClick={() => setMode(m)}
              >
                {label}
              </Button>
            ))}
          </div>

          {/* Live ratio card */}
          <div className="rounded-2xl border-2 border-primary/20 bg-mint-100/60 p-5">
            <p className="font-display text-sm font-bold text-primary">{ratioLabel.title}</p>
            <p className="mt-2 font-display text-2xl font-extrabold tracking-tight">{ratioLabel.current}</p>
            <p className="mt-1 text-xs text-muted-foreground">{ratioLabel.hint}</p>
            <div className="mt-4 flex items-center justify-between rounded-xl bg-card px-4 py-3">
              <span className="text-sm font-medium text-muted-foreground">Simplest Form (Nisbah Termudah)</span>
              <span className="font-display text-xl font-extrabold text-cta">
                {simplest.s} : {simplest.m}
              </span>
            </div>
          </div>

          {/* CTA + feedback */}
          <div className="flex flex-wrap items-center gap-3">
            <Button
              type="button"
              onClick={handleServe}
              className="gap-2 bg-cta text-cta-foreground hover:bg-cta/90 cta-shadow"
            >
              <Sparkles className="h-4 w-4" /> Serve Customer (Sajikan)
            </Button>
            <Button type="button" variant="ghost" onClick={reset} className="gap-2">
              <RotateCcw className="h-4 w-4" /> Reset
            </Button>
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
                  <PartyPopper className="mt-0.5 h-5 w-5 shrink-0" />
                ) : (
                  <CupSoda className="mt-0.5 h-5 w-5 shrink-0" />
                )}
                <p>{feedback.text}</p>
              </div>
              {feedback.type === "success" && (
                <Badge className="mt-3 gap-1.5 bg-cta text-cta-foreground">
                  <Sparkles className="h-3.5 w-3.5" /> PL6 Achievement Badge
                </Badge>
              )}
            </div>
          )}
        </div>

        {/* Right: animated jug */}
        <div className="flex flex-col items-center justify-end gap-3 lg:w-48">
          <div className="relative h-72 w-40">
            {/* Jug body */}
            <div className="absolute inset-0 overflow-hidden rounded-b-[2.5rem] rounded-t-2xl border-4 border-foreground/15 bg-white/30 backdrop-blur-sm shadow-inner">
              {/* Fluid */}
              <div
                className="absolute inset-x-0 bottom-0 transition-[height] duration-700 ease-out"
                style={{
                  height: `${fillPercent}%`,
                  background:
                    "linear-gradient(to top, #be185d 0%, #ec4899 45%, #f9a8d4 85%, #fbcfe8 100%)",
                }}
              >
                {/* Surface shimmer */}
                <div className="absolute inset-x-0 top-0 h-2 bg-white/40" />
                <div className="absolute left-3 top-2 h-16 w-3 rounded-full bg-white/30 blur-[1px]" />
              </div>
              {/* Glass highlight */}
              <div className="absolute left-4 top-4 h-24 w-4 rounded-full bg-white/40 blur-[2px]" />
            </div>
            {/* Spout */}
            <div className="absolute -right-3 top-6 h-8 w-6 rounded-r-full border-4 border-l-0 border-foreground/15" />
            {/* Handle */}
            <div className="absolute -left-4 top-14 h-20 w-8 rounded-l-full border-4 border-r-0 border-foreground/15" />
          </div>
          <p className="text-center text-xs text-muted-foreground">
            {total} units in jug
            <br />
            <span className="font-medium text-foreground">
              {served ? "Served! 🎉" : "Mix & serve"}
            </span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
