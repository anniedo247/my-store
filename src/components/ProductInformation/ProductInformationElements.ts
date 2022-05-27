import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  width: 100%;
`;
export const Container = styled(Flex)`
  padding: 20px 0px;
  flex-direction: column;
  align-items: start;
  p {
    font-size: 18px;
    font-weight: bold;
  }
  .price {
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 20px;
    width: 100%;
    height: 40px;
    background-color: #ded9d9;
    padding-left: 10px;
  }
`;
