import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MotionWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function MotionWrapper({
  children,
  className,
}: MotionWrapperProps) {
  return <div className={cn(className)}>{children}</div>;
}
