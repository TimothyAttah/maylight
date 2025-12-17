import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/home/Home';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import About from './pages/About/About';
import Services from './pages/services/Services';
import Solar from './pages/services/solar/Solar';
import Battery from './pages/services/battery/Battery';
import WaterBatteryPages from './pages/services/water/Water';
import PipingPage from './pages/services/piping/Pipings';
import Electricals from './pages/services/electrical/Electricals'
import StartAProject from './pages/startAProject/StartAProject';

const App = () => {
	return (
		<>
			<Routes>
				<Route element={<Layout />}>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />

					<Route path='/faq' element={<Faq />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/contact/start-project' element={<StartAProject />} />

					<Route path='/services' element={<Services />} />

					<Route path='/services/solar' element={<Solar />} />
					<Route path='/services/battery' element={<Battery />} />
					<Route path='/services/water' element={<WaterBatteryPages />} />
					<Route path='/services/piping' element={<PipingPage />} />
					<Route path='/services/electrical' element={<Electricals />} />
				</Route>
			</Routes>
		</>
	);
};

export default App;
