// Font loader
// ===========

import WebFont from 'webfontloader'

export default function loadFonts() {
  WebFont.load({
    google: { families: ['Fira Mono'] }
  })
}
