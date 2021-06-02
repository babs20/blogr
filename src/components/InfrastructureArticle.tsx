import styled from 'styled-components';
import device from '../styles/breakpoints';

const Section = styled.section`
  background: linear-gradient(135deg, #2d2e40 0%, #3f4164 100%);
  border-radius: 0px 100px;
  position: relative;
  margin-top: 273px;

  @media ${device.laptop} {
    margin-top: 0.5rem;
    height: 400px;
  }
`;

const Container = styled.div`
  @media ${device.laptop} {
    display: flex;
    align-items: center;
    top: -49px;
    max-width: 1110px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }
`;

const BGPattern = styled.svg`
  display: none;

  @media ${device.laptop} {
    display: block;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
  }
`;

const BGPatternMobile = styled.svg`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  border-radius: 0px 100px;

  @media ${device.laptop} {
    display: none;
  }
`;

const Content = styled.div`
  position: relative;
  top: -173px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.5rem;

  @media ${device.laptop} {
    display: flex;
    flex-direction: row;
    align-items: center;
    top: -49px;
  }
`;

const Phones = styled.svg`
  display: none;
  @media ${device.laptop} {
    position: relative;
    display: inline;
    flex-shrink: 0;
  }
`;

const PhonesMobile = styled.svg`
  margin-bottom: 47px;

  @media ${device.laptop} {
    display: none;
  }
`;

const Article = styled.article`
  color: #fff;
  font-family: Overpass, sans-serif;
  text-align: center;

  h2 {
    font-weight: 600;
    font-size: 2.5rem;
    line-height: 61.28px;
    letter-spacing: -1.2px;
  }

  p {
    font-weight: 300px;
    letter-spacing: 0.5px;
    line-height: 28px;
    margin-top: 10px;
  }

  @media ${device.laptop} {
    margin-left: 6.125rem;
    width: 50%;
    text-align: left;
    p {
      margin-top: 0;
    }
  }
`;

export const InfrastructureArticle = () => {
  return (
    <Section>
      <Container>
        <BGPattern
          width='1440'
          height='400'
          viewBox='0 0 1440 400'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g>
            <rect
              width='588'
              height='590'
              rx='294'
              transform='matrix(1 0 0 -1 0 295)'
              fill='#3E4062'
            />
            <rect
              opacity='0.5'
              x='0.5'
              y='-0.5'
              width='1013'
              height='1017'
              rx='506.5'
              transform='matrix(1 0 0 -1 -213 508)'
              stroke='#878D92'
            />
            <rect
              x='0.5'
              y='-0.5'
              width='673'
              height='675'
              rx='336.5'
              transform='matrix(1 0 0 -1 -43 337)'
              stroke='#878D92'
            />
          </g>
        </BGPattern>
        <BGPatternMobile
          width='375'
          height='625'
          viewBox='0 0 375 625'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g>
            <rect
              width='349'
              height='350'
              rx='174.5'
              transform='matrix(1 0 0 -1 14 240)'
              fill='#3E4062'
            />
            <rect
              opacity='0.5'
              x='0.5'
              y='-0.5'
              width='601'
              height='603'
              rx='300.5'
              transform='matrix(1 0 0 -1 -113 366)'
              stroke='#878D92'
            />
            <rect
              x='0.5'
              y='-0.5'
              width='399'
              height='400'
              rx='199.5'
              transform='matrix(1 0 0 -1 -12 265)'
              stroke='#878D92'
            />
          </g>
        </BGPatternMobile>
        <Content>
          <Phones
            width='472'
            height='499'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
          >
            <defs>
              <filter
                x='-32.1%'
                y='-11.5%'
                width='164.2%'
                height='132.2%'
                filterUnits='objectBoundingBox'
                id='b'
              >
                <feOffset
                  dy='20'
                  in='SourceAlpha'
                  result='shadowOffsetOuter1'
                />
                <feGaussianBlur
                  stdDeviation='20'
                  in='shadowOffsetOuter1'
                  result='shadowBlurOuter1'
                />
                <feColorMatrix
                  values='0 0 0 0 0.421821759 0 0 0 0 0.554338424 0 0 0 0 0.893710371 0 0 0 0.243444056 0'
                  in='shadowBlurOuter1'
                />
              </filter>
              <filter
                x='-21%'
                y='-42.8%'
                width='142%'
                height='219.8%'
                filterUnits='objectBoundingBox'
                id='e'
              >
                <feOffset
                  dy='10'
                  in='SourceAlpha'
                  result='shadowOffsetOuter1'
                />
                <feGaussianBlur
                  stdDeviation='10'
                  in='shadowOffsetOuter1'
                  result='shadowBlurOuter1'
                />
                <feColorMatrix
                  values='0 0 0 0 0.421821759 0 0 0 0 0.554338424 0 0 0 0 0.893710371 0 0 0 0.243444056 0'
                  in='shadowBlurOuter1'
                />
              </filter>
              <filter
                x='-21%'
                y='-42.8%'
                width='142%'
                height='219.8%'
                filterUnits='objectBoundingBox'
                id='g'
              >
                <feOffset
                  dy='10'
                  in='SourceAlpha'
                  result='shadowOffsetOuter1'
                />
                <feGaussianBlur
                  stdDeviation='10'
                  in='shadowOffsetOuter1'
                  result='shadowBlurOuter1'
                />
                <feColorMatrix
                  values='0 0 0 0 0.421821759 0 0 0 0 0.554338424 0 0 0 0 0.893710371 0 0 0 0.243444056 0'
                  in='shadowBlurOuter1'
                />
              </filter>
              <filter
                x='-21%'
                y='-42.8%'
                width='142%'
                height='219.8%'
                filterUnits='objectBoundingBox'
                id='i'
              >
                <feOffset
                  dy='10'
                  in='SourceAlpha'
                  result='shadowOffsetOuter1'
                />
                <feGaussianBlur
                  stdDeviation='10'
                  in='shadowOffsetOuter1'
                  result='shadowBlurOuter1'
                />
                <feColorMatrix
                  values='0 0 0 0 0.421821759 0 0 0 0 0.554338424 0 0 0 0 0.893710371 0 0 0 0.243444056 0'
                  in='shadowBlurOuter1'
                />
              </filter>
              <filter
                x='-21%'
                y='-42.8%'
                width='142%'
                height='219.8%'
                filterUnits='objectBoundingBox'
                id='k'
              >
                <feOffset
                  dy='10'
                  in='SourceAlpha'
                  result='shadowOffsetOuter1'
                />
                <feGaussianBlur
                  stdDeviation='10'
                  in='shadowOffsetOuter1'
                  result='shadowBlurOuter1'
                />
                <feColorMatrix
                  values='0 0 0 0 0.421821759 0 0 0 0 0.554338424 0 0 0 0 0.893710371 0 0 0 0.243444056 0'
                  in='shadowBlurOuter1'
                />
              </filter>
              <filter
                x='-21%'
                y='-42.8%'
                width='142%'
                height='219.8%'
                filterUnits='objectBoundingBox'
                id='m'
              >
                <feOffset
                  dy='10'
                  in='SourceAlpha'
                  result='shadowOffsetOuter1'
                />
                <feGaussianBlur
                  stdDeviation='10'
                  in='shadowOffsetOuter1'
                  result='shadowBlurOuter1'
                />
                <feColorMatrix
                  values='0 0 0 0 0.421821759 0 0 0 0 0.554338424 0 0 0 0 0.893710371 0 0 0 0.243444056 0'
                  in='shadowBlurOuter1'
                />
              </filter>
              <filter
                x='-32.1%'
                y='-11.5%'
                width='164.2%'
                height='132.2%'
                filterUnits='objectBoundingBox'
                id='o'
              >
                <feOffset
                  dy='20'
                  in='SourceAlpha'
                  result='shadowOffsetOuter1'
                />
                <feGaussianBlur
                  stdDeviation='20'
                  in='shadowOffsetOuter1'
                  result='shadowBlurOuter1'
                />
                <feColorMatrix
                  values='0 0 0 0 0.421821759 0 0 0 0 0.554338424 0 0 0 0 0.893710371 0 0 0 0.243444056 0'
                  in='shadowBlurOuter1'
                />
              </filter>
              <rect id='f' x='0' y='0' width='166.649' height='58.441' rx='4' />
              <rect
                id='h'
                x='0'
                y='72.397'
                width='166.649'
                height='58.441'
                rx='4'
              />
              <rect
                id='j'
                x='0'
                y='144.794'
                width='166.649'
                height='58.441'
                rx='4'
              />
              <rect
                id='l'
                x='0'
                y='217.192'
                width='166.649'
                height='58.441'
                rx='4'
              />
              <rect
                id='n'
                x='0'
                y='289.589'
                width='166.649'
                height='58.441'
                rx='4'
              />
              <linearGradient
                x1='38.371%'
                y1='0%'
                x2='61.629%'
                y2='100%'
                id='a'
              >
                <stop stopColor='#FF8F71' offset='0%' />
                <stop stopColor='#FF3E55' offset='100%' />
              </linearGradient>
              <linearGradient
                x1='0%'
                y1='42.512%'
                x2='100%'
                y2='57.488%'
                id='d'
              >
                <stop stopColor='#FF8F71' offset='0%' />
                <stop stopColor='#FF3E55' offset='100%' />
              </linearGradient>
              <path
                d='M204.442 401.894c0 10.587-7.815 19.708-18.398 19.708H35.126c-10.584 0-19.786-9.121-19.786-19.708V30.059c0-10.587 9.202-18.327 19.786-18.327h17.447c3.689 0 5.051-.422 5.275 4.255.116 2.43 1.007 4.318 2.435 5.881 1.426 1.534 3.39 2.794 5.646 3.501 1.531.48 3.236.914 4.861.914h79.751c1.626 0 3.33-.534 4.861-1.013 2.258-.707 4.22-1.887 5.647-3.392 1.428-1.535 2.319-3.344 2.434-5.773.223-4.676 1.587-4.373 5.276-4.373h17.285c10.583 0 18.398 7.74 18.398 18.327v371.835zM98.847 13.55h23.637c1.004 0 1.819.622 1.819 1.515 0 .893-.815 1.516-1.819 1.516H98.847c-1.005 0-1.818-.623-1.818-1.516s.813-1.515 1.818-1.515zm36.063.522a2.653 2.653 0 11-5.306 0 2.653 2.653 0 015.306 0zm81.048 84.968V31.254c0-17.144-13.893-31.042-31.032-31.042H34.148c-17.677 0-32.142 14.47-32.142 32.155v24.839a1.819 1.819 0 00-1.819 1.818v12.733a1.82 1.82 0 001.819 1.82v15.157a1.82 1.82 0 00-1.819 1.82v27.284a1.82 1.82 0 001.819 1.818v9.095a1.82 1.82 0 00-1.819 1.818v27.285a1.82 1.82 0 001.819 1.82V403.29c0 17.74 14.509 32.257 32.243 32.257h150.677c17.067 0 31.032-13.97 31.032-31.043v-255.14h.605a1.819 1.819 0 001.82-1.819v-46.685c0-1.005-.814-1.82-1.82-1.82h-.605z'
                id='c'
              />
              <path
                d='M204.442 401.894c0 10.587-7.815 19.708-18.398 19.708H35.126c-10.584 0-19.786-9.121-19.786-19.708V30.059c0-10.587 9.202-18.327 19.786-18.327h17.447c3.689 0 5.051-.422 5.275 4.255.116 2.43 1.007 4.318 2.435 5.881 1.426 1.534 3.39 2.794 5.646 3.501 1.531.48 3.236.914 4.861.914h79.751c1.626 0 3.33-.534 4.861-1.013 2.258-.707 4.22-1.887 5.647-3.392 1.428-1.535 2.319-3.344 2.434-5.773.223-4.676 1.587-4.373 5.276-4.373h17.285c10.583 0 18.398 7.74 18.398 18.327v371.835zM98.847 13.55h23.637c1.004 0 1.819.622 1.819 1.515 0 .893-.815 1.516-1.819 1.516H98.847c-1.005 0-1.818-.623-1.818-1.516s.813-1.515 1.818-1.515zm36.063.522a2.653 2.653 0 11-5.306 0 2.653 2.653 0 015.306 0zm81.048 84.968V31.254c0-17.144-13.893-31.042-31.032-31.042H34.148c-17.677 0-32.142 14.47-32.142 32.155v24.839a1.819 1.819 0 00-1.819 1.818v12.733a1.82 1.82 0 001.819 1.82v15.157a1.82 1.82 0 00-1.819 1.82v27.284a1.82 1.82 0 001.819 1.818v9.095a1.82 1.82 0 00-1.819 1.818v27.285a1.82 1.82 0 001.819 1.82V403.29c0 17.74 14.509 32.257 32.243 32.257h150.677c17.067 0 31.032-13.97 31.032-31.043v-255.14h.605a1.819 1.819 0 001.82-1.819v-46.685c0-1.005-.814-1.82-1.82-1.82h-.605z'
                id='p'
              />
            </defs>
            <g fill='none' fillRule='evenodd'>
              <g transform='translate(0 0)'>
                <rect
                  fill='url(#a)'
                  x='8'
                  y='5'
                  width='204'
                  height='423'
                  rx='22'
                />
                <path
                  d='M65 227.56v-25.278h9.316c1.734 0 3.232.267 4.496.8 1.264.535 2.239 1.294 2.925 2.28.686.984 1.03 2.141 1.03 3.47 0 1.21-.266 2.273-.795 3.187a5.63 5.63 0 01-2.24 2.154c1.3.498 2.312 1.287 3.034 2.367s1.083 2.356 1.083 3.828c0 1.471-.385 2.74-1.155 3.809-.77 1.068-1.854 1.899-3.25 2.492s-3.045.89-4.947.89H65zm5.2-20.9v5.804h3.539c1.18 0 2.088-.243 2.726-.73.638-.487.957-1.205.957-2.154 0-.95-.32-1.673-.957-2.172-.638-.498-1.547-.747-2.726-.747h-3.54zm0 16.52h4.044c1.348 0 2.39-.285 3.124-.854.734-.57 1.101-1.389 1.101-2.457 0-1.068-.367-1.887-1.101-2.456-.735-.57-1.776-.855-3.124-.855H70.2v6.622zm16.863 4.38V201h5.056v26.56h-5.056zm18.272.533c-1.42 0-2.732-.249-3.936-.747a9.577 9.577 0 01-3.142-2.083 9.438 9.438 0 01-2.076-3.151c-.494-1.21-.74-2.528-.74-3.952s.252-2.735.758-3.934a9.78 9.78 0 012.112-3.15 9.594 9.594 0 013.178-2.101c1.216-.499 2.546-.748 3.99-.748 1.42 0 2.733.25 3.936.748a9.577 9.577 0 013.142 2.083 9.482 9.482 0 012.076 3.133c.494 1.198.74 2.51.74 3.934 0 1.424-.252 2.741-.758 3.951a9.73 9.73 0 01-2.112 3.169 9.594 9.594 0 01-3.178 2.1c-1.216.499-2.546.748-3.99.748zm.072-4.486c.915 0 1.733-.237 2.456-.712.722-.474 1.293-1.121 1.715-1.94.421-.819.632-1.75.632-2.795 0-1.044-.211-1.976-.632-2.795-.422-.818-.993-1.465-1.715-1.94-.723-.475-1.541-.712-2.456-.712s-1.733.237-2.455.712c-.723.475-1.294 1.122-1.716 1.94-.42.82-.632 1.75-.632 2.795s.211 1.976.632 2.795c.422.819.993 1.466 1.716 1.94.722.475 1.54.712 2.455.712zm21.124 3.418a8.081 8.081 0 01-3.376-.712 8.295 8.295 0 01-2.726-1.976 9.246 9.246 0 01-1.806-2.955c-.433-1.127-.65-2.344-.65-3.649 0-1.353.223-2.605.668-3.756a9.131 9.131 0 011.878-3.008 8.894 8.894 0 012.817-2.012c1.07-.486 2.232-.73 3.484-.73 1.228 0 2.335.244 3.322.73a6.447 6.447 0 012.456 2.118l.108-2.314h4.658v16.555c0 1.448-.234 2.765-.704 3.952a8.774 8.774 0 01-2.004 3.062 8.961 8.961 0 01-3.087 1.976c-1.192.463-2.51.694-3.954.694-1.42 0-2.697-.22-3.828-.659a9.174 9.174 0 01-2.961-1.833 8.656 8.656 0 01-1.986-2.742l4.839-1.174a4.737 4.737 0 001.679 1.62c.686.391 1.462.587 2.329.587.939 0 1.751-.208 2.437-.623a4.283 4.283 0 001.607-1.745c.385-.747.578-1.62.578-2.616v-1.531a6.795 6.795 0 01-2.474 2.011c-.999.487-2.1.73-3.304.73zm1.228-4.415c.89 0 1.68-.22 2.365-.658a4.816 4.816 0 001.643-1.78c.41-.748.614-1.596.614-2.546 0-.95-.204-1.798-.614-2.545a4.816 4.816 0 00-1.643-1.78c-.686-.44-1.474-.66-2.365-.66-.89 0-1.679.22-2.365.66a4.816 4.816 0 00-1.643 1.78c-.41.747-.614 1.596-.614 2.545 0 .95.205 1.798.614 2.546.41.747.957 1.34 1.643 1.78.686.439 1.474.658 2.365.658zm13.65 4.95V208.76h4.658l.18 2.848c.482-.996 1.132-1.762 1.95-2.296.819-.534 1.782-.801 2.89-.801.336 0 .673.03 1.01.089.337.06.638.137.903.231l-.542 4.914a3.86 3.86 0 00-.812-.196 6.647 6.647 0 00-.849-.054c-1.396 0-2.467.422-3.213 1.264-.747.843-1.12 2.035-1.12 3.578v9.221h-5.055z'
                  fill='#FFF'
                  fillRule='nonzero'
                />
                <use fill='#000' filter='url(#b)' xlinkHref='#c' />
                <use fill='#1D1D25' xlinkHref='#c' />
                <path
                  d='M122.484 13.55H98.847c-1.005 0-1.819.624-1.819 1.517 0 .892.814 1.515 1.82 1.515h23.636c1.005 0 1.82-.623 1.82-1.515 0-.893-.815-1.517-1.82-1.517M132.258 11.42a2.653 2.653 0 10.002 5.306 2.653 2.653 0 00-.002-5.306'
                  fill='#000'
                />
              </g>
              <g transform='translate(238 63)'>
                <rect
                  fill='url(#a)'
                  x='8'
                  y='5'
                  width='204'
                  height='423'
                  rx='22'
                />
                <rect
                  fill='#FFF'
                  x='15'
                  y='11'
                  width='189.335'
                  height='414.321'
                  rx='22'
                />
                <rect
                  fill='url(#d)'
                  x='15'
                  y='11'
                  width='189.335'
                  height='73.269'
                  rx='22'
                />
                <g transform='translate(26.343 57.23)'>
                  <use fill='#000' filter='url(#e)' xlinkHref='#f' />
                  <use fill='#FFF' xlinkHref='#f' />
                </g>
                <g transform='translate(26.343 57.23)'>
                  <use fill='#000' filter='url(#g)' xlinkHref='#h' />
                  <use fill='#FFF' xlinkHref='#h' />
                </g>
                <g transform='translate(26.343 57.23)'>
                  <use fill='#000' filter='url(#i)' xlinkHref='#j' />
                  <use fill='#FFF' xlinkHref='#j' />
                </g>
                <g transform='translate(26.343 57.23)'>
                  <use fill='#000' filter='url(#k)' xlinkHref='#l' />
                  <use fill='#FFF' xlinkHref='#l' />
                </g>
                <g transform='translate(26.343 57.23)'>
                  <use fill='#000' filter='url(#m)' xlinkHref='#n' />
                  <use fill='#FFF' xlinkHref='#n' />
                </g>
                <path
                  d='M65 227.56v-25.278h9.316c1.734 0 3.232.267 4.496.8 1.264.535 2.239 1.294 2.925 2.28.686.984 1.03 2.141 1.03 3.47 0 1.21-.266 2.273-.795 3.187a5.63 5.63 0 01-2.24 2.154c1.3.498 2.312 1.287 3.034 2.367s1.083 2.356 1.083 3.828c0 1.471-.385 2.74-1.155 3.809-.77 1.068-1.854 1.899-3.25 2.492s-3.045.89-4.947.89H65zm5.2-20.9v5.804h3.539c1.18 0 2.088-.243 2.726-.73.638-.487.957-1.205.957-2.154 0-.95-.32-1.673-.957-2.172-.638-.498-1.547-.747-2.726-.747h-3.54zm0 16.52h4.044c1.348 0 2.39-.285 3.124-.854.734-.57 1.101-1.389 1.101-2.457 0-1.068-.367-1.887-1.101-2.456-.735-.57-1.776-.855-3.124-.855H70.2v6.622zm16.863 4.38V201h5.056v26.56h-5.056zm18.272.533c-1.42 0-2.732-.249-3.936-.747a9.577 9.577 0 01-3.142-2.083 9.438 9.438 0 01-2.076-3.151c-.494-1.21-.74-2.528-.74-3.952s.252-2.735.758-3.934a9.78 9.78 0 012.112-3.15 9.594 9.594 0 013.178-2.101c1.216-.499 2.546-.748 3.99-.748 1.42 0 2.733.25 3.936.748a9.577 9.577 0 013.142 2.083 9.482 9.482 0 012.076 3.133c.494 1.198.74 2.51.74 3.934 0 1.424-.252 2.741-.758 3.951a9.73 9.73 0 01-2.112 3.169 9.594 9.594 0 01-3.178 2.1c-1.216.499-2.546.748-3.99.748zm.072-4.486c.915 0 1.733-.237 2.456-.712.722-.474 1.293-1.121 1.715-1.94.421-.819.632-1.75.632-2.795 0-1.044-.211-1.976-.632-2.795-.422-.818-.993-1.465-1.715-1.94-.723-.475-1.541-.712-2.456-.712s-1.733.237-2.455.712c-.723.475-1.294 1.122-1.716 1.94-.42.82-.632 1.75-.632 2.795s.211 1.976.632 2.795c.422.819.993 1.466 1.716 1.94.722.475 1.54.712 2.455.712zm21.124 3.418a8.081 8.081 0 01-3.376-.712 8.295 8.295 0 01-2.726-1.976 9.246 9.246 0 01-1.806-2.955c-.433-1.127-.65-2.344-.65-3.649 0-1.353.223-2.605.668-3.756a9.131 9.131 0 011.878-3.008 8.894 8.894 0 012.817-2.012c1.07-.486 2.232-.73 3.484-.73 1.228 0 2.335.244 3.322.73a6.447 6.447 0 012.456 2.118l.108-2.314h4.658v16.555c0 1.448-.234 2.765-.704 3.952a8.774 8.774 0 01-2.004 3.062 8.961 8.961 0 01-3.087 1.976c-1.192.463-2.51.694-3.954.694-1.42 0-2.697-.22-3.828-.659a9.174 9.174 0 01-2.961-1.833 8.656 8.656 0 01-1.986-2.742l4.839-1.174a4.737 4.737 0 001.679 1.62c.686.391 1.462.587 2.329.587.939 0 1.751-.208 2.437-.623a4.283 4.283 0 001.607-1.745c.385-.747.578-1.62.578-2.616v-1.531a6.795 6.795 0 01-2.474 2.011c-.999.487-2.1.73-3.304.73zm1.228-4.415c.89 0 1.68-.22 2.365-.658a4.816 4.816 0 001.643-1.78c.41-.748.614-1.596.614-2.546 0-.95-.204-1.798-.614-2.545a4.816 4.816 0 00-1.643-1.78c-.686-.44-1.474-.66-2.365-.66-.89 0-1.679.22-2.365.66a4.816 4.816 0 00-1.643 1.78c-.41.747-.614 1.596-.614 2.545 0 .95.205 1.798.614 2.546.41.747.957 1.34 1.643 1.78.686.439 1.474.658 2.365.658zm13.65 4.95V208.76h4.658l.18 2.848c.482-.996 1.132-1.762 1.95-2.296.819-.534 1.782-.801 2.89-.801.336 0 .673.03 1.01.089.337.06.638.137.903.231l-.542 4.914a3.86 3.86 0 00-.812-.196 6.647 6.647 0 00-.849-.054c-1.396 0-2.467.422-3.213 1.264-.747.843-1.12 2.035-1.12 3.578v9.221h-5.055z'
                  fill='#FFF'
                  fillRule='nonzero'
                />
                <g>
                  <use fill='#000' filter='url(#o)' xlinkHref='#p' />
                  <use fill='#1D1D25' xlinkHref='#p' />
                  <path
                    d='M122.484 13.55H98.847c-1.005 0-1.819.624-1.819 1.517 0 .892.814 1.515 1.82 1.515h23.636c1.005 0 1.82-.623 1.82-1.515 0-.893-.815-1.517-1.82-1.517M132.258 11.42a2.653 2.653 0 10.002 5.306 2.653 2.653 0 00-.002-5.306'
                    fill='#000'
                  />
                </g>
              </g>
            </g>
          </Phones>
          <PhonesMobile
            width={328}
            height={347}
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g clipPath='url(#prefix__clip0)'>
              <rect
                x={5.542}
                y={3.758}
                width={141.331}
                height={293.053}
                rx={22}
                fill='url(#prefix__paint0_linear)'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M60.317 157.947v-18.4h3.502v18.4h-3.502zm-15.285 0v-17.513h6.454c1.2 0 2.24.185 3.115.555.875.37 1.55.897 2.026 1.579.475.682.713 1.484.713 2.405 0 .838-.183 1.574-.55 2.207a3.906 3.906 0 01-1.551 1.493c.9.345 1.6.892 2.101 1.64.5.748.75 1.632.75 2.651 0 1.02-.266 1.899-.8 2.639-.534.74-1.284 1.316-2.252 1.727-.967.411-2.11.617-3.427.617h-6.58zm3.602-14.479v4.021h2.452c.817 0 1.447-.169 1.889-.506.442-.337.663-.834.663-1.492s-.221-1.159-.663-1.505c-.442-.345-1.072-.518-1.89-.518h-2.45zm2.802 11.445h-2.802v-4.588h2.802c.934 0 1.655.197 2.164.592.509.395.763.962.763 1.702s-.254 1.307-.763 1.702c-.509.394-1.23.592-2.164.592zm18.813 2.886c.834.345 1.743.518 2.727.518 1 0 1.922-.173 2.764-.518a6.656 6.656 0 003.665-3.651c.35-.838.525-1.751.525-2.738 0-.986-.17-1.895-.513-2.725a6.58 6.58 0 00-1.438-2.171 6.656 6.656 0 00-2.177-1.443c-.833-.345-1.742-.517-2.726-.517-1.001 0-1.922.172-2.765.517a6.656 6.656 0 00-2.201 1.456 6.771 6.771 0 00-1.464 2.183c-.35.83-.525 1.738-.525 2.725 0 .987.17 1.899.513 2.738a6.549 6.549 0 001.438 2.183 6.656 6.656 0 002.177 1.443zm2.777-2.59c.633 0 1.2-.165 1.7-.494.501-.328.897-.776 1.19-1.344.29-.567.437-1.212.437-1.936 0-.723-.146-1.369-.438-1.936a3.47 3.47 0 00-1.188-1.344 3.028 3.028 0 00-1.701-.494c-.634 0-1.201.165-1.701.494-.5.328-.897.777-1.189 1.344-.292.567-.438 1.213-.438 1.936 0 .724.146 1.369.438 1.936a3.461 3.461 0 001.189 1.344c.5.329 1.067.494 1.7.494zm12.295 1.874a5.597 5.597 0 002.34.494c.833 0 1.596-.169 2.288-.506a4.707 4.707 0 001.714-1.394v1.061c0 .691-.133 1.295-.4 1.813a2.96 2.96 0 01-1.113 1.208c-.476.288-1.038.432-1.689.432a3.2 3.2 0 01-1.614-.407 3.277 3.277 0 01-1.163-1.122l-3.352.814a6.005 6.005 0 001.376 1.899 6.345 6.345 0 002.051 1.27c.784.304 1.668.457 2.652.457 1 0 1.914-.161 2.74-.481a6.213 6.213 0 002.138-1.369 6.08 6.08 0 001.389-2.121c.325-.823.487-1.735.487-2.738v-11.47h-3.227l-.075 1.604a4.46 4.46 0 00-1.7-1.468c-.685-.337-1.452-.505-2.302-.505a5.77 5.77 0 00-2.415.505 6.16 6.16 0 00-1.95 1.394 6.32 6.32 0 00-1.302 2.084 7.148 7.148 0 00-.463 2.602c0 .904.15 1.747.45 2.528.301.781.718 1.464 1.252 2.047a5.745 5.745 0 001.888 1.369zm3.19-2.565c.617 0 1.163-.152 1.639-.456a3.334 3.334 0 001.138-1.233c.283-.518.425-1.106.425-1.764 0-.658-.142-1.246-.425-1.763a3.337 3.337 0 00-1.138-1.234c-.476-.304-1.022-.456-1.639-.456s-1.163.152-1.639.456a3.337 3.337 0 00-1.138 1.234c-.283.517-.425 1.105-.425 1.763 0 .658.142 1.246.425 1.764.284.518.663.929 1.138 1.233.476.304 1.022.456 1.64.456zm12.684-9.595h-3.228v13.024h3.503v-6.389c0-1.068.258-1.895.775-2.478.517-.584 1.259-.876 2.227-.876.2 0 .396.012.588.037.192.025.379.07.563.136l.375-3.404a4.037 4.037 0 00-1.326-.222c-.767 0-1.434.185-2.001.555-.567.37-1.018.9-1.351 1.591l-.125-1.974z'
                fill='#fff'
              />
              <g filter='url(#prefix__filter0_d)'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M141.637 278.725c0 7.335-5.415 13.654-12.747 13.654H24.335c-7.332 0-13.707-6.319-13.707-13.654V21.119c0-7.334 6.375-12.697 13.707-12.697h12.088c2.555 0 3.499-.292 3.654 2.948.08 1.684.698 2.992 1.687 4.075.988 1.062 2.348 1.935 3.911 2.425 1.061.332 2.242.633 3.368.633H104.294c1.127 0 2.307-.37 3.368-.702 1.564-.49 2.923-1.307 3.912-2.35.989-1.063 1.607-2.316 1.687-3.999.154-3.24 1.099-3.03 3.655-3.03h11.974c7.332 0 12.747 5.363 12.747 12.697v257.606zM68.481 9.682h16.376c.695 0 1.26.432 1.26 1.05 0 .62-.565 1.05-1.26 1.05H68.48c-.697 0-1.26-.43-1.26-1.05 0-.618.563-1.05 1.26-1.05zm24.984.362a1.838 1.838 0 11-3.676 0 1.838 1.838 0 013.676 0zm56.15 58.866V21.947c0-11.877-9.625-21.506-21.499-21.506H23.658C11.41.441 1.39 10.466 1.39 22.718v17.208a1.26 1.26 0 00-1.26 1.26v8.821c0 .696.564 1.26 1.26 1.26V61.77a1.26 1.26 0 00-1.26 1.26v18.903c0 .695.564 1.26 1.26 1.26v6.3a1.26 1.26 0 00-1.26 1.26v18.903c0 .696.564 1.26 1.26 1.26v168.778c0 12.291 10.052 22.348 22.337 22.348h104.389c11.824 0 21.499-9.679 21.499-21.507v-176.76h.419a1.26 1.26 0 001.261-1.26V70.17a1.26 1.26 0 00-1.261-1.26h-.419z'
                  fill='#1D1D25'
                />
              </g>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M84.857 9.682H68.48c-.697 0-1.26.432-1.26 1.05 0 .619.563 1.05 1.26 1.05h16.376c.695 0 1.26-.431 1.26-1.05 0-.618-.565-1.05-1.26-1.05zM91.628 8.206a1.838 1.838 0 10.002 3.676 1.838 1.838 0 00-.002-3.676z'
                fill='#000'
              />
              <g clipPath='url(#prefix__clip1)'>
                <rect
                  x={180.82}
                  y={47.405}
                  width={141.331}
                  height={293.053}
                  rx={22}
                  fill='url(#prefix__paint1_linear)'
                />
                <rect
                  x={185.669}
                  y={51.561}
                  width={131.17}
                  height={287.04}
                  rx={22}
                  fill='#fff'
                />
                <path
                  d='M185.669 59.561a8 8 0 018-8H308.84a8 8 0 018 8v42.761H185.669v-42.76z'
                  fill='url(#prefix__paint2_linear)'
                />
                <g filter='url(#prefix__filter1_d)'>
                  <rect
                    x={193.528}
                    y={83.589}
                    width={115.454}
                    height={40.488}
                    rx={4}
                    fill='#fff'
                  />
                </g>
                <g filter='url(#prefix__filter2_d)'>
                  <rect
                    x={193.528}
                    y={133.746}
                    width={115.454}
                    height={40.488}
                    rx={4}
                    fill='#fff'
                  />
                </g>
                <g filter='url(#prefix__filter3_d)'>
                  <rect
                    x={193.528}
                    y={183.902}
                    width={115.454}
                    height={40.488}
                    rx={4}
                    fill='#fff'
                  />
                </g>
                <g filter='url(#prefix__filter4_d)'>
                  <rect
                    x={193.528}
                    y={234.059}
                    width={115.454}
                    height={40.488}
                    rx={4}
                    fill='#fff'
                  />
                </g>
                <g filter='url(#prefix__filter5_d)'>
                  <rect
                    x={193.528}
                    y={284.215}
                    width={115.454}
                    height={40.488}
                    rx={4}
                    fill='#fff'
                  />
                </g>
                <g filter='url(#prefix__filter6_d)'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M316.914 322.371c0 7.335-5.414 13.654-12.746 13.654H199.613c-7.332 0-13.708-6.319-13.708-13.654V64.766c0-7.335 6.376-12.697 13.708-12.697H211.7c2.556 0 3.5-.293 3.654 2.948.081 1.683.698 2.991 1.687 4.074.988 1.062 2.349 1.935 3.912 2.425 1.061.332 2.242.634 3.368.634h55.251c1.126 0 2.307-.37 3.368-.703 1.564-.49 2.923-1.306 3.911-2.35.99-1.063 1.607-2.316 1.687-3.999.154-3.24 1.1-3.03 3.655-3.03h11.975c7.332 0 12.746 5.363 12.746 12.698V322.37zM243.759 53.329h16.375c.696 0 1.26.43 1.26 1.05 0 .618-.564 1.05-1.26 1.05h-16.375c-.697 0-1.26-.432-1.26-1.05 0-.62.563-1.05 1.26-1.05zm24.984.361a1.838 1.838 0 11-3.676 0 1.838 1.838 0 013.676 0zm56.15 58.866V65.593c0-11.877-9.625-21.506-21.499-21.506H198.935c-12.246 0-22.268 10.025-22.268 22.277v17.209a1.26 1.26 0 00-1.26 1.26v8.82c0 .697.565 1.261 1.26 1.261v10.501c-.695 0-1.26.565-1.26 1.261v18.902c0 .696.565 1.26 1.26 1.26v6.301a1.26 1.26 0 00-1.26 1.26v18.902c0 .696.565 1.261 1.26 1.261V323.34c0 12.29 10.052 22.347 22.338 22.347h104.389c11.824 0 21.499-9.679 21.499-21.507V147.421h.419a1.26 1.26 0 001.26-1.261v-32.343a1.26 1.26 0 00-1.26-1.261h-.419z'
                    fill='#1D1D25'
                  />
                </g>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M260.134 53.328h-16.375c-.697 0-1.26.432-1.26 1.05 0 .62.563 1.05 1.26 1.05h16.375c.696 0 1.26-.43 1.26-1.05 0-.618-.564-1.05-1.26-1.05zM266.905 51.853a1.838 1.838 0 10.002 3.676 1.838 1.838 0 00-.002-3.676z'
                  fill='#000'
                />
              </g>
            </g>
            <defs>
              <filter
                id='prefix__filter0_d'
                x={-39.87}
                y={-19.559}
                width={231.165}
                height={381.6}
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'
              >
                <feFlood floodOpacity={0} result='BackgroundImageFix' />
                <feColorMatrix
                  in='SourceAlpha'
                  values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                />
                <feOffset dy={20} />
                <feGaussianBlur stdDeviation={20} />
                <feColorMatrix values='0 0 0 0 0.421822 0 0 0 0 0.554338 0 0 0 0 0.89371 0 0 0 0.243444 0' />
                <feBlend in2='BackgroundImageFix' result='effect1_dropShadow' />
                <feBlend
                  in='SourceGraphic'
                  in2='effect1_dropShadow'
                  result='shape'
                />
              </filter>
              <filter
                id='prefix__filter1_d'
                x={173.528}
                y={73.589}
                width={155.454}
                height={80.488}
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'
              >
                <feFlood floodOpacity={0} result='BackgroundImageFix' />
                <feColorMatrix
                  in='SourceAlpha'
                  values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                />
                <feOffset dy={10} />
                <feGaussianBlur stdDeviation={10} />
                <feColorMatrix values='0 0 0 0 0.421822 0 0 0 0 0.554338 0 0 0 0 0.89371 0 0 0 0.243444 0' />
                <feBlend in2='BackgroundImageFix' result='effect1_dropShadow' />
                <feBlend
                  in='SourceGraphic'
                  in2='effect1_dropShadow'
                  result='shape'
                />
              </filter>
              <filter
                id='prefix__filter2_d'
                x={173.528}
                y={123.746}
                width={155.454}
                height={80.488}
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'
              >
                <feFlood floodOpacity={0} result='BackgroundImageFix' />
                <feColorMatrix
                  in='SourceAlpha'
                  values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                />
                <feOffset dy={10} />
                <feGaussianBlur stdDeviation={10} />
                <feColorMatrix values='0 0 0 0 0.421822 0 0 0 0 0.554338 0 0 0 0 0.89371 0 0 0 0.243444 0' />
                <feBlend in2='BackgroundImageFix' result='effect1_dropShadow' />
                <feBlend
                  in='SourceGraphic'
                  in2='effect1_dropShadow'
                  result='shape'
                />
              </filter>
              <filter
                id='prefix__filter3_d'
                x={173.528}
                y={173.902}
                width={155.454}
                height={80.488}
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'
              >
                <feFlood floodOpacity={0} result='BackgroundImageFix' />
                <feColorMatrix
                  in='SourceAlpha'
                  values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                />
                <feOffset dy={10} />
                <feGaussianBlur stdDeviation={10} />
                <feColorMatrix values='0 0 0 0 0.421822 0 0 0 0 0.554338 0 0 0 0 0.89371 0 0 0 0.243444 0' />
                <feBlend in2='BackgroundImageFix' result='effect1_dropShadow' />
                <feBlend
                  in='SourceGraphic'
                  in2='effect1_dropShadow'
                  result='shape'
                />
              </filter>
              <filter
                id='prefix__filter4_d'
                x={173.528}
                y={224.059}
                width={155.454}
                height={80.488}
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'
              >
                <feFlood floodOpacity={0} result='BackgroundImageFix' />
                <feColorMatrix
                  in='SourceAlpha'
                  values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                />
                <feOffset dy={10} />
                <feGaussianBlur stdDeviation={10} />
                <feColorMatrix values='0 0 0 0 0.421822 0 0 0 0 0.554338 0 0 0 0 0.89371 0 0 0 0.243444 0' />
                <feBlend in2='BackgroundImageFix' result='effect1_dropShadow' />
                <feBlend
                  in='SourceGraphic'
                  in2='effect1_dropShadow'
                  result='shape'
                />
              </filter>
              <filter
                id='prefix__filter5_d'
                x={173.528}
                y={274.215}
                width={155.454}
                height={80.488}
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'
              >
                <feFlood floodOpacity={0} result='BackgroundImageFix' />
                <feColorMatrix
                  in='SourceAlpha'
                  values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                />
                <feOffset dy={10} />
                <feGaussianBlur stdDeviation={10} />
                <feColorMatrix values='0 0 0 0 0.421822 0 0 0 0 0.554338 0 0 0 0 0.89371 0 0 0 0.243444 0' />
                <feBlend in2='BackgroundImageFix' result='effect1_dropShadow' />
                <feBlend
                  in='SourceGraphic'
                  in2='effect1_dropShadow'
                  result='shape'
                />
              </filter>
              <filter
                id='prefix__filter6_d'
                x={135.407}
                y={24.087}
                width={231.165}
                height={381.6}
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'
              >
                <feFlood floodOpacity={0} result='BackgroundImageFix' />
                <feColorMatrix
                  in='SourceAlpha'
                  values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                />
                <feOffset dy={20} />
                <feGaussianBlur stdDeviation={20} />
                <feColorMatrix values='0 0 0 0 0.421822 0 0 0 0 0.554338 0 0 0 0 0.89371 0 0 0 0.243444 0' />
                <feBlend in2='BackgroundImageFix' result='effect1_dropShadow' />
                <feBlend
                  in='SourceGraphic'
                  in2='effect1_dropShadow'
                  result='shape'
                />
              </filter>
              <linearGradient
                id='prefix__paint0_linear'
                x1={-65.123}
                y1={150.285}
                x2={164.201}
                y2={260.881}
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#FF8F71' />
                <stop offset={1} stopColor='#FF3E55' />
              </linearGradient>
              <linearGradient
                id='prefix__paint1_linear'
                x1={110.155}
                y1={193.931}
                x2={339.479}
                y2={304.527}
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#FF8F71' />
                <stop offset={1} stopColor='#FF3E55' />
              </linearGradient>
              <linearGradient
                id='prefix__paint2_linear'
                x1={120.084}
                y1={76.942}
                x2={154.254}
                y2={165.24}
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#FF8F71' />
                <stop offset={1} stopColor='#FF3E55' />
              </linearGradient>
              <clipPath id='prefix__clip0'>
                <path
                  fill='#fff'
                  transform='translate(0 .294)'
                  d='M0 0h327.278v346.646H0z'
                />
              </clipPath>
              <clipPath id='prefix__clip1'>
                <path
                  fill='#fff'
                  transform='translate(175.278 43.94)'
                  d='M0 0h152v303H0z'
                />
              </clipPath>
            </defs>
          </PhonesMobile>
          <Article>
            <h2>State of the Art Infrastructure</h2>
            <p>
              With reliability and speed in mind, worldwide data centers provide
              the backbone for ultra-fast connectivity. This ensures your site
              will load instantly, no matter where your readers are, keeping
              your site competitive.
            </p>
          </Article>
        </Content>
      </Container>
    </Section>
  );
};

export default InfrastructureArticle;
