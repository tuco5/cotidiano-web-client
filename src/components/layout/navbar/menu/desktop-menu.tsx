import Link from 'next/link';
import {useRouter} from 'next/router';
import menuData from './menu-options.json';

export default function DesktopMenu() {
  return (
    <div className="flex h-full w-full max-w-[12rem] flex-row  justify-between text-white">
      {menuData.map(({id, ...props}, index) => (
        <>
          {index > 0 && <span className="flex h-full items-center font-thin">|</span>}
          <MenuItem key={id} {...props} />
        </>
      ))}
    </div>
  );
}

interface MenuItemProps {
  label: string;
  href: string;
}
function MenuItem({label, href}: MenuItemProps) {
  const {route} = useRouter();
  return (
    <>
      <Link
        href={href}
        className={`relative flex h-full items-center px-2 capitalize transition-all duration-300 after:absolute after:-bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-left after:rounded-full after:bg-primary-400 after:transition-transform hover:bg-white hover:bg-opacity-20 hover:text-white after:hover:scale-100 ${
          route === href
            ? 'bg-white bg-opacity-20 text-white after:scale-100'
            : ' text-gray-300 after:scale-x-0'
        }`}
      >
        {label}
      </Link>
    </>
  );
}
