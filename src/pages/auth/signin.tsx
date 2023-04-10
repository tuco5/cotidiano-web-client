import {getProviders, signIn, useSession} from 'next-auth/react';
import type {Provider} from 'next-auth/providers';
import {GetServerSideProps} from 'next';
import GoogleIcon from '/public/icons/google.svg';
import {useRouter} from 'next/router';

export default function SignIn({providers}: {providers: Provider[]}) {
  const {data: session} = useSession();
  const router = useRouter();

  if (session) {
    router.push('/');
  }

  return (
    <main className="flex h-screen items-center justify-center bg-gray-800 ">
      <div className="flex min-h-[240px] min-w-[300px] flex-col items-center rounded-md bg-primary-100">
        <h2 className="mb-4 w-full p-8 text-center text-xl font-semibold">Sign in</h2>

        {Object.values(providers).map(provider => (
          <div
            className="mb-4 flex w-full flex-col items-center justify-center"
            key={provider.name}
          >
            <button
              type="button"
              onClick={() => signIn(provider.id)}
              className="flex w-[85%] items-center justify-center rounded-lg border border-gray-200 bg-white px-2 py-1.5"
            >
              <GoogleIcon className="h-8 w-8" />
              <span className="pl-2 text-sm text-gray-600">Sign in with {provider.name}</span>
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

export async function getServerSideProps(context: GetServerSideProps) {
  const providers = await getProviders();
  return {
    props: {providers},
  };
}
