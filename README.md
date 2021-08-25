[![CircleCI](https://circleci.com/gh/sourcecode911/i18n-nationality/tree/master.svg?style=svg)](https://circleci.com/gh/sourcecode911/i18n-nationality/tree/master)
[![npm version](https://badge.fury.io/js/i18n-nationality.svg)](https://badge.fury.io/js/i18n-nationality)
![GitHub All Releases](https://img.shields.io/github/downloads/sourcecode911/i18n-nationality/total)
[![Known Vulnerabilities](https://snyk.io//test/github/sourcecode911/i18n-nationality/badge.svg?targetFile=package.json)](https://snyk.io//test/github/sourcecode911/i18n-nationality?targetFile=package.json)
[![GitHub issues](https://img.shields.io/github/issues/sourcecode911/i18n-nationality)](https://github.com/sourcecode911/i18n-nationality/issues)
[![License](https://img.shields.io/github/license/sourcecode911/i18n-nationality)](https://github.com/sourcecode911/i18n-nationality/LICENSE)

# i18n-nationality

Nationalities as adjectives mapped to Country codes. This repository is heavily based on the i18n-iso-countries repository by michaelwittig.
<https://github.com/michaelwittig/node-i18n-iso-countries>

i18n for nationalities of ISO 3166-1 country codes. We support Alpha-2, Alpha-3 and Numeric codes from <http://en.wikipedia.org/wiki/ISO_3166-1#Officially_assigned_code_elements>

## Installing

Install it using npm: `npm install i18n-nationality`

```javascript
var nationalities = require("i18n-nationality");
```

If you use `i18n-nationality` with Node.js your are done. If you use the package in a browser environment you also have to register the languages you want to use to minimize file size.

```javascript
// Support german & english languages.
nationalities.registerLocale(require("i18n-nationality/langs/en.json"));
nationalities.registerLocale(require("i18n-nationality/langs/de.json"));
```

## Code to Nationality

### Get the name of a nationality by its ISO 3166-1 Alpha-2, Alpha-3 or Numeric code

```javascript
var nationalities = require("i18n-nationality");
// in a browser environment: countries.registerLocale(require("i18n-nationality/langs/en.json"));
console.log("US (Alpha-2) => " + nationalities.getName("US", "en")); // American
console.log("US (Alpha-2) => " + nationalities.getName("US", "de")); // Amerikanisch
console.log("USA (Alpha-3) => " + nationalities.getName("USA", "en")); // American
console.log("USA (Numeric) => " + nationalities.getName("840", "en")); // American
```

### Get all names by their ISO 3166-1 Alpha-2 code

```javascript
var nationalities = require("i18n-nationality");
// in a browser environment: nationalities.registerLocale(require("i18n-nationality/langs/en.json"));
console.log(nationalities.getNames("en")); // { 'AF': 'Afghan', 'AL': 'Albanian', [...], 'ZM': 'Zambian', 'ZW': 'Zimbabwean' }
```

### Supported languages (ISO 639-1)

-   `de`: German
-   `en`: English
-   `fr`: French
-   `no`: Norwegian
-   `it`: Italian

[List of ISO 639-1 codes](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)

### Nationality to Code

```javascript
var nationalities = require("i18n-nationality");
// in a browser environment: nationalities.registerLocale(require("i18n-nationality/langs/en.json"));
console.log("American => " + nationalities.getAlpha2Code('American', 'en'));
// American => US

console.log("American => " + nationalities.getAlpha3Code('American', 'en'));
// American => USA
```

## Codes

### Convert Alpha-3 to Alpha-2 code

```javascript
var nationalities = require("i18n-nationality");
// in a browser environment: nationalities.registerLocale(require("i18n-nationality/langs/en.json"));
console.log("USA (Alpha-3) => " + nationalities.alpha3ToAlpha2("USA") + " (Alpha-2)");
// USA (Alpha-3) => US (Alpha-2)
```

### Convert Numeric to Alpha-2 code

```javascript
var nationalities = require("i18n-nationality");
// in a browser environment: nationalities.registerLocale(require("i18n-nationality/langs/en.json"));
console.log("840 (Numeric) => " + nationalities.numericToAlpha2("840") + " (Alpha-2)");
// 840 (Numeric) => US (Alpha-2)
```

### Convert Alpha-2 to Alpha-3 code

```javascript
var nationalities = require("i18n-nationality");
// in a browser environment: nationalities.registerLocale(require("i18n-nationality/langs/en.json"));
console.log("DE (Alpha-2) => " + nationalities.alpha2ToAlpha3("DE") + " (Alpha-3)");
// DE (Alpha-2) => DEU (Alpha-3)
```

### Convert Numeric to Alpha-3 code

```javascript
var nationalities = require("i18n-nationality");
// in a browser environment: nationalities.registerLocale(require("i18n-nationality/langs/en.json"));
console.log("840 (Numeric) => " + nationalities.numericToAlpha3("840") + " (Alpha-3)");
// 840 (Numeric) => USA (Alpha-3)
```

### Convert Alpha-3 to Numeric code

```javascript
var nationalities = require("i18n-nationality");
// in a browser environment: nationalities.registerLocale(require("i18n-nationality/langs/en.json"));
console.log(nationalities.alpha3ToNumeric("SWE"));
// 752
```

### Convert Alpha-2 to Numeric code

```javascript
var nationalities = require("i18n-nationality");
// in a browser environment: nationalities.registerLocale(require("i18n-nationality/langs/en.json"));
console.log(nationalities.alpha2ToNumeric("SE"));
// 752
```

### Get all Alpha-2 codes

```javascript
var nationalities = require("i18n-nationality");
// in a browser environment: nationalities.registerLocale(require("i18n-nationality/langs/en.json"));
console.log(nationalities.getAlpha2Codes());
// { 'AF': 'AFG', 'AX': 'ALA', [...], 'ZM': 'ZMB', 'ZW': 'ZWE' }
```

### Get all Alpha-3 codes

```javascript
var nationalities = require("i18n-nationality");
// in a browser environment: nationalities.registerLocale(require("i18n-nationality/langs/en.json"));
console.log(nationalities.getAlpha3Codes());
// { 'AFG': 'AF', 'ALA': 'AX', [...], 'ZMB': 'ZM', 'ZWE': 'ZW' }
```

### Get all Numeric codes

```javascript
var nationalities = require("i18n-nationality");
// in a browser environment: nationalities.registerLocale(require("i18n-nationality/langs/en.json"));
console.log(nationalities.getNumericCodes());
// { '004': 'AF', '008': 'AL', [...], '887': 'YE', '894': 'ZM' }
```

### Validate country code

```javascript
var nationalities = require("i18n-nationality");
// in a browser environment: nationalities.registerLocale(require("i18n-nationality/langs/en.json"));
console.log(nationalities.isValid("US"), nationalities.isValid("USA"), nationalities.isValid("XX")));
// true, true, false
```

## Contribution

To add a language:

-   add a json file under langs/
-   add the language to the `data` object in enty-node.js at the top
-   add language to section **Supported languages** in README.md
-   add language to keywords in package.json
-   run `npm install && make test` to make sure that tests are passing
-   open a PR on GitHub

You can check codes here: https://www.iso.org/obp/ui/#home
