import { useEffect, useState } from "react";
import { Palette, CheckCircle2, RotateCcw, ArrowRight, Tag, HelpCircle } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { useProgress } from "@/lib/progress-context";
import missionsData from "@/data/missions.json";

const cfg = (missionsData.missions.find((m) => m.id === "proportion")!.learn as {
  scaler: {
    refMeters: number;
    refPrice: number;
    queryMeters: number;
    unitPrice: number;
    finalPrice: number;
  };
}).scaler;

export function BatikDyeScaler() {
  const { markComplete, isCompleted } = useProgress();
  const done = isCompleted("proportion");
  const [unit, setUnit] = useState("");
  const [final, setFinal] = useState("");
  const [sliderMeters, setSliderMeters] = useState(cfg.refMeters);

  const unitCorrect = Number(unit) === cfg.unitPrice;
  const finalCorrect = unitCorrect && Number(final) === cfg.finalPrice;

  useEffect(() => {
    if (finalCorrect && !done) markComplete("proportion");
  }, [finalCorrect, done, markComplete]);

  const reset = () => {
    setUnit("");
    setFinal("");
    setSliderMeters(cfg.refMeters);
  };

  return (
    <Card className="mint-card-shadow">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Palette className="h-5 w-5 text-primary" /> Kampung Batik Dye Scaler
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          A traditional Batik workshop — use the unitary method to find the price. (LS 7.3.1 · PL2–PL3)
        </p>
      </CardHeader>
      <CardContent className="space-y-5">
        {/* Split screen */}
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border-2 border-primary/25 bg-mint-50/60 p-5">
            <Badge className="mb-3 bg-primary text-primary-foreground">The Standard</Badge>
            <div className="mb-3 flex items-center gap-1.5 text-2xl">
              {Array.from({ length: cfg.refMeters }).map((_, i) => (
                <span key={i} title="Batik roll">🧵</span>
              ))}
            </div>
            <p className="text-sm">
              <strong>{cfg.refMeters} meters</strong> of Batik fabric costs
            </p>
            <p className="mt-1 inline-flex items-center gap-1.5 rounded-lg bg-primary/10 px-3 py-1 font-display text-lg font-extrabold text-primary">
              <Tag className="h-4 w-4" /> RM {cfg.refPrice}
            </p>
          </div>
          <div className="rounded-2xl border-2 border-cta/30 bg-cta/5 p-5">
            <Badge className="mb-3 bg-cta text-cta-foreground">The Target Query</Badge>
            <div className="flex items-start gap-2">
              <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-cta" />
              <p className="text-sm font-medium">
                "How much do <strong>{cfg.queryMeters} meters</strong> of this same Batik fabric
                cost?"
              </p>
            </div>
          </div>
        </div>

        {/* Step 1 */}
        <div className="rounded-2xl border border-border bg-card p-4">
          <p className="mb-2 font-display font-bold">Step 1 — Find the cost of 1 meter (Unitary Method)</p>
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span>Cost of 1 meter = RM {cfg.refPrice} ÷ {cfg.refMeters} = RM</span>
            <Input
              inputMode="numeric"
              value={unit}
              onChange={(e) => setUnit(e.target.value.replace(/[^0-9]/g, ""))}
              className="w-24 font-display font-bold"
              placeholder="?"
            />
            {unitCorrect && <CheckCircle2 className="h-5 w-5 text-primary" />}
          </div>
        </div>

        {/* Step 2 */}
        <div
          className={`rounded-2xl border p-4 transition-opacity ${
            unitCorrect ? "border-border bg-card" : "border-dashed border-border bg-muted/30 opacity-60"
          }`}
        >
          <p className="mb-2 font-display font-bold">Step 2 — Scale up to {cfg.queryMeters} meters</p>
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span>
              Cost of {cfg.queryMeters} meters = RM {cfg.unitPrice} × {cfg.queryMeters} = RM
            </span>
            <Input
              inputMode="numeric"
              value={final}
              onChange={(e) => setFinal(e.target.value.replace(/[^0-9]/g, ""))}
              disabled={!unitCorrect}
              className="w-24 font-display font-bold"
              placeholder="?"
            />
            {finalCorrect && <CheckCircle2 className="h-5 w-5 text-primary" />}
          </div>
        </div>

        {finalCorrect && (
          <div className="animate-fade-in rounded-2xl border-2 border-primary/30 bg-mint-100 p-4 text-center font-semibold text-primary">
            <CheckCircle2 className="mr-1.5 inline h-5 w-5" />
            Betul! {cfg.queryMeters} meters cost RM {cfg.finalPrice}. Mission complete!
          </div>
        )}

        {/* Slider anchor */}
        <div className="rounded-2xl bg-muted/40 p-5">
          <div className="mb-3 flex items-center justify-between">
            <Label className="font-display font-bold">Drag to explore proportion</Label>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-cta px-3 py-1 font-display text-lg font-extrabold text-cta-foreground">
              <Tag className="h-4 w-4" /> RM {sliderMeters * cfg.unitPrice}
            </span>
          </div>
          <Slider
            value={[sliderMeters]}
            onValueChange={(v) => setSliderMeters(v[0])}
            min={1}
            max={10}
            step={1}
          />
          <p className="mt-2 text-center text-sm text-muted-foreground">
            {sliderMeters} meter{sliderMeters > 1 ? "s" : ""} × RM {cfg.unitPrice} = RM{" "}
            {sliderMeters * cfg.unitPrice}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button type="button" variant="ghost" onClick={reset} className="gap-2">
            <RotateCcw className="h-4 w-4" /> Reset
          </Button>
          {done && (
            <Badge className="gap-1 bg-primary text-primary-foreground">
              <CheckCircle2 className="h-3.5 w-3.5" /> Completed <ArrowRight className="h-3.5 w-3.5" />
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
