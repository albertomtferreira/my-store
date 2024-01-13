import styled from "styled-components";
import Button from "../button/button.component";

export const PaymentFormContainer = styled.div`
	height: 300px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 50px;
	margin-bottom: 50px;
	background-color: grey;
	border-radius: 10px;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);

`
export const FormContainer = styled.form`
	height: 100px;
	min-width: 500px;
	background-color: lightgrey;
	border-radius: 10px;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
	padding: 10px;
	input {}

`
export const PaymentButton = styled(Button)`
	margin-top: 30px;
`