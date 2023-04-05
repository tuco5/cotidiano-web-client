interface GradientProps {
  opacity: number;
  variant: 'royal';
}

export function Gradient({opacity, variant}: GradientProps) {
  return (
    <div
      className={`absolute z-0 block h-screen w-full bg-royal ${variant === 'royal' && 'bg-royal'}`}
      style={{opacity: opacity}}
    >
      &nbsp;
    </div>
  );
}
