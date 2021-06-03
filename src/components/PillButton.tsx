import styled, { css } from 'styled-components';

const LinkButton = styled.a<{
  isSolid: boolean;
  padding: string;
  margin: string;
  border: string;
  textOpacity: string;
}>`
  background-color: ${props => (props.isSolid ? '#fff' : 'transparent')};
  color: ${({ isSolid, textOpacity }) =>
    isSolid ? '#ff505c' : `rgba(255, 255, 255, ${textOpacity})`};
  line-height: 18px;
  font-weight: 700;
  border-radius: 28px;
  padding: ${props => props.padding};
  text-decoration: none;
  width: min-content;
  white-space: nowrap;
  margin: ${({ margin }) => margin};
  border: ${({ border }) => border};

  transition-property: background-color, color;
  transition-duration: 300ms;

  ${({ isSolid }) =>
    isSolid &&
    css`
      &:hover {
        color: #fff;
        background-color: #ff7b86;
      }
    `}

  ${({ isSolid, border }) =>
    !isSolid &&
    border !== '0' &&
    css`
      &:hover {
        color: #ff7b86;
        background-color: #fff;
      }
    `}
`;

type PillButtonProps = {
  text: string;
  isSolid: boolean;
  padding?: string;
  margin?: string;
  border?: string;
  textOpacity?: string;
};

export const PillButton = ({
  text,
  isSolid,
  border = '0',
  padding = '0',
  margin = '0',
  textOpacity = '1',
}: PillButtonProps): JSX.Element => {
  return (
    <LinkButton
      isSolid={isSolid}
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
