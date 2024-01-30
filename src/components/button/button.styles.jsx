import styled from "styled-components";

import { SpinnerContainer } from "../spinner/spinner.styles";

export const DefaultButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`
export const GoogleSignInButton = styled(DefaultButton)`
  background-color: #4285f4;
  color: white;
  text-align: center;
  text-wrap: nowrap;

  &:hover {
    background-color: #6a9beb;
    border: none;
  }
`
export const InvertedButton = styled(DefaultButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`
export const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;

`