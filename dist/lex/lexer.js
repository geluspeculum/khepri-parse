/*
 * THIS FILE IS AUTO GENERATED from 'lib/lex/lexer.kep'
 * DO NOT EDIT
*/define(["require", "exports", "bennu/parse", "bennu/lang", "nu-stream/stream", "khepri-ast/token",
    "khepri-ast/position", "./boolean_lexer", "./comment_lexer", "./identifier_lexer", "./line_terminator_lexer",
    "./null_lexer", "./number_lexer", "./punctuator_lexer", "./reserved_word_lexer", "./string_lexer",
    "./whitespace_lexer", "./regular_expression_lexer"
], (function(require, exports, parse, __o, __o0, lexToken, __o1, __o2, __o3, __o4, __o5, __o6, __o7, __o8, __o9,
    __o10, __o11, __o12) {
    "use strict";
    var always = parse["always"],
        attempt = parse["attempt"],
        binds = parse["binds"],
        bind = parse["bind"],
        choice = parse["choice"],
        either = parse["either"],
        eof = parse["eof"],
        getPosition = parse["getPosition"],
        enumeration = parse["enumeration"],
        extract = parse["extract"],
        expected = parse["expected"],
        next = parse["next"],
        many = parse["many"],
        runState = parse["runState"],
        label = parse["label"],
        ParserState = parse["ParserState"],
        then = __o["then"],
        memoStream = __o0["memoStream"],
        NIL = __o0["NIL"],
        streamFrom = __o0["from"],
        SourceLocation = __o1["SourceLocation"],
        SourcePosition = __o1["SourcePosition"],
        booleanLiteral = __o2["booleanLiteral"],
        comment = __o3["comment"],
        identifier = __o4["identifier"],
        identifierName = __o4["identifierName"],
        lineTerminator = __o5["lineTerminator"],
        nullLiteral = __o6["nullLiteral"],
        numericLiteral = __o7["numericLiteral"],
        punctuator = __o8["punctuator"],
        reservedWord = __o9["reservedWord"],
        stringLiteral = __o10["stringLiteral"],
        whitespace = __o11["whitespace"],
        regularExpressionLiteral = __o12["regularExpressionLiteral"],
        literal, token, inputElement, lexer, lexManyState, lex, makeToken = (function(type, p) {
            return bind(p, (function(value) {
                return always([type, value]);
            }));
        }),
        buildToken = (function(p) {
            return binds(enumeration(getPosition, p, getPosition), (function(start, __o, end) {
                var type = __o[0],
                    value = __o[1];
                return always(new(type)(new(SourceLocation)(start, end), value));
            }));
        }),
        literalImpl = choice(makeToken(lexToken.StringToken, stringLiteral), makeToken(lexToken.RegularExpressionToken,
            regularExpressionLiteral), makeToken(lexToken.BooleanToken, booleanLiteral), makeToken(lexToken
            .NullToken, nullLiteral), makeToken(lexToken.NumberToken, numericLiteral)),
        tokenImpl = choice(attempt(makeToken(lexToken.IdentifierToken, identifier)), attempt(literalImpl),
            makeToken(lexToken.KeywordToken, reservedWord), makeToken(lexToken.PunctuatorToken, punctuator)),
        inputElementImpl = choice(makeToken(lexToken.CommentToken, comment), makeToken(lexToken.WhitespaceToken,
            whitespace), makeToken(lexToken.LineTerminatorToken, lineTerminator), tokenImpl);
    (literal = buildToken(literalImpl));
    (token = buildToken(tokenImpl));
    (inputElement = buildToken(inputElementImpl));
    (lexer = then(many(inputElement), eof));
    (lex = (function(input) {
        return runState(lexer, new(ParserState)(streamFrom(input), SourcePosition.initial));
    }));
    (exports["literal"] = literal);
    (exports["token"] = token);
    (exports["inputElement"] = inputElement);
    (exports["lexer"] = lexer);
    (exports["lexManyState"] = lexManyState);
    (exports["lex"] = lex);
}));