// FULL APPLE-STYLE MULTI-SECTION SCROLL CHOREOGRAPHY
// React + GSAP ScrollTrigger + styled-components
// Includes: Sticky hero, product zoom, layered parallax, chapter text, fade/scale transitions

import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {solar__skyscraper, batteries, company__photo, turbine, panel } from '../assets/'

gsap.registerPlugin(ScrollTrigger);

/***********************
 * STYLED COMPONENTS
 **********************/
const PageWrapper = styled.div`
	width: 100%;
	background: #000;
	overflow: hidden;
	color: #fff;
`;

/* 1 — STICKY HERO */
const Hero = styled.section`
	height: 200vh;
	position: relative;
`;
const HeroSticky = styled.div`
	position: sticky;
	top: 0;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
`;
const HeroImage = styled.img`
	width: 600px;
	max-width: 90%;
`;

/* 2 — PRODUCT ZOOM SECTION */
const ZoomSection = styled.section`
	height: 200vh;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const ZoomImage = styled.img`
	width: 500px;
	max-width: 90%;
	position: sticky;
	top: 20vh;
`;

/* 3 — PARALLAX LAYER STACK */
const ParallaxSection = styled.section`
	height: 200vh;
	position: relative;
	overflow: hidden;
`;
const ParallaxLayer = styled.img`
	position: absolute;
	width: 100%;
	left: 0;
	pointer-events: none;
`;

/* 4 — CHAPTER TEXT PANELS */
const Chapters = styled.section`
	padding: 10vh 0;
`;
const Chapter = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	opacity: 0;
	transform: translateY(80px);
	transition: 0.3s ease-out;
	padding: 0 2rem;
	color: #fff;

	h2 {
		font-size: 3rem;
		margin-bottom: 1rem;
		color: #fff;
	}
	p {
		max-width: 700px;
		text-align: center;
		font-size: 1.3rem;
		opacity: 0.7;
		color: #fff;
	}
`;

/* 5 — FINAL FADE SECTION */
const FinalSection = styled.section`
	height: 150vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

/***********************
 * MAIN COMPONENT
 **********************/
export default function AppleScrollChoreo() {
	const heroImgRef = useRef(null);
	const zoomImgRef = useRef(null);
	const parallaxRefs = useRef([]);
	const chapterRefs = useRef([]);

	useEffect(() => {
		/*****************************
		 * 1 — HERO FADE + SCALE
		 *****************************/
		gsap.fromTo(
			heroImgRef.current,
			{ scale: 1, opacity: 1 },
			{
				scale: 1.4,
				opacity: 0,
				scrollTrigger: {
					trigger: heroImgRef.current,
					start: 'top top',
					end: 'bottom top',
					scrub: true,
				},
			},
		);

		/*****************************
		 * 2 — PRODUCT ZOOM REVEAL
		 *****************************/
		gsap.fromTo(
			zoomImgRef.current,
			{ scale: 1.2, opacity: 0 },
			{
				scale: 1,
				opacity: 1,
				scrollTrigger: {
					trigger: zoomImgRef.current,
					start: 'top 80%',
					end: 'top 20%',
					scrub: true,
				},
			},
		);

		/*****************************
		 * 3 — MULTI-LAYER PARALLAX
		 *****************************/
		const speeds = [-80, -160, -260, -400];

		parallaxRefs.current.forEach((layer, i) => {
			gsap.to(layer, {
				y: speeds[i],
				ease: 'none',
				scrollTrigger: {
					trigger: layer,
					start: 'top bottom',
					end: 'bottom top',
					scrub: true,
				},
			});
		});

		/*****************************
		 * 4 — CHAPTER TEXT REVEAL
		 *****************************/
		chapterRefs.current.forEach((chapter) => {
			gsap.to(chapter, {
				opacity: 1,
				y: 0,
				duration: 1,
				scrollTrigger: {
					trigger: chapter,
					start: 'top 75%',
					end: 'top 40%',
					scrub: true,
				},
			});
		});
	}, []);

	return (
		<PageWrapper>
			{/******** HERO ********/}
			<Hero>
				<HeroSticky>
					<HeroImage
						ref={heroImgRef}
						src={solar__skyscraper}
					/>
				</HeroSticky>
			</Hero>

			{/******** PRODUCT ZOOM ********/}
			<ZoomSection>
				<ZoomImage
					ref={zoomImgRef}
					src={batteries}
				/>
			</ZoomSection>

			{/******** PARALLAX LAYERS ********/}
			<ParallaxSection>
				{[
					panel,
					batteries,
					turbine,
					solar__skyscraper,
				].map((src, i) => (
					<ParallaxLayer
						key={i}
						ref={(el) => (parallaxRefs.current[i] = el)}
						src={src}
						style={{ zIndex: i + 1, opacity: 0.3 + i * 0.2 }}
					/>
				))}
			</ParallaxSection>

			{/******** CHAPTER SCROLL TEXT ********/}
			<Chapters>
				{[
					{
						title: 'Built for Performance',
						text: 'Every Maylight system is engineered for maximum efficiency and true long‑term reliability.',
					},
					{
						title: 'Smarter Energy Delivery',
						text: 'Our hybrid designs adapt to your environment and scale effortlessly as needs grow.',
					},
					{
						title: 'Precision Engineering',
						text: 'Every component, every weld, and every connection is designed with intention.',
					},
				].map((c, i) => (
					<Chapter key={i} ref={(el) => (chapterRefs.current[i] = el)}>
						<h2>{c.title}</h2>
						<p>{c.text}</p>
					</Chapter>
				))}
			</Chapters>

			{/******** FINAL FADE SECTION ********/}
			<FinalSection>
				<h1 style={{ fontSize: '4rem', opacity: 0.8 }}>
					The Future of Energy. Delivered.
				</h1>
			</FinalSection>
		</PageWrapper>
	);
}
