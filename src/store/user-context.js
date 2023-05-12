import { createContext, useState } from 'react';

export const UserContext = createContext({
    user: null,
    isAuthenticated: false,
    login: (userData) => {},
    logout: () => {}
});

function UserContextProvider({ children}) {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    function login(userData) {
        setUser(userData);
        setIsAuthenticated(true);
    }

    function logout() {
        setUser(null);
        setIsAuthenticated(false);
    }

    const value = {
        user,
        isAuthenticated,
        login,
        logout
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;