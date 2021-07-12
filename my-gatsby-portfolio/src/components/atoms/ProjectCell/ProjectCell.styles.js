import styled from 'styled-components';

export const StyledCell = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	text-transform: uppercase;
	font-size: 10px;

	${({ isReleased }) => !isReleased && `opacity: 0.3;`}

	.default {
		position: absolute;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: flex-end;
		justify-content: center;
		padding: 20px;
		box-sizing: border-box;
	}

	.default h1 {
		font-size: 24px;
		line-height: 24px;
		font-weight: 600;
		color: #e6e6e6;
	}

	img {
		position: absolute;
		z-index: -1;
		object-fit: cover;
		border: 2px solid #caa83e;
	}

	.details {
		position: absolute;
		bottom: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		background: #292828;
		color: white;
		padding: 40px;
		font-weight: 100;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		box-sizing: border-box;
	}

	.details h1 {
		display: flex;
		color: #e6e6e6;
		font-size: 36px;
		line-height: 36px;
		font-weight: 600;
		margin: 0;
		padding: 0;
	}

	.details a {
		margin: 0 10px;
		font-size: 36px;
		color: #e6e6e6;
	}

	.details p {
		color: #e6e6e6;
		font-size: 18px;
		line-height: 18px;
		margin: 0;
		padding-top: 15px;
		text-transform: none;
	}

	.details span {
		color: #b8b8b8;
		font-size: 14px;
		line-height: 14px;
		font-weight: 600;
		text-transform: none;
	}

	.details .circle {
		top: calc(40% - 200px);
		left: calc(50% - 200px);
		width: 400px;
		height: 400px;
	}

	.circle {
		position: absolute;

		border-radius: 50%;
		box-shadow: 0px 20px 60px -10px rgba(0, 0, 0, 0.9);

		${({ height }) => `
		top: calc(45% - ${height / 2}px);
		left: calc(50% - ${height / 2}px);
		width: ${height}px;
		height: ${height}px;
		`}
	}

	.close {
		position: absolute;
		top: 40px;
		right: 40px;
		font-size: 26px;
		color: #777777;
		z-index: 1006;
		cursor: pointer;
	}

	.in-progress {
		position: absolute;
		top: 35%;
		width: 100%;
		text-transform: uppercase;
		text-align: center;
		font-size: 36px;
		color: #e6e6e6;
	}
`;
