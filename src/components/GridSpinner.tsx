import dynamic from "next/dynamic";
import React from "react";

// Lazy Load를 위한 조치
const GridLoader = dynamic(
  () => import("react-spinners").then((lib) => lib.GridLoader),
  {
    ssr: false,
  }
);

type Props = {
  color?: string;
};

const GridSpinner = ({ color = "red" }: Props) => {
  return <GridLoader color={color} />;
};

export default GridSpinner;
