import React from 'react'
import { Box, FormControl, FormLabel, Text, Input, Center, Button } from '@chakra-ui/react'
import { useSelector } from 'react-redux'

export const PersonalInfoStep = ({ userInfo, handleChange, onNext }) => {

    const currentUser = useSelector(store => store.authReducer.currentUser)

    return (
        <Center>
            <Box w={{ base: "250px", sm: "200px", md: "500px", lg: "600px", xl: "700px" }} >
                <Text mt={{ base: "50px", sm: "50px", lg: "0px", md: "0px", xl: "0px" }} fontSize={"20px"} fontWeight={"bold"} color={"#283593"}>Personal Information</Text>

                <FormControl isRequired m={"20px"}>
                    <FormLabel>Full Name</FormLabel>
                    <Input type='text' placeholder='Full Name' name={"fullname"} value={currentUser.fullname} onChange={handleChange} />
                </FormControl>
                <FormControl isRequired m={"20px"}>
                    <FormLabel>Contact Number</FormLabel>
                    <Input type='tel' placeholder='Contact Number' name={"contact"} value={currentUser.contact} onChange={handleChange} />
                </FormControl>
                <FormControl isRequired m={"20px"}>
                    <FormLabel>Email</FormLabel>
                    <Input type='email' placeholder='Email' name={"email"} value={currentUser.email} onChange={handleChange} />
                </FormControl>
                <FormControl isRequired m={"20px"}>
                    <FormLabel>Address</FormLabel>
                    <Input type='text' placeholder='Address' name={"address"} value={currentUser.address} onChange={handleChange} />
                </FormControl>
                <Button variant={'outline'} onClick={onNext} colorScheme='blue' >Next</Button>
            </Box>
        </Center >
    )
}
