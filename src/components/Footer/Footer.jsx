import React from 'react';
import './Footer.css';

import camaracomercio from '/logos/camaracomercio.png';
import cluster from '/logos/ClusterdaComunicacionlogoclusterdecomunicacion.png';
import groupclusaga from '/logos/groupclusaga.png';
import logoasebio from '/logos/LogoAsebioNombrecompletoTRANSPARENTE.png';
import viratec from '/logos/VIRATEC.png';

function Footer() {
    return (
        <footer>
            <ul className='footertext'>
                <li className='unusual'>unusual agency</li>
                <li>
                    <a href='email'>hola@ingenyus.es</a>
                </li>
                <li className='unete'>
                    <p>únete al equipo </p>
                    <a href='email'>atalent@ingenyus.es</a>
                </li>
                <li>+34 981 227 225 </li>
                <li>+34 968 107 558</li>
                <a href=''> R.Real,24, 1º, 15003 A Coruña </a>

                <section>
                    <a href='https://www.linkedin.com/company/ingenyus/'>
                        Linkedin
                    </a>
                    <a href='https://twitter.com/i/flow/login?redirect_after_login=%2Fingenyus_es'>
                        Twitter
                    </a>
                    <a href='https://www.instagram.com/ingenyus.es'>
                        Instagram
                    </a>
                    <a href='https://www.ingenyus.es/esto-no-es-un-error'>T</a>
                </section>
                <a href='https://www.ingenyus.es/kit-digital/'>Kit Digital</a>
            </ul>
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
            </section>
        </footer>
    );
}

export default Footer;