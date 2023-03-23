import {useSession} from 'next-auth/react';
import SigninButton from './signin-button';
import UserButton from './user-button';

export default function UserMenu() {
  const {status} = useSession();

  if (status === 'authenticated') {
    return <UserButton />;
  }

  return <SigninButton />;
}
