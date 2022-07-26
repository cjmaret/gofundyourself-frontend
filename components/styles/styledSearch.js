import styled, { keyframes } from 'styled-components';
import { MobileDropdown, IconWrapper } from './styledHeader';

const glow = keyframes`
  from {
    box-shadow: 0 0 0px var(--salmon);
  }
  to {
    box-shadow: 0 0 10px 1px var(--salmon);
  }
`;

export const SearchHeaderGroup = styled.div`
  display: flex;
  justify-content: ${(props) => (props.mobileMenu ? 'flex-start' : 'center')};
`;

export const SearchIconWrapper = styled(IconWrapper)`
  -webkit-tap-highlight-color: transparent;
`;

export const SearchMenu = styled(MobileDropdown)`
  display: ${(props) => (props.isSearchMenuOpen ? 'flex' : 'none')};
  left: 0;
  width: 100vw;
  & > * {
    margin: 0;
  }
`;

export const SearchComponent = styled.div`
  position: relative;
  border: 1px solid var(--salmon);
  border-radius: 5px;
  padding: 1px;
  width: 90%;
  max-width: 700px;
  input {
    background-color: white;
    width: 100%;
    padding: 0 10px;
    border: 0;
    font-size: 2rem;
    outline: none;
    &.loading {
      animation: ${glow} 0.5s ease-in-out infinite alternate;
    }
  }
`;

export const DropDown = styled.div`
  position: fixed;
  width: 100%;
  z-index: 2;
  top: 48px;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  .no-items-found {
    &:hover {
      text-decoration: none;
    }
  }
`;

export const DropDownItem = styled.a`
  line-height: 1.3;
  background: ${(props) => (props.highlighted ? '#f7f7f7' : 'white')};
  padding: 1rem;
  transition: all 0.2s;
  ${(props) => (props.highlighted ? 'padding-left: 2rem;' : null)};
  display: flex;
  align-items: center;
  text-align: left;
  border-left: 10px solid
    ${(props) => (props.highlighted ? 'var(--salmon)' : 'white')};
  img {
    margin-right: 10px;
  }
  &:hover {
    text-decoration: none;
  }
`;
