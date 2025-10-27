"use client";
import { Header } from "./header";

import { CanvasPage } from "./canvas";

export function MainEditor() {
  // const { canvas, setDesignId } = useEditorStore();
  // useEffect(() => {}, []);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 flex flex-col overflow-hidden relative">
          <main className="flex-1 overflow-hidden bg-[#f0f0f0] flex items-center justify-center">
            <CanvasPage />
          </main>
        </div>
      </div>
    </div>
  );
}
