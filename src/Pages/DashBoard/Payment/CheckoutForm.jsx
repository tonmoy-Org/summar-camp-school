import { useContext, useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { AuthContext } from "../../../Provider/AuthProvider";
import './checkoutFrom.css'

const CheckoutForm = ({ price, selectClass }) => {
    const { user } = useContext(AuthContext);
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState(' ');
    const [clientSecret, setClientSecret] = useState(' ');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

  
    useEffect(() => {
        if (price > 0) {
            // Create PaymentIntent as soon as the page loads
            const fetchClientSecret = async () => {
                try {
                    const response = await fetch("https://summer-camp-client-tonmoy-org.vercel.app/create-payment-intent", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ price }),
                    });
                    const data = await response.json();
                    setClientSecret(data.clientSecret);
                } catch (error) {
                    console.log(error);
                    // Handle error
                }
            };
            fetchClientSecret();
        }
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (!card) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });
        if (error) {
            console.log("[error]", error);
            setCardError(error.message);
        } else {
            setCardError(' ');
            console.log(paymentMethod);
        }

        setProcessing(true);
        try {
            const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
                clientSecret,
                {
                    payment_method: {
                        card: card,
                        billing_details: {
                            name: user?.displayName,
                            email: user?.email
                        },
                    },
                },
            );
            if (confirmError) {
                console.log(confirmError);
                // Handle error
            }
            console.log("paymentIntent: ", paymentIntent);

            setProcessing(false);
            if (paymentIntent.status === 'succeeded') {
                setTransactionId(paymentIntent.id);
                const transactionId = paymentIntent.id;
                const availableSeats = selectClass.map(item => item.availableSeats);
                const totalEnrolled = selectClass.map(item => item.enrolled);
                const restSeats = {
                    availableSeats: availableSeats - 1,
                    enrolled: parseInt(totalEnrolled) + 1
                }
                console.log("enrolled", restSeats)
                console.log(restSeats);
                // const _id = allClasses.map(item => item._id)
                const _id = selectClass.map(item => item.classId)
                
                console.log(_id);
                const payment = {
                    email: user?.email,
                    transactionId: transactionId,
                    price,
                    quantity: selectClass.length,
                    itemName: selectClass.map(item => item.name),
                    item: selectClass.map(item => item._id),
                    date: new Date(),
                    status: 'pending'
                }
                fetch('https://summer-camp-client-tonmoy-org.vercel.app/payment', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payment)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('data: ', data);
                        if (data.insertedId) {
                            // display something
                        }
                    })
                    fetch(`https://summer-camp-client-tonmoy-org.vercel.app/class/${_id}`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(restSeats)
                    })
                    .then(res => res.json())
                    .then(data => {
                        if(data.modifiedCount > 0){
                            // display something
                        }
                    })
            }
        } catch (error) {
            console.log(error);
            // Handle error
        }
    };

    return (
        <div>
            <form id="paymentForm" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: "16px",
                                color: "#424770",
                                "::placeholder": {
                                    color: "#aab7c4",
                                },
                            },
                            invalid: {
                                color: "#9e2146",
                            },
                        },
                    }}
                />
                <button className="btn btn-primary btn-sm mt-6" type="submit" disabled={!stripe || processing || !clientSecret}>
                    Pay
                </button>
            </form>
            <div className="text-center py-6">
                {cardError && <p className="text-red-600">{cardError}</p>}
                {transactionId && <p className="text-green-600">Transaction is completed with transaction Id: <span className="text-black font-semibold"> {transactionId}</span></p>}
            </div>
        </div>
    );
};

export default CheckoutForm;
