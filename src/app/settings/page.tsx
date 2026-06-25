"use client";

import { useSettings } from "@/components/providers/settings-provider";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { Eye, Volume2, Globe, Type } from "lucide-react";

function Toggle({ enabled, onChange, label }: { enabled: boolean; onChange: (v: boolean) => void; label: string }) {
  return (
    <button
      onClick={() => onChange(!enabled)}
      className={`relative h-6 w-11 rounded-full transition-colors ${enabled ? "bg-[var(--foreground)]" : "bg-[var(--border-strong)]"}`}
      aria-label={label}
    >
      <span
        className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-[var(--background)] transition-transform ${enabled ? "translate-x-5" : ""}`}
      />
    </button>
  );
}

export default function SettingsPage() {
  const {
    dyslexiaMode, setDyslexiaMode,
    ttsEnabled, setTtsEnabled,
    language, setLanguage,
    fontSize, setFontSize,
    speak,
  } = useSettings();

  const selectClass =
    "w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm text-[var(--foreground)]";

  return (
    <div className="app-shell mx-auto max-w-2xl px-4 py-8 sm:px-6">
      <h1 className="mb-8 text-2xl font-bold">Settings</h1>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Appearance</CardTitle>
            <CardDescription>Black &amp; white theme — switch between light and dark</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <div>
              <p className="font-medium">Theme</p>
              <p className="text-sm text-[var(--muted)]">Light (white) or dark (black) mode</p>
            </div>
            <ThemeToggle showLabel />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Type className="h-5 w-5" /> Font Size
            </CardTitle>
          </CardHeader>
          <CardContent>
            <select
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value as "sm" | "md" | "lg")}
              className={selectClass}
            >
              <option value="sm">Small</option>
              <option value="md">Medium</option>
              <option value="lg">Large</option>
            </select>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5" /> Accessibility
            </CardTitle>
            <CardDescription>Features to support all learners</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Dyslexia-Friendly Mode</p>
                <p className="text-sm text-[var(--muted)]">Increased spacing and readable font</p>
              </div>
              <Toggle enabled={dyslexiaMode} onChange={setDyslexiaMode} label="Toggle dyslexia mode" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Volume2 className="h-5 w-5" />
                <div>
                  <p className="font-medium">Text-to-Speech</p>
                  <p className="text-sm text-[var(--muted)]">Read content aloud</p>
                </div>
              </div>
              <Toggle enabled={ttsEnabled} onChange={setTtsEnabled} label="Toggle text to speech" />
            </div>
            {ttsEnabled && (
              <button
                onClick={() => speak("Text to speech is enabled.")}
                className="rounded-xl bg-[var(--surface)] px-4 py-2 text-sm"
              >
                Test Text-to-Speech
              </button>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" /> Language
            </CardTitle>
          </CardHeader>
          <CardContent>
            <select value={language} onChange={(e) => setLanguage(e.target.value)} className={selectClass}>
              <option value="en">English (UK)</option>
              <option value="cy">Cymraeg (Welsh)</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
            </select>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
