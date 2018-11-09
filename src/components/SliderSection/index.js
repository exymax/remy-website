import React from 'react';

import Slider from './Slider';
import './styles.scss';

class SliderSection extends React.PureComponent {
	render() {
		return (
			<div className="slider-section">
        <div className="description">
          <div className="help-container">
						<div className="introduction">
							Remy Robotics is the latest project from Kinetik, a technology investment group with companies at the cutting edge of:
						</div>

						<div className="advantages">
							<div>Electric Vehicles — <span className="plus">Arrival</span>,</div>
							<div>Robofacturing — <span className="plus">TRA Robotics</span>,</div>
							<div>Autonomous Vehicles — <span className="plus">Roborace</span>.</div>
						</div>
					</div>

					<div className="conclusion">
						<div>
							Kinetik's companies have offices in London, LA, Berlin and Saint-Petersburg, while Remy Robotics is located in Barcelona with some software engineering functions in Moscow.
						</div>

						<div>
            	For Remy Robotics, we have brought together talented specialists in the fields of robotics and machine learning from all over the world.
						</div>
					</div>
				</div>

				<Slider />
			</div>
		);
	}
}

export default SliderSection;
