interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-background border border-border rounded-xl p-6 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}