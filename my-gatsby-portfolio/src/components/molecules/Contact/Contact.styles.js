import styled from 'styled-components';

export const ContactContainer = styled.div``;

export const ContactList = styled.ul`
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

export const ListItem = styled.li`
	span {
		font-size: 14px;
	}
`;

export const ItemLink = styled.a`
	display: flex;
	align-items: center;
	margin: 0 20px 15px;
	padding: 5px 25px 5px 15px;

	border: 1px solid #dabe67;
	border-radius: 30px;
	color: #e6e6e6;

	text-decoration: none;

	svg {
		margin: 10px;
		font-size: 24px;
		color: #e6e6e6;
	}

	&:hover {
		color: #dabe67;
		svg {
			color: #dabe67;
		}
	}
`;
