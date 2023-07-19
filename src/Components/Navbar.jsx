import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Flex, HStack } from "@chakra-ui/layout";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import Money_Mentor_logo from "../Images/Money_Mentor_logo.png";
const links = [
  { title: "Home", path: "/" },
  { title: "Product", path: "/products" },
  { title: "Company", path: "/company" },
  { title: "Support", path: "/support" },
];
const Navbar = () => {
  return (
    <Flex
      w="100%"
      bgColor={"#0d0618"}
      color="white"
      justify="space-around"
      fontSize={"20px"}
    >
      <Box w={"180px"}>
        <Image src={Money_Mentor_logo} alt="logo" w="100%" />
      </Box>

      <HStack justify={"space-evenly"} spacing="30px">
        {links.map((el) => (
          <NavLink key={el.title} to={el.path}>
            {el.title}
          </NavLink>
        ))}
      </HStack>

      <HStack justify={"space-evenly"} spacing="30px">
        <Link to="/login">Login</Link>
        <Link to="/register" color="skyblue">
          <Button
            padding="5px 12px 5px 12px"
            border={"1px solid skyblue"}
            borderRadius="20px"
            color="skyblue   "
          >
            Register
          </Button>
        </Link>
      </HStack>
    </Flex>
  );
};

export default Navbar;
