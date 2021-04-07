// import { Image } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import Sticky from 'react-stickynode';
import { useEffect, useState } from 'react';
import styles from './index.module.css';

function Benefits() {        

    const [enableSticky, setEnableSticky] = useState(true);

    useEffect(() => {
       window.innerWidth < 768 ?
        setEnableSticky(false) :
        setEnableSticky(true)
    }, []); 

    useEffect(() => {
        const handleResize = () => {
            window.innerWidth < 768 ?
            setEnableSticky(false) :
            setEnableSticky(true)
        }
        window.addEventListener("resize", handleResize);        
    });

    return (                
                
        <section id="beneficios" className={`${styles.background} pt-5 pb-5`}>                                   

            <ScrollAnimation
                animateIn='animate__bounceIn'
                animateOnce={true}               
            >
                <div className="row">
                    <p className={`${styles.title} fw-bold text-center text.primary`}>Benefícios</p>
                </div>
            </ScrollAnimation>            

            <div>
                <Sticky enabled={enableSticky} top='#header' bottomBoundary="#economy">                                
                    <ScrollAnimation
                        animateIn='animate__fadeIn'
                        animateOnce={true}
                    >                    
                        <div className={`row justify-content-start text-center`}>
                            <div className={`col-md-6`}>
                                <img src="/gifs/economy.gif" className={`${styles.img} img-fluid`}/>
                            </div>
                        </div>
                    </ScrollAnimation>
                </Sticky>
            </div>            
            
            <div className="container" id="economy">
                <div className="row justify-content-end">
                    <div className={`${styles.customMargin} fw-bold col-md-6 text-start text-info`}>
                        <ScrollAnimation
                            animateIn='animate__backInRight'
                            animateOnce={true}                                                                        
                        >
                            <div className={`${styles.subTitle}`}>Economia</div>
                        </ScrollAnimation>
                        <ScrollAnimation
                            animateIn='animate__bounceIn'
                            animateOnce={true}                                               
                            delay={500}
                        >
                            <div className={`${styles.description}`}>
                                <div>Para o varejista:</div>
                                <div className="text-primary">
                                    Faça a melhor cotação de preço dos produtos disponíveis
                                </div>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation
                            animateIn='animate__bounceIn'
                            animateOnce={true}                                        
                            delay={400}
                        >
                            <div className={`${styles.description}`}>
                                <div>Para o fornecedor:</div>
                                <div className="text-primary">
                                    Evite gastos desnecessários com apresentação de seus produtos
                                </div>
                            </div>
                        </ScrollAnimation>                                            
                    </div>
                </div>
            </div>
                                     
            <div className="container">
                <hr className={styles.divider}/>
            </div>                                             
            
            <div>
                <Sticky enabled={enableSticky} top='#header' bottomBoundary="#facility">                                    
                    <ScrollAnimation
                        animateIn='animate__fadeIn'
                        animateOnce={true}
                    >                    
                        <div className={`row justify-content-end text-center`}>
                            <div className={`col-md-6`}>
                                <img src="/gifs/facility.gif" className={`${styles.img} img-fluid`}/>
                            </div>
                        </div>
                    </ScrollAnimation>
                </Sticky>                            
            </div>

            <div className="container" id="facility">
                <div className="row justify-content-start">
                    <div className={`${styles.customMargin} fw-bold col-md-6 text-end text-info`}>
                        <ScrollAnimation
                            animateIn='animate__backInLeft'
                            animateOnce={true}
                        >
                            <div className={`${styles.subTitle}`}>Facilidade</div>
                        </ScrollAnimation>
                        <ScrollAnimation
                            animateIn='animate__bounceIn'
                            animateOnce={true}                                                
                            delay={500}
                        >
                            <div className={`${styles.description}`}>
                                <div>Para o varejista:</div>
                                <div className="text-primary">
                                    Disponibilidade de vários produtos em um único canal de cotação
                                </div>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation
                            animateIn='animate__bounceIn'
                            animateOnce={true}                                                 
                            delay={400}
                        >
                            <div className={`${styles.description}`}>
                                <div>Para o fornecedor:</div>
                                <div className="text-primary">
                                    Cadastro de produtos em poucos cliques e ampla visibilidade na plataforma
                                </div>
                            </div>
                        </ScrollAnimation>                                            
                    </div>
                </div>
            </div>
            
            <div className="container">
                <hr className={styles.divider}/>
            </div>
            
            <div>
                <Sticky enabled={enableSticky} top='#header' bottomBoundary="#productivity">                                                    
                    <ScrollAnimation
                        animateIn='animate__fadeIn'                        
                        animateOnce={true}
                    >                    
                        <div className={`row justify-content-start text-center`}>
                            <div className={`col-md-6`}>
                                <img src="/gifs/productivity.gif" className={`${styles.img} img-fluid`}/>
                            </div>
                        </div>
                    </ScrollAnimation>
                </Sticky>
            </div>
            
            <div className="container" id="productivity">                                    
                <div className="row justify-content-end">
                    <div className={`${styles.customMargin} fw-bold col-md-6 text-start text-info`}>
                        <ScrollAnimation
                            animateIn='animate__backInRight'
                            animateOnce={true}                                                                        
                        >
                            <div className={`${styles.subTitle}`}>Produtividade</div>
                        </ScrollAnimation>
                        <ScrollAnimation
                            animateIn='animate__bounceIn'
                            animateOnce={true}                                                 
                            delay={500}
                        >
                            <div className={`${styles.description}`}>                                
                                <div className="text-primary">
                                    Controle e gerencie seus pedidos online de forma fácil e intuitiva
                                </div>
                            </div>
                        </ScrollAnimation>                                                                    
                    </div>
                </div>
            </div>
            
            <div className="container">
                <hr className={styles.divider}/>
            </div>
            
            <div>
                <Sticky enabled={enableSticky} top='#header' bottomBoundary="#gratuity">                    
                    <ScrollAnimation
                        animateIn='animate__fadeIn'                        
                        animateOnce={true}
                    >                    
                        <div className={`row justify-content-end text-center`}>
                            <div className={`col-md-6`}>
                                <img src="/gifs/gratuity.gif" className={`${styles.img} img-fluid`}/>
                            </div>
                        </div>
                    </ScrollAnimation>
                </Sticky>
            </div>

            <div className="container" id="gratuity">
                <div className="row justify-content-start">
                    <div className={`${styles.customMargin} fw-bold col-md-6 text-end text-info`}>
                        <ScrollAnimation
                            animateIn='animate__backInLeft'
                            animateOnce={true}
                        >
                            <div className={`${styles.subTitle}`}>Gratuidade</div>
                        </ScrollAnimation>
                        <ScrollAnimation
                            animateIn='animate__bounceIn'
                            animateOnce={true}                                                
                            delay={500}
                        >
                            <div className={`${styles.description}`}>                                
                                <div className="text-primary">
                                    Acesse nossa plataforma e veja 
                                    <span className="text-info"> GRATUITAMENTE </span>
                                    tudo o que CotApp pode oferecer
                                </div>
                            </div>
                        </ScrollAnimation>                                                                    
                    </div>
                </div>
            </div>                                                         

        </section>        
        
    )

}

export default Benefits;