import { useState, useEffect, useRef } from "react";
import { Sun, Moon, Coffee, Timer, X, Music, VolumeX, Type, Plus, Minus, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import adventureMusic from "@/assets/adventure-music.mp3.asset.json";

export function TopBarActions() {
  // --- Dark Mode State ---
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleDarkMode = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  };

  // --- Background Music State ---
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(adventureMusic.url);
      audioRef.current.loop = true;
    }
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      void audio.play();
      setIsPlaying(true);
    }
  };

  // --- Accessibility Text Scaler (100% <-> 200%) ---
  const [textScale, setTextScale] = useState(100);

  useEffect(() => {
    document.documentElement.style.fontSize = textScale === 100 ? "" : `${textScale}%`;
  }, [textScale]);

  const increaseTextScale = () => {
    setTextScale((prev) => Math.min(prev + 25, 200));
  };

  const decreaseTextScale = () => {
    setTextScale((prev) => Math.max(prev - 25, 100));
  };

  // --- Take a Break State ---
  const [isOpen, setIsOpen] = useState(false);
  const [breakMinutes, setBreakMinutes] = useState(5);
  const [breakSeconds, setBreakSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);

  // Main countdown driver loop
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (isActive) {
      interval = setInterval(() => {
        setTimeLeft((time) => {
          if (time <= 1) {
            setIsActive(false);
            // Keep overlay open when natural timer finishes to present the "Energy Recharged" view state safely
            return 0;
          }
          return time - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive]);

  const startBreakTimer = () => {
    const total = breakMinutes * 60 + breakSeconds;
    if (total <= 0) return;
    setTimeLeft(total);
    setIsActive(true);
    setIsOpen(false);
    setShowOverlay(true);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // Unified controller to unconditionally break potential dialog locked traps
  const handleManualDismiss = () => {
    setShowOverlay(false);
    if (!isActive) {
      setTimeLeft(0);
    }
  };

  const isTimerRunning = isActive && timeLeft > 0;

  return (
    <div className="ml-auto flex items-center gap-2">
      {/* Active Timer Pill Indicator */}
      {isTimerRunning && (
        <div className="flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">
          <Timer className="h-3.5 w-3.5 animate-spin" style={{ animationDuration: "4s" }} />
          Rest in {formatTime(timeLeft)}
          <button
            type="button"
            onClick={() => {
              setIsActive(false);
              setTimeLeft(0);
              setShowOverlay(false);
            }}
            className="ml-1 cursor-pointer rounded-full p-0.5 hover:bg-amber-200 dark:hover:bg-amber-800"
            aria-label="Cancel timer"
          >
            <X className="h-3 w-3" />
          </button>
        </div>
      )}

      {/* Configuration Input Dialog Trigger */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Take a break">
            <Coffee className="h-5 w-5" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>☕ Study Break Timer</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Protect your eyes, Adventurer! Set a screen-break timer to rest and stretch after
              intensive exploration.
            </p>
            <div className="flex items-center gap-3">
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium">Minutes:</span>
                <Input
                  type="number"
                  min={0}
                  max={60}
                  value={breakMinutes}
                  onChange={(e) => setBreakMinutes(Number(e.target.value))}
                  className="w-20 rounded-xl"
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium">Seconds:</span>
                <Input
                  type="number"
                  min={0}
                  max={59}
                  value={breakSeconds}
                  onChange={(e) => setBreakSeconds(Number(e.target.value))}
                  className="w-20 rounded-xl"
                />
              </div>
            </div>
            <Button onClick={startBreakTimer} className="w-full rounded-xl font-bold">
              Start Countdown
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Background Music */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMusic}
        aria-label={isPlaying ? "Pause background music" : "Play background music"}
        className={isPlaying ? "text-primary animate-pulse" : ""}
      >
        {isPlaying ? <Music className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
      </Button>

      {/* Font Scaler */}
      <div className="flex items-center gap-1 rounded-xl border border-border px-1 py-0.5">
        <Type className="h-4 w-4 text-muted-foreground" />
        <Button
          variant="ghost"
          size="icon"
          onClick={decreaseTextScale}
          disabled={textScale <= 100}
          aria-label="Decrease text size"
          className="h-8 w-8 rounded-lg"
        >
          <Minus className="h-4 w-4" />
        </Button>
        <span className="min-w-[3rem] text-center text-[11px] font-bold tabular-nums">
          {textScale}%
        </span>
        <Button
          variant="ghost"
          size="icon"
          onClick={increaseTextScale}
          disabled={textScale >= 200}
          aria-label="Increase text size"
          className="h-8 w-8 rounded-lg"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      {/* Dark Mode */}
      <Button variant="ghost" size="icon" onClick={toggleDarkMode} aria-label="Toggle dark mode">
        {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </Button>

      {/* Unified Screen Overlay View Framework - Fully Controlled and Visual-Protected */}
      <Dialog open={showOverlay} onOpenChange={setShowOverlay}>
        <DialogContent
          className="z-[9999] w-full max-w-md rounded-3xl border-2 border-primary/30 bg-card p-8 text-center shadow-2xl [&>button]:hidden max-h-[92vh] overflow-y-auto flex flex-col items-center justify-center gap-2"
          onInteractOutside={(e) => e.preventDefault()}
          onEscapeKeyDown={(e) => e.preventDefault()}
        >
          <DialogHeader className="sr-only">
            <DialogTitle>
              {isTimerRunning ? "Time to Rest Your Eyes!" : "Energy Recharged!"}
            </DialogTitle>
          </DialogHeader>

          {/* Dynamic Top Illustration Icon */}
          <div className="mb-2 text-6xl animate-bounce flex items-center justify-center h-16 w-16" style={{ animationDuration: "3s" }}>
            {isTimerRunning ? "🌴" : "✨"}
          </div>

          {/* Dynamic Header Titles Based On Timer State */}
          <h2 className="font-display text-2xl font-extrabold text-foreground tracking-tight">
            {isTimerRunning ? "Time to Rest Your Eyes!" : "Let's Continue the Journey!"}
          </h2>

          {/* Dynamic Live Ticker Block */}
          {isTimerRunning ? (
            <div className="my-4 min-h-[80px] flex flex-col items-center justify-center">
              <div className="font-display text-5xl font-extrabold tabular-nums text-primary tracking-tight">
                {formatTime(timeLeft)}
              </div>
              <p className="mt-1 text-xs text-muted-foreground uppercase tracking-wider font-bold">remaining</p>
            </div>
          ) : (
            <div className="my-3 min-h-[40px] px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200/50 flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 text-sm font-bold animate-pulse">
              <Sparkles className="h-4 w-4" /> Ready to explore again!
            </div>
          )}

          {/* Contextual Description text to avoid layout layout breaking splits */}
          <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
            {isTimerRunning 
              ? "Great job exploring math! Stand up, stretch your body, look out the window at something green, and grab a glass of water."
              : "Your eyes are rested and your brain is fully recharged. Your mathematical adventure waits for your return!"
            }
          </p>

          {/* Action Interactive Call To Actions (Ensured Block Layout Positioning) */}
          <div className="mt-4 w-full pt-2">
            <Button
              type="button"
              onClick={handleManualDismiss}
              className="h-11 w-full cursor-pointer rounded-xl bg-primary font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:opacity-90 active:scale-[0.98]"
            >
              {isTimerRunning ? "Continue Anyway" : "Return to Adventure!"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
