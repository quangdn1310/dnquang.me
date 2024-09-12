"use client";
import { Column } from "@ant-design/charts";
import { useInView, motion } from "framer-motion";
import React, { useRef } from "react";

const data = [
  { type: "Teamwork", level: 85 },
  { type: "Software Development", level: 70 },
  { type: "Communication", level: 60 },
  { type: "Problem Solving", level: 75 },
  { type: "Time Management", level: 50 },
];

const ChartSkills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const logo = [
    ["Teamwork", "/images/skills/teamwork.png"],
    ["Software Development", "/images/skills/code.png"],
    ["Communication", "/images/skills/communication.png"],
    ["Problem Solving", "/images/skills/problem_solving.png"],
    ["Time Management", "/images/skills/time_management.png"],
  ];
  const chartRef = React.useRef();
  const config = {
    data,
    animate: { enter: { type: "growInY" } },
    xField: "type",
    yField: "level",
    colorField: "type",
    onReady: ({ chart }) => {
      chartRef.current = chart;
    },
    legend: {
      color: {
        itemMarker: (name, index) => () => {
          const chart = chartRef.current;
          const { canvas } = chart.getContext();
          const { document } = canvas;
          window.c = chartRef.current;
          const image = document.createElement("image", {
            style: {
              width: 20,
              height: 20,
              anchor: "0.5 0.5",
              src: logo[index][1],
            },
          });
          return image;
        },
        itemMarkerSize: 40,
        itemLabelText: (_, index) => logo[index][0],
        maxRows: 1,
      },
    },
  };
  return (
    <motion.div ref={ref}>{isInView && <Column {...config} />}</motion.div>
  );
};

export default ChartSkills;
