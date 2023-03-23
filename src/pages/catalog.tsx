import Head from 'next/head';

export default function Catalog() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Consultoría y acompañamiento personalizado para clientes en busca de comprar una propiedad adecuada."
        />
        <title>Cotidiano | Catalogo de propiedades</title>
      </Head>

      <main className="flex h-screen items-center justify-center bg-gray-800 text-white">
        Catalog
      </main>
    </>
  );
}
