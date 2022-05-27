import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  .title {
    font-size: 14px;
    font-weight: bold;
  }
`;
interface FlexProps {
  column: boolean;
}
export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
`;
export const Quantity = styled(Flex)`
  align-items: start;
  ul {
    padding: 0 10px;
    text-align: left;
    margin-top: 30px;
    color: #cacaca;
    font-size: 12px;
  }
`;
export const SubTotal = styled(Flex)`
  align-items: start;
  div {
    display: flex;
    align-items: center;
    padding: 10px;
    justify-content: start;
    background-color: #ded9d9;
    width: 100%;
    height: 30px;
  }
  span {
    margin-left: 8px;
  }
`;

export const Button = styled.button`
  padding: 0;
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: 1px solid black;
  border-radius: 50%;
  cursor: pointer;
`;
export const Input = styled.input`
  width: 80px;
  border-radius: 5px;
  border-color: 1px solid black;
  text-align: center;
`;
