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
                
                <div className={`row ${styles.rowContainer} align-items-center`}>

                    <div className="col-md-6">
                        <div className="row justify-content-center">
                            <div className="col-6">
                                <Link
                                    href={                                        
                                        `${process.env.URL_PATH_PROVIDER}/${action}`
                                    }
                                >
                                    <Paper elevation={3} className={`${styles.card} text-center`}>
                                        <div>
                                            <img src="/images/buttons/shopper.svg" className={`${styles.img}`}/>
                                            <h3>{
                                                action === 'login' ?
                                                'ACESSE SUA CONTA' :
                                                'CRIE UMA CONTA GRATUITA'
                                            }</h3>                   
                                            <h1 className="font-weight-bold">COMPRADOR</h1>                                        
                                        </div>                                       
                                    </Paper>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="row justify-content-center">
                            <div className="col-6">
                                <Link
                                    href={                                        
                                        `${process.env.URL_PATH_SHOPPER}/${action}`                                        
                                    }                                   
                                >
                                    <Paper elevation={3} className={`${styles.card} text-center`}>
                                        <div>
                                            <img src="/images/buttons/provider.svg" className={`${styles.img}`}/>
                                            <h3>{
                                                action === 'login' ?
                                                'ACESSE SUA CONTA' :
                                                'CRIE UMA CONTA GRATUITA'    
                                            }</h3>
                                            <h1 className="font-weight-bold">FORNECEDOR</h1>
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