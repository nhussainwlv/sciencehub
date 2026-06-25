const INSTAGRAM_URL = "https://www.instagram.com/adrianjamesash/";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] py-8 text-center text-sm text-[var(--muted)]">
      <p className="font-medium text-[var(--foreground)]">Science Hub</p>
      <p className="mt-1">UK science learning for students</p>
      <p className="mt-3">
        Built by{" "}
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[var(--foreground)] underline underline-offset-2 transition-opacity hover:opacity-70"
        >
          @Adrian
        </a>
      </p>
    </footer>
  );
}
