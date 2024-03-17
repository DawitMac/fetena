import React from 'react'
// import LineGraph from './LineGraph'
// import BarGraph from './BarGraph'
// import RadarGraph from './RadarGraph'
import Report from './Report'
import { getResult } from '../server/actions'

const page = async() => {
  const result = await getResult()
  return (
    <div className='flex max-h-screen' >
      <Report result={result?.data} />
    </div>
  )
}

export default page

//className='flex flex-col items-center justify-center sm:gap-12 mt-20'