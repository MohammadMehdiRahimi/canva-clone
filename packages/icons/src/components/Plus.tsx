import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    role="img"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M11 2L11 11L2 11L2 13L11 13L11 22L13 22L13 13L22 13L22 11L13 11L13 2Z"
    />
  </svg>
);
const Memo = memo(SvgPlus);
export default Memo;
