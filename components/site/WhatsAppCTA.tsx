import { MessageCircle } from "lucide-react";

const whatsappHref =
  "https://wa.me/?text=Hi%20008Hub%2C%20I%27d%20like%20to%20connect%20my%20local%20business.";

type WhatsAppCTAProps = { className?: string; compact?: boolean };

export function WhatsAppCTA({ className = "", compact = false }: WhatsAppCTAProps) {
  return (
    <a
      className={`whatsapp-cta ${compact ? "whatsapp-cta--compact" : ""} ${className}`}
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Connect with 008Hub on WhatsApp"
    >
      <MessageCircle aria-hidden="true" size={compact ? 18 : 20} strokeWidth={2.2} />
      <span>Connect with WhatsApp</span>
    </a>
  );
}
