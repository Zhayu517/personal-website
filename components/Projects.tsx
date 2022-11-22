import styles from '../styles/Projects.module.css'

type Props = {}

function Projects({}: Props) {
  return (
    <main className={styles.main}>
        <div className={styles.contentContainer}>
            <div className={styles.imageContainer}>
            <img className={styles.image} src={'/images/me.jpg'} alt="My Image" />
            </div>

            <h1 className={styles.title}>
                <a href="/">Zhaoyu Zhang</a>
            </h1>

            <p className={styles.description}>
                Get Connected with Me!
            </p>
        </div>
    </main>
  )
}

export default Projects