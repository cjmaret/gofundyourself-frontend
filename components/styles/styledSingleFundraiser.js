import styled from 'styled-components';
import { ModalForm } from './styledForm';
import { Modal } from './styledModal';

export const FundraiserSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1080px;
  width: 95%;
  margin: 50px 0 100px 0;
  padding: 0 1rem;
  @media (min-width: 850px) {
    margin: 75px 0 150px 0;
  }
`;

export const TitleGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  min-width: 300px;
  @media (min-width: 850px) {
    width: 100%;
    flex-direction: row-reverse;
    justify-content: flex-end;
    margin-bottom: 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  width: 100%;
  text-align: center;
  margin: 0 0 15px 0;
  line-height: 1.2;
  @media (min-width: 460px) {
    font-size: 3.5rem;
  }
  @media (min-width: 850px) {
    text-align: left;
    font-size: 4.5rem;
    width: 55%;
    margin: 0 0 0 25px;
  }
`;

export const UpdateButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 0 0 2rem 0;
  @media (min-width: 850px) {
    width: 40%;
    margin: 0;
    justify-content: flex-end;
    flex-wrap: wrap;
    margin: 0 0 2rem 0;
  }
`;

export const UpdateButton = styled.button`
  font-size: 1.5rem;
  padding: 1rem 0.5rem;
  height: 50%;
  border: none;
  border-radius: 10px;
  transition: opacity 0.4s ease;
  background-color: var(--green);
  width: 40%;
  min-width: 100px;
  font-size: 1.2rem;
  color: var(--white);
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
  @media (min-width: 850px) {
    font-size: 1.5rem;
    padding: 1rem 1.5rem;
    width: 170px;
    margin: 0 1rem 1rem 0;
  }
`;

export const FundraiserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 850px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const Details = styled.div`
  width: 100%;
  @media (min-width: 850px) {
    margin-right: 30px;
    width: 60%;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  margin-bottom: 15px;
  border-radius: 15px;
  @media (min-width: 850px) {
    margin-bottom: 25px;
  }
`;

export const Description = styled.p`
  white-space: pre-wrap;
  line-height: 1.5;
  margin: 0 0 25px 0;
  font-size: 1.5rem;
  @media (min-width: 500px) {
    font-size: 1.75rem;
  }
`;

export const Sidebar = styled.div`
  width: 100%;
  min-height: 330px;
  max-height: 550px;
  min-width: 250px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  @media (min-width: 850px) {
    border-radius: 10px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
    width: 40%;
  }
`;

export const AmountGroup = styled.p`
  font-size: 1.2rem;
  margin: 0;
  @media (min-width: 1000px) {
    font-size: 1.5rem;
  }
`;

export const AmountValue = styled.p``;

export const AmountRaised = styled.span`
  font-weight: 850;
  font-size: 2.2rem;
  @media (min-width: 1000px) {
    font-size: 2.5rem;
  }
`;

export const PercentageBarGroup = styled.div`
  position: relative;
  width: 100%;
  margin: 0 0 15px 0;
  padding: 10px 0;
`;

export const PercentageBar = styled.div`
  width: 100%;
  height: 10px;
  background-color: rgba(255, 123, 111, 0.5);
  border-radius: 10px;
`;

export const PercentageBarFilled = styled.div`
  position: absolute;
  width: ${(props) => (props.filled <= 100 ? props.filled : 100)}%;
  height: 10px;
  background-color: var(--salmon);
  border-radius: 10px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Button = styled.a`
  font-size: 1.5rem;
  width: 100%;
  max-width: 400px;
  background-color: var(--salmon);
  padding: 10px 0;
  border: none;
  border-radius: 5px;
  margin-bottom: 5px;
  text-align: center;
  transition: opacity 0.4s ease;
  color: var(--white);
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
  &:hover {
    text-decoration: none;
  }
`;

export const ShareButton = styled(Button)`
  background-color: var(--green);
`;

export const DonateButton = styled(Button)``;

export const DonorList = styled.div`
  margin: 25px 0;
  width: 100%;
`;

export const DonorCard = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  padding-bottom: 10px;
  font-size: 1.2rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const DonorCardPhoto = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  object-fit: cover;
  border-radius: 50px;
`;

export const DonorCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.3;
`;

export const DonorCardName = styled.h3`
  margin: 0 0 3px 0;
`;

export const DonorCardDonationDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DonorCardAmount = styled.p`
  margin: 0 0 3px 0;
  display: flex;
  align-items: center;
  &:last-child {
    margin: 0;
  }
`;

export const DonorCardDate = styled(DonorCardAmount)``;

export const DonorListSeeAllButton = styled(Button)`
  width: 60%;
`;

export const UpdateModal = styled(Modal)`
  visibility: ${(props) => (props.isUpdateModalOpen ? 'visible' : 'hidden')};
`;

export const UpdateForm = styled(ModalForm)``;

export const DeleteModal = styled(Modal)`
  visibility: ${(props) => (props.isDeleteModalOpen ? 'visible' : 'hidden')};
`;

export const DeleteFormGroup = styled.div`
  position: relative;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  border-radius: 10px;
  max-width: 400px;
  width: 95%;
  @media (min-width: 850px) {
    width: 100%;
  }
`;

export const DeleteFormTitle = styled.h2``;

export const DeleteFormButton = styled.button`
  font-size: 2rem;
  background-color: var(--salmon);
  color: white;
  padding: 5px 20px;
  border: none;
  border-radius: 10px;
  transition: opacity 0.4s ease;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export const DonorsModal = styled(Modal)`
  visibility: ${(props) => (props.isDonorsModalOpen ? 'visible' : 'hidden')};
`;

export const DonorsModalContentGroup = styled.div`
  position: relative;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  padding: 2rem;
  width: 60%;
  max-width: 500px;
  max-height: 550px;
`;

export const DonorsModalTitle = styled.h3`
  font-size: 3rem;
  margin: 0 0 1rem 0;
`;

export const DonorsModalList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  width: 100%;
`;

export const DonorsModalCard = styled(DonorCard)`
  width: 100%;
  margin: 1rem 0;
  &:last-child {
    border-bottom: none;
  }
`;

export const DonorsModalPhoto = styled(DonorCardPhoto)`
  width: 100px;
  height: 100px;
`;

export const DonorsModalDetails = styled(DonorCardDetails)`
  display: flex;
  flex-direction: column;
  & > * {
    margin: 0 0 4px 0;
  }
`;

export const DonorsModalName = styled(DonorCardName)`
  font-size: 2rem;
`;

export const DonorsModalDonationDetails = styled(DonorCardDonationDetails)``;

export const DonorsModalAmount = styled(DonorCardAmount)`
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  margin: 0 0 4px 0;
  &:last-child {
    margin: 0;
  }
  @media (min-width: 500px) {
    flex-direction: row;
  }
`;

export const DonorsModalDate = styled(DonorCardDate)``;

export const ShareModal = styled(Modal)`
  visibility: ${(props) => (props.isShareModalOpen ? 'visible' : 'hidden')};
`;

export const SharePopup = styled.div`
  background-color: white;
  width: 90%;
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 450px;
  position: relative;
  @media (min-width: 500px) {
    padding: 2rem 2rem 3rem 2rem;
  }
  & > h3 {
    font-size: 2rem;
    margin: 0 0 1rem 0;
  }
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    @media (min-width: 500px) {
      flex-direction: row;
      justify-content: center;
    }
    & > p {
      width: 100%;
      word-wrap: break-word;
      background-color: var(--offWhite);
      border-radius: 5px;
      padding: 0 1rem;
      margin: 0 0 1rem 0;
      user-select: all;
      @media (min-width: 500px) {
        width: 85%;
        margin: 0 1rem 0 0;
      }
    }
    & > button {
      width: 40px;
      background-color: transparent;
      border: none;
      transition: opacity 0.4s ease;
      & > img {
        width: 100%;
      }
      &:hover {
        cursor: pointer;
        opacity: 0.7;
      }
    }
  }
`;
