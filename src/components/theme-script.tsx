export function ThemeScript() {
  const script = `
    (function() {
      try {
        var stored = localStorage.getItem('science-hub-settings');
        var dark = true;
        if (stored) {
          var parsed = JSON.parse(stored);
          if (typeof parsed.darkMode === 'boolean') dark = parsed.darkMode;
        } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
          dark = false;
        }
        document.documentElement.classList.toggle('dark', dark);
      } catch (e) {}
    })();
  `;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
