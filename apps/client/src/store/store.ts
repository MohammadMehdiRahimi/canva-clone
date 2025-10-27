// "use client";
// import { centerCanvas } from "@/fabric/fabric-utils";
// import { create } from "zustand";
// import { Canvas, FabricObject } from "fabric";

// type State = {
//   canvas: Canvas | null;
//   designId: string | null;
//   activeObjects: FabricObject[];
// };
// type Actions = {
//   restoreState: () => void;
//   setDesignId: (id: string) => void;
//   setCanvas: (canvas: Canvas) => void;
//   setActiveObjects: (activeObjs: FabricObject[]) => void;
// };
// export const useEditorStore = create<State & Actions>((set, get) => ({
//   //initial states
//   canvas: null,
//   designId: null,
//   activeObjects: [],

//   // actions;
//   setCanvas: (canvas) => {
//     set({ canvas });
//     if (canvas) {
//       centerCanvas(canvas);
//     }
//   },
//   setDesignId: (designId) => {
//     set({ designId });
//   },
//   restoreState: () => {
//     set({ canvas: null, activeObjects: [] });
//   },
//   setActiveObjects: (activeObj: FabricObject[]) => {
//     set({ activeObjects: activeObj });
//   },
// }));

// store.ts (or wherever it's located)

"use client";

import { centerCanvas } from "@/fabric/fabric-utils";
import { create } from "zustand";
import { Canvas, FabricObject } from "fabric";

type State = {
  canvas: Canvas | null;
  designId: string | null;
  activeObjects: FabricObject[];
};

type Actions = {
  restoreState: () => void;
  setDesignId: (id: string) => void;
  setCanvas: (canvas: Canvas) => void;
  setActiveObjects: (activeObjs: FabricObject[]) => void;
};

export const useEditorStore = create<State & Actions>((set) => ({
  // initial states
  canvas: null,
  designId: null,
  activeObjects: [],

  // actions
  setCanvas: (canvas) => {
    set({ canvas });
    if (canvas) {
      centerCanvas(canvas);
    }
  },
  setDesignId: (designId) => {
    set({ designId });
  },
  restoreState: () => {
    set({ canvas: null, activeObjects: [] });
  },
  setActiveObjects: (activeObjs: FabricObject[]) => {
    set({ activeObjects: activeObjs });
  },
}));
