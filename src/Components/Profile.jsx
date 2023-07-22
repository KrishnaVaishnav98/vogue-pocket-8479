import { useSelector } from "react-redux"

export const Profile=()=>{
    const user=useSelector((store)=>
    store.authReducer
    )
    console.log(user)
    return (
        <div>Profile</div>
    )
}