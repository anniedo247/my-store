import React, { useState } from 'react';
import {
  Container,
  Quantity,
  SubTotal,
  Flex,
  Button,
  Input,
} from './ProductQuantityElements';

const ProductQuantity = ({ quantity,SubtractItemHandler, AddItemHandler }) => {
  return (
    <Container>
      <Quantity>
        <p className='title'>Quantity (Box)</p>
        <Flex style={{ gap: '10px' }}>
          <Button onClick={SubtractItemHandler}>-</Button>
          <Input value={quantity} />
          <Button onClick={AddItemHandler}>+</Button>
        </Flex>
        <ul>
          <li>Minimum orders 1 Box</li>
          <li>Stock Available</li>
        </ul>
      </Quantity>
      <SubTotal>
        <p className='title'>SubTotal (THB)</p>
        <div>
          <b>THB</b> 10,0000.00
        </div>
      </SubTotal>
    </Container>
  );
};

export default ProductQuantity;
