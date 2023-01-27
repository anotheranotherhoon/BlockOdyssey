import React from "react"
import { usePagination } from "../../hook/usePagination"
import DropDown from "../DropDown/DropDown"
import type { DropDownType } from "../../types/interfaces"
import { LIMIT } from "../../utils/constantValue"
export interface PaginationTotal {
  total: number
  isDropDownShow : boolean;
  selectedName : string | null;
  selectedStatus : string |null;
  handleDropDown : ()=>void;
  handleCurrentIndex: (e :React.MouseEvent<HTMLButtonElement, MouseEvent>)=>void;
}

const Pagination = ({ total,isDropDownShow, selectedName, selectedStatus, handleDropDown, handleCurrentIndex}: PaginationTotal) => {
  const { numPages, handlePreviousPage, handleNextPage, handleClickNumber } = usePagination(total)
  return (
    <React.Fragment>
      <DropDown isDropDownShow={isDropDownShow} selectedName={selectedName} selectedStatus={selectedStatus} handleDropDown={handleDropDown} handleCurrentIndex={handleCurrentIndex} list={LIMIT}/>
      <section>
        <button onClick={handlePreviousPage}>&lt;</button>
        {numPages && Array(numPages)
          .fill(undefined).map((_, i) => (
            <button key={i + 1} onClick={() => handleClickNumber(i + 1)}>
              {i + 1}
            </button>
          ))
        }
        <button onClick={handleNextPage}>&gt;</button>
      </section>
    </React.Fragment>

  )
}

export default Pagination