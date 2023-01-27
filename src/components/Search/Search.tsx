import DropDown from '../DropDown/DropDown'
import styles from './Search.module.scss'

const Search = () => {
  return(
    <div className={styles.searchBox}>
      <div className={styles.bold} id={styles.split}>상품 검색</div>
      <section>
        <div className={styles.bold}>검색</div>
        <div>input</div>
        <div>조회</div>
      </section>
    </div>
  )
}

export default Search