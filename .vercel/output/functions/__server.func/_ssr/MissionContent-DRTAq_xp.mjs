import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { R as Root2, L as List, T as Trigger, C as Content } from "../_libs/radix-ui__react-tabs.mjs";
import { u as useProgress, B as Button, c as cn } from "./router-CB_-ibMA.mjs";
import { C as Card, b as CardHeader, c as CardTitle, a as CardContent } from "./card-CooUgIdt.mjs";
import { B as Badge } from "./badge-DCw9rMcX.mjs";
import { R as ResponsiveIframe } from "./ResponsiveIframe-TooxUA0R.mjs";
import { P as PageHeader } from "./PageHeader-DEQrH5tk.mjs";
import { m as missionsData } from "./missions-CyskUf-I.mjs";
import { L as Lock, f as CircleCheck, h as Sparkles, B as BookOpen, C as Compass, a as ClipboardCheck, A as ArrowRight, Q as ArrowLeft, V as Lightbulb } from "../_libs/lucide-react.mjs";
const Tabs = Root2;
const TabsList = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  List,
  {
    ref,
    className: cn(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className
    ),
    ...props
  }
));
TabsList.displayName = List.displayName;
const TabsTrigger = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Trigger,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = Trigger.displayName;
const TabsContent = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content,
  {
    ref,
    className: cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    ),
    ...props
  }
));
TabsContent.displayName = Content.displayName;
const TOPIC_HINTS = {
  coordinates: "💡 Explorer Tip: Remember that in a coordinate pair (x, y), the first number represents the horizontal position on the x-axis (paksi-x), and the second number represents the vertical position on the y-axis (paksi-y). To calculate the distance between two points on a flat grid line, look at the difference between the changing values! For example, the distance from (1, 3) to (6, 3) is 5 units because only the horizontal position changed.",
  ratio: "💡 Explorer Tip: A ratio compares parts directly in a specific order. If a question asks for a 'Part to Whole' (Bahagian kepada Keseluruhan) relationship, you must compare the requested item against the TOTAL combined sum of all items in the set rather than just the other item!",
  proportion: "💡 Explorer Tip: Proportion represents equivalent ratios (Kadar yang sama). To check if two separate relationships form a proper proportion, verify if they scale up or down by the exact same multiplier. For example, a base ratio of 1:4 scaled up uniformly by a factor of 2 becomes 2:8."
};
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function MissionContent({
  missionId,
  icon,
  nextTo,
  learnTool
}) {
  const mission = missionsData.missions.find((m) => m.id === missionId);
  const { isUnlocked, isCompleted, markComplete } = useProgress();
  const unlocked = isUnlocked(missionId);
  const done = isCompleted(missionId);
  const [activeTab, setActiveTab] = reactExports.useState("learn");
  if (!unlocked) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-md flex-col items-center gap-4 py-24 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-16 w-16 items-center justify-center rounded-2xl bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-7 w-7 text-muted-foreground" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold", children: "Mission Locked" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
        "Complete the previous mission first to unlock ",
        mission.title,
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: "Back to Roadmap" }) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PageHeader,
      {
        eyebrow: `Topic ${mission.topicCode}`,
        title: mission.title,
        description: mission.standard,
        icon,
        children: done ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "gap-1 bg-primary text-primary-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5" }),
          " Completed"
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
          " In Progress"
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 flex flex-wrap gap-2", children: mission.performanceLevels.map((pl) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "gap-1.5 border-primary/30 py-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-primary", children: pl.pl }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: pl.desc })
    ] }, pl.pl)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { value: activeTab, onValueChange: setActiveTab, className: "w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "grid w-full max-w-lg grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "learn", className: "gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-4 w-4" }),
          " Learn"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "explore", className: "gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "h-4 w-4" }),
          " Explore"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "practice", className: "gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardCheck, { className: "h-4 w-4" }),
          " Practice"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "learn", className: "mt-6 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mint-card-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Key Idea" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: mission.learn.intro }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid gap-2.5 sm:grid-cols-2", children: mission.learn.concepts.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: c })
            ] }, i)) })
          ] })
        ] }),
        learnTool ?? /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-dashed bg-mint-50/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base", children: "Interactive Helper" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-56 flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-primary/30 p-6 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-8 w-8 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: mission.learn.interactivePlaceholder }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Coming in the next build" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "secondary",
            onClick: () => setActiveTab("explore"),
            className: "gap-1.5 bg-mint-100 text-primary hover:bg-mint-100/80",
            children: [
              "Next Step: Explore Simulation ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "explore", className: "mt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mint-card-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "h-5 w-5 text-primary" }),
            " ",
            mission.explore.tool
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: mission.explore.note }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveIframe, { iframeKey: mission.id, src: mission.explore.embedUrl, title: `${mission.title} — Explore` })
          ] })
        ] }),
        "scratchUrl" in mission.explore && mission.explore.scratchUrl && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mt-6 overflow-hidden border-primary/10 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-mint-50/50 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "flex items-center gap-2 text-base font-bold text-foreground", children: "🎮 Scratch Coordinate Game Sandbox" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-video w-full overflow-hidden rounded-xl border bg-black shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "iframe",
              {
                src: mission.explore.scratchUrl,
                title: `${mission.title} — Scratch Game`,
                className: "h-full w-full",
                allowFullScreen: true,
                allow: "autoplay; fullscreen"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-center text-xs text-muted-foreground", children: "Tip: Click the green flag inside the Scratch player to test coordinates inside the game viewport!" })
          ] })
        ] }),
        "lumiUrl" in mission.explore && mission.explore.lumiUrl && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mt-6 overflow-hidden border-primary/10 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "bg-mint-50/50 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "flex items-center gap-2 text-base font-bold text-foreground", children: "🥤 Smoothie Making Masterclass (Interactive Video)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4 p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-amber-100 bg-amber-50/50 p-4 dark:border-slate-800 dark:bg-slate-900", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-2 text-xs font-extrabold uppercase tracking-wider text-amber-800 dark:text-amber-400", children: "📝 The Perfect Smoothie Recipe Ingredients:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid grid-cols-1 gap-1.5 text-sm font-medium text-foreground/90 sm:grid-cols-2", children: mission.explore.smoothieIngredients?.map((ing) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-primary", children: "✨" }),
                " ",
                ing
              ] }, ing)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-video w-full overflow-hidden rounded-xl border bg-black shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "iframe",
              {
                src: mission.explore.lumiUrl,
                title: `${mission.title} — Smoothie Masterclass`,
                className: "h-full w-full",
                allowFullScreen: true,
                allow: "geolocation *; microphone *; camera *; midi *; encrypted-media *"
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "ghost",
              onClick: () => setActiveTab("learn"),
              className: "gap-1.5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
                " Back to Lesson"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "secondary",
              onClick: () => setActiveTab("practice"),
              className: "gap-1.5 bg-mint-100 text-primary hover:bg-mint-100/80",
              children: [
                "Next Step: Practice Mission ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "practice", className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        PracticeQuiz,
        {
          questions: mission.practice.questions,
          intro: mission.practice.intro,
          onComplete: () => markComplete(missionId),
          done,
          nextTo,
          onBackToExplore: () => setActiveTab("explore"),
          hintText: TOPIC_HINTS[missionId] ?? TOPIC_HINTS.ratio
        }
      ) })
    ] })
  ] });
}
function PracticeQuiz({
  questions,
  intro,
  onComplete,
  done,
  nextTo,
  onBackToExplore,
  hintText
}) {
  const [answers, setAnswers] = reactExports.useState({});
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [order, setOrder] = reactExports.useState(
    () => questions.map((q) => q.options.map((_, i) => i))
  );
  const allAnswered = questions.every((_, i) => answers[i] !== void 0);
  const score = questions.filter((q, i) => answers[i] === q.answer).length;
  const passed = submitted && score === questions.length;
  const failed = submitted && score < questions.length;
  const handleResetQuiz = () => {
    setSubmitted(false);
    setAnswers({});
    setOrder(questions.map((q) => shuffle(q.options.map((_, i) => i))));
  };
  reactExports.useEffect(() => {
    if (passed) onComplete();
  }, [passed]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mint-card-shadow", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { children: "Practice Quiz" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: intro }),
      questions.map((q, qi) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-medium", children: [
          qi + 1,
          ". ",
          q.q
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-2 sm:grid-cols-2", children: order[qi].map((oi) => {
          const opt = q.options[oi];
          const selected = answers[qi] === oi;
          const correct = submitted && oi === q.answer;
          const wrong = submitted && selected && oi !== q.answer;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              disabled: submitted,
              onClick: () => setAnswers((a) => ({ ...a, [qi]: oi })),
              className: `rounded-xl border-2 px-4 py-2.5 text-left text-sm transition-all ${correct ? "border-primary bg-primary/10" : wrong ? "border-destructive bg-destructive/10" : selected ? "border-primary bg-primary/5" : "border-border hover:border-primary/40 hover:bg-muted"}`,
              children: opt
            },
            oi
          );
        }) })
      ] }, qi)),
      failed && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 rounded-2xl border-2 border-amber-400 bg-amber-50 p-4 text-amber-900", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbulb, { className: "mt-0.5 h-5 w-5 shrink-0 text-amber-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium leading-relaxed", children: hintText })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2", children: !submitted ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          disabled: !allAnswered,
          onClick: () => setSubmitted(true),
          className: "bg-cta text-cta-foreground cta-shadow hover:bg-cta/90",
          children: "Check Answers"
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: passed ? "default" : "secondary", className: "py-1.5 text-sm", children: [
            "Score: ",
            score,
            "/",
            questions.length
          ] }),
          done && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "gap-1 bg-primary text-primary-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5" }),
            " Saved"
          ] })
        ] }),
        passed ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            asChild: true,
            className: "animate-bounce rounded-xl bg-primary px-6 font-bold text-primary-foreground shadow-md hover:bg-primary/90",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: nextTo, className: "gap-1.5", children: [
              "Fantastic Job! Go to Next Mission ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
            ] })
          }
        ) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "ghost",
              className: "gap-2 text-muted-foreground",
              onClick: onBackToExplore,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
                " Back to Explore Simulation"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", className: "rounded-xl", onClick: handleResetQuiz, children: "🔄 Reset & Rethink Questions" })
        ] })
      ] }) })
    ] })
  ] });
}
export {
  MissionContent as M
};
