import React, { useEffect, useState } from 'react'
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, Select, TableContainer, Button, Box, Center } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../Redux/BankApplication/action'

export const Admin = () => {

    const allUsers = useSelector(store => store.bankApplicationReducer.allUsers)
    const dispatch = useDispatch()
    const [loanData, setLoanData] = useState(false)

    useEffect(() => {
        dispatch(getAllUsers())
    }, [])

    const handleLoans = () => {
        setLoanData(true)
        console.log("working")
    }

    console.log("===", allUsers)

    return (
        <TableContainer>
            {!loanData ? <Table variant='striped' colorScheme='purple'>
                <Thead>
                    <Tr>
                        <Th>id</Th>
                        <Th>name</Th>
                        <Th>Conatct</Th>
                        <Th>Email</Th>
                        <Th>credit score</Th>
                        <Th>Loans</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        allUsers.map((el) => (
                            <Tr key={el.id}>
                                <Td>{el.id}</Td>
                                <Td>{el.fullname}</Td>
                                <Td>{el.contact}</Td>
                                <Td>{el.email}</Td>
                                <Td>{el.creditscore}</Td>
                                <Td>
                                    <Button colorScheme='blue' variant={"outline"} onClick={handleLoans}>ALL LOANS</Button>
                                </Td>
                            </Tr>
                        ))
                    }


                </Tbody>
            </Table>
                :
                <Box>
                    <Center m={"20px"}>
                        <Button colorScheme='purple' variant={'outline'} onClick={() => setLoanData(false)}>BACK</Button>
                    </Center>

                    <Table variant='striped' colorScheme='purple'>
                        <Thead>
                            <Tr>
                                <Th>user id</Th>
                                <Th>bank name</Th>
                                <Th>loan type</Th>
                                <Th>loan amount</Th>
                                <Th>loanTerm</Th>
                                <Th>loan status</Th>
                                <Th>change status</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                // loansData ===
                            }

                        </Tbody>
                    </Table>
                </Box>
            }
        </TableContainer>
    )
}
