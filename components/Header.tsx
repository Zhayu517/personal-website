import styles from '../styles/Header.module.css'

type Props = {}

// function darkModeChanger() {
//   var element = document.body;
//   element.classList.toggle("dark-mode");
// }

function Header({}: Props) {
  return (
    <header className={styles.header}>
        <div className={styles.section_one}>
          <div className={styles.logoContainer}>
            <a href="/">
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
            </a>
          </div>
        </div>

        <div className={styles.section_two}>
            <div className={styles.linkContainer}>
              <a className={styles.linkItem} href="/">Projects</a>
              <a className={styles.linkItem} href="/cooking/">Cooking</a>
              <a className={styles.linkItem} href="/lifes/">Lifes</a> 
              <a className={styles.linkItem} href="/aboutme/">About Me</a>
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