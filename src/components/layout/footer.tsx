import {SocialmediaButton} from '../interface';

export default function Footer() {
  return (
    <footer className="flex h-32 flex-col items-center justify-between bg-gray-900 p-2 text-sm text-white">
      <p>Siguenos:</p>
      <div className="flex h-full w-[220px] max-w-xs justify-between p-3 ">
        <SocialmediaButton
          variant="facebook"
          href="https://www.facebook.com/profile.php?id=100063645515254"
        />
        <SocialmediaButton
          variant="instagram"
          href="https://www.instagram.com/cotidiano.bienes.raices/"
        />
        <SocialmediaButton variant="tiktok" href="https://www.tiktok.com/@conecta.bienes.raices" />
        <SocialmediaButton
          variant="whatsapp"
          href="https://api.whatsapp.com/send?phone=+5213333960000&text=Hola!+quiero+pedir+informes"
        />
      </div>
      <p className="text-xs">© Copy Right 2023</p>
    </footer>
  );
}
