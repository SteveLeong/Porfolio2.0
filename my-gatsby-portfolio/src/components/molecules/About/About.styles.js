import styled from 'styled-components';

export const AboutContainer = styled.section`
	align-self: center;
	max-width: 1200px;
`;

export const AboutList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	list-style: none;
`;

export const AboutListItem = styled.li`
	display: flex;
	flex: 0 1 40%;
	align-items: center;
	margin: 20px;
`;

export const IconContainer = styled.div`
	margin: 0 10px;
	height: 44px;
	background: #292828;
	border-radius: 50%;
	border: 2px solid #caa83e;

	svg {
		margin: 10px;
		font-size: 24px;
		color: #dabe67;
	}
`;

export const AboutListItemDesc = styled.p`
	font-size: 14px;
	line-height: 18px;
	font-weight: 600;
`;
