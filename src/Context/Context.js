import { createContext, useState } from 'react'
import React from 'react'

export const UserContext = createContext(null)

export default function Context({ children }) {
    const [details, setDetails] = useState(null)
    const [value, setValue] = useState(0);
    const [user, setUser] = React.useState({})
    const [cartitems, setCartitems] = useState({})
    const [address, setAddress] = React.useState()
    const [method, setMethod] = React.useState('');

    return (
        <UserContext.Provider value={{
            details,
            setDetails,
            value,
            setValue,
            user,
            setUser,
            cartitems,
            setCartitems,
            address,
            setAddress,
            method,
            setMethod
        }}>
            {children}
        </UserContext.Provider>
    )
}