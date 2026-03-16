// components/Button.tsx
import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

// Definiamo le proprietà che il nostro bottone può ricevere
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  icon?: string;
  href?: string; // Se passiamo un href, diventa automaticamente un Link di Next.js!
}

export default function Button({
  children,
  variant = "primary",
  icon,
  href,
  className = "",
  ...props
}: ButtonProps) {
  // Stili base (condivisi da tutti i bottoni)
  const baseStyles =
    "h-14 px-8 rounded-xl font-bold text-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-2";

  // Stili specifici per le varianti
  const variants = {
    primary: "btn-gradient text-white",
    secondary:
      "border border-accent-purple text-accent-purple hover:bg-accent-purple/5",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  // Il contenuto testuale + l'eventuale icona
  const content = (
    <>
      {children}
      {icon && <span className="material-symbols-outlined">{icon}</span>}
    </>
  );

  // Se gli passiamo un "href", renderizza un <Link> invece di un <button>
  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  // Altrimenti renderizza un normale bottone HTML
  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
}
