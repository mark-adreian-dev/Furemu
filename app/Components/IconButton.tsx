import Image from "next/image";
import path from "path";
import { Dispatch, SetStateAction } from "react";

interface Props {
  iconPath: string,
  className: string,
  handleClick?: () => void
}

const IconButton: React.FC<Props> = ({ iconPath, className, handleClick }) => {
  const iconFileName: string = iconPath.split("/")[2]
  
  return (
    <label
      className={`bg-accent rounded-lg relative cursor-pointer ${className}`}
      htmlFor={iconFileName === "hamburger_menu.svg" || iconFileName === "close_icon.svg" ? "my-drawer-4" : "my-drawer-4"}
      onClick={() => handleClick ? handleClick() : {}}
    >
      <Image
        src={iconPath}
        fill
        priority={true}
        quality={100}
        alt="control-icon"
        className="m-auto !w-5 !h-5 object-contain"
      />
    </label>
  );
};

export default IconButton;
