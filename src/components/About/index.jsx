import './About.css';
import { company__photo } from '../../assets';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = () => {
	return (
		<section id='about'>
			<div className='container about__container'>
				<div className='column company__photo'>
					<img src={company__photo} alt='Maylight' />
				</div>
				<div className='column'>
					<h3 className='sub__title'>With 7+ Years Experience</h3>
					<h1 className='sub__title'>
						Turning your <span className='g-text'>vision</span> into reality by
						focusing on the basics
					</h1>
					<p className='text__muted description'>
						At Maylight, our foundation is built on precision, integrity, and
						results. For over seven years, we’ve delivered dependable solar
						solutions that combine proven technology with expert craftsmanship —
						ensuring every project meets your expectations for performance,
						durability, and value.
					</p>
					<div className='group'>
						<div className='row'>
							<div className='icon__container'>
								<FaCheck />
							</div>
							<div className='details'>
								<p className='text__muted'>Consultation</p>
								<h3>Free</h3>
							</div>
						</div>

						<div className='row'>
							<div className='icon__container'>
								<FaCheck />
							</div>
							<div className='details'>
								<p className='text__muted'>Expert</p>
								<h3>Engineers</h3>
							</div>
						</div>

						<div className='row'>
							<div className='icon__container'>
								<FaCheck />
							</div>
							<div className='details'>
								<p className='text__muted'>Customer</p>
								<h3>Support</h3>
							</div>
						</div>

						<div className='row'>
							<div className='icon__container'>
								<FaCheck />
							</div>
							<div className='details'>
								<p className='text__muted'>Quality</p>
								<h3>Services</h3>
							</div>
						</div>
					</div>

					<div className='buttons__container'>
						<Link to='/about' smooth={true} className='btn'>
							Explore
						</Link>
						<Link
							to='/contact/start-project'
							smooth={true}
							className='btn btn__primary'
						>
							Get a quote
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
