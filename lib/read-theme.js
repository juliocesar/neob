// Read theme
// ==========
//
// Reads a styleguide theme file and returns it.

import fs from 'fs'

export default function readTheme(name) {
  const path = `${__dirname}/../src/stylesheets/themes/${name}.scss`
  return fs.readFileSync(path).toString()
}
