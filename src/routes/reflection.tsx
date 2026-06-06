import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Sparkles, AlertTriangle, ShieldAlert } from "lucide-react";
import { useProgress } from "@/lib/progress-context";

export const Route = createFileRoute("/reflection")({
  component: TeacherReflectionView,
});

function TeacherReflectionView() {
  const { currentRole } = useProgress();

  // Student Protection Guard Fallback
  if (currentRole !== "teacher") {
    return (
      <div className="mx-auto w-full max-w-2xl px-4 py-16">
        <Card className="border-destructive/20">
          <CardContent className="flex flex-col items-center gap-4 p-10 text-center">
            <ShieldAlert className="h-12 w-12 text-destructive" />
            <h1 className="text-2xl font-bold text-foreground">🔒 Access Restricted</h1>
            <p className="max-w-md text-sm text-muted-foreground">
              This portal contains EDUP2112 curriculum design review data intended for lecturers.
              Please switch your perspective to Teacher View in the sidebar switchboard to explore.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-8">
      <div className="mb-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-6">
        <h1 className="text-2xl font-bold text-foreground">👨‍🏫 Teacher-Developer Reflection</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Academic Dashboard &amp; Pedagogical Design Justifications (KPPB Alignment for EDUP2112)
        </p>
      </div>

      <div className="mb-6 grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Sparkles className="h-5 w-5 text-primary" />
              Project Core Strengths
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>
              • <strong>Data-Driven Architecture:</strong> Content separation from presentation via a
              single centralized JSON payload simplifies real-time curriculum iterations.
            </p>
            <p>
              • <strong>Multimedia Scaffolding:</strong> Gradual integration of interactive GeoGebra
              environments, Scratch game sandboxes, and Lumi H5P micro-lessons matches cognitive load
              theories for Year 5 pupils.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <AlertTriangle className="h-5 w-5 text-amber-500" />
              Areas for Improvement
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>
              • <strong>Native Component State:</strong> Future builds will replace embedded iframe
              containers with fully stateful, scored React simulation wrappers.
            </p>
            <p>
              • <strong>Analytics Collection:</strong> Transitioning student questionnaire forms into
              unified database pipelines for granular diagnostic performance tracking.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <BookOpen className="h-5 w-5 text-primary" />
            Pedagogical Justifications &amp; Digital Capacity (KPPB)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-muted-foreground">
          <p>
            This multimedia resource directly manifests deep learning characteristics by supporting
            standard Year 5 DSKP targets across coordinates, ratio, and proportion. By framing
            mathematics through playful contexts (such as the Pesta Ria Sekolah carnival simulator),
            the shell transitions mechanical drill exercises into proactive situational
            problem-solving environments.
          </p>
          <div className="rounded-xl bg-mint-50 p-4 text-foreground">
            📌 <strong>KPPB Integration:</strong> Leverages digital capacity to foster student-led
            conceptual exploration and collaborative peer feedback loops.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
