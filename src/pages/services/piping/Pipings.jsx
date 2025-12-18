import { Link } from 'react-router-dom';
import * as Styles from './PipingsStyles';
import { panel, member1 } from '../../../assets';
import pix1 from '../../../assets/pipe-2.jpg';

import { FaStar } from 'react-icons/fa';

const Pipings = () => {
	return (
		<div>
			<Styles.HeroSection>
				<Styles.HeroBG />
				<Styles.HeroContent
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<h1> Precision Piping Solutions for Every Project</h1>
					<p>
						Reliable, safe, and high-performance piping engineered for homes,
						industries, and commercial facilities.
					</p>

					<div className='buttons__container'>
						<Link to='/contact' className='btn'>
							Request a Consultation
						</Link>
					</div>
				</Styles.HeroContent>
			</Styles.HeroSection>
			<Styles.Container>
				<Styles.InfoContainer>
					<Styles.InfoText>
						<h4>
							Our Piping engineers who specialize in building and engineering
							services work closely with architects, contractors, and building
							owners to develop cost-effective and efficient solutions for a
							wide range of piping systems, including HVAC, fire protection,
							plumbing, and industrial piping.
						</h4>

						<Link to='/contact/start-project' className='btn btn__primary'>
							Start a Project
						</Link>
					</Styles.InfoText>
					<Styles.InfoImg>
						<img src={pix1} alt='' />
					</Styles.InfoImg>
				</Styles.InfoContainer>

				<Styles.ListContainer>
					<Styles.ListTextContainer>
						<p>
							At Maylight we have vast experience when it comes to the planning,
							design, installation, and maintenance of piping systems that
							transport fluids, gases, and other materials within buildings. Our
							Piping engineers who specialize in building and engineering
							services work closely with architects, contractors, and building
							owners to develop cost-effective and efficient solutions for a
							wide range of piping systems, including HVAC, fire protection,
							plumbing, and industrial piping.
						</p>
					</Styles.ListTextContainer>
					<Styles.ListInfoContainer>
						<h2>Our Piping Engineering Services include</h2>
						<Styles.ElectricalServicesList>
							<div>
								<h4>Plumbing</h4>
								{[
									'Cold and Hot Water supply',
									'Sanitary Wares, Kitchen Equipment and Accessories',
									'Soil and waste system',
									'Rainwater system',
									'Borehole and water treatment',
									'Sewage treatment',
									'Swimming pool and Jacuzzi',
									'Water Fountains',
								].map((item, i) => (
									<div key={i}>
										<p>
											<FaStar />
											{item}
										</p>
									</div>
								))}
							</div>
							<div>
								<h4>Plumbing</h4>
								{[
									'Industrial & Commercial Piping',
									'Renewable Energy Integration',
									'Water Supply & Distribution',
									'Gas Piping Systems',
									'Maintenance & Support',
								].map((item, i) => (
									<div key={i}>
										<p>
											<FaStar />
											{item}
										</p>
									</div>
								))}
							</div>
						</Styles.ElectricalServicesList>
					</Styles.ListInfoContainer>
				</Styles.ListContainer>

				<Styles.CardContainer>
					<Styles.Card>
						<img src={member1} alt='' />
					</Styles.Card>
					<Styles.Card primary>
						<h4>HAVE AN UPCOMING PROJECT?</h4>
						<p>
							If you have any questions or would like to discuss your project,
							don’t hesitate to reach out to us.
						</p>
						<Link to='/contact/start-project' className='btn'>
							Start a Project
						</Link>
					</Styles.Card>
					<Styles.Card primary>
						<h4>NEED A FREE CONSULTANCY?</h4>
						<p>
							Needing more information or not sure where to start from? we’re
							here to help you figure it out
						</p>
						<Link to='/contact' className='btn btn__primary'>
							Get In Touch
						</Link>
					</Styles.Card>
				</Styles.CardContainer>
			</Styles.Container>
		</div>
	);
};

export default Pipings;
