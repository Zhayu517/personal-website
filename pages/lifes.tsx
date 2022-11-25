import Header from '../components/Header'
import styles from '../styles/Lifes.module.css'
import Footer from '../components/Footer'
import Title from '../components/Title'

function Lifes({}) {
    return (
      <div className={styles.container}>
            <Title />
            <Header />
            <main className={styles.main}>
                <h1>This Site is Under Development</h1>
            </main>
            <Footer />
        </div>
    );
  }
  
  export default Lifes;