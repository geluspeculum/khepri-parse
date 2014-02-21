/*
 * THIS FILE IS AUTO GENERATED from 'lib/lex/number_lexer.kep'
 * DO NOT EDIT
*/
"use strict";
var __o = require("bennu")["parse"],
    always = __o["always"],
    attempt = __o["attempt"],
    bind = __o["bind"],
    binds = __o["binds"],
    choice = __o["choice"],
    either = __o["either"],
    enumeration = __o["enumeration"],
    expected = __o["expected"],
    many = __o["many"],
    many1 = __o["many1"],
    next = __o["next"],
    optional = __o["optional"],
    Parser = __o["Parser"],
    __o0 = require("bennu")["lang"],
    then = __o0["then"],
    __o1 = require("bennu")["text"],
    character = __o1["character"],
    characters = __o1["characters"],
    match = __o1["match"],
    string = __o1["string"],
    __o2 = require("nu-stream")["stream"],
    foldl = __o2["foldl"],
    decimal, negativeSign, positiveSign, exponentIndicator, hexIndicator, decimalDigit, nonZeroDigit, hexDigit,
        decimalDigits, hexDigits, unsignedInteger, signedInteger, exponentPart, hexIntegerLiteral,
        decimalIntegerLiteral, decimalLiteral, numericLiteral, join = (function(p) {
            return bind(p, (function(f, g) {
                return (function(x) {
                    return f(g(x));
                });
            })(always, foldl.bind(null, (function(x, y) {
                return (x + y);
            }), "")));
        });
(decimal = character("."));
(negativeSign = character("-"));
(positiveSign = character("+"));
(exponentIndicator = characters("eE"));
(hexIndicator = either(string("0x"), string("0X")));
(decimalDigit = characters("0123456789"));
(nonZeroDigit = characters("123456789"));
(hexDigit = characters("0123456789abcdefABCDEF"));
(decimalDigits = Parser("Decimal Digits Lexer", join(many1(decimalDigit))));
(hexDigits = Parser("Hex Digits Lexer", join(many1(hexDigit))));
(unsignedInteger = Parser("Unsigned Integer Lexer", bind(decimalDigits, (function(f, g) {
    return (function(x) {
        return f(g(x));
    });
})(always, parseInt))));
(signedInteger = Parser("Signed Integer Lexer", either(next(negativeSign, bind(unsignedInteger, (function(f, g) {
    return (function(x) {
        return f(g(x));
    });
})(always, (function(x) {
    return (-x);
})))), next(optional(null, positiveSign), unsignedInteger))));
var hexIntegerLiteralDigits = Parser("Hex Integer Literal Digits Lexer", bind(hexDigits, (function(num) {
    return always(parseInt(num, 16));
})));
(exponentPart = Parser("Exponent Part Lexer", next(exponentIndicator, signedInteger)));
(hexIntegerLiteral = Parser("Hex Integer Literal Lexer", next(hexIndicator, hexIntegerLiteralDigits)));
(decimalIntegerLiteral = Parser("Decimal Integer Literal", bind(decimalDigits, (function(f, g) {
    return (function(x) {
        return f(g(x));
    });
})(always, parseInt))));
(decimalLiteral = Parser("Decimal Literal Lexer", binds(enumeration(binds(enumeration(decimalDigits, optional(0,
    attempt(next(decimal, decimalDigits)))), (function(whole, fractional) {
    return always(parseFloat(((whole + ".") + fractional)));
})), optional(0, exponentPart)), (function(num, exp) {
    return always((num * Math.pow(10, parseInt(exp))));
}))));
(numericLiteral = Parser("Numeric Literal Lexer", either(next(attempt(hexIndicator), expected("hex digits",
    hexIntegerLiteralDigits)), decimalLiteral)));
(exports.decimal = decimal);
(exports.negativeSign = negativeSign);
(exports.positiveSign = positiveSign);
(exports.exponentIndicator = exponentIndicator);
(exports.hexIndicator = hexIndicator);
(exports.decimalDigit = decimalDigit);
(exports.nonZeroDigit = nonZeroDigit);
(exports.hexDigit = hexDigit);
(exports.decimalDigits = decimalDigits);
(exports.hexDigits = hexDigits);
(exports.unsignedInteger = unsignedInteger);
(exports.signedInteger = signedInteger);
(exports.exponentPart = exponentPart);
(exports.hexIntegerLiteral = hexIntegerLiteral);
(exports.decimalIntegerLiteral = decimalIntegerLiteral);
(exports.decimalLiteral = decimalLiteral);
(exports.numericLiteral = numericLiteral);