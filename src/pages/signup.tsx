import Head from 'next/head';
import SignupForm from '@/components/signup-form';

export default function Signup() {
  return (
    <>
      <Head>
        <title>Cotidiano | Signup</title>
      </Head>

      <main className="flex h-screen items-center justify-center bg-gray-800 text-white">
        <SignupForm />
      </main>
    </>
  );
}
