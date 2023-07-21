import axios from "axios"
import { Box ,Button, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper} from "@chakra-ui/react"
import { Text } from '@chakra-ui/react'
import { useEffect, useState } from "react"
import { LoanCard } from "../Components/LoanCard"

import { SideBar } from "./SideBar"




export const Product=()=>{
    const [data,setData]=useState([])
    useEffect(()=>{
        axios
        .get("https://money-mentor.onrender.com/Banks")
        .then((res)=>{
              
            setData(res.data)
        })
    },[])
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
<NumberIncrementStepper  />
<NumberDecrementStepper />
</NumberInputStepper>
</NumberInput></Box>


</Box>
        <Box w={"300px"} fontSize={"15px"} fontWeight={"bold"}>Prepayment Charges</Box>
        <Box display={"flex"} justifyContent={"space-around"}>

        <Box><Text fontSize={"15px"} fontWeight={"bold"}>EMI</Text></Box>
       <Box> <NumberInput ml={7}>
       
       <NumberInputStepper>
         <NumberIncrementStepper />
         <NumberDecrementStepper />
       </NumberInputStepper>
     </NumberInput></Box>


        </Box>
        <Box fontSize={"15px"} fontWeight={"bold"}>Processing Fee</Box>
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
<NumberIncrementStepper  />
<NumberDecrementStepper />
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















//     return(
//         <div>
           
//             <Box   margin={"10px"}  display={"flex"} textAlign={"center"}  justifyContent={"space-around"} alignItems={"center"}>
//             <Box w={"200px"}>Bank-Name</Box>
           
//             <Box w={"100px"}>Loan Amount</Box>
//             <Box w={"100px"} display={"flex"} >

// <Box><Text>Interest</Text></Box>
// <Box> <NumberInput ml={7}>

// <NumberInputStepper>
//  <NumberIncrementStepper  />
//  <NumberDecrementStepper />
// </NumberInputStepper>
// </NumberInput></Box>


// </Box>
//             <Box w={"300px"}>Prepayment Charges</Box>
//             <Box display={"flex"} justifyContent={"space-around"}>

//             <Box><Text>EMI</Text></Box>
//            <Box> <NumberInput ml={7}>
           
//            <NumberInputStepper>
//              <NumberIncrementStepper />
//              <NumberDecrementStepper />
//            </NumberInputStepper>
//          </NumberInput></Box>
  

//             </Box>
//             <Box>Processing Fee</Box>
//             <Box>Proceed</Box>
//         </Box>
//            {data.map((el)=>(<LoanCard {...el} />))}
//         </div>
//     )
// }