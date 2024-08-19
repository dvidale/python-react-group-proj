import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import './Footer.css';

export const Footer = () => {
	return (
		<div className='footer-component'>
			<div className='footer-info-wrapper'>
				<div className='footer-info-section'>
					<ul className='footer-ul'>
						<li>
							<a href='https://github.com/dvidale'>
								DeAndre&apos;s Github <FaGithub />
							</a>
						</li>
						<li>
							<a href='https://www.linkedin.com/in/deandrevidale'>
								DeAndre&apos;s Github <FaLinkedin />
							</a>
						</li>
					</ul>
				</div>
				<div className='footer-info-section'>
					<ul className='footer-ul'>
						<li>
							<a href='https://github.com/Haydengalyeanbiz'>
								Hayden&apos;s Github <FaGithub />
							</a>
						</li>
						<li>
							<a href='https://www.linkedin.com/in/hayden-galyean-42a518189/'>
								Hayden&apos;s LinkedIn <FaLinkedin />
							</a>
						</li>
					</ul>
				</div>
				<div className='footer-info-section'>
					<ul className='footer-ul'>
						<li>
							<a href='https://github.com/fullstackneil'>
								Neil&apos;s Github <FaGithub />
							</a>
						</li>
						<li>
							<a href='https://www.linkedin.com/in/neil-kang/'>
								Neil&apos;s LinkedIn <FaLinkedin />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
