import React from "react";
import * as Icons from "lucide-react";

interface DynamicIconProps extends Icons.LucideProps {
  name: string;
}

export function DynamicIcon({ name, ...props }: DynamicIconProps) {
  const IconComponent =
    (Icons as unknown as Record<string, React.ComponentType<Icons.LucideProps>>)[name] ||
    Icons.HelpCircle;
  return <IconComponent {...props} />;
}
