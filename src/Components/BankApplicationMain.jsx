import React, { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Box, Center, Stepper, Step, StepIndicator, StepStatus, StepIcon, StepNumber, StepTitle, StepDescription, StepSeparator, } from '@chakra-ui/react';
import { useSteps } from '@chakra-ui/react';
import { LoanSpecificationsStep } from './LoanSpecificationsStep';
import { SupportingDocsStep } from './SupportingDocsStep';
import { EmploymentDetailsStep } from './EmploymentDetailsStep';
import { PersonalInfoStep } from './PersonalInfoStep';
import { FinancialInfoStep } from './FinancialInfoStep';

export const BankApplicationMain = () => {


    const initialUserInfo = {
        fullName: '',
        email: '',
        contactNumber: '',
        address: '',
        employer: '',
        jobTitle: '',
        yearsOfEmployment: '',
        monthlyIncome: '',
        monthlyExpenses: '',
        savingsInvestments: '',
        outstandingLoansDebt: '',
        assets: '',
        identificationProof: '',
        incomeProof: '',
        addressProof: '',
        loanType: '',
        loanAmount: '',
        loanTerm: '',
        loanPurpose: '',
    };

    const steps = [
        { title: 'First', description: 'Personal Information' },
        { title: 'Second', description: 'Employment Details' },
        { title: 'Third', description: 'Financial Information' },
        { title: 'Forth', description: 'Supporting Documents' },
        { title: 'Fifth', description: 'Loan Specifications' },
    ]
    const [activeStep, setActiveStep] = useState(0);
    const [userInfo, setUserInfo] = useState(initialUserInfo);

    const handleNextStep = () => {
        setActiveStep((prevStep) => prevStep + 1);
    };

    const handlePreviousStep = () => {
        setActiveStep((prevStep) => prevStep - 1);
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        const file = files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setUserInfo((prevUserInfo) => ({ ...prevUserInfo, [name]: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };



    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(userInfo)
    }


    return (
        <ChakraProvider>

            <Box display={"flex"} mt="50px" ml="100px">
                <Stepper index={activeStep} orientation="vertical" height="400px" gap="0" colorScheme='green' >
                    {steps.map((step, index) => (
                        <Step key={index} w={"300px"}>
                            <StepIndicator>
                                <StepStatus
                                    complete={<StepIcon />}
                                    incomplete={<StepNumber />}
                                    active={<StepNumber />}
                                />
                            </StepIndicator>

                            <Box flexShrink="0">
                                <StepTitle>{step.description}</StepTitle>
                                <StepDescription>{activeStep <= index ? "Incomplete" : "Completed"}</StepDescription>
                            </Box>

                            <StepSeparator />

                        </Step>
                    ))}
                </Stepper>

                {activeStep === 0 ? (
                    <PersonalInfoStep
                        userInfo={userInfo}
                        handleChange={handleChange}
                        onNext={handleNextStep}
                    />
                ) :
                    activeStep === 1 ? (
                        <EmploymentDetailsStep
                            userInfo={userInfo}
                            handleChange={handleChange}
                            onNext={handleNextStep} onPrevious={handlePreviousStep}
                        />
                    ) :
                        activeStep === 2 ? (
                            <FinancialInfoStep userInfo={userInfo} handleChange={handleChange}
                                onNext={handleNextStep} onPrevious={handlePreviousStep}
                            />
                        ) :
                            activeStep === 3 ? (
                                <SupportingDocsStep
                                    userInfo={userInfo}
                                    handleFileChange={handleFileChange}
                                    onNext={handleNextStep} onPrevious={handlePreviousStep}
                                />
                            ) :
                                activeStep === 4 && (
                                    <LoanSpecificationsStep
                                        userInfo={userInfo}
                                        handleChange={handleChange}
                                        onPrevious={handlePreviousStep}
                                        handleSubmit={handleSubmit}
                                    />
                                )}

            </Box >

        </ChakraProvider >

    )
}

