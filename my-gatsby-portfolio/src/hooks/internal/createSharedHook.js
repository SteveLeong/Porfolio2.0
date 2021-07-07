import React, { useContext } from 'react';

/**
 * Basically this is a wrapper around react context that takes in a react hook
 * and makes it globally accessible. This can be used as an alternative to redux and prop-spaghetti
 * @param {Hook} useOriginalHook
 * @returns { }
 */
function createSharedHook(useOriginalHook) {
	const Context = React.createContext();

	function Provider({ children }) {
		const value = useOriginalHook();
		return <Context.Provider value={value}>{children}</Context.Provider>;
	}

	function useGlobalHook() {
		const ctx = useContext(Context);

		if (typeof ctx === 'undefined') {
			throw new Error('Missing provider or no value supplied to provider.');
		}

		return ctx;
	}

	return [useGlobalHook, Provider];
}

export default createSharedHook;
