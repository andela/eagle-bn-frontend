import React from 'react';
import avatar from '../../Assets/images/avatar.png';
import { faUser, faFileAlt, faClipboard, faBed } from '@fortawesome/free-solid-svg-icons';
import checkToken from '../../helper/helper';
import Menu from '../Components/Menu';

const requestMenu = [
	{ name: 'my account', icon: faUser, active: true, link: '/dashboard' },
	{ name: 'trip requests', icon: faClipboard, active: false, link: '/requests' },
	{ name: 'accommodations', icon: faBed, active: false, link: '/accommodations' },
];
const supplierMenu = [
	{ name: 'my account', icon: faUser, active: true, link: '/dashboard' },
	{ name: 'accommodations', icon: faBed, active: false, link: '/accommodations' },
	{ name: 'booking', icon: faFileAlt, active: false, link: '/booking' },
];
function getMenus(role, active) {
	switch (role || 'requester') {
		case 'requester':
			return requestMenu.map((menu, index) => (
				<Menu name={menu.name} active={index === active} icon={menu.icon} link={menu.link} />
			));
		case 'host':
			return supplierMenu.map((menu, index) => (
				<Menu name={menu.name} active={index === active} icon={menu.icon} link={menu.link} />
			));
		default:
			return '';
	}
}

function SideNav(props) {
	const { role, fullname } = checkToken() || {};
	return (
		<ul className='navbar-nav mr-auto sidenav shadow-sm' id='navAccordion'>
			<li className='nav-item user-nav shadow-sm'>
				<div className='d-flex flex-column ml-5 mt-3'>
					<img className='avatar' src={avatar} alt='user' />
					<h6 className='py-2 pl-1'>{fullname}</h6>
				</div>
			</li>
			{getMenus(role, props.active || 0)}
		</ul>
	);
}

export default SideNav;