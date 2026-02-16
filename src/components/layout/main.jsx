import React, { useState } from "react";
import down from "../../assets/images/down.svg";
import up from "../../assets/images/up.svg";
import v1 from '../../assets/images/v1.svg';
import v2 from '../../assets/images/V2.svg';
import v3 from '../../assets/images/v3.svg';
import v4 from '../../assets/images/v4.svg';
import v5 from '../../assets/images/v5.svg';
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  ComposedChart,
  Bar,
} from "recharts";
function Main() {
  const cards = [
    { title: "Views", value: 7265, hoverValue: 7450, percent: "+11.01%", color: "#007AFF", arrow: up },
    { title: "Visits", value: 3671, hoverValue: 3890, percent: "-0.03%", color: "#000000", arrow: down },
    { title: "New Users", value: 4256, hoverValue: 300, percent: "+15.03%", color: "#007AFF", arrow: up },
    { title: "Active Users", value: 2318, hoverValue: 2500, percent: "+6.08%", color: "#000000", arrow: up },
  ];
  const data = [
  { name: "Jan", black: 45, red: 40 },
  { name: "Feb", black: 71, red: 55 },
  { name: "Mar", black: 73, red: 50 },
  { name: "Apr", black: 85, red: 60 },
  { name: "May", black: 75, red: 65 },
  { name: "Jun", black: 75, red: 45 },
  { name: "Jul", black: 70, red: 50 },
  { name: "Aug", black: 82, red: 55 },
  { name: "Sep", black: 65, red: 70 },
  { name: "Oct", black: 75, red: 55 },
  { name: "Nov", black: 80, red: 60 },
  { name: "Dec", black: 65, red: 45 }
];


  return (
            <div className="min-h-screen ">
               {/* cards*/}
      <div className="flex gap-6 ml-[25px] mr-[25px] mt-[15px]">
        {cards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
                         
                     
                     {/* user project section */}
<div className="w-[1070px] h-[360px] min-w-[1000px] rounded-[24px] p-[24px] bg-white mt-[16px] ml-[25px] mr-[25px] shadow-sm">

  {/* Top Tabs */}
  <div className="flex justify-between items-center mb-6">
    <div className="flex gap-6 text-sm ml-[15px] mt-[13px]">
      <span className="text-purple-600 font-semibold border-b-2 border-purple-600 pb-1 cursor-pointer">
        Users
      </span>
      <span className="text-gray-400 cursor-pointer">Projects</span>
      <span className="text-gray-400 cursor-pointer">Operating Status</span>
    </div>

    <div className="text-sm bg-gray-100 px-3 py-1 rounded-lg cursor-pointer mr-[15px] mt-[7px]">
      Week
    </div>
  </div>

  {/* Chart */}
  <ResponsiveContainer width="99.5%" height="80%" >
    <LineChart
      data={[
        { name: "Jan", value: 200 },
        { name: "Feb", value: 120 },
        { name: "Mar", value: 170 },
        { name: "Apr", value: 260 },
        { name: "May", value: 220 },
        { name: "Jun", value: 240 },
      ]}
    >
      <XAxis
        dataKey="name"
        axisLine={false}
        tickLine={false}
        tick={{ fill: "#9CA3AF", fontSize: 12 }}
        padding={{ left: 30, right: 30 }} 
      />
      <Tooltip
        contentStyle={{
          backgroundColor: "#fff",
          borderRadius: "10px",
          border: "none",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
        cursor={{ stroke: "#E5E7EB", strokeWidth: 2 }}
      />

      <Line
        type="monotone"
        dataKey="value"
        stroke="#9333EA"
        strokeWidth={3}
        dot={{
          stroke: "#000",
          strokeWidth: 2,
          r: 5,
          fill: "#fff",
        }}
        activeDot={{
          r: 7,
          stroke: "#000",
          strokeWidth: 2,
          fill: "#fff",
        }}
      />
    </LineChart>
  </ResponsiveContainer>
</div>  
                       <div className="flex">
                    {/* device traffic */}
                                         
                <div className="w-[530px] h-[272px] rounded-[24px] p-6 bg-white shadow-sm overflow-hidden mt-[16px] ml-[25px]">

                 <h2 className="text-[#007AFF] font-semibold mb-6  mt-[6px] ml-[19px] text-left">Device Traffic</h2>

       <div className="flex items-end justify-between h-[180px] ml-[11px] mr-[11px] ">

    {[
      { os: "Linux", value: 80, color: "bg-[#40B5AD]" },
      { os: "Mac", value: 130, color: "bg-[#A52A2A]" },
      { os: "iOS", value: 110, color: "bg-[#808000]" },
      { os: "Windows", value: 150, color: "bg-[#AAFF00]" },
      { os: "Android", value: 161, color: "bg-[#1E90FF]" },
      { os: "Other", value: 70, color: "bg-[#B4C424]" },
    ].map((item, i) => (
      <div key={i} className="flex flex-col items-center group relative">

        {/* Tooltip */}
        <div className="absolute -top-10 px-3 py-1 text-xs rounded-full bg-black text-white opacity-0 group-hover:opacity-100 transition-all">
          {item.value}K
        </div>

        {/* Bar */}
        <div
          className={`w-[55px] rounded-[20px] transition-all duration-200 group-hover:scale-105 ${item.color}`}
          style={{ height: `${item.value}px` }}
        />

        {/* Label */}
        <span className="mt-3 text-sm text-gray-600">{item.os}</span>
      </div>
    ))}
  </div>
</div>

                      {/* device location */}
                            {/* device location */}
<div className="w-[530px] h-[272px] min-w-[400px] rounded-[24px] p-6 bg-white shadow-sm overflow-hidden ml-[12px] mt-[16px] mr-[25px]">

  <h2 className="text-[#007AFF] font-semibold mb-6 mt-[6px] ml-[19px] text-left">Location Traffic</h2>

  <div className="flex items-end justify-between h-[160px]  ml-[11px] mr-[11px]">

    {[
      { country: "US", value: 90, color: "#00FF7F" },
      { country: "Canada", value: 127, color: "#FFBF00" },
      { country: "Mexico", value: 120, color: "#9F2B68" },
      { country: "China", value: 70, color: "#800020" },
      { country: "Japan", value: 157, color: "#FFEA00" },
      { country: "Australia", value: 100, color: "#DA70D6" },
    ].map((item, i) => {
      // scale to fit container
      const max = 160;
      const height = (item.value / max) * 140;

      return (
        <div key={i} className="flex flex-col items-center group relative">

          {/* Tooltip */}
          <div className="absolute -top-9 px-2 py-1 text-xs rounded-md bg-black text-white opacity-0 group-hover:opacity-100 transition-all">
            {item.value}K
          </div>

          {/* Bar */}
          <div
            className="w-[55px] rounded-[20px] transition-all duration-200 group-hover:scale-110"
            style={{ backgroundColor: item.color, height: `${height}px` }}
          />

          {/* Label */}
          <span className="mt-3 text-sm text-gray-600">{item.country}</span>
        </div>
      );
    })}

  </div>
</div>
</div>
                          {/* product traffic*/}
                          
                              <div className="w-[1070px] h-[344px] min-w-[1000px] rounded-[24px] p-[24px] bg-white shadow-sm  mt-[16px] ml-[25px] mr-[25px]">

      {/* Header */}
      <div className="flex justify-between items-center mb-2  mt-[15px] ml-[25px]">
        <h2 className="text-[16px] font-semibold text-[#E11D48] mt-[15px] ml-[4px]">
          Product Traffic
        </h2>

        <div className="flex items-center gap-4 text-[12px] text-gray-600 ">
          <span className="flex items-center gap-1 mt-[9px]">
            <span className="w-2 h-2 bg-black rounded-full "></span> All
          </span>
          <span className="flex items-center gap-1 mt-[9px]">
            <span className="w-2 h-2 bg-gray-400 rounded-full"></span> SnowUI
          </span>
          <span className="flex items-center gap-1 mt-[9px] mr-[14px]">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span> Dashboard
          </span>
        </div>
      </div>

      {/* Chart */}
      <div className="mt-[30px]">
      <ResponsiveContainer width="100%"  height={240}>
        <ComposedChart data={data}>
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#9CA3AF" }}
          />
          <Tooltip cursor={{ fill: "transparent" }} />

          {/* Black Bars */}
          <Bar
            dataKey="black"
            fill="#111111"
            radius={[6, 6, 0, 0]}
            barSize={6}
            className="hover:scale-110 transition-transform duration-300"
          />

          {/* Red Bars */}
          <Bar
            dataKey="red"
            fill="#EF4444"
            radius={[6, 6, 0, 0]}
            barSize={6}
            className="hover:scale-110 transition-transform duration-300"
          />
        </ComposedChart>
      </ResponsiveContainer>
      </div>
    </div>
                        {/*projects*/}
     <div className="w-[1070px] h-[424px] min-w-[400px] rounded-[24px] bg-white shadow-sm p-[24px] gap-[16px] mt-[16px] ml-[25px] mr-[25px] mb-[16px]">
                         {/* Header */}
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-[16px] font-semibold text-[#00B3A4] mt-[12px] ml-[14px] ">
      Projects
    </h2>

   
  </div>

  {/* Table Header */}
  <div className="grid grid-cols-4 text-[12px] mr-[20px] text-gray-400   ml-[25px] mt-[50px]  ">
    <span> Manager</span>
    <span>Date</span>
    <span>Amount</span>
    <span className="text-right">Status</span>
  </div>

  {/* Rows */}
  <div className="flex flex-col gap-8 ml-[15px] mr-[15px] mt-[15px] px-2">

    {/* Row */}
    {[
      {
        img: v1,
        name: "ByeWind",
        date: "Jun 24, 2026",
        amount: "$942.00",
        status: "In Progress",
        color: "bg-purple-100 text-purple-600"
      },
      {
        img: v2,
        name: "Natali Craig",
        date: "Mar 10, 2026",
        amount: "$881.00",
        status: "Complete",
        color: "bg-green-100 text-green-600"
      },
      {
        img: v3,
        name: "Drew Cano",
        date: "Nov 10, 2026",
        amount: "$409.00",
        status: "Pending",
        color: "bg-blue-100 text-blue-600"
      },
      {
        img: v4,
        name: "Orlando Diggs",
        date: "Dec 20, 2026",
        amount: "$953.00",
        status: "Approved",
        color: "bg-yellow-100 text-yellow-600"
      },
      {
        img: v5,
        name: "Andi Lane",
        date: "Jul 25, 2026",
        amount: "$907.00",
        status: "Rejected",
        color: "bg-gray-200 text-gray-500"
      }
    ].map((item, i) => (
      <div
       
         key={i}
  className={`grid grid-cols-4 items-center rounded-[16px] px-4 py-3 shadow-sm ${
    i === 0
      ? "bg-[#F3F0FF]"   // first row color (light purple)
      : i === 1
      ? "bg-[#FFFFFF]"   // second row color (light green)
      : i === 2
      ? "bg-[#F3F0FF]"   // third row color (light blue)
      : i === 3
      ? "bg-[#FFFFFF]"   // fourth row color (light yellow)
      : "bg-[#F3F0FF]"   // fifth row color (light gray)
  }`}
      >
        {/* Manager */}
        <div className="flex items-center gap-3">
          <img
            src={item.img}
            alt={item.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-[14px] text-gray-700 font-medium">
            {item.name}
          </span>
        </div>

        {/* Date */}
        <span className="text-[14px] text-gray-500">
          {item.date}
        </span>

        {/* Amount */}
        <span className="text-[14px] text-gray-700 font-medium">
          {item.amount}
        </span>

        {/* Status */}
        <div className="flex justify-end mr-[12px]">
          <span
            className={`text-[12px] px-3 py-1 rounded-full font-medium ${item.color}`}
          >
            {item.status}
          </span>
        </div>
      </div>
    ))}

  </div>
                        </div>

                      </div>
                         
      
  );
}

const Card = ({ card }) => {
  const [value, setValue] = useState(card.value);

  return (
     
    <div style={{ backgroundColor: card.color }}  
      onMouseEnter={() => setValue(card.hoverValue)}
      onMouseLeave={() => setValue(card.value)}
      className="w-[250px] h-[100px] rounded-[30px] text-white shadow-md
      flex justify-between items-center
      transition-all duration-300 hover:scale-105 cursor-pointer
      px-4 py-3"
    >
      {/* LEFT */}
      <div className="flex flex-col gap-2">
        <p className="text-sm opacity-80 ml-[10px]">{card.title}</p>
        <h2 className="text-[15px] font-bold tracking-wide ml-[10px]">
          {value.toLocaleString()}
        </h2>
      </div>

      {/* RIGHT */}
      <div className="flex flex-col items-end gap-2">

        {/* Arrow Bubble */}
        <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center mr-[9px]">
          <img src={card.arrow} alt="" className="w-4 h-4" />
        </div>

        <span className="text-sm font-medium opacity-90 mr-[9px]">
          {card.percent}
        </span>

      </div>
    </div>
  );
};

export default Main;
