import styles from './Card.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"

const Card = ({ imageSrc, title = 'Coming Soon', description = 'Will be reveal soon.  ' }) => {
    return (
        <ScrollAnimation animateIn="slideInUp">
        <div className={styles.card}>
            <img src={imageSrc} alt={title} className={styles.image} />
            <h2 className={styles.cardTitle}>{title}</h2>
            <p className={styles.cardContent}>{description}</p>
            <button className={styles.button}> Download
            <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
            <g id="SVGRepo_iconCarrier"> <path d="M12 7L12 14M12 14L15 11M12 14L9 11" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> <path d="M16 17H12H8" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/> <path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/> </g>
            </svg>
            </button>
        </div>
        </ScrollAnimation>
    );
};

export default Card;