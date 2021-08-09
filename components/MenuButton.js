import { MenuAlt2Icon } from '@heroicons/react/outline';

function MenuButton() {
  return (
    <div className="pt-10">
      <div className="transition duration-500 ease-in-out flex group items-center border border-black hover:border-white hover:bg-[#00a6eb] object-scale-down">
        <MenuAlt2Icon className="transition duration-400 ease-in-out h-9 group-hover:text-white" />
        <p className="transition duration-400 ease-in-out group-hover:text-white text-lg pl-2">
          Menu
        </p>
      </div>
    </div>
  );
}

export default MenuButton;
