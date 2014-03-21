/*
 * THIS FILE IS AUTO GENERATED from 'lib/parse/common.kep'
 * DO NOT EDIT
*/define(["require", "exports", "bennu/parse", "nu-stream/stream", "khepri-ast/position"], (function(require, exports,
    parse, stream, __o) {
    "use strict";
    var always = parse["always"],
        bind = parse["bind"],
        binds = parse["binds"],
        extract = parse["extract"],
        enumeration = parse["enumeration"],
        eager = parse["eager"],
        optional = parse["optional"],
        NIL = stream["NIL"],
        SourceLocation = __o["SourceLocation"],
        precedence, node, nodea, positionParser;
    (precedence = (function(p, table) {
        var sep = parse.choicea(table.map((function(entry) {
            return bind(entry.sep, (function(__o) {
                var value = __o["value"];
                return always(({
                    "value": value,
                    "node": entry.node,
                    "precedence": entry.precedence,
                    "right": entry.right
                }));
            }));
        })));
        return bind(eager(parse.rec((function(self) {
            return parse.cons(p, optional(NIL, parse.cons(sep, parse.expected(
                "binary expression", self))));
        }))), (function(list) {
            var stack = [],
                out = [];
            while ((list.length > 0)) {
                var tok = list.shift();
                if (tok.type) {
                    out.push(tok);
                } else {
                    while ((stack.length > 0)) {
                        var o2 = stack[(stack.length - 1)];
                        if ((((!tok.right) && (o2.precedence === tok.precedence)) || (o2.precedence <
                            tok.precedence))) {
                            stack.pop();
                            var rt = out.pop(),
                                lf = out.pop();
                            out.push(new(o2.node)(SourceLocation.merge(lf.loc, rt.loc), o2.value,
                                lf, rt));
                        } else {
                            break;
                        }
                    }
                    stack.push(tok);
                }
            }
            while ((stack.length > 0)) {
                var o = stack.pop(),
                    rt0 = out.pop(),
                    lf0 = out.pop();
                out.push(new(o.node)(SourceLocation.merge(lf0.loc, rt0.loc), o.value, lf0, rt0));
            }
            return always(out.pop());
        }));
    }));
    (positionParser = extract((function(__o) {
        var position = __o["position"];
        return position.sourcePosition;
    })));
    var prevEnd = extract((function(__o) {
        var position = __o["position"];
        return position.prevEnd;
    }));
    (node = (function(p, f) {
        return binds(enumeration(positionParser, p, prevEnd), (function(o, x, c) {
            return always(f(new(SourceLocation)(o, c), x));
        }));
    }));
    (nodea = (function(p, f) {
        return binds(enumeration(positionParser, p, prevEnd), (function(o, x, c) {
            return always(f.apply(undefined, stream.toArray(stream.cons(new(SourceLocation)(o,
                c), x))));
        }));
    }));
    (exports["precedence"] = precedence);
    (exports["node"] = node);
    (exports["nodea"] = nodea);
    (exports["positionParser"] = positionParser);
}));