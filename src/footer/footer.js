import React from 'react';
import ReactDOM from 'react-dom';
import styles from './footer.css';


const barcelona = <div className={styles.barcelona}>
                <span className={styles.contact}>
                    
                    <span className={styles.bold}>BARCELONA</span><br></br><br></br>
                    Remy Robotics (HQ)<br></br>
                    Port Vell Barcelona<br></br> 
                    Carrer de l’Escar 26 (Gallery Building)<br></br>
                    08039<br></br>
                    Barcelona, Spain
                </span>
                </div>
const london = <div className={styles.london}>
                <span className={styles.contact}>
                    
                    <span className={styles.bold}>LONDON</span><br></br><br></br>
                    KINETIK<br></br>
                    4th floor, Beaumont House<br></br> 
                    Kensington Village<br></br>
                    W14 8TS<br></br>
                    London, United Kingdom
                </span>
                </div>
const berlin = <div className={styles.berlin}>
                <span className={styles.contact}>
                    
                    <span className={styles.bold}>BERLIN</span><br></br><br></br>
                    KINETIK<br></br>
                    Friedrichstrasse 68<br></br>
                    Berlin<br></br>
                    10117<br></br>
                    Germany<br></br>
                </span>
                </div>
const moscow = <div className={styles.moscow}>
                <span className={styles.contact}>
                    
                    <span className={styles.bold}>MOSCOW</span><br></br><br></br>
                    KINETIK<br></br>
                    Leningradskiy Avenue<br></br>
                    36 bld. 5<br></br>
                    125167<br></br>
                    Moscow, Russia<br></br>
                </span>
                </div>
const la = <div className={styles.la}>
                <span className={styles.contact}>
                    
                    <span className={styles.bold}>LOS ANGELES</span><br></br><br></br>
                    KINETIK<br></br>
                    520 Broadway, Suite 200<br></br>
                    Santa Monica<br></br>
                    90401<br></br>
                    California, USA<br></br>
                </span>
                </div>

const logo = <img className={styles.logo} src='/img/Remy_logo_white.svg'/>;
const copyright = <span className={styles.copyright}>Copyright ©  2018 Remy Robotics. All rights reserved.</span>

const Footer = () => (
    <div className={styles.red}>
        {barcelona}
        {london}
        {berlin}
        {moscow}
        {la}
        {logo}
        {copyright}
    </div>
)

export default Footer;