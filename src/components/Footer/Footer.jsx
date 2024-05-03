import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInstagram,
    faLinkedin,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import camaracomercio from '/logos/camaracomercio.png';
import cluster from '/logos/ClusterdaComunicacionlogoclusterdecomunicacion.png';
import groupclusaga from '/logos/groupclusaga.png';
import logoasebio from '/logos/LogoAsebioNombrecompletoTRANSPARENTE.png';
import viratec from '/logos/VIRATEC.png';
import itemas from '/logos/itemas.webp';

function Footer() {
    return (
        <footer>
            <ul className='footertext'>
                <li className='unusual'>unusual agency</li>
                <li>
                    <a href='mailto:hola@ingenyus.es'>hola@ingenyus.es</a>
                </li>
                <li className='unete'>
                    <p>únete al equipo</p>
                    <a href='mailto:talent@ingenyus.es'>talent@ingenyus.es</a>
                </li>
                <li>
                    <a href='tel:+34 981 227 225 '>+34 981 227 225</a>
                </li>
                <li>
                    <a href='tel:+34 968 107 558'>+34 968 107 558</a>
                </li>
                <a
                    className='direction'
                    href='https://www.google.com/search?q=ingenyus-marketing-consultoria'
                >
                    R. Real, 24, 1º, 15003 A Coruña
                </a>
            </ul>
            <section className='social'>
                <a href='https://www.linkedin.com/company/ingenyus/'>
                    <FontAwesomeIcon
                        icon={faLinkedin}
                        className='socialIcons'
                    />
                </a>
                <a href='https://twitter.com/i/flow/login?redirect_after_login=%2Fingenyus_es'>
                    <FontAwesomeIcon icon={faTwitter} className='socialIcons' />
                </a>
                <a href='https://www.instagram.com/ingenyus.es'>
                    <FontAwesomeIcon
                        className='socialIcons'
                        icon={faInstagram}
                    />
                </a>
            </section>
            <a
                className='kit'
                target='_blank'
                href='https://www.ingenyus.es/kit-digital/'
            >
                Kit Digital
            </a>

            <p>Formamos parte de:</p>
            <section className='logos'>
                <img src={logoasebio} alt='Logo ASEBIO' />
                <img
                    src={groupclusaga}
                    alt='Logo Group Cluster Alimentario de Galicia'
                />
                <img src={camaracomercio} alt='Logo de la cámara de comercio' />
                <img src={viratec} alt='Logo Viratec' />

                <img
                    src={cluster}
                    alt='Logo Cluster de Comunicacion de Galicia'
                />
                <img src={itemas} alt='Logo Itemas Isciii' />
            </section>
            <section className='footerInfo'>
                <a
                    className='direction'
                    target='_blank'
                    href='https://www.ingenyus.es/aviso-legal/'
                >
                    Aviso Legal
                </a>
                <a
                    className='direction'
                    target='_blank'
                    href='https://www.ingenyus.es/politica-privacidad/'
                >
                    Política de privacidad
                </a>
                <a
                    className='direction'
                    target='_blank'
                    href='https://www.ingenyus.es/politica-cookies/'
                >
                    Política de cookies
                </a>
            </section>
        </footer>
    );
}

export default Footer;
