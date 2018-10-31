import React from 'react'
import { VictoryScatter, VictoryChart, VictoryTheme, VictoryTooltip } from 'victory'

const Scatter = ({data}) => {
  return (
    <div style={{width: '90vw', height: '90vh'}}>
      <VictoryChart
        theme={VictoryTheme.material}
        domain={{ x: [0, 1], y: [0, 200] }}
      >
        <VictoryScatter
          labelComponent={<VictoryTooltip />}
          style={{ data: { fill: "#c43a31" } }}
          bubbleProperty='num_total_listings'
          maxBubbleSize={30}
          minBubbleSize={1}
          size={7}
          data={data}
          x='occupancy_ltm'
          y='num_active_listings'
        />
      </VictoryChart>
    </div>
  )
}

export default Scatter;