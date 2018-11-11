import React from 'react';

import { jobs } from '~constants';
import './styles.scss';

class HiringSection extends React.PureComponent {
	render() {
		return (
			<div className="hiring-section">
        <div className="join-us">
          <div className="title">join us</div>

					<div className="text">We are working in Computer vision, Robotics, Artificial intelligence, Mechanical engineering.</div>

					<div className="text">We are open to collaborate with R&D centers in Universities and other institutions.</div>

					<div className="text"><strong className="text-hovered">Get in touch</strong> if you want to help us explore what robotics can serve up next.</div>
				</div>

				<div className="hiring-now">
					<div className="title">hiring now</div>

					<div className="text">We are looking for the brightest minds to help us grow. Please see our open positions below.</div>

					<div className="jobs">
						{jobs.map(({ name, location }) => (
							<div className="job">
								<div className="name">{name}</div>

								<div className="location">{location}</div>
							</div>
						))}

						<div className="hr" />

						<div className="more">
							8 more →
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default HiringSection;
