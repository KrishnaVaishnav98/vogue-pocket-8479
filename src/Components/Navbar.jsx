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
  Avatar,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  Spacer,
} from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import Money_Mentor_logo from "../Images/Money_Mentor_logo.png";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../Redux/store";
import { LOGIN_REQUEST } from "../Redux/Authentication/actionTypes";
import { FaSignOutAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";


const links = [
  { title: "Home", path: "/" },
  { title: "Product", path: "/verification" },
  { title: "Company", path: "/process" },
  { title: "Support", path: "/support" },
];
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const dispatch = useDispatch();
  const isAuth = useSelector((store) => store.authReducer.isAuth);
  const currentUser = useSelector((store) => store.authReducer.currentUser);

  console.log(currentUser)

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
        <Link to="/"><Image src={Money_Mentor_logo} alt="logo" w="100%" /></Link>
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

      {
        !isAuth ? (
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
            <Link to="/signup">
              <Button
                size={{ base: "sm", sm: "sm", md: "md", lg: "md", xl: "md" }}
                colorScheme={"pink"}
              >
                Sign Up
              </Button>
            </Link>
          </HStack>
        ) : (
          <HStack spacing={"30px"}>
            <Menu>
              <MenuButton>
                <Avatar
                  name={`${currentUser.firstname} ${currentUser.lastname}`}
                  bg="pink.500"
                  size={{ base: "sm", sm: "sm", md: "sm", lg: "md", xl: "md" }}
                />
              </MenuButton>

              <MenuList color="black" fontSize={"16px"}>
                <Link to="/profile">

                  <MenuItem>Profile <Spacer /> <CgProfile /></MenuItem>
                </Link>

                <Link to="/login">
                  <MenuItem onClick={() => dispatch({ type: LOGIN_REQUEST })}>
                    Logout <Spacer /> <FaSignOutAlt />
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>

            <Box
              display={{
                base: "block",
                sm: "block",
                md: "none",
                lg: "none",
                xl: "none",
              }}
            >
              <GiHamburgerMenu onClick={onOpen} />
            </Box>
          </HStack>
        )

      }

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
                <Link to="/verification">Products</Link>
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
