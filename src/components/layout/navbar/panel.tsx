import Image from 'next/image';
import Portal from '@/components/hoc/portal';

interface PanelProps {
  side: 'left' | 'right';
  onClose: () => void;
  isActive: boolean;
  children: React.ReactNode;
}
export default function Panel({side, onClose, isActive = false, children}: PanelProps) {
  return (
    <Portal>
      {/* BACKGDROP */}
      <div
        onClick={onClose}
        role="button"
        className={`fixed top-0 z-20 h-screen bg-black transition-all duration-300 ${
          side === 'right'
            ? isActive
              ? 'left-0 w-screen opacity-50'
              : '-left-full w-0 opacity-0'
            : isActive
            ? 'right-0 w-screen opacity-50'
            : '-right-full w-0 opacity-0'
        }`}
      >
        &nbsp;
      </div>

      {/* PANEL */}
      <div
        className={`fixed top-0 z-30 h-screen w-3/4 max-w-xs bg-white transition-all duration-300 ${
          side === 'left'
            ? isActive
              ? 'left-0'
              : '-left-full w-0'
            : isActive
            ? 'right-0'
            : '-right-full w-0'
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
          <div className="h-full w-full border-t">{children}</div>
        </div>
      </div>
    </Portal>
  );
}
