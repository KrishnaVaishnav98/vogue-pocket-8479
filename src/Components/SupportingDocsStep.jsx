import React, { useState } from 'react'
import { Box, HStack, FormControl, FormLabel, Text, Input, Center, Button, UnorderedList, ListItem, OrderedList } from '@chakra-ui/react';

export const SupportingDocsStep = ({ userInfo, handleFileChange, onNext, onPrevious }) => {

  const [fileNames, setFileNames] = useState({
    identificationProof: '',
    incomeProof: '',
    addressProof: '',
  });


  const handleFileNameChange = (name, fileName) => {
    setFileNames((prevFileNames) => ({ ...prevFileNames, [name]: fileName }));
  };

  return (
    <Center>
      <Box w="800px" >

        <Text fontSize={"20px"} fontWeight={"bold"} color={"#283593"}>Supporting Documents</Text>

        <FormControl isRequired m="20px">
          <FormLabel>Identification Proof</FormLabel>
          <Input
            type="file"
            placeholder="Identification Proof"
            name="identificationProof"
            value=""
            onChange={(e) => {
              handleFileChange(e);
              handleFileNameChange('identificationProof', e.target.files[0]?.name || '');
            }}
          />
          {fileNames.identificationProof && <Text>{fileNames.identificationProof}</Text>}
        </FormControl>

        <FormControl isRequired m="20px">
          <FormLabel>Income Proof</FormLabel>
          <Input
            type="file"
            placeholder="Income Proof"
            name="incomeProof"
            value=""
            onChange={(e) => {
              handleFileChange(e);
              handleFileNameChange('incomeProof', e.target.files[0]?.name || '');
            }}
          />
          {fileNames.incomeProof && <Text>{fileNames.incomeProof}</Text>}
        </FormControl>

        <FormControl isRequired m="20px">
          <FormLabel>Address Proof</FormLabel>
          <Input
            type="file"
            placeholder="Address Proof"
            name="addressProof"
            value=""
            onChange={(e) => {
              handleFileChange(e);
              handleFileNameChange('addressProof', e.target.files[0]?.name || '');
            }}
          />
          {fileNames.addressProof && <Text>{fileNames.addressProof}</Text>}
        </FormControl>

        <Text color={"red"} mb={"20px"} > </Text>


        <OrderedList color={'red.600'} textAlign={'left'}  >

          <HStack w="1000px" mb={"50px"} >

            <ListItem w="250px" >Identification Proof:
              <UnorderedList textAlign={'left'} color={'black'}>
                <ListItem >Aadhaar Card </ListItem>
                <ListItem>Voter ID Card</ListItem>
                <ListItem>PAN Card </ListItem>
                <ListItem>Driving License</ListItem>
              </UnorderedList>
            </ListItem>

            <ListItem w="250px" mt={"20px"}>Income Proof:
              <UnorderedList textAlign={'left'} color={'black'}>
                <ListItem >Salary slips</ListItem>
                <ListItem>Form 16 </ListItem>
                <ListItem>Income certificate  </ListItem>
                <ListItem>Income tax returns (ITR) for the last few years</ListItem>
              </UnorderedList>
            </ListItem>

            <ListItem w="450px" ml={"20px"} mt={"20px"}>Identification Proof:
              <UnorderedList textAlign={'left'} color={'black'}>
                <ListItem >Aadhaar Card </ListItem>
                <ListItem>Driving License</ListItem>
                <ListItem>Voter ID Card</ListItem>
                <ListItem>Utility bills (electricity bill, water bill, gas bill, etc.) in the applicant's name</ListItem>
              </UnorderedList>
            </ListItem>

          </HStack>

        </OrderedList>

        <HStack display={"flex"} justifyContent={"space-around"}>
          <Button variant={'outline'} onClick={onPrevious} colorScheme='blue' >Prev</Button>
          <Button variant={'outline'} onClick={onNext} colorScheme='blue' >Next</Button>
        </HStack>

      </Box >
    </Center >
  )
}




