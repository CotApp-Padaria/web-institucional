import { Button } from 'react-bootstrap';
import styles from './index.module.css';

function Welcome() {

    return (
        <section id="welcome" className={`${styles.welcomeContainer} sub-header`}>            
            
            <div className={`container ${styles.contents}`}>
                <div className="row">
                    <div className="col-md-6 text-light animate-left">
                        <div className={`${styles.title} fw-bold`}>CotApp</div>
                        <div className={`${styles.subTitle} mb-4`}>A Cotação como deve ser</div>
                        <div className={`${styles.description} mb-5`}>
                            Uma plataforma <strong>GRATUITA</strong> de cotação e gestão de pedidos 
                            para sua empresa comprar ou vender, 
                            de forma intuitiva e segura.
                        </div>
                        <div className="text-center ">
                            <Button className="btn-lg animate-float" variant="light">
                                <strong>
                                    Crie sua conta Grátis!
                                </strong>
                            </Button>
                        </div>                  
                    </div>
                    <div className="hidden-sm-down col-md-6 hidden-sm-down d-flex align-items-center text-center animate-right">
                        <img 
                            src="/images/index/app-screen_1.png"
                            alt="App CotApp Brasil" 
                            className={`${styles.img} animate-float`}
                        />
                    </div>                              
                </div>
            </div>

        </section>
    )

}

export default Welcome;