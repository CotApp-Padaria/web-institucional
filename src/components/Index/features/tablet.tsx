import styles from './index.module.css';

export default function Tablet() {

    return (                
            
        <div className={`container`}>

            <div className="row">
                <div className={`col-md- ${styles.banner}`}>
                    <div className="row p-4">
                        <div className={`col-md-12 ${styles.bannerContainer}`}>
                            <div className="row align-items-center">
                                <div className={`col-md-7 p-4 ${styles.marginComputer}`}>
                                    <h1 className={`${styles.title} fw-bold text-secondary title`}>
                                        Esqueça a papelada
                                    </h1>                                    
                                    <p className={`${styles.description} mt-3 mb-0`}>
                                        Somos uma plataforma que supera 
                                        as dificuldades de encontrar e fazer pedidos de um novo fornecedor 
                                        sem esquecer de cuidar do meio-ambiente.
                                    </p>                                        
                                </div>
                                <div className={`col-md-5 text-center mt-0`}>
                                    <img                                 
                                        src="/images/index/tablet.png"
                                        className={`animate-float ${styles.img}`}                                        
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