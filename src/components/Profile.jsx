import React, { useContext } from 'react'
// import UserContextProvider from '../context/UserContextProvider'
import Usercontext from '../context/Usercontext'
 

function Profile() {

    const {user} = useContext(Usercontext)

    if(!user) return <div>Please SignIN</div>

    return <div>HEllo {user.username}</div>
}

export default Profile
