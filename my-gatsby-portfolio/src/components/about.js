import React from 'react';
import { AiFillIdcard, AiOutlineAim } from 'react-icons/ai';
import { FaGraduationCap, FaHandHoldingHeart } from 'react-icons/fa';
import '../scss/about.scss';

const About = () => {
	return (
		<section className='about_container'>
			<ul className='about_list'>
				<li className='about_list-item'>
					<div className='about_list-item_icon-container'>
						<AiFillIdcard className='about_list-item_icon' />
					</div>
					<p className='about_list-item_desc'>
						Developer at Critical Mass
					</p>
				</li>
				<li className='about_list-item'>
					<div className='about_list-item_icon-container'>
						<AiOutlineAim className='about_list-item_icon' />
					</div>
					<p className='about_list-item_desc'>Based in Calgary, AB</p>
				</li>
				<li className='about_list-item'>
					<div className='about_list-item_icon-container'>
						<FaGraduationCap className='about_list-item_icon' />
					</div>
					<p className='about_list-item_desc'>
						Comp Sci Grad from UofC '18
					</p>
				</li>
				<li className='about_list-item'>
					<div className='about_list-item_icon-container'>
						<FaHandHoldingHeart className='about_list-item_icon' />
					</div>
					<p className='about_list-item_desc'>
						Passionate about user connectivity, open web, and
						continuous growth
					</p>
				</li>
			</ul>
		</section>
	);
};

export default About;
