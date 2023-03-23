import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Consultoría y acompañamiento personalizado para clientes en busca de comprar una propiedad adecuada."
        />
        <title>Cotidiano | Home</title>
      </Head>

      <main className="flex h-screen items-center justify-center bg-gray-800 text-white">
        Main page
      </main>
    </>
  );
}
