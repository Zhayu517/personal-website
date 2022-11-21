import styles from '../styles/Footer.module.css'

type Props = {}

function Footer({}: Props) {
  return (
    <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          All rights reserved © Zhaoyu Zhang 2022
        </div>
    </footer>
  )
}

export default Footer