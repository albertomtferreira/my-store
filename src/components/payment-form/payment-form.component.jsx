import { useState } from "react";
import { useSelector } from "react-redux";

import { selectCartTotal } from "../../store/cart/cart.selector";

import { selectCurrentUser } from "../../store/user/user.selector";

import { PaymentElement, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {PaymentFormContainer, FormContainer, PaymentButton} from "./payment-form.styles";

const PaymentForm = () => {
	const stripe = useStripe();
	const elements = useElements();
	const amount = useSelector(selectCartTotal)
	const currentUser = useSelector(selectCurrentUser)
	const [isProcessingPayment, setIsProcessingPayment] = useState(false)

	const paymnentHandler = async (e) => {
		e.preventDefault()
		if (!stripe || !elements) {
			return;
		}
		setIsProcessingPayment(true)
		const response = await fetch('/.netlify/functions/create-payment-intent', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({amount: amount*100})
		}).then(res => res.json())
		const clientSecret = response.paymentIntent.client_secret
		const paymentResult = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
					card: elements.getElement(CardElement),
					billing_details: {
						name: currentUser	? currentUser.displayName : 'guest'
					},
					metadata: {
						cartTotal: amount,
						shippingAddress: '123 Main St',
					}
			}
		})
		setIsProcessingPayment(false)
		if (paymentResult.error){
			alert(paymentResult.error.message)
		}	else {
			if (paymentResult.paymentIntent.status === 'succeeded'){
				alert('Payment Successful')
			}	else {
				alert('Payment Failed')
			}
		}
	}
	return [
		<PaymentFormContainer key={PaymentFormContainer}>
			<FormContainer onSubmit={paymnentHandler}>
				<h2>Credit Card Payment: </h2>
				<CardElement />
				<PaymentButton 
					disabled={isProcessingPayment || !stripe}
					isLoading={isProcessingPayment}
					buttonType={BUTTON_TYPE_CLASSES.inverted}>
					Pay Now
				</PaymentButton>
			</FormContainer>
		</PaymentFormContainer>
	]
}

export default PaymentForm;