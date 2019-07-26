var library = require("./index");

var locales = [
  require("./langs/de.json"),
  require("./langs/en.json")
];

for (var i = 0; i < locales.length; i++) {
    console.log(locales);
  library.registerLocale(locales[i]);
}

module.exports = library;
