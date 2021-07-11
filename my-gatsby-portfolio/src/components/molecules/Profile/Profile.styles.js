import styled from 'styled-components';

export const Box1 = styled.span`
	height: 330px;
	background: linear-gradient(90deg, #2a2a2a, #282828);
	box-shadow: 0px 0px 5px 5px #2a2a2a;
	opacity: 1;
	transform: skewY(-8deg);
	transform-origin: top left;
	z-index: -10;
	transition: opacity 0.7s ease-in-out;
`;

export const Box2 = styled.span`
	height: 230px;
	background: linear-gradient(to left, #2a2a2a, #232323);
	box-shadow: 0px 0px 5px 5px #2a2a2a;
	opacity: 1;
	transform: skewY(16deg);
	transform-origin: top right;
	z-index: -20;
	transition: all 0.3s ease-in-out;
`;

export const BackgroundAesthetics = styled.div`
	position: absolute;
	top: 0;

	span {
		position: absolute;
		top: -50px;
		width: 100vw;
		margin: 0;
	}
`;

export const ProfileImageContainer = styled.div`
	position: relative;
	margin: 20px;
	width: 125px;
	height: 125px;

	background: #292828;
	border-radius: 50%;
	border: 2px solid #caa83e;
	box-shadow: 0px 0px 25px 5px #000000, inset 0px 0px 21px 5px rgba(0, 0, 0, 0.35);
	transition: all 0.4s ease-in-out;
`;

export const ProfileImgAesthetics = styled.div`
	position: absolute;
	top: 3px;
	left: 2px;
	width: 120px;
	height: 120px;
	background: #373c39;
	border-radius: 5px;
	transform: rotate(-45deg);
	z-index: -1;
	transition: all 0.4s ease-in-out;
`;

export const ProfileImgAesthetics2 = styled.div`
	position: absolute;
	top: -7px;
	left: -8px;
	width: 140px;
	height: 140px;
	background: #292828;
	border-radius: 5px;
	transform: rotate(-45deg);
	z-index: -2;
	transition: all 0.4s ease-in-out;
`;

export const ProfileImg = styled.img`
	width: 125px;
	height: 125px;
	border-radius: 50%;
	transition: all 0.4s ease-in-out;
`;

export const ProfileDetails = styled.div`
	margin: 0 20px;
`;

export const ProfileContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: center;
	min-height: 200px;
	z-index: 1005;

	transition: all 0.4s ease-in-out;
	pointer-events: none;
	h1,
	p {
		transition: all 0.4s ease-in-out;
	}

	&.sticky {
		position: fixed;
		position: sticky;
		top: 0;
		align-items: flex-start;

		${ProfileDetails} {
			margin: 20px 0;
		}

		${ProfileImageContainer},
		${ProfileImg} {
			width: 50px;
			height: 50px;
		}

		${ProfileImgAesthetics} {
			width: 45px;
			height: 45px;
			transform: rotate(-90deg);
		}

		${ProfileImgAesthetics2} {
			width: 60px;
			height: 60px;
			transform: rotate(-90deg);
		}

		${Box1} {
			opacity: 0;
		}

		${Box2} {
			top: 0;
			height: 100px;
			box-shadow: 0px 0px 1px 1px #2a2a2a;
			opacity: 0.9;
			transform: none;
		}

		h1 {
			font-size: 20px;
		}

		p {
			font-size: 12px;
		}
	}
`;
