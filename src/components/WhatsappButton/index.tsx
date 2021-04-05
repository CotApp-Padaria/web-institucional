import { FaWhatsapp } from 'react-icons/fa'

type Props = {    
    phone?: string    
}

const WhatsappButton = (
    {       
        phone = '61981016591'
    }: 
    Props
) => (    
    <div className="btn-fixed-bottom">
        <a 
            type="button" 
            href={`https://web.whatsapp.com/send?phone=55${phone}&text=Olá!`}
            className="btn color-whatsapp"
            target="_blank"
        >
            <FaWhatsapp size={32} color="#FFF" className="me-1"/>
            Chat via WhatsApp
        </a>
    </div>            
)



export default WhatsappButton;
