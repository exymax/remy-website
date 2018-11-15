import React from 'react';
import PropTypes from 'prop-types';

import ApplyToUs from '~components/ApplyToUs';
import { jobs } from '~constants';
import Job from './Job';
import './styles.scss';

class HiringSection extends React.PureComponent {
	static propTypes = {
    height: PropTypes.number.isRequired,
    onOpenHiringPanel: PropTypes.func.isRequired,
	};

  handleOpenHiringPanel = () => {
  	const { onOpenHiringPanel } = this.props;

    onOpenHiringPanel(null);
	};

	render() {
		const {
      height,
			onOpenHiringPanel,
		} = this.props;

		return (
			<div
				className="hiring-section"
				style={{ height }}
			>
        <div className="join-us">
          <div className="title">join us</div>

					<div className="text">We are working in Computer vision, Robotics, Artificial intelligence, Mechanical engineering.</div>

          <div className="jobs">
            {jobs.map((job) => (
              <Job
                key={job.id}
                job={job}
                onOpenHiringPanel={onOpenHiringPanel}
              />
            ))}
          </div>

					<div className="text">We are open to collaborate with R&D centers in Universities and other institutions.</div>

					<div className="text"><strong className="text-hovered">Get in touch</strong> if you want to help us explore what robotics can serve up next.</div>
				</div>

        <div className="apply-to-us">
          <div className="title">want to help us explore what robotics can serve up next?</div>

          <ApplyToUs />
        </div>
			</div>
		);
	}
}

export default HiringSection;
