import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zhaoyu Zhang</title>
        <meta name="description" content="Zhaoyu Zhang's personal website" />
        <link rel="icon" href="/Images/me.jpg" />
      </Head>

      <Header />

      <main className={styles.main}>

        <div className={styles.contentContainer}>
          <div className={styles.imageContainer}>
            <img className={styles.image} src={'/images/me.jpg'} alt="My Image" />
          </div>

          <h1 className={styles.title}>
            {/* <pre>
              ###### #    #   ##   #    # #####  #      ######
              #       #  #   #  #  ##  ## #    # #      #      
              #####    ##   #    # # ## # #    # #      ##### 
              #        ##   ###### #    # #####  #      #      
              #       #  #  #    # #    # #      #      #      
              ###### #    # #    # #    # #      ###### ######
            </pre> */}
            <a href="/">Zhaoyu Zhang</a>
          </h1>

          <p className={styles.description}>
            Get Connected with Me!
          </p>
        </div>

      </main>

      {/* <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          All rights reserved © Zhaoyu Zhang 2022
        </div>
      </footer> */}
      <Footer />
    </div>
  )
}

export default Home
