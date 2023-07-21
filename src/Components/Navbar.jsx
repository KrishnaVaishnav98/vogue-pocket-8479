import {
  Button,
  Box,
  HStack,
  Flex,
  Image,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  DrawerCloseButton,
  Input,
  DrawerFooter,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import Money_Mentor_logo from "../Images/Money_Mentor_logo.png";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";


const links = [
  { title: "Home", path: "/" },
  { title: "Product", path: "/products" },
  { title: "Company", path: "/company" },
  { title: "Support", path: "/support" },
];
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const [shouldElevate, setShouldElevate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setShouldElevate(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Flex
      w="100%"
      bgColor={"#0d0618"}
      color="white"
      justify="space-around"
      fontSize={{
        base: "15px",
        sm: "15px",
        md: "16px",
        lg: "20px",
        xl: "20px",
      }}
      alignItems="center"
      py={0}
      px={0}
      position="sticky"
      top={0}
      zIndex="sticky"
      transition="box-shadow 0.2s"
      boxShadow={shouldElevate ? "md" : "none"}
    >
      <Box
        w={{
          base: "130px",
          sm: "130px",
          md: "180px",
          lg: "180px",
          xl: "180px",
        }}
      >
        <Image src={Money_Mentor_logo} alt="logo" w="100%" />
      </Box>
      <HStack
        justify={"space-evenly"}
        spacing="30px"
        display={{
          base: "none",
          sm: "none",
          md: "flex",
          lg: "flex",
          xl: "flex",
        }}
      >
        {links.map((el) => (
          <NavLink key={el.title} to={el.path}>
            {el.title}
          </NavLink>
        ))}
      </HStack>
      <HStack
        justify={"space-evenly"}
        spacing={{
          base: "20px",
          sm: "20px",
          md: "30px",
          lg: "30px",
          xl: "30px",
        }}
      >
        <Link to="/login">Login</Link>
        <Link to="/register" color="skyblue">
          <Button
            size={{ base: "sm", sm: "sm", md: "md", lg: "md", xl: "md" }}
            colorScheme={"pink"}
          >
            Register
          </Button>
        </Link>
        <Box
          display={{
            base: "block",
            sm: "block",
            md: "none",
            lg: "none",
            xl: "none",
          }}
        >
          <GiHamburgerMenu ref={btnRef} onClick={onOpen} />
        </Box>
      </HStack>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="sm"
        width="80px"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color={"white"} />
          {/* <DrawerHeader>Create your account</DrawerHeader> */}

          <DrawerBody bgColor={"#0d0618"}>
            <UnorderedList
              listStyleType={"none"}
              spacing="30px"
              mt="50px"
              fontSize={"18px"}
            >
              <ListItem
                color="white"
                _hover={{ bgcolor: "white", fontweight: "bold" }}
                onClick={onClose}
              >
                <Link to="/">Home</Link>
              </ListItem>
              <ListItem
                color="white"
                _hover={{ bgcolor: "white", fontweight: "bold" }}
                onClick={onClose}
              >
                <Link to="/products">Products</Link>
              </ListItem>
              <ListItem
                color="white"
                _hover={{ bgcolor: "white", fontweight: "bold" }}
                onClick={onClose}
              >
                <Link to="/company">Company</Link>
              </ListItem>
              <ListItem
                color="white"
                _hover={{ bgcolor: "white", fontweight: "bold" }}
                onClick={onClose}
              >
                <Link to="/support">Support</Link>
              </ListItem>
            </UnorderedList>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Navbar;
