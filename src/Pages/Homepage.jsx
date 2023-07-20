import { Box, Button, Flex, Heading, Image, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import purplebg from '../Images/purplebg.jpg'
import 'aos/dist/aos.css';
import Aos from "aos";
import {GiReceiveMoney} from 'react-icons/gi'

const Homepage = () => {

  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <Box bgImage={purplebg} pt="50px">
      <Flex align={"center"} m="auto" justify="space-around" w="90%">
          
          <VStack w="600px" textAlign={"left"} spacing="30px" >
            <Heading fontSize={"50px"} color={"white"}>Compare Loans From Several Banks Find The Cheapest Loan</Heading>
            <Button rightIcon={<GiReceiveMoney size="25px" />} colorScheme={"gray"} borderRadius={"20px"} size={"lg"} >Apply Now</Button>

          </VStack>

        <Box data-aos="fade-left">

      <Image src={"https://html-template.spider-themes.net/banca/img/banner/person-2.png"} />
        </Box>
      </Flex>
    </Box>
  )
}

export default Homepage