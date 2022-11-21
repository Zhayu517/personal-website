// import React from 'react'
import styles from '../styles/Header.module.css'

type Props = {}

function Header({}: Props) {
  return (
    <header className={styles.header}>
        <div className={styles.section_one}>
          <div className={styles.logoContainer}>
            <a href="/">
              {/* <pre> */}
              {/* <div className={styles.asciiArt}> */}
                Zhaoyu Zhang
                {/* ##### #   #   #   #    #   ###  
                   #  #   #  # #  # #  #  #
                  #   ##### ##### #  # # #  ##
                 #    #   # #   # #   ## #   #
                ##### #   # #   # #    #   ### */}
                {/* ###### #    #   ##   #    # #####  #      ######
                #       #  #   #  #  ##  ## #    # #      #      
                #####    ##   #    # # ## # #    # #      ##### 
                #        ##   ###### #    # #####  #      #      
                #       #  #  #    # #    # #      #      #      
                ###### #    # #    # #    # #      ###### ###### */}
              {/* </div> */}
              {/* </pre> */}
            </a>
          </div>
        </div>

        <div className={styles.section_two}>
            <a href="/">Projects</a>
            <a href="/cooking/">Cooking</a>
            <a href="/lifes/">Lifes</a> 
            <a href="/aboutme/">About Me</a>
            <div className={styles.darkModeToggler} role="button" >
              <div className={styles.darkModeTogglerIcon}>
              </div>
            </div>
        </div>
    </header> 
  )
}

export default Header