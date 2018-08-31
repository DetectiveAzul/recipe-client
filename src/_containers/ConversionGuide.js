import React from 'react';
import Table from '../_components/Table.js'
import {volume, weight, temperatures} from '../data/conversion'

 const ConversionGuide = () => {
  return (
    <div>
      <h1>Conversion Guide</h1>
      <p>Different measurements are used all over the world. This is an approximate guide to help.</p>
      <Table data={volume} name={'Volume'}/>
      <Table data={weight} name={'Weight'} />
      <Table data={temperatures} name={'Temperatures'} />
    </div>
  )
}

export default ConversionGuide
