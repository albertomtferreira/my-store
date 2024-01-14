import styled from "styled-components";

import {ReactComponent as ProfileSvg} from '../../assets/profile.svg';

export const ProfileIcon = styled(ProfileSvg)`
  width: 24px;
  height: 24px;
`

export const ProfileContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`