import {useState} from 'react';
import Image from 'next/image';
import {useSession} from 'next-auth/react';
import UserPanel from './user-panel';

export default function UserButton() {
  const [isActive, setIsActive] = useState(false);
  const {data: session} = useSession();

  return (
    <>
      <button
        type="button"
        onClick={() => setIsActive(true)}
        className="h-full overflow-hidden rounded-full bg-white"
      >
        <Image src={session!.user?.image || ''} alt="my profile image" width={32} height={32} />
      </button>

      <UserPanel isActive={isActive} onClose={() => setIsActive(false)} />
    </>
  );
}
