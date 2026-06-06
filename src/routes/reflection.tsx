import { createFileRoute } from "@tanstack/react-router";
import { ClipboardCheck, ExternalLink } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
  const embedUrl =
    missionsData.meta.googleFormUrl ||
    "https://docs.google.com/forms/d/e/1FAIpQLSeoDA4-mmGPt1e7-lajYeshgPaWa8S4krzN5Dnw2uiV3fH6eA/viewform?embedded=true";

  const fallbackUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSeoDA4-mmGPt1e7-lajYeshgPaWa8S4krzN5Dnw2uiV3fH6eA/viewform";

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
          Congratulations on completing your adventure! Please share your
          valuable feedback using the form below.
        </p>

        {/* Network Fallback Button with Full Link */}
        <div className="mt-5 flex justify-center">
          <Button asChild variant="outline" className="gap-2 rounded-xl">
            <a href={fallbackUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              Can&apos;t see the form? Open in New Tab
            </a>
          </Button>
        </div>
      </div>

      {/* Google Form Embedded Display Frame */}
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
        <ClipboardCheck className="h-4 w-4 text-primary" />
        Your input helps Wong &amp; Shyafina refine this Year 5 Math Multimedia
        resource!
      </div>
    </div>
  );
}
