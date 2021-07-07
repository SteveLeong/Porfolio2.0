import React from 'react';

import { Provider as IsResponsiveProvider } from '../useResponsive';

// Order matters for some of these!
const Providers = [IsResponsiveProvider];

function SharedProviders({ children }) {
	return React.cloneElement(
		Providers.reduce((acc, provider) => React.createElement(provider, {}, acc), children)
	);
}

export default SharedProviders;
