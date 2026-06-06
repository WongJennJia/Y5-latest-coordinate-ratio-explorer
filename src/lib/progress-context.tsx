import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type MissionId = "coordinates" | "ratio" | "proportion" | "final";

const ORDER: MissionId[] = ["coordinates", "ratio", "proportion", "final"];
const STORAGE_KEY = "math-explorer-progress";

type ProgressState = Record<MissionId, boolean>;

const DEFAULT_STATE: ProgressState = {
  coordinates: false,
  ratio: false,
  proportion: false,
  final: false,
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
  currentRole: Role;
  toggleRole: () => void;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [completed, setCompleted] = useState<ProgressState>(DEFAULT_STATE);
  const [currentRole, setCurrentRole] = useState<Role>("student");

  const toggleRole = useCallback(
    () => setCurrentRole((r) => (r === "student" ? "teacher" : "student")),
    [],
  );

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setCompleted({ ...DEFAULT_STATE, ...JSON.parse(raw) });
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
      currentRole,
      toggleRole,
    };
  }, [completed, isCompleted, isUnlocked, markComplete, resetProgress, currentRole, toggleRole]);

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress must be used within ProgressProvider");
  return ctx;
}
