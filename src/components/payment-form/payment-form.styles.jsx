import styled from "styled-components";
import Button from "../button/button.component";

export const PaymentFormContainer = styled.div`
	height: 200px;
	margin-bottom: 100px;
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
	@media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-right: 100px  
  }
`
export const PaymentButton = styled(Button)`
	margin-top: 30px;
	margin-left: auto;
`