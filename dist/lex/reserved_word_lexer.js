/*
 * THIS FILE IS AUTO GENERATED FROM 'lib/lex/reserved_word_lexer.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "bennu/parse", "bennu/text", "./boolean_lexer", "./null_lexer"], (function(require,
    exports, __o, __o0, __o1, __o2) {
    "use strict";
    var attempt = __o["attempt"],
        choice = __o["choice"],
        label = __o["label"],
        string = __o0["string"],
        trie = __o0["trie"],
        booleanLiteral = __o1["booleanLiteral"],
        nullLiteral = __o2["nullLiteral"],
        reservedWordList, reservedWord, futureReservedWord, breakKeyword, caseKeyword, catchKeyword,
            continueKeyword, debuggerKeyword, defaultKeyword, deleteKeyword, doKeyword, elseKeyword,
            finallyKeyword, forKeyword, functionKeyword, ifKeyword, inKeyword, instanceofKeyword, typeofKeyword,
            newKeyword, Keyword, returnKeyword, voidKeyword, switchKeyword, whileKeyword, thisKeyword,
            withKeyword, throwKeyword, tryKeyword, keyword, classKeyword, enumKeyword, extendsKeyword,
            superKeyword, constKeyword, exportKeyword, importKeyword, implementsKeyword, letKeyword,
            privateKeyword, publicKeyword, interfaceKeyword, packageKeyword, protectedKeyword, staticKeyword,
            yieldKeyword, keywordList = ["break", "case", "catch", "continue", "debugger", "default", "delete",
                "do", "else", "finally", "for", "function", "if", "in", "instanceof", "typeof", "new", "var",
                "return", "void", "switch", "while", "this", "with", "throw", "try", "export", "package",
                "class", "enum", "interface", "extends", "implements", "private", "public", "protected",
                "super", "const", "yield", "import", "let", "static", "_"
        ];
    (breakKeyword = string("break"));
    (caseKeyword = string("case"));
    (catchKeyword = string("catch"));
    (continueKeyword = string("continue"));
    (debuggerKeyword = string("debugger"));
    (defaultKeyword = string("default"));
    (deleteKeyword = string("delete"));
    (doKeyword = string("do"));
    (elseKeyword = string("else"));
    (finallyKeyword = string("finally"));
    (forKeyword = string("for"));
    (functionKeyword = string("function"));
    (ifKeyword = string("if"));
    (inKeyword = string("in"));
    (instanceofKeyword = string("instanceof"));
    (typeofKeyword = string("typeof"));
    (newKeyword = string("new"));
    (Keyword = string(""));
    (returnKeyword = string("return"));
    (voidKeyword = string("void"));
    (switchKeyword = string("switch"));
    (whileKeyword = string("while"));
    (thisKeyword = string("this"));
    (withKeyword = string("with"));
    (throwKeyword = string("throw"));
    (tryKeyword = string("try"));
    (keyword = choice(attempt(breakKeyword), attempt(caseKeyword), attempt(catchKeyword), attempt(
            continueKeyword), attempt(debuggerKeyword), attempt(defaultKeyword), attempt(deleteKeyword),
        attempt(doKeyword), attempt(elseKeyword), attempt(finallyKeyword), attempt(forKeyword), attempt(
            functionKeyword), attempt(ifKeyword), attempt(inKeyword), attempt(instanceofKeyword), attempt(
            typeofKeyword), attempt(newKeyword), attempt(Keyword), attempt(returnKeyword), attempt(
            voidKeyword), attempt(switchKeyword), attempt(whileKeyword), attempt(thisKeyword), attempt(
            withKeyword), attempt(throwKeyword), attempt(tryKeyword)));
    (classKeyword = string("class"));
    (enumKeyword = string("enum"));
    (extendsKeyword = string("extends"));
    (superKeyword = string("super"));
    (constKeyword = string("const"));
    (exportKeyword = string("export"));
    (importKeyword = string("import"));
    (implementsKeyword = string("implements"));
    (letKeyword = string("let"));
    (privateKeyword = string("private"));
    (publicKeyword = string("public"));
    (interfaceKeyword = string("interface"));
    (packageKeyword = string("package"));
    (protectedKeyword = string("protected"));
    (staticKeyword = string("static"));
    (yieldKeyword = string("yield"));
    (futureReservedWord = choice(attempt(classKeyword), attempt(enumKeyword), attempt(extendsKeyword), attempt(
            superKeyword), attempt(constKeyword), attempt(exportKeyword), attempt(importKeyword), attempt(
            implementsKeyword), attempt(letKeyword), attempt(privateKeyword), attempt(publicKeyword),
        attempt(interfaceKeyword), attempt(packageKeyword), attempt(protectedKeyword), attempt(
            staticKeyword), yieldKeyword));
    (reservedWord = label("ReservedWordLexer", choice(trie(keywordList), nullLiteral, booleanLiteral)));
    (reservedWordList = keywordList.concat("null", "true", "false"));
    (exports["reservedWordList"] = reservedWordList);
    (exports["reservedWord"] = reservedWord);
    (exports["futureReservedWord"] = futureReservedWord);
    (exports["breakKeyword"] = breakKeyword);
    (exports["caseKeyword"] = caseKeyword);
    (exports["catchKeyword"] = catchKeyword);
    (exports["continueKeyword"] = continueKeyword);
    (exports["debuggerKeyword"] = debuggerKeyword);
    (exports["defaultKeyword"] = defaultKeyword);
    (exports["deleteKeyword"] = deleteKeyword);
    (exports["doKeyword"] = doKeyword);
    (exports["elseKeyword"] = elseKeyword);
    (exports["finallyKeyword"] = finallyKeyword);
    (exports["forKeyword"] = forKeyword);
    (exports["functionKeyword"] = functionKeyword);
    (exports["ifKeyword"] = ifKeyword);
    (exports["inKeyword"] = inKeyword);
    (exports["instanceofKeyword"] = instanceofKeyword);
    (exports["typeofKeyword"] = typeofKeyword);
    (exports["newKeyword"] = newKeyword);
    (exports["Keyword"] = Keyword);
    (exports["returnKeyword"] = returnKeyword);
    (exports["voidKeyword"] = voidKeyword);
    (exports["switchKeyword"] = switchKeyword);
    (exports["whileKeyword"] = whileKeyword);
    (exports["thisKeyword"] = thisKeyword);
    (exports["withKeyword"] = withKeyword);
    (exports["throwKeyword"] = throwKeyword);
    (exports["tryKeyword"] = tryKeyword);
    (exports["keyword"] = keyword);
    (exports["classKeyword"] = classKeyword);
    (exports["enumKeyword"] = enumKeyword);
    (exports["extendsKeyword"] = extendsKeyword);
    (exports["superKeyword"] = superKeyword);
    (exports["constKeyword"] = constKeyword);
    (exports["exportKeyword"] = exportKeyword);
    (exports["importKeyword"] = importKeyword);
    (exports["implementsKeyword"] = implementsKeyword);
    (exports["letKeyword"] = letKeyword);
    (exports["privateKeyword"] = privateKeyword);
    (exports["publicKeyword"] = publicKeyword);
    (exports["interfaceKeyword"] = interfaceKeyword);
    (exports["packageKeyword"] = packageKeyword);
    (exports["protectedKeyword"] = protectedKeyword);
    (exports["staticKeyword"] = staticKeyword);
    (exports["yieldKeyword"] = yieldKeyword);
}));