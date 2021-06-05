import styled, { css } from 'styled-components';
import device from '../styles/breakpoints';
import { useOnOutsideClick } from '../hooks/useOnOutsideClick';

import { useState, useRef, useEffect } from 'react';

type menuButtonProps = {
  text: string;
  menuLinks: Array<string>;
};

const NavContainer = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.5rem 1.5rem 0 1.5rem;
  margin: 0 auto;
  max-width: 640px;

  @media ${device.tabletL} {
    max-width: 768px;
  }

  @media ${device.laptop} {
    align-items: center;
    justify-content: space-between;
    padding: 4rem 1.5rem 0 1.5rem;
    max-width: 1024px;
  }
`;

const NavLeftSide = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

const Logo = styled.svg`
  margin-right: 4rem;
  flex-shrink: 0;
  width: min-content;
`;

const LogoLink = styled.a`
  width: min-content;
`;

const MenuBar = styled.ul<{ isMenuOpen: boolean }>`
  position: absolute;
  display: ${({ isMenuOpen }) => (isMenuOpen ? 'block' : 'none')};
  top: 69px;
  width: 100%;
  background-color: #fff;
  border-radius: 5px;
  padding: 1.5rem;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.243444);

  @media ${device.laptop} {
    position: static;
    top: 0px;
    padding: 0;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    box-shadow: none;
  }
`;

const MenuLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: solid 1px #e8e4e4;
  margin-bottom: 1.5rem;

  @media ${device.laptop} {
    flex-direction: row;
    border-bottom: none;
    margin-bottom: 0rem;
  }
`;

const ButtonContainer = styled(MenuLinkContainer)`
  border-bottom: none;
  margin-bottom: 0rem;

  & :nth-child(2) {
    margin-top: 1.5rem;
  }

  @media ${device.laptop} {
    & :nth-child(2) {
      margin-top: 0;
    }
  }
`;

const MenuList = styled.li`
  position: relative;
  display: flex;
  margin-bottom: 1.5rem;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media ${device.laptop} {
    margin-bottom: 0;
  }
`;

const MenuButton = styled.button<{ isMenuOpen: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  color: #1f3e5a;
  font-size: 18px;
  font-family: Overpass, sans-serif;
  font-weight: 600;
  line-height: 28px;

  ${({ isMenuOpen }) =>
    isMenuOpen &&
    css`
      opacity: 100;
      margin-bottom: 1.5rem;

      svg {
        transform: rotate(-180deg);
      }
    `}

  svg {
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
  }

  &:focus {
    outline: none;
    text-decoration: underline;
  }

  &:hover {
    opacity: 100;
  }

  @media ${device.laptop} {
    color: #fff;
    line-height: 18px;
    opacity: 0.75;
    margin-right: 2rem;
    font-weight: 700;
    font-size: 16px;
    padding: 0.25rem;

    ${({ isMenuOpen }) =>
      isMenuOpen &&
      css`
        margin-bottom: 0;
      `}
  }
`;

const Chevron = styled.svg`
  margin-left: 0.5rem;
  color: #ff7b86;
  @media ${device.laptop} {
    color: #fff;
  }
`;

const Menu = styled.ul<{ isMenuOpen: boolean }>`
  display: ${props => (props.isMenuOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  width: 100%;
  padding: 1rem;
  background-color: rgba(45, 46, 64, 0.08);

  li {
    margin-left: -10px;

    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }

  a {
    font-family: Overpass, sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    text-decoration: none;
    color: rgba(31, 62, 90, 0.75);
  }

  @media ${device.laptop} {
    position: absolute;
    align-items: flex-start;
    top: 35px;
    left: -24px;
    padding: 1.5rem;
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.243444);
    width: 168px;
    margin: 0;
    background-color: #fff;

    li {
      margin-left: 0;

      &:not(:last-child) {
        margin-bottom: 0;
      }
    }

    a {
      font-family: Ubuntu, sans-serif;
      font-weight: 400;
      font-size: 15px;
      line-height: 33px;
      text-decoration: none;
      color: #2d2e40;
    }

    a:hover {
      font-weight: 700;
    }
  }
`;

const Button = styled.a`
  transition: color, background-color 300ms;
  cursor: pointer;
`;

const LoginButton = styled(Button)`
  font-family: Overpass, serif;
  background-color: transparent;
  line-height: 28px;
  color: #1f3e5a;
  font-size: 18px;
  font-weight: 600;

  @media ${device.laptop} {
    font-family: Ubuntu, serif;
    color: rgba(255, 255, 255, 0.75);
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    border-radius: 28px;
    margin: 0 1rem 0 0;
    padding: 1rem;

    &:hover {
      color: rgba(255, 255, 255, 1);
    }
  }
`;

const SignUpButton = styled(Button)`
  font-family: Ubuntu, serif;
  background: linear-gradient(135deg, #ff8f71 0%, #ff3e55 100%);
  color: #fff;
  line-height: 18px;
  font-weight: 700;
  border-radius: 28px;
  padding: 1rem 2.5rem;

  @media ${device.laptop} {
    background: #fff;
    color: #ff505c;

    &:hover {
      color: rgba(255, 255, 255, 1);
      background: #ff7b86;
    }
  }
`;

const MenuIcon = styled.svg`
  position: absolute;
  display: block;
  right: 24px;
  top: 64px;

  @media ${device.laptop} {
    display: none;
  }
`;

const MenuContainer = ({ text, menuLinks }: menuButtonProps): JSX.Element => {
  const node = useRef<HTMLLIElement>(null);
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  useOnOutsideClick(node, setMenuOpen, isMenuOpen);

  const textLowerCase: string = text.toLowerCase();

  return (
    <MenuList ref={node}>
      <MenuButton
        type='button'
        aria-controls={`id_${textLowerCase}_menu`}
        tabIndex={0}
        onClick={() => setMenuOpen(!isMenuOpen)}
        isMenuOpen={isMenuOpen}
        aria-expanded={isMenuOpen ? 'true' : 'false'}
      >
        {text}
        <Chevron
          width='10'
          height='10'
          viewBox='0 0 10 10'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M1 3L5 7L9 3' stroke='currentColor' stroke-width='2' />
        </Chevron>
      </MenuButton>
      <Menu isMenuOpen={isMenuOpen} id='id_product_menu'>
        {menuLinks.map(text => {
          return (
            <li role='none' key={text}>
              <a href='/'>{text}</a>
            </li>
          );
        })}
      </Menu>
    </MenuList>
  );
};

export const TopNav = (): JSX.Element => {
  const node = useRef<HTMLLIElement>(null);
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  useOnOutsideClick(node, setMenuOpen, isMenuOpen);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isMenuOpen]);

  return (
    <NavContainer ref={node}>
      <NavLeftSide>
        <LogoLink href='/'>
          <Logo width='101' height='40' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M0 30.803V1.486h10.653c1.982 0 3.695.31 5.14.93 1.446.619 2.56 1.5 3.345 2.642.785 1.142 1.177 2.484 1.177 4.026 0 1.404-.303 2.636-.909 3.695a6.48 6.48 0 01-2.56 2.498c1.487.578 2.643 1.494 3.469 2.746.826 1.253 1.239 2.732 1.239 4.439 0 1.707-.44 3.18-1.322 4.418-.88 1.239-2.12 2.202-3.716 2.89-1.596.688-3.482 1.033-5.657 1.033H0zM5.946 6.565v6.73h4.046c1.35 0 2.388-.282 3.118-.846.73-.564 1.094-1.397 1.094-2.498 0-1.101-.365-1.94-1.094-2.519-.73-.578-1.769-.867-3.118-.867H5.946zm0 19.159h4.624c1.542 0 2.732-.33 3.572-.991.84-.66 1.26-1.61 1.26-2.85 0-1.238-.42-2.188-1.26-2.848-.84-.66-2.03-.991-3.572-.991H5.946v7.68zm19.282 5.079V0h5.781v30.803h-5.78zm20.893.619c-1.624 0-3.124-.29-4.5-.867a10.94 10.94 0 01-3.593-2.416 10.96 10.96 0 01-2.374-3.654c-.564-1.404-.846-2.931-.846-4.583 0-1.652.289-3.173.867-4.563a11.354 11.354 0 012.415-3.654 10.96 10.96 0 013.634-2.436c1.39-.578 2.91-.867 4.562-.867 1.625 0 3.125.289 4.501.867a10.94 10.94 0 013.592 2.416 11.01 11.01 0 012.375 3.633c.564 1.39.846 2.911.846 4.563 0 1.651-.289 3.179-.867 4.583a11.297 11.297 0 01-2.416 3.675 10.96 10.96 0 01-3.633 2.436c-1.39.578-2.911.867-4.563.867zm.083-5.203c1.046 0 1.982-.275 2.808-.825.825-.551 1.48-1.301 1.96-2.25.483-.95.723-2.03.723-3.242 0-1.211-.24-2.292-.722-3.241-.482-.95-1.136-1.7-1.961-2.25-.826-.551-1.762-.826-2.808-.826-1.046 0-1.982.275-2.808.825-.826.55-1.48 1.301-1.961 2.25-.482.95-.723 2.03-.723 3.242 0 1.211.241 2.292.723 3.241.482.95 1.135 1.7 1.961 2.25.826.551 1.762.826 2.808.826zm24.155 3.964a9.13 9.13 0 01-3.86-.826 9.492 9.492 0 01-3.118-2.291c-.881-.977-1.57-2.12-2.065-3.427-.495-1.308-.743-2.719-.743-4.233 0-1.569.255-3.02.764-4.356a10.614 10.614 0 012.147-3.489 10.174 10.174 0 013.22-2.333c1.225-.564 2.554-.846 3.985-.846 1.404 0 2.67.282 3.799.846a7.402 7.402 0 012.807 2.457l.124-2.684h5.327v19.2c0 1.68-.269 3.207-.805 4.584-.537 1.376-1.301 2.56-2.292 3.55a10.231 10.231 0 01-3.53 2.292c-1.363.537-2.87.805-4.522.805-1.624 0-3.083-.254-4.376-.764a10.468 10.468 0 01-3.386-2.126 10.035 10.035 0 01-2.271-3.18L67.097 32a5.452 5.452 0 001.92 1.879c.784.454 1.672.681 2.663.681 1.074 0 2.003-.24 2.787-.723.785-.481 1.397-1.156 1.838-2.023.44-.867.66-1.879.66-3.035v-1.775a7.793 7.793 0 01-2.828 2.333c-1.143.564-2.402.846-3.778.846zm1.404-5.12c1.018 0 1.92-.254 2.704-.764a5.556 5.556 0 001.879-2.064c.468-.867.702-1.851.702-2.952 0-1.102-.234-2.086-.702-2.953a5.556 5.556 0 00-1.879-2.064c-.784-.51-1.686-.764-2.704-.764-1.019 0-1.92.255-2.705.764a5.556 5.556 0 00-1.879 2.064c-.468.867-.702 1.851-.702 2.953 0 1.1.234 2.085.702 2.952a5.556 5.556 0 001.88 2.064c.784.51 1.685.764 2.704.764zm15.607 5.74V9h5.327l.206 3.304c.55-1.157 1.294-2.044 2.23-2.664.936-.62 2.037-.929 3.303-.929.386 0 .77.035 1.156.103.386.07.73.159 1.033.269l-.62 5.698a4.361 4.361 0 00-.929-.227 7.495 7.495 0 00-.97-.062c-1.597 0-2.822.489-3.675 1.466-.853.977-1.28 2.36-1.28 4.15v10.694h-5.78z'
              fill='#FFF'
              fillRule='nonzero'
            />
          </Logo>
        </LogoLink>
        <MenuBar isMenuOpen={isMenuOpen}>
          <MenuLinkContainer>
            <MenuContainer
              text={'Product'}
              menuLinks={[
                'Overview',
                'Pricing',
                'Marketplace',
                'Features',
                'Integrations',
              ]}
            />
            <MenuContainer
              text={'Company'}
              menuLinks={['About', 'Team', 'Blog', 'Careers']}
            />
            <MenuContainer
              text={'Connect'}
              menuLinks={['Contact', 'Newsletter', 'LinkedIn']}
            />
          </MenuLinkContainer>
          <ButtonContainer>
            <LoginButton>Login</LoginButton>
            <SignUpButton>Sign Up</SignUpButton>
          </ButtonContainer>
        </MenuBar>
      </NavLeftSide>
      {!isMenuOpen && (
        <MenuIcon
          width='32'
          height='18'
          fill='none'
          viewBox='0 0 32 18'
          xmlns='http://www.w3.org/2000/svg'
          onClick={() => {
            setMenuOpen(true);
          }}
        >
          <rect width='32' height='2' fill='white' />
          <rect y='8' width='32' height='2' fill='white' />
          <rect y='16' width='32' height='2' fill='white' />
        </MenuIcon>
      )}
      {isMenuOpen && (
        <MenuIcon
          width='26'
          height='26'
          xmlns='http://www.w3.org/2000/svg'
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          <path
            d='M23.607.98l1.414 1.413L14.414 13l10.607 10.607-1.414 1.414L13 14.414 2.393 25.021.98 23.607 11.586 13 .98 2.393 2.393.98 13 11.586 23.607.98z'
            fill='#FFF'
            fill-rule='evenodd'
          />
        </MenuIcon>
      )}
    </NavContainer>
  );
};

export default TopNav;
