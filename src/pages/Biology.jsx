import BiologyMap from '../components/Maps/BiologyMap';
import '../assets/styles/General.css';
import '../assets/styles/Maps.css';
import Loading from '../components/Loading.jsx';
import { useEffect, useState } from 'react';
import DesktopNavHome from '../components/DesktopNavHome.jsx';
import MobileNavHome from '../components/MobileNavHome.jsx';
import BodyAddons from '../components/BodyAddons.jsx';
import '../assets/styles/Background.css';
import '../assets/styles/BackgroundSafari.css';
import Header from '../components/Header/index.jsx';
import { ContactNewsletter } from '../components/ContactNewsletter.jsx';
import Footer from '../components/Footer.jsx';

const Biology = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [showLoading, setShowLoading] = useState(false);
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
            <main className='mainMap blurBack backgroundSolid'>
                <div className='noiseBack'></div>
                <BiologyMap />
                <div className='ellipseWhiteMap' id='e22'></div>
                <div className='ellipseWhiteMap' id='e18'></div>
                <div className='ellipseWhiteMap' id='e23'></div>
                <div className='ellipseWhiteMap' id='e19'></div>
                <div className='ellipseWhiteMap' id='e12'></div>
                <div className='ellipseWhiteMap' id='e14'></div>
                <div className='ellipseWhiteMap' id='e21'></div>
                <div className='ellipseWhiteMap' id='e15'></div>
                <div className='ellipseBlueMap' id='e24'></div>
                <div className='ellipseBlueMap' id='e25'></div>
                <div className='ellipseBlueMap' id='e13'></div>
                <div className='ellipseBlueMap' id='e20'></div>
                <div className='ellipseBlueMap' id='e17'></div>
                <div className='ellipseBlueMap' id='e16'></div>
                {isDesktop ? <DesktopNavHome /> : <MobileNavHome />}
                <BodyAddons />
            </main>
            <ContactNewsletter />
            <Footer />
        </>
    );
};

export default Biology;
