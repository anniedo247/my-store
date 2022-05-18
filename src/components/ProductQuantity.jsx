import React, { useState } from 'react';
import {
  Container,
  Quantity,
  SubTotal,
  Flex,
  Button,
  Input,
} from './ProductQuantityElements';

const ProductQuantity = ({
  product,
  quantity,
  SubtractItemHandler,
  AddItemHandler,
}) => {
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
          <li>Stock Available 100 Boxes</li>
        </ul>
      </Quantity>
      <SubTotal>
        <p className='title'>SubTotal (THB)</p>
        <div>
          <b>THB</b> {quantity * product?.price?.regularPrice?.amount.value}
        </div>
      </SubTotal>
    </Container>
  );
};

export default ProductQuantity;
