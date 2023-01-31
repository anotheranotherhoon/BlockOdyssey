import React from "react"
import { useDropDown } from "../../hook/useDropDown"
import { useInput } from "../../hook/useInput"
import { RouterInfo } from "../../utils/RouterInfo"
import DropDown from "../DropDown/DropDown"
import styles from "./Search.module.scss"
import { FILTER, LIMIT } from "../../utils/constantValue"

const Search = () => {
  const { value, handleInputChange } = useInput()
  const { router, filter,  limit, selectedFilterName } = RouterInfo()
  const {
    isDropDownShow: isFilterDropDownShow,
    selectedName: filterSelectedName,
    selectedStatus: filterSelectedStatus,
    handleDropDown: filterHandleDropDown,
    handleCurrentIndex: filterHandleCurrentIndex } = useDropDown(selectedFilterName, filter, false)
  const {
    isDropDownShow: isLimitDropDownShow,
    selectedName: limitSelectedName,
    selectedStatus: limitSelectedStatus,
    handleDropDown: limitHandleDropDown,
    handleCurrentIndex: limitHandleCurrentIndex } = useDropDown(String(limit), String(limit), true)

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push(`/?filter=${filterSelectedStatus}&q=${value}&page=${1}&limit=${limitSelectedStatus}`)
  }

  return (
    <div className={styles.search_box}>
      <div className={styles.bold} id={styles.split}>상품 검색</div>
      <section>
        <div className={styles.bold}>검색</div>
        <div className={styles.flex_container}>
          <DropDown isDropDownShow={isFilterDropDownShow} selectedName={filterSelectedName} selectedStatus={filterSelectedStatus} handleDropDown={filterHandleDropDown} handleCurrentIndex={filterHandleCurrentIndex} list={FILTER} />
          <DropDown isDropDownShow={isLimitDropDownShow} selectedName={limitSelectedName} selectedStatus={limitSelectedStatus} handleDropDown={limitHandleDropDown} handleCurrentIndex={limitHandleCurrentIndex} list={LIMIT} />
        </div>
        <form onSubmit={handleSearch}>
          <label htmlFor="q" /><input id="q" onChange={(e) => handleInputChange(e)} value={value} />
          <button>조회</button>
        </form>
      </section>
    </div>
  )
}

export default Search