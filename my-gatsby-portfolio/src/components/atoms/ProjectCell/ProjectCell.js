import React, { useState, useEffect } from 'react';
import { Slug, Fade } from 'mauerwerk';
import { AiOutlineClose } from 'react-icons/ai';

import { StyledCell } from './ProjectCell.styles';
// https://github.com/drcmda/mauerwerk
const ProjectCell = ({
	toggle,
	name,
	height,
	description,
	dark,
	light,
	coverImg,
	status,
	maximized,
}) => {
	const [image, setImage] = useState(null);

	useEffect(() => {
		coverImg && import(`assets/${coverImg}`).then((image) => setImage(image.default));
	}, [coverImg, setImage]);

	const isReleased = status !== 'In Progress';
	const cursorType = !maximized ? (!isReleased ? 'not-allowed' : 'pointer') : 'auto';
	console.log('coverImg :>> ', coverImg);
	return (
		<StyledCell
			className="cell"
			style={{ backgroundImage: light, cursor: cursorType }}
			onClick={!maximized && isReleased ? toggle : undefined}
			height={height * 0.6}
			isReleased={isReleased}
		>
			<Fade show={maximized} delay={maximized ? 400 : 0}>
				<div className="details">
					<Slug delay={600}>
						<div className="circle" style={{ background: light }} />
						<div
							className="close"
							role="button"
							tabIndex={0}
							onClick={toggle}
							onKeyDown={toggle}
						>
							<AiOutlineClose />
						</div>
						<h1>{name}</h1>
						<p>{description}</p>
					</Slug>
				</div>
			</Fade>
			<Fade
				show={!maximized}
				from={{ opacity: 0, transform: 'translate3d(0,10px,0)' }}
				enter={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
				leave={{ opacity: 0, transform: 'translate3d(0,-50px,0)' }}
				delay={maximized ? 0 : 400}
			>
				<div className="default">
					{image && <img className="circle" src={image} alt={coverImg}></img>}
					<h1>{name}</h1>
				</div>
			</Fade>
		</StyledCell>
	);
};

export default ProjectCell;
