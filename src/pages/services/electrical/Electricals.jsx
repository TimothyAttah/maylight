import { Link } from 'react-router-dom';
import * as Styles from './ElectricalsStyles';
import { panel, member1 } from '../../../assets';
import { FaStar } from 'react-icons/fa';

const Electricals = () => {
	return (
		<div>
			<Styles.HeroSection>
				<Styles.HeroBG />
				<Styles.HeroContent
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<h1>Advanced Electrical Engineering Solutions</h1>
					<p>
						Reliable, safe, and efficient electrical systems for residential,
						commercial, and industrial projects.
					</p>

					<div className='buttons__container'>
						<Link to='/contact' className='btn'>
							Request a Battery Assessment
						</Link>
						<Link to='#' className='btn btn__primary'>
							Learn More
						</Link>
					</div>
				</Styles.HeroContent>
			</Styles.HeroSection>
			<Styles.Container>
				<Styles.InfoContainer>
					<Styles.InfoText>
						<h4>
							Our Electrical engineering services are critical for buildings or
							infrastructure of all types and sizes, including residential,
							commercial, and industrial buildings. With the increasing emphasis
							on sustainability and energy efficiency.
						</h4>

						<Link className='btn btn__primary'>Start a Project</Link>
					</Styles.InfoText>
					<Styles.InfoImg>
						<img src={panel} alt='' />
					</Styles.InfoImg>
				</Styles.InfoContainer>

				<Styles.ListContainer>
					<Styles.ListTextContainer>
						<p>
							At Maylights, we play a crucial role on your projects when
							designing and implementing systems that are environmentally
							friendly and cost-effective. Whether designing a new building or
							upgrading an existing one, our electrical engineers are essential
							in ensuring that electrical systems are safe, reliable, and
							optimized for peak performance.
						</p>
					</Styles.ListTextContainer>
					<Styles.ListInfoContainer>
						<h2>Our Electrical Engineering Services include</h2>
						<Styles.ElectricalServicesList>
							<div>
								<h4>Extra Low Voltage</h4>
								{[
									'Data & PABX Systems',
									'Building Management Systems',
									'Fire Alarm Systems',
									'Closed Circuit Television Systems',
									'Access Control Systems',
									'Burglar Alarm',
									'Public Address Systems',
									'DSTV / CATV Systems',
									'Video Door Entry Systems',
									'Conference Halls Systems',
									'Car Park Management Systems',
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
								<h4>Power Services</h4>
								{[
									'Power transformers from 5MVA up to 800 MVA, 500KV.',
									'Distribution transformers from 100KVA up to 5000KVA (5MVA).',
									'Mobile substations up to 60MVA, 230 KV.',
									'Fixed substations from 10MVA up to 60MVA.',
									'On load disconnectors with arching chambers up to 36KV, 600A.',
									'Low Voltage switchgears.',
									'Medium voltage switchgear up to 36KV.',
									'Substation up to 1000KVA.',
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
								<h4>Medium Voltage</h4>
								{[
									'11KV and 33 KV Switchgear',
									'HT Generators and Synchronization',
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
								<h4>Low Voltage</h4>
								{[
									'415V Generator, Generator Synchronization and AMF Systems',
									'Distribution Network – Panels and DBs',
									'Rising Mains',
									'Conduiting, Trunking and Wiring',
									'Lighting Installations',
									'Wiring Accessories',
									'Underfloor Power Distribution',
									'Power Poles Distribution Networks',
									'Earthing and Lightning Protection Systems',
									'UPS and AVR',
									'External Poles and Lighting Installations',
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
						<Link className='btn'>Start a Project</Link>
					</Styles.Card>
					<Styles.Card primary>
						<h4>NEED A FREE CONSULTANCY?</h4>
						<p>
							Needing more information or not sure where to start from? we’re
							here to help you figure it out
						</p>
						<Link className='btn btn__primary'>Get In Touch</Link>
					</Styles.Card>
				</Styles.CardContainer>
			</Styles.Container>
		</div>
	);
};

export default Electricals;
