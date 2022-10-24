import { createContext, useState } from 'react'

export const UserContext = createContext(null)

export default function Context({ children }) {
    const [user, setUser] = useState(null)
    const [image, setImage] = useState(null)
    const [imageURL, setImageURL] = useState(null);
    const [nameEdit, setNameEdit] = useState(false)
    const [profilePhoto, setProfilePhoto] = useState(false)

    return (
        <UserContext.Provider value={{ profilePhoto,setProfilePhoto,user, setUser, image, setImage, imageURL, setImageURL ,nameEdit,setNameEdit}}>
            {children}
        </UserContext.Provider>
    )
}