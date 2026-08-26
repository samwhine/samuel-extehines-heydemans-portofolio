import { Mail } from "lucide-react";
import type { ReactNode } from "react";

const EMAIL = "samuel.heydemanss@gmail.com";

export function ContactButton(): ReactNode {
  return (
    <a
      href={`mailto:${EMAIL}`}
      className="focus-ring group inline-flex h-11 cursor-pointer items-center justify-center gap-2 rounded-xl bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-90"
    >
      <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
      <span>Contact</span>
    </a>
  );
}
