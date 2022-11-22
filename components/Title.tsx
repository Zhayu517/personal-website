import Head from 'next/head'
import styles from '../styles/Title.module.css'

type Props = {}

function Title({}: Props) {
  return (
    <Head>
        <title className={styles.not_in_use}>Zhaoyu Zhang</title>
        <meta name="description" content="Zhaoyu Zhang's personal website" />
        <link rel="icon" href="/Images/me.jpg" />
    </Head>
  )
}

export default Title