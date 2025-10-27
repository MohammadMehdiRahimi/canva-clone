module.exports = {
  icon: false,
  typescript: true,
  ref: false,
  memo: true,
  expandProps: "end",
  svgProps: {
    role: "img",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
  },
  replaceAttrValues: {
    "#000": "currentColor",
    "#000000": "currentColor",
    black: "currentColor",
  },
  svgo: true,
  svgoConfig: {
    plugins: [
      { name: "removeDimensions", active: true },
      { name: "removeViewBox", active: false },
    ],
  },
  outDir: "src/components",
};
