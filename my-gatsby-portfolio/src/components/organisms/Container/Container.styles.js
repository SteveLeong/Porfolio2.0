import styled from 'styled-components';

export const BackgroundAesthetics = styled.div`
	position: absolute;

	span {
		position: absolute;
		top: -50px;
		width: 100vw;
	}
`;

export const Box1 = styled.span`
	height: 330px;
	background: linear-gradient(90deg, #292828, #232323);
	border-bottom: 1px solid #caa83e30;

	transform: skewY(-8deg);
	transform-origin: top left;
	z-index: -10;
`;

export const Box2 = styled.span`
	height: 230px;
	background: linear-gradient(to left, #292929, #232323);
	transform: skewY(16deg);
	transform-origin: top right;
	z-index: -20;
`;

export const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 40px 9.6%;
`;
