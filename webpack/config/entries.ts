import path from 'path';
import { sync } from 'glob';

import { Entry } from 'webpack';

const RE_EXT_NAME = new RegExp('.tsx?$');
const packsPath = path.resolve(__dirname, '../src/packs');
const entries: Entry = {};

sync('**/*.ts{x,}', { cwd: packsPath }).forEach(targetPath => {
  const key = targetPath.replace(RE_EXT_NAME, '');
  entries[key] = `${packsPath}/${targetPath}`;
});

export { entries };
