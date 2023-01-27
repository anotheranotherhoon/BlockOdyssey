import { useState } from "react";

interface UseDropDownResult {
  isDropDownShow : boolean;
  selectedName : string | null;
  selectedStatus : string | null;
  handleDropDown : ()=>void;
  handleCurrentIndex :  (e :React.MouseEvent<HTMLButtonElement, MouseEvent> )=>void;
}

interface UseDropDownParam {
  (name :  string |null,   status : string | null) : UseDropDownResult
}

export const useDropDown: UseDropDownParam  = (name, status ) => {
  const [isDropDownShow, setIsDropDownShow] = useState(false);
  const [selectedName, setSelectedName] = useState(name)
  const [selectedStatus, setSelectedStatus] = useState(status)
  const handleDropDown = () => {
    setIsDropDownShow(prev => !prev)
  }
  const handleCurrentIndex = (e :React.MouseEvent<HTMLButtonElement, MouseEvent> ) => {
    const {target} = e
    if(target){
      setIsDropDownShow(prev => !prev);
      setSelectedName((target as HTMLButtonElement).innerHTML)
      setSelectedStatus((target as HTMLButtonElement).value)
    }

  }
  return {
    isDropDownShow,
    selectedName, 
    selectedStatus,
    handleDropDown,
    handleCurrentIndex
  }
};