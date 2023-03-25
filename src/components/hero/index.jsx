import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative h-screen w-full">
      {/* GRADIENT */}
      <div className={`absolute top-0 left-0 -z-10 block h-full w-full bg-celestial opacity-40`}>
        &nbsp;
      </div>

      {/* IMAGE */}
      <div className="relative -z-20 h-full w-full overflow-hidden">
        <Image
          src="/images/home/guadalajara-3.jpg"
          alt="guadalajara"
          fill
          loading="eager"
          style={{objectFit: 'cover', objectPosition: 'center'}}
        />
      </div>
    </div>
  );
}
