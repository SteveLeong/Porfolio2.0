import React, { useEffect, useRef, useState } from 'react';

import {
	ProfileContainer,
	ProfileImageContainer,
	ProfileImgAesthetics,
	ProfileImgAesthetics2,
	ProfileImg,
	ProfileDetails,
	BackgroundAesthetics,
	Box1,
	Box2,
} from './Profile.styles';

import canUseDOM from 'utilities/canUseDOM';
import profile from 'assets/profile.png';

const Profile = ({ profileInfo, sticky }) => {
	const profileRef = useRef(null);

	const [profileOffsetHeight, setProfileOffsetHeight] = useState(0);

	useEffect(() => {
		if (canUseDOM && sticky) {
			let current = profileRef.current;

			const handler = () => {
				let offset = profileOffsetHeight + current.scrollHeight,
					pageOffset = window.pageYOffset;
				if (pageOffset >= profileOffsetHeight) {
					current.classList.add('sticky');
				} else if (pageOffset < offset && current.classList.contains('sticky')) {
					current.classList.remove('sticky');
				}
			};
			if (profileOffsetHeight === 0) {
				setProfileOffsetHeight(Math.max(current.offsetTop, 75));
			}
			window.addEventListener('scroll', handler);
			return () => window.removeEventListener('scroll', handler);
		}
	}, [sticky, profileOffsetHeight]);

	return (
		<ProfileContainer ref={profileRef}>
			<BackgroundAesthetics>
				<Box1 />
				<Box2 />
			</BackgroundAesthetics>
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
