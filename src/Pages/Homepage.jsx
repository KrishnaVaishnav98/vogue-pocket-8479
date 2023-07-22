import {
  Box,
  Button,
  Flex,
  Heading,
  Highlight,
  HStack,
  Image,
  List,
  ListIcon,
  ListItem,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  Stepper,
  StepSeparator,
  StepStatus,
  StepTitle,
  Text,
  useSteps,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import purplebg from "../Images/purplebg.jpg";
import "aos/dist/aos.css";
import Aos from "aos";
import { GiReceiveMoney } from "react-icons/gi";
import money from "../Images/money.png";
import styled, { keyframes } from "styled-components";
import family_2 from "../Images/family_2.jpg";
import family_1 from "../Images/family_1.jpg";
import { BsFillCheckCircleFill } from "react-icons/bs";
import {Link} from "react-router-dom";

const steps = [
  { title: "Apply free of charge & without obligation", description: " " },
  { title: "Compare The Offer You Choose on Platformond", description: "" },
  { title: "Choose The Best Offer That You Need", description: "" },
];

const Homepage = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });
  return (
    <Box>
      <Flex
        p="20px"
        bgImage={purplebg}
        align={"center"}
        m="auto"
        justify="space-around"
        flexDirection={{
          base: "column",
          sm: "column",
          md: "row",
          lg: "row",
          xl: "row",
        }}
      >
        <VStack
          p="20px"
          w={{
            base: "300px",
            sm: "300px",
            md: "600px",
            lg: "600px",
            xl: "600px",
          }}
          textAlign={"justify"}
          spacing="30px"
        >
          <Heading
            textAlign={{
              base: "center",
              sm: "center",
              md: "left",
              lg: "left",
              xl: "left",
            }}
            fontSize={{
              base: "25px",
              sm: "25px",
              md: "30px",
              lg: "40px",
              xl: "50px",
            }}
            color={"white"}
          >
            Compare Loans From Several Banks Find The Cheapest Loan
          </Heading>
          <Link to='/verification'>
          <Button
            rightIcon={<GiReceiveMoney size="25px" />}
            colorScheme={"pink"}
            borderRadius={"20px"}
            size={{ base: "md", sm: "md", md: "lg", lg: "lg", xl: "lg" }}
          >
            Apply Now
          </Button>
          </Link>
        </VStack>

        <Box
          w={{
            base: "300px",
            sm: "300px",
            md: "500px",
            lg: "600px",
            xl: "600px",
          }}
          data-aos="fade-left"
        >
          <FloatingImage src={money} />
        </Box>
      </Flex>
      {/* part-2 ------------------------------------------------------- */}

      <VStack
        w={{
          base: "300px",
          sm: "300px",
          md: "500px",
          lg: "500px",
          xl: "500px",
        }}
        m="auto"
        mt={"50px"}
      >
        <Heading data-aos="zoom-in-up" size="md" color={"orange"}>
          How It Works
        </Heading>
        <Heading
          data-aos="zoom-in-up"
          fontSize={{
            base: "28px",
            sm: "35px",
            md: "40px",
            lg: "40px",
            xl: "40px",
          }}
        >
          <Highlight
            query={["The", "Cheapest"]}
            styles={{
              px: "2",
              py: "1",
              color: "purple",
            }}
          >
            We Help You to Find The Cheapest Loan
          </Highlight>
        </Heading>
      </VStack>

      <Flex
        p="20px"
        justifyContent={{
          base: "center",
          sm: "center",
          md: "center",
          lg: "space-evenly",
          xl: "space-evenly",
        }}
        flex
        m="auto"
        align={"center"}
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        }}
      >
        <Stepper
          data-aos="zoom-in-right"
          colorScheme={"purple"}
          size={"lg"}
          fontSize={{
            base: "25px",
            sm: "25px",
            md: "25px",
            lg: "25px",
            xl: "30px",
          }}
          index={activeStep}
          orientation="vertical"
          height="400px"
          gap="0"
        >
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator size="lg">
                <StepStatus
                  complete={<StepIcon />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>

              <Box
                flexShrink="0"
                w={{
                  base: "230px",
                  sm: "290px",
                  md: "450px",
                  lg: "350px",
                  xl: "400px",
                }}
              >
                <StepTitle
                  textAlign="left"
                  fontSize={{
                    base: "21px",
                    sm: "21px",
                    md: "30px",
                    lg: "25px",
                    xl: "30px",
                  }}
                >
                  {step.title}
                </StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </Box>

              <StepSeparator />
            </Step>
          ))}
        </Stepper>

        <Box
          mt="20px"
          w={{
            base: "300px",
            sm: "300px",
            md: "600px",
            lg: "500px",
            xl: "600px",
          }}
          borderRadius={"30px"}
          data-aos="fade-left"
        >
          <Image
            w="100%"
            borderRadius={"30px"}
            src={
              "https://i.pinimg.com/originals/e8/11/05/e811058549f7de3ab1b87d8ce59d94e2.gif"
            }
            // filter= "drop-shadow(2px 8px 8px #000)"
            alt="skeleton"
          />
        </Box>
      </Flex>

      {/* Part-3--------------------------------------------------------------------- */}

      <Box m="auto" mt="150px">
        <Heading
          mb="70px"
          fontSize={{
            base: "30px",
            sm: "30px",
            md: "35px",
            lg: "35px",
            xl: "40px",
          }}
          data-aos="zoom-in"
        >
          We have Helped More Than 10,000 Users
        </Heading>
 {/* image-1--------------------------------- */}
        <Box
          data-aos="zoom-in"
          m="auto"
          w={{
            base: "500px",
            sm: "500px",
            md: "650px",
            lg: "800px",
            xl: "950px",
          }}

          display={{base:"none", sm:"none", md:"block", lg:"block", xl:"block"}}
          borderRadius={"20px"}
          boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
        >
          <Image
            borderRadius={"20px"}
            w="100%"
            src={family_2}
            alt="Happy family"
          />
        </Box>

        {/* image-2--------------------------- */}

        <Box
          data-aos="zoom-in"
          m="auto"
          w={{
            base: "300px",
            sm: "300px",
            // md: "650px",
            // lg: "800px",
            // xl: "950px",
          }}

          display={{base:"block", sm:"block", md:"none", lg:"none", xl:"none"}}
          borderRadius={"20px"}
          boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
        >
          <Image
            borderRadius={"20px"}
            w="100%"
            src={family_1}
            alt="Happy family"
          />
        </Box>
        <HStack
          data-aos="zoom-in"
          p="10px"
          m="auto"
          gap={{base:"20px", sm:"20px", md:"40px", lg:"20px", xl:"20px"}}
          justifyContent={{base:"center", sm:"center", md:"space-around", lg:"space-evenly", xl:"space-evenly" }}
          flexDirection={{base:"column", sm:"column", md:"row", lg:"row", xl:"row"}}
          w="80%"
        >
          <Box
            padding="30px"
            borderRadius={"10px"}
            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
            backgroundColor={"white"}
            left="200"
            display={{
              base: "flex",
              sm: "flex",
              md: "block",
              lg: "block",
              xl: "block",
            }}
            flexDirection={{
              base: "column",
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row",
            }}

            // box-shadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
          >
            <List spacing={3} textAlign="left" fontSize={"16px"} color="gray">
              <ListItem>
                <ListIcon
                  as={BsFillCheckCircleFill}
                  color="#6528F7"
                  fontSize={"20px"}
                />
                Offers from several banks
              </ListItem>
              <ListItem>
                <ListIcon
                  as={BsFillCheckCircleFill}
                  color="#6528F7"
                  fontSize={"20px"}
                />
                Free & no obligation
              </ListItem>
              <ListItem>
                <ListIcon
                  as={BsFillCheckCircleFill}
                  color="#6528F7"
                  fontSize={"20px"}
                />
                Compare safely and securely
              </ListItem>
              {/* You can also use custom icons from react-icons */}
              <ListItem>
                <ListIcon
                  as={BsFillCheckCircleFill}
                  color="#6528F7"
                  fontSize={"20px"}
                />
                Offer within a few hours
              </ListItem>
            </List>
          </Box>

          <Box
            fontSize={{
              base: "15px",
              sm: "15px",
              md: "15px",
              lg: "17px",
              xl: "17px",
            }}
            w={{base:"300px", sm:"300px", md:"500px", lg:"550px", xl:"550px"}}
            textAlign={"left"}
            color="blackAlpha.700"
          >
            <Text>
              Compare multiple banks with just one non-binding application. We
              save you the hassle of checking the price at each bank.
            </Text>
            <br />
            <Text>
              It takes 2 min. To fill out the application, you immediately get
              quotes from banks and can choose the best quote.
            </Text>
            <br />
            <Text>
              We save you not only time, but in many cases also many thousands
              of kroner.
            </Text>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
};

export default Homepage;

const floatingAnimation = keyframes`
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, 20px); /* Adjust the distance and direction of the float */
  }
`;
const FloatingImage = styled.img`
  position: relative;
  animation: ${floatingAnimation} 3s infinite ease-in-out;
  filter: drop-shadow(16px 16px 22px #000);
`;
