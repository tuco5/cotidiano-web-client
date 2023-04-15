import {GetServerSidePropsContext} from 'next';
import connectMongo from '@/lib/mongoose';
import {EstateI, Estate} from '@/models/Estate';
import {NavCarousel} from '@/components/interface';
import Link from 'next/link';

interface EstatePageProps {
  data: EstateI;
}

export default function DetailEstatePage({data}: EstatePageProps) {
  console.log(data);

  return (
    <div className="flex h-screen w-full bg-gray-800 text-white">
      <div className="mt-14 flex w-full flex-col">
        <div className="relative flex w-full justify-center p-4 text-center">
          <Link
            href="/estate"
            className="absolute left-5 top-1/4 h-7 w-7 rounded-full border-2 border-primary-200 text-primary-200"
          >
            &larr;
          </Link>
          <h2 className=" text-2xl">{data.title}</h2>
        </div>
        <NavCarousel slides={data.pictures} />
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
