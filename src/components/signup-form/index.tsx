import {useSession, signIn, signOut} from 'next-auth/react';

export default function SignupForm() {
  const {data: session, status} = useSession();
  console.log(session);
  if (status === 'authenticated') {
    return (
      <div>
        <h4>Ya estas autenticado!!</h4>
        <button>Home</button>
        <button type="button" onClick={() => signOut()}>
          Log out
        </button>
      </div>
    );
  }

  return (
    <div>
      <h4>Sign in to Cotidiano</h4>
      <button type="button" onClick={() => signIn()}>
        Accede con Google
      </button>
    </div>
  );
}
