import styled from 'styled-components';

export const HeaderContainer = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 20px;
	position: fixed;
	width: 100vw;
	top: 0;
	z-index: 300;
	padding: 20px;
`;

export const HeaderLogo = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;

	img {
		width: 100px;
		border-radius: 5px;
	}
`;
