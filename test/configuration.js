// Test suite configuration
// ========================

import hook from 'css-modules-require-hook'

hook({
  extensions: ['.scss', '.css'],
  preprocessCss: function() {
    return ''
  }
})
