import { getUsers } from "../api";
import { useEffect, useState } from "react";
import { Loading } from "./Loading";

export const Users = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

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
            <img src={user.avatar_url} alt="User's avatar." width="150px" height="100px"/>
         </section>)}
    </section>)
}