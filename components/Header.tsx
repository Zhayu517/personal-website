import styles from '../styles/Header.module.css'
import Link from 'next/link'

type Props = {}

function Header({}: Props) {
  return (
    <header className={styles.header}>
        <div className={styles.section_one}>
          <div className={styles.logoContainer}>
            <Link href="/">
                Zhaoyu Zhang
                {/* ##### #   #   #   #    #   ###  
                   #  #   #  # #  # #  #  # 
                  #   ##### ##### #  # # #  ## 
                 #    #   # #   # #   ## #   # 
                ##### #   # #   # #    #   ###
                ###### #    #   ##   #    # #####  #      ######
                #       #  #   #  #  ##  ## #    # #      #      
                #####    ##   #    # # ## # #    # #      ##### 
                #        ##   ###### #    # #####  #      #      
                #       #  #  #    # #    # #      #      #      
                ###### #    # #    # #    # #      ###### ###### */}
            </Link>
          </div>
        </div>

        <div className={styles.section_two}>
            <div className={styles.linkContainer}>
              <Link className={styles.linkItem} href="/">Projects</Link>
              <Link className={styles.linkItem} href="/cooking/">Cooking</Link>
              <Link className={styles.linkItem} href="/lifes/">Lifes</Link> 
              <Link className={styles.linkItem} href="/aboutme/">About Me</Link>
            </div>
            <button id="dark-mode-button" className={styles.darkModeToggler}>
              <div className={styles.darkModeTogglerIcon}>
              </div>
            </button>
        </div>
    </header> 
  )
}

export default Header