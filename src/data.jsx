import { IoCallOutline, IoLocationOutline } from 'react-icons/io5';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { FaYoutube, FaInstagram } from 'react-icons/fa';
import { CiLinkedin, CiFacebook } from 'react-icons/ci';
import {
	profile2,
	profile3,
	profile4,
	profile5,
	panel,
	turbine,
	batteries,
	member1,
	member2,
	member3,
	member4,
} from './assets';

// export const navTabs = [
//     {name:"Home",id:'header'},
//     {name:"About Us",id:'about'},
//     {name:"Services",id:'services'},
//     {name:"Team",id:'team'},
//     {name:"Project",id:'project'},
//     {name:"Clients",id:'testimonial'},
//     {name:"FAQ",id:'faq'},
//     {name:"Contact",id:'contact'},
// ];

export const navTabs = [
	{
		name: 'Home',
		navPath: '/',
	},
	{
		name: 'About Us',
		navPath: '/about',
	},

	{
		name: 'Services',
    navPath: '/services',
    id: 1,
		subMenu: [
			{
				name: 'Piping',
				navPath: '/services/piping',
			},
			{
				name: 'electrical',
				navPath: '/services/electrical',
			},
			{
				name: 'solar',
				navPath: '/services/solar',
			},
			{
				name: 'water',
				navPath: '/services/water',
			},
			{
				name: 'Battery',
				navPath: '/services/battery',
			},
		],
	},
	{
		name: 'FAQ',
		navPath: '/faq',
	},
	{
		name: 'Contact',
		navPath: '/contact',
	},
	// { name: 'Team', id: 'team' },
	// { name: 'Project', id: 'project' },
	// { name: 'Clients', id: 'testimonial' },
];

export const services = [
	{
		name: 'Solar Panels',
		image: panel,
		description: `We provide cutting-edge solar panels engineered for performance, durability, and efficiency.
    Our solar systems are designed to convert sunlight into clean, renewable energy — reducing costs while protecting the planet.
    Whether for residential, commercial, or community projects, our panels deliver reliable power you can count on every day.`,
		path: '/services/solar'
	},
	{
		name: 'Wind Turbines',
		image: turbine,
		description: `We believe in the limitless potential of nature. Our wind turbines transform natural wind flow into dependable, renewable electricity — providing clean energy for homes, businesses, and communities.
    Built for efficiency and reliability, our wind systems deliver consistent performance, helping you reduce energy costs and carbon emissions without compromising on quality.`,
		path: '/services/electrical'
	},
	{
		name: 'Battery Storage Solutions',
		image: batteries,
		description: `At Maylight, we understand that energy independence means more than just generation — it’s about storage and reliability.
    Our Battery Storage Solutions allow homes, businesses, and communities to store excess energy from solar or wind systems and use it when needed most.
    With Maylight, you get smart, durable, and efficient battery systems designed to keep your power flowing — day or night.`,
		path: '/services/battery'
	},
];

export const teams = [
	{
		name: 'Oluoma James',
		title: 'Technician',
		profile: member1,
		social: [
			{ name: 'Facebook', icon: <CiFacebook />, url: 'http://facebook.com' },
			{ name: 'LinkedIn', icon: <CiLinkedin />, url: 'http://linkedin.com' },
			{
				name: 'Youtube',
				icon: <FaYoutube />,
				url: 'https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1',
			},
			{ name: 'Instagram', icon: <FaInstagram />, url: 'http://instagram.com' },
		],
	},
	{
		name: 'Mary Brown',
		title: 'Technician',
		profile: member2,
		social: [
			{ name: 'Facebook', icon: <CiFacebook />, url: 'http://facebook.com' },
			{ name: 'LinkedIn', icon: <CiLinkedin />, url: 'http://linkedin.com' },
			{
				name: 'Youtube',
				icon: <FaYoutube />,
				url: 'https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1',
			},
			{ name: 'Instagram', icon: <FaInstagram />, url: 'http://instagram.com' },
		],
	},
	{
		name: 'Lawrence Onu',
		title: 'Technician',
		profile: member3,
		social: [
			{ name: 'Facebook', icon: <CiFacebook />, url: 'http://facebook.com' },
			{ name: 'LinkedIn', icon: <CiLinkedin />, url: 'http://linkedin.com' },
			{
				name: 'Youtube',
				icon: <FaYoutube />,
				url: 'https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1',
			},
			{ name: 'Instagram', icon: <FaInstagram />, url: 'http://instagram.com' },
		],
	},
	{
		name: 'Joy Eze',
		title: 'Technician',
		profile: member4,
		social: [
			{ name: 'Facebook', icon: <CiFacebook />, url: 'http://facebook.com' },
			{ name: 'LinkedIn', icon: <CiLinkedin />, url: 'http://linkedin.com' },
			{
				name: 'Youtube',
				icon: <FaYoutube />,
				url: 'https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1',
			},
			{ name: 'Instagram', icon: <FaInstagram />, url: 'http://instagram.com' },
		],
	},
];

export const projects = [
	{
		title: 'Solar system massive installation',
		image:
			'https://cdn.britannica.com/94/192794-050-3F3F3DDD/panels-electricity-order-sunlight.jpg',
		category: 'Solar Panel',
		description: `A large-scale solar deployment designed to deliver dependable, clean energy to industrial and commercial facilities. Maylight’s team handled every phase — from site assessment to grid integration — resulting in optimized energy output and significant operational savings.`,
	},
	{
		title: 'Empowering Communities: Solar Solutions for a Sustainable Future',
		image:
			'https://www.solarpowerworldonline.com/wp-content/uploads/2019/07/ips1.jpg',
		category: 'Solar Panel',
		description: `This initiative brought renewable power to underserved communities, providing access to clean electricity for schools, clinics, and local businesses.
    Maylight’s sustainable approach demonstrates how solar energy can uplift communities and drive social progress.`,
	},
	{
		title: 'Harvesting Sunshine: The Green Energy Initiative Project',
		image: 'https://www.biscaynetimes.com/downloads/2317/download/6.jpg',
		category: 'Solar Panel',
		description: `An environmentally conscious project focused on maximizing solar efficiency through modern photovoltaic technology.
    By combining innovation and smart design, Maylight helped reduce carbon emissions while improving energy reliability for participating organizations.`,
	},
	{
		title: 'Wind and Solar Synergy: Hybrid Power Solutions for Tomorrow',
		image:
			'https://cdn.britannica.com/75/114975-159-38AE7632/Wind-turbines-Tehachapi-Calif.jpg',
		category: 'Wind Turbine',
		description: `A forward-thinking hybrid installation that combines the strengths of both solar and wind energy.
    This project showcases Maylight’s expertise in designing integrated renewable systems that ensure consistent power supply, even in fluctuating weather conditions.`,
	},
	{
		title: 'Power Vault: Solar Battery Storage Solutions',
		image:
			'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgd_ThhlfShBjbodGPZOKZR2v_IvCIMc1FRu8t9VFNAmGZttNxdVlMX87FUZ4Rk7m6eGS3OLKep06Fbr_IGpdN4zVJR1pPUKH5z2fiC9J3ThLwWotIn5PPBW3H_ezvr3xlPpDD30lD8JyGSFyDzkOEbgXHUEhXgiY1_hR93mwHQCzhKXPkyOWJ-FRbBHg/s1000/mumti%20power.jpg',
		category: 'Solar Battery',
		description: `A groundbreaking battery storage project that enables seamless energy use around the clock.
    Maylight’s advanced storage systems capture excess solar power, reduce grid dependency, and provide reliable backup energy for critical infrastructure.`,
	},
	{
		title: 'Eclipse Reserve: Innovative Solar Battery Integration',
		image:
			'https://energymall.ng/wp-content/uploads/2020/12/sunfit-solar-scaled.jpg',
		category: 'Solar Battery',
		description: `A next-generation project that merges solar generation with intelligent energy storage.
    Through precision engineering and real-time energy management, Maylight continues to push the boundaries of sustainable technology and power resilience.`,
	},
];

export const faq = [
	{
		title: 'How do solar panels work?',
		description: `
       Solar panels convert sunlight into electricity
       using photovoltaic (PV) cells. When sunlight hits the cells,
       it creates an electric field that generates direct current (DC)
       electricity. This DC electricity is then converted to
       alternating current (AC) electricity using an inverter, making
       it usable for your home or business.
    `,
	},
	{
		title: 'What are the benefits of installing solar panels?',
		description: `
       Installing solar panels can reduce or eliminate your
       electricity bills, increase the value of your property,
       decrease your carbon footprint, and provide a renewable
       source of energy. Additionally, many regions offer incentives
       and rebates for solar installations.
    `,
	},
	{
		title: 'How much does a solar power system cost?',
		description: `
      The cost of a solar power system varies depending on the size of
       the system, the type of equipment used, and your location. On
       average, a residential solar panel system can range from $15,000
       to $25,000 before incentives and rebates.
    `,
	},
	{
		title: 'How long will it take for my solar panels to pay for themselves?',
		description: `
    The payback period for solar panels typically ranges from 6 to 10 years,
    depending on factors such as your energy usage, the cost of electricity
    in your area, and the available financial incentives.
    `,
	},
	{
		title: 'Will my solar panels work during a power outage?',
		description: `
      Most grid-tied solar power systems will not function during a power
      outage for safety reasons unless they are paired with a battery
       storage system or a solar generator that allows for off-grid
       operation.
    `,
	},
	{
		title: 'How much maintenance do solar panels require?',
		description: `
    Solar panels require minimal maintenance. Regular cleaning to remove dust,
    dirt, and debris, as well as periodic inspections to ensure everything is
    functioning properly, is generally sufficient. Most panels come with a
    25-year warranty.
    `,
	},
	{
		title: 'Do I need a battery storage system?',
		description: `
      While a battery storage system is not required, it can be beneficial
      for storing excess energy generated during the day for use at night or
      during power outages. Batteries can also help you become more energy
      independent.
    `,
	},
];

export const testimonial = [
	{
		image: profile2,
		name: 'Adewale Johnson, Operations Director, Sunsteel Manufacturing Ltd.',
		review: `Partnering with Maylight transformed our energy operations. The solar installation reduced our electricity costs by nearly half, and the team’s professionalism throughout the project was outstanding. Their attention to detail and commitment to deadlines exceeded our expectations.`,
		title: 'Industrial Partner — Lagos Manufacturing Plant',
	},
	{
		image: profile3,
		name: 'Mrs. Clara Nwosu, Homeowner, Abuja',
		review: `Maylight’s team made the entire process simple and transparent. From the initial consultation to installation, everything was handled with precision. I now enjoy reliable power at home without worrying about outages — it’s the best investment I’ve made.`,
		title: 'Residential Client — Homeowner Installation',
	},
	{
		image: profile4,
		name: 'Engr. David Kalu, Facility Manager, BrightPath International School',
		review: `Our partnership with Maylight has been a huge success. Their solar solution now powers our classrooms, labs, and administrative blocks seamlessly. Beyond installation, they’ve been exceptional in providing training and maintenance support.`,
		title: 'Educational Institution — School Solar Project',
	},
	{
		image: profile5,
		name: 'Chief Emmanuel Okoro, Community Leader, Ezinachi Village',
		review: `Maylight brought light to our community, quite literally. Their solar installation powers our health center and local market, improving lives and productivity. Their impact goes beyond energy — it’s about empowerment and sustainability.`,
		title: 'Community Project — Rural Electrification Initiative',
	},
];

export const contacts = [
	{
		name: 'Email',
		value: 'maylight@gmail.com',
		icon: <MdOutlineAlternateEmail />,
	},
	{
		name: 'Phone Number',
		value: '+2348061940887',
		icon: <IoCallOutline />,
	},
	{
		name: 'Address',
		value: 'Ajah, Lagos, Nigeria',
		icon: <IoLocationOutline />,
	},
];

export const footer = [
	{
		name: 'Explore',
		routes: [
			{ name: 'Home', id: 'header' },
			{ name: 'About Us', id: 'about' },
			{ name: 'Services', id: 'services' },
			{ name: 'Team', id: 'team' },
			{ name: 'Project', id: 'project' },
			{ name: 'Clients', id: 'testimonial' },
			{ name: 'FAQ', id: 'faq' },
			{ name: 'Contact', id: 'contact' },
		],
	},
	{
		name: 'Gallery',
		routes: [
			{ name: 'Privacy Policy' },
			{ name: 'Terms and Conditions' },
			{ name: 'Cookie Policy' },
		],
	},
];
