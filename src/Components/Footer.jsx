import {
  Box,
  Center,
  Grid,
  Heading,
  HStack,
  Image,
  ListItem,
  Spacer,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import Money_Mentor_logo from "../Images/Money_Mentor_logo.png";
import footer_bg from "../Images/footer_bg.jpg";
import { BsFacebook, BsTwitter, BsPinterest } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Box bgImage={footer_bg} color="white" p="30px">
      <Center mb="40px">
        <Box w="300px">
          <Image src={Money_Mentor_logo} alt="logo" />
        </Box>
      </Center>
      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
        gap="20px"

         
        w={{
          base: "30px",
          sm: "300px",
          md: "700px",
          lg: "900px",
          xl: "1200px",
        }}
        justifyContent={"center"}
        m="auto"
      >
        <VStack
        display={{base:"none", sm:"none", md:"block", lg:"block", xl:"block"}}
          align={"center"}
          data-aos="fade-up"
          data-aos-duration="1000"
          textAlign={"left"}
          m="auto"
        >
          <Heading textAlign={"left"} fontSize={"25px"}>
            We're on a mission.
          </Heading>

          <Text w="250px">
            At Money Mentor, we're using cutting-edge technology to transform
            the industry and deliver financial services that actually work for
            you.
          </Text>
        </VStack>

        <VStack
          align={"center"}
          textAlign="left"
          fontSize={"17px"}
          m="auto"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Heading size="md">Company</Heading>

          <UnorderedList listStyleType={"none"} spacing="18px">
            <ListItem>About Us</ListItem>
            <ListItem>Recognition</ListItem>
            <ListItem>Executive Team</ListItem>
            <ListItem>Careers</ListItem>
          </UnorderedList>
        </VStack>

        <VStack
          align={"center"}
          fontSize={"17px"}
          data-aos="fade-up"
          m="auto"
          data-aos-duration="1000"
        >
          <Heading textAlign={"left"} size="md">
            Products
          </Heading>
          <UnorderedList listStyleType={"none"} spacing="18px">
            <ListItem>Business Loans | Main</ListItem>
            <ListItem>Loan Calculator</ListItem>
            <ListItem>Refer a Friend</ListItem>
            <ListItem>Partner Program</ListItem>
          </UnorderedList>
        </VStack>

        <VStack
        display={{base:"none", sm:"none", md:"block", lg:"block", xl:"block"}}
          align={"center"}
          fontSize={"17px"}
          data-aos="fade-up"
          m="auto"
          data-aos-duration="1000"
        >
          <Heading textAlign={"center"} size="md">
            Help
          </Heading>
          <UnorderedList listStyleType={"none"} spacing="18px">
            <ListItem>Customer Care</ListItem>
            <ListItem>Recognition</ListItem>
            <ListItem>Security Center</ListItem>
            <ListItem>Blog</ListItem>
          </UnorderedList>
        </VStack>
      </Grid>

      <Center mt="50px">
        <HStack fontSize={"30px"} spacing={"30px"}>
          <BsFacebook />
          <BsTwitter />
          <BsPinterest />
          <GrLinkedinOption />
        </HStack>
      </Center>

      <Center pt="20px">
        <Text>Copyright© 2023. Privecy | Term of Use</Text>
      </Center>
    </Box>
  );
};

export default Footer;
