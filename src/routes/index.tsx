import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Grid3x3,
  Scale,
  Percent,
  Trophy,
  Lock,
  CheckCircle2,
  ArrowRight,
  Rocket,
  Sparkles,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useProgress, type MissionId } from "@/lib/progress-context";
import missionsData from "@/data/missions.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Math Explorer — Year 5 Coordinates, Ratio & Proportion Adventure" },
      {
        name: "description",
        content:
          "An interactive Year 5 mathematics adventure for Malaysian pupils covering coordinates, ratio and proportion (DSKP KSSR).",
      },
      { property: "og:title", content: "Math Explorer — Year 5 Maths Adventure" },
      {
        property: "og:description",
        content: "Learn coordinates, ratio and proportion through an interactive mission roadmap.",
      },
    ],
  }),
  component: HomePage,
});

const ICONS = { Grid3x3, Scale, Percent, Trophy } as const;

function HomePage() {
  const { percent, completedCount, totalCount, isUnlocked, isCompleted } = useProgress();

  return (
    <div className="mx-auto max-w-6xl">
      {/* Hero */}
      <section className="relative mb-10 overflow-hidden rounded-3xl bg-gradient-to-br from-mint-100 to-mint-200 p-8 sm:p-12 mint-card-shadow">
        <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-primary/15 blur-2xl" />
        <div className="relative max-w-2xl">
          <Badge className="mb-4 gap-1.5 bg-primary text-primary-foreground">
            <Sparkles className="h-3.5 w-3.5" /> {missionsData.meta.curriculum}
          </Badge>
          <h1 className="font-display text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">
            Welcome, Explorer!
          </h1>
          <p className="mt-3 text-base text-foreground/70 sm:text-lg">
            Begin your <strong>{missionsData.meta.subtitle}</strong>. Complete each mission to unlock
            the next and reach the Pesta Ria Sekolah Final Challenge.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="bg-cta text-cta-foreground cta-shadow hover:bg-cta/90">
              <Link to="/getting-started" className="gap-1.5">
                <Rocket className="h-4 w-4" /> Start Adventure
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link to="/coordinates">Jump to Missions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Progress */}
      <Card className="mb-10 mint-card-shadow">
        <CardContent className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex-1">
            <p className="font-display text-lg font-bold">Your Adventure Progress</p>
            <p className="text-sm text-muted-foreground">
              {completedCount} of {totalCount} milestones completed
            </p>
            <Progress value={percent} className="mt-3 h-3" />
          </div>
          <div className="font-display text-4xl font-extrabold text-primary">{percent}%</div>
        </CardContent>
      </Card>

      {/* Roadmap */}
      <h2 className="mb-5 font-display text-2xl font-bold">Adventure Roadmap</h2>
      <div className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {missionsData.milestones.map((m, i) => {
          const Icon = ICONS[m.icon as keyof typeof ICONS];
          const unlocked = isUnlocked(m.id as MissionId);
          const done = isCompleted(m.id as MissionId);
          return (
            <div key={m.id} className="relative">
              <Card
                className={`group h-full overflow-hidden transition-all ${
                  unlocked ? "hover:-translate-y-1 mint-card-shadow" : "opacity-70"
                }`}
              >
                <CardContent className="flex h-full flex-col gap-4 p-6">
                  <div className="flex items-center justify-between">
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                        done
                          ? "bg-primary text-primary-foreground"
                          : unlocked
                            ? "bg-mint-100 text-primary"
                            : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {unlocked ? <Icon className="h-6 w-6" /> : <Lock className="h-5 w-5" />}
                    </span>
                    <span className="font-display text-sm font-bold text-muted-foreground">
                      0{i + 1}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="font-display text-lg font-bold">{m.label}</p>
                    <p className="text-sm text-muted-foreground">
                      {done ? "Completed" : unlocked ? "Ready to start" : "Locked"}
                    </p>
                  </div>
                  {unlocked ? (
                    <Button
                      asChild
                      variant={done ? "secondary" : "default"}
                      size="sm"
                      className="w-full"
                    >
                      <Link to={m.to} className="gap-1.5">
                        {done ? (
                          <>
                            <CheckCircle2 className="h-4 w-4" /> Review
                          </>
                        ) : (
                          <>
                            Start <ArrowRight className="h-4 w-4" />
                          </>
                        )}
                      </Link>
                    </Button>
                  ) : (
                    <Button disabled size="sm" variant="secondary" className="w-full gap-1.5">
                      <Lock className="h-3.5 w-3.5" /> Locked
                    </Button>
                  )}
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
