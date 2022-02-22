var library = require("./index");

var locales = [
  require("./langs/de.json"),
  require("./langs/en.json"),
  require("./langs/fr.json"),
  require("./langs/no.json"),
  require("./langs/it.json"),
  require("./langs/fi.json")
];

for (var i = 0; i < locales.length; i++) {
  library.registerLocale(locales[i]);
}

module.exports = library;
