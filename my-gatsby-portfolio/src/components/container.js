import React from 'react';
import Profile from '../components/profile';
import Navigation from './navigation';

import profileInfo from '../data/profile';

const Container = () => {
	return (
		<div className='content_container'>
			<Profile profileInfo={profileInfo} />
			<Navigation />
		</div>
	);
};

export default Container;
