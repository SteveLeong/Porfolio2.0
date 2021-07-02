import React from 'react';
import profile from '../images/profile.png';
import {
	ProfileContainer,
	ProfileImageContainer,
	ProfileImgAesthetics,
	ProfileImgAesthetics2,
	ProfileImg,
	ProfileDetails,
} from '../styles/profile.styles';

const Profile = ({ profileInfo }) => {
	return (
		<ProfileContainer>
			<ProfileImageContainer>
				<ProfileImgAesthetics />
				<ProfileImgAesthetics2 />
				<ProfileImg alt='profile-img' src={profile} />
			</ProfileImageContainer>
			<ProfileDetails>
				<h1>{profileInfo.name}</h1>
				<p>{profileInfo.currentPosition}</p>
			</ProfileDetails>
		</ProfileContainer>
	);
};

export default Profile;
