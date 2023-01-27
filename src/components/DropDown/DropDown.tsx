import React from "react";
import type {DropDownType} from '../../types/interfaces'

interface DropDownProps {
  isDropDownShow : boolean;
  selectedName : string | null;
  selectedStatus :string | null;
  handleDropDown : ()=>void;
  handleCurrentIndex: (e :React.MouseEvent<HTMLButtonElement, MouseEvent>)=>void;
  list : DropDownType[]
}

const DropDown = ({isDropDownShow, selectedName, selectedStatus, handleDropDown, handleCurrentIndex, list} : DropDownProps) => {
  return(
    <div>
    <button type='button' onClick={handleDropDown}>
      <span>{selectedName}</span>
    </button>
    {isDropDownShow && (
      <ul>
        {
          list.map((filter)=> (
            <li key={filter.id}>
              <button type="button" onClick={(e)=>handleCurrentIndex(e)} value={filter.status}>
                {filter.name}
              </button>
            </li>
          ))
        }
      </ul>
    )}
  </div>
  )
}

export default DropDown