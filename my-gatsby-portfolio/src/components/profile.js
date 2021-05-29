import React from 'react';
import profile from '../images/profile.png';
import '../scss/profile.scss';

const Profile = ({ profileInfo }) => {
	return (
		<div className='profile_container'>
			<div className='profile_img-container'>
				<div className='profile_img-aesthetics-1'></div>
				<div className='profile_img-aesthetics-2'></div>
				<img className='profile_img' alt='profile-img' src={profile} />
			</div>
			<div className='profile_details'>
				<h1>{profileInfo.name}</h1>
				<p>{profileInfo.currentPosition}</p>
			</div>
		</div>
	);
};

export default Profile;
