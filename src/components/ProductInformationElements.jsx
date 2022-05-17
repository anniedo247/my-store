import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  width: 100%;
`;
export const Container = styled(Flex)`
  padding: 20px 0px;
  flex-direction: column;
  align-items: start;
  .price {
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 30px;
    width: 100%;
    height: 60px;
    background-color: #ded9d9;
    padding-left: 10px;
  }
`;
