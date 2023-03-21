import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700'],
  subsets: ['latin'],
});

export default function Font() {
  return (
    <style jsx global>{`
      html {
        font-family: ${roboto.style.fontFamily};
      }
    `}</style>
  );
}
