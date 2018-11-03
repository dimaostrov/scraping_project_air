import React from 'react'
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import airStore from '../store';

export const RegionsScatter = ({ data }) => {
  return (
    <ScatterChart 
      width={600} 
      height={600} 
      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
       
    >
      <XAxis type="number" dataKey={'annual_revenue_potential.50th'} name='Revenue' unit='$' />
      <YAxis type="number" dataKey={'occupancy_ltm'} name='occupancy rate' unit='%' />
      <ZAxis dataKey={'num_total_listings'} range={[0, 300]} name='score' unit=' apts' />
      <CartesianGrid />
      <Tooltip cursor={{ strokeDasharray: '3 3' }} />
      <Legend />
      <Scatter name='Cities' onClick={e => airStore.setCity(e.name)} data={data} fill='#8884d8' shape="triangle" />
    </ScatterChart>
  )
}

