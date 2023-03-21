import Image from 'next/image';

interface PanelProps {
  side: 'left' | 'right';
  onClose: () => void;
  isActive: boolean;
  children: React.ReactNode;
}
export default function Panel({side, onClose, isActive, children}: PanelProps) {
  return (
    <>
      <div
        onClick={onClose}
        role="button"
        className={`absolute top-0 h-screen w-screen bg-black opacity-50 transition-all duration-300 ${
          side === 'right'
            ? isActive
              ? 'left-0 opacity-50'
              : '-left-full opacity-0'
            : isActive
            ? 'right-0 opacity-50'
            : '-right-full opacity-0'
        }`}
      ></div>
      <div
        className={`absolute top-0 h-screen w-3/4 bg-white transition-all duration-300 ${
          side === 'left'
            ? isActive
              ? 'left-0'
              : '-left-full'
            : isActive
            ? 'right-0'
            : '-right-full'
        }`}
      >
        <div className="relative flex h-full w-full flex-col">
          <button
            type="button"
            onClick={onClose}
            className={`my-2 ml-4 h-8 w-8 ${side === 'left' ? 'self-start' : 'self-end'}`}
          >
            <Image src="/icons/close.png" width={16} height={16} alt="close" />
          </button>
          <div className="h-full w-full border-t p-2">{children}</div>
        </div>
      </div>
    </>
  );
}
