import { Link } from 'react-scroll';
import './Header.css';
import { solar__skyscraper } from '../../assets';
import SolarSystem from '../SolarSystem';

const Header = () => {
	return (
		<header id='header'>
			<div className='system__wrapper'>
				<SolarSystem />
			</div>

			<div className='container full__height blur-effect'>
				<div className='column'>
					<h1 className='title'>
						Revolutionary Home <span className='g-text'>Solar System</span>
					</h1>
					<p className='text__muted'>
						At Maylight, we deliver high-performance solar systems designed for
						homes, businesses, and communities. Our mission is to make clean,
						renewable energy accessible, efficient, and dependable — one
						installation at a time.
					</p>
					<div className='buttons__container'>
						<Link to='services' className='btn'>
							Our Services
						</Link>
						<Link to='contact' className='btn btn__primary'>
							Contact Us
						</Link>
					</div>
				</div>
				<div className='column'>
					<div className='image__container primary-effect'>
						<img src={solar__skyscraper} alt='Solarix' />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
