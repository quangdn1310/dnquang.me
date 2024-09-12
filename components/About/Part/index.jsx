"use client";
import { Pie } from "@ant-design/charts";
import React from "react";

const Part = () => {
  const config = {
    data: [
      { part: "BE", sold: 0.2 },
      { part: "FE", sold: 0.8 },
    ],
    angleField: "sold",
    colorField: "part",
    legend: false,
    label: {
      text: ({ part }) => {
        return `${part}`;
      },
      fill: "#fff",
      fontSize: 18,
      fontWeight: "bold",
    },
    style: {
      stroke: "transparent",
      inset: 3,
      radius: 6,
      padding: 10,
      fill: ({ part }) => {
        if (part === "BE") {
          return "p(a)https://gw.alipayobjects.com/zos/antfincdn/FioHMFgIld/pie-wenli1.png";
        }
        return "p(a)https://gw.alipayobjects.com/zos/antfincdn/Ye2DqRx%2627/pie-wenli2.png";
      },
    },
  };
  return <Pie {...config} />;
};

export default Part;
