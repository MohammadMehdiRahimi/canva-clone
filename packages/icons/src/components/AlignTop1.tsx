import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgAlignTop1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8,8H6c-1.657,0-3,1.343-3,3v8c0,1.657,1.343,3,3,3h2c1.657,0,3-1.343,3-3v-8C11,9.343,9.657,8,8,8z"
      opacity={0.35}
    />
    <path d="M18,8h-2c-1.657,0-3,1.343-3,3v2c0,1.657,1.343,3,3,3h2c1.657,0,3-1.343,3-3v-2C21,9.343,19.657,8,18,8z" />
    <path d="M19.5,6h-15C3.672,6,3,5.328,3,4.5S3.672,3,4.5,3h15C20.328,3,21,3.672,21,4.5S20.328,6,19.5,6z" />
  </svg>
);
const Memo = memo(SvgAlignTop1);
export default Memo;
