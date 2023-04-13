import {useRouter} from 'next/router';
import Slider from 'react-slick';

export default function DetailEstatePage() {
  const router = useRouter();
  const {id} = router.query;

  return (
    <div>
      <Slider></Slider>
    </div>
  );
}
