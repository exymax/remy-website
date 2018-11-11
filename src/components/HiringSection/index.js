import React from 'react';
import PropTypes from 'prop-types';

import { jobs } from '~constants';
import Job from './Job';
import './styles.scss';

class HiringSection extends React.PureComponent {
	static propTypes = {
    onOpenHiringPanel: PropTypes.func.isRequired,
	};

  handleOpenHiringPanel = () => {
  	const { onOpenHiringPanel } = this.props;

    onOpenHiringPanel(null);
	};

	render() {
		const { onOpenHiringPanel } = this.props;

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
						{jobs.map((job) => (
							<Job
								key={job.id}
								job={job}
                onOpenHiringPanel={onOpenHiringPanel}
							/>
						))}

						<div className="hr" />

						<div
							className="more"
							onClick={this.handleOpenHiringPanel}
						>
							8 more →
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default HiringSection;
