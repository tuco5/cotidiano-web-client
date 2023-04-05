import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex  items-center overflow-hidden text-sm text-white transition-all hover:scale-105"
    >
      <Image
        src="/images/logo-2.png"
        width={34}
        height={34}
        alt="logo"
        className="animate-move-top"
        priority
        loading="eager"
      />
      <div className="-translate-x-2 overflow-hidden">
        <p className="h-fit w-fit translate-y-0.5 animate-write">otidiano</p>
      </div>
    </Link>
  );
}
