"use client";
import { Dispatch, SetStateAction, MutableRefObject, useEffect } from "react";
import Image from "next/image";
import { useGlobalContext } from "./SearchPage";

interface Props {
  setValue: Dispatch<SetStateAction<string>>;
  controller: MutableRefObject<AbortController | undefined>
  type: string,
  value: string;
}

const InputBox:React.FC<Props> = ({ setValue, controller, value, type }) => {
  const { setIsLoading, setPageCount } = useGlobalContext()

  const clearText = () => {
    setIsLoading(true)
    setValue("");
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    e.target.focus()
    setPageCount(1)
    setIsLoading(true)
    setValue(e.target.value);
    if(controller.current) controller.current.abort()
    
  }


  return (
    <div className="flex items-center gap-2 px-4 py-3.5 border-accent border-solid border-2 rounded-lg bg-transparent">
      <input
        id="input-box"
        type="text"
        className="grow text-sm text-white font-medium bg-transparent outline-none font-main"
        placeholder={`Search ${type}... `}
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
