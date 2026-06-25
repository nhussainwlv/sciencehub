import { cn } from "@/lib/utils";

interface ProgressProps {
  value: number;
  max?: number;
  className?: string;
  showLabel?: boolean;
  color?: string;
}

export function Progress({ value, max = 100, className, showLabel, color }: ProgressProps) {
  const percent = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className={cn("w-full", className)}>
      {showLabel && (
        <div className="mb-1 flex justify-between text-xs text-slate-500">
          <span>Progress</span>
          <span>{Math.round(percent)}%</span>
        </div>
      )}
      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
        <div
          className={cn("h-full rounded-full transition-all duration-500", color ?? "bg-primary-500")}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
