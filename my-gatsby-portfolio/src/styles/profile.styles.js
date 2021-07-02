import styled from 'styled-components';

export const ProfileContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: center;
	min-height: 200px;
`;

export const ProfileImageContainer = styled.div`
	position: relative;
	margin: 20px;
	width: 125px;
	height: 125px;

	background: #292828;
	border-radius: 50%;
	border: 2px solid #caa83e;
	box-shadow: 0px 0px 25px 5px #000000,
		inset 0px 0px 21px 5px rgba(0, 0, 0, 0.35);
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
`;
export const ProfileImg = styled.img`
	width: 125px;
	height: 125px;
	border-radius: 50%;
`;

export const ProfileDetails = styled.div`
	margin: 0 20px;
`;
