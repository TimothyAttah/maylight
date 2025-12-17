import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';


export const MobileSidebarContainer = styled(motion.div)`
	width: 100%;
	padding: 50px;
	padding-top: 100px;

`;
export const MobileSidebarList = styled(motion.ul)`
	display: flex;
	flex-direction: column;
	gap: 15px;
  margin-top: 20px;
`;

export const MobileListItem = styled(motion.li)`
	width: 100%;

	a {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 15px 30px;
		transition: all ease-in 0.3s;
		text-transform: capitalize;

		${(props) =>
			props.clicked &&
			css`
				svg {
					transform: rotate(180deg);
					transition: all 0.3s ease;
				}
			`}

		&:hover {
			background: var(--color-primary);
		}
	}
`;
export const MobileSidebarListItem = styled(motion.li)`
	height: 100%;
	position: relative;
	a {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px 5px;
		border-radius: 10px;
		position: relative;
		color: #fff;
		transition: all 1s;
		text-transform: capitalize;
		transition: all 0.3s ease;
		position: relative;

		${(props) =>
			props.clicked &&
			css`
				svg {
					transform: rotate(180deg);
					transition: all 0.3s ease;
				}
			`}

		&:hover {
			background-color: transparent;
			background-color: var(--base-color-gold-plus);
			background-color: rgb(129 59 1);

			cursor: pointer;
			/* border-radius: 10px; */
			svg {
				transform: rotate(180deg);
			}
		}
	}
`;

export const MobileSubMenuListWrapper = styled(motion.ul)`
	padding: 0 20px;
`;
export const MobileSubMenuList = styled(motion.li)`
	/* background-color: var(--base-color-gold-plus); */
	/* background-color: #444; */
	/* padding: 10px; */
	background-color: var(--main-color-g);
	background-color: rgb(129 59 1);

	a {
		display: flex;
		/* align-items: center; */
		justify-content: flex-start;
		padding: 15px 5px;
		gap: 10px;
		font-size: 16px;
		transition: all 0.3s;

		/* span:first-child {
			display: block;
			width: 25px;
			height: 25px;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: #fff;
			color: #000;
			border-radius: 10px;
			transition: all 0.3s;

			svg {
				width: 15px;
				height: 15px;
			}
		} */

		/* svg {
			transform: rotate(0deg) !important;
			font-size: 20px;
		} */

		&:hover {
			background-color: #444;
			background-color: rgb(129 59 1);
			padding-left: 20px;

			span:first-child {
				background-color: var(--brown);
				color: #fff;
			}
		}
	}
`;
// export const MobileSidebar = styled(motion.div)``;
// export const MobileSidebar = styled(motion.div)``;
// export const MobileSidebar = styled(motion.div)``;
