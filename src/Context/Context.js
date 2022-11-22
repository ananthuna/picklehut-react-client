import { createContext, useState } from 'react'
import React from 'react'

export const UserContext = createContext(null)

export default function Context({ children }) {
    const [details, setDetails] = useState(null)


    return (
        <UserContext.Provider value={{ details, setDetails }}>
            {children}
        </UserContext.Provider>
    )
}