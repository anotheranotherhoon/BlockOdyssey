import styles from './ProductList.module.scss'

const ItemList = () => {
  return(
    <div className={styles.productListBox}>
      <div >상품번호</div>
      <div>상품명</div>
      <div>브랜드</div>
      <div>상품내용</div>
      <div>가격</div>
      <div>평점</div>
      <div>비고</div>
    </div>
  )
}

export default ItemList