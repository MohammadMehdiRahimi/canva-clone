import { Canvas } from "fabric";

export const initializeFabric = async () => {
  try {
    // const { Canvas,
    //   //  PencilBrush
    //  } = await import("fabric");
    // const canvas = new Canvas(canvasEl, {
    //   preserveObjectStacking: true,
    //   isDrawingMode: false,
    //   renderOnAddRemove: true,
    // });
  } catch (error) {
    console.log("Faild to load fabric", error);
    return null;
  }
};

export const centerCanvas = (canvas: Canvas) => {
  if (!canvas) return;
};
