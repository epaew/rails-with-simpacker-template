const glob = require('glob');
const path = require('path');

const RE_EXT_NAME = new RegExp('.tsx?$');
const packsPath = path.resolve(__dirname, '../src/packs');
const entries = {};

glob.sync('**/*.ts{x,}', { cwd: packsPath }).forEach(targetPath => {
  const key = targetPath.replace(RE_EXT_NAME, '');
  entries[key] = `${packsPath}/${targetPath}`;
});

module.exports = entries;
