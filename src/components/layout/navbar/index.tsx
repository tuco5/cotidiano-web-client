import Logo from '@/components/layout/logo';
import Menu from './menu';
import UserMenu from './user-menu';
import {useWindowSize} from '@/hooks/useWindowSize';
import {tabPort} from '@/constants/breakpoints';
import DesktopMenu from './menu/desktop-menu';

export default function Navbar() {
  const {width} = useWindowSize();

  if (width > tabPort) {
    return (
      <nav className="absolute top-0 left-0 z-10 flex h-14 w-full justify-center bg-gray-700 bg-opacity-30 px-8">
        <div className="flex w-full max-w-[1400px] items-center justify-between">
          <Logo />
          <DesktopMenu />
          <UserMenu />
        </div>
      </nav>
    );
  }
  return (
    <nav className="absolute top-0 left-0 z-10 flex h-14 w-full items-center justify-between bg-gray-700 bg-opacity-30 p-3">
      <Menu />
      <Logo />
      <UserMenu />
    </nav>
  );
}
