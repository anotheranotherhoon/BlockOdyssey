import { usePagination } from "../../hook/usePagination"
import { RouterInfo } from "../../utils/RouterInfo"

export interface PaginationTotal {
  total : number
}

const Pagination = ({total} : PaginationTotal )  => {
  const {numPages, handlePreviousPage, handleNextPage, handleClickNumber} = usePagination(total)
  return(
    <section>
      <button onClick={handlePreviousPage}>&lt;</button>
      {numPages && Array(numPages)
      .fill(undefined).map((_, i)=>(
        <button key={i+1} onClick={()=>handleClickNumber(i+1)}>
          {i+1}
        </button>
      ))
      }
      <button onClick={handleNextPage}>&gt;</button>
    </section>
  )
}

export default Pagination