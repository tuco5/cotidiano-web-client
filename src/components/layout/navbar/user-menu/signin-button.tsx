import {signIn} from 'next-auth/react';
import AvatarIcon from '/public/icons/avatar.svg';

export default function SigninButton() {
  return (
    <button
      type="button"
      onClick={() => signIn()}
      className="flex h-full w-auto animate-move-left items-center"
    >
      <AvatarIcon className="h-7 w-7 text-white"></AvatarIcon>
    </button>
  );
}
