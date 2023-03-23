import {useState} from 'react';
import MenuButton from './menu-button';
import MenuPanel from './menu-panel';

export default function Menu() {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <MenuButton onClick={() => setIsActive(true)} />
      <MenuPanel isActive={isActive} onClose={() => setIsActive(false)} />
    </>
  );
}
