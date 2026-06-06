import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import confetti from "canvas-confetti";
import { Card, CardContent } from "@/components/ui/card";
import { ClipboardCheck, ExternalLink, Trophy, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useProgress } from "@/lib/progress-context";
import missionsData from "@/data/missions.json";

export const Route = createFileRoute("/student-feedback")({
  component: StudentFeedbackView,
});

function StudentFeedbackView() {
  const { markComplete, addPoints } = useProgress();
  const [celebrate, setCelebrate] = useState(false);

  const embedUrl =
    missionsData.meta.studentFeedbackFormUrl ||
    "https://docs.google.com/forms/d/e/1FAIpQLSeoDA4-mmGPt1e7-lajYeshgPaWa8S4krzN5Dnw2uiV3fH6eA/viewform?embedded=true";
  const fallbackUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSeoDA4-mmGPt1e7-lajYeshgPaWa8S4krzN5Dnw2uiV3fH6eA/viewform";

  const blast = () => {
    const end = Date.now() + 1000;
    const colors = ["#10B981", "#F97316", "#ec4899", "#ffffff"];
    (function frame() {
      confetti({ particleCount: 6, angle: 60, spread: 70, origin: { x: 0 }, colors });
      confetti({ particleCount: 6, angle: 120, spread: 70, origin: { x: 1 }, colors });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
    confetti({ particleCount: 180, spread: 120, origin: { y: 0.5 } });
  };

  const completeJourney = () => {
    markComplete("reflection");
    addPoints(500);
    blast();
    setCelebrate(true);
  };

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

      {/* Gamified completion CTA */}
      <div className="mt-6 rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-mint-50 to-mint-100 p-6 text-center">
        <p className="mb-4 font-display text-base font-bold text-foreground">
          Finished the questionnaire? Submit your adventure data to claim your final points!
        </p>
        <Button
          onClick={completeJourney}
          size="lg"
          className="animate-bounce rounded-xl bg-primary font-bold text-primary-foreground shadow-md transition-transform hover:scale-[1.02] hover:bg-primary/90"
        >
          ✨ Click Here After Submitting Google Form to Complete Your Journey! 🏁
        </Button>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-muted-foreground">
        <ClipboardCheck className="h-4 w-4 text-primary" />
        Your input helps Wong &amp; Shyafina refine this Year 5 Math Multimedia resource!
      </div>

      {celebrate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 p-4 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-md rounded-3xl border-2 border-primary/30 bg-card p-8 text-center mint-card-shadow">
            <button
              type="button"
              onClick={() => setCelebrate(false)}
              className="absolute right-4 top-4 text-muted-foreground hover:text-foreground"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <span className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/15 text-primary">
              <Trophy className="h-10 w-10" />
            </span>
            <h3 className="font-display text-2xl font-extrabold text-foreground">
              🎉 Quest Complete, Master Explorer!
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              You earned <strong className="text-primary">100 PTS</strong> and fully completed your
              Math Quest across coordinates, ratio, proportion and the grand carnival finale!
            </p>
            <Button
              type="button"
              onClick={() => setCelebrate(false)}
              className="mt-6 w-full rounded-xl bg-primary font-bold text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90"
            >
              I am a Master Explorer! 🏆
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
