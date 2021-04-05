// import Image from 'next/Image';

import styles from './index.module.css';

function Footer() {
    return (
        <footer className={styles.footerContainer}>      
            <div className={styles.footerContato}>                
                {/* <Image 
                    className={styles.logo}
                    src="/images/brand-colorful.png"
                    alt="Logomarca da CotApp"
                    width=""
                    height=""
                />                 */}
            </div>
            <div className={styles.footerInstitucional}>
                <h3>Institucional</h3>
            </div>                              
        </footer>
    )
}

export default Footer;