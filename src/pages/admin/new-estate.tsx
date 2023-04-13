import Head from 'next/head';

export default function NewEstatePage() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Agregar una nueva propiedad." />
        <title>Cotidiano | Admin nueva propiedade</title>
      </Head>
      <main className="flex h-screen items-center justify-center bg-gray-800 text-white">
        <h2>Agrega nueva propiedad al catalogo</h2>
      </main>
    </>
  );
}
