import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'
const FooterGeneral = () => (

    <footer className='bg-success'>


        <div className="text-center center-block"> <br />
            <FontAwesomeIcon icon={faWhatsapp}/>
            <a href="https://api.whatsapp.com/send?phone=5492615568398&text=Hola" target="_blank" rel="noreferrer">
                <span>Ir a whatsapp</span>
            </a>

            <FontAwesomeIcon icon={faInstagram}/>
            <a href="https://instagram.com/sofronia.accesorios?igshid=1pmvan98zf66u" target="_blank" rel="noreferrer">
                <span>Ir a Instagram</span>
            </a>

            <FontAwesomeIcon icon={faLinkedinIn}/>
            <a href="https://www.linkedin.com/in/gonzalo-carbajal/" target="_blank" rel="noreferrer">
                <span>Ir a linkedin</span>
            </a>

            <FontAwesomeIcon icon={faFacebookF}/>
            <a href="https://www.facebook.com/Sofronia-Accesorios-214474416666326/" target="_blank" rel="noreferrer">
                <span>Ir a Facebook</span>
            </a>

            <FontAwesomeIcon icon={faTwitter}/>
            <a href="https://twitter.com/bootsnipp" target="_blank" rel="noreferrer">
                <span>Ir a twitter</span>
            </a>

            <FontAwesomeIcon icon={faMailBulk}/>
            <a href="mailto:gonzacarbajal18@gmail.com" target="_blank" rel="noreferrer">
                <span>Ir a E-mail</span>
            </a>
        </div>
        <hr/>
        <div className='footer-copyright text-center py-3 text-white'>
            @ 2021 GOX derechos reservados.
        </div>
    </footer>
)

export default FooterGeneral
