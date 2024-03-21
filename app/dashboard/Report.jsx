
//import Image from "next/image";
import { Tabs } from "./Tabs";
import BarGraph from "./BarGraph";
import LineGraph from "./LineGraph";
import RadarGraph from "./RadarGraph";
import Special from "../exam/[...subject]/Special";

 const Report = ({result}) => {
  const tabs = [
    {
      title: "BarGraph",
      value: "bargraph",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-5 text-xl md:text-2xl font-bold  bg-white">
          <p>Dagi&apos;s Bar Graph</p>
         <BarGraph info={result} />
        </div>
      ),
    },
    {
      title: "LineChart",
      value: "linegraph",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-5 text-xl md:text-2xl font-bold  bg-white">
          <p>Dagi&apos;s Line Graph</p>
          <LineGraph info={result} />
        </div>
      ),
    },
    {
      title: "Radar",
      value: "radar",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-5 text-xl md:text-2xl font-bold  bg-white">
          <p>Dagi&apos;s Radar Graph</p>
          <RadarGraph info={result} />
        </div>
      ),
    }
   
  ];

  return (
    <>
    <div className="h-[90dvh] md:h-[40rem] [perspective:1000px] relative  flex flex-col w-[95dvw] mx-auto w-full  md:items-start md:justify-start items-center justify-center my-4 px-6">
      <Tabs tabs={tabs} />
    </div>
    <Special />
    </>
  );
}
export default Report

