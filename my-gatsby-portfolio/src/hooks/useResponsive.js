import { useEffect, useState } from 'react';

import createSharedHook from './internal/createSharedHook';

import canUseDOM from 'utilities/canUseDOM';
import getActiveBreakpoints from 'utilities/getActiveBreakpoints';
/**
 *
 * @returns object - {activeScreens: ARRAY, currentScreen: STRING, width: NUMBER}
 */
function useResponsive() {
	const initial = getActiveBreakpoints();
	if (canUseDOM) {
		initial.width = window.innerWidth;
	}
	const [screenSizes, setScreenSizes] = useState(initial);

	useEffect(() => {
		if (canUseDOM) {
			const handler = () => {
				const current = getActiveBreakpoints();
				current.width = window.innerWidth;
				setScreenSizes(current);
			};
			window.addEventListener('resize', handler);
			return () => window.removeEventListener('resize', handler);
		}
	}, [screenSizes.currentScreen]);

	return screenSizes;
}

const [hook, Provider] = createSharedHook(useResponsive);
export default hook;
export { Provider };
