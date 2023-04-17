interface BadgeProps {
  status: 'vendida' | 'disponible' | 'apartada';
  className?: string;
}
export function Badge({status, className}: BadgeProps) {
  return (
    <div
      className={`w-min rounded-full py-0.5 px-2 text-xs capitalize text-white
      ${status === 'vendida' && 'bg-sold'}
      ${status === 'apartada' && 'bg-deposit'}
      ${status === 'disponible' && 'bg-available'}
      ${className}`}
    >
      <p>{status}</p>
    </div>
  );
}
