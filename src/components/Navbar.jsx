import style from './Navbar.module.css';
import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
    const [active, setActive] = useState(0);
    const navbarRef = useRef(null);
    const colorRef = useRef(null);

    const navItems = ['Home', 'Scripts', 'Request'];

    const handleClick = (index) => {
        const targetId = `#${navItems[index]}`;
        const targetElement = document.querySelector(targetId);
        
        
        if (index === 0) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setActive(index);            
        } else if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
        });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const navContainer = navbarRef.current;
            const navColors = colorRef.current;
            if (navContainer) {
                if (window.scrollY > 1) {
                    navColors.classList.add(style.grow);
                    navContainer.classList.add(style.blur);
                } else {
                    navColors.classList.remove(style.grow);
                    navContainer.classList.remove(style.blur);
                }

                const home = document.getElementById('Scripts');
                if (home) {
                    const rect = home.getBoundingClientRect();
                    const rectNav = navContainer.getBoundingClientRect();
                    if (rect.top <= rectNav.bottom) {
                        setActive(1);
                    } else {
                        setActive(0);
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const items = navItems.map((item, index) => (
        <a key={item}>
            <h2
                className={active === index ? style.active : 'none'}
                onClick={() => handleClick(index)}
            >
                {item}
            </h2>
        </a>
    ));

    return (
        <div className={style.navbar} ref={navbarRef} id='Home'>
            <div className={style.color} ref={colorRef}></div>
            <div className={style.navContainer}>
                <div className={style.mainNav}>
                    <h2 className={style.logo}>
                        <svg fill="#FFFFFF" height="25px" width="25px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                            viewBox="0 0 53.975 53.975" xmlSpace="preserve">
                        <g>
                            <path d="M39.481,25.987c-0.552,0-1,0.448-1,1s0.448,1,1,1h3c0.552,0,1-0.448,1-1s-0.448-1-1-1H39.481z"/>
                            <path d="M52.481,25.987h-2c-0.552,0-1,0.448-1,1s0.448,1,1,1h2c0.552,0,1-0.448,1-1S53.033,25.987,52.481,25.987z"/>
                            <path d="M46.573,7.896c-10.527-10.527-27.656-10.527-38.184,0s-10.527,27.656,0,38.184c5.264,5.264,12.178,7.896,19.092,7.896
                                s13.828-2.632,19.092-7.896l0.707-0.707L28.895,26.987L47.28,8.603L46.573,7.896z M26.067,26.987l18.371,18.371
                                c-9.794,9.049-25.124,8.816-34.634-0.693c-4.722-4.722-7.322-11-7.322-17.678S5.082,14.032,9.803,9.31
                                c4.874-4.874,11.276-7.311,17.678-7.311c6.091,0,12.182,2.206,16.957,6.618L26.067,26.987z"/>
                            <path d="M24.481,8.987c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S26.687,8.987,24.481,8.987z M24.481,14.987
                                c-1.103,0-2-0.897-2-2s0.897-2,2-2s2,0.897,2,2S25.584,14.987,24.481,14.987z"/>
                        </g>
                        </svg>
                        Sharp
                        </h2>
                    <div className={style.itemContainer}>
                        {items}
                    </div>
                    <div className={style.buttonsContainer}>
                        <button className={style.button}>
                            <svg width="30px" height="30px" viewBox="0 -28.5 256 256" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" fill="#5865F2" />
                                </g>
                            </svg>
                            Discord
                        </button>
                        <svg className={style.burger} width="35px" height="35px" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 7C4 6.44771 4.44772 6 5 6H24C24.5523 6 25 6.44771 25 7C25 7.55229 24.5523 8 24 8H5C4.44772 8 4 7.55229 4 7Z" fill="#FFFFFF" />
                            <path d="M4 13.9998C4 13.4475 4.44772 12.9997 5 12.9997L16 13C16.5523 13 17 13.4477 17 14C17 14.5523 16.5523 15 16 15L5 14.9998C4.44772 14.9998 4 14.552 4 13.9998Z" fill="#FFFFFF" />
                            <path d="M5 19.9998C4.44772 19.9998 4 20.4475 4 20.9998C4 21.552 4.44772 21.9997 5 21.9997H22C22.5523 21.9997 23 21.552 23 20.9998C23 20.4475 22.5523 19.9998 22 19.9998H5Z" fill="#FFFFFF" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
