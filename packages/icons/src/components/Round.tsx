import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgRound = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    role="img"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    {...props}
  >
    <path d="M25 2C12.32114 2 2 12.32114 2 25C2 37.67886 12.32114 48 25 48C37.67886 48 48 37.67886 48 25C48 12.32114 37.67886 2 25 2 z M 25 6C35.5171 6 44 14.4829 44 25C44 35.5171 35.5171 44 25 44C14.4829 44 6 35.5171 6 25C6 14.4829 14.4829 6 25 6 z" />
  </svg>
);
const Memo = memo(SvgRound);
export default Memo;
