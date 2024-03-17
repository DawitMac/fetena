'use client'
import React , { useState , useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'Dagi\'s Line Chart',
    },
  },
};

const labels = ['2010', '2011', '2012', '2014', '2015'];

let format = [
  { year : 2010 , result : 0  } ,
  { year : 2011 , result : 0  } ,
  { year : 2012 , result : 0  } ,
  { year : 2014 , result : 0  } ,
  { year : 2015 , result : 0  } ,
]
let englishFormat = [
  { year : 2009 , result : 0  } ,
  { year : 2010 , result : 0  } ,
  { year : 2011 , result : 0  } ,
  { year : 2012 , result : 0  } ,
  { year : 2014 , result : 0  } ,
  { year : 2015 , result : 0  } ,
]



const LineGraph = ({info}) => {
  const [ satData , setSatData ] = useState([])
  const [ englishData , setEnglishData ] = useState([])
  useEffect(()=>{
    let sat = info?.filter((item)=> item.name == "history")
     sat?.sort((a , b ) => a.year - b.year )
     for(let i = 0 ; i < sat?.length ; i++){
         for(let j = 0; j < format.length ; j++ ){
          if(sat[i]?.year == format[j].year){
            format[j].result = sat[i]?.result
          }
         }
     }
  setSatData(format.map(value => value.result))
  
  let eng = info?.filter((item)=> item.name == "geography")
  sat?.sort((a , b ) => a.year - b.year )
  for(let i = 0 ; i < eng?.length ; i++){
      for(let j = 0; j < englishFormat.length ; j++ ){
       if(eng[i]?.year == englishFormat[j].year){
         englishFormat[j].result = eng[i]?.result
       }
      }
  }
  setEnglishData(englishFormat.map(value => value.result))
  
    //const sortedNumbers = numbers.sort((a, b) => a - b);
  },[])

  const data = {
    labels,
    datasets: [
      {
        label: 'History',
        data: satData,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Geograph',
        data: englishData,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      
    ],
  };

  return (
    <div className='md:w-[80dvw] w-[95dvw] md:h-[70dvh]'>
    <Line options={options} data={data}   />
</div>
  )
}

export default LineGraph