"use client";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";

const InputBox = ({
  value,
  setValue,
}: {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}) => {


  const clearText = () => {
    setValue("");
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <div className="input input-bordered flex items-center gap-2 px-4 py-3.5 border-accent border-solid border-2 rounded-lg">
      <input
        id="anime-query"
        type="text"
        className="grow text-sm text-white font-medium bg-transparent outline-none font-main"
        placeholder="Search Anime... "
        value={value}
        onChange={handleChange}
      />
      <div className={`relative w-4 h-4 cursor-pointer ${value === "" ? "hidden" : "block"}`} onClick={clearText}>
        <Image
          src={"/icons/clear_text_icon.svg"}
          alt="clear-icon"
          fill
          className="object-contain"
          priority={true}
          quality={100}
        />
      </div>
    </div>
  );
};

export default InputBox;
