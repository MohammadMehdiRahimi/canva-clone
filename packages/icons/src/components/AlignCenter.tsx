import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgAlignCenter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    role="img"
    stroke="currentColor"
    strokeWidth="1.5"
    {...props}
  >
    <path
      fill="currentColor"
      d="M8 20a2 2 0 0 1-2-2V6a2 2 0 1 1 4 0v12a2 2 0 0 1-2 2zm8-3a2 2 0 0 1-2-2V9a2 2 0 1 1 4 0v6a2 2 0 0 1-2 2z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 12v6a2 2 0 1 0 4 0v-6m-4 0V6a2 2 0 1 1 4 0v6m-4 0H3m7 0h4m0 0v3a2 2 0 1 0 4 0v-3m-4 0V9a2 2 0 1 1 4 0v3m0 0h3"
    />
  </svg>
);
const Memo = memo(SvgAlignCenter);
export default Memo;
