import styled from 'styled-components';

const Section = styled.section`
  position: relative;
  margin-top: 66px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const Article = styled.article`
  font-family: Overpass, sans-serif;
  h3 {
    font-weight: 600;
    font-size: 1.75rem;
    color: #1f3e5a;
    margin-bottom: 1.5rem;
  }

  p {
    font-weight: 300;
    color: #4c5862;
    letter-spacing: 0.5px;
    line-height: 1.75rem;
  }
`;

const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-top: 1rem;
  margin-right: 4rem;

  & article:first-child {
    margin-bottom: 4rem;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-right: 10.25rem;
  justify-content: space-between;
  width: 100%;
`;

const BGCircles = styled.svg`
  width: 50%;
`;

export const InfoArticle = () => {
  return (
    <Section>
      <Container>
        <BGCircles
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
            <rect
              x='-7'
              y='208'
              width='538'
              height='368'
              rx='12'
              fill='#535353'
            />
            <rect
              x='-4'
              y='211'
              width='532'
              height='362'
              rx='10'
              fill='#1D1D25'
            />
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
        </BGCircles>
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
