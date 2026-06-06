import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type MissionId = "coordinates" | "ratio" | "proportion" | "final" | "reflection";

const ORDER: MissionId[] = ["coordinates", "ratio", "proportion", "final", "reflection"];
const STORAGE_KEY = "math-explorer-progress";
const POINTS_KEY = "math-explorer-points";

type ProgressState = Record<MissionId, boolean>;

const DEFAULT_STATE: ProgressState = {
  coordinates: false,
  ratio: false,
  proportion: false,
  final: false,
  reflection: false,
};

const ALL_COMPLETE: ProgressState = {
  coordinates: true,
  ratio: true,
  proportion: true,
  final: true,
  reflection: true,
};

export type Role = "student" | "teacher";

interface ProgressContextValue {
  completed: ProgressState;
  isCompleted: (id: MissionId) => boolean;
  isUnlocked: (id: MissionId) => boolean;
  markComplete: (id: MissionId) => void;
  resetProgress: () => void;
  completedCount: number;
  totalCount: number;
  percent: number;
  scorePoints: number;
  addPoints: (amount: number) => void;
  currentRole: Role;
  toggleRoleWithPin: (pin: string) => void;
  unlockAllMissions: () => void;
  resetAllProgress: () => void;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [completed, setCompleted] = useState<ProgressState>(DEFAULT_STATE);
  const [currentRole, setCurrentRole] = useState<Role>("student");
  const [scorePoints, setScorePoints] = useState<number>(0);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setCompleted({ ...DEFAULT_STATE, ...JSON.parse(raw) });
      const pts = localStorage.getItem(POINTS_KEY);
      if (pts) setScorePoints(Number(pts) || 0);
    } catch {
      /* ignore */
    }
  }, []);

  const persist = useCallback((next: ProgressState) => {
    setCompleted(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* ignore */
    }
  }, []);

  const persistPoints = useCallback((next: number) => {
    setScorePoints(next);
    try {
      localStorage.setItem(POINTS_KEY, String(next));
    } catch {
      /* ignore */
    }
  }, []);

  const addPoints = useCallback(
    (amount: number) => setScorePoints((prev) => {
      const next = prev + amount;
      try {
        localStorage.setItem(POINTS_KEY, String(next));
      } catch {
        /* ignore */
      }
      return next;
    }),
    [],
  );

  const isCompleted = useCallback((id: MissionId) => completed[id], [completed]);

  const isUnlocked = useCallback(
    (id: MissionId) => {
      const idx = ORDER.indexOf(id);
      if (idx <= 0) return true; // first mission always unlocked
      return completed[ORDER[idx - 1]];
    },
    [completed],
  );

  const markComplete = useCallback(
    (id: MissionId) => persist({ ...completed, [id]: true }),
    [completed, persist],
  );

  const resetProgress = useCallback(() => persist(DEFAULT_STATE), [persist]);

  const toggleRoleWithPin = useCallback((pin: string) => {
    setCurrentRole((prev) => {
      if (prev === "teacher") return "student";
      return pin === "2112" ? "teacher" : prev;
    });
  }, []);

  const unlockAllMissions = useCallback(() => {
    persist(ALL_COMPLETE);
    persistPoints(500);
  }, [persist, persistPoints]);

  const resetAllProgress = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(POINTS_KEY);
    } catch {
      /* ignore */
    }
    setCompleted(DEFAULT_STATE);
    setScorePoints(0);
    setCurrentRole("student");
  }, []);

  const value = useMemo<ProgressContextValue>(() => {
    const completedCount = ORDER.filter((id) => completed[id]).length;
    return {
      completed,
      isCompleted,
      isUnlocked,
      markComplete,
      resetProgress,
      completedCount,
      totalCount: ORDER.length,
      percent: Math.round((completedCount / ORDER.length) * 100),
      scorePoints,
      addPoints,
      currentRole,
      toggleRoleWithPin,
      unlockAllMissions,
      resetAllProgress,
    };
  }, [
    completed,
    isCompleted,
    isUnlocked,
    markComplete,
    resetProgress,
    scorePoints,
    addPoints,
    currentRole,
    toggleRoleWithPin,
    unlockAllMissions,
    resetAllProgress,
  ]);

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress must be used within ProgressProvider");
  return ctx;
}
