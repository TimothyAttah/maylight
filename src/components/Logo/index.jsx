import './Logo.css';
import { PiSolarPanelFill } from 'react-icons/pi';
import logo from '../../assets/fullLogo.png'

const Logo = () => {
	return (
		<div className='logo'>
			{/* <PiSolarPanelFill className='icon' />
			<h1 className='name'>
				Sola<span className='color__primary'>Rix</span>
			</h1> */}
			<img src={logo} alt="" width='200px' />
		</div>
	);
};

export default Logo;
