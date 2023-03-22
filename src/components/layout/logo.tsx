import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex  items-center overflow-hidden text-sm text-primary-200 transition-all"
    >
      <Image
        src="/images/logo.png"
        width={34}
        height={34}
        alt="logo"
        className="animate-move-top"
      />
      <div className="-translate-x-2 overflow-hidden">
        <p className="h-fit w-fit translate-y-0.5 animate-write">otidiano</p>
      </div>
    </Link>
  );
}
