import { useTranslation } from 'react-i18next';
import '../css/layout/_HomePage.css';
import MobileNavHome from '../components/MobileNavHome';
import { useState, useEffect } from 'react';
import DesktopNavHome from '../components/DesktopNavHome';

const Home = () => {
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

    return (
        <main className='noise homePage'>
            <div className='landingHome'>
                <h1 className='homeTitle'>
                    <span id='homeTitle1'> {t('translation.title')}</span>
                    <span id='homeTitle2'>
                        <img
                            id='homeHABAddon'
                            src='./logos/HAB_icon.svg'
                            alt=''
                        />
                        {t('translation.title2')}
                    </span>
                    <span id='homeTitle3'>
                        {t('translation.title3')}
                        <img
                            id='homeINAddon'
                            className={isEnglish ? 'englishAddon' : ''}
                            src='./logos/in_asterisco.svg'
                            alt=''
                        />
                    </span>
                </h1>
                <span className='colab'>ingenyus x hack a boss</span>
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
                                fill='white'
                            />
                        </svg>
                    </div>
                </div>
            </div>
            {isDesktop ? <DesktopNavHome /> : <MobileNavHome />}
        </main>
    );
};

export default Home;
