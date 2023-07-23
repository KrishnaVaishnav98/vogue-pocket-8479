import { Button } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useEffect,useState } from "react"
export const Profile=()=>{
    
    const data=useSelector((store)=>
    store.authReducer.currentUser
    )
    const [isDesktop, setDesktop] = useState(window.innerWidth > 1450);

    const updateMedia = () => {
      setDesktop(window.innerWidth > 650);
    };
  
    useEffect(() => {
      window.addEventListener("resize", updateMedia);
      return () => window.removeEventListener("resize", updateMedia);
    });
    return (
        <div style={{display:window.innerWidth>650?"flex":"grid",justifyContent:"start",paddingTop:"20px",backgroundColor:"#E5D1FA"}}>
            <div>
        
            <img style={{ width: "70%",paddingRight:"50px",paddingLeft:"10%" }} src="https://cdn-icons-png.flaticon.com/512/6681/6681204.png" alt="" />
            </div>
            <div style={{marginLeft:"10%"}}>
                <h3> <label style={{color:"#07051f"}}>Name :  </label> {data.fullname} {data.lastname}</h3>
                <h5> <label style={{color:"#07051f"}}>Birth :  </label> {data.dob}</h5>
                <h5> <label style={{color:"#07051f"}}>Phone :  </label> {data.contact}</h5>
                <h5> <label style={{color:"#07051f"}}>Email :  </label> {data.email}</h5>
                <h5> <label style={{color:"#07051f"}}>Gender :  </label> {data.gender}</h5>
                <h5> <label style={{color:"#07051f"}}>Income :  </label> {data.income}</h5>
                <h5> <label style={{color:"#07051f"}}>Town :  </label> {data.address}</h5>
                <h5> <label style={{color:"#07051f"}}>Occupation: </label> {data.employment}</h5>
                <Button>Edit Password</Button>
            </div>
            <div style={{marginLeft:"10%"}}>
               {data.loans.length>0?(
               ""
               ):(
                <div>
                    <h1 style={{fontWeight:"bold",paddingTop:"20px",paddingRight:"20px"}}>! You have not Taken any Loans</h1>
                    <br />
               <Link to={"/verification"}> <Button>Apply Now</Button></Link>
                </div>
               )}
                
            </div>

        </div>
    )
}