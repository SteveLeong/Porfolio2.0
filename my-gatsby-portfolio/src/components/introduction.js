import React from 'react';
import { AiFillIdcard, AiOutlineAim } from 'react-icons/ai';
import { FaGraduationCap, FaHandHoldingHeart } from 'react-icons/fa';
import '../scss/introduction.scss';

const Introduction = () => {
	return (
		<div className='intro_container'>
			<ul className='intro_list'>
				<li className='intro_list-item'>
					{/* work icon */}
					<div className='intro_list-item_icon-container'>
						<AiFillIdcard
							className='intro_list-item_icon'
							style={{
								fontSize: '28px',
								color: 'rgb(218 190 103)',
							}}
						/>
					</div>
					<p className='intro_list-item_desc'>
						Developer at Critical Mass
					</p>
				</li>
				<li className='intro_list-item'>
					{/* location icon */}
					<div className='intro_list-item_icon-container'>
						<AiOutlineAim
							className='intro_list-item_icon'
							style={{
								fontSize: '28px',
								color: 'rgb(218 190 103)',
							}}
						/>
					</div>
					<p>Based in Calgary, AB</p>
				</li>
				<li className='intro_list-item'>
					{/* degree hat icon */}
					<div className='intro_list-item_icon-container'>
						<FaGraduationCap
							className='intro_list-item_icon'
							style={{
								fontSize: '28px',
								color: 'rgb(218 190 103)',
							}}
						/>
					</div>
					<p>Comp Sci Grad from UofC '18</p>
				</li>
				<li className='intro_list-item'>
					{/* heart hand icon */}
					<div className='intro_list-item_icon-container'>
						<FaHandHoldingHeart
							className='intro_list-item_icon'
							style={{
								fontSize: '28px',
								color: 'rgb(218 190 103)',
							}}
						/>
					</div>
					<p>
						Passionate about user connectivity, open web, and
						continuous growth
					</p>
				</li>
			</ul>
		</div>
	);
};

export default Introduction;
