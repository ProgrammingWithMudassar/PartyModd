import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios';

const AuthenticationContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([])

    useEffect(() => {

        const getUserData = async () => {

            const resp = await fetch('http://localhost:8000/auth/protected')
            const data = resp.json();

            setUser(data)

        }


        getUserData()

    }, [user])

    console.log(user)

    return(
        <AuthenticationContext.Provider value={{user}}>
            {children}
        </AuthenticationContext.Provider>
    )

}

export {AuthProvider, AuthenticationContext}