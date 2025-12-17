import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
export const About = styled.div``;

export const AboutHero = styled.div`
	width: 100%;
	height: 100vh;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;

	img,
	video {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@media screen and (max-width: 560px) {
		height: 80vh;
	}
`;

export const BlendModeSubTitle = styled.h4`
	font-size: 2rem;
	width: 100%;
	background-color: #fff;
	color: var(--base-color-gold);
	position: absolute;
	bottom: 0px;
	text-align: center !important;
	/* padding: 20px 0; */
	padding-top: 30px;

	/* @media screen and (max-width: 900px) {
		font-size: 1.5rem !important;
		bottom: 120px;
	}

	@media screen and (max-width: 735px) {
		font-size: 1.5rem !important;
		bottom: 236px;
	}

	@media screen and (max-width: 590px) {
		font-size: 1.5rem !important;
		letter-spacing: 0;
		bottom: 80px;
	}

	@media screen and (max-width: 490px) {
		font-size: 1.5rem !important;
		letter-spacing: 0;
		bottom: 162px;
	} */

	/* @media screen and (max-width: 390px) {
		font-size: 1.2rem !important;
		bottom: 115px;
		padding: 30px 0;
	}

	@media screen and (max-width: 367px) {
		font-size: 1.2rem !important;
		bottom: 173px;
		padding: 30px 0;
	} */
`;

export const BlendModeTitle = styled.h1`
	font-size: 8rem;
	width: 100%;
	background-color: #fff;
	color: #000;
	position: absolute;
	bottom: 0px;
	text-align: center !important;
	/* padding: 20px 0; */
	mix-blend-mode: screen;
	letter-spacing: -5px;
	padding: 100px 0;

	@media screen and (max-width: 900px) {
		font-size: 6rem !important;
		letter-spacing: 0;
	}

	@media screen and (max-width: 590px) {
		font-size: 4rem !important;
		letter-spacing: 0;
	}

	@media screen and (max-width: 390px) {
		font-size: 3rem !important;
		letter-spacing: 0;
		padding: 30px 0;
	}
`;

export const CultureInfo = styled.div`
	background-color: #fff;
	padding: 50px 0;

	h4 {
		text-align: center !important;
		font-size: 35px !important;
		padding-bottom: 10px;
		color: var(--color-primary);
		line-height: 40px;
	}

	p {
		max-width: 1000px;
		margin: auto;
		font-size: 22px !important;
		line-height: 30px;
		color: #000;
		text-align: center !important;
		margin-top: 10px;

		b {
			color: var(--color-primary);
		}
	}

	@media screen and (max-width: 450px) {
		padding: 20px;

		p {
			font-size: 17px !important;
			line-height: 26px;
		}
	}
`;

export const Container = styled(motion.div)`
	background: var(--color-ui-primary);
`;

export const MissionVissionBoxWrapper = styled(motion.div)`
	display: flex;
	justify-content: space-between;
	/* flex-wrap: wrap; */

	@media screen and (max-width: 765px) {
		flex-direction: column;
		gap: 20px;
	}
`;

export const MissionVissionBox = styled(motion.div)`
	max-width: 500px;
	width: 100%;
	margin: 0 auto;
	/* box-shadow:  */
	background: var(--glow-1);
	padding: 20px;

	p {
		color: #fff;
		font-size: 20px;
		line-height: 30px;
	}

	@media screen and (max-width: 765px) {
		text-align: center;
		max-width: 600px;
	}
`;

export const WhatStandForContainer = styled(motion.section)``;
export const WhatStandFor = styled(motion.div)`
	padding-top: 100px;
`;

export const WhatStandForSubtitle = styled(motion.p)`
	text-align: center;
	font-size: 20px;
	line-height: 30px;
`;

export const WhatStandForList = styled(motion.div)`
	padding-top: 30px;
`;

export const TimelineContainer = styled(motion.div)`
	padding: 30px;
	margin-top: 50px;
	background: var(--glow-1);

	h3 {
		margin: 40px 0;
	}
`;

export const TimelineBox = styled(motion.div)`
	box-shadow: 5px 10px 30px 0px rgba(0, 0, 0, 0.8);
	padding: 20px;
`;
