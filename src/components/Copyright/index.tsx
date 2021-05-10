import { Link, Typography } from '@material-ui/core';
import React from 'react';
import { FaEnvelopeSquare, FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare, FaWhatsappSquare, FaYoutubeSquare } from "react-icons/fa";
import styles from './index.module.css';

function Copyright() {
    return (

        <section className={`${styles.copyrightContainer}`}>
            <div className={`container pt-4`}>
                <div id="contact" className="row text-light">
                    <div className="col-md-4">
                        <div className={`${styles.title} fw-bold`}>                        
                            <img                                 
                                src="/images/logos/logo-solido-bold-branco.png"                            
                                alt="Logo da CotApp"
                                height={80}
                            />                        
                            <span>
                                otApp
                            </span>
                        </div>
                        <div className="mt-3">  
                            <a className="text-light" target="_blank" href={`https://web.whatsapp.com/send?phone=55${process.env.WHATSAPP_NUMBER}&text=Olá, quero saber mais sobre a CotApp.`}>
                                <FaWhatsappSquare size={30} className="me-2"/>
                            </a>
                            <a className="text-light" href={`mailto:${process.env.EMAIL_COTAPP}?subject=Quero saber mais sobre a CotApp.`}>
                                <FaEnvelopeSquare size={30} className="me-2"/>
                            </a>
                            <a className="text-light" target="_blank" href={`https://www.instagram.com/cotappbr`}>
                                <FaInstagramSquare size={30} className="me-2"/>
                            </a>
                            <a className="text-light" target="_blank" href={`https://www.facebook.com/cotappbr`}>
                                <FaFacebookSquare size={30} className="me-2"/>
                            </a>
                            <a className="text-light" target="_blank" href={`https://www.linkedin.com/company/cotappbr`}>
                                <FaLinkedin size={30} className="me-2"/>
                            </a>
                            <a className="text-light" target="_blank" href={`https://twitter.com/cotappbr`}>
                                <FaTwitterSquare size={30} className="me-2"/>
                            </a>
                            <a className="text-light" target="_blank" href={`https://youtube.com/cotappbr`}>
                                <FaYoutubeSquare size={30}/>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-8 pt-3">
                        <div className="row">
                            <div className="col-md-4">
                                <h5 className="fw-bold">Institucional</h5>

                                <Link href="/privacity" className="text-light">
                                    Políticas e termos de privacidade
                                </Link>                               

                                <br />

                                <Link href="/use" className="text-light">
                                    Políticas e termos de uso
                                </Link>                               
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`row text-light align-items-center pt-5 pb-3 fw-bold`}>
                    <div className="col-md-12">
                        <Typography variant="body2" align="left">
                            © Copyright 2021 - CotApp - Todos os direitos reservados CotApp B2B Aplicativo de Cotação LTDA
                            CNPJ 38.043.500/0001-83 / Águas Claras, Brasília-DF | CEP 71.908-540
                        </Typography>                
                    </div>                
                </div>                    
            </div>
        </section>
    )
}

export default Copyright