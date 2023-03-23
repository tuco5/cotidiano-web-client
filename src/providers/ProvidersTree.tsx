import {SessionProvider} from 'next-auth/react';

interface ProvidersTreeProps {
  children: React.ReactNode;
}
export default function ProvidersTree({children}: ProvidersTreeProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
