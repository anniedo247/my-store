import React, { useState } from 'react';
import {
  Container,
  Quantity,
  SubTotal,
  Flex,
  Button,
  Input,
} from './ProductQuantityElements';

interface ProductQuantity {
  price: number;
  quantity: number;
  SubtractItemHandler: () => void;
  AddItemHandler: () => void;
}
const ProductQuantity: React.FC<ProductQuantity> = ({
  price,
  quantity,
  SubtractItemHandler,
  AddItemHandler,
}) => {
  return (
    <Container>
      <Quantity column>
        <p className='title'>Quantity (Box)</p>
        <Flex column={false} style={{ gap: '10px' }}>
          <Button onClick={SubtractItemHandler}>-</Button>
          <Input value={quantity} />
          <Button onClick={AddItemHandler}>+</Button>
        </Flex>
        <ul>
          <li>Minimum orders 1 Box</li>
          <li>Stock Available 100 Boxes</li>
        </ul>
      </Quantity>
      <SubTotal column>
        <p className='title'>SubTotal (THB)</p>
        <div>
          <b>THB</b> <span>{price && price * quantity}</span>
        </div>
      </SubTotal>
    </Container>
  );
};

export default ProductQuantity;
