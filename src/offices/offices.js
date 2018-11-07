import React from 'react';
import ReactDOM from 'react-dom';
import styles from './offices.css';

const tagline = 
<div>
    <h1 className={styles.tagline}>Who we are</h1>
    <h2 className={styles.tg1t}>
        <span className={styles.bold}>Remy Robotics</span> is the latest project from Kinetik, a technology investment group with companies at the cutting edge 
        of 
        <br></br><br></br>
        Electric Vehicles - <a className="blue" href='https://arrival.com'>Arrival</a> 
        <br></br><br></br>
        Robofacturing - <a href="https://www.tra.ai">TRA Robotics</a>
        <br></br><br></br>
        Autonomous Vehicles - <a href="https://roborace.com">Roborace</a>
        <br></br><br></br>
        Kinetik's companies have offices in London, LA, Berlin and Saint-Petersburg, while Remy Robotics is located in Barcelona 
        with some software engineering functions in Moscow.
        <br></br><br></br>
        For Remy Robotics, we have brought together talented specialists in the fields of robotics and machine learning 
        from all over the world.  
   </h2>
</div>;
const Slider = <div className={styles.sliderdiv}>
    <img className={styles.photo} src='/img/arrival.jpg' />
    <div className={styles.frwrdr}>
        <img className={styles.icon} src='/img/arrow-right.svg'/>
    </div>
    <div className={styles.frwrdl}>
        <img className={styles.icon} src='/img/arrow-left.svg'/>
    </div>
    <div className={styles.count}>
    <span className={styles.vertmiddle}>1/3</span>
    </div>
</div>

const Offices = () => (
    <div className={styles.red}>
        {tagline}
        {Slider}
    </div>
)

export default Offices;