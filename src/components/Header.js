import React from 'react';

const Header = () => {
	return <nav>
		<div className="nav-wrapper blue">
			<a href="/" className="brand-logo">Clicky Game</a>
			<ul id="nav-mobile" className="right hide-on-med-and-down">
				<li><a href="https://github.com/Mparks37" target="_blank">GitHub</a></li>
				<li><a href="https://www.linkedin.com/in/maparks/" target="_blank">LinkedIn</a></li>
			</ul>
		</div>
	</nav>
}
export default Header;