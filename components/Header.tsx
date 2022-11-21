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
                {/* ##### #   #   #   #    #   ###<br/>  
                   #  #   #  # #  # #  #  #<br/>  
                  #   ##### ##### #  # # #  ##<br/>  
                 #    #   # #   # #   ## #   #<br/>  
                ##### #   # #   # #    #   ###<br/>  
                ###### #    #   ##   #    # #####  #      ######
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
            <div className={styles.linkContainer}>
              <a className={styles.linkItem} href="/">Projects</a>
              {/* <h3>Hello</h3> */}
            
              <a className={styles.linkItem} href="/cooking/">Cooking</a>
              <a className={styles.linkItem} href="/lifes/">Lifes</a> 
              <a className={styles.linkItem} href="/aboutme/">About Me</a>
            </div>
            <div className={styles.darkModeToggler} role="button" >
              <div className={styles.darkModeTogglerIcon}>
              </div>
            </div>
        </div>
    </header> 
  )
}

export default Header