import Footer from './footer';
import Navbar from './navbar';
import Font from './font';

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({children}: LayoutProps) {
  return (
    <>
      <Font />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
