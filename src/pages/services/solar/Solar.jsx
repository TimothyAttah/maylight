import { Link } from 'react-router-dom';
import * as Styles from './SolarStyles';

export default function Solar() {
	return (
		<div>
			<Styles.HeroSection>
				<Styles.HeroBG />
				<Styles.HeroContent
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<h1>Engineered Solar Systems That Power Tomorrow</h1>
					<p>
						Designed for maximum efficiency, reliability, and long-term
						performance.
					</p>

					<div className='buttons__container'>
						<Link to='/contact' className='btn'>
							Get a Free Solar Assessment
						</Link>
						<Link to='#' className='btn btn__primary'>
							View Our Projects
						</Link>
					</div>
				</Styles.HeroContent>
			</Styles.HeroSection>

			{/* BENEFITS STRIP */}
			<Styles.BenefittBox>
				{[
					'Save on energy bills',
					'24/7 reliable power',
					'Reduce your carbon footprint',
					'Increase property value',
				].map((item) => (
					<div key={item}>✓ {item}</div>
				))}
			</Styles.BenefittBox>

			<Styles.Container className='container'>
				{/* ABOUT SECTION */}
				<Styles.SolarContent>
					<h2>
						Smart <span className='g-text'>Solar</span> Systems Built for
						Real-World Performance
					</h2>
					<p>
						At Maylight, we bring together advanced engineering, premium solar
						technology, and expert installation to create clean energy systems
						built to last. Whether you're powering a home, business, or
						industrial facility, our solar solutions deliver consistent
						performance and long-term savings.
					</p>
				</Styles.SolarContent>

				{/* SERVICES SECTION */}
				<Styles.SolarServicesContent>
					<h2>
						Our <span className='g-text'>Solar</span> Services
					</h2>
					<Styles.SolarServicesContentList>
						{[
							'Residential Solar Systems',
							'Commercial & Industrial Solar',
							'Solar Battery Storage',
							'Off-Grid & Hybrid Solutions',
							'Solar Maintenance & Support',
						].map((service) => (
							<div key={service}>
								<h3 className='sub__title'>{service}</h3>
								<p className='text__muted'>
									Learn how Maylight delivers modern, reliable, and scalable
									solar energy solutions designed for long-term value.
								</p>
							</div>
						))}
					</Styles.SolarServicesContentList>
				</Styles.SolarServicesContent>

				{/* INSTALLATION PROCESS */}
				<Styles.SolarInstallationContent>
					<h2>
						Our <span className='g-text'>Solar</span> Installation Process
					</h2>
					<Styles.SolarInstallationList>
						{[
							'Site Inspection & Assessment',
							'System Design & Proposal',
							'Approval & Documentation',
							'Installation & Wiring',
							'Testing & Commissioning',
							'Monitoring & Maintenance',
						].map((step, index) => (
							<div key={step}>
								<h3>Step {index + 1}</h3>
								<p className='text__muted'>{step}</p>
							</div>
						))}
					</Styles.SolarInstallationList>
				</Styles.SolarInstallationContent>

				{/* TESTIMONIALS */}
				<Styles.SolarInstallationContent>
					<h2>What Our Clients Say</h2>

					<Styles.SolarTestimonialsList>
						{[
							{
								text: 'Maylight delivered a flawless installation with impressive results.',
								author: 'Adewale, Homeowner',
							},
							{
								text: "Our factory now saves millions annually thanks to Maylight's engineering.",
								author: 'Zenith Manufacturing',
							},
							{
								text: 'Reliable power at last! Their hybrid solar system changed everything.',
								author: 'Green Valley Estates',
							},
						].map((t) => (
							<div key={t.author}>
								<p className='text__muted'>“{t.text}”</p>
								<h4 className='g-text'>— {t.author}</h4>
							</div>
						))}
					</Styles.SolarTestimonialsList>
				</Styles.SolarInstallationContent>

				{/* CTA SECTION */}
				<Styles.CTA>
					<h2>Ready to Switch to Clean Solar Energy?</h2>
					<p>
						Let Maylight design the perfect solar solution for your home or
						business.
					</p>
					<Link to='/contact' className='btn  btn__primary'>
						Request a Free Solar Quote
					</Link>
				</Styles.CTA>
			</Styles.Container>
		</div>
	);
}
