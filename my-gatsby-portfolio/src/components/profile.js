import React from 'react';
import profile from '../images/profile.png';
import '../scss/profile.scss';

const Profile = ({ profileInfo }) => {
	return (
		<div className='profile_container'>
			<img className='profile_img' alt='profile-img' src={profile} />
			<div className='profile_details'>
				<h1>{profileInfo.name}</h1>
				<p>{profileInfo.address}</p>
				<a href={`mailto:${profileInfo.email}`}>{profileInfo.email}</a>
				<p>
					{profileInfo.currentPosition}, {profileInfo.currentCompany}
				</p>
				<ul>
					{profileInfo.skills.map((skill) => (
						<li key={skill}>
							<p>{skill}</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Profile;
