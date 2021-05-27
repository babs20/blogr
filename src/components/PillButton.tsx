import styled from 'styled-components';

const LinkButton = styled.a<{
  isSolid: boolean;
  padding: string;
  margin: string;
  border: string;
  textOpacity: string;
}>`
  background-color: ${props => (props.isSolid ? '#fff' : 'transparent')};
  color: ${props =>
    props.isSolid ? '#ff505c' : `rgba(255, 255, 255, ${props.textOpacity})`};
  line-height: 18px;
  font-weight: 700;
  border-radius: 28px;
  padding: ${props => props.padding};
  text-decoration: none;
  width: min-content;
  white-space: nowrap;
  margin: ${props => props.margin};
  border: ${props => props.border};
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
