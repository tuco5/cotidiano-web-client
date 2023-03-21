import Panel from '../panel';

interface MenuPanelProps {
  isActive: boolean;
  onClose: () => void;
}
export default function MenuPanel({isActive, onClose}: MenuPanelProps) {
  return (
    <>
      <Panel side="left" onClose={onClose} isActive={isActive}>
        Menu
      </Panel>
    </>
  );
}
