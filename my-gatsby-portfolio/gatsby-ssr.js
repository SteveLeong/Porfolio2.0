/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import loadable from '@loadable/component';

import SharedContextProvider from 'hooks/internal/SharedContextProvider';
import Theme from 'utilities/theme';

const Container = loadable(() => import('components/organisms/Container/Container'));

export const wrapRootElement = ({ element }) => (
	<SharedContextProvider>
		<ThemeProvider theme={Theme}>
			<Container>{element}</Container>
		</ThemeProvider>
	</SharedContextProvider>
);
