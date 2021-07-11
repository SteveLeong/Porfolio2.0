import { createGlobalStyle } from 'styled-components';

import styleReset from 'utilities/theme/styleReset';

export const GlobalStyles = createGlobalStyle`
	${styleReset};
	
	html, body {
		font-family: Comfortaa;
		font-style: normal;
		box-sizing: border-box;
	}
	
	body {
		background: radial-gradient(
			74.83% 147.97% at 74.83% 50%,
			#373c39 0%,
			#292828 100%
		);
	
		color: #e6e6e6;
		overflow-x: hidden;
	}

	h1,
	h2,
	h3,
	h4 {
		margin: 0;
	}

	h1 {
		font-size: 32px;
	}

	p,
	a,
	button,
	li,
	i,
	span {
		margin: 10px 0;
		font-size: 18px;
		font-weight: lighter;
		line-height: 24px;
	}

	section {
		display: inline-block;
		margin: 40px 0;
		width: 100%;
		box-sizing: border-box;
	}
`;
