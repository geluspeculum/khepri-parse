define(['bennu/parse',
        'khepri/lex/lexer',
        'khepri/parse/parser',
        'khepri/parse/expression_parser'],
function(parse,
        lexer,
        parser,
        expression){
    
    var testParser = function(stream) {
        var result = parser.parseStream(stream);
        return result.body[0].expression;
    };
    
    return {
        'module': "Object Literal Tests",
        'tests': [
            ["Empty Object Literal",
            exports. = function(test) {
                var result = testParser(lexer.lex("({});"));
                test.equal(result.properties.length, 0);
            };
            ["Init Values Object Literal",
            exports. = function(test) {
                var result = testParser(lexer.lex("({ 'a': 0 , 'b': 1, '9': 2});"));
                test.equal(result.properties.length, 3);
                test.equal(result.properties[0].type, 'ObjectValue');
                test.equal(result.properties[0].key.value, 'a');
                test.equal(result.properties[0].value.value, 0);
                
                test.equal(result.properties[1].type, 'ObjectValue');
                test.equal(result.properties[1].key.value, 'b');
                test.equal(result.properties[1].value.value, 1);
                
                test.equal(result.properties[2].type, 'ObjectValue');
                test.equal(result.properties[2].key.value, '9');
                test.equal(result.properties[2].value.value, 2);
            }]
        ],
    };
});
