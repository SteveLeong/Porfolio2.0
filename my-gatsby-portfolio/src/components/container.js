import React from 'react';
import Profile from './profile';
import About from './about';
import Projects from './projects';
import {
	BackgroundAesthetics,
	Box1,
	Box2,
	ContentContainer,
} from '../styles/container.styles';

import profileInfo from '../data/profile';

const Container = () => {
	return (
		<>
			<BackgroundAesthetics>
				<Box1 />
				<Box2 />
			</BackgroundAesthetics>
			<ContentContainer>
				<Profile profileInfo={profileInfo} />
				<About />
				<Projects />
			</ContentContainer>
		</>
	);
};

export default Container;
