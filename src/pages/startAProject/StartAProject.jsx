import './start.css';
import * as Styles from './StartAProjectStyles';
import { Link } from 'react-router-dom';

const StartAProject = () => {
	return (
		<>
			<Styles.HeroSection>
				<Styles.HeroBG />
				<Styles.HeroContent
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<h1>Start a project</h1>
					<p>
						Whether you’re planning a new installation or exploring sustainable
						solutions, our team is always ready to assist. Let’s build a
						cleaner, brighter future — together.
					</p>

					<div className='buttons__container'>
						<Link to='/contact' className='btn btn__primary'>
							Request a Consultation
						</Link>
					</div>
				</Styles.HeroContent>
			</Styles.HeroSection>
			<section id='contact'>
				<div className='bg__image'></div>
				<div className='overlay'></div>
				<div className='container'>
					<div className='column'>
						<h4 style={{ lineHeight: '40px' }}>
							Please include as much information as possible about your project,
							including the industry you are in, the scope of the project, and
							any specific requirements or challenges you may be facing., will
							take only take a few minutes, we promise!
						</h4>
					</div>
					<div className='column form__container'>
						<div className='form__top'>
							<div className='sub__title g-text'>Start a project</div>
							<p>Let’s build a cleaner, brighter future — together.</p>
						</div>
						<div className='form__middle'>
							<div className='row'>
								<input
									type='text'
									placeholder='First Name'
									name='firstname'
									className='control'
								/>
								<input
									type='text'
									placeholder='Last Name'
									name='lastname'
									className='control'
								/>
							</div>
							<div className='row'>
								<input
									type='email'
									placeholder='Email Address'
									name='email'
									className='control'
								/>
								<input
									type='tel'
									placeholder='Phone Number'
									name='phone'
									className='control'
								/>
							</div>
							<div className='row'>
								<input
									type='text'
									placeholder='Company Name'
									name='companyName'
									className='control'
								/>
								<input
									type='text'
									placeholder='Job Title'
									name='jobTitle'
									className='control'
								/>
							</div>
							<textarea
								name='message'
								placeholder='Message...'
								cols={30}
								rows={5}
								className='control'
								id=''
							></textarea>
						</div>
						<div className='form__bottom'>
							<button className='btn btn__primary'>Send Message</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default StartAProject;
