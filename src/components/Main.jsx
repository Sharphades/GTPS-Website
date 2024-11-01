import style from './Main.module.css';
import 'animate.css/animate.min.css';
import { TypeAnimation } from 'react-type-animation';

export default function Main() {
    return(
        <div className={style.container}>
            <div className={style.box}>
                <h1 className={style.heading}>Growtopia Automation Script</h1>
                <TypeAnimation
                    className={style.description}
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Welcome to the ultimate resource for Growtopia enthusiasts!',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Automation Script streamlines gameplay by automating repetitive tasks.',
                        1000,
                        'Allowing you to focus on what truly matters enjoying the game',
                        1000,
                    ]}
                    wrapper="div"
                    speed={60}
                    style={{ fontSize: '1.1rem', display: 'inline-block', textAlign: 'center' }}
                    repeat={Infinity}
                />
                <h3 className={style.button}>Scroll down <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, -1, 0, 0)">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                    <g id="SVGRepo_iconCarrier"> <path d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z" stroke="#C6E7FF" strokeWidth="1.5"/> <path d="M10.5 8.5C10.5 7.67157 11.1716 7 12 7C12.8284 7 13.5 7.67157 13.5 8.5V10.5C13.5 11.3284 12.8284 12 12 12C11.1716 12 10.5 11.3284 10.5 10.5V8.5Z" stroke="#ffffff" strokeWidth="1.5"/> <path opacity="0.5" d="M12 2V7" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"/> </g>
                    </svg>
                </h3>
            </div>
        </div>
    );
}