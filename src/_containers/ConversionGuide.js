import React from 'react';
import Table from '../_components/Table.js'
import {volume, weight, temperatures} from '../data/conversion'
//Style
import {
  Header, Description
} from './styles/ConversionGuideStyle.js';

 const ConversionGuide = () => {
  return (
    <div>
      <Header>Conversion Guide</Header>
      <Description>Different measurements are used all over the world. This is an approximate guide to help.</Description>
      <Table data={volume} name={'Volume'}/>
      <Table data={weight} name={'Weight'} />
      <Table data={temperatures} name={'Temperatures'} />
    </div>
  )
}

export default ConversionGuide
