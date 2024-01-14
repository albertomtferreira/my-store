import ProfileUpdateForm from "../../components/profile-update-form/profile-update-form.component.jsx";
import {ProfileContainer} from './profile.styles.jsx';


const Profile = () =>{

  return[
    <ProfileContainer key='ProfileContainer' >
      <ProfileUpdateForm/>
    </ProfileContainer>
  ]
}

export default Profile;