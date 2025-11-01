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
import { User } from "@/types/user.types";
import { Design } from "@/types/design.types";

type SaveStatus = "saved" | "draft";
type State = {
  canvas: Canvas | null;
  designId: string | null;
  activeObjects: FabricObject[];
  isEditing: boolean;
  name: string;
  showProperties: boolean;
  saveStatus: SaveStatus;
  lastModified: Date | null;
  isModified: boolean;
  userSubscription: User | null;
  userDesigns: Design[];
  userDesignsLoading: boolean;
};

type Actions = {
  restoreState: () => void;
  setDesignId: (id: string) => void;
  setCanvas: (canvas: Canvas) => void;
  setActiveObjects: (activeObjs: FabricObject[]) => void;
  setIsEditing: (status: boolean) => void;
  setName: (name: string) => void;
  setShowProperties: (flag: boolean) => void;
  setSaveStatus: (status: SaveStatus) => void;
  setIsModified: () => void;
  saveToServer: () => void;
  setUserSubscription: (user: User) => void;
  setUserDesigns: (design: Design) => void;
  setUserDesignsLoading: (flag: boolean) => void;
};

const initialState: State = {
  canvas: null,
  designId: null,
  activeObjects: [],
  isEditing: false,
  isModified: false,
  lastModified: null,
  name: "",
  saveStatus: "draft",
  showProperties: false,
  userDesigns: [],
  userDesignsLoading: false,
  userSubscription: null,
};
export const useEditorStore = create<State & Actions>((set) => ({
  ...initialState,
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
    set({ ...initialState });
  },
  setActiveObjects: (activeObjs: FabricObject[]) => {
    set({ activeObjects: activeObjs });
  },
}));
