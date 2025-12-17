import * as Styles from './AboutStyles';
import BackgroundImg from '../../assets/background.jpeg';
import { motion } from 'framer-motion';
import './About.css';
import Teams from '../../components/Teams';

const About = () => {
	return (
		<div>
			<Styles.AboutHero>
				<img src={BackgroundImg} alt='' />
				<Styles.BlendModeTitle>About Us</Styles.BlendModeTitle>
			</Styles.AboutHero>
			<Styles.CultureInfo>
				<h4>
					Powering Progress Through Smarter, Cleaner, Reliable Energy Solutions
				</h4>
				<p>
					At <b>Maylight</b>, we believe that sustainable energy is more than
					technology — it’s a commitment to building stronger communities,
					improving everyday life, and shaping a future powered by innovation,
					reliability, and environmental responsibility.
				</p>
				<p>
					With over <b>7+ years of industry experience</b>, Maylight has become
					a trusted partner in the design, installation, and maintenance of
					<b>
						solar systems, battery storage, water infrastructure, piping
						solutions, and electrical engineering services
					</b>
					. Our mission is simple:
					<b>
						To deliver energy solutions that are smart, sustainable, and built
						to last.
					</b>
				</p>
			</Styles.CultureInfo>

			<Styles.Container className=' container'>
				<section>
					<Styles.MissionVissionBoxWrapper>
						<Styles.MissionVissionBox
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
						>
							<h2 className='title'>
								Our <span className='g-text'>Mission</span>
							</h2>
							<p className='text-gray-700 leading-relaxed'>
								To empower homes, businesses, and communities with clean,
								dependable energy systems engineered for performance,
								efficiency, and long-term value. We combine disciplined
								engineering with practical sustainability to deliver solutions
								that work today and scale for tomorrow.
							</p>
						</Styles.MissionVissionBox>

						<Styles.MissionVissionBox
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
						>
							<h2 className='title'>
								Our <span className='g-text'>Vision</span>
							</h2>
							<p className='text-gray-700 leading-relaxed'>
								To become a leading force in renewable infrastructure across
								Africa — delivering world-class engineering, transforming energy
								accessibility, and driving sustainable development for future
								generations.
							</p>
						</Styles.MissionVissionBox>
					</Styles.MissionVissionBoxWrapper>
				</section>

				<section className='py-18 px-6 md:px-20'>
					<div className='max-w-6xl mx-auto' style={{ marginTop: '100px' }}>
						<h3 className='text-xl md:text-2xl font-bold mb-6 text-center title'>
							What We Stand For
						</h3>
						<div className='group'>
							<ValueCard
								title='Reliability'
								desc='Engineered systems built for uptime, safety, and durability.'
							/>
							<ValueCard
								title='Sustainability'
								desc='Practical solutions that reduce carbon footprint and conserve resources.'
							/>
							<ValueCard
								title='Innovation'
								desc='Modern technology and smart design to optimize performance and cost.'
							/>
						</div>

						<div className='group'>
							<ValueCard
								title='Integrity'
								desc='Transparent projects, clear communication, and fair pricing.'
							/>
							<ValueCard
								title='Community Impact'
								desc='Projects that improve access to power, water, and opportunity.'
							/>
							<ValueCard
								title='Expertise'
								desc='Certified engineers and technicians delivering professional results.'
							/>
						</div>
					</div>
				</section>

				<Styles.WhatStandForContainer>
					<Styles.WhatStandFor className='max-w-6xl mx-auto'>
						<h3 className='title text-center'>What We Do</h3>
						<Styles.WhatStandForSubtitle>
							Maylight offers end-to-end services across renewable energy, water
							infrastructure, piping, and electrical engineering — from concept
							and design to installation, testing and long-term support.
						</Styles.WhatStandForSubtitle>

						<Styles.WhatStandForList className='grid grid-cols-1 md:grid-cols-3 gap-8 group'>
							<ServiceCard
								title='Solar Energy Systems'
								desc='Custom-designed PV installations for residential, commercial, and industrial applications.'
							/>
							<ServiceCard
								title='Battery Storage Solutions'
								desc='Smart energy storage to insure power continuity and maximize renewable utilization.'
							/>
							<ServiceCard
								title='Water Systems & Treatment'
								desc='Safe, efficient water supply, filtration and sustainable harvesting systems.'
							/>
							<ServiceCard
								title='Piping Solutions'
								desc='Durable piping for water, gas and industrial processes, engineered for safety and longevity.'
							/>
							<ServiceCard
								title='Electrical Engineering'
								desc='Power distribution, backup solutions and integration with renewable systems.'
							/>
							<ServiceCard
								title='Maintenance & Support'
								desc='Ongoing monitoring, preventive maintenance and rapid response services.'
							/>
						</Styles.WhatStandForList>
					</Styles.WhatStandFor>
				</Styles.WhatStandForContainer>

				<section className='py-16 px-6 md:px-20 '>
					<Styles.TimelineContainer className='max-w-6xl mx-auto'>
						<h3 className='text-2xl md:text-3xl font-bold mb-8 text-center'>
							Our Journey
						</h3>
						<ol className='space-y-6 md:space-y-0 md:flex md:justify-between md:items-start md:gap-6'>
							<TimelineItem
								year='2017'
								title='Founded'
								desc='Maylight founded with a focus on renewable energy consultancy.'
							/>
							<TimelineItem
								year='2019'
								title='First Commercial Rollout'
								desc='Completed large-scale solar installations for industrial clients.'
							/>
							<TimelineItem
								year='2021'
								title='Battery Integration'
								desc='Added battery storage and hybrid systems to our core services.'
							/>
							<TimelineItem
								year='2024'
								title='Community Initiatives'
								desc='Launched programs bringing solar & water to underserved communities.'
							/>
						</ol>
					</Styles.TimelineContainer>
				</section>

				<div>
					<Teams
						title='Leadership '
						subtitle='& Experts'
						desc='	Our team combines seasoned engineers, certified technicians and
						project managers dedicated to delivering every project on time and
						on spec.'
					/>
				</div>
			</Styles.Container>
		</div>
	);
};

export default About;

const ValueCard = ({ title, desc }) => {
	return (
		// <motion.div
		// 	initial={{ opacity: 0, y: 12 }}
		// 	whileInView={{ opacity: 1, y: 0 }}
		// 	viewport={{ once: true }}
		// 	transition={{ duration: 0.5 }}
		// >

		// 	<h4 className='text-lg font-semibold mb-2'>{title}</h4>
		// 	<p className='text-gray-600'>{desc}</p>
		// </motion.div>
		<motion.div
			className='row'
			initial={{ opacity: 0, y: 15 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 1.5 }}
		>
			<div className='details'>
				<p className='text__muted'>{title}</p>
				<h3>{desc}</h3>
			</div>
		</motion.div>
	);
};

function ServiceCard({ title, desc }) {
	return (
		// <motion.div
		// 	className='p-6 bg-gray-50 border rounded-2xl shadow-sm hover:shadow-md transition'
		// 	initial={{ opacity: 0, y: 12 }}
		// 	whileInView={{ opacity: 1, y: 0 }}
		// 	viewport={{ once: true }}
		// 	transition={{ duration: 0.55 }}
		// >
		// 	<h4 className='text-lg font-semibold mb-2'>{title}</h4>
		// 	<p className='text-gray-600 text-sm'>{desc}</p>
		// </motion.div>

		<motion.div
			className='row'
			initial={{ opacity: 0, y: 15 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 1.55 }}
		>
			<div className='details'>
				<h4 className='text__muted  text-[25px]'>{title}</h4>
				<p>{desc}</p>
			</div>
		</motion.div>
	);
}

function TimelineItem({ year, title, desc }) {
	return (
		<Styles.TimelineBox
		 className='p-4 rounded-2xl shadow-sm md:flex-1'>
			<div className='text-sm text-gray-400 font-medium mb-1'>{year}</div>
			<div className='font-semibold text-[18px]'>{title}</div>
			<p className='text-gray-400 text-sm mt-2'>{desc}</p>
		</Styles.TimelineBox>
	);
}
