import { Button } from '@material-ui/core';
import Link from 'next/link';
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import styles from './welcome.module.css';

function Welcome() {            

    return (
        <section id="welcome" className={`${styles.welcomeContainer} sub-header`}>                        

            <div className={`container ${styles.contents}`}>
                <div className="row">
                    <div className={`col-md-12 col-lg-6 text-light text-center ${styles.text}`}>
                        <ScrollAnimation
                            animateIn='animate__fadeIn'
                            animateOnce={true}
                        > 
                            <div className={`${styles.title} fw-bold`}>
                                <ScrollAnimation
                                    animateIn='animate__pulse'
                                    animateOnce={true}                                                                       
                                    className="ccotapp"
                                > 
                                    <img                                 
                                        src="/images/logos/logo-solido-bold-branco.png"                                        
                                        width="100vw"
                                        alt="Logo da CotApp"
                                    />
                                </ScrollAnimation> 
                                <span>
                                    otApp
                                </span>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation
                            animateIn='animate__fadeInUp'
                            animateOnce={true}

                        > 
                            <div className={`${styles.subTitle} mb-4`}>A Cotação como deve ser</div>
                            <div className={`${styles.description} mb-5`}>
                                Uma plataforma <strong>GRATUITA</strong> de cotação que
                                conecta Compradores e Fornecedores 
                                em uma rede para gerar a melhor negociação.
                            </div>

                            <div className="text-center mb-5">                             
                                <Link href="/options?action=register">
                                    <Button className={`${styles.btn} pt-3 pb-3 text-light`} size="large" variant="outlined">
                                        <strong>
                                            Crie sua conta Grátis!
                                        </strong>
                                    </Button>
                                </Link>                            
                            </div>                                              
                        </ScrollAnimation>
                    </div>                    
                    <img                                 
                        src="/images/index/app-screen_2.png"
                        className={`${styles.img}`}
                    />                                                            
                    {/* <div className={`${styles.networkRight} animated`}></div>                 */}                                                
                </div>
            </div>                                                  

        </section>
    )

}

export default Welcome;