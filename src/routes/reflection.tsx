import { createFileRoute } from "@tanstack/react-router";
import { NotebookPen, ThumbsUp, TrendingUp, GraduationCap } from "lucide-react";

import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import missionsData from "@/data/missions.json";

export const Route = createFileRoute("/reflection")({
  head: () => ({
    meta: [
      { title: "Teacher–Developer Reflection — Math Explorer" },
      { name: "description", content: "Academic reflection on project strengths, areas for improvement and pedagogical design justifications (KPPB alignment)." },
      { property: "og:title", content: "Teacher–Developer Reflection — Math Explorer" },
      { property: "og:description", content: "Reflection and pedagogical justification for the EDUP2112 assignment." },
    ],
  }),
  component: ReflectionPage,
});

function ReflectionPage() {
  const { strengths, improvements, justifications } = missionsData.reflection;

  const sections = [
    { title: "Project Strengths", icon: ThumbsUp, items: strengths, accent: "text-primary" },
    { title: "Areas for Improvement", icon: TrendingUp, items: improvements, accent: "text-cta" },
    {
      title: "Pedagogical Design Justifications (KPPB Alignment)",
      icon: GraduationCap,
      items: justifications,
      accent: "text-primary",
    },
  ];

  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader
        eyebrow="EDUP2112 Appraisal"
        title="Teacher–Developer Reflection"
        description="An academic reflection on the design and pedagogy of this learning resource. Edit the dummy text to fit your write-up."
        icon={<NotebookPen className="h-6 w-6" />}
      />

      <div className="space-y-6">
        {sections.map((s) => (
          <Card key={s.title} className="mint-card-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2.5">
                <s.icon className={`h-5 w-5 ${s.accent}`} /> {s.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {s.items.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-foreground/80">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
