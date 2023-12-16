import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryRouteContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 20px;
`
export const CategoryTitleReturn = styled(Link)`
  text-align: left;
  font-size: 20px;
`
export const CategoryTitle = styled.div`
  font-size: 40px;
  margin-bottom: 25px;
  text-align: center;
`
