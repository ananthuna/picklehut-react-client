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
import Address from './Address/address'
import { UserContext } from '../../Context/Context';

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
    const { method } = React.useContext(UserContext)
    const [activeStep, setActiveStep] = useState(0)
    const [user, setUser] = useState('')
    const [number, setNumber] = useState()
    const [address, setAddress] = useState({})
    const [bill, setBill] = useState()
    const [items, setItems] = useState()
    const [orderId, setOrderId] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        let user = localStorage.getItem("user")
        user = JSON.parse(user)
        console.log(user);
        setUser(user.firstName)
        setNumber(user.number)
        const customConfig = {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        }

        axios.get(`${baseUrl}/api/order/placeOrder`, customConfig)
            .then((res) => {
                console.log(res.data);
                setOrderId(res.data.orderId)
                setAddress(res.data.address)
                setBill(res.data.bill)
                setItems(res.data.items)
            })
    }, [])

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    }, []);

    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }




    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        navigate('/')
    };



    const handleOrder = async () => {
        console.log(method);
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }
        let user = localStorage.getItem("user")
        user = JSON.parse(user)
        const customConfig = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        }
        const Data = {
            payment: method,
            orderId: orderId
        }

        axios.post(`${baseUrl}/api/order/checkout`, Data, customConfig)
            .then((res) => {
                console.log(res.data);
                if (res.data.order === 'placed') return alert(res.data.order) &&  navigate('/order')
                const amount = res.data.order.amount
                const orderId = res.data.order.id
                const currency = res.data.order.currency
                var options = {
                    "key": "rzp_test_urWhsnXVh5JJ6f", // Enter the Key ID generated from the Dashboard
                    "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                    "currency": currency,
                    "name": "pickle hut",
                    "description": "Test Transaction",
                    "image": "https://example.com/your_logo",
                    "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                    "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
                    "handler": function (res) {
                        alert(res.razorpay_payment_id)
                        alert(res.razorpay_order_id)
                        alert(res.razorpay_signature)
                        const Data = {
                            res
                        }

                        axios.post(`${baseUrl}/api/order/verify-payment`, Data, customConfig)
                            .then((res) => {

                            })
                        navigate('/order')

                    },
                    "prefill": {
                        "name": "Gaurav Kumar",
                        "email": "gaurav.kumar@example.com",
                        "contact": "9999999999"
                    },
                    "notes": {
                        "address": "Razorpay Corporate Office"
                    },
                    "theme": {
                        "color": "#3399cc"
                    }
                };
                var rzp1 = new window.Razorpay(options);
                rzp1.open();

            })
    }

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
                            {step.label === "DELIVERY ADDRESS" && <Address name={user} number={number} address={address} />}
                            {step.label === "ORDER SUMMARY" ? <List items={items} /> : ''}
                            {step.label === "BILL DETAILS" && <Billdetails bill={bill - 40} items={items} />}
                            {step.label === 'PAYMENT OPTIONS' && <PaymentOptions />}
                            <Box sx={{ mb: 2 }}>
                                <div>
                                    {index === steps.length - 1 ?
                                        <Button
                                            variant="contained"
                                            onClick={handleOrder}
                                            sx={{ mt: 1, mr: 1 }}
                                        >
                                            Checkout
                                        </Button>
                                        :
                                        <Button
                                            variant="contained"
                                            onClick={handleNext}
                                            sx={{ mt: 1, mr: 1 }}
                                        >
                                            Continue
                                        </Button>
                                    }

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