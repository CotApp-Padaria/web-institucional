import { Button, Paper } from "@material-ui/core";
import Link from "next/link";
import { useRouter } from "next/router";
import Container from "../../components/Container";
import styles from './index.module.css';

function Login() {    

    const router = useRouter();

    const { action } = router.query;

    return (
        <Container
            hasFooter = {true}
            hasWhatsappButton = {false}
        >       
            <section className={`container sub-header`}>

                <div className={`${styles.optionsContainer} text-center text-primary mt-3`}>                    
                    <h1>Estamos em <strong>PRÉ LANÇAMENTO</strong></h1>                                                     
                    <img src="/gifs/task.svg" className={`${styles.imgWorking}`}/>
                    <div className="row justify-content-md-center">
                        <div className="col-md-8">                            
                            <h3>Em breve, estará tudo pronto pra você cotar com a gente.</h3>
                        </div>
                        <div className="col-md-8">
                            <h3>Você pode deixar o seu contato e enviaremos todas novidades.</h3>
                        </div>
                    </div>
                    <div className="row justify-content-md-center mb-5">
                        <div className="col-md-4">
                            <Link href="/form?action=provider">
                                <Button className="mt-3 pt-3 pb-3" size="large" variant="outlined" color="secondary">
                                    <strong>
                                        Sou Fornecedor e
                                        quero receber novidades
                                    </strong>
                                </Button>                                                                          
                            </Link>
                        </div>

                        <div className="col-md-4">
                            <Link href="/form?action=shopper">
                                <Button className="mt-3 pt-3 pb-3" size="large" variant="outlined" color="primary">
                                    <strong>
                                        Sou Comprador e
                                        quero receber novidades
                                    </strong>
                                </Button>
                            </Link>
                        </div>                        
                    </div>
                </div>

            </section>

            {
                false &&
                <section className={`container sub-header`}>                    

                    <div className={`row align-items-center justify-content-center ${styles.optionsContainer}`}>

                        <h1 className="mt-4 text-center">{
                            action === 'login' ?
                            'Acesse como' :
                            'Crie uma conta gratuita como'
                        }:</h1>

                        <div className="col-sm-12 col-md-5">
                            <div className="row justify-content-center">
                                <div className={`col-8 ${styles.btn}`}>
                                    <Link
                                        href={                                        
                                            `${process.env.URL_PATH_PROVIDER}/auth/${action}`
                                        }
                                    >
                                        <Paper elevation={3} className={`${styles.card} text-center`}>
                                            <div>
                                                <img src="/images/buttons/shopper.svg" className={`${styles.img} mt-4`}/>
                                                                
                                                <h1 className="pb-4 text-primary">COMPRADOR</h1>                                        
                                            </div>                                       
                                        </Paper>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-sm-12 col-md-1 text-center">
                            <h1 className="fw-bold">ou</h1>
                        </div>                

                        <div className="col-sm-12 col-md-5">
                            <div className="row justify-content-center">
                                <div className={`col-8 ${styles.btn}`}>
                                    <Link
                                        href={                                        
                                            `${process.env.URL_PATH_SHOPPER}/auth/${action}`                                        
                                        }                                   
                                    >
                                        <Paper elevation={3} className={`${styles.card} text-center`}>
                                            <div>
                                                <img src="/images/buttons/provider.svg" className={`${styles.img} mt-4`}/>                                            
                                                <h1 className="pb-4 text-secondary">FORNECEDOR</h1>
                                            </div>                                        
                                        </Paper>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                                                
                </section>            
            }

        </Container>     
    )
}

export default Login;