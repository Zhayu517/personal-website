import Head from 'next/head'
import Header from '../components/Header'
import styles from '../styles/Cooking.module.css'

function Cooking({}) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Zhaoyu Zhang</title>
                <meta name="description" content="Zhaoyu Zhang's personal website" />
                <link rel="icon" href="/Images/me.jpg" />
            </Head>

            <Header />

            <main className={styles.main}>
                <h1>This Site is Under Development</h1>
            </main>
        </div>
    );
  }
  
  export default Cooking;