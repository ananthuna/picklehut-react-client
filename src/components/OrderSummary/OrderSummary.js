import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import List from '../Cart/List/List'
import PaymentOptions from './RadioOption/PaymentOptions'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../../url';
import Billdetails from './Billdetails/TotalPrice'

const steps = [
    {
        label: 'LOGIN',
        description: `Ananthu N A`,
    },
    {
        label: 'DELIVERY ADDRESS',
        description: ['Vishnupresadham,mampuzhakary,ramankary p o,alappuzha,kerala', 'Vishnupresadham,mampuzhakary,ramankary p o,alappuzha,kerala'],
    },
    {
        label: 'ORDER SUMMARY',
        description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
    },
    {
        label: 'BILL DETAILS',
        description: 'total'
    },
    {
        label: 'PAYMENT OPTIONS',
        options: [
            'Cash on delivery',
            'UPI',
            'net Banking'
        ]
    },
];

export default function VerticalLinearStepper() {
    const [activeStep, setActiveStep] = useState(0);
    const [cartitems, setCartitems] = useState([])
    const [user, setUser] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        let user = localStorage.getItem("user")
        user = JSON.parse(user)
        console.log(user);
        setUser(user.firstName)
        const customConfig = {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        }

        axios.get(`${baseUrl}/api/cart/cartitems`, customConfig)
            .then((res) => {
                setCartitems(res.data)

            })
    }, [])




    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        navigate('/')
    };

    return (
        <Box sx={{
            pt: '8rem',
            width: '65%',
            pl: '3rem',
            pb: '3rem'

        }}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                    <Step key={step.label}>
                        <StepLabel
                            optional={
                                index === 3 ? (
                                    <Typography variant="caption">Last step</Typography>
                                ) : null
                            }
                        >
                            {step.label}
                        </StepLabel>
                        <StepContent>
                            {step.label === "LOGIN" && <Typography>{user}</Typography>}
                            {step.label === "DELIVERY ADDRESS" && <Typography>{step.description}</Typography>}
                            {step.label === "ORDER SUMMARY" ? <List items={cartitems.items} /> : ''}
                            {step.label === "BILL DETAILS" && <Billdetails bill={cartitems.bill} items={cartitems.items} />}
                            {step.label === 'PAYMENT OPTIONS' && <PaymentOptions />}
                            <Box sx={{ mb: 2 }}>
                                <div>
                                    <Button
                                        variant="contained"
                                        onClick={handleNext}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        {index === steps.length - 1 ? 'Checkout' : 'Continue'}
                                    </Button>
                                    <Button
                                        disabled={index === 0}
                                        onClick={handleBack}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        Back
                                    </Button>
                                </div>
                            </Box>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                    <Typography>All steps completed - you&apos;re order placed</Typography>
                    <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                        Purchase more
                    </Button>
                </Paper>
            )}
        </Box>
    );
}