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

const contactKL = <span className={styles.contactkl}>
                    Kinetik<br></br><br></br>
                    4th floor, Beaumont House<br></br>
                    Kensington Village, W14 8TS<br></br>
                    London, United Kingdom
                </span>
const contactKB = <span className={styles.contactkb}>
                     <br></br><br></br>
                    Port Vell Barcelona, Carrer de l’Escar 26 <br></br>
                    (Gallery Building)<br></br>
                    08039, Barcelona, Spain
                </span>
const contactKBe = <span className={styles.contactkbe}>
                     <br></br><br></br>
                    Port Vell Barcelona, Carrer de l’Escar 26 <br></br>
                    (Gallery Building)<br></br>
                    08039, Barcelona, Spain
                </span>
const logo = <img className={styles.logo} src='/img/Remy_logo_white.svg'/>;
const copyright = <span className={styles.copyright}>Copyright ©  2018 Remy Robotics. All rights reserved.</span>

const Footer = () => (
    <div className={styles.red}>
        {barcelona}
        {contactKL}
        {contactKB}
        {contactKBe}
        {logo}
        {copyright}
    </div>
)

export default Footer;