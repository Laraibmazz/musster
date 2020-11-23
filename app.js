var tree = require('file-tree-browser-widget')

module.exports = function (entries, el) {
  var children = []
  entries.forEach(function (entry) {
    console.log(entry)
    children.push({
      type: entry.type,
      path: entry.value.name
    })
  })
  tree('/', children, el)
}
