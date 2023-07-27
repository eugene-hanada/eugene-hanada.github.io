import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import logo from "./Image/Logo.png";



const Header: React.FC = () => {
	const navi = useNavigate();
	return (
		<div className="Header">
		<img src={logo} width="10%" height="10%"/>
		<ul>
			<li > <button onClick={() => { navi("/Home"); }}>Home</button> </li>
			<li> <button onClick={() => { navi("/Works"); }}> Works</button> </li>
			<li> <button onClick={() => { navi("/Profile"); }}> Profile</button> </li>
			
		</ul>
		</div>
	);
};

export default Header;