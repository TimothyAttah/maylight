import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import contact3 from '../../assets/contact3.jpg';

export const HeroSection = styled.section`
	height: 100vh;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
`;

export const HeroBG = styled.div`
	position: absolute;
	inset: 0;
	background-image: url(${contact3});
	background-size: cover;
	background-position: center;
	filter: brightness(0.45);
`;

export const HeroContent = styled(motion.div)`
	color: white;
	max-width: 800px;
	padding: 20px;
	z-index: 2;
	background: var(--glow-1);

	h1 {
		font-size: 2rem;
		line-height: 2.2rem;
		font-weight: 700;
	}

	p {
		margin-top: 15px;
		font-size: 1.2rem;
		line-height: 1.4rem;
		opacity: 0.9;
	}

	div {
		margin-top: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 20px;
	}

	@media screen and (max-width: 560px) {
		max-width: 100%;
		padding: 20px;

		h1 {
			font-size: 1.8rem;
			line-height: 1.9rem;
		}

		p {
			margin-top: 15px;
			font-size: 1rem;
			line-height: 1.2rem;
			opacity: 0.9;
		}
	}

	@media screen and (max-width: 420px) {
		max-width: 100%;

		div {
			margin-top: 40px;
			flex-direction: column;

			button {
				width: 100%;
			}
		}
	}
`;
