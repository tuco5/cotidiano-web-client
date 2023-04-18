import Head from 'next/head';
import {GetServerSidePropsContext} from 'next';
import connectMongo from '@/lib/mongoose';
import {EstateI, Estate} from '@/models/Estate';
import {Card} from '@/components/interface';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {useWindowSize} from '@/hooks/useWindowSize';
import {tabPort} from '@/constants/breakpoints';

interface EstatePageProps {
  data: EstateI[];
}

export default function EstatePage({data}: EstatePageProps) {
  const {width} = useWindowSize();

  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: width < tabPort ? 1 : 3,
    slidesToScroll: 1,
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Consultoría y acompañamiento personalizado para clientes en busca de comprar una propiedad adecuada."
        />
        <title>Cotidiano | Catalogo de propiedades</title>
      </Head>

      <main className="flex min-h-screen justify-center bg-gray-800 text-white">
        <div className="mt-14 flex w-full max-w-5xl flex-col items-center">
          <h2 className="w-full py-4 px-2 text-left text-4xl">Nuevas ofertas</h2>

          <Slider className="mt-6 w-3/4 sm:w-11/12" {...sliderSettings}>
            {data?.map(
              (
                {id, title, location, locationUrl, price, type, surface, pictures, status},
                index
              ) => {
                if (status === 'disponible')
                  return (
                    <Card
                      key={id}
                      id={id}
                      title={title}
                      location={location}
                      locationUrl={locationUrl}
                      price={price}
                      surface={surface}
                      pictures={pictures}
                      type={type}
                      status={status}
                      priority={index === 0}
                    />
                  );
              }
            )}
          </Slider>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps({res, req}: GetServerSidePropsContext) {
  res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');

  try {
    await connectMongo();
    const estates = await Estate.find();
    const data = estates.map(estate => estate.toJSON());

    return {props: {data}};
  } catch (err) {
    console.error(err);
    return {props: {}};
  }
}
