import { createContext, useState } from 'react';

export const UserContext = createContext({
    user: null,
    isAuthenticated: false,
    userLogin: (userData) => {},
    userLogout: () => {}
});

function UserContextProvider({ children}) {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    function userLogin(userData) {
        setUser(userData);
        setIsAuthenticated(true);
    }

    function userLogout() {
        setUser(null);
        setIsAuthenticated(false);
    }

    const value = {
        user,
        isAuthenticated,
        userLogin,
        userLogout
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;