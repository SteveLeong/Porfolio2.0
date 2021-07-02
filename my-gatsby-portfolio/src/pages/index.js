import * as React from 'react';

import { Helmet } from 'react-helmet';
import Container from '../components/container';
import '../styles/main.scss';
// markup
const IndexPage = () => {
	return (
		<main className='main_container'>
			<Helmet>
				<link
					href='https://fonts.googleapis.com/css?family=Comfortaa'
					rel='stylesheet'
				/>
			</Helmet>
			<Container />
		</main>
	);
};

export default IndexPage;
