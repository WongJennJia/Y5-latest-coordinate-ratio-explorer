import { createFileRoute } from "@tanstack/react-router";
import { Rocket, PlayCircle, BookOpen, Bot, ArrowRight, ListOrdered, Layers, MessageCircleQuestion } from "lucide-react";

import { PageHeader } from "@/components/PageHeader";
import { ResponsiveIframe } from "@/components/ResponsiveIframe";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import missionsData from "@/data/missions.json";

export const Route = createFileRoute("/getting-started")({
  head: () => ({
    meta: [
      { title: "Getting Started — Math Explorer" },
      {
        name: "description",
        content: "Watch the introduction video and warm up with an interactive module before starting your missions.",
      },
      { property: "og:title", content: "Getting Started — Math Explorer" },
      { property: "og:description", content: "Introduction video and interactive warm-up for Year 5 maths." },
    ],
  }),
  component: GettingStartedPage,
});

function GettingStartedPage() {
  const { videoId } = missionsData.meta;
  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader
        eyebrow="Before You Begin"
        title="Getting Started"
        description="Watch your teacher's introduction, then warm up with a quick interactive activity."
        icon={<Rocket className="h-6 w-6" />}
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {/* YouTube */}
        <Card className="mint-card-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PlayCircle className="h-5 w-5 text-primary" /> Introduction Video
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ResponsiveIframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title="Math Explorer Introduction Video"
            />
            <div className="flex items-start gap-2.5 rounded-xl bg-mint-50/60 p-3">
              <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <p className="text-sm text-muted-foreground">
                Watch carefully — you'll meet coordinates, ratio and proportion through fun
                real-world Malaysian examples.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* AI Study Companion */}
        <Card className="overflow-hidden border-2 border-cta/30 mint-card-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-cta" /> 🤖 AI Study Companion (Pembantu Belajar AI)
            </CardTitle>
          </CardHeader>
          <CardContent className="flex h-full flex-col gap-5">
            <div className="rounded-2xl bg-gradient-to-br from-cta/10 to-mint-100/40 p-6">
              <p className="text-sm text-foreground/80">
                Have questions about coordinates or ratios? Chat with our smart AI assistant powered
                by Google NotebookLM to guide your adventure!
              </p>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Ask about any DSKP topic in your own words.</li>
              <li>• Get child-friendly explanations and examples.</li>
              <li>• Review before tackling the Practice quizzes.</li>
            </ul>
            <div className="mt-auto">
              <a
                href="https://notebooklm.google.com/notebook/615fc237-4016-4367-bf4e-24efcba7286d"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-cta py-6 text-center text-base font-bold text-cta-foreground cta-shadow transition-all hover:bg-cta/90"
              >
                Open AI Companion
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Learning Tips */}
      <section className="mt-10">
        <h2 className="mb-5 font-display text-2xl font-bold">
          Learning Tips: How to make the most of Math Explorer
        </h2>
        <div className="grid gap-5 md:grid-cols-3">
          {TIPS.map((tip) => (
            <Card key={tip.title} className="mint-card-shadow">
              <CardContent className="flex flex-col gap-3 p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-mint-100 text-primary">
                  {tip.icon}
                </span>
                <p className="font-display text-lg font-bold">{tip.title}</p>
                <p className="text-sm text-muted-foreground">{tip.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

const TIPS = [
  {
    title: "1. Follow the Order",
    desc: "Complete missions in sequence. Each mission builds on the previous one.",
    icon: <ListOrdered className="h-5 w-5" />,
  },
  {
    title: "2. Learn → Explore → Practice",
    desc: "Each mission has three phases. Don't skip ahead!",
    icon: <Layers className="h-5 w-5" />,
  },
  {
    title: "3. Ask Questions",
    desc: "If you're stuck, review the learning materials or ask your teacher for help.",
    icon: <MessageCircleQuestion className="h-5 w-5" />,
  },
];
