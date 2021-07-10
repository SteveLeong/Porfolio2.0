import styled from 'styled-components';

export const StyledCell = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	color: #777777;
	text-transform: uppercase;
	font-size: 10px;

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

	.details {
		position: absolute;
		bottom: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		background: #ffffffa0;
		color: white;
		padding: 40px;
		font-weight: 100;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		box-sizing: border-box;
	}

	.details h1 {
		color: #ca6a9a;
		font-size: 36px;
		line-height: 36px;
		font-weight: 600;
		margin: 0;
		padding: 0;
		max-width: 250px;
	}

	.details p {
		color: thistle;
		font-size: 26px;
		line-height: 26px;
		margin: 0;
		padding-top: 15px;
	}

	.circle {
		position: absolute;
		top: calc(50% - 140px);
		left: calc(50% - 140px);
		width: 280px;
		height: 280px;
		border-radius: 50%;
		box-shadow: 0px 20px 60px -10px rgba(0, 0, 0, 0.2);
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
`;
