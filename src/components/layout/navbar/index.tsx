import Logo from '@/components/layout/logo';
import Menu from './menu';
import UserMenu from './user-menu';

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 flex h-14 w-full items-center justify-between p-3">
      <Menu />
      <Logo />
      <UserMenu />
    </nav>
  );
}
