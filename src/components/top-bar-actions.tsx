import { useState, useEffect, useRef } from "react";
import { Sun, Moon, Coffee, Timer, X, Music, VolumeX, Type } from "lucide-react";
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

  // --- Take a Break State ---
  const [isOpen, setIsOpen] = useState(false);
  const [breakMinutes, setBreakMinutes] = useState(5);
  const [breakSeconds, setBreakSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0 && isActive) {
      setIsActive(false);
      setShowOverlay(true);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeLeft]);

  const startBreakTimer = () => {
    setTimeLeft(breakMinutes * 60 + breakSeconds);
    setIsActive(true);
    setIsOpen(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="ml-auto flex items-center gap-2">
      {/* Active Timer Indicator */}
      {isActive && (
        <div className="flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">
          <Timer className="h-3.5 w-3.5" />
          Rest in {formatTime(timeLeft)}
          <button
            type="button"
            onClick={() => setIsActive(false)}
            className="ml-1 cursor-pointer rounded-full p-0.5 hover:bg-amber-200 dark:hover:bg-amber-800"
            aria-label="Cancel timer"
          >
            <X className="h-3 w-3" />
          </button>
        </div>
      )}

      {/* Break Time Trigger Dialog */}
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
              intensive math exploration.
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

      {/* Background Music Toggle */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMusic}
        aria-label={isPlaying ? "Pause background music" : "Play background music"}
      >
        {isPlaying ? <Music className="h-5 w-5 text-primary" /> : <VolumeX className="h-5 w-5" />}
      </Button>

      {/* Dark Mode Toggle */}
      <Button variant="ghost" size="icon" onClick={toggleDarkMode} aria-label="Toggle dark mode">
        {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </Button>


      {/* Fullscreen Break Screen Overlay */}
      {showOverlay && (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background/95 p-6 text-center backdrop-blur-md">
          <div className="w-full max-w-md rounded-3xl border-2 border-primary/30 bg-card p-8 text-center shadow-2xl">
            <div className="mb-4 text-6xl">🌴</div>
            <h2 className="font-display text-2xl font-extrabold text-foreground">
              Time to Rest Your Eyes!
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Great job exploring math! Stand up, stretch your body, look out the window at something
              green, and grab a glass of water for 5 minutes.
            </p>
            <Button
              onClick={() => setShowOverlay(false)}
              className="mt-6 w-full rounded-xl bg-primary font-bold text-primary-foreground shadow-lg shadow-primary/20"
            >
              I am Back &amp; Refreshed!
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
