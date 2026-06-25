import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "warning" | "danger" | "outline";
}

export function Badge({ className, variant = "default", children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        {
          "bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300": variant === "default",
          "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300": variant === "success",
          "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300": variant === "warning",
          "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300": variant === "danger",
          "border border-slate-300 text-slate-600 dark:border-slate-600 dark:text-slate-400": variant === "outline",
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
