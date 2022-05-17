import styled from 'styled-components';
import { Card } from 'antd';

export const CardWrapper = styled(Card)`
  .ant-card-cover {
    width: 240px;
    height: 300px;
    position: relative;
    overflow: hidden;
  }
  .ant-card-cover img {
    min-width: 240px;
    max-height: 300px;
    width: auto;
    height: auto;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition-duration: 0.5s;
  }
  .ant-card-body {
    padding: 24px 10px;
    height: 150px;
  }
  margin-bottom: 20px;
`;
export const Header = styled.div`
  font-size: 15px;
`;

export const Body = styled.div`
  display: grid;
  grid-template-rows: 2fr 2fr 1fr;
  text-align: left;
  span {
    margin-left: 5px;
  }
  .rating {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
