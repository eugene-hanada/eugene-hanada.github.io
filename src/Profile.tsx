import React, { useState} from 'react';
import Introduce from './Introduce';
import Skill from './Skill';
import Link from './Link';
import "./Profile.css";

const Profile: React.FC = () => {
	const [now, setNow] = useState<JSX.Element>(<Introduce/>);
	return (
		<div className="Profile">
			<h1> Profile </h1>
			<ul>
				<li><button onClick={() => setNow(<Introduce />)}>自己紹介</button></li>
				<li><button onClick={() => setNow(<Skill />)}>資格&スキル</button></li>
				<li><button onClick={() => setNow(<Link />)}>リンク</button></li>
			</ul>
			<div className="ProfileChild">{now}</div>
		</div>
	);
};

export default Profile;