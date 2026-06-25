"use client";

function renderInline(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code key={i} className="rounded bg-black/10 px-1 py-0.5 font-mono text-[0.85em] dark:bg-white/10">
          {part.slice(1, -1)}
        </code>
      );
    }
    return part;
  });
}

export function TutorMessageContent({ content }: { content: string }) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let inCode = false;
  let codeLines: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.trim().startsWith("```")) {
      if (inCode) {
        elements.push(
          <pre key={`code-${i}`} className="my-2 overflow-x-auto rounded-lg bg-black/10 p-3 font-mono text-xs leading-relaxed dark:bg-white/10">
            {codeLines.join("\n")}
          </pre>
        );
        codeLines = [];
        inCode = false;
      } else {
        inCode = true;
      }
      continue;
    }

    if (inCode) {
      codeLines.push(line);
      continue;
    }

    if (line.startsWith("## ")) {
      elements.push(
        <h3 key={i} className="mb-1 mt-3 text-base font-bold first:mt-0">
          {renderInline(line.replace("## ", ""))}
        </h3>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h4 key={i} className="mb-1 mt-2 text-sm font-semibold">
          {renderInline(line.replace("### ", ""))}
        </h4>
      );
    } else if (line.startsWith("- ")) {
      elements.push(
        <p key={i} className="ml-3 text-sm leading-relaxed">
          • {renderInline(line.replace("- ", ""))}
        </p>
      );
    } else if (line.startsWith("---")) {
      elements.push(<hr key={i} className="my-3 border-[var(--border)]" />);
    } else if (line.match(/^\d+\.\s/)) {
      elements.push(
        <p key={i} className="ml-3 text-sm leading-relaxed">
          {renderInline(line)}
        </p>
      );
    } else if (line.trim() === "") {
      elements.push(<div key={i} className="h-1" />);
    } else {
      elements.push(
        <p key={i} className="text-sm leading-relaxed">
          {renderInline(line)}
        </p>
      );
    }
  }

  return <div className="space-y-0.5">{elements}</div>;
}
