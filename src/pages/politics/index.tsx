import Container from "../../components/Container";
import Politics20210411 from "./politics20210411";


function Terms() {

    return (        
        <Container>             
            
            <section id="terms" className={`container sub-header mt-3 pb-5`}>
                <div className={`row align-items-center justify-content-center`}>
                    <div className="col-md-8">
                        <div className="row">
                            <div className={`col-md-12 text-center`}>
                                <h3 className={`text-primary fw-bold`}>
                                    Políticas de privacidade
                                </h3>                                
                            </div>
                            <Politics20210411 />
                        </div>
                    </div>
                </div>
            </section>

        </Container>     
    )

}export default Terms;