"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface AppSettings {
  darkMode: boolean;
  dyslexiaMode: boolean;
  ttsEnabled: boolean;
  language: string;
  fontSize: "sm" | "md" | "lg";
}

interface SettingsContextType extends AppSettings {
  setDarkMode: (v: boolean) => void;
  setDyslexiaMode: (v: boolean) => void;
  setTtsEnabled: (v: boolean) => void;
  setLanguage: (v: string) => void;
  setFontSize: (v: "sm" | "md" | "lg") => void;
  speak: (text: string) => void;
  mounted: boolean;
}

const defaultSettings: AppSettings = {
  darkMode: true,
  dyslexiaMode: false,
  ttsEnabled: false,
  language: "en",
  fontSize: "md",
};

const SettingsContext = createContext<SettingsContextType | null>(null);

function getInitialDarkMode(): boolean {
  if (typeof window === "undefined") return true;
  try {
    const saved = localStorage.getItem("science-hub-settings");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (typeof parsed.darkMode === "boolean") return parsed.darkMode;
    }
  } catch { /* ignore */ }
  return !window.matchMedia("(prefers-color-scheme: light)").matches;
}

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<AppSettings>(defaultSettings);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("science-hub-settings");
    if (saved) {
      try {
        setSettings({ ...defaultSettings, ...JSON.parse(saved) });
      } catch { /* ignore */ }
    } else {
      setSettings((s) => ({ ...s, darkMode: getInitialDarkMode() }));
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("science-hub-settings", JSON.stringify(settings));
    document.documentElement.classList.toggle("dark", settings.darkMode);
    document.body.classList.toggle("dyslexia-friendly", settings.dyslexiaMode);
    document.body.classList.toggle("text-sm", settings.fontSize === "sm");
    document.body.classList.toggle("text-lg", settings.fontSize === "lg");
  }, [settings, mounted]);

  const update = (patch: Partial<AppSettings>) =>
    setSettings((s) => ({ ...s, ...patch }));

  const speak = (text: string) => {
    if (!settings.ttsEnabled || typeof window === "undefined") return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = settings.language === "en" ? "en-GB" : settings.language;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <SettingsContext.Provider
      value={{
        ...settings,
        mounted,
        setDarkMode: (v) => update({ darkMode: v }),
        setDyslexiaMode: (v) => update({ dyslexiaMode: v }),
        setTtsEnabled: (v) => update({ ttsEnabled: v }),
        setLanguage: (v) => update({ language: v }),
        setFontSize: (v) => update({ fontSize: v }),
        speak,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error("useSettings must be used within SettingsProvider");
  return ctx;
}
