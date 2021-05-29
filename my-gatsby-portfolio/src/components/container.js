import React from 'react';
import Profile from '../components/profile';
import Navigation from './navigation';
import Introduction from './introduction';

import profileInfo from '../data/profile';

const Container = () => {
	return (
		<div className='content_container'>
			<Profile profileInfo={profileInfo} />
			<Introduction />
		</div>
	);
};

export default Container;
