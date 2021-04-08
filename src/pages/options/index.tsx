import { Paper } from "@material-ui/core";
import Link from "next/link";
import { useRouter } from "next/router";
import Container from "../../components/Container";
import styles from './index.module.css';

function Login() {    

    const router = useRouter();

    const { action } = router.query;

    return (
        <Container>             

            <section className={`container ${styles.optionsContainer} sub-header`}>                               
                
                <h1 className="mt-4">{
                    action === 'login' ?
                    'Acesse sua conta' :
                    'Crie uma conta gratuita'
                }:</h1> 

                <div className={`row ${styles.rowContainer} align-items-center`}>

                    <div className="col-sm-12 col-md-6">
                        <div className="row justify-content-center">
                            <div className={`col-8 ${styles.btn}`}>
                                <Link
                                    href={                                        
                                        `${process.env.URL_PATH_PROVIDER}/auth/${action}`
                                    }
                                >
                                    <Paper elevation={3} className={`${styles.card} text-center`}>
                                        <div>
                                            <img src="/images/buttons/shopper.svg" className={`${styles.img} mt-4 mb-4`}/>
                                                              
                                            <h1 className="font-weight-bold pb-4">COMPRADOR</h1>                                        
                                        </div>                                       
                                    </Paper>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6">
                        <div className="row justify-content-center">
                            <div className={`col-8 ${styles.btn}`}>
                                <Link
                                    href={                                        
                                        `${process.env.URL_PATH_SHOPPER}/auth/${action}`                                        
                                    }                                   
                                >
                                    <Paper elevation={3} className={`${styles.card} text-center`}>
                                        <div>
                                            <img src="/images/buttons/provider.svg" className={`${styles.img} mt-4 mb-4`}/>                                            
                                            <h1 className="font-weight-bold pb-4">FORNECEDOR</h1>
                                        </div>                                        
                                    </Paper>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
                                            
            </section>            

        </Container>     
    )
}

export default Login;