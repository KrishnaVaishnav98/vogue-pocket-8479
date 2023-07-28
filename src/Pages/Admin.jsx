import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Select,
  TableContainer,
  Button,
  Box,
  Center,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../Redux/BankApplication/action";
import Swal from "sweetalert2";

export const Admin = () => {
  //   const allUsers = useSelector(
  //     (store) => store.bankApplicationReducer.allUsers
  //   );
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://money-mentor.onrender.com/LoginUsers"
        );
        const data = await response.json();
        console.log(data);
        setAllUsers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const dispatch = useDispatch();
  const [loanData, setLoanData] = useState(false);
  const [loan, setLoan] = useState([]);
  const [data, setData] = useState(loan);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [pId,setPid]=useState(0);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const handleLoans = (id) => {
    setLoanData(true);
    setPid(id);
    let filterData = allUsers.filter((el) => el.id === id);
    setLoan(filterData[0].loans);
    console.log(filterData[0].loans);
  };

  //   console.log("===", allUsers);

  // State to store the selected status for each loan
  const [loanStatuses, setLoanStatuses] = useState([]);

  useEffect(() => {
    // Initialize the selected status for each loan
    setLoanStatuses(loan.map((loan) => ({ id: loan.id, status: loan.status })));
  }, [loan]);

  const handleChange = (event, id) => {
    const newStatus = event.target.value;
    setLoanStatuses((prevStatuses) =>
      prevStatuses.map((loan) =>
        loan.id === id ? { ...loan, status: newStatus } : loan
      )
    );
  };

  const handleUpdateStatus = (id) => {
    const updatedLoanData = {
      ...data,
      loans: loan.map((loan) => {
        if (loan.id === id) {
          const selectedStatus = loanStatuses.find((status) => status.id === id).status;
          return {
            ...loan,
            status: selectedStatus,
          };
        }
        return loan;
      }),
    };
    setData(updatedLoanData);
    // API call to update the data on the server.
    fetch(`https://money-mentor.onrender.com/LoginUsers/${pId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedLoanData),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response from the server if needed
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Status has been updated.',
            showConfirmButton: false,
            timer: 1500
          })
          console.log("Updated data from server:", data);
        })
        .catch((error) => {
          console.error("Error updating data:", error);
        });
  };

  return (
    <TableContainer>
      {!loanData ? (
        <Table variant="striped" colorScheme="purple">
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
            {allUsers.map((el) => (
              <Tr key={el.id}>
                <Td>{el.id}</Td>
                <Td>{el.fullname}</Td>
                <Td>{el.contact}</Td>
                <Td>{el.email}</Td>
                <Td>{el.creditscore}</Td>
                <Td>
                  <Button
                    colorScheme="blue"
                    variant={"outline"}
                    onClick={() => handleLoans(el.id)}
                  >
                    ALL LOANS
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      ) : (
        <Box>
          <Center m={"20px"}>
            <Button
              colorScheme="purple"
              variant={"outline"}
              onClick={() => setLoanData(false)}
            >
              BACK
            </Button>
          </Center>

          <Table variant="striped" colorScheme="purple">
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
              {loan.map((el) => (
                <Tr key={el.id}>
                  <Td>{el.id}</Td>
                  <Td>{el.bankname}</Td>
                  <Td>{el.loanType}</Td>
                  <Td>{el.loanAmount}</Td>
                  <Td>{el.loanTerm}</Td>
                  <Td>
                    <Select
                      placeholder="Select option"
                      value={selectedStatus.status}
                      onChange={(e) => handleChange(e, el.id)}
                    >
                      <option value="pending">Pending</option>
                      <option value="rejected">Reject</option>
                      <option value="accepted">Accept</option>
                    </Select>
                  </Td>
                  <Td>
                    <Button
                      colorScheme="blue"
                      variant={"outline"}
                      onClick={() => handleUpdateStatus(el.id)}
                    >
                      UPDATE
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      )}
    </TableContainer>
  );
};
