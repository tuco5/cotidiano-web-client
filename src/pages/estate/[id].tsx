import {GetServerSidePropsContext} from 'next';
import Link from 'next/link';
import connectMongo from '@/lib/mongoose';
import {EstateI, Estate} from '@/models/Estate';
import {Badge, Button, NavCarousel} from '@/components/interface';
import {dollarUS} from '@/utils/number-format';
import GoBackIcon from '/public/icons/go-back-arrow.svg';
import BedRoom from '/public/icons/bedroom.svg';
import BathRoom from '/public/icons/bathroom.svg';
import Measurement from '/public/icons/measurement.svg';
import Garage from '/public/icons/garage.svg';
import Jacuzzi from '/public/icons/jacuzzi.svg';

interface EstatePageProps {
  data: EstateI;
}

export default function DetailEstatePage({data}: EstatePageProps) {
  console.log(data);

  return (
    <div className="flex min-h-screen w-full bg-gray-800 text-white">
      <div className="mt-14 flex w-full flex-col items-center">
        {/* HEADER */}
        <div className="absolute top-14 z-10 w-full max-w-[800px]">
          <div className="relative flex w-full justify-center bg-gray-900 bg-opacity-60 px-4 py-2 text-center">
            <Link
              href="/estate"
              className="absolute left-5 top-1/4 h-5 w-5 rounded-full border-2 border-white text-white sm:h-7 sm:w-7"
            >
              <GoBackIcon />
            </Link>
            <h2 className="text-xl uppercase sm:text-2xl md:text-3xl">en {data.type}</h2>
          </div>
        </div>

        {/* CAROUSEL */}
        <NavCarousel slides={data.pictures} className="w-full max-w-[800px]" />

        {/* DETAILS */}
        <div className="flex w-full max-w-[800px] flex-col items-center">
          {/* MAIN */}
          <Badge status={data.status} className="mr-2 self-end" />
          <div className="mb-2 flex flex-col items-center py-2 sm:mb-4 md:mb-6">
            <p className="text-xl capitalize sm:text-2xl md:text-3xl">{data.title}</p>
            <p className="text-3xl sm:text-4xl md:text-5xl">{dollarUS.format(data.price)}</p>
          </div>

          {/* ICONS */}
          <div
            className="relative flex w-full max-w-[300px] justify-between self-start p-4
          text-primary-200"
          >
            {data.rooms && (
              <div className="flex flex-col items-center">
                <BedRoom className="h-8 w-8" />
                <p className="text-xs">{data.rooms}</p>
                <p className="text-xs">habs</p>
              </div>
            )}
            {data.baths && (
              <div className="flex flex-col items-center">
                <BathRoom className="h-8 w-8" />
                <p className="text-xs">{data.baths}</p>
                <p className="text-xs">baño</p>
              </div>
            )}
            {data.surface && (
              <div className="flex flex-col items-center">
                <Measurement className="h-8 w-8" />
                <p className="text-xs">{data.surface}</p>
                <p className="text-xs">m2</p>
              </div>
            )}
            {data.garage && (
              <div className="flex flex-col items-center">
                <Garage className="h-8 w-8" />
                <p className="text-xs">{data.garage}</p>
                <p className="text-xs">baño</p>
              </div>
            )}
            {data.jacuzzi && (
              <div className="flex flex-col items-center">
                <Jacuzzi className="h-8 w-8" />
                <p className="text-xs">{data.jacuzzi}</p>
                <p className="text-xs">baño</p>
              </div>
            )}
          </div>

          {/* CTA */}
          {data.status === 'disponible' && (
            <div className="my-4">
              <Button variant="cta">
                <Link href="/">Apartar</Link>
              </Button>
            </div>
          )}

          {/* DESCRIPTION */}
          <div className="mb-8 p-4 text-gray-200">{data.description}</div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({res, params}: GetServerSidePropsContext) {
  res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');

  try {
    await connectMongo();
    const estate = await Estate.findById(params!.id);
    const data = estate.toJSON();

    return {props: {data}};
  } catch (err) {
    console.error('estate_id_getServerProps', err);
    return {props: {}};
  }
}
