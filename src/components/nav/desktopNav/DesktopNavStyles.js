import styled from 'styled-components';
import { motion } from 'framer-motion';

export const DesktopNav = styled.nav`
	width: 100%;
	height: 100px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	/* border: 2px solid yellow; */

	@media screen and (max-width: 1070px) {
		flex-direction: column;
    display: none;
	}
`;

export const DesktopNavListWrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	height: 100%;
	gap: 20px;
	transition: all 0.5s ease-in-out;

	.tabBg {

		color: #fff;


		a {
			/* height: 50px; */
			color: #fff;
		}

		svg {
			transform: rotate(180deg);
		}
	}

	@media screen and (max-width: 1070px) {
		display: none;
    /* flex-direction: column; */
	}
`;

export const DesktopNavList = styled.ul`
	display: flex;
	align-items: center;
	gap: 50px;

	li a {
		color: #fff;
		position: relative;
		padding: 12px 40px;
		transition: all 0.8s ease;
		border-radius: 10px;
		background-color: var(--color-primary-accent);
		font-weight: bold !important;

		&::before {
			content: '';
			position: absolute;
			right: 0;
			top: 0;
			bottom: 0;
			background-color: var(--color-primary-accent);
			width: 0;
			transition: all 0.8s ease;
			z-index: -1;
			border-radius: 10px;
		}

		&:hover::before {
			width: 100%;
			left: 0;
			right: auto;
		}

		&:hover {
			color: var(--color-primary-accent);
			font-weight: bold !important;

			background-color: transparent;
		}
	}

	@media screen and (max-width: 1070px) {
		display: none;
	}
`;
export const DesktopNavTab = styled.div``;
export const DesktopNavTabButton = styled.button`
	display: flex;
	align-items: center;
	gap: 5px;
	border-radius: 10px;
	padding: 10px;
	background: transparent;
	color: var(--color-white);
	transition: 0.5s ease all;
	/* border: 1px solid var(--base-color-gold-neg); */
	position: relative;
	background-color: var(--color-primary);

	a {
		color: var(--color-light-gray);
		font-weight: 200px;
		font-weight: bold !important;
	}

	&::before {
		content: '';
		position: absolute;
		right: 0;
		top: 0;
		bottom: 0;
		background-color: var(--color-primary);
		width: 0;
		transition: all 0.8s ease;
		z-index: -1;
		border-radius: 10px;
	}

	&:hover::before {
		width: 100%;
		left: 0;
		right: auto;
	}

	&:hover {
		background-color: transparent;
		a {
			color: var(--color-primary-accent);
			font-weight: bold !important;
		}
	}
`;

export const DesktopNavTabContent = styled(motion.div)`
	position: absolute;
	left: 0;
	top: calc(100% + -10px);
	width: 35rem;
	border-radius: 8px;
	border: 1px solid var(--color-primary-accent);
	background-color: var(--color-primary);

	padding: 16px;
`;

export const BridgeBox = styled.div`
	position: absolute;
	top: -24px;
	left: 0;
	right: 0;
	height: 24px;
`;
export const Submenu = styled.div`
	overflow: hidden;
`;

export const SubmenuList = styled(motion.div)`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 20px;
`;

export const SubmenuListItem = styled(motion.div)`
	color: var(--color-light-gray);
	width: 100%;
	padding: 10px;
	border-radius: 5px;

	a {
		color: var(--color-light-gray);
		width: 100%;
		display: block;
    text-transform: capitalize;
	}
`;
export const Nub = styled(motion.span)`
	position: absolute;
	left: 50%;
	top: -5px;
	transform: translateX(-50%);
	transform: translateY(50%);
	height: 16px;
	width: 16px;
	transform: rotate(45deg);
	border-top-left-radius: 4px;
	border-width: 1px;
	background-color: var(--color-primary);
`;
// export const DesktopNav = styled.div``;
export const MenuBtn = styled.button`
	background-color: transparent;
	color: #fff;
	z-index: 9999;
	background-color: var(--main-color-p);
	background-color: transparent;
	margin-top: -10px;

	svg {
		color: #fff;
	}
`;
