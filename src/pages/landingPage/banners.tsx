import styles from './banners.module.css';
import DestaqueBeneficios from "./destaqueBeneficios";
import DestaqueSaibaMais from "./destaqueSaibaMais";

export default function Banners() {  

    return (

        <section id="benefits">

            <div className={`${styles.containerBanner}`}>
                <img src="/images/banners/jovemEmpresarioCelular.png"/>                
                <div className={`${styles.containerBannerText}`}>                    
                    <div className={`${styles.title} lh-1 fw-bold text-secondary`}>
                        EM BREVE, todos os pedidos em um só lugar
                    </div>
                    <div className={`${styles.subTitle} ${styles.vw70} mt-4`}>
                        <ul>
                            <li>Várias categorias de busca</li>
                            <li>Busca por fornecedores próximos</li>
                            <li>Compare preços por produtos</li>
                            <li>Vários fornecedroes, um único pagamento</li>
                            <li>Acompanhamento dos seus pedidos</li>
                        </ul>
                    </div>                    
                </div>                
            </div>

            <DestaqueSaibaMais />  

            <div className={`${styles.containerBanner}`}>
                <img src="/images/banners/empresariaSorrindo.png"/>                
                <div className={`${styles.containerBannerTextLeft}`}>                    
                    <div className={`${styles.title} lh-1 fw-bold text-secondary`}>
                        Competitivo em todos os aspectos
                    </div>
                    <div className={`${styles.subTitle} mt-4`}>                        
                        Com vários fornecedores para comparar preço, suas compras serão as mais <span className="fw-bold">ECONÔMICAS</span>
                    </div>                    
                </div>                
            </div>   

            <DestaqueBeneficios />

            <div className={`${styles.containerBanner}`}>
                <img src="/images/banners/empresarioJovemSorrindo.png"/>                
                <div className={`${styles.containerBannerText} ${styles.vw70} mt-5`}>                    
                    <div className={`${styles.title} lh-1 fw-bold text-secondary`}>
                        Esqueça a papelada
                    </div>
                    <div className={`${styles.subTitle} mt-4`}>
                        Sem emissão de papel. Notas Fiscais, comprovantes e recebimentos, tudo dentro da <span className="fw-bold">COTAPP</span>.
                        Fazer a melhor cotação é cuidar do planeta!
                    </div>                    
                </div>                
            </div>           

        </section>

    )

}