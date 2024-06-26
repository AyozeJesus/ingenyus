import { useTranslation } from 'react-i18next';
import '../assets/styles/HomePage.css';
import '../assets/styles/General.css';
import MobileNavHome from '../components/MobileNavHome.jsx';
import { useState, useEffect } from 'react';
import DesktopNavHome from '../components/DesktopNavHome.jsx';
import Loading from '../components/Loading.jsx';
import '../assets/styles/Background.css';
import Header from '../components/Header/index.jsx';
import { ContactNewsletter } from '../components/ContactNewsletter.jsx';
import Footer from '../components/Footer.jsx';
import '../assets/styles/BackgroundSafari.css';

const HomePage = () => {
    const { t, i18n } = useTranslation();

    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1200);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1200);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isEnglish = i18n.language === 'en';

    const [isLoading, setIsLoading] = useState(true);
    const [showLoading, setShowLoading] = useState(false);

    useEffect(() => {
        let showLoadingTimeout = setTimeout(() => {
            setShowLoading(true);
        }, 100);

        fetch('/data.json')
            .then((response) => response.json())
            .then((data) => {
                clearTimeout(showLoadingTimeout);
                setIsLoading(false);
                setShowLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
                setIsLoading(false);
                setShowLoading(false);
            });

        return () => {
            clearTimeout(showLoadingTimeout);
        };
    }, []);

    if (isLoading && showLoading) {
        return <Loading />;
    }

    return (
        <>
            <Header />
            <main className='homePage blurBack backgroundSolid'>
                <div className='ellipseWhite' id='e8'></div>
                <div className='ellipseBlue' id='e7'></div>
                <div className='ellipseBlue' id='e10'></div>
                <div className='ellipseWhite' id='e9'></div>
                <div className='ellipseWhite' id='e11'></div>
                <div className='noiseBack noiseBackHome'></div>
                <div className='landingHome'>
                    <h1 className='homeTitle'>
                        <span id='homeTitle1'> {t('translation.title')}</span>
                        <span id='homeTitle2'>
                            <img
                                id='homeHABAddon'
                                className={isEnglish ? 'englishAddon' : ''}
                                src='./logos/HAB_icon.svg'
                                alt=''
                            />
                            {t('translation.title2')}
                        </span>
                        <span
                            id='homeTitle3'
                            className={isEnglish ? 'englishTitle' : ''}
                        >
                            {t('translation.title3')}
                            <img
                                id='homeINAddon'
                                className={isEnglish ? 'englishAddon' : ''}
                                src='./logos/in_asterisco.svg'
                                alt=''
                            />
                        </span>
                    </h1>
                    <span className='colab'>ingenyus x HACK A BOSS</span>
                    <div className='homeScrollContainer'>
                        <span>scroll</span>
                        <div className='homeScroll'>
                            <svg
                                width='14'
                                height='9'
                                viewBox='0 0 14 9'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    d='M6.6678 8.14006L0.0512695 1.52353L0.699949 0.874847L6.6678 6.8427L12.6357 0.874847L13.2843 1.52353L6.6678 8.14006Z'
                                    fill='var(--athens)'
                                />
                            </svg>
                        </div>
                    </div>
                </div>
                {isDesktop ? <DesktopNavHome /> : <MobileNavHome />}
            </main>
            <ContactNewsletter />
            <Footer />
        </>
    );
};

export default HomePage;
