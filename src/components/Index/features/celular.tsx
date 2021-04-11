import styles from './index.module.css';

export default function Celular() {     

    return (                
            
        <div className={`container`}>

            <div className="row justify-content-center">
                <div className={`col-md-10 ${styles.banner}`}>
                    <div className="row p-4">
                        <div className={`col-md-12 ${styles.bannerContainer}`}>
                            <div className="row align-items-center">
                                <div className="col-md-7 col-lg-8 p-4">
                                    <h1 className={`${styles.title} fw-bold text-secondary title`}>
                                        Todos os pedidos em um só lugar
                                    </h1>
                                    <strong className={`${styles.subTitle} text-primary mt-3`}>
                                        Na CotApp você terá:
                                    </strong>
                                    <ul className={`${styles.description} mt-3 mb-0`}>
                                        <li>Produtos categorizados;</li>
                                        <li>Busca por fornecedores mais perto;</li>
                                        <li>Comparação de preços por produtos;</li>
                                        <li>Vários fornecedores em um único pagamento; e</li>
                                        <li>Acompanhamento dos seus pedidos.</li>
                                    </ul>                                        
                                </div>
                                <div className={`col-md-5 col-lg-4 text-center`}>
                                    <img                                 
                                        src="/images/index/celular.png"
                                        className={`animate-float ${styles.img}`}
                                        height={80}
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