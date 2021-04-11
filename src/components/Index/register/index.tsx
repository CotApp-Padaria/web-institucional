import { Button } from '@material-ui/core';
import { useRouter } from 'next/router';
import styles from './index.module.css';

export default function Register() {

    const router = useRouter();  

    return (
        
        <section id="register" className={`pt-5 pb-5 ps-4 pe-4`}>
            
            <div className={`container`}>

                <div className="row">
                    <div className={`col-md-12 ${styles.banner} text-center`}>
                        <div className="row justify-content-center">
                            <div className="col-md-12">
                                <h1 className={`${styles.title} fw-bold text-secondary mt-5 title`}>
                                    Crie sua conta agora!
                                </h1>
                                <strong className={`${styles.subTitle} text-primary mt-4`}>
                                    Conta grátis, sem mensalidades!
                                </strong>
                                <p className={`${styles.description} mt-4`}>
                                    Crie uma conta gratuita hoje e descubra como
                                </p>
                                <p className={`${styles.description}`}>
                                    você pode economizar tempo e dinheito.
                                </p>
                                <p className={`${styles.description}`}>
                                    Você só tem a ganhar, aproveite!
                                </p>
                            </div>

                            <div className="col-xs-8 col-sm-8 col-md-4 mt-4 mb-5 ">
                                <Button
                                    fullWidth
                                    variant="contained" 
                                    color="secondary"
                                    className="float-end pt-4 pb-4 fs-5"
                                    onClick={() => router.push({
                                        pathname: 'options',
                                        query: {
                                            action: 'register'
                                        }
                                    })}
                                >                                    
                                    Cadastre-se                                    
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>

    )

}