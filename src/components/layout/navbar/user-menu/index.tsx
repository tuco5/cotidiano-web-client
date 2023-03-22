import Link from 'next/link';
import AvatarIcon from '/public/icons/avatar.svg';

export default function UserMenu() {
  return (
    <Link href="/signup" className="flex h-full w-auto animate-move-left items-center">
      <AvatarIcon className="h-7 w-7 text-white"></AvatarIcon>;
    </Link>
  );
}
