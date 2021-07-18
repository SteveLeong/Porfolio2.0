import React from 'react';
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail, AiOutlineUser } from 'react-icons/ai';

import { ContactContainer, ContactList, ListItem, ItemLink } from './Contact.styles';

import resume from 'data/Steven-Leong-Resume.pdf';

const Contact = () => (
	<ContactContainer>
		<ContactList>
			<ListItem className="linkedin">
				<ItemLink
					href="https://www.linkedin.com/in/steven-leong"
					target="_blank"
					rel="noopener noreferrer"
				>
					<AiOutlineLinkedin />
					<span>LinkedIn</span>
				</ItemLink>
			</ListItem>
			<ListItem className="github">
				<ItemLink
					href="http://github.com/SteveLeong"
					target="_blank"
					rel="noopener noreferrer"
				>
					<AiOutlineGithub />
					<span>Github</span>
				</ItemLink>
			</ListItem>
			<ListItem className="email">
				<ItemLink
					href="mailto:steveleong8@gmail.com"
					email="true"
					target="_blank"
					rel="noopener noreferrer"
				>
					<AiOutlineMail />
					<span>Email</span>
				</ItemLink>
			</ListItem>
			<ListItem className="resume">
				<ItemLink href={resume} className="resume" download="Steven-Leong-Resume">
					<AiOutlineUser />
					<span>Resume</span>
				</ItemLink>
			</ListItem>
		</ContactList>
	</ContactContainer>
);

export default Contact;
