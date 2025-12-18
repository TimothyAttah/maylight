import { Link } from 'react-router-dom';
import * as Styles from './BatteryStyles';

const Battery = () => {
	return (
		<div>
			<Styles.HeroSection>
				<Styles.HeroBG />
				<Styles.HeroContent
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<h1>Power That Lasts: Intelligent Battery Storage Solutions</h1>
					<p>Seamlessly store and use energy anytime, anywhere.</p>

					<div className='buttons__container'>
						<Link to='/contact' className='btn'>
							Request a Battery Assessment
						</Link>
					</div>
				</Styles.HeroContent>
			</Styles.HeroSection>
			<Styles.Container className='container'>
				<Styles.BatteryServicesContent>
					<h2>
						<span className='g-text'>Battery</span> Storage Solutions
					</h2>

					<Styles.BatteryServicesContentList>
						{[
							'Residential Storage Systems',
							'Commercial & Industrial Storage',
							'Hybrid Energy Integration',
							'Intelligent Energy Management',
							'Maintenance & Monitoring',
						].map((service) => (
							<div key={service}>
								<h3 className='sub__title'>{service}</h3>
								<p className='text__muted'>
									High-performance, intelligent battery solutions for reliable
									energy anytime.
								</p>
							</div>
						))}
					</Styles.BatteryServicesContentList>
				</Styles.BatteryServicesContent>

				<Styles.CTA>
					<h2>Ready to Upgrade Your Battery Systems?</h2>
					<p>
						Let Maylight design and implement smart, sustainable solutions for
						your home or business.
					</p>
					<Link to='/contact' className='btn  btn__primary'>
						Get Your Free Consultation
					</Link>
				</Styles.CTA>
			</Styles.Container>
		</div>
	);
};

export default Battery;
