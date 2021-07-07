const baseFontSize = 16;

const breakpoints = {
	xs: 0,
	sm: 576,
	md: 769,
	lg: 968,
	xl: 1200,
};

const theme = {
	baseFontSize,
	colors: {},
	fonts: {},
	breakpoints,
	mediaQueries: {
		xlarge: `(min-width: ${breakpoints.xl}px)`,
		large: `(min-width: ${breakpoints.lg}px)`,
		medium: `(min-width: ${breakpoints.md}px)`,
		small: `(min-width: ${breakpoints.sm}px)`,
		xsmall: `(min-width: ${breakpoints.xs}px)`,
	},
};

export default theme;
