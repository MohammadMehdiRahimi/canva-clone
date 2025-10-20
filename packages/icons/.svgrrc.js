module.exports = {
  template: require("./scripts/template.js"),
  icon: true,
  typescript: true,
  filenameCase: "kebab",
  svgProps: {
    width: "{props.size}",
    height: "{props.size}",
    fill: "{props.color}",
  },
  replaceAttrValues: {
    "#000": "{props.color}",
    "#fff": "{props.color}",
  },
  outDir: "src/components",
};
