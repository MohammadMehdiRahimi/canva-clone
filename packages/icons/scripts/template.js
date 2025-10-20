const template = (variables, { tpl }) => {
  return tpl`
${variables.imports};

${variables.interfaces};

const ${variables.componentName} = (${variables.props}) => {
    console.log('helo');
 return ${variables.jsx}
};

${variables.exports};
`;
};

module.exports = template;
