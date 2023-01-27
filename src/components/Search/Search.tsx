import React from 'react'
import { useDropDown } from '../../hook/useDropDown'
import { useInput } from '../../hook/useInput'
import { RouterInfo } from '../../utils/RouterInfo'
import DropDown from '../DropDown/DropDown'
import styles from './Search.module.scss'
import { FILTER } from '../../utils/constantValue'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

export interface SearchPropsType {
  isDropDownShow : boolean;
  selectedName : string | null;
  selectedStatus : string |null;
  handleDropDown : ()=>void;
  handleCurrentIndex: (e :React.MouseEvent<HTMLButtonElement, MouseEvent>)=>void;
  limitSelectedStatus : string | null;
}

const Search = ({isDropDownShow, selectedName, selectedStatus, handleDropDown, handleCurrentIndex, limitSelectedStatus} : SearchPropsType) => {
  const {value, handleInputChange} = useInput()
  const {router} = RouterInfo()
  const handleSearch = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push(`/?filter=${selectedStatus}&q=${value}&page=${1}&limit=${limitSelectedStatus}`)
  }
  return (
    <div className={styles.searchBox}>
      <div className={styles.bold} id={styles.split}>상품 검색</div>
      <section>
        <div className={styles.bold}>검색</div>
        <form onSubmit={handleSearch}>
          <DropDown isDropDownShow={isDropDownShow} selectedName={selectedName} selectedStatus={selectedStatus} handleDropDown={handleDropDown} handleCurrentIndex={handleCurrentIndex} list={FILTER}/>
          <label htmlFor='q'/><input id='q' onChange={(e)=>handleInputChange(e)} value={value}/>
          <button>조회</button>
        </form>
      </section>
    </div>
  )
}

export default Search