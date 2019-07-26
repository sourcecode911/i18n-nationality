var assert = require("assert-plus"),
  i18n = require("../");

describe("i18n for nationalities", function () {
  "use strict";
  describe("Alpha-2 to Alpha-2 code", function() {
    it("toAlpha2 SG => SG", function() {
      assert.equal(i18n.toAlpha2("SG"), "SG");
    });
  });
  describe("Alpha-2 to Alpha-3 code", function() {
    it("toAlpha3 true => undefined", function() {
      assert.equal(i18n.toAlpha3(true), undefined);
    });
    it("toAlpha3 XX => undefined", function() {
      assert.equal(i18n.toAlpha3("XX"), undefined);
    });
    it("toAlpha3 SG => SGP", function() {
      assert.equal(i18n.toAlpha3("SG"), "SGP");
    });
    it("alpha2ToAlpha3 SG => SGP", function() {
      assert.equal(i18n.alpha2ToAlpha3("SG"), "SGP");
    });
  });
  describe("Alpha-3 to Alpha-3 code", function() {
    it("toAlpha2 SGP => SGP", function() {
      assert.equal(i18n.toAlpha3("SGP"), "SGP");
    });
  });
  describe("Alpha-3 to Alpha-2 code", function() {
    it("toAlpha2 true => undefined", function() {
      assert.equal(i18n.toAlpha2(true), undefined);
    });
    it("toAlpha2 XXX => undefined", function() {
      assert.equal(i18n.toAlpha2("XXX"), undefined);
    });
    it("toAlpha2 DEU => DE", function() {
      assert.equal(i18n.toAlpha2("DEU"), "DE");
    });
    it("alpha3ToAlpha2 DEU => DE", function() {
      assert.equal(i18n.alpha3ToAlpha2("DEU"), "DE");
    });
  });
  describe("Alpha-3 to Numeric code", function() {
    it("alpha3ToNumeric SWE => 752", function() {
      assert.equal(i18n.alpha3ToNumeric("SWE"), 752);
    });
    it("alpha3ToNumeric DJI => 262", function() {
      assert.equal(i18n.alpha3ToNumeric("DJI"), 262);
    });
  });
  describe("Alpha-2 to Numeric code", function() {
    it("alpha2ToNumeric SE => 752", function() {
      assert.equal(i18n.alpha2ToNumeric("SE"), 752);
    });
    it("alpha2ToNumeric DJ => 262", function() {
      assert.equal(i18n.alpha2ToNumeric("DJ"), 262);
    });
  });
  describe("Numeric to Alpha-2 code", function() {
    it("toAlpha2 '276' => DE", function() {
      assert.equal(i18n.toAlpha2("276"), "DE");
    });
    it("toAlpha2 '004' => AF", function() {
      assert.equal(i18n.toAlpha2("004"), "AF");
    });
    it("toAlpha2 276 => DE", function() {
      assert.equal(i18n.toAlpha2(276), "DE");
    });
    it("toAlpha2 4 => AF", function() {
      assert.equal(i18n.toAlpha2(4), "AF");
    });
    it("numericToAlpha2 '276' => DE", function() {
      assert.equal(i18n.numericToAlpha2("276"), "DE");
    });
    it("numericToAlpha2 '004' => AF", function() {
      assert.equal(i18n.numericToAlpha2("004"), "AF");
    });
    it("numericToAlpha2 276 => DE", function() {
      assert.equal(i18n.numericToAlpha2(276), "DE");
    });
    it("numericToAlpha2 4 => AF", function() {
      assert.equal(i18n.numericToAlpha2(4), "AF");
    });
  });
  describe("Numeric to Alpha-3 code", function() {
    it("toAlpha3 '276' => DEU", function() {
      assert.equal(i18n.toAlpha3("276"), "DEU");
    });
    it("toAlpha3 '004' => AFG", function() {
      assert.equal(i18n.toAlpha3("004"), "AFG");
    });
    it("toAlpha3 276 => DEU", function() {
      assert.equal(i18n.toAlpha3(276), "DEU");
    });
    it("toAlpha3 4 => DEU", function() {
      assert.equal(i18n.toAlpha3(4), "AFG");
    });
    it("numericToAlpha3 '276' => DEU", function() {
      assert.equal(i18n.numericToAlpha3("276"), "DEU");
    });
    it("numericToAlpha3 '004' => AFG", function() {
      assert.equal(i18n.numericToAlpha3("004"), "AFG");
    });
    it("numericToAlpha3 276 => DEU", function() {
      assert.equal(i18n.numericToAlpha3(276), "DEU");
    });
    it("numericToAlpha3 4 => AFG", function() {
      assert.equal(i18n.numericToAlpha3(4), "AFG");
    });
  });
  describe("getAlpha2Codes", function() {
    it("length", function() {
      assert.equal(Object.keys(i18n.getAlpha2Codes()).length, 246);
    });
  });
  describe("getAlpha3Codes", function() {
    it("length", function() {
      assert.equal(Object.keys(i18n.getAlpha3Codes()).length, 246);
    });
  });
  describe("getNumericCodes", function() {
    it("length", function() {
      assert.equal(Object.keys(i18n.getNumericCodes()).length, 246);
    });
  });
  describe("getAlpha2Code", function() {
    it("missing name", function() {
      assert.equal(i18n.getAlpha2Code("XXX", "de"), undefined);
    });
    it("missing land", function() {
      assert.equal(i18n.getAlpha2Code("Deutschland", "xx"), undefined);
    });
  });
  describe("getSimpleAlpha2Code", function() {
    it("works", function() {
      assert.equal(i18n.getSimpleAlpha2Code("belgisch", "de"), 'BE');
      assert.equal(i18n.getSimpleAlpha2Code("Belgisch", "de"), 'BE');
    });
    it("missing name", function() {
      assert.equal(i18n.getSimpleAlpha2Code("XXX", "de"), undefined);
    });
    it("missing land", function() {
      assert.equal(i18n.getSimpleAlpha2Code("Deutschland", "xx"), undefined);
    });
  });
  describe("getAlpha3Code", function() {
    it("missing name", function() {
      assert.equal(i18n.getAlpha3Code("XXX", "de"), undefined);
    });
    it("missing land", function() {
      assert.equal(i18n.getAlpha3Code("Deutschland", "xx"), undefined);
    });
  });
  describe("getSimpleAlpha3Code", function() {
    it("works", function() {
      assert.equal(i18n.getSimpleAlpha3Code("belgisch", "de"), 'BEL');
      assert.equal(i18n.getSimpleAlpha3Code("Belgisch", "de"), 'BEL');
    });
    it("missing name", function() {
      assert.equal(i18n.getSimpleAlpha3Code("XXX", "de"), undefined);
    });
    it("missing land", function() {
      assert.equal(i18n.getSimpleAlpha3Code("Deutschland", "xx"), undefined);
    });
  });
  describe("isValid", function() {
    it("isValid true => false", function() {
      assert.equal(i18n.isValid(true), false);
    });
    it("isValid XX => false", function() {
      assert.equal(i18n.isValid("XX"), false);
    });
    it("isValid SG => true", function() {
      assert.equal(i18n.isValid("SG"), true);
    });
    it("isValid SGP => true", function() {
      assert.equal(i18n.isValid("SGP"), true);
    });
    it("isValid 702 => true", function() {
      assert.equal(i18n.isValid(702), true);
    });
    it("isValid 999 => false", function() {
      assert.equal(i18n.isValid(999), false);
    });
    it("isValid ... => false", function() {
      assert.equal(i18n.isValid('...'), false);
    });
    it("isValid is case insensitive", function() {
      assert.equal(i18n.isValid('fra'), true);
      assert.equal(i18n.isValid('fr'), true);
    });
    it("isValid works with undefined or null", function() {
      assert.equal(i18n.isValid(undefined), false);
      assert.equal(i18n.isValid(null), false);
    });
  });
  describe("completeness", function () {
    i18n.langs().forEach(function(lang) {
      describe(lang + " completeness", function () {
        it("complete (to less)", function() {
          Object.keys(i18n.getAlpha2Codes()).forEach(function(code) {
            assert.notEqual(i18n.getName(code, lang), undefined, "missing entry for " + code);
          });
        });
        it("complete (too much)", function() {
          Object.keys(i18n.getNames(lang)).forEach(function(code) {
            assert.notStrictEqual(i18n.getAlpha2Codes()[code], void 0, "entry for " + code + " in lang " + lang + " is too much");
          });
        });
      });
    });
  }); 
  describe("langs", function() {
    describe("de", function () {
      var lang = "de";
      describe("get name", function () {
        it("for de", function () {
          assert.equal(i18n.getName("de", lang), "Deutsch");
        });
        it("for cl", function () {
          assert.equal(i18n.getName("cl", lang), "Chilenisch");
        });
        it("for CL", function () {
          assert.equal(i18n.getName("CL", lang), "Chilenisch");
        });
        it("for cy", function () {
          assert.equal(i18n.getName("cy", lang), "Zyprisch");
        });
        it("for af", function () {
          assert.equal(i18n.getName("af", lang), "Afghanisch");
        });
      });
    });
    describe("en", function () {
      var lang = "en";
      describe("get Alpha-2 code", function() {
        it("nameToAlpha2 American => US", function() {
          assert.equal(i18n.getAlpha2Code("American", lang), "US");
        });
        it("nameToAlpha2 Brazilian => BR", function() {
          assert.equal(i18n.getAlpha2Code("Brazilian", lang), "BR");
        });
      });
      describe("get Alpha-3 code", function() {
        it("nameToAlpha3 American => USA", function() {
          assert.equal(i18n.getAlpha3Code("American", lang), "USA");
        });
        it("nameToAlpha3 Brazilian => BRA", function() {
          assert.equal(i18n.getAlpha3Code("Brazilian", lang), "BRA");
        });
      });
      describe("get name", function () {
        it("for de", function () {
          assert.equal(i18n.getName("de", lang), "German");
        });
        it("for cl", function () {
          assert.equal(i18n.getName("cl", lang), "Chilean");
        });
        it("for CL", function () {
          assert.equal(i18n.getName("CL", lang), "Chilean");
        });
        it("for cy", function () {
          assert.equal(i18n.getName("cy", lang), "Cypriot");
        });
        it("for af", function () {
          assert.equal(i18n.getName("af", lang), "Afghan");
        });
      });
    });
    describe("unsupported language", function () {
      var lang = "unsupported";
      it("get name", function () {
        assert.equal(i18n.getName("de", lang), undefined);
      });
      it("get names", function () {
        assert.equal(Object.keys(i18n.getNames(lang)).length, 0);
      });
    });
  });
});