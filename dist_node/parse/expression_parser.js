/*
 * THIS FILE IS AUTO GENERATED from 'lib/parse/expression_parser.kep'
 * DO NOT EDIT
*/
"use strict";
var __o = require("bennu")["parse"],
    always = __o["always"],
    append = __o["append"],
    attempt = __o["attempt"],
    bind = __o["bind"],
    binds = __o["binds"],
    choice = __o["choice"],
    cons = __o["cons"],
    eager = __o["eager"],
    either = __o["either"],
    enumeration = __o["enumeration"],
    expected = __o["expected"],
    many = __o["many"],
    memo = __o["memo"],
    next = __o["next"],
    optional = __o["optional"],
    Parser = __o["Parser"],
    __o0 = require("bennu")["lang"],
    between = __o0["between"],
    chainl1 = __o0["chainl1"],
    chainr1 = __o0["chainr1"],
    sepBy = __o0["sepBy"],
    sepBy1 = __o0["sepBy1"],
    then = __o0["then"],
    __o1 = require("nu-stream")["stream"],
    foldl = __o1["foldl"],
    foldr = __o1["foldr"],
    ast_declaration = require("khepri-ast")["declaration"],
    ast_expression = require("khepri-ast")["expression"],
    ast_statement = require("khepri-ast")["statement"],
    ast_pattern = require("khepri-ast")["pattern"],
    ast_value = require("khepri-ast")["value"],
    __o2 = require("../position"),
    SourceLocation = __o2["SourceLocation"],
    __o3 = require("./common"),
    node = __o3["node"],
    nodea = __o3["nodea"],
    precedence = __o3["precedence"],
    __o4 = require("./token_parser"),
    keyword = __o4["keyword"],
    punctuator = __o4["punctuator"],
    program_parser = require("./program_parser"),
    __o5 = require("./value_parser"),
    identifier = __o5["identifier"],
    literal = __o5["literal"],
    stringLiteral = __o5["stringLiteral"],
    pattern = require("./pattern_parser"),
    arrayLiteral, propertyName, propertyInitializer, objectProperties, objectLiteral, functionExpression,
        operatorExpression, primaryExpression, curryExpression, args, applicationExpression, dotAccessor,
        bracketAccessor, accessor, memberExpression, newExpression, unaryOperator, unaryExpression, binaryExpression,
        conditionalExpression, letExpression, leftHandReferenceExpression, assignmentOperator, assignmentExpression,
        expression, topLevelExpression, arrayElement, arrayElements, letBindings, letBody, element, reducer, reducer0,
        reducer1, sourceElements = (function() {
            var args = arguments,
                __o = require("./program_parser"),
                sourceElements = __o["sourceElements"];
            return sourceElements.apply(undefined, args);
        });
(expression = (function() {
    var args = arguments;
    return expression.apply(undefined, args);
}));
(memberExpression = (function() {
    var args = arguments;
    return memberExpression.apply(undefined, args);
}));
(arrayLiteral = Parser("Array Literal", ((arrayElement = expression), (arrayElements = expected("array element", Parser(
    "Array Elements", eager(sepBy(punctuator(","), arrayElement))))), node(between(punctuator("["),
    punctuator("]"), arrayElements), ast_expression.ArrayExpression.create))));
(propertyName = stringLiteral);
(propertyInitializer = Parser("Property Initializer", nodea(enumeration(then(propertyName, punctuator(":")), expression),
    ast_value.ObjectValue.create)));
(objectProperties = Parser("Object Properties", eager(sepBy(punctuator(","), propertyInitializer))));
(objectLiteral = Parser("Object Literal", node(between(punctuator("{"), punctuator("}"), objectProperties),
    ast_expression.ObjectExpression.create)));
var formalParameterList = pattern.argumentsPattern,
    statementBody = node(between(punctuator("{"), punctuator("}"), sourceElements), ast_statement.BlockStatement.create),
    lambdaBody = expression,
    functionBody = either(statementBody, lambdaBody);
(functionExpression = Parser("Function Expression", nodea(cons(optional(null, next(keyword("function"), optional(null,
    identifier))), next(punctuator("\\"), enumeration(formalParameterList, next(punctuator("->"),
    expected("function body", functionBody))))), ast_expression.FunctionExpression.create)));
var letBinding = Parser("Let Binding", nodea(enumeration(expected("pattern", pattern.topLevelPattern), punctuator("=",
    "=:", ":="), expected("let binding expression", expression)), (function(loc, pattern, rec, expr) {
    return ast_declaration.Binding.create(loc, pattern, expr, (rec.value === ":="));
})));
(letExpression = Parser("Let Expression", ((letBindings = expected("let bindings", sepBy1(punctuator(","), letBinding))), (
    letBody = expected("let body expression", expression)), nodea(next(keyword("let"), enumeration(eager(
    letBindings), next(keyword("in"), letBody))), ast_expression.LetExpression.create))));
(conditionalExpression = Parser("Conditional Expression", nodea(next(punctuator("?"), enumeration(expression, next(
        punctuator(":"), expected("conditional consequent expression", expression)), next(punctuator(
        ":"), expected("conditional alternate expression", expression)))), ast_expression.ConditionalExpression
    .create)));
var unaryOperatorExpression = Parser("Unary Operator Expression", bind(either(keyword("typeof"), punctuator("void", "~",
    "!", "++", "--")), (function(__o) {
    var loc = __o["loc"],
        value = __o["value"];
    return always(ast_expression.UnaryOperatorExpression.create(loc, value));
}))),
    binaryOperatorExpression = Parser("Binary Operator Expression", bind(either(keyword("instanceof"), punctuator("*",
        "/", "+", "-", "%", "<<", ">>", ">>>", "<", ">", "<=", ">=", "==", "!=", "===", "!==", "&", "^",
        "|", "||", "&&", "\\>", "|>")), (function(__o) {
        var loc = __o["loc"],
            value = __o["value"];
        return always(ast_expression.BinaryOperatorExpression.create(loc, value));
    }))),
    ternayOperatorExpression = Parser("Ternary Operator Expression", bind(punctuator("?"), (function(__o) {
        var loc = __o["loc"],
            value = __o["value"];
        return always(ast_expression.TernaryOperatorExpression.create(loc, value));
    })));
(operatorExpression = Parser("Operator Expression", choice(unaryOperatorExpression, binaryOperatorExpression,
    ternayOperatorExpression)));
(primaryExpression = Parser("Primary Expression", choice(letExpression, conditionalExpression, identifier, literal,
    arrayLiteral, objectLiteral, functionExpression, attempt(between(punctuator("("), punctuator(")"),
        operatorExpression)), between(punctuator("("), punctuator(")"), expected("expression", expression)))));
(args = Parser("Arguments", ((element = expected("argument", expression)), node(between(punctuator("("), punctuator(")"),
    eager(sepBy(punctuator(","), element))), (function(loc, x) {
    (x.loc = loc);
    return x;
})))));
(accessor = Parser("Accessor", node(next(punctuator("."), either(bind(identifier, (function(x) {
    return always([x, false]);
})), bind(between(punctuator("("), punctuator(")"), expected("accessor expression", expression)), (
    function(x) {
        return always([x, true]);
    })))), (function(loc, __o) {
    var x = __o[0],
        computed = __o[1];
    return ({
        "loc": loc,
        "property": x,
        "computed": computed
    });
}))));
(newExpression = Parser("New Expression", nodea(next(keyword("new"), enumeration(expected("member expression",
    memberExpression), expected("argument list", args))), ast_expression.NewExpression.create)));
var accessorReducer = (function(p, c) {
    return ast_expression.MemberExpression.create(SourceLocation.merge(p.loc, c.loc), p, c.property, c.computed);
});
(memberExpression = Parser("Member Expression", binds(enumeration(either(primaryExpression, newExpression), many(
    accessor)), (function(f, g) {
    return (function() {
        return f(g.apply(null, arguments));
    });
})(always, foldl.bind(null, accessorReducer)))));
var leftHandSideExpression = Parser("Call Expression", ((reducer = (function(p, c) {
    return (c.hasOwnProperty("property") ? ast_expression.MemberExpression.create(SourceLocation.merge(
        p.loc, c.loc), p, c.property, c.computed) : ast_expression.CallExpression.create(
        SourceLocation.merge(p.loc, c.loc), p, c));
})), binds(enumeration(memberExpression, many(either(args, accessor))), (function(f, g) {
    return (function() {
        return f(g.apply(null, arguments));
    });
})(always, foldl.bind(null, reducer)))));
(curryExpression = Parser("Curry Expression", ((reducer0 = (function(f, args) {
    return ast_expression.CurryExpression.create(SourceLocation.merge(f.loc, args.loc), f, [].concat(
        args));
})), binds(enumeration(leftHandSideExpression, many(next(punctuator("@"), expected("curry argument", either(
    args, leftHandSideExpression))))), (function(f, g) {
    return (function() {
        return f(g.apply(null, arguments));
    });
})(always, foldl.bind(null, reducer0))))));
(applicationExpression = Parser("Call Expression", chainl1(always((function(p, c) {
    return ast_expression.CallExpression.create(SourceLocation.merge(p.loc, c.loc), p, [c]);
})), curryExpression)));
(unaryOperator = Parser("Unary Operator", either(keyword("typeof", "void"), punctuator("++", "--", "~", "!"))));
(unaryExpression = Parser("Unary Expression", ((reducer1 = (function(argument, op) {
    return ast_expression.UnaryExpression.create(SourceLocation.merge(op.loc, argument.loc), op.value,
        argument);
})), binds(enumeration(many(unaryOperator), expected("unary argument", applicationExpression)), (function(
    ops, expression) {
    return always(foldr(reducer1, expression, ops));
})))));
var multiplicativeOperator = punctuator("*", "/", "%"),
    additiveOperator = punctuator("+", "-"),
    shiftOperator = punctuator("<<", ">>", ">>>"),
    relationalOperator = either(punctuator("<", ">", "<=", ">="), keyword("instanceof")),
    equalityOperator = punctuator("==", "!=", "===", "!=="),
    bitwiseANDOperator = punctuator("&"),
    bitwiseXOROperator = punctuator("^"),
    bitwiseOROperator = punctuator("|"),
    logicalANDOperator = punctuator("&&"),
    logicalOROperator = punctuator("||"),
    composeOperator = punctuator("\\>", "\\>>"),
    reverseComposeOperator = punctuator("<\\", "<<\\"),
    pipeOperator = punctuator("|>"),
    reversePipeOperator = punctuator("<|"),
    precedenceTable = [({
        "sep": multiplicativeOperator,
        "precedence": 1,
        "node": ast_expression.BinaryExpression
    }), ({
        "sep": additiveOperator,
        "precedence": 2,
        "node": ast_expression.BinaryExpression
    }), ({
        "sep": shiftOperator,
        "precedence": 3,
        "node": ast_expression.BinaryExpression
    }), ({
        "sep": relationalOperator,
        "precedence": 4,
        "node": ast_expression.BinaryExpression
    }), ({
        "sep": equalityOperator,
        "precedence": 5,
        "node": ast_expression.BinaryExpression
    }), ({
        "sep": bitwiseANDOperator,
        "precedence": 6,
        "node": ast_expression.BinaryExpression
    }), ({
        "sep": bitwiseXOROperator,
        "precedence": 7,
        "node": ast_expression.BinaryExpression
    }), ({
        "sep": bitwiseOROperator,
        "precedence": 8,
        "node": ast_expression.BinaryExpression
    }), ({
        "sep": composeOperator,
        "precedence": 9,
        "node": ast_expression.BinaryExpression
    }), ({
        "sep": reverseComposeOperator,
        "precedence": 9,
        "right": true,
        "node": ast_expression.BinaryExpression
    }), ({
        "sep": pipeOperator,
        "precedence": 10,
        "node": ast_expression.BinaryExpression
    }), ({
        "sep": reversePipeOperator,
        "precedence": 10,
        "right": true,
        "node": ast_expression.BinaryExpression
    }), ({
        "sep": logicalOROperator,
        "precedence": 11,
        "node": ast_expression.LogicalExpression
    }), ({
        "sep": logicalANDOperator,
        "precedence": 12,
        "node": ast_expression.LogicalExpression
    })];
(binaryExpression = Parser("Binary Expression", precedence(memo(unaryExpression), precedenceTable)));
(expression = binaryExpression);
(leftHandReferenceExpression = Parser("Left Hand Reference Expression", binds(enumeration(memo(identifier), memo(many(
    accessor))), (function(f, g) {
    return (function() {
        return f(g.apply(null, arguments));
    });
})(always, foldl.bind(null, accessorReducer)))));
(assignmentOperator = punctuator("="));
(assignmentExpression = Parser("Assignment Expression", nodea(append(attempt(enumeration(leftHandReferenceExpression,
    assignmentOperator)), enumeration(expected("expression", expression))), (function(loc, left, op, right) {
    return ast_expression.AssignmentExpression.create(loc, op.value, left, right);
}))));
var deleteOperator = keyword("delete"),
    deleteExpression = Parser("Delete Expression", nodea(enumeration(deleteOperator, expected("reference expression",
        leftHandReferenceExpression)), (function(loc, op, expression) {
        return ast_expression.UnaryExpression.create(loc, op.value, expression);
    })));
(topLevelExpression = choice(deleteExpression, assignmentExpression, expression));
(exports.arrayLiteral = arrayLiteral);
(exports.propertyName = propertyName);
(exports.propertyInitializer = propertyInitializer);
(exports.objectProperties = objectProperties);
(exports.objectLiteral = objectLiteral);
(exports.functionExpression = functionExpression);
(exports.operatorExpression = operatorExpression);
(exports.primaryExpression = primaryExpression);
(exports.curryExpression = curryExpression);
(exports.args = args);
(exports.applicationExpression = applicationExpression);
(exports.dotAccessor = dotAccessor);
(exports.bracketAccessor = bracketAccessor);
(exports.accessor = accessor);
(exports.memberExpression = memberExpression);
(exports.newExpression = newExpression);
(exports.unaryOperator = unaryOperator);
(exports.unaryExpression = unaryExpression);
(exports.binaryExpression = binaryExpression);
(exports.conditionalExpression = conditionalExpression);
(exports.letExpression = letExpression);
(exports.leftHandReferenceExpression = leftHandReferenceExpression);
(exports.assignmentOperator = assignmentOperator);
(exports.assignmentExpression = assignmentExpression);
(exports.expression = expression);
(exports.topLevelExpression = topLevelExpression);