import { useRouter } from "next/router";
import Container from "../../components/Container";
import styles from "./index.module.css";

function Form() {    

    const router = useRouter();

    const { action } = router.query;

    return (
        <Container
            hasFooter = {true}
            hasWhatsappButton = {false}
        >       
            <section className={`container sub-header`}>
                {                    
                    action === 'provider' ? (
                        <iframe className={`${styles.iframe}`} src="https://docs.google.com/forms/d/e/1FAIpQLSeX8DwpK3ccY3kHS3Lzz3HHjkW1-I9_RPVl6-ZfZauAHDkXgQ/viewform?embedded=true" width="640" height="1800">Carregando…</iframe>
                    ) : (
                        <iframe className={`${styles.iframe}`} src="https://docs.google.com/forms/d/e/1FAIpQLSdQeKYYKtaDrNBvW-xmiANUC0Cd3Z1p8qlFBwdugB61xRcmtw/viewform?embedded=true" width="640" height="1600">Carregando…</iframe>
                    )                                                            
                }

            </section>

        </Container>
    )

}

export default Form;