import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
	return (
		<>
			<nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
				<div class="container-fluid padding-10 margin-left-10">
					<Link to="/" className='text-decoration-line-none'><span class="navbar-brand mb-0 h1">Minecraft</span></Link>
				</div>
			</nav>
		</>
	);
}

export default Header;