import { Link, useRouterState } from "@tanstack/react-router";
import {
  Home,
  Rocket,
  Grid3x3,
  Scale,
  Percent,
  Trophy,
  NotebookPen,
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

const mainNav: NavItem[] = [
  { title: "Home", url: "/", icon: Home },
  { title: "Getting Started", url: "/getting-started", icon: Rocket },
];

const missionNav: NavItem[] = [
  { title: "Coordinates", url: "/coordinates", icon: Grid3x3, missionId: "coordinates" },
  { title: "Ratio", url: "/ratio", icon: Scale, missionId: "ratio" },
  { title: "Proportion", url: "/proportion", icon: Percent, missionId: "proportion" },
  { title: "Final Challenge", url: "/final-challenge", icon: Trophy, missionId: "final" },
  { title: "Mission Reflection", url: "/reflection", icon: ClipboardCheck },
];

const infoNav: NavItem[] = [
  { title: "About Project", url: "/about", icon: Info },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { isUnlocked, isCompleted } = useProgress();

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
          <SidebarGroupLabel>Overview</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>{mainNav.map(renderItem)}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Missions</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>{missionNav.map(renderItem)}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Appraisal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>{infoNav.map(renderItem)}</SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        {!collapsed && (
          <p className="px-2 py-1 text-[11px] text-muted-foreground">EDUP2112 · DSKP KSSR</p>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
