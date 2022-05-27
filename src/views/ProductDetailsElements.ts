import styled from 'styled-components';

export const Container = styled.div`
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding-bottom: 40px;
`;
export const Flex = styled.div`
  display: flex;
  width: 100%;
`;
interface TagProps {
  color?: string;
  outlined?: boolean;
  isGreenTag?: boolean;
  width?: string;
}
export const Tag = styled.div<TagProps>`
  color: ${(props) => props.color};
  border: ${(props) => (props.outlined? '1px solid #a84e32' : null)};
  background-color: ${(props) => (props.isGreenTag? '#7ca17c' : null)};
  height: 25px;
  width: ${(props) => props.width };
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface ButtonProps {
  color: string;
  isGray?: boolean;
}
export const Button = styled.button<ButtonProps>`
  color: ${(props) => props.color};
  background-color: ${(props) => (props.isGray ? '#373433' : 'transparent')};
  border: 1px solid #373433;
  border-radius: 5px;
  height: 40px;
  width: 220px;
  cursor: pointer;
`;
