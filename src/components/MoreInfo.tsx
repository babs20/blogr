import styled from 'styled-components';
import device from '../styles/breakpoints';

const Section = styled.section`
  position: relative;
  margin-top: 66px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 1.5rem;

  @media ${device.laptop} {
    padding: 0 10.25rem 0 0;
    flex-direction: row;
  }
`;

const Laptop = styled.svg`
  display: none;

  @media ${device.laptop} {
    display: block;
    width: 50%;
  }
`;

const LaptopMobile = styled.svg`
  display: block;

  @media ${device.laptop} {
    display: none;
  }
`;

const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 46px;

  & article:last-child {
    margin-top: 68px;
  }

  @media ${device.laptop} {
    margin-top: 1rem;
    margin-left: 4rem;
    width: 50%;

    & article:last-child {
      margin-top: 4rem;
    }
  }
`;

const Article = styled.article`
  font-family: Overpass, sans-serif;
  text-align: center;

  h3 {
    font-weight: 600;
    font-size: 1.75rem;
    color: #1f3e5a;
    margin-bottom: 1rem;
    line-height: 32px;
  }

  p {
    font-weight: 300;
    color: #4c5862;
    letter-spacing: 0.5px;
    line-height: 1.75rem;
  }

  @media ${device.laptop} {
    text-align: left;

    h3 {
      line-height: 28px;
      margin-bottom: 1.5rem;
    }
  }
`;

const LaptopSVGDesktop = (): JSX.Element => {
  return (
    <Laptop
      width='650'
      height='786'
      viewBox='0 0 650 786'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        opacity='0.5'
        x='0.5'
        y='-0.5'
        width='665'
        height='667'
        rx='332.5'
        transform='matrix(1 0 0 -1 -220 726)'
        stroke='#2D2E40'
      />
      <rect
        opacity='0.25'
        x='0.5'
        y='-0.5'
        width='783'
        height='785'
        rx='391.5'
        transform='matrix(1 0 0 -1 -279 785)'
        stroke='#2D2E40'
      />
      <rect
        opacity='0.08'
        width='550'
        height='552'
        rx='275'
        transform='matrix(1 0 0 -1 -162 669)'
        fill='#2D2E40'
      />
      <g>
        <rect x='-7' y='208' width='538' height='368' rx='12' fill='#535353' />
        <rect x='-4' y='211' width='532' height='362' rx='10' fill='#1D1D25' />
        <rect
          x='10'
          y='224'
          width='506'
          height='335.872'
          rx='3'
          fill='url(#paint0_linear)'
        />

        <g>
          <rect
            x='9.67529'
            y='284.293'
            width='506'
            height='275.838'
            rx='3'
            fill='#F9F6F6'
          />
          <rect
            x='81.4753'
            y='261.459'
            width='106.646'
            height='256.541'
            rx='3'
            fill='white'
          />
          <rect
            x='206.274'
            y='261.459'
            width='238.251'
            height='256.541'
            rx='3'
            fill='white'
          />
          <rect
            x='216.484'
            y='275.081'
            width='217.83'
            height='60.1622'
            rx='3'
            fill='#E7E7E7'
          />
          <rect
            x='216.484'
            y='347.73'
            width='64.6682'
            height='60.1622'
            rx='3'
            fill='#E7E7E7'
          />
          <rect
            x='297.036'
            y='347.73'
            width='137.278'
            height='60.1622'
            rx='3'
            fill='#E7E7E7'
          />
        </g>
        <rect
          opacity='0.0979818'
          x='260'
          y='192'
          width='13.6'
          height='3'
          rx='1.5'
          fill='#4A5166'
        />
        <rect
          opacity='0.0979818'
          x='276.8'
          y='192'
          width='3.2'
          height='3'
          rx='1.5'
          fill='#4A5166'
        />
        <path
          d='M-89 575C-89 573.343 -87.6569 572 -86 572H606.899C608.556 572 609.899 573.343 609.899 575V589.105H-89V575Z'
          fill='#52526F'
        />
        <mask
          id='mask1'
          mask-type='alpha'
          maskUnits='userSpaceOnUse'
          x='-89'
          y='572'
          width='699'
          height='18'
        >
          <path
            d='M-89 575C-89 573.343 -87.6569 572 -86 572H606.899C608.556 572 609.899 573.343 609.899 575V589.105H-89V575Z'
            fill='white'
          />
        </mask>
        <g mask='url(#mask1)'>
          <rect
            x='203.371'
            y='530.092'
            width='114.156'
            height='52.1711'
            rx='10'
            fill='#2F2F47'
          />
        </g>
        <path
          d='M-89 589H610C610 592.314 607.314 595 604 595H-83C-86.3137 595 -89 592.314 -89 589Z'
          fill='#393A56'
        />
      </g>
      <defs>
        <filter
          id='filter0_d'
          x='-129'
          y='172'
          width='779'
          height='483'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          />
          <feOffset dy='20' />
          <feGaussianBlur stdDeviation='20' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.421822 0 0 0 0 0.554338 0 0 0 0 0.89371 0 0 0 0.243444 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow'
            result='shape'
          />
        </filter>
        <linearGradient
          id='paint0_linear'
          x1='-243'
          y1='391.936'
          x2='66.5165'
          y2='858.23'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FF8F71' />
          <stop offset='1' stopColor='#FF3E55' />
        </linearGradient>
      </defs>
    </Laptop>
  );
};

const LaptopSVGMobile = (): JSX.Element => {
  return (
    <LaptopMobile
      width='328'
      height='326'
      viewBox='0 0 328 326'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clip-path='url(#clip0)'>
        <rect
          opacity='0.08'
          width='223'
          height='223'
          rx='111.5'
          transform='matrix(1 0 0 -1 53 276)'
          fill='#2D2E40'
        />
        <rect
          opacity='0.5'
          x='0.5'
          y='-0.5'
          width='251'
          height='251'
          rx='125.5'
          transform='matrix(1 0 0 -1 38 288)'
          stroke='#2D2E40'
        />
        <rect
          opacity='0.25'
          x='0.5'
          y='-0.5'
          width='325'
          height='325'
          rx='162.5'
          transform='matrix(1 0 0 -1 1 325)'
          stroke='#2D2E40'
        />
        <g filter='url(#filter0_d3)'>
          <rect x='39' y='75' width='252' height='173' rx='12' fill='#535353' />
          <rect x='40' y='77' width='250' height='170' rx='10' fill='#1D1D25' />
          <rect
            x='47'
            y='83'
            width='237'
            height='157.94'
            rx='3'
            fill='url(#paint0_linear3)'
          />
          <mask
            id='mask02'
            mask-type='alpha'
            maskUnits='userSpaceOnUse'
            x='47'
            y='83'
            width='237'
            height='158'
          >
            <rect
              x='47'
              y='83'
              width='237'
              height='157.94'
              rx='3'
              fill='white'
            />
          </mask>
          <g mask='url(#mask02)'>
            <rect
              x='46.8479'
              y='111.352'
              width='237'
              height='129.709'
              rx='3'
              fill='#F9F6F6'
            />
            <rect
              x='80.4775'
              y='100.615'
              width='49.9507'
              height='120.635'
              rx='3'
              fill='white'
            />
            <rect
              x='138.93'
              y='100.615'
              width='111.592'
              height='120.635'
              rx='3'
              fill='white'
            />
            <rect
              x='143.713'
              y='107.02'
              width='102.027'
              height='28.2905'
              rx='3'
              fill='#E7E7E7'
            />
            <rect
              x='143.713'
              y='141.182'
              width='30.2892'
              height='28.2905'
              rx='3'
              fill='#E7E7E7'
            />
            <rect
              x='181.442'
              y='141.182'
              width='64.2982'
              height='28.2905'
              rx='3'
              fill='#E7E7E7'
            />
          </g>
          <rect
            opacity='0.0979818'
            x='164'
            y='68'
            width='6.12'
            height='1'
            rx='0.5'
            fill='#4A5166'
          />
          <rect
            opacity='0.0979818'
            x='171.56'
            y='68'
            width='1.44'
            height='1'
            rx='0.5'
            fill='#4A5166'
          />
          <path
            d='M0 249C0 247.343 1.34315 246 3 246H324.953C326.609 246 327.953 247.343 327.953 249V253.602H0V249Z'
            fill='#52526F'
          />
          <mask
            id='mask12'
            mask-type='alpha'
            maskUnits='userSpaceOnUse'
            x='0'
            y='246'
            width='328'
            height='8'
          >
            <path
              d='M0 249C0 247.343 1.34315 246 3 246H324.953C326.609 246 327.953 247.343 327.953 249V253.602H0V249Z'
              fill='white'
            />
          </mask>
          <g mask='url(#mask12)'>
            <rect
              x='137.193'
              y='227.374'
              width='53.5669'
              height='23.1871'
              rx='10'
              fill='#2F2F47'
            />
          </g>
          <path
            d='M0 254H328C328 255.657 326.657 257 325 257H3C1.34314 257 0 255.657 0 254Z'
            fill='#393A56'
          />
        </g>
      </g>
      <defs>
        <filter
          id='filter0_d3'
          x='-40'
          y='48'
          width='408'
          height='269'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          />
          <feOffset dy='20' />
          <feGaussianBlur stdDeviation='20' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.421822 0 0 0 0 0.554338 0 0 0 0 0.89371 0 0 0 0.243444 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow'
            result='shape'
          />
        </filter>
        <linearGradient
          id='paint0_linear3'
          x1='-71.5'
          y1='161.97'
          x2='74.2695'
          y2='380.707'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#FF8F71' />
          <stop offset='1' stop-color='#FF3E55' />
        </linearGradient>
      </defs>
    </LaptopMobile>
  );
};

export const InfoArticle = () => {
  return (
    <Section>
      <Container>
        <LaptopSVGDesktop />
        <LaptopSVGMobile />
        <ArticleWrapper>
          <Article>
            <h3>Free, open, simple</h3>
            <p>
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, and works seamlessly with Google
              Analytics. The architecture is clean and is relatively easy to
              learn.
            </p>
          </Article>
          <Article>
            <h3>Powerful tooling</h3>
            <p>
              Batteries included. We built a simple and straightforward CLI tool
              that makes customization and deployment a breeze, but capable of
              producing even the most complicated sites.
            </p>
          </Article>
        </ArticleWrapper>
      </Container>
    </Section>
  );
};

export default InfoArticle;
