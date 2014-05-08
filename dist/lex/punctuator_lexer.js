/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/lex/punctuator_lexer.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "bennu/parse", "bennu/text", "nu-stream/stream"], (function(require, exports, __o, __o0,
    __o1) {
    "use strict";
    var punctuator, prefixOperator, infixOperator, operator, always = __o["always"],
        binds = __o["binds"],
        fail = __o["fail"],
        label = __o["label"],
        either = __o["either"],
        enumeration = __o["enumeration"],
        map = __o["map"],
        many = __o["many"],
        trie = __o0["trie"],
        oneOf = __o0["oneOf"],
        foldl = __o1["foldl"],
        __add = (function(x, y) {
            return (x + y);
        }),
        join = map.bind(null, foldl.bind(null, __add, "")),
        punctuators = ["{", "}", "(", ")", "[", "]", ",", ".", ";", ":", "?", "=", ":=", "=:", "@", "...", "#",
            "\\", "->", "§"
        ];
    (punctuator = label("Punctuator Lexer", trie(punctuators)));
    var operatorChar = oneOf("?+-*/%|&^<>=!~@");
    (prefixOperator = label("Prefix Operator Lexer", binds(enumeration(trie(["~", "!", "++", "--"]), join(many(
        operatorChar))), (function() {
        var args = arguments;
        return always(__add.apply(null, args));
    }))));
    (infixOperator = label("Infix Operator Lexer", binds(enumeration(trie(["&&", "||", "<<", ">>", ">>>", "<=",
        "<", ">=", ">", "===", "!==", "==", "!=", "&", "|", "^", "+", "-", "*", "/", "%",
        "|>", "<|", "\\>", "\\>>", "<\\", "<<\\"
    ]), join(many(operatorChar))), (function() {
        var args = arguments,
            x = __add.apply(null, args);
        return ((punctuators.indexOf(x) >= 0) ? fail((("Cannot use puctuator " + x) +
            " as operator")) : always(x));
    }))));
    (operator = label("Prefix Operator Lexer", either(prefixOperator, infixOperator)));
    (exports["punctuator"] = punctuator);
    (exports["prefixOperator"] = prefixOperator);
    (exports["infixOperator"] = infixOperator);
    (exports["operator"] = operator);
}));