import { getUsers } from "../api";
import { useEffect, useState, useContext } from "react";
import { Loading } from "./Loading";


import { UserContext } from './UserContext';


export const Users = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const { value, setValue} = useContext(UserContext)


    useEffect(() => {
        setIsLoading(true)
        getUsers().then((users) => {
            setIsLoading(false)
            setUsers(users);
        })
    }, [])

    if (isLoading) return <Loading />

    return (<section className="Users">
        {users.map((user) => <section key={user.username} className="User">
            <br/>
            <strong>{user.name}</strong>
            <p>Username: <strong>{user.username}</strong></p>
            <img src={user.avatar_url} alt="User's avatar." width="150px" height="100px"/> <br/>
            <button className="Log_Button" onClick={() => {
                window.localStorage.setItem("loginName", user.name);
                window.localStorage.setItem("loginImg", user.avatar_url);
                window.localStorage.setItem("loginUsername", user.username);
                setValue(() => user)}}> Login </button>
         </section>)}
    </section>)
}