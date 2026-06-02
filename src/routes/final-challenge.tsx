import { createFileRoute, Link } from "@tanstack/react-router";
import { Trophy, MapPin, CupSoda, ChefHat, Lock, PartyPopper, Sparkles } from "lucide-react";

import { PageHeader } from "@/components/PageHeader";
import { SirapBandungChallenge } from "@/components/SirapBandungChallenge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useProgress } from "@/lib/progress-context";
import missionsData from "@/data/missions.json";

export const Route = createFileRoute("/final-challenge")({
  head: () => ({
    meta: [
      { title: "Final Challenge: Pesta Ria Sekolah — Math Explorer" },
      { name: "description", content: "Apply coordinates, ratio and proportion at the Malaysian school carnival simulation, Pesta Ria Sekolah." },
      { property: "og:title", content: "Final Challenge: Pesta Ria Sekolah" },
      { property: "og:description", content: "A real-world Malaysian carnival simulation combining all three maths topics." },
    ],
  }),
  component: FinalChallengePage,
});

const ICONS = { MapPin, CupSoda, ChefHat } as const;

function FinalChallengePage() {
  const { isUnlocked } = useProgress();
  const unlocked = isUnlocked("final");
  const fc = missionsData.finalChallenge;

  if (!unlocked) {
    return (
      <div className="mx-auto flex max-w-md flex-col items-center gap-4 py-24 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-muted">
          <Lock className="h-7 w-7 text-muted-foreground" />
        </span>
        <h2 className="font-display text-2xl font-bold">Carnival Locked</h2>
        <p className="text-muted-foreground">
          Complete the Coordinates, Ratio and Proportion missions to unlock Pesta Ria Sekolah.
        </p>
        <Button asChild variant="secondary">
          <Link to="/">Back to Roadmap</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl">
      <section className="relative mb-8 overflow-hidden rounded-3xl bg-gradient-to-br from-cta/15 to-mint-100 p-8 sm:p-10 mint-card-shadow">
        <PartyPopper className="absolute -right-4 -top-4 h-32 w-32 text-cta/20" />
        <Badge className="mb-3 gap-1.5 bg-cta text-cta-foreground">
          <Sparkles className="h-3.5 w-3.5" /> Final Challenge
        </Badge>
        <h1 className="font-display text-3xl font-extrabold sm:text-4xl">{fc.title}</h1>
        <p className="mt-1 font-display text-lg text-primary">{fc.subtitle}</p>
        <p className="mt-3 max-w-2xl text-foreground/70">{fc.intro}</p>
      </section>

      <PageHeader
        title="Carnival Stages"
        description="Three real-world stalls — one for each topic you mastered."
        icon={<Trophy className="h-6 w-6" />}
      />

      <div className="grid gap-5 md:grid-cols-3">
        {fc.stages.map((stage, i) => {
          const Icon = ICONS[stage.icon as keyof typeof ICONS] ?? MapPin;
          return (
            <Card key={stage.id} className="flex h-full flex-col mint-card-shadow">
              <CardHeader>
                <div className="mb-2 flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-mint-100 text-primary">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="font-display text-sm font-bold text-muted-foreground">
                    Stage {i + 1}
                  </span>
                </div>
                <CardTitle className="text-lg">{stage.name}</CardTitle>
                <Badge variant="outline" className="w-fit border-primary/30 text-primary">
                  {stage.topic}
                </Badge>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col justify-between gap-4">
                <p className="text-sm text-muted-foreground">{stage.desc}</p>
                {stage.id === "stage-2" ? (
                  <div className="flex flex-col items-center gap-2 rounded-xl border-2 border-cta/40 bg-cta/5 p-4 text-center">
                    <Sparkles className="h-5 w-5 text-cta" />
                    <p className="text-xs font-bold text-cta">Playable below ↓</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-2 rounded-xl border-2 border-dashed border-primary/30 p-4 text-center">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <p className="text-xs font-medium">Interactive simulation coming soon</p>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-10">
        <PageHeader
          title="Stage 2 — Mix Sirap Bandung"
          description="Run the carnival drink stall! Mix the perfect ratio and serve your customer."
          icon={<CupSoda className="h-6 w-6" />}
        />
        <SirapBandungChallenge />
      </div>
    </div>
  );
}
