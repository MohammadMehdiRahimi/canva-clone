"use client";

import { useRef } from "react";

export function CanvasPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);



  return (
    <div>
      <canvas ref={canvasRef} />
    </div>
  );
}
