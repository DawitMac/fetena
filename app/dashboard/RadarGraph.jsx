'use client'
import React, { useState ,  useEffect } from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);


const data = {
  labels: [ 'English', 'Geography', 'History', 'SAT'],
  datasets: [
    {
      label: 'Total Result',
      data: [64 , 53 , 35 , 80 ,40 ,90 ],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};



const RadarGraph = ({info}) => {

  const [english , setEnglish ] = useState(0)
  const [sat , setSat ] = useState(0)
  const [history , setHistory ] = useState(0)
  const [geography , setGeography ] = useState(0)

  const data = {
    labels: [ 'English', 'Geography', 'History', 'SAT'],
    datasets: [
      {
        label: 'Total Result',
        data: [ english , geography , history , sat ],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const handleCalculation = (value)=>{
    let answer = 0
    for(let i = 0 ; i < value?.length ; i++){
      answer = answer + Number(value[i]?.result)
    }
    answer = (answer / (value?.length * 100)) * 100

    return answer
  }

  useEffect(()=>{
    let Sat = info?.filter((item)=> item.name == "SAT")
    Sat?.map(value => value.result)
    setSat(handleCalculation(Sat))
    let eng = info?.filter((item)=> item.name == "english")
    eng?.map(value => value.result)
    setEnglish(handleCalculation(eng))

    let his = info?.filter((item)=> item.name == "history")
    his?.map(value => value.result)
    setHistory(handleCalculation(his))

    let geo = info?.filter((item)=> item.name == "geography")
    geo?.map(value => value.result)
    setGeography(handleCalculation(geo))

  },[])
  return (
    <div className='md:w-[80dvw] w-[95dvw] md:h-[70dvh]'>
     <Radar data={data} />
    </div>
  )
}

export default RadarGraph