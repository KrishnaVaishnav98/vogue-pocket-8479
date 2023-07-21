import { Button, Center, Image, ListItem, UnorderedList } from '@chakra-ui/react'
import { Box,Text } from '@chakra-ui/react'
import { useEffect, useState } from "react"

export const LoanCard=({image,name,amount,interest,category,extra})=>{

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
                <Box boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} margin={"10px"}  display={"flex"} textAlign={"center"}  justifyContent={"space-around"} alignItems={"center"} pt={"5px"} pb={"5px"}>
            <Box w={"200px"}><Image src={image} alt={name}  /></Box>
            
            <Box w={"100px"}>Rs.{amount}</Box>
         <Box w={"100px"}>{interest}%</Box>
            <Box w={"300px"}><UnorderedList>{extra.map((el)=>(<ListItem >{el}</ListItem>))}</UnorderedList></Box>
            <Box> Rs.{Math.ceil(amount/36)}</Box>
            <Box>Rs. 2500</Box>
            <Button>Apply</Button>
        </Box>
          </div>
        ) : (
          <div>
            <Box boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} margin={"10px"} textAlign={"center"}  justifyContent={"space-around"} alignItems={"center"}>
            <Box display={"flex"} textAlign={"center"}  justifyContent={"space-around"} alignItems={"center"}>
            <Box w={"200px"}><Image src={image} alt={name}  /></Box>
            <Box mt={2} w={"100px"}><Text>Interest Rate</Text><Text fontSize={"15px"} fontWeight={"bold"}>{interest}%</Text></Box>
            </Box>
            <Box display={"flex"} textAlign={"center"}  justifyContent={"space-around"} alignItems={"center"}>
            <Box mt={2} w={"100px"}><Text>Loan Amount</Text><Text fontSize={"15px"} fontWeight={"bold"}>Rs.{amount}</Text></Box>
            <Box mt={2} w={"100px"}><Text>EMI</Text><Text fontSize={"15px"} fontWeight={"bold"}>Rs.{Math.ceil(amount/36)}</Text></Box>
            <Button>Apply</Button>
            </Box>
            </Box>
          </div>
        )}
      </div>
    );


    
       
        
       
    
}

