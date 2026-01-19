import { memo } from "react";
import { searchProps } from "./types";

const GlobalSearch = ({ placeHolder, searchText, setSearchText }: searchProps) => {
  const handleSeachTextChange = (e: any) => {
    setSearchText(e.target.value);
  };

  return (
    <>
      <input
        onChange={handleSeachTextChange}
        name="search"
        value={searchText}
        placeholder={placeHolder}
        type="search"
        className={`
          px-2.5
          py-1.5
         border 
       border-white-25
         rounded-[10px]
         flex-1
         outline-0
       placeholder-white-25
       focus:border-[#7B7BF0] 
         text-center
       `}
      />
    </>
  );
};

export default memo(GlobalSearch);
