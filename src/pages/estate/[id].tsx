import {useRouter} from 'next/router';

export default function DetailEstatePage() {
  const router = useRouter();
  const {id} = router.query;

  return <p className="flex h-screen items-center justify-center">Estate item id: {id}</p>;
}
