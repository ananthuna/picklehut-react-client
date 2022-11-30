import { createContext, useState } from 'react'
import React from 'react'

export const UserContext = createContext(null)

export default function Context({ children }) {
    const [details, setDetails] = useState(null)
    const [value, setValue] = useState(0);


    return (
        <UserContext.Provider value={{ details, setDetails ,value,setValue}}>
            {children}
        </UserContext.Provider>
    )
}