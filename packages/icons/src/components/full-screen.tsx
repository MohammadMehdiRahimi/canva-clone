import * as React from "react";
import type { SVGProps } from "react";
const SvgFullScreen = (props: SVGProps<SVGSVGElement>) => {
  console.log("helo");
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox="0 0 64 64"
      fill={props.color}
      {...props}
    >
      <path d="M8 8v16h4V12h12V8zm32 0v4h12v12h4V8zM8 40v16h16v-4H12V40zm44 0v12H40v4h16V40z" />
    </svg>
  );
};
export default SvgFullScreen;
