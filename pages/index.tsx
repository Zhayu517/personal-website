import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Projects from '../components/Projects'
import Title from '../components/Title'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Title />
      <Header />
      <Projects />
      <Footer />
    </div>
  )
}

export default Home
