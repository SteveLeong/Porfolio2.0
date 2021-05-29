import * as React from 'react';

import { Helmet } from 'react-helmet';
import Container from '../components/container';
import '../scss/main.scss';
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
			<div className='background-aesthetics'>
				<span className='box-1'></span>
				<span className='box-2'></span>
			</div>
			<Container />
		</main>
	);
};

export default IndexPage;
