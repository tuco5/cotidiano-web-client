import Head from 'next/head';
import {GetServerSidePropsContext} from 'next';
import {Card} from '@/components/interface';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {useWindowSize} from '@/hooks/useWindowSize';
import {tabPort} from '@/constants/breakpoints';

export default function Catalog() {
  const {width} = useWindowSize();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
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
        <div className="flex w-full max-w-5xl flex-col items-center">
          <div className="2-full block h-14 w-full">&nbsp;</div>

          <h2 className="w-full py-4 px-0.5 text-left text-5xl">Nuevas ofertas</h2>

          <Slider className="mt-6 w-3/4 sm:w-11/12" {...sliderSettings}>
            <Card
              title="Casa bonita"
              location="Valle Real, Guadalajara"
              locationLink="#"
              price={2500000}
              surface={120}
              picture="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              type="venta"
            />
            <Card
              title="Casa bonita"
              location="Valle Real, Guadalajara"
              locationLink="#"
              price={2500000}
              surface={120}
              picture="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              type="venta"
            />
            <Card
              title="Casa bonita"
              location="Valle Real, Guadalajara"
              locationLink="#"
              price={2500000}
              surface={120}
              picture="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              type="venta"
            />
          </Slider>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps({res, req}: GetServerSidePropsContext) {
  res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');

  return {
    props: {},
  };
}
