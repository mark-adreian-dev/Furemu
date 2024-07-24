import Image from "next/image";

interface Props {
  iconPath: string;
  className: string;
}

const IconButton: React.FC<Props> = ({ iconPath, className }) => {
  return (
    <div
      className={`bg-accent rounded-lg relative cursor-pointer ${className}`}
    >
      <Image
        src={iconPath}
        fill
        priority={true}
        quality={100}
        alt="control-icon"
        className="m-auto !w-5 !h-5 object-contain"
      />
    </div>
  );
};

export default IconButton;
