import styled from 'styled-components';
import device from '../styles/breakpoints';

const Section = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin: 6.25rem auto 0 auto;
  padding: 0 1.5rem;
  max-width: 640px;

  @media ${device.laptop} {
    margin: 4.5rem 0 0 0;
    padding: 0;
    max-width: 100%;
  }
`;

const ArticleTitle = styled.h2`
  font-family: Overpass, san-sans-serif;
  font-weight: 600;
  color: #1f3e5a;
  font-size: 1.75rem;
  line-height: 43px;
  letter-spacing: -0.84px;

  @media ${device.laptop} {
    letter-spacing: -1.2px;
    font-size: 2.5rem;
    line-height: 61px;
    position: absolute;
    top: 79px;
  }
`;

const BGCirclesMobile = styled.svg`
  margin-top: 2.375rem;
  display: block;

  @media ${device.laptop} {
    display: none;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 46px;

  @media ${device.laptop} {
    flex-direction: row;
    padding-left: 10.25rem;
    justify-content: space-between;
  }
`;

const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  & article:last-child {
    margin-top: 40px;
  }

  @media ${device.laptop} {
    margin-right: 4rem;
    width: 50%;

    & article:last-child {
      margin-top: 4rem;
    }
  }
`;

const BGCircles = styled.svg`
  display: none;
  width: 50%;

  @media ${device.laptop} {
    display: block;
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
    line-height: 2rem;
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
      margin-bottom: 1.5rem;
      line-height: 1.5rem;
    }
  }
`;

const EditorSVGMobile = (): JSX.Element => {
  return (
    <BGCirclesMobile
      width='375'
      height='331'
      viewBox='0 0 375 331'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='Group 10'>
        <g id='Group 21'>
          <rect
            id='Rectangle Copy'
            opacity='0.08'
            width='223'
            height='223'
            rx='111.5'
            transform='matrix(1 0 0 -1 77 276)'
            fill='#2D2E40'
          />
          <rect
            id='Rectangle Copy 4'
            opacity='0.5'
            x='0.5'
            y='-0.5'
            width='251'
            height='251'
            rx='125.5'
            transform='matrix(1 0 0 -1 62 288)'
            stroke='#2D2E40'
          />
          <rect
            id='Rectangle Copy 9'
            opacity='0.25'
            x='0.5'
            y='-0.5'
            width='325'
            height='325'
            rx='162.5'
            transform='matrix(1 0 0 -1 25 325)'
            stroke='#2D2E40'
          />
        </g>
        <g id='Group 14'>
          <g id='Group 13'>
            <g id='Mask' filter='url(#filter0_d2)'>
              <rect
                x='25'
                y='54'
                width='326'
                height='217'
                rx='5'
                fill='url(#paint0_linear)'
              />
            </g>
            <mask
              id='mask0'
              mask-type='alpha'
              maskUnits='userSpaceOnUse'
              x='25'
              y='54'
              width='326'
              height='217'
            >
              <rect
                id='Mask_2'
                x='25'
                y='54'
                width='326'
                height='217'
                rx='5'
                fill='white'
              />
            </mask>
            <g mask='url(#mask0)'>
              <path
                id='Mask Copy'
                d='M25 120.525C25 118.868 26.3431 117.525 28 117.525H348C349.657 117.525 351 118.868 351 120.525V268C351 269.657 349.657 271 348 271H28C26.3432 271 25 269.657 25 268V120.525Z'
                fill='#2D2E40'
              />
              <rect
                id='Mask Copy 2'
                x='70.9666'
                y='78.2458'
                width='68.9499'
                height='69.7067'
                rx='3'
                fill='white'
              />
              <ellipse
                id='Oval'
                cx='105.442'
                cy='113.402'
                rx='19.9592'
                ry='20.0028'
                fill='#2D2E40'
              />
              <rect
                id='Mask Copy 3'
                x='151.408'
                y='78.2458'
                width='153.625'
                height='165.478'
                rx='3'
                fill='white'
              />
            </g>
          </g>
          <path
            id='Path 2'
            d='M131 198C131 198 166.807 141.909 183.964 137.38C201.122 132.851 196.003 179.754 220.708 174.318C245.413 168.882 248.425 121.324 267.111 119.084C285.796 116.843 295.682 160.341 303.844 164.348C312.006 168.356 324 147.016 324 147.016'
            stroke='url(#paint1_linear2)'
            stroke-width='8'
            stroke-linecap='round'
          />
        </g>
      </g>
      <defs>
        <filter
          id='filter0_d2'
          x='-15'
          y='34'
          width='406'
          height='297'
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
          id='paint0_linear'
          x1='-138'
          y1='162.5'
          x2='62.1893'
          y2='463.245'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#FF8F71' />
          <stop offset='1' stop-color='#FF3E55' />
        </linearGradient>
        <linearGradient
          id='paint1_linear2'
          x1='34.5'
          y1='158.5'
          x2='89.8926'
          y2='293.826'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#FF8F71' />
          <stop offset='1' stop-color='#FF3E55' />
        </linearGradient>
      </defs>
    </BGCirclesMobile>
  );
};

const EditorSVGDesktop = (): JSX.Element => {
  return (
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
        <rect x='40' y='242' width='642' height='427' rx='15' fill='white' />
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
  );
};

export const InfoArticle = () => {
  return (
    <Section>
      <ArticleTitle>Designed for the future</ArticleTitle>
      <EditorSVGMobile />
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
        <EditorSVGDesktop />
      </Container>
    </Section>
  );
};

export default InfoArticle;
