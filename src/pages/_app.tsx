import type {AppProps} from 'next/app';
import ProvidersTree from '@/providers/ProvidersTree';
import Layout from '@/components/layout';
import '@/styles/globals.css';

export default function App({Component, pageProps}: AppProps) {
  console.log(pageProps);
  return (
    <ProvidersTree>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ProvidersTree>
  );
}
