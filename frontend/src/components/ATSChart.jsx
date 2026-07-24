import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";


function ATSChart(){


const data = [
  {
    month:"Jan",
    score:65
  },
  {
    month:"Feb",
    score:75
  },
  {
    month:"Mar",
    score:85
  },
  {
    month:"Apr",
    score:90
  }
];



return(

<div className="w-full h-80">


<ResponsiveContainer width="100%" height="100%">


<LineChart data={data}>


<CartesianGrid 
strokeDasharray="3 3"
/>


<XAxis 
dataKey="month"
/>


<YAxis 
domain={[0,100]}
/>


<Tooltip />



<Line

type="monotone"

dataKey="score"

stroke="#3b82f6"

strokeWidth={4}

dot={{
r:6
}}

activeDot={{
r:8
}}

animationDuration={1500}

/>



</LineChart>


</ResponsiveContainer>


</div>


)


}


export default ATSChart;