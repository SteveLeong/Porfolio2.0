import React, { useEffect } from 'react';

import {
	ProfileContainer,
	ProfileImageContainer,
	ProfileImgAesthetics,
	ProfileImgAesthetics2,
	ProfileImg,
	ProfileDetails,
} from './Profile.styles';

import profile from 'assets/profile.png';

const Profile = ({ profileInfo }) => {
	useEffect(() => {
		// 	if (sticky) {
		// 		let current = profileRef.current;
		// 		const handler = () => {
		// 			let offset = profileOffsetHeight + current.scrollHeight,
		// 				pageOffset = window.pageYOffset;
		// 			if (pageOffset >= profileOffsetHeight) {
		// 				current.classList.add('sticky');
		// 			} else if (pageOffset < offset && current.classList.contains('sticky')) {
		// 				current.classList.remove('sticky');
		// 			}
		// 		};
		// 		if (profileOffsetHeight === 0) {
		// 			setProfileOffsetHeight(current.offsetTop);
		// 		}
		// 		window.addEventListener('scroll', handler);
		// 		return () => window.removeEventListener('scroll', handler);
		// 	}
	});

	return (
		<ProfileContainer>
			<ProfileImageContainer>
				<ProfileImgAesthetics />
				<ProfileImgAesthetics2 />
				<ProfileImg alt="profile-img" src={profile} />
			</ProfileImageContainer>
			<ProfileDetails>
				<h1>{profileInfo.name}</h1>
				<p>{profileInfo.currentPosition}</p>
			</ProfileDetails>
		</ProfileContainer>
	);
};

export default Profile;
