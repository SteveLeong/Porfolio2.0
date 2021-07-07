/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */
import React from 'react';
import { ThemeProvider } from 'styled-components';

import SharedContextProvider from 'hooks/internal/SharedContextProvider';
import Container from 'components/organisms/Container/Container';
import Theme from 'utilities/theme';

export const wrapRootElement = ({ element }) => (
	<SharedContextProvider>
		<ThemeProvider theme={Theme}>
			<Container>{element}</Container>
		</ThemeProvider>
	</SharedContextProvider>
);
