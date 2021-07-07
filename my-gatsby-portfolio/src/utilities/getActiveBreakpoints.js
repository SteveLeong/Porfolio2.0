import canUseDom from './canUseDOM';

import theme from 'utilities/theme';

/**
 * This function will return the current screen sizes.
 * Typically, use the hook 'useResponsive', however, if you need to access
 * the current breakpoint outside of React, you can call this function.
 *
 * This function returns an object with currentScreen (biggest size) and activeScreens which
 * resolves to an array of matching breakpoints.
 * @returns {Object}
 */
function getActiveBreakpoints() {
	let activeScreens;
	if (canUseDom) {
		activeScreens = Object.keys(theme.mediaQueries).filter(
			(query) => window.matchMedia(theme.mediaQueries[query]).matches
		);
	} else {
		activeScreens = Object.keys(theme.mediaQueries);
	}

	// current screen returns the exact screen size of window
	const currentScreen = activeScreens[0];

	return {
		currentScreen,
		activeScreens,
	};
}

export default getActiveBreakpoints;
