"use client";

import { useState, Dispatch, SetStateAction } from "react";

interface Props {
  optionName: string;
  optionValue: string | number;
  activeValue: string | number;
  setActiveValue: Dispatch<SetStateAction<string | number>>;
}

const FilterItem: React.FC<Props> = ({
  optionName,
  optionValue,
  activeValue,
  setActiveValue,
}) => {
  const handleClick = () => {
    setActiveValue(optionValue);
  };

  return (
    <div
      className="option flex justify-start items-center"
      onClick={handleClick}
    >
      <div className="w-4 h-4 rounded-full mr-2 border-[0.5px] border-solid border-accent flex justify-center items-center">
        <div
          className={`state w-[10px] h-[10px] rounded-full ${
            optionValue === activeValue ? "bg-accent" : ""
          }`}
        ></div>
      </div>
      <p className="text-white ">{optionName}</p>
    </div>
  );
};

export default FilterItem;
