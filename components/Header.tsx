import React from 'react'
import styles from '../styles/Header.module.css'

type Props = {}

function Header({}: Props) {
  return (
    <div className={styles.header_wrapper} >
        <header className={styles.header}>
            <div className={styles.section_one}>
                <button type='button' className={styles.tablink}>Projects</button>
                <button type='button' className={styles.tablink}>Photos</button>
                <button type='button' className={styles.tablink}>About Me</button>
            </div>
        </header>
    </div>
  )
}

export default Header