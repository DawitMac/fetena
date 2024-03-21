'use client'
import React , {useState , useEffect} from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Dagi\'s bar chart',
    },
  },
};


const labels = ['2009','2010', '2011', '2012', '2014', '2015']


let format = [
  { year : 2009 , result : 0  } ,
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

const BarGraph = ({info}) => {
  const [ satData , setSatData ] = useState([])
  const [ englishData , setEnglishData ] = useState([])


 const data = {
  labels,
  datasets: [
    {
      label: 'SAT',
      data: satData,
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'English',
      data: englishData,
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

useEffect(()=>{
  let sat = info?.filter((item)=> item.name == "SAT")
   sat?.sort((a , b ) => a.year - b.year )
   for(let i = 0 ; i < sat?.length ; i++){
       for(let j = 0; j < format.length ; j++ ){
        if(sat[i]?.year == format[j].year){
          format[j].result = sat[i]?.result
        }
       }
   }
setSatData(format.map(value => value.result))

let eng = info?.filter((item)=> item.name == "english")
eng?.sort((a , b ) => a.year - b.year )
for(let i = 0 ; i < eng?.length ; i++){
    for(let j = 0; j < englishFormat.length ; j++ ){
     if(eng[i]?.year == englishFormat[j].year){
       englishFormat[j].result = eng[i]?.result
     }
    }
}
setEnglishData(englishFormat.map(value => value.result))

},[])
  return (
    <div className='w-[80dvw] md:h-[70dvh] h-[90dvh] bg-white mt-10 sm:mt-0'>
        <Bar options={options} data={data} />
    </div>
  )
}

export default BarGraph

//mekonenmekdes04
//TVH9F8Zb4yb3iKXa