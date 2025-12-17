import React from 'react';
import HomeHeader from '../../components/HomeHeader';
import Achievement from '../../components/Achievement';
import About from '../../components/About';
import Services from '../../components/Services';
import Teams from '../../components/Teams';
import Projects from '../../components/Projects';

import Testimonial from '../../components/Testimonial';
import HeroSlider from '../../components/slider/Slider';

const Home = () => {
	return (
		<div>
			{/* <HomeHeader /> */ }
			<HeroSlider />
			<Achievement />
			<About />
			<Services />
			<Teams
				title='Our'
				subtitle='Teams'
				desc="Meet our diverse team of creative minds, and strategists - the driving force behind every project's success"
			/>
			<Projects />
			<Testimonial />
		</div>
	);
};

export default Home;
