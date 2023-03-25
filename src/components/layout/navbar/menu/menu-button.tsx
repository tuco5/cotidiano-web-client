interface MenuButtonprops {
  onClick: () => void;
}
export default function MenuButton({onClick}: MenuButtonprops) {
  return (
    <button
      type="button"
      className="relative flex h-8 w-8 animate-move-right cursor-pointer items-center justify-center rounded-full transition-all duration-300 hover:translate-x-1"
      onClick={onClick}
    >
      <span className="relative inline-block h-[1px] w-5 bg-white transition-all duration-300 after:absolute after:left-0 after:top-1 after:inline-block after:h-[1px] after:w-4 after:bg-white">
        &nbsp;
      </span>
    </button>
  );
}
