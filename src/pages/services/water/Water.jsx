import { Link } from 'react-router-dom';
import * as Styles from './WaterStyles';

export default function WaterBatteryPages() {
	return (
		<div>
			<Styles.HeroSection>
				<Styles.HeroBG />
				<Styles.HeroContent
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<h1> Clean, Reliable Water Solutions for Every Community</h1>
					<p>
						Delivering safe, sustainable, and efficient water systems for homes,
						businesses, and industries.
					</p>

					<div className='buttons__container'>
						<Link to='/contact' className='btn'>
							Request a Consultation
						</Link>
						<Link to='#' className='btn btn__primary'>
							Learn More
						</Link>
					</div>
				</Styles.HeroContent>
			</Styles.HeroSection>

			<Styles.Container>
				<Styles.WaterServicesContent>
					<h2>
						Our <span className='g-text'>Water</span> Services
					</h2>

					<Styles.WaterServicesContentList>
						{[
							'Residential Water Systems',
							'Commercial & Industrial Systems',
							'Water Treatment & Filtration',
							'Sustainable Water Solutions',
							'Maintenance & Support',
						].map((service) => (
							<div key={service}>
								<h3 className='sub__title'>{service}</h3>
								<p className='text__muted'>
									Expert water solutions designed for safety, efficiency, and
									long-term reliability.
								</p>
							</div>
						))}
					</Styles.WaterServicesContentList>
				</Styles.WaterServicesContent>

				<Styles.CTA>
					<h2>Ready to Upgrade Your Water Systems?</h2>
					<p>
						Let Maylight design and implement smart, sustainable solutions for
						your home or business.
					</p>
					<button className='btn  btn__primary'>
						Get Your Free Consultation
					</button>
				</Styles.CTA>
			</Styles.Container>
		</div>
	);
}
