import React from 'react';

export default function ElectricalPage() {
	return (
		<div className='w-full font-sans text-gray-800'>
			{/* HERO SECTION */}
			<section className='w-full h-[80vh] flex flex-col justify-center items-center text-center bg-gradient-to-br from-indigo-500 to-purple-700 p-6'>
				<h1 className='text-4xl md:text-6xl font-bold text-white drop-shadow-lg'>
					Advanced Electrical Engineering Solutions
				</h1>
				<p className='text-white text-lg md:text-2xl mt-4 max-w-2xl'>
					Reliable, safe, and efficient electrical systems for residential,
					commercial, and industrial projects.
				</p>
				<div className='mt-8 flex gap-4'>
					<button className='px-6 py-3 bg-white text-gray-800 rounded-xl shadow-md font-semibold hover:scale-105 transition'>
						Request a Consultation
					</button>
					<button className='px-6 py-3 bg-gray-900 text-white rounded-xl shadow-md font-semibold hover:scale-105 transition'>
						Learn More
					</button>
				</div>
			</section>

			{/* ELECTRICAL SERVICES GRID */}
			<section className='py-20 px-6 md:px-20 bg-gray-50'>
				<h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
					Our Electrical Services
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
					{[
						'Residential Electrical Systems',
						'Commercial & Industrial Wiring',
						'Renewable Integration',
						'Power Backup Solutions',
						'Maintenance & Safety Checks',
					].map((service) => (
						<div
							key={service}
							className='p-6 bg-white rounded-2xl shadow hover:shadow-xl transition'
						>
							<h3 className='text-xl font-semibold mb-3'>{service}</h3>
							<p className='text-gray-600 text-sm'>
								High-quality electrical solutions designed for safety,
								efficiency, and reliability.
							</p>
						</div>
					))}
				</div>
			</section>

			{/* ELECTRICAL PROCESS */}
			<section className='py-20 px-6 md:px-20 bg-white'>
				<h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>
					Our Electrical Installation Process
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					{[
						'Site Assessment & Consultation',
						'Design & Engineering',
						'Installation & Wiring',
						'Testing & Safety Checks',
						'Ongoing Support & Maintenance',
					].map((step, index) => (
						<div
							key={step}
							className='p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition'
						>
							<h3 className='text-xl font-bold mb-2'>Step {index + 1}</h3>
							<p className='text-gray-700 text-sm'>{step}</p>
						</div>
					))}
				</div>
			</section>

			{/* FINAL CTA SECTION */}
			<section className='py-20 px-6 md:px-20 text-center bg-indigo-600 text-white rounded-t-3xl'>
				<h2 className='text-3xl md:text-4xl font-bold mb-4'>
					Ready to Upgrade Your Electrical Systems?
				</h2>
				<p className='text-lg mb-8 max-w-2xl mx-auto'>
					Let Maylight provide smart, safe, and reliable electrical solutions
					for your project.
				</p>
				<button className='px-8 py-4 bg-white text-gray-800 rounded-xl shadow-lg font-semibold hover:scale-105 transition'>
					Get Your Free Consultation
				</button>
			</section>
		</div>
	);
}
