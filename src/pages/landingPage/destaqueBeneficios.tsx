import { Button } from '@material-ui/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './destaque.module.css';

export default function DestaqueBeneficios() {    

    return (
        
        <section id="register" className={`pt-5 pb-5 ps-4 pe-4`}>
            
            <div className={`container`}>

                <div className="row justify-content-center">
                    <div className={`col-md-8 text-center`}>
                        <div className="row justify-content-center">
                            <div className="col-md-12">
                                <h1 className={`${styles.title} fw-bold text-secondary mt-3 title`}>
                                    Muitos benefícios te esperam!
                                </h1>
                                <strong className={`${styles.subTitle} text-primary mt-4`}>
                                    Fique por dentro das próximas novidades
                                </strong>                                
                            </div>

                            <div className="col-sm-8 col-md-6 mt-3 mb-4 ">
                                <Link href="/options" >
                                    <Button
                                        fullWidth
                                        variant="contained" 
                                        color="secondary"
                                        className="float-end fs-5"                                        
                                    >                                    
                                        Saiba mais aqui                    
                                    </Button>                                
                                </Link>                                
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>

    )

}
