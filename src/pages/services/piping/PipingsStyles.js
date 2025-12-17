import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import pipeBg from '../../../assets/pipe-1.jpg';

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
	background-image: url(${pipeBg});
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

export const Container = styled(motion.div)`
	background: var(--color-ui-primary);
	padding: 50px;

	@media screen and (max-width: 520px) {
		padding: 20px;
	}
`;

export const MainContainer = styled(motion.div)`
	background: var(--color-ui-primary);
`;

export const InfoContainer = styled(motion.div)`
	display: flex;
	justify-content: space-around;
	gap: 10px;

	@media screen and (max-width: 920px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;

		gap: 50px;
	}
`;

export const InfoText = styled(motion.div)`
	max-width: 700px;
	width: 100%;

	h4 {
		font-size: 40px;
		line-height: 50px;
	}

	a {
		margin-top: 100px;
	}

	@media screen and (max-width: 920px) {
		text-align: center;
	}

	@media screen and (max-width: 520px) {
		h4 {
			font-size: 30px;
			line-height: 40px;
		}
	}
`;

export const InfoImg = styled(motion.div)`
	max-width: 500px;
	width: 100%;

	img {
		width: 100%;
	}
`;

export const ListContainer = styled(motion.div)`
	display: flex;
	justify-content: space-around;
	padding: 50px;
	margin-top: 100px;
	gap: 20px;

	@media screen and (max-width: 990px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 50px 20px;
	}
`;

export const ListTextContainer = styled(motion.div)`
	max-width: 600px;
	width: 100%;

	p {
		font-size: 30px;
		line-height: 40px;
	}

	@media screen and (max-width: 990px) {
		max-width: 700px;
		text-align: center;
	}

	@media screen and (max-width: 560px) {
		p {
			font-size: 20px;
			line-height: 30px;
		}
	}
`;
export const ListInfoContainer = styled(motion.div)`
	max-width: 700px;
	width: 100%;

	h2 {
		font-size: 30px;
	}

	@media screen and (max-width: 990px) {
		margin-top: 40px;

		h2 {
			text-align: center;
		}
	}
`;

export const ListItemContainer = styled(motion.div)``;

export const ElectricalServicesList = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(1, minmax(0, 1fr));
	gap: 20px;
	margin-top: 20px;

	div {
		padding: 20px;
		width: 100%;
		padding: 10px;
		background: var(--color-ui-secondary);
		border-radius: var(--radius-2);
		transition: var(--transition);

		h4 {
			padding: 20px 0;
		}

		p {
			display: flex;
			gap: 15px;
			width: 95%;

			svg {
				font-size: 20px;
				color: var(--color-primary);
				width: 5%;
			}
		}
	}
	/* color: var(--color-ui-primary); */

	@media (width >= 48rem /* 768px */) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
`;

export const CTA = styled.div`
	margin-top: 100px;
	background: var(--glow-1);
	padding: 80px 24px;
	text-align: center;
	color: var(--color-ui-primary);
	color: #f3f4f6;
	border-top-left-radius: 24px /* 1.5rem = 24px */;
	border-top-right-radius: 24px /* 1.5rem = 24px */;

	h2 {
		font-size: 35px;
		line-height: 45px;
	}

	p {
		font-size: 25px;
		line-height: 35px;
		padding-top: 10px;
	}

	button {
		margin-top: 30px;
	}
`;

export const CardContainer = styled(motion.div)`
	display: flex;
	justify-content: space-between;
	/* flex-wrap: wrap; */
	margin-top: 100px;
	gap: 20px;

	@media screen and (max-width: 920px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 50px 20px;
	}
`;

export const Card = styled(motion.div)`
	max-width: 450px;
	width: 100%;

	img {
		width: 100%;
	}

	${(props) =>
		props.primary &&
		css`
			background: var(--color-ui-secondary);
			border-radius: var(--radius-2);
			transition: var(--transition);
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			text-align: center;
			padding: 50px;

			p {
				padding: 10px 0;
			}

			a {
				margin-top: 50px;
			}
		`}
`;
