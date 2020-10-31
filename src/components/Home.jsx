import React, {useState} from "react";
import Login from './Login';
import Logout from './Logout';

import { users } from '../data';

const Home = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState([]);

    const login = (username, password) => {
        setCurrentUser(users.map(user => {
            let userInfo;
            if (user.username === username && user.password === password){
                setIsLoggedIn(true);
                userInfo = user;
            }
            return userInfo;
        }))
    }

    const logout = () => {
        setIsLoggedIn(false);
    };

    return (
        <>
        
        {isLoggedIn ? (
            <>
            <Logout logout={logout}/>
            <h1>Hello, {currentUser[0].name}</h1>
            </>
        ) : (
            <>
            <h1>Please Login</h1>
            <Login login={login}/>
            </>
        )}
        </>
    )

}

export default Home;