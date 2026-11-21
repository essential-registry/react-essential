import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeProviderState | undefined>(undefined);

const isTheme = (value: string | null): value is Theme =>
  value === "dark" || value === "light" || value === "system";

function readTheme(storageKey: string, fallback: Theme): Theme {
  const stored = localStorage.getItem(storageKey);
  return isTheme(stored) ? stored : fallback;
}

function resolve(theme: Theme): "dark" | "light" {
  if (theme !== "system") return theme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "essential-theme",
}: ThemeProviderProps) {
  const [current, setCurrent] = useState<Theme>(() =>
    readTheme(storageKey, defaultTheme)
  );

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(resolve(current));
  }, [current]);

  const value = useMemo<ThemeProviderState>(
    () => ({
      theme: current,
      setTheme: (next) => {
        localStorage.setItem(storageKey, next);
        setCurrent(next);
      },
    }),
    [current, storageKey]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export const useTheme = (): ThemeProviderState => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
