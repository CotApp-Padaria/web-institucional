import Container from "../../components/Container";
import Use20210510 from "./use20210510";


function Terms() {

    return (        
        <Container>             
            
            <section id="terms" className={`container sub-header mt-3 pb-5`}>
                <div className={`row align-items-center justify-content-center`}>
                    <div className="col-md-8">
                        <div className="row">
                            <div className={`col-md-12 text-center`}>                                
                                <h3 className={`text-primary fw-bold`}>
                                    Políticas e termos de uso
                                </h3>
                                <h5 className={`text-muted mt-4 fw-bold`}>
                                    Por favor, leia com atenção os termos e condições. 
                                    Ao se cadastrar no 
                                    <span className="text-info ms-1 me-1">
                                        cotapp.com.br
                                    </span>
                                    você ESTÁ DE ACORDO 
                                    COM AS CONDIÇÕES E TERMOS do Website. Note que a recusa 
                                    destes Termos do Website impedirá que você faça pedidos 
                                    de produtos do nosso Website.
                                </h5>                                
                            </div>
                            <Use20210510 />
                        </div>
                    </div>
                </div>
            </section>

        </Container>     
    )

}export default Terms;