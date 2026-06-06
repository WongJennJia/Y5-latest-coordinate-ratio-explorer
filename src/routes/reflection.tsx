import { createFileRoute } from "@tanstack/react-router";
import { ClipboardCheck, ShieldCheck } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import missionsData from "@/data/missions.json";

export const Route = createFileRoute("/reflection")({
  head: () => ({
    meta: [
      { title: "Mission Reflection & Feedback — Math Explorer" },
      { name: "description", content: "Share your learning feedback and reflection on the Year 5 Coordinates, Ratio and Proportion adventure." },
      { property: "og:title", content: "Mission Reflection & Feedback — Math Explorer" },
      { property: "og:description", content: "Complete the official reflection questionnaire for the Math Explorer learning resource." },
    ],
  }),
  component: ReflectionView,
});

function ReflectionView() {
  const formUrl = missionsData.meta.googleFormUrl || "https://forms.gle/KayFyQg3U7XMpruq5";
  const embedUrl = formUrl.includes("?") ? `${formUrl}&embedded=true` : `${formUrl}?embedded=true`;

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      {/* Page Header Accent Banner */}
      <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-mint-50/60 p-8 text-center">
        <span className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/15 text-3xl">
          🤔
        </span>
        <h1 className="font-display text-3xl font-extrabold text-foreground">
          Mission Reflection &amp; Feedback
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Congratulations on completing your adventure! Please share your valuable thoughts and
          learning feedback with us using the official Google Form below.
        </p>
      </div>

      {/* Google Form Embedded Display Frame Container */}
      <Card className="overflow-hidden mint-card-shadow">
        <CardContent className="p-0">
          <div className="h-[1100px] w-full bg-muted">
            <iframe
              src={embedUrl}
              title="Mission Reflection Questionnaire"
              className="h-full w-full"
              loading="lazy"
            >
              Loading reflection questionnaire...
            </iframe>
          </div>
        </CardContent>
      </Card>

      {/* Verification Notice Badge */}
      <div className="flex items-center justify-center gap-2 text-center text-xs font-medium text-muted-foreground">
        <ShieldCheck className="h-4 w-4 text-primary" />
        Your input helps Wong &amp; Shyafina refine this Year 5 Math Multimedia resource!
      </div>
    </div>
  );
}
