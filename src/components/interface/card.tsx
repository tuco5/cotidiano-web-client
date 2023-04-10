import Image from 'next/image';
import Link from 'next/link';
import LocationIcon from '../../../public/icons/location.svg';
import {EstateI} from '@/models/Estate';

let dollarUS = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

interface CardProps extends EstateI {
  id: string;
}

export function Card({
  title,
  location,
  locationUrl,
  price,
  type,
  surface,
  picture,
  id,
  status,
}: CardProps) {
  return (
    <div className="mx-auto h-80 w-min overflow-hidden bg-gray-900">
      <Link href={`/estate/${id}`}>
        <div className="relative h-3/5 w-60">
          <Image src={picture} alt={title} fill style={{objectFit: 'cover'}} />
          <div className="absolute top-1 right-1 bg-gray-100 px-2 py-1 text-xs text-black">
            {surface} m2
          </div>
        </div>
      </Link>

      <div className="flex h-32 flex-col justify-between px-2 py-4">
        <p className="">{title}</p>
        <Link href={locationUrl} className="flex items-center">
          <LocationIcon className="h-4 w-4 text-primary-300" />
          <p className="px-1 text-sm text-gray-300">{location}</p>
        </Link>

        <div className="flex justify-between">
          <p className="">{dollarUS.format(price)}</p>
          <p className="text-primary-300">{type}</p>
        </div>
      </div>
    </div>
  );
}
