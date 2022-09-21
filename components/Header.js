import Link from 'next/link';
import {
  HeaderComponent,
  Logo,
  NavLink,
  NavButton,
  Search,
} from './styles/styledHeader';
import { useContext, useState } from 'react';
import Image from 'next/image';
import LogoImage from '../images/logo.jpg';
import MenuWrapper from './MenuWrapper';
import { MobileContext } from '../contexts/mobileContext';
import IndividualsHeaderList from './IndividualsHeaderList';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenu = useContext(MobileContext);

  return (
    <HeaderComponent mobileMenu={mobileMenu}>
      <Search
        mobileMenu={mobileMenu}
        isMenuOpen={isMenuOpen}
        onClick={() => console.log('heehoo')}>
        Search
        {/* <ClientOnly>
          // <Search />
        </ClientOnly> */}
      </Search>
      {mobileMenu && (
        <>
          <Logo mobileMenu={mobileMenu}>
            <Link href="/">
              <NavLink className="logo__anchor">
                <img
                  src={LogoImage}
                  onClick={() => setIsMenuOpen(false)}
                  alt=""
                  layout="fill"
                />
              </NavLink>
            </Link>
          </Logo>
        </>
      )}
      <MenuWrapper
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        mobileMenu={mobileMenu}>
        {/* <CloseIconWrapper onClick={() => setIsMenuOpen(false)}>
          <Image src={CloseIcon} alt="" />
        </CloseIconWrapper> */}
        <Link href="/fundraisers">
          <NavLink onClick={() => setIsMenuOpen(false)}>Fundraisers</NavLink>
        </Link>
        <Link href="/create-fundraiser">
          <NavLink onClick={() => setIsMenuOpen(false)}>
            Start a Fundeserved
          </NavLink>
        </Link>
        {!mobileMenu && (
          <Logo>
            <Link href="/">
              <NavLink className="logo__anchor">
                <img className="logo" src={LogoImage} alt="" />
                {/* <Image src={LogoImage} alt="" objectFit="cover" layout="fill" /> */}
              </NavLink>
            </Link>
          </Logo>
        )}
        <Link href="/mario">
          <NavLink onClick={() => setIsMenuOpen(false)}>How it works</NavLink>
        </Link>
        <Link href="/mario">
          <NavLink onClick={() => setIsMenuOpen(false)}>Sign In</NavLink>
        </Link>
        <Link href="/mario">
          <NavButton onClick={() => setIsMenuOpen(false)}>
            Start Fundeserving
          </NavButton>
        </Link>
      </MenuWrapper>
    </HeaderComponent>
  );
}
