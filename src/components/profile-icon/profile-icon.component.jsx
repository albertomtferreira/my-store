import { useNavigate } from 'react-router-dom';

import { ProfileIcon, ProfileContainer } from "./profile-icon.styles";

const ProfileIconContainer = () => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate('/profile');
  return (
      <ProfileContainer>
          <ProfileIcon onClick={handleNavigate}/>
      </ProfileContainer>
  )
}

export default ProfileIconContainer;