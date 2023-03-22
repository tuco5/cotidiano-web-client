import {useEffect, useState} from 'react';
import {createPortal} from 'react-dom';

interface PortalProps {
  children: React.ReactNode;
}
export default function Portal({children}: PortalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (mounted) {
    return createPortal(children, document.getElementById('portal') as HTMLElement);
  }
  return null;
}
