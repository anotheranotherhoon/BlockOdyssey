import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "../redux/queryReducer";
import { RouterInfo } from "../utils/RouterInfo";

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
  const dispatch = useDispatch()
  const {filter, q, limit, page} = RouterInfo()
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