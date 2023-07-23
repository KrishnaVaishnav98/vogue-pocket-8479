import { Button, Center, Image, ListItem, UnorderedList } from '@chakra-ui/react'
import { Box,Text } from '@chakra-ui/react'
import { useEffect, useState } from "react"
import { Link, useNavigate } from 'react-router-dom'

export const LoanCard=({image,name,amount,interest,category,extra,id})=>{
const dataTopass={
 id:id
}
console.log("idii",id)
    const [isDesktop, setDesktop] = useState(window.innerWidth > 1450);

    const updateMedia = () => {
      setDesktop(window.innerWidth > 650);
    };
  
    useEffect(() => {
      window.addEventListener("resize", updateMedia);
      return () => window.removeEventListener("resize", updateMedia);
    });
  
    
    return (
      <div style={{backgroundColor:"white"}}>
        {isDesktop ? (
          <div>
                <Box boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} margin={"10px"}  display={"flex"} textAlign={"center"}  justifyContent={"space-around"} alignItems={"center"} padding={"15px"} borderRadius={"10px"} >
            <Box w={"200px"}><Image src={image} alt={name}  /></Box>
            
            <Box w={"100px"}>Rs.{amount}</Box>
         <Box w={"100px"}>{interest}%</Box>
            <Box w={"300px"}><UnorderedList textAlign={"left"} >{extra.map((el)=>(<ListItem  >{el}</ListItem>))}</UnorderedList></Box>
            <Box> Rs.{Math.ceil(amount/36)}</Box>
            <Box>Rs. 2500</Box>
        <Link to={`/bankApplication?id=${dataTopass.id}`}>    <Button >Apply</Button></Link>
        {/* <Link to={"/bankApplication"}><Button>Apply</Button></Link> */}
        
        </Box>
          </div>
        ) : (
          <div>
            <Box padding={"15px"} borderRadius={"10px"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} margin={"10px"} textAlign={"center"}  justifyContent={"space-around"} alignItems={"center"}>
            <Box display={"flex"} textAlign={"center"}  justifyContent={"space-around"} alignItems={"center"}>
            <Box w={"200px"}><Image src={image} alt={name}  /></Box>
            <Box mt={2} w={"100px"}><Text>Interest Rate</Text><Text fontSize={"15px"} fontWeight={"bold"}>{interest}%</Text></Box>
            </Box>
            <Box display={"flex"} textAlign={"center"}  justifyContent={"space-around"} alignItems={"center"}>
            <Box mt={2} w={"100px"}><Text>Loan Amount</Text><Text fontSize={"15px"} fontWeight={"bold"}>Rs.{amount}</Text></Box>
            <Box mt={2} w={"100px"}><Text>EMI</Text><Text fontSize={"15px"} fontWeight={"bold"}>Rs.{Math.ceil(amount/36)}</Text></Box>
            <Link to={`/bankApplication?id=${dataTopass.id}`}>    <Button >Apply</Button></Link>
            </Box>
            </Box>
          </div>
        )}
      </div>
    );


    
       
        
       
    
}

