import * as React from "react";
import type { SVGProps } from "react";
const SvgClose7 = (props: SVGProps<SVGSVGElement>) => {
  console.log("helo");
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill={props.color}
      {...props}
    >
      <path d="M4.707 3.293 3.293 4.707 10.586 12l-7.293 7.293 1.414 1.414L12 13.414l7.293 7.293 1.414-1.414L13.414 12l7.293-7.293-1.414-1.414L12 10.586z" />
    </svg>
  );
};
export default SvgClose7;
