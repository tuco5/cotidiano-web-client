import Head from 'next/head';
import Image from 'next/image';
import {useWindowSize} from '@/hooks/useWindowSize';
import {Button, Carousel} from '@/components/interface';
import {tabLand} from '@/constants/breakpoints';
import imageOne from '../../public/images/home/guadalajara-1.jpg';
import imageTwo from '../../public/images/home/guadalajara-2.jpg';
import imageThree from '../../public/images/home/guadalajara-3.jpg';
import imageFour from '../../public/images/home/guadalajara-4.jpg';
import imageFive from '../../public/images/home/guadalajara-5.jpg';
import imageSix from '../../public/images/home/guadalajara-6.jpg';
import {Gradient} from '@/components/utils/gradient';
import Link from 'next/link';

const desktopPictures = [imageOne, imageTwo, imageThree];
const mobilePictures = [imageFour, imageFive, imageSix];

export default function HomePage() {
  const {width} = useWindowSize();
  const pictures = width < tabLand ? mobilePictures : desktopPictures;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Consultoría y acompañamiento personalizado para clientes en busca de comprar una propiedad adecuada."
        />
        <title>Cotidiano | Home</title>
      </Head>

      <main className="relative flex h-screen items-center justify-center text-white">
        <Gradient variant="royal" opacity={0.55} />
        <Carousel className="-z-10 h-screen w-screen" interval={4000}>
          {pictures.map((picture, i) => (
            // TODO: Optimize images
            <Image
              key={i}
              src={picture}
              alt={`slide ${i}`}
              fill
              style={{objectFit: 'cover'}}
              loading={i === 0 ? 'eager' : 'lazy'}
              className="animate-zoom-in"
            />
          ))}
        </Carousel>
        <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center text-center uppercase">
          <h1 className="text-5xl font-light md:text-6xl lg:text-8xl xl:text-9xl">Bienes raices</h1>
          <p className="mt-6 text-2xl font-thin md:text-3xl lg:text-4xl xl:text-5xl">Guadalajara</p>
          <Button variant="main" className="mt-10 md:text-xl lg:text-2xl">
            <Link href="/estate">Explorar</Link>
          </Button>
          <p className="mt-20 font-light normal-case md:text-xl lg:text-2xl">
            Contrata un asesor personal GRATIS
          </p>
        </div>
      </main>
    </>
  );
}
