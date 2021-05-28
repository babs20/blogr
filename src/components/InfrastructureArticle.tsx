import styled from 'styled-components';

const Section = styled.section`
  background: linear-gradient(135deg, #2d2e40 0%, #3f4164 100%);
  height: 400px;
  border-radius: 0px 100px;
  position: relative;
  margin-top: 0.5rem;
  padding: 0 10.25rem;
`;

const BGPattern = styled.svg`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
`;

const Phones = styled.svg`
  position: relative;
  display: inline;
  flex-shrink: 0;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  top: -49px;
`;

const Article = styled.article`
  color: #fff;
  font-family: Overpass, sans-serif;
  margin-left: 6.125rem;
  width: 50%;

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
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  top: -49px;
  position: relative;
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
