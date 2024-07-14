import { useEffect, useState } from "react";

const User = ()=>{
    
    const [userData , setUserData] = useState([]);

    useEffect(()=>{
         fetchUserApi()
    },[])

    const fetchUserApi = async()=>{
        const data = await fetch("https://api.github.com/users/ritik220519");
        const json = await data.json();
        console.log(json)
        setUserData(json)
    }
    return <div className="user-card">
        <h2>Name : {userData.name}</h2>
        <h3>Location : {userData.location}</h3>
        <h3>Contact us : {userData.login}</h3>
        <img src={userData.avatar_url}  alt="github img" />
    </div>
}
export default User;