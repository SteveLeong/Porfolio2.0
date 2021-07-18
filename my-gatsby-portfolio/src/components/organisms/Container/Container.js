import React from 'react';

import { ContentContainer, Content } from './Container.styles';

import Profile from 'components/molecules/Profile/Profile';
import About from 'components/molecules/About/About';
import Projects from 'components/molecules/Projects/Projects';
import Contact from 'components/molecules/Contact/Contact';
import { GlobalStyles } from 'utilities/theme/globalStyles';
import profileInfo from 'data/profile';

const Container = () => (
	<>
		<GlobalStyles />
		<link href="https://fonts.googleapis.com/css?family=Comfortaa" rel="stylesheet" />
		<main>
			<ContentContainer>
				<Profile profileInfo={profileInfo} sticky />
				<Content>
					<About />
					<Projects />
					<Contact />
				</Content>
			</ContentContainer>
		</main>
	</>
);

export default Container;
