import React from 'react'

export const LoanSpecificationsStep = () => {
    return (
        <Center>
        <Box w="600px" >

            <Text fontSize={"20px"} fontWeight={"bold"} color={"#283593"}>Financial Information</Text>

            <FormControl isRequired m={"20px"}>
                <FormLabel>Full Name</FormLabel>
                <Input type='text' placeholder='Full Name' name={"fullname"} value={userInfo.fullName} onChange={handleChange} />
            </FormControl>

            <FormControl isRequired m={"20px"}>
                <FormLabel>Contact Number</FormLabel>
                <Input type='tel' placeholder='Contact Number' name={"contactNumber"} value={userInfo.contactNumber} onChange={handleChange} />
            </FormControl>

            <FormControl isRequired m={"20px"}>
                <FormLabel>Email</FormLabel>
                <Input type='email' placeholder='Email' name={"email"} value={userInfo.email} onChange={handleChange} />
            </FormControl>

            <FormControl isRequired m={"20px"}>
                <FormLabel>Address</FormLabel>
                <Input type='text' placeholder='Address' name={"address"} value={userInfo.address} onChange={handleChange} />
            </FormControl>

            <Button variant={'outline'} onClick={onPrevious} colorScheme='blue' >Prev</Button>
            <Button variant={'outline'} onClick={onNext} colorScheme='blue' >Next</Button>
        </Box>
    </Center >
    )
}
