import styled from 'styled-components';
import device from '../styles/breakpoints';

type ListCatergoryProps = {
  name: string;
  categoryItems: Array<string>;
};

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  background: #24242c;
  border-radius: 0px 100px 0px 0px;
  width: 100%;
  margin-top: 100px;
  align-items: center;
  padding: 75px 1.5rem;

  @media ${device.laptop} {
    flex-direction: row;
    justify-content: space-between;
    height: 359px;
    padding: 70px 165px;
    margin-top: 115px;
    align-items: flex-start;
  }
`;

const Logo = styled.svg`
  flex-shrink: 0;
`;

const ListWrapper = styled.ul`
  color: #fff;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  text-align: center;
  margin-top: 72px;
  font-size: 18px;
  line-height: 33px;

  h2 {
    font-weight: 500;
  }

  a {
    color: #fff;
    font-weight: 400;
    opacity: 0.75;
    text-decoration: none;
  }

  ul {
    margin-top: 21px;
  }

  & a:hover {
    text-decoration: underline rgba(255, 255, 255, 0.75);
  }

  @media ${device.laptop} {
    flex-direction: row;
    justify-content: flex-start;
    text-align: left;
    margin-top: 0;
    font-size: 15px;
    align-items: flex-start;
  }
`;

const CategoryContainer = styled.li`
  margin-top: 40px;

  &:first-child {
    margin-top: 0;
  }

  @media ${device.laptop} {
    margin: 0 4rem;

    &:first-child {
      margin: 0 4rem 0 8rem;
    }
  }
`;

const ListCategory = ({
  name,
  categoryItems,
}: ListCatergoryProps): JSX.Element => {
  return (
    <CategoryContainer>
      <h2>{name}</h2>
      <ul>
        {categoryItems.map((item, index) => {
          return (
            <li key={index}>
              <a href={`/${item.toLowerCase()}`}>{item}</a>
            </li>
          );
        })}
      </ul>
    </CategoryContainer>
  );
};

export const Footer = (): JSX.Element => {
  return (
    <Container>
      <Logo width='101' height='40' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M0 30.803V1.486h10.653c1.982 0 3.695.31 5.14.93 1.446.619 2.56 1.5 3.345 2.642.785 1.142 1.177 2.484 1.177 4.026 0 1.404-.303 2.636-.909 3.695a6.48 6.48 0 01-2.56 2.498c1.487.578 2.643 1.494 3.469 2.746.826 1.253 1.239 2.732 1.239 4.439 0 1.707-.44 3.18-1.322 4.418-.88 1.239-2.12 2.202-3.716 2.89-1.596.688-3.482 1.033-5.657 1.033H0zM5.946 6.565v6.73h4.046c1.35 0 2.388-.282 3.118-.846.73-.564 1.094-1.397 1.094-2.498 0-1.101-.365-1.94-1.094-2.519-.73-.578-1.769-.867-3.118-.867H5.946zm0 19.159h4.624c1.542 0 2.732-.33 3.572-.991.84-.66 1.26-1.61 1.26-2.85 0-1.238-.42-2.188-1.26-2.848-.84-.66-2.03-.991-3.572-.991H5.946v7.68zm19.282 5.079V0h5.781v30.803h-5.78zm20.893.619c-1.624 0-3.124-.29-4.5-.867a10.94 10.94 0 01-3.593-2.416 10.96 10.96 0 01-2.374-3.654c-.564-1.404-.846-2.931-.846-4.583 0-1.652.289-3.173.867-4.563a11.354 11.354 0 012.415-3.654 10.96 10.96 0 013.634-2.436c1.39-.578 2.91-.867 4.562-.867 1.625 0 3.125.289 4.501.867a10.94 10.94 0 013.592 2.416 11.01 11.01 0 012.375 3.633c.564 1.39.846 2.911.846 4.563 0 1.651-.289 3.179-.867 4.583a11.297 11.297 0 01-2.416 3.675 10.96 10.96 0 01-3.633 2.436c-1.39.578-2.911.867-4.563.867zm.083-5.203c1.046 0 1.982-.275 2.808-.825.825-.551 1.48-1.301 1.96-2.25.483-.95.723-2.03.723-3.242 0-1.211-.24-2.292-.722-3.241-.482-.95-1.136-1.7-1.961-2.25-.826-.551-1.762-.826-2.808-.826-1.046 0-1.982.275-2.808.825-.826.55-1.48 1.301-1.961 2.25-.482.95-.723 2.03-.723 3.242 0 1.211.241 2.292.723 3.241.482.95 1.135 1.7 1.961 2.25.826.551 1.762.826 2.808.826zm24.155 3.964a9.13 9.13 0 01-3.86-.826 9.492 9.492 0 01-3.118-2.291c-.881-.977-1.57-2.12-2.065-3.427-.495-1.308-.743-2.719-.743-4.233 0-1.569.255-3.02.764-4.356a10.614 10.614 0 012.147-3.489 10.174 10.174 0 013.22-2.333c1.225-.564 2.554-.846 3.985-.846 1.404 0 2.67.282 3.799.846a7.402 7.402 0 012.807 2.457l.124-2.684h5.327v19.2c0 1.68-.269 3.207-.805 4.584-.537 1.376-1.301 2.56-2.292 3.55a10.231 10.231 0 01-3.53 2.292c-1.363.537-2.87.805-4.522.805-1.624 0-3.083-.254-4.376-.764a10.468 10.468 0 01-3.386-2.126 10.035 10.035 0 01-2.271-3.18L67.097 32a5.452 5.452 0 001.92 1.879c.784.454 1.672.681 2.663.681 1.074 0 2.003-.24 2.787-.723.785-.481 1.397-1.156 1.838-2.023.44-.867.66-1.879.66-3.035v-1.775a7.793 7.793 0 01-2.828 2.333c-1.143.564-2.402.846-3.778.846zm1.404-5.12c1.018 0 1.92-.254 2.704-.764a5.556 5.556 0 001.879-2.064c.468-.867.702-1.851.702-2.952 0-1.102-.234-2.086-.702-2.953a5.556 5.556 0 00-1.879-2.064c-.784-.51-1.686-.764-2.704-.764-1.019 0-1.92.255-2.705.764a5.556 5.556 0 00-1.879 2.064c-.468.867-.702 1.851-.702 2.953 0 1.1.234 2.085.702 2.952a5.556 5.556 0 001.88 2.064c.784.51 1.685.764 2.704.764zm15.607 5.74V9h5.327l.206 3.304c.55-1.157 1.294-2.044 2.23-2.664.936-.62 2.037-.929 3.303-.929.386 0 .77.035 1.156.103.386.07.73.159 1.033.269l-.62 5.698a4.361 4.361 0 00-.929-.227 7.495 7.495 0 00-.97-.062c-1.597 0-2.822.489-3.675 1.466-.853.977-1.28 2.36-1.28 4.15v10.694h-5.78z'
          fill='#FFF'
          fillRule='nonzero'
        />
      </Logo>
      <ListWrapper>
        <ListCategory
          name={'Product'}
          categoryItems={[
            'Overview',
            'Pricing',
            'Marketplace',
            'Features',
            'Integrations',
          ]}
        />
        <ListCategory
          name={'Company'}
          categoryItems={['About', 'Team', 'Blog', 'Careers']}
        />
        <ListCategory
          name={'Connect'}
          categoryItems={['Contact', 'Newsletter', 'LinkedIn']}
        />
      </ListWrapper>
    </Container>
  );
};

export default Footer;
