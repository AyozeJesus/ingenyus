import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './style.css';

function Home() {
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

    return (
        <div className='home'>
            <button className='buttonHome'>
                <Link id='linkHome' to='/'>
                    <img
                        className='logoButtonHome'
                        src={
                            isDesktop
                                ? '/logos/in_logo_desktop.svg'
                                : '/logos/in_logo_responsive.svg'
                        }
                        alt='ingenyus*'
                    />
                </Link>
            </button>
        </div>
    );
}

export default Home;
