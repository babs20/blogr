import styled from 'styled-components';

const Section = styled.section`
  position: relative;
  margin-top: 4.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const ArticleTitle = styled.h2`
  font-family: Overpass, san-sans-serif;
  font-weight: 600;
  color: #1f3e5a;
  letter-spacing: -1.2px;
  font-size: 2.5rem;
  line-height: 61px;
  position: absolute;
  top: 79px;
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
  padding-left: 10.25rem;
  justify-content: space-between;
  width: 100%;
`;

const BGCircles = styled.svg`
  width: 50%;
`;

export const InfoArticle = () => {
  return (
    <Section>
      <ArticleTitle>Designed for the future</ArticleTitle>
      <Container>
        <ArticleWrapper>
          <Article>
            <h3>Introducing an extensible editor</h3>
            <p>
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </Article>
          <Article>
            <h3>Robust content management</h3>
            <p>
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </Article>
        </ArticleWrapper>
        <BGCircles
          width='650'
          height='882'
          viewBox='0 0 650 882'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect
            opacity='0.08'
            width='600'
            height='602'
            rx='300'
            transform='matrix(1 0 0 -1 185 746)'
            fill='#2D2E40'
          />
          <rect
            opacity='0.5'
            x='0.5'
            y='-0.5'
            width='679'
            height='681'
            rx='339.5'
            transform='matrix(1 0 0 -1 145 781)'
            stroke='#2D2E40'
          />
          <rect
            opacity='0.25'
            x='0.5'
            y='-0.5'
            width='879'
            height='881'
            rx='439.5'
            transform='matrix(1 0 0 -1 45 881)'
            stroke='#2D2E40'
          />
          <g filter='url(#filter0_d)'>
            <rect
              x='40'
              y='242'
              width='642'
              height='427'
              rx='15'
              fill='url(#paint0_linear)'
            />
          </g>
          <mask
            id='mask0'
            mask-type='alpha'
            maskUnits='userSpaceOnUse'
            x='40'
            y='242'
            width='642'
            height='427'
          >
            <rect
              x='40'
              y='242'
              width='642'
              height='427'
              rx='15'
              fill='white'
            />
          </mask>
          <g mask='url(#mask0)'>
            <path
              d='M40 370C40 368.343 41.3431 367 43 367H679C680.657 367 682 368.343 682 370V666C682 667.657 680.657 669 679 669H43C41.3431 669 40 667.657 40 666V370Z'
              fill='#2D2E40'
            />
            <rect
              x='130.523'
              y='289.71'
              width='135.785'
              height='137.165'
              rx='3'
              fill='white'
            />
            <ellipse
              cx='198.416'
              cy='358.888'
              rx='39.3061'
              ry='39.3603'
              fill='#2D2E40'
            />
            <rect
              x='288.939'
              y='289.71'
              width='302.538'
              height='325.617'
              rx='3'
              fill='white'
            />
          </g>
          <path
            d='M249 526C249 526 319.687 415.949 353.557 407.062C387.427 398.176 377.322 490.202 426.092 479.535C474.862 468.869 480.808 375.561 517.695 371.164C554.582 366.768 574.097 452.111 590.21 459.974C606.323 467.837 630 425.968 630 425.968'
            stroke='url(#paint1_linear)'
            strokeWidth='8'
            strokeLinecap='round'
          />
          <defs>
            <filter
              id='filter0_d'
              x='0'
              y='222'
              width='722'
              height='507'
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
              x1='-281'
              y1='455.5'
              x2='112.798'
              y2='1047.58'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#FF8F71' />
              <stop offset='1' stopColor='#FF3E55' />
            </linearGradient>
            <linearGradient
              id='paint1_linear'
              x1='58.5'
              y1='448.5'
              x2='166.707'
              y2='714.479'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#FF8F71' />
              <stop offset='1' stopColor='#FF3E55' />
            </linearGradient>
          </defs>
        </BGCircles>
      </Container>
    </Section>
  );
};

export default InfoArticle;
