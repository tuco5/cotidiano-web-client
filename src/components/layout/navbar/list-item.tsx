import Link from 'next/link';
import {useRouter} from 'next/router';

interface ListItemProps {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}
export default function ListItem({href, onClick, children}: ListItemProps) {
  const {route} = useRouter();
  console.log(route, href, route === href);
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`bg-hover-item bg-[length:220%] p-3 font-medium capitalize text-gray-600 transition-all duration-200 hover:bg-right hover:text-white active:bg-right active:text-white ${
        route === href && 'bg-right text-white'
      }`}
    >
      {children}
    </Link>
  );
}
