// import { Image } from "@chakra-ui/image";
// import { Box } from "@chakra-ui/layout";
// import Allabad from "../Images/Allabad.jpg";
// import andra from "../Images/andra.jpg";
// import axis from "../Images/axis.jpg";
// import Bandhan_Bank from "../Images/Bandhan_Bank.jpg";
// import bank_of_maharashtra from "../Images/bank_of_maharashtra.jpg";
// import bob from "./bob.png";
// import boi from "../Images/boi.jpg";
// import canara_bank from "./canara_bank.jpeg";
// import central_bank_of_india from "./central_bank_of_india.png";
// import cooperation_bank from "./corporation_bank.jpg";
// import dena_bank from "../Images/dena_bank.jpg";
// import federal_bank from "../Images/federal_bank.png";
// import hdfc from "../Images/hdfc.jpg";
// import hsbc from "../Images/hsbc.png";
// import ICICI from "../Images/ICICI.jpg";
// import idbi from "../Images/idbi.jpg";
// import indian_bank from "../Images/indian_bank.jpg";
// import indusind from "../Images/indusind.png";
// import karnataka_bank from "../Images/karnataka_bank.jpg";
// import kotak from "../Images/kotak.png";
// import "aos/dist/aos.css";
// import Aos from "aos";
// import { useEffect } from "react";

// export const Banks = [
//   <Box w="150px" borderRadius="20px" data-aos="zoom-in-up">
//     <Image
//       src={karnataka_bank}
//       role="presentation"
//       w="100%"
//       borderRadius="20px"
//       data-aos="zoom-in-up"
//     />
//     ,
//   </Box>,

//   <Box w="150px" borderRadius="20px" data-aos="zoom-in-up">
//     <Image
//       src={kotak}
//       role="presentation"
//       w="100%"
//       borderRadius="20px"
//       data-aos="zoom-in-up"
//     />
//   </Box>,

//   <Box w="150px" borderRadius="20px" data-aos="zoom-in-up">
//     <Image
//       src={indusind}
//       role="presentation"
//       w="100%"
//       borderRadius="20px"
//       data-aos="zoom-in-up"
//     />
//   </Box>,
//   <Box w="150px" borderRadius="20px" data-aos="zoom-in-up">
//     <Image
//       src={indian_bank}
//       role="presentation"
//       w="100%"
//       borderRadius="20px"
//       data-aos="zoom-in-up"
//     />
//   </Box>,
//   <Box w="150px" borderRadius="20px" data-aos="zoom-in-up">
//     <Image
//       src={idbi}
//       role="presentation"
//       w="100%"
//       borderRadius="20px"
//       data-aos="zoom-in-up"
//     />
//   </Box>,
//   <Box w="150px" borderRadius="20px" data-aos="zoom-in-up">
//     <Image
//       src={ICICI}
//       role="presentation"
//       w="100%"
//       borderRadius="20px"
//       data-aos="zoom-in-up"
//     />
//   </Box>,
//   <Box w="150px" borderRadius="20px" data-aos="zoom-in-up">
//     <Image
//       src={hsbc}
//       role="presentation"
//       w="100%"
//       borderRadius="20px"
//       data-aos="zoom-in-up"
//     />
//   </Box>,
//   <Box w="150px" borderRadius="20px" data-aos="zoom-in-up">
//     <Image
//       src={hdfc}
//       role="presentation"
//       w="100%"
//       borderRadius="20px"
//       data-aos="zoom-in-up"
//     />
//   </Box>,
//   <Box w="150px" borderRadius="20px" data-aos="zoom-in-up">
//     <Image
//       src={federal_bank}
//       role="presentation"
//       w="100%"
//       borderRadius="20px"
//       data-aos="zoom-in-up"
//     />
//   </Box>,
//   <Box w="150px" borderRadius="20px" data-aos="zoom-in-up">
//     <Image
//       src={dena_bank}
//       role="presentation"
//       w="100%"
//       borderRadius="20px"
//       data-aos="zoom-in-up"
//     />
//   </Box>,
//   <Box w="150px" borderRadius="20px" data-aos="zoom-in-up">
//     <Image
//       src={cooperation_bank}
//       role="presentation"
//       w="100%"
//       borderRadius="20px"
//       data-aos="zoom-in-up"
//     />
//   </Box>,
//   <Box w="150px" borderRadius="20px" data-aos="zoom-in-up">
//     <Image
//       src={central_bank_of_india}
//       role="presentation"
//       w="100%"
//       borderRadius="20px"
//       data-aos="zoom-in-up"
//     />
//   </Box>,
//   <Box w="150px" borderRadius="20px" data-aos="zoom-in-up">
//     <Image
//       src={canara_bank}
//       role="presentation"
//       w="100%"
//       borderRadius="20px"
//       data-aos="zoom-in-up"
//     />
//   </Box>,
//   <Box w="150px" borderRadius="20px" data-aos="zoom-in-up">
//     <Image
//       src={boi}
//       role="presentation"
//       w="100%"
//       borderRadius="20px"
//       data-aos="zoom-in-up"
//     />
//   </Box>,
//   <Box w="150px" borderRadius="20px" data-aos="zoom-in-up">
//     <Image
//       src={bob}
//       role="presentation"
//       w="100%"
//       borderRadius="20px"
//       data-aos="zoom-in-up"
//     />
//   </Box>,
//   <Box w="150px" borderRadius="20px" data-aos="zoom-in-up">
//     <Image
//       src={bank_of_maharashtra}
//       role="presentation"
//       w="100%"
//       borderRadius="20px"
//       data-aos="zoom-in-up"
//     />
//   </Box>,
//   <Box w="150px" borderRadius="20px" data-aos="zoom-in-up">
//     <Image
//       src={Bandhan_Bank}
//       role="presentation"
//       w="100%"
//       borderRadius="20px"
//       data-aos="zoom-in-up"
//     />
//   </Box>,
//   <Box w="150px" borderRadius="20px" data-aos="zoom-in-up">
//     <Image
//       src={axis}
//       role="presentation"
//       w="100%"
//       borderRadius="20px"
//       data-aos="zoom-in-up"
//     />
//   </Box>,
//   <Box w="150px" borderRadius="20px" data-aos="zoom-in-up">
//     <Image
//       src={andra}
//       role="presentation"
//       w="100%"
//       borderRadius="20px"
//       data-aos="zoom-in-up"
//     />
//   </Box>,
//   <Box w="150px" borderRadius="20px" data-aos="zoom-in-up">
//     <Image
//       src={Allabad}
//       role="presentation"
//       w="100%"
//       borderRadius="20px"
//       data-aos="zoom-in-up"
//     />
//   </Box>,
// ];
