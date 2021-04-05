import Link from 'next/link';

function Copyright() {
    return (
        <div className="">
            <div>
                <p className="">
                    © Copyright 2021 - CotApp - Todos os direitos reservados CotApp com Agência de Cotação Alimentar Online S.A.
                </p>
                <p className="">
                    CNPJ 00.000.000/0000-00 / Endereço Fixo, nº X, Bairro,
                    Brasília/DF - CEP 00.000-000
                </p>
            </div>
            <div>
                <Link href="/termos">
                    <a>Termos e condições de uso</a>
                </Link>
                <Link href="/conduta">
                    <a>Código de conduta</a>
                </Link>
                <Link href="/termos">
                    <a>Privacidade</a>
                </Link>                
            </div>
        </div>
    )
}

export default Copyright