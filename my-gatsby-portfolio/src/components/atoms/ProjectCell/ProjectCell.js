import React from 'react';
import { Slug, Fade } from 'mauerwerk';
import { AiOutlineClose } from 'react-icons/ai';

import { StyledCell } from './ProjectCell.styles';

const ProjectCell = ({ toggle, name, height, description, css, maximized }) => (
	<StyledCell
		className="cell"
		style={{ backgroundImage: css, cursor: !maximized ? 'pointer' : 'auto' }}
		onClick={!maximized ? toggle : undefined}
	>
		<Fade show={maximized} delay={maximized ? 400 : 0}>
			<div className="details">
				<Slug delay={600}>
					<div className="circle" style={{ background: css }} />
					{/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
					<div className="close" role="button" tabIndex={0} onClick={toggle}>
						<AiOutlineClose />
					</div>
					<h1>{name}</h1>
					<p>{description}</p>
				</Slug>
			</div>
		</Fade>
		<Fade
			show={!maximized}
			from={{ opacity: 0, transform: 'translate3d(0,140px,0)' }}
			enter={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
			leave={{ opacity: 0, transform: 'translate3d(0,-50px,0)' }}
			delay={maximized ? 0 : 400}
		>
			<div className="default">{name}</div>
		</Fade>
	</StyledCell>
);

export default ProjectCell;
