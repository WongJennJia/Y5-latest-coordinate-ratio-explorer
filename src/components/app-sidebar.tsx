import { Link, useRouterState } from "@tanstack/react-router";
import {
  Home,
  Rocket,
  Grid3x3,
  Scale,
  Percent,
  Trophy,
  ClipboardCheck,
  BookOpen,
  Info,
  Lock,
  CheckCircle2,
  Compass,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useProgress, type MissionId } from "@/lib/progress-context";

type NavItem = {
  title: string;
  url: string;
  icon: typeof Home;
  missionId?: MissionId;
};

const studentNav: NavItem[] = [
  { title: "Home", url: "/", icon: Home },
  { title: "Getting Started", url: "/getting-started", icon: Rocket },
  { title: "Coordinates", url: "/coordinates", icon: Grid3x3, missionId: "coordinates" },
  { title: "Ratio", url: "/ratio", icon: Scale, missionId: "ratio" },
  { title: "Proportion", url: "/proportion", icon: Percent, missionId: "proportion" },
  { title: "Final Challenge", url: "/final-challenge", icon: Trophy, missionId: "final" },
  { title: "Mission Reflection", url: "/student-feedback", icon: ClipboardCheck },
  { title: "About Project", url: "/about", icon: Info },
];

const appraisalNav: NavItem[] = [
  { title: "Teacher Reflection", url: "/reflection", icon: BookOpen },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const {
    isUnlocked,
    isCompleted,
    currentRole,
    toggleRoleWithPin,
    unlockAllMissions,
    resetAllProgress,
  } = useProgress();

  const renderItem = (item: NavItem) => {
    const active = pathname === item.url;
    const unlocked = item.missionId ? isUnlocked(item.missionId) : true;
    const done = item.missionId ? isCompleted(item.missionId) : false;

    return (
      <SidebarMenuItem key={item.title}>
        <SidebarMenuButton asChild isActive={active} tooltip={item.title}>
          <Link to={item.url} className="flex items-center gap-3">
            <item.icon className="h-[18px] w-[18px] shrink-0" />
            {!collapsed && <span className="font-medium">{item.title}</span>}
            {!collapsed && item.missionId && (
              <span className="ml-auto">
                {done ? (
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                ) : !unlocked ? (
                  <Lock className="h-3.5 w-3.5 text-muted-foreground" />
                ) : null}
              </span>
            )}
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  };

  const handleSwitch = () => {
    if (currentRole === "student") {
      const pass = window.prompt("🔑 Enter Teacher Security PIN:");
      if (pass === "2112") toggleRoleWithPin("2112");
      else if (pass !== null) window.alert("❌ Invalid PIN!");
    } else {
      toggleRoleWithPin("");
    }
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <Link to="/" className="flex items-center gap-2.5 px-1 py-2">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground mint-card-shadow">
            <Compass className="h-5 w-5" />
          </span>
          {!collapsed && (
            <span className="flex flex-col leading-tight">
              <span className="font-display text-base font-extrabold text-foreground">Math Explorer</span>
              <span className="text-[11px] text-muted-foreground">Year 5 Adventure</span>
            </span>
          )}
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>🎒 Student Adventure</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>{studentNav.map(renderItem)}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {currentRole === "teacher" && (
          <SidebarGroup>
            <SidebarGroupLabel>📂 Appraisal &amp; Specs</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>{appraisalNav.map(renderItem)}</SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>

      <SidebarFooter>
        {!collapsed && (
          <div className="m-1 rounded-xl border border-primary/15 bg-mint-50/60 p-3">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[11px] font-bold text-foreground">🛠️ Dev Controller</span>
              <span className="rounded-md bg-primary/10 px-1.5 py-0.5 text-[10px] font-bold text-primary">
                {currentRole.toUpperCase()} VIEW
              </span>
            </div>
            <button
              onClick={handleSwitch}
              className="w-full rounded-lg bg-cta px-2 py-1.5 text-[11px] font-semibold text-cta-foreground transition-colors hover:bg-cta/90"
            >
              🔄 Switch Perspective
            </button>
            <div className="mt-2 flex gap-2">
              <button
                onClick={unlockAllMissions}
                className="flex-1 rounded-lg bg-primary/10 px-2 py-1.5 text-[10px] font-semibold text-primary transition-colors hover:bg-primary/20"
              >
                🔓 Unlock All
              </button>
              <button
                onClick={resetAllProgress}
                className="flex-1 rounded-lg bg-destructive/10 px-2 py-1.5 text-[10px] font-semibold text-destructive transition-colors hover:bg-destructive/20"
              >
                🔄 Reset Grid
              </button>
            </div>
            <p className="mt-2 text-[10px] text-muted-foreground">EDUP2112 · DSKP KSSR</p>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
