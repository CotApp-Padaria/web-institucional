import styles from './index.module.css';

export default function Computer() {     

    return (                
            
        <div className={`container`}>

            <div className="row">
                <div className={`col-md- ${styles.banner}`}>
                    <div className="row p-4">
                        <div className={`col-md-12 ${styles.bannerContainer}`}>
                            <div className="row align-items-center">
                                <div className={`col-md-6 p-4 animate-float ${styles.marginComputer}`}>
                                    <h1 className={`${styles.title} fw-bold text-secondary title`}>
                                        Competitivo em todos os aspectos
                                    </h1>                                    
                                    <p className={`${styles.description} mt-3 mb-0`}>
                                        Com centenas de forncedores para comparar, você pode ter certeza 
                                        de que está obtendo o melhor preço possível.
                                    </p>                                        
                                </div>
                                <div className={`col-md-6 text-center mt-0`}>
                                    <img                                 
                                        src="/images/index/computer.png"
                                        className={`animate-float ${styles.imgComputer}`}                                        
                                        alt="Features para celular"
                                    />                                        
                                </div>
                            </div>
                        </div>                            
                    </div>
                </div>
            </div>

        </div>        

    )

}