import { useState } from "react";
import { Egg, Minus, Plus, RotateCcw, CheckCircle2, ChefHat, Salad } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useProgress } from "@/lib/progress-context";
import missionsData from "@/data/missions.json";

const MAX = 10;
const target = missionsData.missions.find((m) => m.id === "ratio")!.learn.target as {
  eggs: number;
  cucumbers: number;
};

const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));

function simplify(a: number, b: number): string {
  if (a === 0 && b === 0) return "0 : 0";
  const d = gcd(a, b) || 1;
  return `${a / d} : ${b / d}`;
}

export function NasiLemakRatioMaster() {
  const { markComplete, isCompleted } = useProgress();
  const [eggs, setEggs] = useState(2);
  const [cucumbers, setCucumbers] = useState(3);
  const [validated, setValidated] = useState(false);
  const done = isCompleted("ratio");

  const total = eggs + cucumbers;
  const clamp = (v: number) => Math.max(0, Math.min(MAX, v));

  const matchesTarget =
    eggs > 0 &&
    cucumbers > 0 &&
    simplify(eggs, cucumbers) === simplify(target.eggs, target.cucumbers);

  const validate = () => {
    if (matchesTarget) {
      setValidated(true);
      markComplete("ratio");
    } else {
      setValidated(false);
    }
  };

  const reset = () => {
    setEggs(2);
    setCucumbers(3);
    setValidated(false);
  };

  const Counter = ({
    label,
    value,
    setValue,
    color,
    icon,
    badge,
  }: {
    label: string;
    value: number;
    setValue: (v: number) => void;
    color: string;
    icon: React.ReactNode;
    badge: string;
  }) => (
    <div className="rounded-2xl border-2 border-border bg-card p-4 mint-card-shadow">
      <div className="mb-3 flex items-center justify-between">
        <p className="flex items-center gap-2 font-display font-bold">
          {icon} {label}
        </p>
        <Badge variant="secondary">{value}</Badge>
      </div>
      <div className="mb-4 flex min-h-[72px] flex-wrap content-start gap-1.5 rounded-xl bg-muted/40 p-3">
        {Array.from({ length: value }).map((_, i) => (
          <span
            key={i}
            className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${color}`}
          >
            {badge}
          </span>
        ))}
        {value === 0 && <span className="text-xs text-muted-foreground">Empty plate</span>}
      </div>
      <div className="flex items-center justify-center gap-3">
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={() => setValue(clamp(value - 1))}
          disabled={value <= 0}
        >
          <Minus className="h-4 w-4" />
        </Button>
        <span className="w-8 text-center font-display text-xl font-extrabold">{value}</span>
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={() => setValue(clamp(value + 1))}
          disabled={value >= MAX}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );

  return (
    <Card className="mint-card-shadow">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ChefHat className="h-5 w-5 text-primary" /> Nasi Lemak Ingredient Ratio Master
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          School culinary lab — plate up the lauk and read every ratio form. (LS 7.2.1 · PL1–PL3)
        </p>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <Counter
            label="Plate A: Sambal Eggs (Telur Sambal)"
            value={eggs}
            setValue={(v) => {
              setEggs(v);
              setValidated(false);
            }}
            color="bg-amber-100 text-amber-700"
            icon={<Egg className="h-4 w-4 text-amber-600" />}
            badge="🥚"
          />
          <Counter
            label="Plate B: Cucumber Slices (Timun)"
            value={cucumbers}
            setValue={(v) => {
              setCucumbers(v);
              setValidated(false);
            }}
            color="bg-emerald-100 text-emerald-700"
            icon={<Salad className="h-4 w-4 text-emerald-600" />}
            badge="🥒"
          />
        </div>

        {/* Ratio displays */}
        <div className="space-y-2.5">
          <div className="rounded-xl border border-primary/20 bg-mint-50/60 p-3 text-sm">
            <strong>1. Part-to-Part</strong> (Nisbah Bahagian ke Bahagian): Eggs to Cucumbers ={" "}
            <span className="font-display font-extrabold text-primary">{eggs} : {cucumbers}</span>
          </div>
          <div className="rounded-xl border border-primary/20 bg-mint-50/60 p-3 text-sm">
            <strong>2. Part-to-Whole</strong> (Nisbah Bahagian ke Keseluruhan): Eggs to Total ={" "}
            <span className="font-display font-extrabold text-primary">{eggs} : {total}</span>
          </div>
          <div className="rounded-xl border border-primary/20 bg-mint-50/60 p-3 text-sm">
            <strong>3. Whole-to-Part</strong> (Nisbah Keseluruhan ke Bahagian): Total to Cucumbers ={" "}
            <span className="font-display font-extrabold text-primary">{total} : {cucumbers}</span>
          </div>
        </div>

        {/* Simplest form */}
        <div className="rounded-2xl border-2 border-cta/30 bg-cta/5 p-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-cta">
            Simplest Form (Nisbah Termudah)
          </p>
          <p className="font-display text-3xl font-extrabold">{simplify(eggs, cucumbers)}</p>
        </div>

        {/* Validation */}
        <div className="rounded-2xl bg-muted/40 p-4 text-center text-sm">
          <p className="mb-3 text-muted-foreground">
            Target recipe ratio (Eggs : Cucumbers) ={" "}
            <strong>{simplify(target.eggs, target.cucumbers)}</strong>
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              type="button"
              onClick={validate}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Validate Recipe
            </Button>
            <Button type="button" variant="ghost" onClick={reset} className="gap-2">
              <RotateCcw className="h-4 w-4" /> Reset
            </Button>
          </div>
          {validated && matchesTarget && (
            <p className="animate-fade-in mt-3 flex items-center justify-center gap-1.5 font-semibold text-primary">
              <CheckCircle2 className="h-4 w-4" /> Perfect ratio! Mission marked complete.
            </p>
          )}
          {validated === false && !matchesTarget && eggs >= 0 && (
            <p className="mt-3 text-muted-foreground">
              Adjust the plates until the simplest form matches the target ratio.
            </p>
          )}
          {done && (
            <Badge className="mt-3 gap-1 bg-primary text-primary-foreground">
              <CheckCircle2 className="h-3.5 w-3.5" /> Completed
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
