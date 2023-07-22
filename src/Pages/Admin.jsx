import React, { useEffect } from 'react'
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, Select, TableContainer, } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../Redux/BankApplication/action'

export const Admin = () => {

    const allUsers = useSelector(store => store.bankApplicationReducer.allUsers)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllUsers())
    }, [])

    console.log("===", allUsers)

    return (
        <TableContainer>
            <Table variant='striped' colorScheme='purple'>
                <Thead>
                    <Tr>
                        <Th>id</Th>
                        <Th>name</Th>
                        <Th>Conatct</Th>
                        <Th>Email</Th>
                        <Th>loan type</Th>
                        <Th>STATUS</Th>
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
                                <Td>{el.loans.loanType}</Td>
                                <Td>
                                    <Select placeholder='Select option'>
                                        <option value='pending'>Pending</option>
                                        <option value='approved'>Approved</option>
                                        <option value='rejected'>Reject</option>
                                    </Select>
                                </Td>
                            </Tr>
                        ))
                    }


                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th>id</Th>
                        <Th>name</Th>
                        <Th>Conatct</Th>
                        <Th>Email</Th>
                        <Th>Loan Tupe</Th>
                        <Th>Status</Th>
                    </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
    )
}
