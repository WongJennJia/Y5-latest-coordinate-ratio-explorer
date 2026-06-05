import { useEffect, useState } from "react";
import { BookOpen, Compass, ClipboardCheck, CheckCircle2, Sparkles, ArrowRight, ArrowLeft, Lock, Lightbulb } from "lucide-react";
import { Link } from "@tanstack/react-router";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ResponsiveIframe } from "@/components/ResponsiveIframe";
import { PageHeader } from "@/components/PageHeader";
import { useProgress, type MissionId } from "@/lib/progress-context";
import missionsData from "@/data/missions.json";

type Mission = (typeof missionsData.missions)[number];

const TOPIC_HINTS: Record<string, string> = {
  coordinates:
    "💡 Explorer Tip: Remember that in a coordinate pair (x, y), the first number represents the horizontal position on the x-axis (paksi-x), and the second number represents the vertical position on the y-axis (paksi-y). To calculate the distance between two points on a flat grid line, look at the difference between the changing values! For example, the distance from (1, 3) to (6, 3) is 5 units because only the horizontal position changed.",
  ratio:
    "💡 Explorer Tip: A ratio compares parts directly in a specific order. If a question asks for a 'Part to Whole' (Bahagian kepada Keseluruhan) relationship, you must compare the requested item against the TOTAL combined sum of all items in the set rather than just the other item!",
  proportion:
    "💡 Explorer Tip: Proportion represents equivalent ratios (Kadar yang sama). To check if two separate relationships form a proper proportion, verify if they scale up or down by the exact same multiplier. For example, a base ratio of 1:4 scaled up uniformly by a factor of 2 becomes 2:8.",
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function MissionContent({
  missionId,
  icon,
  nextTo,
  learnTool,
}: {
  missionId: MissionId;
  icon: React.ReactNode;
  nextTo: string;
  learnTool?: React.ReactNode;
}) {
  const mission = missionsData.missions.find((m) => m.id === missionId) as Mission;
  const { isUnlocked, isCompleted, markComplete } = useProgress();
  const unlocked = isUnlocked(missionId);
  const done = isCompleted(missionId);
  const [activeTab, setActiveTab] = useState("learn");

  if (!unlocked) {
    return (
      <div className="mx-auto flex max-w-md flex-col items-center gap-4 py-24 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-muted">
          <Lock className="h-7 w-7 text-muted-foreground" />
        </span>
        <h2 className="font-display text-2xl font-bold">Mission Locked</h2>
        <p className="text-muted-foreground">
          Complete the previous mission first to unlock {mission.title}.
        </p>
        <Button asChild variant="secondary">
          <Link to="/">Back to Roadmap</Link>
        </Button>
      </div>
    );
  }

  return (
    <div>
      <PageHeader
        eyebrow={`Topic ${mission.topicCode}`}
        title={mission.title}
        description={mission.standard}
        icon={icon}
      >
        {done ? (
          <Badge className="gap-1 bg-primary text-primary-foreground">
            <CheckCircle2 className="h-3.5 w-3.5" /> Completed
          </Badge>
        ) : (
          <Badge variant="secondary" className="gap-1">
            <Sparkles className="h-3.5 w-3.5" /> In Progress
          </Badge>
        )}
      </PageHeader>

      <div className="mb-6 flex flex-wrap gap-2">
        {mission.performanceLevels.map((pl) => (
          <Badge key={pl.pl} variant="outline" className="gap-1.5 border-primary/30 py-1.5">
            <span className="font-bold text-primary">{pl.pl}</span>
            <span className="text-muted-foreground">{pl.desc}</span>
          </Badge>
        ))}
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full max-w-lg grid-cols-3">
          <TabsTrigger value="learn" className="gap-1.5">
            <BookOpen className="h-4 w-4" /> Learn
          </TabsTrigger>
          <TabsTrigger value="explore" className="gap-1.5">
            <Compass className="h-4 w-4" /> Explore
          </TabsTrigger>
          <TabsTrigger value="practice" className="gap-1.5">
            <ClipboardCheck className="h-4 w-4" /> Practice
          </TabsTrigger>
        </TabsList>

        {/* LEARN */}
        <TabsContent value="learn" className="mt-6 space-y-6">
          <Card className="mint-card-shadow">
            <CardHeader>
              <CardTitle>Key Idea</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{mission.learn.intro}</p>
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {mission.learn.concepts.map((c, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm">{c}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {learnTool ?? (
            <Card className="border-dashed bg-mint-50/40">
              <CardHeader>
                <CardTitle className="text-base">Interactive Helper</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex min-h-56 flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-primary/30 p-6 text-center">
                  <Sparkles className="h-8 w-8 text-primary" />
                  <p className="text-sm font-medium">{mission.learn.interactivePlaceholder}</p>
                  <p className="text-xs text-muted-foreground">Coming in the next build</p>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="flex justify-end pt-2">
            <Button
              variant="secondary"
              onClick={() => setActiveTab("explore")}
              className="gap-1.5 bg-mint-100 text-primary hover:bg-mint-100/80"
            >
              Next Step: Explore Simulation <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </TabsContent>

        {/* EXPLORE */}
        <TabsContent value="explore" className="mt-6">
          <Card className="mint-card-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Compass className="h-5 w-5 text-primary" /> {mission.explore.tool}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{mission.explore.note}</p>
              <ResponsiveIframe src={mission.explore.embedUrl} title={`${mission.title} — Explore`} />
            </CardContent>
          </Card>

          <div className="mt-6 flex items-center justify-between gap-3">
            <Button
              variant="ghost"
              onClick={() => setActiveTab("learn")}
              className="gap-1.5"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Lesson
            </Button>
            <Button
              variant="secondary"
              onClick={() => setActiveTab("practice")}
              className="gap-1.5 bg-mint-100 text-primary hover:bg-mint-100/80"
            >
              Next Step: Practice Mission <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </TabsContent>

        {/* PRACTICE */}
        <TabsContent value="practice" className="mt-6">
          <PracticeQuiz
            questions={mission.practice.questions}
            intro={mission.practice.intro}
            onComplete={() => markComplete(missionId)}
            done={done}
            nextTo={nextTo}
            onBackToExplore={() => setActiveTab("explore")}
            hintText={TOPIC_HINTS[missionId] ?? TOPIC_HINTS.ratio}
          />

        </TabsContent>
      </Tabs>
    </div>
  );
}

function PracticeQuiz({
  questions,
  intro,
  onComplete,
  done,
  nextTo,
  onBackToExplore,
  hintText,
}: {
  questions: { q: string; options: string[]; answer: number }[];
  intro: string;
  onComplete: () => void;
  done: boolean;
  nextTo: string;
  onBackToExplore: () => void;
  hintText: string;
}) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  // Per-question display order of option indices (anti-guessing shuffling on retry).
  const [order, setOrder] = useState<number[][]>(() =>
    questions.map((q) => q.options.map((_, i) => i)),
  );

  const allAnswered = questions.every((_, i) => answers[i] !== undefined);
  const score = questions.filter((q, i) => answers[i] === q.answer).length;
  const passed = submitted && score === questions.length;
  const failed = submitted && score < questions.length;

  const handleResetQuiz = () => {
    setSubmitted(false);
    setAnswers({});
    // Shuffle option placement so students can't memorize button positions.
    setOrder(questions.map((q) => shuffle(q.options.map((_, i) => i))));
  };

  // Auto-lock progress permanently when the student gets a perfect score.
  useEffect(() => {
    if (passed) onComplete();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [passed]);


  return (
    <Card className="mint-card-shadow">
      <CardHeader>
        <CardTitle>Practice Quiz</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-sm text-muted-foreground">{intro}</p>

        {questions.map((q, qi) => (
          <div key={qi} className="space-y-3">
            <p className="font-medium">
              {qi + 1}. {q.q}
            </p>
            <div className="grid gap-2 sm:grid-cols-2">
              {order[qi].map((oi) => {
                const opt = q.options[oi];
                const selected = answers[qi] === oi;
                const correct = submitted && oi === q.answer;
                const wrong = submitted && selected && oi !== q.answer;
                return (
                  <button
                    key={oi}
                    type="button"
                    disabled={submitted}
                    onClick={() => setAnswers((a) => ({ ...a, [qi]: oi }))}
                    className={`rounded-xl border-2 px-4 py-2.5 text-left text-sm transition-all ${
                      correct
                        ? "border-primary bg-primary/10"
                        : wrong
                          ? "border-destructive bg-destructive/10"
                          : selected
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/40 hover:bg-muted"
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        {/* Diagnostic hint box — only shown when score is not perfect */}
        {failed && (
          <div className="flex items-start gap-3 rounded-2xl border-2 border-amber-400 bg-amber-50 p-4 text-amber-900">
            <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" />
            <p className="text-sm font-medium leading-relaxed">{hintText}</p>
          </div>
        )}

        <div className="pt-2">
          {!submitted ? (
            <Button
              disabled={!allAnswered}
              onClick={() => setSubmitted(true)}
              className="bg-cta text-cta-foreground cta-shadow hover:bg-cta/90"
            >
              Check Answers
            </Button>
          ) : (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant={passed ? "default" : "secondary"} className="py-1.5 text-sm">
                  Score: {score}/{questions.length}
                </Badge>
                {done && (
                  <Badge className="gap-1 bg-primary text-primary-foreground">
                    <CheckCircle2 className="h-3.5 w-3.5" /> Saved
                  </Badge>
                )}
              </div>

              {passed ? (
                <div className="flex justify-end">
                  <Button
                    asChild
                    className="animate-bounce rounded-xl bg-primary px-6 font-bold text-primary-foreground shadow-md hover:bg-primary/90"
                  >
                    <Link to={nextTo} className="gap-1.5">
                      Fantastic Job! Go to Next Mission <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              ) : (
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <Button
                    variant="ghost"
                    className="gap-2 text-muted-foreground"
                    onClick={onBackToExplore}
                  >
                    <ArrowLeft className="h-4 w-4" /> Back to Explore Simulation
                  </Button>
                  <Button variant="outline" className="rounded-xl" onClick={handleResetQuiz}>
                    🔄 Reset &amp; Rethink Questions
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
