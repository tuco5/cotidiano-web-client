interface ButtonProps {
  children: React.ReactNode;
  variant: 'main' | 'cta';
  className?: string;
  onClick?: () => void;
}
export function Button({children, variant, className, onClick}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${className} 
        ${
          variant === 'main' &&
          'rounded-full bg-black bg-opacity-60 bg-hover-main-btn bg-[length:220%] py-1 px-6 transition-all duration-500 hover:-translate-y-0.5 hover:bg-right hover:text-black active:translate-y-0'
        }
        ${
          variant === 'cta' &&
          'rounded-full bg-white bg-opacity-60 bg-hover-item bg-[length:220%] py-1 px-6 text-black transition-all duration-500 hover:-translate-y-0.5 hover:bg-right hover:text-white active:translate-y-0'
        }
      `}
    >
      {children}
    </button>
  );
}
