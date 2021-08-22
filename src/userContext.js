import React, { useState } from 'react'

let UserContext = React.createContext();

export default UserContext;

// Provider for Products.//

export const UserProvider = ({children}) => {

    const [userList,setUserList] = useState([])

    return <UserContext.Provider value={{userList,setUserList}}>
        {children}
    </UserContext.Provider>
} 