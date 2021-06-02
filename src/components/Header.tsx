import styled from 'styled-components';
import TopNav from './TopNav';
import PillButton from './PillButton';

import device from '../styles/breakpoints';

const Header = styled.header`
  height: 37.5rem;
  background: linear-gradient(135deg, #ff8f71 0%, #ff3e55 100%);
  border-radius: 0px 0px 0px 100px;
  position: relative;
  overflow: hidden;
`;

const BGPattern = styled.svg`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
`;

const HeadingTitle = styled.h1`
  font-family: 'Overpass', sans-serif;
  color: #fff;
  font-weight: 600;
  text-align: center;

  font-size: 2.25rem;
  line-height: 55.15px;
  letter-spacing: -1.08px;

  @media ${device.tablet} {
    font-size: 4rem;
    line-height: 98px;
    letter-spacing: -1.92px;
  }
`;

const HeadingSubTitle = styled(HeadingTitle)`
  font-weight: 300;
  font-size: 1.25rem;
  line-height: 30px;
  letter-spacing: unset;

  @media ${device.tablet} {
    font-size: 1.125rem;
  }
`;

const NavContainer = styled.div`
  position: relative;
`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6.125rem;
  padding: 0 1.5rem;

  @media ${device.tablet} {
    margin-top: 7.125rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2.375rem;

  @media ${device.tablet} {
    margin-top: 3rem;
  }
`;

export const IntroSection = (): JSX.Element => {
  return (
    <Header>
      <BGPattern
        width='1440'
        height='600'
        viewBox='0 0 1440 600'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M1408.97 -575.148L679.488 -869.876L384.144 -138.874L1020.9 118.393C1072.11 139.082 1130.39 114.342 1151.08 63.1352L1408.97 -575.148ZM402.926 867.888C201.487 786.502 104.473 556.463 185.86 355.024C267.247 153.584 496.831 55.5 698.27 136.887C899.71 218.274 996.724 448.312 915.337 649.752C833.95 851.191 604.366 949.275 402.926 867.888ZM2260.34 -231.172L1530.86 -525.899L1272.98 112.384C1252.29 163.591 1277.03 221.874 1328.23 242.563L1964.99 499.83L2260.34 -231.172ZM888.035 1065.15L1617.51 1359.88L1912.86 628.874L1276.1 371.607C1224.89 350.918 1166.61 375.658 1145.92 426.865L888.035 1065.15Z'
          fill='url(#paint0_linear)'
        />
        <defs>
          <linearGradient
            id='paint0_linear'
            x1='-432.348'
            y1='-393.704'
            x2='519.975'
            y2='1829.92'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#FF8F71' />
            <stop offset='1' stopColor='#FF3E55' />
          </linearGradient>
        </defs>
      </BGPattern>
      <NavContainer>
        <TopNav />
        <HeadingContainer>
          <HeadingTitle>A modern publishing platform</HeadingTitle>
          <HeadingSubTitle>
            Grow your audience and build your online brand
          </HeadingSubTitle>
          <ButtonContainer>
            <PillButton
              text='Start for Free'
              isSolid={true}
              padding='1rem'
              margin='0 1rem 0 0'
            />
            <PillButton
              text='Learn More'
              isSolid={false}
              padding='1rem'
              border='1px #FFF solid'
            />
          </ButtonContainer>
        </HeadingContainer>
      </NavContainer>
    </Header>
  );
};

export default IntroSection;
