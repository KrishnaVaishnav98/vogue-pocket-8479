import axios from "axios"
import { Box ,Button, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper} from "@chakra-ui/react"
import { Text } from '@chakra-ui/react'
import { useEffect, useState } from "react"
import { LoanCard } from "../Components/LoanCard"

import { SideBar } from "./SideBar"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../Redux/Product/action"
import { useSearchParams } from "react-router-dom"




export const Product=()=>{


  const dispatch=useDispatch()

  const data=useSelector((store)=> 
   store.productReducer.products
   )
   const userid=useSelector((store)=>
   store.authReducer.currentUser.id
   )
  //search params 
  const [searchparams,setSearchParams]=useSearchParams()
  const intialCategory=searchparams.get("category")
  const intialOrder=searchparams.get("order")
  const [category,setCategory]=useState(intialCategory ||"")
   const[order,setOrder]=useState(intialOrder || "")
  
 
   
    
    const fetchuser=()=>{
      let paramsObj={
        params:{
            category : searchparams.get("catagory"),
            _sort : searchparams.get("order") && "interest",
            _order: searchparams.get("order"),
            
        }
    }

    axios
    .get("https://money-mentor.onrender.com/LoginUsers")
    .then((res)=>{
      
      const user=res.data.find((el)=>el.id==userid)
      console.log(user)
        // setCategory(user.category)
      dispatch(getProducts(paramsObj))
    })
    }
  

 
    useEffect(()=>{
      const params={
       
      }
      category && (params.category=category)
      order && (params.order=order)
     setSearchParams(params)
      fetchuser()
      
    },[order])
// media query 
const [isDesktop, setDesktop] = useState(window.innerWidth > 1450);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 650);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div>
      {isDesktop ? (
        <div>
           
        <Box   margin={"10px"}  display={"flex"} textAlign={"center"}  justifyContent={"space-around"} alignItems={"center"}>
        <Box fontSize={"15px"} fontWeight={"bold"}  w={"200px"}>Bank-Name</Box>
       
        <Box fontSize={"15px"} fontWeight={"bold"} w={"100px"}>Loan Amount</Box>
        <Box w={"100px"} display={"flex"} >

<Box><Text fontSize={"15px"} fontWeight={"bold"}>Interest</Text></Box>
<Box> <NumberInput ml={7}>

<NumberInputStepper>
<NumberIncrementStepper onClick={()=>setOrder("asc")} />
<NumberDecrementStepper  onClick={()=>setOrder("desc")} />
</NumberInputStepper>
</NumberInput></Box>


</Box>
        <Box w={"300px"} fontSize={"15px"} fontWeight={"bold"}>Prepayment Charges</Box>
        <Box display={"flex"} justifyContent={"space-around"}>

        <Box><Text fontSize={"15px"} fontWeight={"bold"}>EMI</Text></Box>
       <Box> <NumberInput ml={7}>
       
       <NumberInputStepper  >
         <NumberIncrementStepper  />
         <NumberDecrementStepper />
       </NumberInputStepper>
     </NumberInput></Box>


        </Box>
        <Box fontSize={"15px"} fontWeight={"bold"}  >Processing Fee</Box>
        <Box fontSize={"15px"} fontWeight={"bold"}>Proceed</Box>
    </Box>
       
    </div>

      ) : (
        <div>
           
        <Box   margin={"10px"}  display={"flex"} textAlign={"center"}  justifyContent={"space-around"} alignItems={"center"}>
      
       
       
        <Box w={"100px"} display={"flex"} >

<Box><Text fontSize={"15px"} fontWeight={"bold"}>Interest</Text></Box>
<Box> <NumberInput ml={7}>

<NumberInputStepper>
<NumberIncrementStepper onClick={()=>setOrder("asc")} />
<NumberDecrementStepper onClick={()=>setOrder("desc")} />
</NumberInputStepper>
</NumberInput></Box>


</Box>
      
        <Box display={"flex"} justifyContent={"space-around"}>

        <Box><Text fontSize={"15px"} fontWeight={"bold"}>EMI</Text></Box>
       <Box> <NumberInput ml={7}>
       
       <NumberInputStepper>
         <NumberIncrementStepper />
         <NumberDecrementStepper />
       </NumberInputStepper>
     </NumberInput></Box>


        </Box>
       
       
    </Box>
       
    </div>
      )}
      {data.map((el)=>(<LoanCard {...el} />))}
    </div>
  );
}















