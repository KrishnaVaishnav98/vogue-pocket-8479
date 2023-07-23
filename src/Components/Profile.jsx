import { Button } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useEffect,useState } from "react"
import { Box } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
export const Profile=()=>{
    const loans=[{category:"HomeLoan",image:"https://personalloan.paisabazaar.com/components/images/bank-new-logos/93.gif",amount:1000},
    {category:"HomeLoan",image:"https://personalloan.paisabazaar.com/components/images/bank-new-logos/93.gif",amount:1000}
]
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
        <div style={{display:window.innerWidth>650?"flex":"grid",justifyContent:"start",paddingTop:"20px",backgroundColor:"#E5D1FA",alignContent:"center"}}>
            <div style={{display:"flex",alignContent:"center",alignItems:"center",justifyContent:"center"}}>
        
            <img style={{ width: "70%",paddingRight:"50px",paddingLeft:"10%" }} src="https://img.freepik.com/premium-vector/man-profile-cartoon_18591-58482.jpg?w=740" alt="" />
            </div>
            <div style={{marginLeft:"10%",paddingBottom:"10px"}}>
                <h3> <label style={{color:"#07051f"}}>Name :  </label> {data.fullname} {data.lastname}</h3>
                <h5> <label style={{color:"#07051f"}}>Birth :  </label> {data.dob}</h5>
                <h5> <label style={{color:"#07051f"}}>Phone :  </label> {data.contact}</h5>
                <h5> <label style={{color:"#07051f"}}>Email :  </label> {data.email}</h5>
                <h5> <label style={{color:"#07051f"}}>Gender :  </label> {data.gender}</h5>
                <h5> <label style={{color:"#07051f"}}>Income :  </label> {data.income}</h5>
                <h5> <label style={{color:"#07051f"}}>Town :  </label> {data.address}</h5>
                <h5> <label style={{color:"#07051f"}}>Occupation: </label> {data.employment}</h5>
               
            </div>
            <div style={{marginLeft:"10%"}}>
               {loans.length>0?(
                
               <div >
                <Text fontSize={"15px"} fontWeight={"bold"}>Active Loans</Text>
                {loans.map((el)=>(
                <Box pr={"10px"} mb={"10px"} >
                  <Box>  <img src={el.image} alt="" /></Box>
                  <Box style={{display:"flex",justifyContent:"space-around",width:"250px"}}>
                 <Text fontSize={"15px"} fontWeight={"bold"}>{el.category}</Text>
                 <Text fontSize={"15px"} fontWeight={"bold"}>Loan: Rs{el.amount}</Text>
                 
                  </Box>
                </Box>


                ))}
               </div>
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