import Link from 'next/link';
import FacebookIcon from '../../../../public/icons/facebook.svg';
import InstagramIcon from '../../../../public/icons/instagram.svg';
import TiktokIcon from '../../../../public/icons/tiktok.svg';
import WhatsappIcon from '../../../../public/icons/whatsapp.svg';

interface SocialmediaButtonProps {
  href: string;
  variant: 'facebook' | 'instagram' | 'tiktok' | 'whatsapp';
}

export function SocialmediaButton({href, variant}: SocialmediaButtonProps) {
  return (
    <Link
      href={href}
      className="relative flex h-8 w-8 overflow-hidden rounded-full"
      target="_blank"
    >
      <Icon variant={variant} />
    </Link>
  );
}

function Icon({variant}: {variant: string}) {
  switch (variant) {
    case 'facebook':
      return (
        <FacebookIcon className=" h-full w-full bg-facebook bg-size-200 bg-pos-100 px-0.5 pt-0.5 transition-all duration-300 hover:bg-pos-0" />
      );
    case 'instagram':
      return (
        <InstagramIcon className="h-full w-full bg-instagram bg-size-200 bg-pos-100 pb-1 pt-0.5 pl-0.5 transition-all duration-300 hover:bg-pos-0" />
      );
    case 'tiktok':
      return (
        <TiktokIcon className="h-full w-full bg-tiktok bg-size-200 bg-pos-100 p-1 transition-all duration-300 hover:bg-pos-0" />
      );
    case 'whatsapp':
      return (
        <WhatsappIcon className="h-full w-full bg-whatsapp bg-size-200 bg-pos-100 p-1 transition-all duration-300 hover:bg-pos-0" />
      );
    default:
      return null;
  }
}
