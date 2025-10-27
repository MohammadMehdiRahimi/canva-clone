import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgHome = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    role="img"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    {...props}
  >
    <path d="M12 2.0996094L1 12L4 12L4 21L10 21L10 15L14 15L14 21L20 21L20 12L23 12L12 2.0996094 z" />
  </svg>
);
const Memo = memo(SvgHome);
export default Memo;
