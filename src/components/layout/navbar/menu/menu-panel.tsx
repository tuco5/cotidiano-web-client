import Link from 'next/link';
import Panel from '../panel';
import menuData from './menu-data.json';

interface MenuPanelProps {
  isActive: boolean;
  onClose: () => void;
}
export default function MenuPanel({isActive, onClose}: MenuPanelProps) {
  return (
    <>
      <Panel side="left" onClose={onClose} isActive={isActive}>
        <div className="flex flex-col">
          {menuData.map(({id, href, label}) => (
            <Link
              key={id}
              href={href}
              onClick={onClose}
              className="bg-hover-item bg-[length:220%] p-3 font-medium capitalize text-gray-600 transition-all duration-200 hover:bg-right hover:text-white active:bg-right active:text-white"
            >
              {label}
            </Link>
          ))}
        </div>
      </Panel>
    </>
  );
}
