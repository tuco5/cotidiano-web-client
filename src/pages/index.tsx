import Head from 'next/head';
import Image from 'next/image';
import {useWindowSize} from '@/hooks/useWindowSize';
import {Carousel} from '@/components/interface';
import {tabLand} from '@/constants/breakpoints';
import imageOne from '../../public/images/home/guadalajara-1.jpg';
import imageTwo from '../../public/images/home/guadalajara-2.jpg';
import imageThree from '../../public/images/home/guadalajara-3.jpg';
import imageFour from '../../public/images/home/guadalajara-4.jpg';
import imageFive from '../../public/images/home/guadalajara-5.jpg';
import imageSix from '../../public/images/home/guadalajara-6.jpg';
import {Gradient} from '@/components/utils/gradient';

const desktopPictures = [imageOne, imageTwo, imageThree];
const mobilePictures = [imageFour, imageFive, imageSix];

export default function Home() {
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
            <Image
              key={i}
              src={picture}
              alt={`slide ${i}`}
              fill
              style={{objectFit: 'cover'}}
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          ))}
        </Carousel>
      </main>
    </>
  );
}
