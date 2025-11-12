import './Contact.css';
import { contacts } from '../../data';

const Contact = () => {
	return (
		<section id='contact'>
			<div className='bg__image'></div>
			<div className='overlay'></div>
			<div className='container'>
				<div className='column'>
					{contacts.map((contact, index) => (
						<div className='contact__info' key={index}>
							<div className='icon__container'>{contact.icon}</div>
							<div className='details'>
								<p className='text__muted'>{contact.name}</p>
								<h3 className='value'>{contact.value}</h3>
							</div>
						</div>
					))}
				</div>
				<div className='column form__container'>
					<div className='form__top'>
						<div className='sub__title g-text'>Keep In Touch</div>
						<p>
							Stay connected with Maylight for the latest updates, project
							insights, and renewable energy innovations. Whether you’re
							planning a new installation or exploring sustainable solutions,
							our team is always ready to assist.
						</p>
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
	);
};

export default Contact;
