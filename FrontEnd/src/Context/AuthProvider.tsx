import { ReactNode, FC ,createContext, useContext,useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";



type authContextType = {
    user: string[];
    login: () => void;
    logout: () => void;
};
const authContextDefaultValues: authContextType = {
    user: [],
    login: () => {},
    logout: () => {},
};

type Props = {
    children: ReactNode;
};



const AuthenticationContext = createContext<authContextType>(authContextDefaultValues);

export function useAuth() {
    return useContext(AuthenticationContext);
}
export function AuthProvider({ children }: Props) {
    const navigate = useNavigate();

    const [user, setUser] = useState<string[] | null >(null);

    
    useEffect(()=>{
        const getUserData = async () =>{
            const response = await fetch('http://localhost:8000/auth/login/success',{
                method: "GET",
                credentials: "include",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  "Access-Control-Allow-Credentials": true,
                },
            });
            console.log("Response,", response);

            const data = await response.json();
            console.log("After Fetch,", data);
            setUser(data);


        }

        getUserData();

    }, [])

    const login = () => {
        setUser([]);
        
    };

    const logout = async () => {
        
        await fetch('http://localhost:8000/api/users/logout',{
                method: "GET",
                credentials: "include",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  "Access-Control-Allow-Credentials": true,
                },
            });
        setUser(null)
        navigate("/");

    };

    

    const value = {
        user,
        login,
        logout,
    };
    console.log("ALL User Data => ", user)

    
    return (
        <>
            <AuthenticationContext.Provider value={value}>
                {children}
            </AuthenticationContext.Provider>
        </>
    );
}

