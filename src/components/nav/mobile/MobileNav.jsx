import React, { useState } from 'react';
import * as Styles from './MobileStyles';
import { FiChevronDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { FadeInAlways } from '../../fadeIn/FadeInAlways';
import { navTabs } from '../../../data';

const MobileNav = ({ setOpen, scrollToTop }) => {
	const [clicked, setClicked] = useState(null);

	const subMenuDrawer = {
		enter: {
			height: 'auto',
			overflow: 'hidden',
		},
		exit: {
			height: 0,
			overflow: 'hidden',
		},
	};

	const closeSidebar = () => {
		setOpen(false);
		scrollToTop();
	};
	return (
		<div>
			<Styles.MobileSidebarList>
				<Styles.MobileSidebarList>
					{navTabs.map((nav, i) => {
						const hasSubMenu = nav.subMenu;
						const isClicked = clicked === i;
						return (
							<Styles.MobileListItem key={i}>
								{nav.subMenu ? (
									<>
										<Link onClick={() => setClicked(isClicked ? null : i)}>
											{nav.name}
											<FiChevronDown />
										</Link>

										{hasSubMenu && (
											<Styles.MobileSubMenuListWrapper
												initial='exit'
												animate={isClicked ? 'enter' : 'exit'}
												variants={subMenuDrawer}
											>
												{nav.subMenu.map((nav, i) => (
													<li key={i}>
														<Link
															to={nav.navPath}
															onClick={() => closeSidebar()}
														>
															{nav.name}
														</Link>
													</li>
												))}
											</Styles.MobileSubMenuListWrapper>
										)}
									</>
								) : (
									<Link to={nav.navPath} onClick={closeSidebar}>
										{nav.name}
									</Link>
								)}
							</Styles.MobileListItem>
						);
					})}
				</Styles.MobileSidebarList>
			</Styles.MobileSidebarList>
		</div>
	);
};

export default MobileNav;
