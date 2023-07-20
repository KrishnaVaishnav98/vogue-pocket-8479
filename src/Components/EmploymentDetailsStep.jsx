import React from 'react';
import { Box, FormControl, FormLabel, Text, Input, Center, Button, HStack } from '@chakra-ui/react';

export const EmploymentDetailsStep = ({ userInfo, handleChange, onNext, onPrevious }) => {
    return (
        <Center>
            <Box w="600px" >

                <Text fontSize={"20px"} fontWeight={"bold"} color={"#283593"}>Employment Details</Text>
                <FormControl isRequired m={"20px"}>
                    <FormLabel>Employer</FormLabel>
                    <Input type='text' placeholder='Employer' name={"employer"} value={userInfo.employer} onChange={handleChange} />
                </FormControl>

                <FormControl isRequired m={"20px"}>
                    <FormLabel>Job Title</FormLabel>
                    <Input type='text' placeholder='Job Title' name={"jobTitle"} value={userInfo.jobTitle} onChange={handleChange} />
                </FormControl>

                <FormControl isRequired m={"20px"}>
                    <FormLabel>Years Of Employment</FormLabel>
                    <Input type='text' placeholder='Years Of Employment' name={"yearsOfEmployment"} value={userInfo.yearsOfEmployment} onChange={handleChange} />
                </FormControl>

                <FormControl isRequired m={"20px"}>
                    <FormLabel>Monthly Income</FormLabel>
                    <Input type='text' placeholder='Monthly Income' name={"monthlyIncome"} value={userInfo.monthlyIncome} onChange={handleChange} />
                </FormControl>

                <HStack display={"flex"} justifyContent={"space-around"}>
                    <Button variant={'outline'} onClick={onPrevious} colorScheme='blue' >Prev</Button>
                    <Button variant={'outline'} onClick={onNext} colorScheme='blue' >Next</Button>
                </HStack>
            </Box>
        </Center >
    )
}
