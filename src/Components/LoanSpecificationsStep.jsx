import React from 'react'
import { Select, Box, FormControl, FormLabel, Text, Input, Center, Button, HStack } from '@chakra-ui/react'

export const LoanSpecificationsStep = ({ userInfo, handleChange, handleSubmit, onPrevious }) => {
    return (
        <Center>
            <Box w="600px" >

                <Text fontSize={"20px"} fontWeight={"bold"} color={"#283593"}>Loan Specifications</Text>

                <FormControl isRequired m={"20px"}>
                    <FormLabel>Loan Type</FormLabel>
                    <Select placeholder=' Select Loan Type' name={"loanType"} value={userInfo.loanType} onChange={handleChange} >
                        <option value='personalLoan'>Personal Loan</option>
                        <option value='homeLoan'>Home Loan</option>
                        <option value='educationLoan'>Education Loan</option>
                        <option value='businessLoan'>Business Loan</option>
                    </Select>
                </FormControl>

                <FormControl isRequired m={"20px"}>
                    <FormLabel>Loan Amount Requested</FormLabel>
                    <Input type='number' placeholder='0 ₹' name={"loanAmount"} value={userInfo.loanAmount} onChange={handleChange} />
                </FormControl>

                <FormControl isRequired m={"20px"}>
                    <FormLabel>Desired Loan Term</FormLabel>
                    <Input type='number' placeholder='Desired Loan Term(in months)' name={"loanTerm"} value={userInfo.loanTerm} onChange={handleChange} />
                </FormControl>

                <FormControl isRequired m={"20px"}>
                    <FormLabel>Purpose of the Loan</FormLabel>
                    <Input type='text' placeholder='for example: Home Renovation' name={"loanPurpose"} value={userInfo.loanPurpose} onChange={handleChange} />
                </FormControl>

                <HStack display={"flex"} justifyContent={"space-around"}>
                    <Button variant={'outline'} onClick={onPrevious} colorScheme='blue' >Prev</Button>
                    <Button variant={'solid'} onClick={handleSubmit} colorScheme='green' >Submit</Button>
                </HStack>
            </Box>
        </Center >
    )
}
