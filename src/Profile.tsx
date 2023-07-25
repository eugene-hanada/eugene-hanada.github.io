import React, { useState} from 'react';
import Introduce from './Introduce';
import Skill from './Skill';
import Link from './Link';


const Profile: React.FC = () => {
    const map = new Map<string, JSX.Element>();
    map.set("introduce", <Introduce />);
    map.set("skill", <Skill />);
    map.set("link", <Link />);
    const [now, setNow] = useState<"introduce" | "skill" | "link">("introduce");
    return (
        <div>
            <h1> Profile </h1>
            <ul>
                <button onClick={() => setNow("introduce")}>自己紹介</button>
                <button onClick={() => setNow("skill")}>資格&スキル</button>
                <button onClick={() => setNow("link")}>リンク</button>
                { map.get(now)}
            </ul>
        </div>
    );
};

export default Profile;