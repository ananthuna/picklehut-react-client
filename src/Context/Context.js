import { createContext, useState } from 'react'

export const UserContext = createContext(null)

export default function Context({ children }) {
    const [user, setUser] = useState(null)
    const [image, setImage] = useState(null)
    const [imageURL, setImageURL] = useState(null);

    return (
        <UserContext.Provider value={{ user, setUser, image, setImage, imageURL, setImageURL }}>
            {children}
        </UserContext.Provider>
    )
}