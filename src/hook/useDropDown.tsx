import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../redux/queryReducer";
import { RootState } from "../redux/store";
import {UseDropDownParam} from '../types/interfaces'

export const useDropDown: UseDropDownParam  = (name, status, isLimit) => {
  const dispatch = useDispatch()
  const state = useSelector((state : RootState)=>state.queryReducer)
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
      if(isLimit){
        dispatch(changeFilter({
          ...state,
          limit : (target as HTMLButtonElement).value
        }))
      }else{
        dispatch(changeFilter({
          ...state,
          filter : (target as HTMLButtonElement).value
        }))
      }

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