import React from 'react'
import styles from '../styles/Header.module.css'

type Props = {}

function Header({}: Props) {
  return (
    <header className={styles.header}>
        <div className={styles.section_one}>
          <a
            href="./"
            // target="_blank"
            // rel="noopener noreferrer"
          >
            {/* TODO: */}
            {/* <div className={styles.logoContainer}>
              <img className={styles.logo} src="/images/me.jpg" alt="My Image" />
            </div> */}
            Zhaoyu Zhang
          </a>
        </div>

        <div className={styles.section_two}>
            <button type='button' className={styles.tablink}>Projects</button>
            <button type='button' className={styles.tablink}>Photos</button>
            <button type='button' className={styles.tablink}>About</button>
        </div>
    </header> 
  )
}

export default Header