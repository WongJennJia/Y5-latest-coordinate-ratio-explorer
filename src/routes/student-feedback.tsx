import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent } from "@/components/ui/card";
import { ClipboardCheck, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import missionsData from "@/data/missions.json";

export const Route = createFileRoute("/student-feedback")({
  component: StudentFeedbackView,
});

function StudentFeedbackView() {
  const embedUrl =
    missionsData.meta.studentFeedbackFormUrl ||
    "https://docs.google.com/forms/d/e/1FAIpQLSeoDA4-mmGPt1e7-lajYeshgPaWa8S4krzN5Dnw2uiV3fH6eA/viewform?embedded=true";
  const fallbackUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSeoDA4-mmGPt1e7-lajYeshgPaWa8S4krzN5Dnw2uiV3fH6eA/viewform";

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-8">
      <div className="mb-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-6 text-center">
        <div className="mb-3 text-5xl" role="img" aria-label="thinking face">
          🤔
        </div>
        <h1 className="text-2xl font-bold text-foreground">Mission Reflection &amp; Feedback</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Please share your valuable thoughts and adventure feedback with us using the secure form
          below.
        </p>
        <div className="mt-4 flex justify-center">
          <Button asChild variant="outline" size="sm">
            <a
              href={fallbackUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <ExternalLink className="h-4 w-4" />
              Open Form in New Tab
            </a>
          </Button>
        </div>
      </div>

      <Card className="overflow-hidden border-primary/10 shadow-sm">
        <CardContent className="p-0">
          <iframe
            src={embedUrl}
            title="Student Feedback Form"
            className="h-[1100px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer"
            sandbox="allow-scripts allow-forms allow-same-origin allow-popups"
          >
            Loading questionnaire...
          </iframe>
        </CardContent>
      </Card>

      <div className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-muted-foreground">
        <ClipboardCheck className="h-4 w-4 text-primary" />
        Your input helps Wong &amp; Shyafina refine this Year 5 Math Multimedia resource!
      </div>
    </div>
  );
}
