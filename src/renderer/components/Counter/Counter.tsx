import Button from '@components/Button/Button';
import { Box } from 'grommet';
import { Add, Subtract } from 'grommet-icons';
import React, { MouseEventHandler, useState } from 'react';
import styled from 'styled-components';

const StyledValue = styled.p`
  margin: 10px;
`;

// const StyledCounter = styled.div`
//   displ
// `;

interface CounterProps {
  title: string;
  name: string;
  value: number;
  minValue: number;
  maxValue: number;
  onIncrement(name: string): void;
  onDecrement(name: string): void;
}

const Counter: React.FC<CounterProps> = ({ title, name, onIncrement, onDecrement, value, minValue, maxValue }) => {

  const handleIncrementClick = () => {
    if (value < maxValue) {
      onIncrement(name);
    }
  }
  const handleDecrementClick = () => {
    if (value > minValue) {
      onDecrement(name);
    }
  }

  return (
    <Box alignContent='center' align='center'>
      <p>{title}</p>
      <Box direction='row' align='center' justify='around'>
        <Button onClick={handleIncrementClick} name='decrement' icon={<Add />} disabled={value >= maxValue} />
        <StyledValue>{value}</StyledValue>
        <Button onClick={handleDecrementClick} name='increment' icon={<Subtract />} disabled={value <= minValue} />
      </Box>
    </Box>
  );
};

export default Counter;
