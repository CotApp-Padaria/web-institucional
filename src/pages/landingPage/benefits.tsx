import { Typography } from '@material-ui/core';
import ScrollAnimation from 'react-animate-on-scroll';
import { Image } from 'react-bootstrap';
import styles from './benefits.module.css';

function Benefits() {               

    return (                
                
        <section className={`${styles.background} pt-5 pb-5`}>                                             
            
            <div className="container mt-4">

                <div id="shopper" className="row align-items-center">
                    <div className={`col-md-6 text-center`}>
                        <ScrollAnimation
                            animateIn='animate__fadeIn'
                            animateOnce={true}
                        >                    
                            <img src="/gifs/gratuity.svg"/>
                        </ScrollAnimation>
                    </div>

                    <div className="col-md-6 text-secondary">
                        <ScrollAnimation
                            animateIn='animate__backInRight'
                            animateOnce={true}                                                                        
                        >
                            <h1 className={`${styles.title} fw-bold text-secondary text-end`}>
                                PARA O <span className="text-decoration-underline">COMPRADOR</span>:{`${' '}`}
                                <span className="text-primary">
                                    AGILIDADE E TRANSPARÊNCIA NA COTAÇÃO
                                </span>
                            </h1>                            
                        </ScrollAnimation>
                        <ScrollAnimation
                            animateIn='animate__bounceIn'
                            animateOnce={true}
                            delay={500}                                                                           
                        >           
                            <div className={`${styles.description} text-primary`}>
                                <ul>
                                    <li>
                                        É <span className="fw-bold">GRÁTIS</span>! Do cadastro ao pedido final                                        
                                    </li>
                                    <li>
                                        Vários produtos em um único canal de cotação
                                    </li>
                                    <li>
                                        Acompanhe seus pedidos de forma fácil e intuitiva
                                    </li>
                                    <li>
                                        Cadastre seus funcionários e defina suas permissões de acesso à plataforma
                                    </li>
                                </ul>
                            </div>                            
                        </ScrollAnimation>                        
                    </div>
                </div>

                <div className="row pb-5 mt-5">
                    <div className="col-md-12 text-center text-primary mt-3 mb-3">
                        <h3>
                        Como funciona a <span className="fw-bold">CotApp</span> para os <span className="fw-bold">Compradores</span>?
                        </h3>
                    </div>

                    
                    <div className="col-md-4 text-secondary text-center">
                        <Image className={`${styles.img}`} src="/images/index/cadastro.svg" />
                        <Typography variant="h6" className="lh-sm">
                            <span className="fw-bold">Cadastre-se e participe da nossa rede.</span>
                            <br />
                            É rápido, fácil e gratuito.
                        </Typography>
                    </div>                    
                    
                    <div className="col-md-4 text-secondary text-center">
                        <Image className={`${styles.img}`} src="/images/index/pesquisa.svg" />
                        <Typography variant="h6" className="lh-sm">
                            <span className="fw-bold">Pesquise o nosso catálogo de produtos.</span>
                            <br />
                            Encontre tudo que está procurando com o melhor preço da sua região.
                        </Typography>
                    </div>                    
                    
                    <div className="col-md-4 text-secondary text-center">
                        <Image className={`${styles.img}`} src="/images/index/compras.svg" />
                        <Typography variant="h6" className="lh-sm">
                            <span className="fw-bold">Acompanhe e gerencie os pedidos.</span>
                            <br />
                            Após aprovado pelo fornecedor, um carrinho de compras e um único pagamento.
                        </Typography>
                    </div>                    
                </div>                                             
            
                <ScrollAnimation
                    animateIn='animate__backInRight'
                    animateOnce={true}                                                                        
                >
                    <hr className={styles.divider}/>
                </ScrollAnimation>

            </div>                                             
            
            <div className="container mt-4">

                <div id="provider" className="row align-items-center">                    
                    <div className="col-md-6 text-end order-md-first order-last">
                        <ScrollAnimation
                            animateIn='animate__backInLeft'
                            animateOnce={true}                                                                        
                        >
                            <h1 className={`${styles.title} fw-bold text-secondary text-start`}>
                                PARA O <span className="text-decoration-underline">FORNECEDOR</span>:{`${' '}`}
                                <span className="text-primary">
                                    COMODIDADE E FACILIDADE DE NEGÓCIO
                                </span>
                            </h1>
                        </ScrollAnimation>
                        <ScrollAnimation
                            animateIn='animate__bounceIn'
                            animateOnce={true}
                            delay={500}
                        >           
                            <div className={`${styles.description} text-primary text-start`}>
                                <ul>
                                    <li>
                                        Integração total com Winthor <img src="/images/logos/winthor.png"/>
                                    </li>
                                    <li>
                                        Cadastro de produtos em poucos cliques
                                    </li>
                                    <li>
                                        Controle seus pedidos de forma fácil e intuitiva
                                    </li>
                                    <li>
                                        Evite gastos desnecessários com apresentação de seus produtos
                                    </li>
                                </ul>
                            </div>                            
                        </ScrollAnimation>
                    </div>

                    <div className={`col-md-6 text-center order-md-last order-first`}>
                        <ScrollAnimation
                            animateIn='animate__fadeIn'
                            animateOnce={true}
                        >                    
                            <img src="/gifs/facility.svg"/>
                        </ScrollAnimation>
                    </div>
                    
                </div>                                                                         

                <div className="row mt-5">
                    <div className="col-md-12 text-center text-primary mt-3 mb-3">
                        <h3>
                        Como funciona a <span className="fw-bold">CotApp</span> para os <span className="fw-bold">Fornecedores</span>?
                        </h3>
                    </div>

                    
                    <div className="col-md-4 text-secondary text-center">
                        <Image className={`${styles.img}`} src="/images/index/store.svg" />
                        <Typography variant="h6" className="lh-sm">
                            <span className="fw-bold">Cadastre sua empresa.</span>
                            <br />
                            Se você já tem um sistema de logística como o Winthor, deixa que a integração é conosco.
                        </Typography>
                    </div>                    
                    
                    <div className="col-md-4 text-secondary text-center">
                        <Image className={`${styles.img}`} src="/images/index/produtos.svg"/>
                        <Typography variant="h6" className="lh-sm">
                            <span className="fw-bold">Divulgue seus produtos e preços.</span>
                            <br />
                            Apresente na nossa plataforma todo o seu catálogo sem nenhum custo e com uma ampla visibiliadade.
                        </Typography>
                    </div>                    
                    
                    <div className="col-md-4 text-secondary text-center">                    
                        <Image className={`${styles.img}`} src="/images/index/dashboard.svg" />
                        <Typography variant="h6" className="lh-sm">
                            <span className="fw-bold">Acompanhe e gerencie as vendas.</span>
                            <br />
                            Com os painéis de controle, trace estratégias para melhorar o seu desempenho.
                        </Typography>
                    </div>                    
                </div> 

            </div>                                                                                            

        </section>        
        
    )

}

export default Benefits;