import ListItem from '../list-item';
import Panel from '../panel';
import menuData from './menu-options.json';

interface MenuPanelProps {
  isActive: boolean;
  onClose: () => void;
}
export default function MenuPanel({isActive, onClose}: MenuPanelProps) {
  return (
    <Panel side="left" onClose={onClose} isActive={isActive}>
      <div className="flex flex-col">
        {menuData.map(({id, href, label}) => (
          <ListItem key={id} href={href} onClick={onClose}>
            {label}
          </ListItem>
        ))}
      </div>
    </Panel>
  );
}
