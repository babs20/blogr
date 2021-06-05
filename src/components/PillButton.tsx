import styled, { css } from 'styled-components';
import device from '../styles/breakpoints';

const LinkButton = styled.a<{
  background: string;
  padding: string;
  margin: string;
  border: string;
  textOpacity: string;
}>`
  background: ${({ background }) => background};
  color: ${({ background, textOpacity }) =>
    background === '#fff' ? '#ff505c' : `rgba(255, 255, 255, ${textOpacity})`};
  line-height: 18px;
  font-weight: 700;
  border-radius: 28px;
  text-decoration: none;
  width: min-content;
  white-space: nowrap;

  padding: ${props => props.padding};
  margin: ${({ margin }) => margin};
  border: ${({ border }) => border};

  transition-property: background-color, color;
  transition-duration: 300ms;

  ${({ background }) =>
    background === '#fff' &&
    css`
      &:hover {
        color: #fff;
        background: #ff7b86;
      }
    `}

  ${({ background }) =>
    (background === '#ff7b86' || background === 'transparent') &&
    css`
      &:hover {
        color: #ff7b86;
        background: #fff;
      }
    `}
`;

type PillButtonProps = {
  text: string;
  background: string;
  padding?: string;
  margin?: string;
  border?: string;
  textOpacity?: string;
};

export const PillButton = ({
  text,
  background,
  border = '0',
  padding = '0',
  margin = '0',
  textOpacity = '1',
}: PillButtonProps): JSX.Element => {
  return (
    <LinkButton
      background={background}
      href='/'
      padding={padding}
      margin={margin}
      border={border}
      textOpacity={textOpacity}
    >
      {text}
    </LinkButton>
  );
};

export default PillButton;
