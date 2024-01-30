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

		// Trigger form validation and wallet collection
		const {error: submitError} = await elements.submit();
		
		if (submitError) {
			console.log(submitError);
			return;
		}

		const response = await fetch('/.netlify/functions/create-payment-intent', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({amount: amount*100})
		}).then(res => res.json())
		
		
		const clientSecret = response.paymentIntent.client_secret
		
		const paymentResult = await stripe.confirmPayment({
			elements,
			clientSecret,
			confirmParams:{
				return_url: 'http://localhost:8888/checkout'
			},
			billing_details: {
				name: currentUser	? currentUser.displayName : 'guest'
			}
		}
		)
		console.log("Payment Result: ",paymentResult)
		setIsProcessingPayment(false)


	}

	return [
		<PaymentFormContainer key={PaymentFormContainer}>
			<FormContainer onSubmit={paymnentHandler}>
				<h2>Card Payment: </h2>
				<PaymentElement />
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