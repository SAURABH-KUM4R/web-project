import axios from 'axios'
import { useEffect, useState } from 'react';
import Displayprofile from './DisplayProfile';
import './Getprofile.css'
function Getprofile({user}) {
    const [Users,setUsers] = useState([]);
    async function downloadProfile() {
        let response = await axios(`https://api.github.com/search/users?q=${user}`);
        let data = await response.data.items;
        let list = data.map((Element) => {
            return {
                avtar: Element.avatar_url,
                name: Element.login
            }
        });
        setUsers(list);
    }

    useEffect(() => {
        if (user !== "") {
            downloadProfile();
        }
    },[user]);

    return (
        <div className="profiles">
            {
                Users.map((e,i) => <div key={i}><Displayprofile image={e.avtar} name={e.name}/></div>)
            }
        </div>
    )
}

export default Getprofile;