import Logo from '@/components/layout/logo';
import Menu from './menu';

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 flex h-12 w-full items-center justify-between p-2">
      <Menu />
      <Logo />
      <UserMenu />
    </nav>
  );
}

function UserMenu() {
  return <div className="text-white">Sign up</div>;
}
