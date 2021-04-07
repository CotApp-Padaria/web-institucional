import { FaWhatsapp } from 'react-icons/fa'

const WhatsappButton = () => (    
    <div className="btn-fixed-bottom">
        <a 
            type="button"
            href={`https://web.whatsapp.com/send?phone=55${process.env.WHATSAPP_NUMBER}&text=Olá, estou interessado em conhecer mais da CotApp.`}
            className="btn color-whatsapp"
            target="_blank"
        >
            <FaWhatsapp size={32} color="#FFF" className="me-1"/>
            Chat via WhatsApp
        </a>
    </div>            
)

export default WhatsappButton;
