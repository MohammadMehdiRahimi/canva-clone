import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgFullScreen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    role="img"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    {...props}
  >
    <path d="M8 8L8 24L12 24L12 12L24 12L24 8L8 8 z M 40 8L40 12L52 12L52 24L56 24L56 8L40 8 z M 8 40L8 56L24 56L24 52L12 52L12 40L8 40 z M 52 40L52 52L40 52L40 56L56 56L56 40L52 40 z" />
  </svg>
);
const Memo = memo(SvgFullScreen);
export default Memo;
