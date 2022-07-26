import {
  ProfileComponent,
  ProfileLead,
  ProfileBanner,
  ProfileContentGroup,
  ProfileImageWrapper,
  ProfileImage,
  ProfileDetails,
  ProfileName,
  ProfileEmail,
  DateCreated,
  MyFundraisersPanel,
  DonatedToPanel,
  PanelTitle,
  EditProfileButton,
  EditModal,
  EditForm,
} from './styles/styledProfile';
import { useUser } from './User';
import { useContext, useState } from 'react';
import { MobileContext } from '../contexts/mobileContext';
import BlankProfileImage from '../images/blank-profile.jpg';
import CloseIconImage from '../images/close-icon.png';
import convertDate from '../lib/convertDate';
import 'keen-slider/keen-slider.min.css';
import EditPen from '../images/edit-pen.png';
import DisplayError from './ErrorMessage';
import { CloseIcon } from './styles/styledModal';
import useForm from '../lib/useForm';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { CURRENT_USER_QUERY } from './User';
import Footer from './Footer';
import KeenSlider from './KeenSlider';

export const UPDATE_USER_WITH_AVATAR_MUTATION = gql`
  mutation UPDATE_USER_WITH_AVATAR_MUTATION(
    $id: ID!
    $name: String
    $email: String
    $avatar: Upload
  ) {
    updateUser(id: $id, data: { name: $name, email: $email, avatar: $avatar }) {
      name
      email
      avatar {
        publicUrlTransformed
      }
    }
  }
`;

export const UPDATE_USER_NO_AVATAR_MUTATION = gql`
  mutation UPDATE_USER_NO_AVATAR_MUTATION(
    $id: ID!
    $name: String
    $email: String
  ) {
    updateUser(id: $id, data: { name: $name, email: $email }) {
      name
      email
      avatar {
        publicUrlTransformed
      }
    }
  }
`;

export default function Profile() {
  let user = useUser();
  const mobileWidth = useContext(MobileContext);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const { inputs, handleChange, clearForm, resetForm } = useForm({
    name: user?.name || '',
    email: user?.email || '',
    avatar: user?.avatar || '',
  });

  const [
    updateUserWithAvatar,
    {
      data: dataWithAvatar,
      loading: loadingWithAvatar,
      error: errorWithAvatar,
    },
  ] = useMutation(UPDATE_USER_WITH_AVATAR_MUTATION, {
    variables: {
      id: user?.id,
      name: inputs.name,
      email: inputs.email,
      avatar: inputs.avatar,
    },
    refetchQueries: [
      {
        query: CURRENT_USER_QUERY,
      },
    ],
  });

  const [
    updateUserNoAvatar,
    { data: dataNoAvatar, loading: loadingNoAvatar, error: errorNoAvatar },
  ] = useMutation(UPDATE_USER_NO_AVATAR_MUTATION, {
    variables: {
      id: user?.id,
      name: inputs.name,
      email: inputs.email,
    },
    refetchQueries: [
      {
        query: CURRENT_USER_QUERY,
      },
    ],
  });

  function checkIfClickedOutside(e) {
    const innerEditFormDiv = document.getElementById('edit-form');
    if (isEditModalOpen) {
      if (!innerEditFormDiv.contains(e.target)) {
        setIsEditModalOpen(false);
      }
    }
  }

  async function runImageMutationOrNoImageMutation() {
    if (inputs.avatar === user?.avatar) {
      await updateUserNoAvatar()
        .then((res) => {
          console.log('res no: ', res);
          setIsEditModalOpen(false);
        })
        .catch((err) => console.error(err));
    } else {
      await updateUserWithAvatar()
        .then((res) => {
          console.log('res yes: ', res);
          setIsEditModalOpen(false);
        })
        .catch((err) => console.error(err));
    }
  }

  return (
    <>
      <ProfileComponent data-testid="profile">
        <ProfileLead>
          <ProfileBanner />
          <ProfileContentGroup>
            <EditProfileButton onClick={() => setIsEditModalOpen(true)}>
              <img src={EditPen} alt="edit-pen" className="edit-icon" />
            </EditProfileButton>
            <ProfileImageWrapper>
              <ProfileImage
                src={user?.avatar?.publicUrlTransformed || BlankProfileImage}
                alt="avatar"
              />
            </ProfileImageWrapper>
            <ProfileDetails>
              <ProfileName>{user?.name}</ProfileName>
              <ProfileEmail>{user?.email}</ProfileEmail>
              <DateCreated>
                Funding since {user?.createdOn && convertDate(user.createdOn)}
              </DateCreated>
            </ProfileDetails>
          </ProfileContentGroup>
        </ProfileLead>
        <MyFundraisersPanel>
          <PanelTitle>Your fundraisers</PanelTitle>
          <KeenSlider
            data={user?.fundraisers}
            sliderType="profile-fundraisers"
          />
        </MyFundraisersPanel>
        <DonatedToPanel>
          <PanelTitle>Your donations</PanelTitle>
          <KeenSlider data={user?.donations} sliderType="profile-donated" />
        </DonatedToPanel>
      </ProfileComponent>
      <Footer />
      <EditModal
        isEditModalOpen={isEditModalOpen}
        onClick={checkIfClickedOutside}>
        <EditForm
          id="edit-form"
          onSubmit={(e) => {
            e.preventDefault();
            runImageMutationOrNoImageMutation();
          }}>
          <CloseIcon
            src={CloseIconImage}
            alt="close icon"
            onClick={() => setIsEditModalOpen(false)}
          />
          <DisplayError error={errorWithAvatar || errorNoAvatar} />
          <fieldset
            disabled={loadingWithAvatar || loadingNoAvatar}
            aria-busy={loadingWithAvatar || loadingNoAvatar}>
            <label htmlFor="name">
              Name
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={inputs.name}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="avatar">
              Image
              <input
                type="file"
                id="avatar"
                name="avatar"
                onChange={handleChange}
              />
            </label>
            <label htmlFor="email">
              Email
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email"
                value={inputs.email}
                onChange={handleChange}
              />
            </label>
            <div className="button-group">
              <button type="submit">Update Profile</button>
              <button type="button" onClick={clearForm}>
                Clear Form
              </button>
            </div>
          </fieldset>
        </EditForm>
      </EditModal>
    </>
  );
}
