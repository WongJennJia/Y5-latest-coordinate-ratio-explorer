import { createFileRoute } from "@tanstack/react-router";
import { Rocket, PlayCircle, BookOpen, Bot, ArrowRight, ListOrdered, Layers, MessageCircleQuestion } from "lucide-react";

import { PageHeader } from "@/components/PageHeader";
import { ResponsiveIframe } from "@/components/ResponsiveIframe";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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

        {/* H5P placeholder */}
        <Card className="border-dashed bg-mint-50/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Puzzle className="h-5 w-5 text-primary" /> Interactive Warm-up
              <Badge variant="secondary" className="ml-auto">
                H5P
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="group relative flex aspect-video w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl border-2 border-dashed border-primary/30 bg-card text-center">
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_2.4s_infinite] bg-gradient-to-r from-transparent via-mint-100/60 to-transparent" />
              <Loader2 className="h-9 w-9 animate-spin text-primary" />
              <div className="relative">
                <p className="font-display text-lg font-bold">H5P Module Loading…</p>
                <p className="text-sm text-muted-foreground">
                  An interactive drag-and-drop activity will appear here.
                </p>
              </div>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Placeholder for an embedded H5P interactive content module (coming in the next build).
            </p>
          </CardContent>
        </Card>
      </div>

      <style>{`@keyframes shimmer { 100% { transform: translateX(100%); } }`}</style>
    </div>
  );
}
