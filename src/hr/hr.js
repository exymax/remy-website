import React from 'react';
import ReactDOM from 'react-dom';
import styles from './hr.css';

const tagline = 
<div>
    <h1 className={styles.tagline}>JOIN US</h1>
    <h2 className={styles.tg1t}>
        We are working in Computer vision, Robotics, Artificail intelligence, Mechanical engineering.
        <br></br><br></br>
        We are open to collaborate with R&D centers in Universities and other institutions. 
        <br></br><br></br>
        Get in touch if you want to help us explore what robotics can serve up next.
        <br></br><br></br>
        If you didn't find siutable position for you, send your CV and a little bit about you to team@remyrobotics.com, 
        and we will get in touch with you.
   </h2>
</div>
const hiring = 
<div >
    <h1 className={styles.hiring}>HIRING NOW</h1>
    <h2 className={styles.tg2t}>
    We are looking for the brightest minds to help us grow. Please see our open positions below.
    </h2>
    <div className={styles.vacancies}>
        <span className={styles.header}>Head of CV</span><br></br>
        <span className={styles.location}>Barcelona, Spain</span>
        <br></br><br></br>
        <span className={styles.header}>Lead engineer</span><br></br>
        <span className={styles.location}>Barcelona, Spain</span>
        <br></br><br></br>
        <span className={styles.header}>Senior control engineer</span><br></br>
        <span className={styles.location}>Barcelona, Spain</span>
        <br></br><br></br>
        <span className={styles.header}>Lead computer vision engineer</span><br></br>
        <span className={styles.location}>Barcelona, Spain</span>
        <br></br><br></br>
        <span className={styles.header}>Senior simulation developer</span><br></br>
        <span className={styles.location}>Barcelona, Spain</span>
        <br></br><br></br>
        <span className={styles.header}>Finance and operations manager</span><br></br>
        <span className={styles.location}>Barcelona, Spain</span>
        <br></br><br></br>
        <span className={styles.header}>Business-assistant</span><br></br>
        <span className={styles.location}>Barcelona, Spain</span>
        <br></br><br></br>
    </div>
</div>

const Hr = () => (
    <div className={styles.red}>
        {tagline}
        {hiring}
    </div>
)

export default Hr;