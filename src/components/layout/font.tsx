import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['100', '300', '400', '500', '700'],
  subsets: ['latin'],
});

export default function Font() {
  return (
    <style jsx global>{`
      html {
        font-family: ${montserrat.style.fontFamily};
      }
    `}</style>
  );
}
