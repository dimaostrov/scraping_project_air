import React from 'react'
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import airStore from '../store';

export const RegionsScatter = ({ data }) => {
  return (
    <ScatterChart 
      width={800} 
      height={800} 
      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
       
    >
      <XAxis type="number" dataKey={'num_total_listings'} name='stature' unit='cm' />
      <YAxis type="number" dataKey={'num_total_listings'} name='weight' unit='kg' />
      <ZAxis dataKey={'city_id'} range={[60, 400]} name='score' unit='km' />
      <CartesianGrid />
      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
      <Legend />
      <Scatter name='Cities' onClick={e => airStore.setCity(e.name)} data={data} fill='#8884d8' shape="triangle" />
    </ScatterChart>
  )
}

