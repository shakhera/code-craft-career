import React, { useEffect, useState } from "react";
import "./Statistics.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  Cell,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const jobData = [
    {
      jobTitle: "Software Engineer",
      company: "TechCo",
      salary: 90000,
    },
    {
      jobTitle: "Data Analyst",
      company: "DataTech",
      salary: 75000,
    },
    {
      jobTitle: "UX/UI Designer",
      company: "DesignSolutions",
      salary: 80000,
    },
    {
      jobTitle: "Marketing Specialist",
      company: "MarketPro",
      salary: 65000,
    },
    {
      jobTitle: "Financial Analyst",
      company: "FinanceCorp",
      salary: 85000,
    },
    {
      jobTitle: "Network Engineer",
      company: "NetworkSolutions",
      salary: 95000,
    },
    {
      jobTitle: "Project Manager",
      company: "ProjectMasters",
      salary: 100000,
    },
    {
      jobTitle: "Systems Administrator",
      company: "SysAdminTech",
      salary: 80000,
    },
    {
      jobTitle: "Digital Marketing Manager",
      company: "DigitalMarketers",
      salary: 90000,
    },
    {
      jobTitle: "Business Analyst",
      company: "BizAnalysis",
      salary: 85000,
    },
    {
      jobTitle: "Web Developer",
      company: "WebTech",
      salary: 82000,
    },
    {
      jobTitle: "Product Manager",
      company: "ProductMinds",
      salary: 110000,
    },
    {
      jobTitle: "Sales Representative",
      company: "SalesPro",
      salary: 70000,
    },
    {
      jobTitle: "Human Resources Manager",
      company: "HRMasters",
      salary: 95000,
    },
  ];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  const colors = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "red",
    "pink",
    "#4CAF50",
    "#FF5733",
    "#9B59B6",
    "#3498DB",
    "#E74C3C",
    "#F39C12",
    "#4CAF50",
  ];

  return (
    <div className="mt-12 pl-4 md:flex md:justify-between md:mx-24  ">
      <LineChart className=" mx-auto " width={320} height={300} data={jobData}>
        <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
        <XAxis dataKey="jobTitle"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        {/* <Legend /> */}
        <Line type="monotone" dataKey="salary" stroke="#8884d8"></Line>
      </LineChart>

      <BarChart className=" mx-auto " width={320} height={300} data={jobData}>
        <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
        <XAxis dataKey="jobTitle"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>

        <Bar
          className="mb-12"
          dataKey="salary"
          stroke="#8884d8"
          shape={<TriangleBar></TriangleBar>}
          label={{ position: "top" }}
        >
          {jobData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]}></Cell>
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default Statistics;
