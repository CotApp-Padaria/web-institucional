import ScrollAnimation from 'react-animate-on-scroll';
import styles from './index.module.css';

function Benefits() {               

    return (                
                
        <section id="benefits" className={`${styles.background} pt-5 pb-5`}>                                             
            
            <div className="container mt-4">

                <div className="row align-items-center">
                    <div className={`col-md-6 text-center`}>
                        <ScrollAnimation
                            animateIn='animate__fadeIn'
                            animateOnce={true}
                        >                    
                            <img src="/gifs/economy.svg" className={`${styles.img}`}/>
                        </ScrollAnimation>
                    </div>

                    <div className="col-md-6">
                        <ScrollAnimation
                            animateIn='animate__backInRight'
                            animateOnce={true}                                                                        
                        >
                            <h1 className={`${styles.title} fw-bold text-primary`}>
                                Economia
                            </h1>
                        </ScrollAnimation>
                        <ScrollAnimation
                            animateIn='animate__bounceIn'
                            animateOnce={true}                                                                           
                        >                        
                            <strong className={`${styles.subTitle} text-info`}>
                                Para o varejista:
                            </strong>
                            <p className={`${styles.description}`}>
                                Faça a melhor cotação de preço dos produtos disponíveis
                            </p>                        
                        </ScrollAnimation>

                        <ScrollAnimation
                            animateIn='animate__bounceIn'
                            animateOnce={true}                                                                    
                        >
                            <strong className={`${styles.subTitle} text-info`}>
                                Para o fornecedor:
                            </strong>
                            <p className={`${styles.description}`}>
                                Evite gastos desnecessários com apresentação de seus produtos
                            </p>                        
                        </ScrollAnimation>
                    </div>
                </div>                                                 
            
                <ScrollAnimation
                    animateIn='animate__backInRight'
                    animateOnce={true}                                                                        
                >
                    <hr className={styles.divider}/>
                </ScrollAnimation>

            </div>                                             
            
            <div className="container mt-4">

                <div className="row align-items-center">                    
                    <div className="col-md-6 text-end order-md-first order-last">
                        <ScrollAnimation
                            animateIn='animate__backInLeft'
                            animateOnce={true}                                                                        
                        >
                            <h1 className={`${styles.title} fw-bold text-primary`}>
                                Facilidade
                            </h1>
                        </ScrollAnimation>
                        <ScrollAnimation
                            animateIn='animate__bounceIn'
                            animateOnce={true}                                                                           
                        >                        
                            <strong className={`${styles.subTitle} text-info`}>
                                Para o varejista:
                            </strong>
                            <p className={`${styles.description}`}>
                                Disponibilidade de vários produtos em um único canal de cotação
                            </p>                        
                        </ScrollAnimation>

                        <ScrollAnimation
                            animateIn='animate__bounceIn'
                            animateOnce={true}                            
                        >
                            <strong className={`${styles.subTitle} text-info`}>
                                Para o fornecedor:
                            </strong>
                            <p className={`${styles.description}`}>
                                Cadastro de produtos em poucos cliques e ampla visibilidade na plataforma
                            </p>                        
                        </ScrollAnimation>
                    </div>

                    <div className={`col-md-6 text-center order-md-last order-first`}>
                        <ScrollAnimation
                            animateIn='animate__fadeIn'
                            animateOnce={true}
                        >                    
                            <img src="/gifs/facility.svg" className={`${styles.img}`}/>
                        </ScrollAnimation>
                    </div>
                </div>                                                 
            
                <ScrollAnimation
                    animateIn='animate__backInLeft'
                    animateOnce={true}                                                                        
                >
                    <hr className={styles.divider}/>
                </ScrollAnimation>

            </div> 

            <div className="container mt-4">

                <div className="row align-items-center">
                    <div className={`col-md-6 text-center`}>
                        <ScrollAnimation
                            animateIn='animate__fadeIn'
                            animateOnce={true}
                        >                    
                            <img src="/gifs/productivity.svg" className={`${styles.img}`}/>
                        </ScrollAnimation>
                    </div>

                    <div className="col-md-6">
                        <ScrollAnimation
                            animateIn='animate__backInRight'
                            animateOnce={true}                                                                        
                        >
                            <h1 className={`${styles.title} fw-bold text-primary`}>
                                Produtividade
                            </h1>
                        </ScrollAnimation>
                        <ScrollAnimation
                            animateIn='animate__bounceIn'
                            animateOnce={true}                                                                           
                        >                        
                            <p className={`${styles.description}`}>
                                Controle e gerencie seus pedidos online de forma fácil e intuitiva
                            </p>                        
                        </ScrollAnimation>                       
                    </div>
                </div>                                                 

                <ScrollAnimation
                    animateIn='animate__backInRight'
                    animateOnce={true}                                                                        
                >
                    <hr className={styles.divider}/>
                </ScrollAnimation>

            </div>

            <div className="container mt-4">

                <div className="row align-items-center">                    
                    <div className="col-md-6 text-end order-md-first order-last">
                        <ScrollAnimation
                           animateIn='animate__backInLeft'
                            animateOnce={true}                                                                        
                        > 
                            <h1 className={`${styles.title} fw-bold text-primary`}>
                                Gratuidade
                            </h1>
                        </ScrollAnimation>
                        <ScrollAnimation
                            animateIn='animate__bounceIn'
                            animateOnce={true}                                                                           
                        >                                                    
                            <p className={`${styles.description}`}>
                                Acesse nossa plataforma e veja 
                                <span className="text-info"> GRATUITAMENTE </span>
                                tudo o que CotApp pode oferecer
                            </p>                        
                        </ScrollAnimation>                       
                    </div>

                    <div className={`col-md-6 text-center order-md-last order-first`}>
                        <ScrollAnimation
                            animateIn='animate__fadeIn'
                            animateOnce={true}
                        >                    
                            <img src="/gifs/gratuity.svg" className={`${styles.img}`}/>
                        </ScrollAnimation>
                    </div>
                </div>                            

            </div>                                                                                

        </section>        
        
    )

}

export default Benefits;