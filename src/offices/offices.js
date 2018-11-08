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

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrows:{
                right:"/img/arrow-right.svg",
                left:"/img/arrow-left.svg"
            },
            images: [
                "./img/T4-Front@2x.jpg",
                "./img/roborace.jpg",
                "./img/07.png",
                /*"https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg",
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg"*/
            ],
            slide_id: 0
        }

        // This binding is necessary to make `this` work in the callback
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
    }

    increase() {
        var id = this.state.slide_id
        if (this.state.slide_id == 2)
        {
            id = 0;
        }
        else
        {
            id++;
        }
        this.setState({slide_id:id});
    }

    decrease() {
        var id = this.state.slide_id
        if (this.state.slide_id == 0)
        {
            id = 2;
        }
        else
        {
            id--;
        }
        this.setState({slide_id:id});
    }

    slide(id){
        return (
            <div className={styles.sliderdiv}>
                <img className={styles.photo} src={this.state.images[id]} />
                <div className={styles.frwrdr} onClick={(e) => this.increase(e)}>
                    <img className={styles.icon} src={this.state.arrows.right}/>
                </div>
                <div className={styles.frwrdl} onClick={(e) => this.decrease(e)}>
                    <img className={styles.icon} src={this.state.arrows.left}/>
                </div>
                <div className={styles.count}>
                    <span className={styles.vertmiddle}>{id+1}/{this.state.images.length}</span>
                </div>
            </div>
        );
    }

    render() {
        return this.slide(this.state.slide_id)
    }
}

const Offices = () => (
    <div className={styles.red}>
        {tagline}
        {<Slider/>}
    </div>
)

export default Offices;