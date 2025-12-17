import styled from 'styled-components'
import { motion } from 'framer-motion';
import serviceBg from '../../assets/serviceBg.jpg'



export const PageContainer = styled.div`
	font-family: 'Inter', sans-serif;
	color: #0d1b2a;
	overflow-x: hidden;
`;

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
	background-image: url(${serviceBg});
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
`;

export const ServicesWrapper = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
	gap: 30px;
	padding: 80px 5%;

	@media screen and (max-width: 400px) {
		grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
	}
`;

export const Card = styled.div`
	background: white;
	padding: 35px;
	border-radius: 18px;
	box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
	transition: 0.3s ease;

	h3 {
		font-size: 1.6rem;
		line-height: 1.8rem;
		margin-bottom: 10px;
	}

	p {
		margin-bottom: 15px;
		color: #334;
		line-height: 1.5;
	}

	ul {
		/* padding-left: 18px; */
	}

	li {
		margin-bottom: 8px;
		opacity: 0.85;
		display: flex;
		gap: 10px;

    svg {
      font-size: 15px;
    }
	}

	&:hover {
		transform: translateY(-8px);
		box-shadow: 0 14px 35px rgba(0, 0, 0, 0.09);
	}

	@media screen and (max-width: 400px) {
		h3, p {
      text-align: center;
    }

    li {
      font-size: 16px;
    }
	}
`;

export const CTASection = styled.section`
	text-align: center;
	padding: 60px 20px;
  color: #fff;
`;

export const CTAButton = styled.button`
	margin-top: 20px;
	padding: 16px 34px;
	background: var(--color-primary);
	color: white;
	border: none;
	border-radius: 10px;
	font-size: 1.1rem;
	cursor: pointer;
	transition: 0.3s ease;

	&:hover {
		background: var(--color-primary-accent);
	}
`;
