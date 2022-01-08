import React, { useState } from 'react';
import { Box, Heading } from 'grommet';
import styled from 'styled-components';
import Counter from '@components/Counter/Counter';
import Button from '@components/Button/Button';

const StyledContainer = styled.div``;

const StyledRoundDisplay = styled.div`
  text-align: center;
`;

const EnergyCalculator: React.FC = () => {
  const [round, setRound] = useState(1);
  const [energy, setEnergy] = useState(3);
  const [gainCounterValue, setGainCounterValue] = useState(0);
  const [lossCounterValue, setLossCounterValue] = useState(0);

  const handleEnergyIncrement = (name: string) => {
    const gainResult = energy + 1;
    if (gainResult > 10) {
      return;
    }
    setEnergy(gainResult);

    if (name === 'gain') {
      setGainCounterValue(gainCounterValue + 1);
    } else {
      setLossCounterValue(lossCounterValue - 1);
    }
  };

  const handleEnergyDecrement = (name: string) => {
    const gainResult = energy - 1;
    if (gainResult < 0) {
      return;
    }
    setEnergy(gainResult);

    if (name === 'gain') {
      setGainCounterValue(gainCounterValue - 1);
    } else {
      setLossCounterValue(lossCounterValue + 1);
    }
  };

  return (
    <>
      <Heading color='brand'>Energy Calculator</Heading>
      <Box
        direction='column'
        pad='medium'
        border={{ color: 'accent-2' }}
        // width={{ min: '500px', max: '900px' }}
      >
        <Box
          direction='row'
          pad='small'
          justify='around'
          width={{ min: '500px', max: '900px' }}
        >
          <StyledRoundDisplay>
            <p>Round {round}</p>
            <p>{energy} / 10</p>
          </StyledRoundDisplay>
          <Counter
            title='Gain'
            name='gain'
            value={gainCounterValue}
            onIncrement={handleEnergyIncrement}
            onDecrement={handleEnergyDecrement}
            minValue={0}
            maxValue={10}
          />
          <Counter
            title='Loss'
            name='loss'
            value={lossCounterValue}
            onIncrement={handleEnergyDecrement}
            onDecrement={handleEnergyIncrement}
            minValue={0}
            maxValue={10}
          />
        </Box>
        <Box justify='center' align="center">
          <Box direction='row' width='400px' justify="around">
            <Button name='startMatch' onClick={() => {}}>
              Start Match
            </Button>
            <Button name='endTurn' onClick={() => {}}>
              End Turn
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default EnergyCalculator;
