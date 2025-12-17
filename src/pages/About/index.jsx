// AboutPage.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function About () {
	return (
		<div className='w-full font-sans text-gray-800'>
			{/* HERO */}
			<motion.section
				className='w-full h-[70vh] flex flex-col justify-center items-center text-center bg-linear-to-br from-gray-900 to-gray-700 p-6'
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.7 }}
			>
				<h1 className='text-3xl md:text-5xl font-bold text-white leading-tight max-w-4xl'>
					Powering Progress Through Smarter, Cleaner, Reliable Energy Solutions
				</h1>
				<p className='text-gray-200 mt-4 max-w-2xl text-lg'>
					With over <strong>7+ years of experience</strong>, Maylight delivers
					engineering-driven renewable energy, water, piping and electrical
					solutions built for performance, reliability and sustainability.
				</p>
			</motion.section>

			{/* MISSION & VISION */}
			<section className='py-16 px-6 md:px-20 bg-white'>
				<div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<h2 className='text-2xl md:text-3xl font-semibold mb-4'>
							Our Mission
						</h2>
						<p className='text-gray-700 leading-relaxed'>
							To empower homes, businesses, and communities with clean,
							dependable energy systems engineered for performance, efficiency,
							and long-term value. We combine disciplined engineering with
							practical sustainability to deliver solutions that work today and
							scale for tomorrow.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<h2 className='text-2xl md:text-3xl font-semibold mb-4'>
							Our Vision
						</h2>
						<p className='text-gray-700 leading-relaxed'>
							To become a leading force in renewable infrastructure across
							Africa — delivering world-class engineering, transforming energy
							accessibility, and driving sustainable development for future
							generations.
						</p>
					</motion.div>
				</div>
			</section>

			{/* VALUES */}
			<section className='py-12 px-6 md:px-20 bg-gray-50'>
				<div className='max-w-6xl mx-auto'>
					<h3 className='text-xl md:text-2xl font-bold mb-6 text-center'>
						What We Stand For
					</h3>
					<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
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
					<div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-6'>
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

			{/* WHAT WE DO / SERVICES */}
			<section className='py-16 px-6 md:px-20 bg-white'>
				<div className='max-w-6xl mx-auto'>
					<h3 className='text-2xl md:text-3xl font-bold mb-8 text-center'>
						What We Do
					</h3>
					<p className='text-center text-gray-700 max-w-3xl mx-auto mb-8'>
						Maylight offers end-to-end services across renewable energy, water
						infrastructure, piping, and electrical engineering — from concept
						and design to installation, testing and long-term support.
					</p>

					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
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
					</div>
				</div>
			</section>

			{/* TIMELINE / JOURNEY */}
			<section className='py-16 px-6 md:px-20 bg-gray-50'>
				<div className='max-w-6xl mx-auto'>
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
				</div>
			</section>

			{/* TEAM PREVIEW */}
			<section className='py-16 px-6 md:px-20 bg-white'>
				<div className='max-w-6xl mx-auto text-center'>
					<h3 className='text-2xl md:text-3xl font-bold mb-6'>
						Leadership & Experts
					</h3>
					<p className='text-gray-700 mb-8 max-w-3xl mx-auto'>
						Our team combines seasoned engineers, certified technicians and
						project managers dedicated to delivering every project on time and
						on spec.
					</p>

					<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
						<TeamCard
							name='Engr. Amina Yusuf'
							title='CEO & Founder'
							bio='Renewable energy strategist with 12+ years in project delivery.'
						/>
						<TeamCard
							name='Mr. Gabriel Amos'
							title='Head of Engineering'
							bio='Electrical and solar systems engineer focused on performance and safety.'
						/>
						<TeamCard
							name='Mrs. Ngozi Eze'
							title='Operations Director'
							bio='Leads operations, logistics and client success initiatives.'
						/>
					</div>
				</div>
			</section>

			{/* CTA */}
			<motion.section
				className='py-16 px-6 md:px-20 text-center bg-gradient-to-br from-green-400 to-teal-500 text-white rounded-t-3xl'
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.7 }}
			>
				<h3 className='text-2xl md:text-3xl font-bold mb-4'>
					Let’s Build a Brighter Future Together
				</h3>
				<p className='max-w-3xl mx-auto mb-6'>
					Whether you're powering a home, upgrading a business, or transforming
					a community — Maylight is ready to lead the way with dependable energy
					and engineering solutions you can trust.
				</p>
				<div className='flex justify-center gap-4'>
					<button className='px-6 py-3 bg-white text-gray-900 rounded-xl font-semibold shadow hover:scale-105 transition'>
						Request a Consultation
					</button>
					<button className='px-6 py-3 bg-transparent border border-white text-white rounded-xl font-semibold hover:bg-white/10 transition'>
						Explore Our Services
					</button>
				</div>
			</motion.section>
		</div>
	);
}

/* -----------------------------
   Small subcomponents below
   ----------------------------- */

function ValueCard({ title, desc }) {
	return (
		<motion.div
			className='p-6 bg-white rounded-2xl shadow-sm'
			initial={{ opacity: 0, y: 12 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
		>
			<h4 className='text-lg font-semibold mb-2'>{title}</h4>
			<p className='text-gray-600'>{desc}</p>
		</motion.div>
	);
}

function ServiceCard({ title, desc }) {
	return (
		<motion.div
			className='p-6 bg-gray-50 border rounded-2xl shadow-sm hover:shadow-md transition'
			initial={{ opacity: 0, y: 12 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.55 }}
		>
			<h4 className='text-lg font-semibold mb-2'>{title}</h4>
			<p className='text-gray-600 text-sm'>{desc}</p>
		</motion.div>
	);
}

function TimelineItem({ year, title, desc }) {
	return (
		<li className='bg-white p-4 rounded-2xl shadow-sm md:flex-1'>
			<div className='text-sm text-gray-500 font-medium mb-1'>{year}</div>
			<div className='font-semibold'>{title}</div>
			<p className='text-gray-600 text-sm mt-2'>{desc}</p>
		</li>
	);
}

function TeamCard({ name, title, bio }) {
	return (
		<motion.div
			className='p-6 bg-white rounded-2xl shadow-sm text-left'
			initial={{ opacity: 0, y: 12 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.55 }}
		>
			<div className='flex items-center gap-4 mb-4'>
				<div className='w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold'>
					{name
						.split(' ')
						.map((n) => n[0])
						.join('')}
				</div>
				<div>
					<div className='font-semibold'>{name}</div>
					<div className='text-sm text-gray-500'>{title}</div>
				</div>
			</div>
			<p className='text-gray-600 text-sm'>{bio}</p>
		</motion.div>
	);
}
