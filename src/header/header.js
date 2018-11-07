import React from 'react';
import ReactDOM from 'react-dom';
import styles from './header.css';


const logo = <img className={styles.logo} src='/img/Remy_logo_white.svg'/>;
const video = <video autoPlay muted loop className={styles.video} src="/video/23396707-hd.mov"/>
const tagline = 
<div>
    <h1 className={styles.tagline}>ROBOTICS TECHNOLOGY THAT TAKES THE ROUTINE AND INEFFICIENCY OUT OF COOKING</h1>
</div>
const discover = <h1 className={styles.discover}>DISCOVER MORE</h1>;

const joinus = <div className={styles.joinusbox}><span className={styles.joinus}>JOIN US</span></div>;

const Header = () => (
    <div className={styles.red}>
        {logo}
        {tagline}
        {joinus}
        {discover}
    </div>
)

export default Header;