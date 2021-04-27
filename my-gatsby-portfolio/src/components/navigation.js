import React from 'react';
import '../scss/navigation.scss';

const Navigation = () => {
	return (
		<div className='navigation'>
			<ul className='navigation_list'>
				<li className='navigation_list-item'>
					<button className='navigation_btn'>Experience</button>
				</li>
				<li className='navigation_list-item'>
					<button className='navigation_btn'>Projects</button>
				</li>
				<li className='navigation_list-item'>
					<button className='navigation_btn'>Education</button>
				</li>
			</ul>
		</div>
	);
};

export default Navigation;
