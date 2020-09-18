import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
import StreamsIcon from '../streamsicon.png'

const Header = () => {
    return (
        <div className = "nav-bar">
        	<Link to="/">
        		<img className = "header-icon" src={StreamsIcon} alt="nanostream icon" />
        	</Link>
        	<Link className = "nav-link" to="/list">
        		watch
        	</Link>
			<Link className = "nav-link" to="/streams/new">
				create
			</Link>
			<Link className = "nav-link" to="/faq">
				faq
			</Link>
        	<GoogleAuth />
		</div>

    );
};

export default Header;