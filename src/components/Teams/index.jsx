import './Teams.css';
import { teams } from '../../data';
import { Link } from 'react-scroll';

const Teams = ({ title, desc, subtitle }) => {
	return (
		<section id='team'>
			<div className='container'>
				{/* <h1 className="title">Our <span className="g-text">Teams</span></h1> */}
				<h1 className='title'>
					{title} <span className='g-text'>{subtitle}</span>
				</h1>
				<p className='text__muted description'>{desc}</p>
				<div className='team__container'>
					{teams.map((team, i) => (
						<div className='team__card' key={i}>
							<div className='profile__container'>
								<img src={team.profile} alt={team.name} />
							</div>
							<div className='details'>
								<h3 className='name'>{team.name}</h3>
								<p className='text__muted'>{team.title}</p>
							</div>
							<div className='social__container'>
								{team.social.map((item, i) => (
									<Link
										// href={item.url || ''}
										to={item.url || ''}
										target='_blank'
										className='icon__container'
										key={i}
									>
										{item.icon}
									</Link>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Teams;
