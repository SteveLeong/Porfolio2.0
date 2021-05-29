import React from 'react';
import Profile from '../components/profile';
import Navigation from './navigation';
import About from './about';
import Projects from './projects';

import profileInfo from '../data/profile';

const Container = () => {
	return (
		<div className='content_container'>
			<Profile profileInfo={profileInfo} />
			<About />
			<Projects />
		</div>
	);
};

export default Container;
