import {signOut, useSession} from 'next-auth/react';
import Link from 'next/link';
import ListItem from '../list-item';
import Panel from '../panel';
import userOptions from './user-options.json';

interface UserPanelProps {
  isActive: boolean;
  onClose: () => void;
}
export default function UserPanel({isActive, onClose}: UserPanelProps) {
  const {data: session} = useSession();

  return (
    <Panel side="right" onClose={onClose} isActive={isActive}>
      <div className="border-b border-gray-200 p-4">
        <p className="text-xl font-medium">¡Hola!</p>
        <p className="text-ellipsis">{session?.user?.name}</p>
      </div>
      <div className="flex flex-col">
        {userOptions.map(({id, href, label}) => (
          <ListItem key={id} href={href} onClick={onClose}>
            {label}
          </ListItem>
        ))}
        <ListItem href="#" onClick={() => signOut()}>
          Cerrar Session
        </ListItem>
      </div>
    </Panel>
  );
}
