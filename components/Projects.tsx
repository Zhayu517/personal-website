import styles from '../styles/Projects.module.css'
import Link from 'next/link'

type Props = {}

function Projects({}: Props) {
  return (
    <main className={styles.main}>
        <div className={styles.contentContainer}>
            <div className={styles.imageContainer}>
              <img className={styles.image} src={'/personal-website/images/me.jpg'} alt="My Image" />
            </div>

            <h1 className={styles.title}>
                <Link href="/">Zhaoyu Zhang</Link>
            </h1>

            <p className={styles.description}>
                Get Connected with Me!
            </p>
        </div>
    </main>
  )
}

export default Projects