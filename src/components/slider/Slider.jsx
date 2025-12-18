import Slider from 'react-slick';
import { slides } from './sliderData';
import React, { useState, useEffect, useCallback } from 'react';
import { DotButton, PrevButton, NextButton } from './EmblaCarouselButtons';
import useEmblaCarousel from 'embla-carousel-react';
import './embla.css';
import Autoplay from 'embla-carousel-autoplay';
import * as Styles from './SliderStyles';
import { Link } from 'react-router-dom';
import { FadeInSlider } from '../fadeIn/FadeInSlider';

import { AnimatePresence, motion } from 'framer-motion';
import LazyImage from '../LazyImage';

const HeroSlider = () => {
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		pauseOnHover: false,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	const [viewportRef, embla] = useEmblaCarousel({ loop: true }, [
		Autoplay({ delay: 7000 }),
	]);
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [scrollSnaps, setScrollSnaps] = useState([]);
	const scrollTo = useCallback(
		(index) => embla && embla.scrollTo(index),
		[embla],
	);

	const onSelect = useCallback(() => {
		if (!embla) return;
		setSelectedIndex(embla.selectedScrollSnap());
	}, [embla, setSelectedIndex]);

	useEffect(() => {
		if (!embla) return;
		onSelect();
		setScrollSnaps(embla.scrollSnapList());
		embla.on('select', onSelect);
	}, [embla, setScrollSnaps, onSelect]);

	return (
		<div className='embla' ref={viewportRef}>
			<div className='embla__container'>
				{slides.map((slide, i) => (
					<Styles.Slide className='embla__slide' key={i}>
						{slide.srcType === 'image' ? (
							// <motion.img src={ slide.vic } alt='' />
							<LazyImage src={slide.vic} />
						) : (
							<motion.video src={slide.vic} autoPlay muted loop playsInline />
						)}
						<Styles.SlideContent>
							<FadeInSlider
								delay={1}
								direction={
									slide.slidePosition === 'slide1'
										? 'right'
										: slide.slidePosition === 'slide3'
										? 'up'
										: 'left'
								}
								fullWidth='true'
							>
								<Styles.SlideContentWrapper>
									<h2>{slide.title}</h2>
									<p>{slide.desc}</p>
									<Link to='/about'>Who we are</Link>
								</Styles.SlideContentWrapper>
							</FadeInSlider>
						</Styles.SlideContent>
					</Styles.Slide>
				))}
			</div>
			<div className='embla__dots'>
				{scrollSnaps.map((_, index) => (
					<DotButton
						key={index}
						selected={index === selectedIndex}
						onClick={() => scrollTo(index)}
					/>
				))}
			</div>
		</div>
	);
};

export default HeroSlider;
