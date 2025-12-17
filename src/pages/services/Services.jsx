import { useInView } from 'react-intersection-observer';
import * as Styles from './ServicesStyles';
import { services } from './servicesData';
import { motion } from 'framer-motion';
import {FaCheck} from 'react-icons/fa'
import { Link } from 'react-router-dom';

const useParallax = (value) => {
	return {
		transform: `translateY(${value * 0.3}px)`,
	};
};

const Services = () => {
	return (
		<Styles.PageContainer>
			<Styles.HeroSection>
				<Styles.HeroBG />
				<Styles.HeroContent
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<h1>Powering Progress With Smarter Energy Solutions</h1>
					<p>
						At Maylight, we deliver reliable, efficient, and future-ready
						renewable energy systems designed to power homes, businesses, and
						entire communities.
					</p>
				</Styles.HeroContent>
			</Styles.HeroSection>

			<Styles.ServicesWrapper>
				{services.map((service, i) => (
					<ServiceCard key={i} index={i} />
				))}
			</Styles.ServicesWrapper>

			<Styles.CTASection>
				<motion.h2
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					Ready to upgrade your energy future?
				</motion.h2>
				<Styles.CTAButton>
					<Link to='/contact'>Get Started Today</Link>
				</Styles.CTAButton>
			</Styles.CTASection>
		</Styles.PageContainer>
	);
};

export default Services;

function ServiceCard({ index }) {
	const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

	const service = services[index];
	const style = useParallax(index * 10);

	return (
		<Styles.Card
			ref={ref}
			as={motion.div}
			style={style}
			initial={{ opacity: 0, y: 60 }}
			animate={inView ? { opacity: 1, y: 0 } : {}}
			transition={{ duration: 0.8, delay: index * 0.1 }}
		>
			<h3>{service.title}</h3>
			<p>{service.text}</p>
			<ul>
				{service.items.map((item, i) => (
					<li key={i}> <FaCheck />{item}</li>
				))}
			</ul>
		</Styles.Card>
	);
}
