import EnergyCalculator from '@renderer/containers/EnergyCalculator/EnergyCalculator';
import React, { useState } from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components'

const StyledTitle = styled.p`
    color: white;
`

const Application: React.FC = () => {
  return (
    <div className="">
        <EnergyCalculator />
    </div>
  );
};

export default hot(module)(Application);
