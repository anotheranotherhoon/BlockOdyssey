import { usePagination } from "../../hook/usePagination"
import { RouterInfo } from "../../utils/RouterInfo"
import styles from "./Pagination.module.scss"
import type { PaginationProps } from "../../types/interfaces"

const Pagination = ({ total}: PaginationProps) => {
  const { numPages, handlePreviousPage, handleNextPage, handleClickNumber } = usePagination(total)
  const {page} = RouterInfo()
  
  return (
      <section className={styles.pagination_wrapper}>
        <button onClick={handlePreviousPage} disabled={page === 1}>&lt;</button>
        {numPages && Array(numPages)
          .fill(undefined).map((_, i) => (
            <button 
            key={i + 1} 
            onClick={() => handleClickNumber(i + 1)}
            className={page=== i+1 ? styles.current : "null"}
            >
              {i + 1}
            </button>
          ))
        }
        <button onClick={handleNextPage} disabled={page === numPages}>&gt;</button>
      </section>

  )
}

export default Pagination