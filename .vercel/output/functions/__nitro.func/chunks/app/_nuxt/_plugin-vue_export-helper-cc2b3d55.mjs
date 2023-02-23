const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

export { _export_sfc as _ };
//# sourceMappingURL=_plugin-vue_export-helper-cc2b3d55.mjs.map
