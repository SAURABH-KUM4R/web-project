import { useState } from "react";
import Getprofile from "./Getprofile/Getprofile";
import Search from "./Search/Search";
import './Homepage.css'
function Homepage(){
    const [search, setSearch] = useState('');
    return (
        <div className="homePage">
            <Search setSearch={setSearch}/>
            <Getprofile user={search}/>
        </div>
    )
}

export default Homepage;