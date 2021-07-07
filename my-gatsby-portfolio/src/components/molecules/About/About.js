import React from 'react';
import { AiFillIdcard, AiOutlineAim } from 'react-icons/ai';
import { FaGraduationCap, FaHandHoldingHeart } from 'react-icons/fa';

import {
	AboutContainer,
	AboutList,
	AboutListItem,
	IconContainer,
	AboutListItemDesc,
} from './About.styles';

const About = () => (
	<AboutContainer>
		<AboutList>
			<AboutListItem>
				<IconContainer>
					<AiFillIdcard />
				</IconContainer>
				<AboutListItemDesc>Developer at Critical Mass</AboutListItemDesc>
			</AboutListItem>
			<AboutListItem>
				<IconContainer>
					<AiOutlineAim />
				</IconContainer>
				<AboutListItemDesc>Based in Calgary, AB</AboutListItemDesc>
			</AboutListItem>
			<AboutListItem>
				<IconContainer>
					<FaGraduationCap />
				</IconContainer>
				<AboutListItemDesc>Comp Sci Grad from UofC &apos;18</AboutListItemDesc>
			</AboutListItem>
			<AboutListItem>
				<IconContainer>
					<FaHandHoldingHeart />
				</IconContainer>
				<AboutListItemDesc>
					Passionate about user connectivity, open web, and continuous growth
				</AboutListItemDesc>
			</AboutListItem>
		</AboutList>
	</AboutContainer>
);

export default About;
