interface ButtonProps {
  children: React.ReactNode;
  variant: 'main';
  className?: string;
  onClick?: () => void;
}
export function Button({children, variant, className, onClick}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${className} ${
        variant === 'main' &&
        'rounded-full border-2 bg-black bg-opacity-40 py-1 px-6 transition-all hover:-translate-y-1 hover:border-primary-500 hover:bg-primary-500 hover:shadow-[_2px_5px_10px_rgba(0,0,0,0.3)]'
      }`}
    >
      {children}
    </button>
  );
}
