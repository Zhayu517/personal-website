import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zhaoyu Zhang</title>
        <meta name="description" content="Zhaoyu Zhang's personal website" />
        <link rel="icon" href="/Images/me.jpg" />
      </Head>

      <main className={styles.main}>

        <div className={styles.imageContainer}>
          <Image className={styles.imageContainer} src={'/images/me.jpg'} alt="My Image" width={500} height={500}/>
        </div>

        <h1 className={styles.title}>
        <a href="/">Zhaoyu Zhang</a>
        </h1>

        <p className={styles.description}>
          Get Connected with Me!
        </p>

        <div className={styles.header}>
          Projects
          {/* Photos
          About Me */}
        </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/Images/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
