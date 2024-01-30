import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  display: flex;
  width: 900px;
  justify-content:space-between;
  margin: 30px auto;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 105%;
    margin: 30px auto;
    padding: 0 20px;
    justify-content: center;
    justify-content: space-between;
    margin-bottom: 100px;
  }
  @media (max-width: 400px) {
    width: 110%;
  }
`