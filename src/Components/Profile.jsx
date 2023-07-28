import { Button } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useEffect,useState } from "react"
import { Box } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
import axios from "axios"
export const Profile=()=>{
const [loans,setLoans]=useState([])
const [data,setData]=useState([])
  const data2=useSelector((store)=>
  store.authReducer.currentUser
  )

   const fetchLoans=()=>{
    axios
    .get(`https://money-mentor.onrender.com/LoginUsers/${data2.id}`)
    .then((res)=>{
    setLoans(res.data.loans)
    setData(res.data)
    })
   }
 useEffect(()=>{
  fetchLoans()
 },[])
   
 


   
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
            <div style={{display:"flex",alignContent:"center",alignItems:"center",justifyContent:"center",backgroundColor:"#E5D1FA",marginBottom:"20px"}}>
        
            <img style={{ width: "50%",backgroundColor:"#E5D1FA",borderRadius:"100%"}} src="https://img.freepik.com/premium-vector/man-profile-cartoon_18591-58482.jpg?w=740" alt="" />
            </div>
            <div style={{marginLeft:"10%",paddingBottom:"10px"}}>
                <h3> <label style={{color:"#07051f"}}>Name :  </label> {data.firstname || data.fullname} {data.lastname}</h3>
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
                <Box pr={"10px"} mb={"20px"} >
                  <Box>  <img src={el.bankImg} alt="" /></Box>
                  <Box style={{display:"flex",justifyContent:"space-around",width:"250px"}}>
                 <Text fontSize={"15px"} fontWeight={"bold"}>Status:{el.status}</Text>
                 <Text fontSize={"15px"} fontWeight={"bold"}>Loan: Rs{el.loanAmount}</Text>
                 
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