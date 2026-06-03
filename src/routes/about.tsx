import { createFileRoute } from "@tanstack/react-router";
import { Info, GraduationCap, BookMarked, LayoutGrid, Trophy, User, Building2, CalendarDays } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import missionsData from "@/data/missions.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Project — Math Explorer" },
      { name: "description", content: "Credits, course information and DSKP KSSR curriculum reference for the Math Explorer learning resource." },
      { property: "og:title", content: "About Project — Math Explorer" },
      { property: "og:description", content: "Credits and DSKP curriculum mapping for the EDUP2112 project." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { meta, dskp, missions, techStack } = missionsData;

  return (
    <div className="mx-auto max-w-5xl">
      {/* Hero */}
      <section className="relative mb-8 overflow-hidden rounded-3xl bg-gradient-to-br from-mint-100 to-mint-200 p-8 sm:p-12 mint-card-shadow">
        <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-primary/15 blur-2xl" />
        <div className="absolute -bottom-16 -left-10 h-44 w-44 rounded-full bg-cta/10 blur-2xl" />
        <div className="relative max-w-2xl">
          <Badge className="mb-4 gap-1.5 bg-primary text-primary-foreground">
            <Info className="h-3.5 w-3.5" /> Academic Project Report
          </Badge>
          <h1 className="font-display text-3xl font-extrabold leading-tight sm:text-4xl">
            {meta.appName} — {meta.subtitle}
          </h1>
          <p className="mt-3 text-sm text-foreground/70 sm:text-base">{meta.description}</p>
        </div>
      </section>

      <div className="space-y-6">
        {/* 1. Project Overview */}
        <Card className="mint-card-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" /> Project Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-foreground/80">
            <p>
              Math Explorer is a mission-based digital pedagogy resource custom built for the{" "}
              <strong>{meta.course}</strong> Technology &amp; Media course assignment. It guides{" "}
              <strong>{meta.audience}</strong> pupils through coordinates, ratio and proportion using
              a gamified "Learn → Explore → Practice" flow.
            </p>
            <p>
              Each mission embeds interactive native tools and real-world Malaysian contexts to make
              abstract mathematics tangible, aligned to {meta.curriculum}.
            </p>
          </CardContent>
        </Card>

        {/* 2. DSKP Curriculum Reference */}
        <Card className="mint-card-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LayoutGrid className="h-5 w-5 text-primary" /> DSKP Curriculum Reference
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {dskp.map((d) => (
                <div key={d.standard} className="rounded-2xl border border-primary/20 bg-mint-50/60 p-4">
                  <p className="font-display text-base font-bold text-primary">{d.topic}</p>
                  <Badge variant="outline" className="my-2 border-primary/30">
                    {d.standard}
                  </Badge>
                  <p className="text-xs text-muted-foreground">{d.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Compliant with Malaysian Ministry of Education (KPM) guidelines.
            </p>
          </CardContent>
        </Card>

        {/* 3. Learning Standards Matrix */}
        <Card className="mint-card-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookMarked className="h-5 w-5 text-primary" /> Learning Standards Matrix (PL1–PL6)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            {missions.map((m) => (
              <div key={m.id}>
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <Badge className="bg-primary text-primary-foreground">{m.topicCode}</Badge>
                  <p className="text-sm font-semibold">{m.standard}</p>
                </div>
                <div className="grid gap-2 sm:grid-cols-3">
                  {m.performanceLevels.map((pl) => (
                    <div key={pl.pl} className="rounded-xl border border-border bg-card p-3">
                      <p className="font-display text-sm font-bold text-primary">{pl.pl}</p>
                      <p className="text-xs text-muted-foreground">{pl.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Topic 7.4.1 highlight */}
            <div className="rounded-2xl border-2 border-cta/30 bg-cta/5 p-5">
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <Badge className="gap-1.5 bg-cta text-cta-foreground">
                  <Trophy className="h-3.5 w-3.5" /> 7.4.1
                </Badge>
                <p className="text-sm font-semibold">Problem Solving — Final Challenge (PL4–PL6)</p>
              </div>
              <p className="text-sm text-foreground/80">
                Our dynamic <strong>Pesta Ria Sekolah</strong> carnival simulation combines
                coordinates, ratio and proportion in non-routine, real-world tasks — targeting the
                highest performance levels (PL5/PL6) through the unitary method and contextual
                reasoning.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* 4. Project Credits */}
        <Card className="mint-card-shadow">
          <CardHeader>
            <CardTitle>Project Credits</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { icon: <User className="h-5 w-5" />, label: "Developer", value: meta.developer },
                { icon: <Building2 className="h-5 w-5" />, label: "Institution", value: meta.institution },
                { icon: <CalendarDays className="h-5 w-5" />, label: "Academic Year", value: meta.academicYear },
              ].map((c) => (
                <div key={c.label} className="rounded-2xl bg-mint-50/60 p-5 text-center">
                  <span className="mx-auto mb-2 flex h-11 w-11 items-center justify-center rounded-2xl bg-mint-100 text-primary">
                    {c.icon}
                  </span>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">{c.label}</p>
                  <p className="font-display font-bold">{c.value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 5. Tech Stack */}
        <Card className="mint-card-shadow">
          <CardHeader>
            <CardTitle>Tech Stack</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {techStack.map((t) => (
                <Badge key={t} variant="outline" className="border-primary/30 py-1.5 text-sm">
                  {t}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
