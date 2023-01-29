import Head from "next/head"
import styles from '../../../styles/Home.module.scss'
const Loading = () => {
  return(
    <div className={styles.layout}>
    <div className={styles.wrapper}>
      <Head>
        <title>이창훈_FE_원티드</title>
      </Head>
      로딩 중 입니다...
    </div>
  </div>
  )
}
export default Loading