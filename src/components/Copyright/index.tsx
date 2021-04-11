import Link from 'next/link';
import styles from './index.module.css';

function Copyright() {
    return (
        <div className={`row ${styles.copyrightContainer} text-light align-items-center p-3`}>
            <div className="col-md-6">
                <p className="">
                    © Copyright 2021 - CotApp - Todos os direitos reservados CotApp com Agência de Cotação Alimentar Online S.A.
                    CNPJ 00.000.000/0000-00 / Endereço Fixo, nº X, Bairro,
                    Brasília/DF - CEP 00.000-000
                </p>
            </div>
            <div className="col-md-6">
                <Link href="/terms">
                    <span className="text-light cursor-pointer me-3">
                        Termos e condições de uso
                    </span>
                </Link>                
                <Link href="/politics">
                    <span className="text-light cursor-pointer">
                        Políticas de privacidade
                    </span>
                </Link>
            </div>
        </div>                    
    )
}

export default Copyright