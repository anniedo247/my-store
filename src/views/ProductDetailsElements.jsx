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

export const Tag = styled.div`
  color: ${(props) => (props.white ? 'white' : '#a84e32')};
  border: ${(props) => (props.outlined ? '1px solid #a84e32' : null)};
  background-color: ${(props) => (props.green ? '#7ca17c' : null)};
  height: 25px;
  width: ${(props) => (props.small ? '80px' : '190px')};
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Button = styled.button`
  color: ${(props) => (props.white ? 'white' : '#373433')};
  background-color: ${(props) => (props.gray ? '#373433' : 'white')};
  border: 1px solid #373433;
  border-radius: 5px;
  height: 40px;
  width: 220px;
  cursor: pointer;
`;
