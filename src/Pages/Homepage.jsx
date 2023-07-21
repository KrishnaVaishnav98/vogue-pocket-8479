import {
  Box,
  Button,
  Flex,
  Heading,
  Highlight,
  HStack,
  Image,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  Stepper,
  StepSeparator,
  StepStatus,
  StepTitle,
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
      <Flex bgImage={purplebg} align={"center"} m="auto" justify="space-around">
        <VStack w="600px" textAlign={"left"} spacing="30px">
          <Heading fontSize={"50px"} color={"white"}>
            Compare Loans From Several Banks Find The Cheapest Loan
          </Heading>
          <Button
            rightIcon={<GiReceiveMoney size="25px" />}
            colorScheme={"pink"}
            borderRadius={"20px"}
            size={"lg"}
          >
            Apply Now
          </Button>
        </VStack>

        <Box w="600px" data-aos="fade-left">
          <FloatingImage src={money} />
        </Box>
      </Flex>
      {/* part-2 ------------------------------------------------------- */}

      <VStack w="500px" m="auto" pt={"30px"}>
        <Heading size="md" color={"orange"}>
          How It Works
        </Heading>
        <Heading>
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

      <HStack justifyContent={"space-evenly"} m="auto" align={"center"}>
        <Stepper
          colorScheme={"purple"}
          size="lg"
          fontSize={"30px"}
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

              <Box flexShrink="0" w="400px">
                <StepTitle textAlign="left" fontSize={"26px"}>
                  {step.title}
                </StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </Box>

              <StepSeparator />
            </Step>
          ))}
        </Stepper>

        <Box w="600px" borderRadius={"30px"}>
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
      </HStack>
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
