import * as Styles from './HeaderStyles';
import logo from '../../assets/fullLogo.png';
import { useEffect, useState } from 'react';
import './header.css';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { RiMenu3Fill } from 'react-icons/ri';
import DesktopNav from '../nav/desktopNav/DesktopNav';
import MobileNav from '../nav/mobile/MobileNav';

export const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth',
	});
};

const Header = () => {
	const [open, setOpen] = useState(false);
	const [activeNavbar, setActiveNavbar] = useState(false);

	const handleScroll = () => {
		const currentScrollPos = window.scrollY;
		if (currentScrollPos > 50) {
			setActiveNavbar(true);
		} else {
			setActiveNavbar(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className={`navbar ${activeNavbar ? 'active' : ''}`}>
			{open ? (
				<div className='sidebar__overlay' onClick={() => setOpen(!open)}></div>
			) : (
				''
			)}

			<Link to='/' onClick={scrollToTop}>
				<Styles.HeaderLogo>
					<img src={logo} alt='' />
				</Styles.HeaderLogo>
			</Link>

			<div className={`box nav__tabs ${open ? 'visible' : ''}`}>
				<div
					className='icon__container cancel__btn'
					onClick={() => setOpen(!open)}
				>
					<FaTimes />
				</div>
				<DesktopNav scrollToTop={scrollToTop} />
				{open && <MobileNav setOpen={setOpen} scrollToTop={scrollToTop} />}
			</div>

			<div className='box'>
				<Link to='/contact/start-project' className='btn contact__btn'>
					Get started
				</Link>
				<div
					className='icon__container menu__btn'
					onClick={() => setOpen(!open)}
				>
					<RiMenu3Fill />
				</div>
			</div>
		</div>
	);
};

export default Header;
