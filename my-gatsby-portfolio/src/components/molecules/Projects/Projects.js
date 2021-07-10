import React from 'react';

import { ProjectContainer, ProjectGrid } from './Projects.styles';

import ProjectCell from 'components/atoms/ProjectCell/ProjectCell';
import data from 'data/projects';
// https://github.com/drcmda/mauerwerk
const Projects = () => (
	<ProjectContainer>
		<ProjectGrid
			className="grid"
			data={data}
			keys={(d) => d.name}
			heights={(d) => d.height}
			lockScroll={true}
			columns={2}
		>
			{(data, maximized, toggle) => (
				<ProjectCell {...data} maximized={maximized} toggle={toggle} />
			)}
		</ProjectGrid>
	</ProjectContainer>
);

export default Projects;
