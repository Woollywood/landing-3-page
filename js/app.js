(() => {
    var __webpack_modules__ = {
        755: function(module, exports) {
            var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            /*!
 * jQuery JavaScript Library v3.7.0
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-05-11T18:29Z
 */            (function(global, factory) {
                "use strict";
                if (true && typeof module.exports === "object") module.exports = global.document ? factory(global, true) : function(w) {
                    if (!w.document) throw new Error("jQuery requires a window with a document");
                    return factory(w);
                }; else factory(global);
            })(typeof window !== "undefined" ? window : this, (function(window, noGlobal) {
                "use strict";
                var arr = [];
                var getProto = Object.getPrototypeOf;
                var slice = arr.slice;
                var flat = arr.flat ? function(array) {
                    return arr.flat.call(array);
                } : function(array) {
                    return arr.concat.apply([], array);
                };
                var push = arr.push;
                var indexOf = arr.indexOf;
                var class2type = {};
                var toString = class2type.toString;
                var hasOwn = class2type.hasOwnProperty;
                var fnToString = hasOwn.toString;
                var ObjectFunctionString = fnToString.call(Object);
                var support = {};
                var isFunction = function isFunction(obj) {
                    return typeof obj === "function" && typeof obj.nodeType !== "number" && typeof obj.item !== "function";
                };
                var isWindow = function isWindow(obj) {
                    return obj != null && obj === obj.window;
                };
                var document = window.document;
                var preservedScriptAttributes = {
                    type: true,
                    src: true,
                    nonce: true,
                    noModule: true
                };
                function DOMEval(code, node, doc) {
                    doc = doc || document;
                    var i, val, script = doc.createElement("script");
                    script.text = code;
                    if (node) for (i in preservedScriptAttributes) {
                        val = node[i] || node.getAttribute && node.getAttribute(i);
                        if (val) script.setAttribute(i, val);
                    }
                    doc.head.appendChild(script).parentNode.removeChild(script);
                }
                function toType(obj) {
                    if (obj == null) return obj + "";
                    return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
                }
                var version = "3.7.0", rhtmlSuffix = /HTML$/i, jQuery = function(selector, context) {
                    return new jQuery.fn.init(selector, context);
                };
                jQuery.fn = jQuery.prototype = {
                    jquery: version,
                    constructor: jQuery,
                    length: 0,
                    toArray: function() {
                        return slice.call(this);
                    },
                    get: function(num) {
                        if (num == null) return slice.call(this);
                        return num < 0 ? this[num + this.length] : this[num];
                    },
                    pushStack: function(elems) {
                        var ret = jQuery.merge(this.constructor(), elems);
                        ret.prevObject = this;
                        return ret;
                    },
                    each: function(callback) {
                        return jQuery.each(this, callback);
                    },
                    map: function(callback) {
                        return this.pushStack(jQuery.map(this, (function(elem, i) {
                            return callback.call(elem, i, elem);
                        })));
                    },
                    slice: function() {
                        return this.pushStack(slice.apply(this, arguments));
                    },
                    first: function() {
                        return this.eq(0);
                    },
                    last: function() {
                        return this.eq(-1);
                    },
                    even: function() {
                        return this.pushStack(jQuery.grep(this, (function(_elem, i) {
                            return (i + 1) % 2;
                        })));
                    },
                    odd: function() {
                        return this.pushStack(jQuery.grep(this, (function(_elem, i) {
                            return i % 2;
                        })));
                    },
                    eq: function(i) {
                        var len = this.length, j = +i + (i < 0 ? len : 0);
                        return this.pushStack(j >= 0 && j < len ? [ this[j] ] : []);
                    },
                    end: function() {
                        return this.prevObject || this.constructor();
                    },
                    push,
                    sort: arr.sort,
                    splice: arr.splice
                };
                jQuery.extend = jQuery.fn.extend = function() {
                    var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
                    if (typeof target === "boolean") {
                        deep = target;
                        target = arguments[i] || {};
                        i++;
                    }
                    if (typeof target !== "object" && !isFunction(target)) target = {};
                    if (i === length) {
                        target = this;
                        i--;
                    }
                    for (;i < length; i++) if ((options = arguments[i]) != null) for (name in options) {
                        copy = options[name];
                        if (name === "__proto__" || target === copy) continue;
                        if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                            src = target[name];
                            if (copyIsArray && !Array.isArray(src)) clone = []; else if (!copyIsArray && !jQuery.isPlainObject(src)) clone = {}; else clone = src;
                            copyIsArray = false;
                            target[name] = jQuery.extend(deep, clone, copy);
                        } else if (copy !== void 0) target[name] = copy;
                    }
                    return target;
                };
                jQuery.extend({
                    expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
                    isReady: true,
                    error: function(msg) {
                        throw new Error(msg);
                    },
                    noop: function() {},
                    isPlainObject: function(obj) {
                        var proto, Ctor;
                        if (!obj || toString.call(obj) !== "[object Object]") return false;
                        proto = getProto(obj);
                        if (!proto) return true;
                        Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
                        return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
                    },
                    isEmptyObject: function(obj) {
                        var name;
                        for (name in obj) return false;
                        return true;
                    },
                    globalEval: function(code, options, doc) {
                        DOMEval(code, {
                            nonce: options && options.nonce
                        }, doc);
                    },
                    each: function(obj, callback) {
                        var length, i = 0;
                        if (isArrayLike(obj)) {
                            length = obj.length;
                            for (;i < length; i++) if (callback.call(obj[i], i, obj[i]) === false) break;
                        } else for (i in obj) if (callback.call(obj[i], i, obj[i]) === false) break;
                        return obj;
                    },
                    text: function(elem) {
                        var node, ret = "", i = 0, nodeType = elem.nodeType;
                        if (!nodeType) while (node = elem[i++]) ret += jQuery.text(node); else if (nodeType === 1 || nodeType === 9 || nodeType === 11) return elem.textContent; else if (nodeType === 3 || nodeType === 4) return elem.nodeValue;
                        return ret;
                    },
                    makeArray: function(arr, results) {
                        var ret = results || [];
                        if (arr != null) if (isArrayLike(Object(arr))) jQuery.merge(ret, typeof arr === "string" ? [ arr ] : arr); else push.call(ret, arr);
                        return ret;
                    },
                    inArray: function(elem, arr, i) {
                        return arr == null ? -1 : indexOf.call(arr, elem, i);
                    },
                    isXMLDoc: function(elem) {
                        var namespace = elem && elem.namespaceURI, docElem = elem && (elem.ownerDocument || elem).documentElement;
                        return !rhtmlSuffix.test(namespace || docElem && docElem.nodeName || "HTML");
                    },
                    merge: function(first, second) {
                        var len = +second.length, j = 0, i = first.length;
                        for (;j < len; j++) first[i++] = second[j];
                        first.length = i;
                        return first;
                    },
                    grep: function(elems, callback, invert) {
                        var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
                        for (;i < length; i++) {
                            callbackInverse = !callback(elems[i], i);
                            if (callbackInverse !== callbackExpect) matches.push(elems[i]);
                        }
                        return matches;
                    },
                    map: function(elems, callback, arg) {
                        var length, value, i = 0, ret = [];
                        if (isArrayLike(elems)) {
                            length = elems.length;
                            for (;i < length; i++) {
                                value = callback(elems[i], i, arg);
                                if (value != null) ret.push(value);
                            }
                        } else for (i in elems) {
                            value = callback(elems[i], i, arg);
                            if (value != null) ret.push(value);
                        }
                        return flat(ret);
                    },
                    guid: 1,
                    support
                });
                if (typeof Symbol === "function") jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
                jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(_i, name) {
                    class2type["[object " + name + "]"] = name.toLowerCase();
                }));
                function isArrayLike(obj) {
                    var length = !!obj && "length" in obj && obj.length, type = toType(obj);
                    if (isFunction(obj) || isWindow(obj)) return false;
                    return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
                }
                function nodeName(elem, name) {
                    return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
                }
                var pop = arr.pop;
                var sort = arr.sort;
                var splice = arr.splice;
                var whitespace = "[\\x20\\t\\r\\n\\f]";
                var rtrimCSS = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g");
                jQuery.contains = function(a, b) {
                    var bup = b && b.parentNode;
                    return a === bup || !!(bup && bup.nodeType === 1 && (a.contains ? a.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
                };
                var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
                function fcssescape(ch, asCodePoint) {
                    if (asCodePoint) {
                        if (ch === "\0") return "�";
                        return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
                    }
                    return "\\" + ch;
                }
                jQuery.escapeSelector = function(sel) {
                    return (sel + "").replace(rcssescape, fcssescape);
                };
                var preferredDoc = document, pushNative = push;
                (function() {
                    var i, Expr, outermostContext, sortInput, hasDuplicate, document, documentElement, documentIsHTML, rbuggyQSA, matches, push = pushNative, expando = jQuery.expando, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a, b) {
                        if (a === b) hasDuplicate = true;
                        return 0;
                    }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|" + "loop|multiple|open|readonly|required|scoped", identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + ".*" + ")\\)|)", rwhitespace = new RegExp(whitespace + "+", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rleadingCombinator = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rdescend = new RegExp(whitespace + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
                        ID: new RegExp("^#(" + identifier + ")"),
                        CLASS: new RegExp("^\\.(" + identifier + ")"),
                        TAG: new RegExp("^(" + identifier + "|[*])"),
                        ATTR: new RegExp("^" + attributes),
                        PSEUDO: new RegExp("^" + pseudos),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + booleans + ")$", "i"),
                        needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
                    }, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
                        var high = "0x" + escape.slice(1) - 65536;
                        if (nonHex) return nonHex;
                        return high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
                    }, unloadHandler = function() {
                        setDocument();
                    }, inDisabledFieldset = addCombinator((function(elem) {
                        return elem.disabled === true && nodeName(elem, "fieldset");
                    }), {
                        dir: "parentNode",
                        next: "legend"
                    });
                    function safeActiveElement() {
                        try {
                            return document.activeElement;
                        } catch (err) {}
                    }
                    try {
                        push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
                        arr[preferredDoc.childNodes.length].nodeType;
                    } catch (e) {
                        push = {
                            apply: function(target, els) {
                                pushNative.apply(target, slice.call(els));
                            },
                            call: function(target) {
                                pushNative.apply(target, slice.call(arguments, 1));
                            }
                        };
                    }
                    function find(selector, context, results, seed) {
                        var m, i, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
                        results = results || [];
                        if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) return results;
                        if (!seed) {
                            setDocument(context);
                            context = context || document;
                            if (documentIsHTML) {
                                if (nodeType !== 11 && (match = rquickExpr.exec(selector))) if (m = match[1]) {
                                    if (nodeType === 9) if (elem = context.getElementById(m)) {
                                        if (elem.id === m) {
                                            push.call(results, elem);
                                            return results;
                                        }
                                    } else return results; else if (newContext && (elem = newContext.getElementById(m)) && find.contains(context, elem) && elem.id === m) {
                                        push.call(results, elem);
                                        return results;
                                    }
                                } else if (match[2]) {
                                    push.apply(results, context.getElementsByTagName(selector));
                                    return results;
                                } else if ((m = match[3]) && context.getElementsByClassName) {
                                    push.apply(results, context.getElementsByClassName(m));
                                    return results;
                                }
                                if (!nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                                    newSelector = selector;
                                    newContext = context;
                                    if (nodeType === 1 && (rdescend.test(selector) || rleadingCombinator.test(selector))) {
                                        newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                                        if (newContext != context || !support.scope) if (nid = context.getAttribute("id")) nid = jQuery.escapeSelector(nid); else context.setAttribute("id", nid = expando);
                                        groups = tokenize(selector);
                                        i = groups.length;
                                        while (i--) groups[i] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i]);
                                        newSelector = groups.join(",");
                                    }
                                    try {
                                        push.apply(results, newContext.querySelectorAll(newSelector));
                                        return results;
                                    } catch (qsaError) {
                                        nonnativeSelectorCache(selector, true);
                                    } finally {
                                        if (nid === expando) context.removeAttribute("id");
                                    }
                                }
                            }
                        }
                        return select(selector.replace(rtrimCSS, "$1"), context, results, seed);
                    }
                    function createCache() {
                        var keys = [];
                        function cache(key, value) {
                            if (keys.push(key + " ") > Expr.cacheLength) delete cache[keys.shift()];
                            return cache[key + " "] = value;
                        }
                        return cache;
                    }
                    function markFunction(fn) {
                        fn[expando] = true;
                        return fn;
                    }
                    function assert(fn) {
                        var el = document.createElement("fieldset");
                        try {
                            return !!fn(el);
                        } catch (e) {
                            return false;
                        } finally {
                            if (el.parentNode) el.parentNode.removeChild(el);
                            el = null;
                        }
                    }
                    function createInputPseudo(type) {
                        return function(elem) {
                            return nodeName(elem, "input") && elem.type === type;
                        };
                    }
                    function createButtonPseudo(type) {
                        return function(elem) {
                            return (nodeName(elem, "input") || nodeName(elem, "button")) && elem.type === type;
                        };
                    }
                    function createDisabledPseudo(disabled) {
                        return function(elem) {
                            if ("form" in elem) {
                                if (elem.parentNode && elem.disabled === false) {
                                    if ("label" in elem) if ("label" in elem.parentNode) return elem.parentNode.disabled === disabled; else return elem.disabled === disabled;
                                    return elem.isDisabled === disabled || elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
                                }
                                return elem.disabled === disabled;
                            } else if ("label" in elem) return elem.disabled === disabled;
                            return false;
                        };
                    }
                    function createPositionalPseudo(fn) {
                        return markFunction((function(argument) {
                            argument = +argument;
                            return markFunction((function(seed, matches) {
                                var j, matchIndexes = fn([], seed.length, argument), i = matchIndexes.length;
                                while (i--) if (seed[j = matchIndexes[i]]) seed[j] = !(matches[j] = seed[j]);
                            }));
                        }));
                    }
                    function testContext(context) {
                        return context && typeof context.getElementsByTagName !== "undefined" && context;
                    }
                    function setDocument(node) {
                        var subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
                        if (doc == document || doc.nodeType !== 9 || !doc.documentElement) return document;
                        document = doc;
                        documentElement = document.documentElement;
                        documentIsHTML = !jQuery.isXMLDoc(document);
                        matches = documentElement.matches || documentElement.webkitMatchesSelector || documentElement.msMatchesSelector;
                        if (preferredDoc != document && (subWindow = document.defaultView) && subWindow.top !== subWindow) subWindow.addEventListener("unload", unloadHandler);
                        support.getById = assert((function(el) {
                            documentElement.appendChild(el).id = jQuery.expando;
                            return !document.getElementsByName || !document.getElementsByName(jQuery.expando).length;
                        }));
                        support.disconnectedMatch = assert((function(el) {
                            return matches.call(el, "*");
                        }));
                        support.scope = assert((function() {
                            return document.querySelectorAll(":scope");
                        }));
                        support.cssHas = assert((function() {
                            try {
                                document.querySelector(":has(*,:jqfake)");
                                return false;
                            } catch (e) {
                                return true;
                            }
                        }));
                        if (support.getById) {
                            Expr.filter.ID = function(id) {
                                var attrId = id.replace(runescape, funescape);
                                return function(elem) {
                                    return elem.getAttribute("id") === attrId;
                                };
                            };
                            Expr.find.ID = function(id, context) {
                                if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                                    var elem = context.getElementById(id);
                                    return elem ? [ elem ] : [];
                                }
                            };
                        } else {
                            Expr.filter.ID = function(id) {
                                var attrId = id.replace(runescape, funescape);
                                return function(elem) {
                                    var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                                    return node && node.value === attrId;
                                };
                            };
                            Expr.find.ID = function(id, context) {
                                if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                                    var node, i, elems, elem = context.getElementById(id);
                                    if (elem) {
                                        node = elem.getAttributeNode("id");
                                        if (node && node.value === id) return [ elem ];
                                        elems = context.getElementsByName(id);
                                        i = 0;
                                        while (elem = elems[i++]) {
                                            node = elem.getAttributeNode("id");
                                            if (node && node.value === id) return [ elem ];
                                        }
                                    }
                                    return [];
                                }
                            };
                        }
                        Expr.find.TAG = function(tag, context) {
                            if (typeof context.getElementsByTagName !== "undefined") return context.getElementsByTagName(tag); else return context.querySelectorAll(tag);
                        };
                        Expr.find.CLASS = function(className, context) {
                            if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) return context.getElementsByClassName(className);
                        };
                        rbuggyQSA = [];
                        assert((function(el) {
                            var input;
                            documentElement.appendChild(el).innerHTML = "<a id='" + expando + "' href='' disabled='disabled'></a>" + "<select id='" + expando + "-\r\\' disabled='disabled'>" + "<option selected=''></option></select>";
                            if (!el.querySelectorAll("[selected]").length) rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
                            if (!el.querySelectorAll("[id~=" + expando + "-]").length) rbuggyQSA.push("~=");
                            if (!el.querySelectorAll("a#" + expando + "+*").length) rbuggyQSA.push(".#.+[+~]");
                            if (!el.querySelectorAll(":checked").length) rbuggyQSA.push(":checked");
                            input = document.createElement("input");
                            input.setAttribute("type", "hidden");
                            el.appendChild(input).setAttribute("name", "D");
                            documentElement.appendChild(el).disabled = true;
                            if (el.querySelectorAll(":disabled").length !== 2) rbuggyQSA.push(":enabled", ":disabled");
                            input = document.createElement("input");
                            input.setAttribute("name", "");
                            el.appendChild(input);
                            if (!el.querySelectorAll("[name='']").length) rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + "*(?:''|\"\")");
                        }));
                        if (!support.cssHas) rbuggyQSA.push(":has");
                        rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
                        sortOrder = function(a, b) {
                            if (a === b) {
                                hasDuplicate = true;
                                return 0;
                            }
                            var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                            if (compare) return compare;
                            compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
                            if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
                                if (a === document || a.ownerDocument == preferredDoc && find.contains(preferredDoc, a)) return -1;
                                if (b === document || b.ownerDocument == preferredDoc && find.contains(preferredDoc, b)) return 1;
                                return sortInput ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b) : 0;
                            }
                            return compare & 4 ? -1 : 1;
                        };
                        return document;
                    }
                    find.matches = function(expr, elements) {
                        return find(expr, null, null, elements);
                    };
                    find.matchesSelector = function(elem, expr) {
                        setDocument(elem);
                        if (documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyQSA || !rbuggyQSA.test(expr))) try {
                            var ret = matches.call(elem, expr);
                            if (ret || support.disconnectedMatch || elem.document && elem.document.nodeType !== 11) return ret;
                        } catch (e) {
                            nonnativeSelectorCache(expr, true);
                        }
                        return find(expr, document, null, [ elem ]).length > 0;
                    };
                    find.contains = function(context, elem) {
                        if ((context.ownerDocument || context) != document) setDocument(context);
                        return jQuery.contains(context, elem);
                    };
                    find.attr = function(elem, name) {
                        if ((elem.ownerDocument || elem) != document) setDocument(elem);
                        var fn = Expr.attrHandle[name.toLowerCase()], val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : void 0;
                        if (val !== void 0) return val;
                        return elem.getAttribute(name);
                    };
                    find.error = function(msg) {
                        throw new Error("Syntax error, unrecognized expression: " + msg);
                    };
                    jQuery.uniqueSort = function(results) {
                        var elem, duplicates = [], j = 0, i = 0;
                        hasDuplicate = !support.sortStable;
                        sortInput = !support.sortStable && slice.call(results, 0);
                        sort.call(results, sortOrder);
                        if (hasDuplicate) {
                            while (elem = results[i++]) if (elem === results[i]) j = duplicates.push(i);
                            while (j--) splice.call(results, duplicates[j], 1);
                        }
                        sortInput = null;
                        return results;
                    };
                    jQuery.fn.uniqueSort = function() {
                        return this.pushStack(jQuery.uniqueSort(slice.apply(this)));
                    };
                    Expr = jQuery.expr = {
                        cacheLength: 50,
                        createPseudo: markFunction,
                        match: matchExpr,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: true
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: true
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function(match) {
                                match[1] = match[1].replace(runescape, funescape);
                                match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
                                if (match[2] === "~=") match[3] = " " + match[3] + " ";
                                return match.slice(0, 4);
                            },
                            CHILD: function(match) {
                                match[1] = match[1].toLowerCase();
                                if (match[1].slice(0, 3) === "nth") {
                                    if (!match[3]) find.error(match[0]);
                                    match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                                    match[5] = +(match[7] + match[8] || match[3] === "odd");
                                } else if (match[3]) find.error(match[0]);
                                return match;
                            },
                            PSEUDO: function(match) {
                                var excess, unquoted = !match[6] && match[2];
                                if (matchExpr.CHILD.test(match[0])) return null;
                                if (match[3]) match[2] = match[4] || match[5] || ""; else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                                    match[0] = match[0].slice(0, excess);
                                    match[2] = unquoted.slice(0, excess);
                                }
                                return match.slice(0, 3);
                            }
                        },
                        filter: {
                            TAG: function(nodeNameSelector) {
                                var expectedNodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                                return nodeNameSelector === "*" ? function() {
                                    return true;
                                } : function(elem) {
                                    return nodeName(elem, expectedNodeName);
                                };
                            },
                            CLASS: function(className) {
                                var pattern = classCache[className + " "];
                                return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, (function(elem) {
                                    return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
                                }));
                            },
                            ATTR: function(name, operator, check) {
                                return function(elem) {
                                    var result = find.attr(elem, name);
                                    if (result == null) return operator === "!=";
                                    if (!operator) return true;
                                    result += "";
                                    if (operator === "=") return result === check;
                                    if (operator === "!=") return result !== check;
                                    if (operator === "^=") return check && result.indexOf(check) === 0;
                                    if (operator === "*=") return check && result.indexOf(check) > -1;
                                    if (operator === "$=") return check && result.slice(-check.length) === check;
                                    if (operator === "~=") return (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1;
                                    if (operator === "|=") return result === check || result.slice(0, check.length + 1) === check + "-";
                                    return false;
                                };
                            },
                            CHILD: function(type, what, _argument, first, last) {
                                var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
                                return first === 1 && last === 0 ? function(elem) {
                                    return !!elem.parentNode;
                                } : function(elem, _context, xml) {
                                    var cache, outerCache, node, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                                    if (parent) {
                                        if (simple) {
                                            while (dir) {
                                                node = elem;
                                                while (node = node[dir]) if (ofType ? nodeName(node, name) : node.nodeType === 1) return false;
                                                start = dir = type === "only" && !start && "nextSibling";
                                            }
                                            return true;
                                        }
                                        start = [ forward ? parent.firstChild : parent.lastChild ];
                                        if (forward && useCache) {
                                            outerCache = parent[expando] || (parent[expando] = {});
                                            cache = outerCache[type] || [];
                                            nodeIndex = cache[0] === dirruns && cache[1];
                                            diff = nodeIndex && cache[2];
                                            node = nodeIndex && parent.childNodes[nodeIndex];
                                            while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) if (node.nodeType === 1 && ++diff && node === elem) {
                                                outerCache[type] = [ dirruns, nodeIndex, diff ];
                                                break;
                                            }
                                        } else {
                                            if (useCache) {
                                                outerCache = elem[expando] || (elem[expando] = {});
                                                cache = outerCache[type] || [];
                                                nodeIndex = cache[0] === dirruns && cache[1];
                                                diff = nodeIndex;
                                            }
                                            if (diff === false) while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) if ((ofType ? nodeName(node, name) : node.nodeType === 1) && ++diff) {
                                                if (useCache) {
                                                    outerCache = node[expando] || (node[expando] = {});
                                                    outerCache[type] = [ dirruns, diff ];
                                                }
                                                if (node === elem) break;
                                            }
                                        }
                                        diff -= last;
                                        return diff === first || diff % first === 0 && diff / first >= 0;
                                    }
                                };
                            },
                            PSEUDO: function(pseudo, argument) {
                                var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || find.error("unsupported pseudo: " + pseudo);
                                if (fn[expando]) return fn(argument);
                                if (fn.length > 1) {
                                    args = [ pseudo, pseudo, "", argument ];
                                    return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction((function(seed, matches) {
                                        var idx, matched = fn(seed, argument), i = matched.length;
                                        while (i--) {
                                            idx = indexOf.call(seed, matched[i]);
                                            seed[idx] = !(matches[idx] = matched[i]);
                                        }
                                    })) : function(elem) {
                                        return fn(elem, 0, args);
                                    };
                                }
                                return fn;
                            }
                        },
                        pseudos: {
                            not: markFunction((function(selector) {
                                var input = [], results = [], matcher = compile(selector.replace(rtrimCSS, "$1"));
                                return matcher[expando] ? markFunction((function(seed, matches, _context, xml) {
                                    var elem, unmatched = matcher(seed, null, xml, []), i = seed.length;
                                    while (i--) if (elem = unmatched[i]) seed[i] = !(matches[i] = elem);
                                })) : function(elem, _context, xml) {
                                    input[0] = elem;
                                    matcher(input, null, xml, results);
                                    input[0] = null;
                                    return !results.pop();
                                };
                            })),
                            has: markFunction((function(selector) {
                                return function(elem) {
                                    return find(selector, elem).length > 0;
                                };
                            })),
                            contains: markFunction((function(text) {
                                text = text.replace(runescape, funescape);
                                return function(elem) {
                                    return (elem.textContent || jQuery.text(elem)).indexOf(text) > -1;
                                };
                            })),
                            lang: markFunction((function(lang) {
                                if (!ridentifier.test(lang || "")) find.error("unsupported lang: " + lang);
                                lang = lang.replace(runescape, funescape).toLowerCase();
                                return function(elem) {
                                    var elemLang;
                                    do {
                                        if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                                            elemLang = elemLang.toLowerCase();
                                            return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                                        }
                                    } while ((elem = elem.parentNode) && elem.nodeType === 1);
                                    return false;
                                };
                            })),
                            target: function(elem) {
                                var hash = window.location && window.location.hash;
                                return hash && hash.slice(1) === elem.id;
                            },
                            root: function(elem) {
                                return elem === documentElement;
                            },
                            focus: function(elem) {
                                return elem === safeActiveElement() && document.hasFocus() && !!(elem.type || elem.href || ~elem.tabIndex);
                            },
                            enabled: createDisabledPseudo(false),
                            disabled: createDisabledPseudo(true),
                            checked: function(elem) {
                                return nodeName(elem, "input") && !!elem.checked || nodeName(elem, "option") && !!elem.selected;
                            },
                            selected: function(elem) {
                                if (elem.parentNode) elem.parentNode.selectedIndex;
                                return elem.selected === true;
                            },
                            empty: function(elem) {
                                for (elem = elem.firstChild; elem; elem = elem.nextSibling) if (elem.nodeType < 6) return false;
                                return true;
                            },
                            parent: function(elem) {
                                return !Expr.pseudos.empty(elem);
                            },
                            header: function(elem) {
                                return rheader.test(elem.nodeName);
                            },
                            input: function(elem) {
                                return rinputs.test(elem.nodeName);
                            },
                            button: function(elem) {
                                return nodeName(elem, "input") && elem.type === "button" || nodeName(elem, "button");
                            },
                            text: function(elem) {
                                var attr;
                                return nodeName(elem, "input") && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
                            },
                            first: createPositionalPseudo((function() {
                                return [ 0 ];
                            })),
                            last: createPositionalPseudo((function(_matchIndexes, length) {
                                return [ length - 1 ];
                            })),
                            eq: createPositionalPseudo((function(_matchIndexes, length, argument) {
                                return [ argument < 0 ? argument + length : argument ];
                            })),
                            even: createPositionalPseudo((function(matchIndexes, length) {
                                var i = 0;
                                for (;i < length; i += 2) matchIndexes.push(i);
                                return matchIndexes;
                            })),
                            odd: createPositionalPseudo((function(matchIndexes, length) {
                                var i = 1;
                                for (;i < length; i += 2) matchIndexes.push(i);
                                return matchIndexes;
                            })),
                            lt: createPositionalPseudo((function(matchIndexes, length, argument) {
                                var i;
                                if (argument < 0) i = argument + length; else if (argument > length) i = length; else i = argument;
                                for (;--i >= 0; ) matchIndexes.push(i);
                                return matchIndexes;
                            })),
                            gt: createPositionalPseudo((function(matchIndexes, length, argument) {
                                var i = argument < 0 ? argument + length : argument;
                                for (;++i < length; ) matchIndexes.push(i);
                                return matchIndexes;
                            }))
                        }
                    };
                    Expr.pseudos.nth = Expr.pseudos.eq;
                    for (i in {
                        radio: true,
                        checkbox: true,
                        file: true,
                        password: true,
                        image: true
                    }) Expr.pseudos[i] = createInputPseudo(i);
                    for (i in {
                        submit: true,
                        reset: true
                    }) Expr.pseudos[i] = createButtonPseudo(i);
                    function setFilters() {}
                    setFilters.prototype = Expr.filters = Expr.pseudos;
                    Expr.setFilters = new setFilters;
                    function tokenize(selector, parseOnly) {
                        var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
                        if (cached) return parseOnly ? 0 : cached.slice(0);
                        soFar = selector;
                        groups = [];
                        preFilters = Expr.preFilter;
                        while (soFar) {
                            if (!matched || (match = rcomma.exec(soFar))) {
                                if (match) soFar = soFar.slice(match[0].length) || soFar;
                                groups.push(tokens = []);
                            }
                            matched = false;
                            if (match = rleadingCombinator.exec(soFar)) {
                                matched = match.shift();
                                tokens.push({
                                    value: matched,
                                    type: match[0].replace(rtrimCSS, " ")
                                });
                                soFar = soFar.slice(matched.length);
                            }
                            for (type in Expr.filter) if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                                matched = match.shift();
                                tokens.push({
                                    value: matched,
                                    type,
                                    matches: match
                                });
                                soFar = soFar.slice(matched.length);
                            }
                            if (!matched) break;
                        }
                        if (parseOnly) return soFar.length;
                        return soFar ? find.error(selector) : tokenCache(selector, groups).slice(0);
                    }
                    function toSelector(tokens) {
                        var i = 0, len = tokens.length, selector = "";
                        for (;i < len; i++) selector += tokens[i].value;
                        return selector;
                    }
                    function addCombinator(matcher, combinator, base) {
                        var dir = combinator.dir, skip = combinator.next, key = skip || dir, checkNonElements = base && key === "parentNode", doneName = done++;
                        return combinator.first ? function(elem, context, xml) {
                            while (elem = elem[dir]) if (elem.nodeType === 1 || checkNonElements) return matcher(elem, context, xml);
                            return false;
                        } : function(elem, context, xml) {
                            var oldCache, outerCache, newCache = [ dirruns, doneName ];
                            if (xml) {
                                while (elem = elem[dir]) if (elem.nodeType === 1 || checkNonElements) if (matcher(elem, context, xml)) return true;
                            } else while (elem = elem[dir]) if (elem.nodeType === 1 || checkNonElements) {
                                outerCache = elem[expando] || (elem[expando] = {});
                                if (skip && nodeName(elem, skip)) elem = elem[dir] || elem; else if ((oldCache = outerCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) return newCache[2] = oldCache[2]; else {
                                    outerCache[key] = newCache;
                                    if (newCache[2] = matcher(elem, context, xml)) return true;
                                }
                            }
                            return false;
                        };
                    }
                    function elementMatcher(matchers) {
                        return matchers.length > 1 ? function(elem, context, xml) {
                            var i = matchers.length;
                            while (i--) if (!matchers[i](elem, context, xml)) return false;
                            return true;
                        } : matchers[0];
                    }
                    function multipleContexts(selector, contexts, results) {
                        var i = 0, len = contexts.length;
                        for (;i < len; i++) find(selector, contexts[i], results);
                        return results;
                    }
                    function condense(unmatched, map, filter, context, xml) {
                        var elem, newUnmatched = [], i = 0, len = unmatched.length, mapped = map != null;
                        for (;i < len; i++) if (elem = unmatched[i]) if (!filter || filter(elem, context, xml)) {
                            newUnmatched.push(elem);
                            if (mapped) map.push(i);
                        }
                        return newUnmatched;
                    }
                    function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
                        if (postFilter && !postFilter[expando]) postFilter = setMatcher(postFilter);
                        if (postFinder && !postFinder[expando]) postFinder = setMatcher(postFinder, postSelector);
                        return markFunction((function(seed, results, context, xml) {
                            var temp, i, elem, matcherOut, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(selector || "*", context.nodeType ? [ context ] : context, []), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems;
                            if (matcher) {
                                matcherOut = postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results;
                                matcher(matcherIn, matcherOut, context, xml);
                            } else matcherOut = matcherIn;
                            if (postFilter) {
                                temp = condense(matcherOut, postMap);
                                postFilter(temp, [], context, xml);
                                i = temp.length;
                                while (i--) if (elem = temp[i]) matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
                            }
                            if (seed) {
                                if (postFinder || preFilter) {
                                    if (postFinder) {
                                        temp = [];
                                        i = matcherOut.length;
                                        while (i--) if (elem = matcherOut[i]) temp.push(matcherIn[i] = elem);
                                        postFinder(null, matcherOut = [], temp, xml);
                                    }
                                    i = matcherOut.length;
                                    while (i--) if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i]) > -1) seed[temp] = !(results[temp] = elem);
                                }
                            } else {
                                matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
                                if (postFinder) postFinder(null, results, matcherOut, xml); else push.apply(results, matcherOut);
                            }
                        }));
                    }
                    function matcherFromTokens(tokens) {
                        var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i = leadingRelative ? 1 : 0, matchContext = addCombinator((function(elem) {
                            return elem === checkContext;
                        }), implicitRelative, true), matchAnyContext = addCombinator((function(elem) {
                            return indexOf.call(checkContext, elem) > -1;
                        }), implicitRelative, true), matchers = [ function(elem, context, xml) {
                            var ret = !leadingRelative && (xml || context != outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
                            checkContext = null;
                            return ret;
                        } ];
                        for (;i < len; i++) if (matcher = Expr.relative[tokens[i].type]) matchers = [ addCombinator(elementMatcher(matchers), matcher) ]; else {
                            matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
                            if (matcher[expando]) {
                                j = ++i;
                                for (;j < len; j++) if (Expr.relative[tokens[j].type]) break;
                                return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({
                                    value: tokens[i - 2].type === " " ? "*" : ""
                                })).replace(rtrimCSS, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
                            }
                            matchers.push(matcher);
                        }
                        return elementMatcher(matchers);
                    }
                    function matcherFromGroupMatchers(elementMatchers, setMatchers) {
                        var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
                            var elem, j, matcher, matchedCount = 0, i = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find.TAG("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || .1, len = elems.length;
                            if (outermost) outermostContext = context == document || context || outermost;
                            for (;i !== len && (elem = elems[i]) != null; i++) {
                                if (byElement && elem) {
                                    j = 0;
                                    if (!context && elem.ownerDocument != document) {
                                        setDocument(elem);
                                        xml = !documentIsHTML;
                                    }
                                    while (matcher = elementMatchers[j++]) if (matcher(elem, context || document, xml)) {
                                        push.call(results, elem);
                                        break;
                                    }
                                    if (outermost) dirruns = dirrunsUnique;
                                }
                                if (bySet) {
                                    if (elem = !matcher && elem) matchedCount--;
                                    if (seed) unmatched.push(elem);
                                }
                            }
                            matchedCount += i;
                            if (bySet && i !== matchedCount) {
                                j = 0;
                                while (matcher = setMatchers[j++]) matcher(unmatched, setMatched, context, xml);
                                if (seed) {
                                    if (matchedCount > 0) while (i--) if (!(unmatched[i] || setMatched[i])) setMatched[i] = pop.call(results);
                                    setMatched = condense(setMatched);
                                }
                                push.apply(results, setMatched);
                                if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) jQuery.uniqueSort(results);
                            }
                            if (outermost) {
                                dirruns = dirrunsUnique;
                                outermostContext = contextBackup;
                            }
                            return unmatched;
                        };
                        return bySet ? markFunction(superMatcher) : superMatcher;
                    }
                    function compile(selector, match) {
                        var i, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
                        if (!cached) {
                            if (!match) match = tokenize(selector);
                            i = match.length;
                            while (i--) {
                                cached = matcherFromTokens(match[i]);
                                if (cached[expando]) setMatchers.push(cached); else elementMatchers.push(cached);
                            }
                            cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
                            cached.selector = selector;
                        }
                        return cached;
                    }
                    function select(selector, context, results, seed) {
                        var i, tokens, token, type, find, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
                        results = results || [];
                        if (match.length === 1) {
                            tokens = match[0] = match[0].slice(0);
                            if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                                context = (Expr.find.ID(token.matches[0].replace(runescape, funescape), context) || [])[0];
                                if (!context) return results; else if (compiled) context = context.parentNode;
                                selector = selector.slice(tokens.shift().value.length);
                            }
                            i = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
                            while (i--) {
                                token = tokens[i];
                                if (Expr.relative[type = token.type]) break;
                                if (find = Expr.find[type]) if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
                                    tokens.splice(i, 1);
                                    selector = seed.length && toSelector(tokens);
                                    if (!selector) {
                                        push.apply(results, seed);
                                        return results;
                                    }
                                    break;
                                }
                            }
                        }
                        (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
                        return results;
                    }
                    support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
                    setDocument();
                    support.sortDetached = assert((function(el) {
                        return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
                    }));
                    jQuery.find = find;
                    jQuery.expr[":"] = jQuery.expr.pseudos;
                    jQuery.unique = jQuery.uniqueSort;
                    find.compile = compile;
                    find.select = select;
                    find.setDocument = setDocument;
                    find.escape = jQuery.escapeSelector;
                    find.getText = jQuery.text;
                    find.isXML = jQuery.isXMLDoc;
                    find.selectors = jQuery.expr;
                    find.support = jQuery.support;
                    find.uniqueSort = jQuery.uniqueSort;
                })();
                var dir = function(elem, dir, until) {
                    var matched = [], truncate = until !== void 0;
                    while ((elem = elem[dir]) && elem.nodeType !== 9) if (elem.nodeType === 1) {
                        if (truncate && jQuery(elem).is(until)) break;
                        matched.push(elem);
                    }
                    return matched;
                };
                var siblings = function(n, elem) {
                    var matched = [];
                    for (;n; n = n.nextSibling) if (n.nodeType === 1 && n !== elem) matched.push(n);
                    return matched;
                };
                var rneedsContext = jQuery.expr.match.needsContext;
                var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
                function winnow(elements, qualifier, not) {
                    if (isFunction(qualifier)) return jQuery.grep(elements, (function(elem, i) {
                        return !!qualifier.call(elem, i, elem) !== not;
                    }));
                    if (qualifier.nodeType) return jQuery.grep(elements, (function(elem) {
                        return elem === qualifier !== not;
                    }));
                    if (typeof qualifier !== "string") return jQuery.grep(elements, (function(elem) {
                        return indexOf.call(qualifier, elem) > -1 !== not;
                    }));
                    return jQuery.filter(qualifier, elements, not);
                }
                jQuery.filter = function(expr, elems, not) {
                    var elem = elems[0];
                    if (not) expr = ":not(" + expr + ")";
                    if (elems.length === 1 && elem.nodeType === 1) return jQuery.find.matchesSelector(elem, expr) ? [ elem ] : [];
                    return jQuery.find.matches(expr, jQuery.grep(elems, (function(elem) {
                        return elem.nodeType === 1;
                    })));
                };
                jQuery.fn.extend({
                    find: function(selector) {
                        var i, ret, len = this.length, self = this;
                        if (typeof selector !== "string") return this.pushStack(jQuery(selector).filter((function() {
                            for (i = 0; i < len; i++) if (jQuery.contains(self[i], this)) return true;
                        })));
                        ret = this.pushStack([]);
                        for (i = 0; i < len; i++) jQuery.find(selector, self[i], ret);
                        return len > 1 ? jQuery.uniqueSort(ret) : ret;
                    },
                    filter: function(selector) {
                        return this.pushStack(winnow(this, selector || [], false));
                    },
                    not: function(selector) {
                        return this.pushStack(winnow(this, selector || [], true));
                    },
                    is: function(selector) {
                        return !!winnow(this, typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
                    }
                });
                var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init = jQuery.fn.init = function(selector, context, root) {
                    var match, elem;
                    if (!selector) return this;
                    root = root || rootjQuery;
                    if (typeof selector === "string") {
                        if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) match = [ null, selector, null ]; else match = rquickExpr.exec(selector);
                        if (match && (match[1] || !context)) if (match[1]) {
                            context = context instanceof jQuery ? context[0] : context;
                            jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
                            if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) for (match in context) if (isFunction(this[match])) this[match](context[match]); else this.attr(match, context[match]);
                            return this;
                        } else {
                            elem = document.getElementById(match[2]);
                            if (elem) {
                                this[0] = elem;
                                this.length = 1;
                            }
                            return this;
                        } else if (!context || context.jquery) return (context || root).find(selector); else return this.constructor(context).find(selector);
                    } else if (selector.nodeType) {
                        this[0] = selector;
                        this.length = 1;
                        return this;
                    } else if (isFunction(selector)) return root.ready !== void 0 ? root.ready(selector) : selector(jQuery);
                    return jQuery.makeArray(selector, this);
                };
                init.prototype = jQuery.fn;
                rootjQuery = jQuery(document);
                var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
                    children: true,
                    contents: true,
                    next: true,
                    prev: true
                };
                jQuery.fn.extend({
                    has: function(target) {
                        var targets = jQuery(target, this), l = targets.length;
                        return this.filter((function() {
                            var i = 0;
                            for (;i < l; i++) if (jQuery.contains(this, targets[i])) return true;
                        }));
                    },
                    closest: function(selectors, context) {
                        var cur, i = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery(selectors);
                        if (!rneedsContext.test(selectors)) for (;i < l; i++) for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
                            matched.push(cur);
                            break;
                        }
                        return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
                    },
                    index: function(elem) {
                        if (!elem) return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                        if (typeof elem === "string") return indexOf.call(jQuery(elem), this[0]);
                        return indexOf.call(this, elem.jquery ? elem[0] : elem);
                    },
                    add: function(selector, context) {
                        return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
                    },
                    addBack: function(selector) {
                        return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
                    }
                });
                function sibling(cur, dir) {
                    while ((cur = cur[dir]) && cur.nodeType !== 1) ;
                    return cur;
                }
                jQuery.each({
                    parent: function(elem) {
                        var parent = elem.parentNode;
                        return parent && parent.nodeType !== 11 ? parent : null;
                    },
                    parents: function(elem) {
                        return dir(elem, "parentNode");
                    },
                    parentsUntil: function(elem, _i, until) {
                        return dir(elem, "parentNode", until);
                    },
                    next: function(elem) {
                        return sibling(elem, "nextSibling");
                    },
                    prev: function(elem) {
                        return sibling(elem, "previousSibling");
                    },
                    nextAll: function(elem) {
                        return dir(elem, "nextSibling");
                    },
                    prevAll: function(elem) {
                        return dir(elem, "previousSibling");
                    },
                    nextUntil: function(elem, _i, until) {
                        return dir(elem, "nextSibling", until);
                    },
                    prevUntil: function(elem, _i, until) {
                        return dir(elem, "previousSibling", until);
                    },
                    siblings: function(elem) {
                        return siblings((elem.parentNode || {}).firstChild, elem);
                    },
                    children: function(elem) {
                        return siblings(elem.firstChild);
                    },
                    contents: function(elem) {
                        if (elem.contentDocument != null && getProto(elem.contentDocument)) return elem.contentDocument;
                        if (nodeName(elem, "template")) elem = elem.content || elem;
                        return jQuery.merge([], elem.childNodes);
                    }
                }, (function(name, fn) {
                    jQuery.fn[name] = function(until, selector) {
                        var matched = jQuery.map(this, fn, until);
                        if (name.slice(-5) !== "Until") selector = until;
                        if (selector && typeof selector === "string") matched = jQuery.filter(selector, matched);
                        if (this.length > 1) {
                            if (!guaranteedUnique[name]) jQuery.uniqueSort(matched);
                            if (rparentsprev.test(name)) matched.reverse();
                        }
                        return this.pushStack(matched);
                    };
                }));
                var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
                function createOptions(options) {
                    var object = {};
                    jQuery.each(options.match(rnothtmlwhite) || [], (function(_, flag) {
                        object[flag] = true;
                    }));
                    return object;
                }
                jQuery.Callbacks = function(options) {
                    options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
                    var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
                        locked = locked || options.once;
                        fired = firing = true;
                        for (;queue.length; firingIndex = -1) {
                            memory = queue.shift();
                            while (++firingIndex < list.length) if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                                firingIndex = list.length;
                                memory = false;
                            }
                        }
                        if (!options.memory) memory = false;
                        firing = false;
                        if (locked) if (memory) list = []; else list = "";
                    }, self = {
                        add: function() {
                            if (list) {
                                if (memory && !firing) {
                                    firingIndex = list.length - 1;
                                    queue.push(memory);
                                }
                                (function add(args) {
                                    jQuery.each(args, (function(_, arg) {
                                        if (isFunction(arg)) {
                                            if (!options.unique || !self.has(arg)) list.push(arg);
                                        } else if (arg && arg.length && toType(arg) !== "string") add(arg);
                                    }));
                                })(arguments);
                                if (memory && !firing) fire();
                            }
                            return this;
                        },
                        remove: function() {
                            jQuery.each(arguments, (function(_, arg) {
                                var index;
                                while ((index = jQuery.inArray(arg, list, index)) > -1) {
                                    list.splice(index, 1);
                                    if (index <= firingIndex) firingIndex--;
                                }
                            }));
                            return this;
                        },
                        has: function(fn) {
                            return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
                        },
                        empty: function() {
                            if (list) list = [];
                            return this;
                        },
                        disable: function() {
                            locked = queue = [];
                            list = memory = "";
                            return this;
                        },
                        disabled: function() {
                            return !list;
                        },
                        lock: function() {
                            locked = queue = [];
                            if (!memory && !firing) list = memory = "";
                            return this;
                        },
                        locked: function() {
                            return !!locked;
                        },
                        fireWith: function(context, args) {
                            if (!locked) {
                                args = args || [];
                                args = [ context, args.slice ? args.slice() : args ];
                                queue.push(args);
                                if (!firing) fire();
                            }
                            return this;
                        },
                        fire: function() {
                            self.fireWith(this, arguments);
                            return this;
                        },
                        fired: function() {
                            return !!fired;
                        }
                    };
                    return self;
                };
                function Identity(v) {
                    return v;
                }
                function Thrower(ex) {
                    throw ex;
                }
                function adoptValue(value, resolve, reject, noValue) {
                    var method;
                    try {
                        if (value && isFunction(method = value.promise)) method.call(value).done(resolve).fail(reject); else if (value && isFunction(method = value.then)) method.call(value, resolve, reject); else resolve.apply(void 0, [ value ].slice(noValue));
                    } catch (value) {
                        reject.apply(void 0, [ value ]);
                    }
                }
                jQuery.extend({
                    Deferred: function(func) {
                        var tuples = [ [ "notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2 ], [ "resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected" ] ], state = "pending", promise = {
                            state: function() {
                                return state;
                            },
                            always: function() {
                                deferred.done(arguments).fail(arguments);
                                return this;
                            },
                            catch: function(fn) {
                                return promise.then(null, fn);
                            },
                            pipe: function() {
                                var fns = arguments;
                                return jQuery.Deferred((function(newDefer) {
                                    jQuery.each(tuples, (function(_i, tuple) {
                                        var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                                        deferred[tuple[1]]((function() {
                                            var returned = fn && fn.apply(this, arguments);
                                            if (returned && isFunction(returned.promise)) returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject); else newDefer[tuple[0] + "With"](this, fn ? [ returned ] : arguments);
                                        }));
                                    }));
                                    fns = null;
                                })).promise();
                            },
                            then: function(onFulfilled, onRejected, onProgress) {
                                var maxDepth = 0;
                                function resolve(depth, deferred, handler, special) {
                                    return function() {
                                        var that = this, args = arguments, mightThrow = function() {
                                            var returned, then;
                                            if (depth < maxDepth) return;
                                            returned = handler.apply(that, args);
                                            if (returned === deferred.promise()) throw new TypeError("Thenable self-resolution");
                                            then = returned && (typeof returned === "object" || typeof returned === "function") && returned.then;
                                            if (isFunction(then)) if (special) then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special)); else {
                                                maxDepth++;
                                                then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
                                            } else {
                                                if (handler !== Identity) {
                                                    that = void 0;
                                                    args = [ returned ];
                                                }
                                                (special || deferred.resolveWith)(that, args);
                                            }
                                        }, process = special ? mightThrow : function() {
                                            try {
                                                mightThrow();
                                            } catch (e) {
                                                if (jQuery.Deferred.exceptionHook) jQuery.Deferred.exceptionHook(e, process.error);
                                                if (depth + 1 >= maxDepth) {
                                                    if (handler !== Thrower) {
                                                        that = void 0;
                                                        args = [ e ];
                                                    }
                                                    deferred.rejectWith(that, args);
                                                }
                                            }
                                        };
                                        if (depth) process(); else {
                                            if (jQuery.Deferred.getErrorHook) process.error = jQuery.Deferred.getErrorHook(); else if (jQuery.Deferred.getStackHook) process.error = jQuery.Deferred.getStackHook();
                                            window.setTimeout(process);
                                        }
                                    };
                                }
                                return jQuery.Deferred((function(newDefer) {
                                    tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith));
                                    tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity));
                                    tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
                                })).promise();
                            },
                            promise: function(obj) {
                                return obj != null ? jQuery.extend(obj, promise) : promise;
                            }
                        }, deferred = {};
                        jQuery.each(tuples, (function(i, tuple) {
                            var list = tuple[2], stateString = tuple[5];
                            promise[tuple[1]] = list.add;
                            if (stateString) list.add((function() {
                                state = stateString;
                            }), tuples[3 - i][2].disable, tuples[3 - i][3].disable, tuples[0][2].lock, tuples[0][3].lock);
                            list.add(tuple[3].fire);
                            deferred[tuple[0]] = function() {
                                deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments);
                                return this;
                            };
                            deferred[tuple[0] + "With"] = list.fireWith;
                        }));
                        promise.promise(deferred);
                        if (func) func.call(deferred, deferred);
                        return deferred;
                    },
                    when: function(singleValue) {
                        var remaining = arguments.length, i = remaining, resolveContexts = Array(i), resolveValues = slice.call(arguments), primary = jQuery.Deferred(), updateFunc = function(i) {
                            return function(value) {
                                resolveContexts[i] = this;
                                resolveValues[i] = arguments.length > 1 ? slice.call(arguments) : value;
                                if (!--remaining) primary.resolveWith(resolveContexts, resolveValues);
                            };
                        };
                        if (remaining <= 1) {
                            adoptValue(singleValue, primary.done(updateFunc(i)).resolve, primary.reject, !remaining);
                            if (primary.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) return primary.then();
                        }
                        while (i--) adoptValue(resolveValues[i], updateFunc(i), primary.reject);
                        return primary.promise();
                    }
                });
                var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                jQuery.Deferred.exceptionHook = function(error, asyncError) {
                    if (window.console && window.console.warn && error && rerrorNames.test(error.name)) window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, asyncError);
                };
                jQuery.readyException = function(error) {
                    window.setTimeout((function() {
                        throw error;
                    }));
                };
                var readyList = jQuery.Deferred();
                jQuery.fn.ready = function(fn) {
                    readyList.then(fn).catch((function(error) {
                        jQuery.readyException(error);
                    }));
                    return this;
                };
                jQuery.extend({
                    isReady: false,
                    readyWait: 1,
                    ready: function(wait) {
                        if (wait === true ? --jQuery.readyWait : jQuery.isReady) return;
                        jQuery.isReady = true;
                        if (wait !== true && --jQuery.readyWait > 0) return;
                        readyList.resolveWith(document, [ jQuery ]);
                    }
                });
                jQuery.ready.then = readyList.then;
                function completed() {
                    document.removeEventListener("DOMContentLoaded", completed);
                    window.removeEventListener("load", completed);
                    jQuery.ready();
                }
                if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) window.setTimeout(jQuery.ready); else {
                    document.addEventListener("DOMContentLoaded", completed);
                    window.addEventListener("load", completed);
                }
                var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
                    var i = 0, len = elems.length, bulk = key == null;
                    if (toType(key) === "object") {
                        chainable = true;
                        for (i in key) access(elems, fn, i, key[i], true, emptyGet, raw);
                    } else if (value !== void 0) {
                        chainable = true;
                        if (!isFunction(value)) raw = true;
                        if (bulk) if (raw) {
                            fn.call(elems, value);
                            fn = null;
                        } else {
                            bulk = fn;
                            fn = function(elem, _key, value) {
                                return bulk.call(jQuery(elem), value);
                            };
                        }
                        if (fn) for (;i < len; i++) fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
                    }
                    if (chainable) return elems;
                    if (bulk) return fn.call(elems);
                    return len ? fn(elems[0], key) : emptyGet;
                };
                var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
                function fcamelCase(_all, letter) {
                    return letter.toUpperCase();
                }
                function camelCase(string) {
                    return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
                }
                var acceptData = function(owner) {
                    return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
                };
                function Data() {
                    this.expando = jQuery.expando + Data.uid++;
                }
                Data.uid = 1;
                Data.prototype = {
                    cache: function(owner) {
                        var value = owner[this.expando];
                        if (!value) {
                            value = {};
                            if (acceptData(owner)) if (owner.nodeType) owner[this.expando] = value; else Object.defineProperty(owner, this.expando, {
                                value,
                                configurable: true
                            });
                        }
                        return value;
                    },
                    set: function(owner, data, value) {
                        var prop, cache = this.cache(owner);
                        if (typeof data === "string") cache[camelCase(data)] = value; else for (prop in data) cache[camelCase(prop)] = data[prop];
                        return cache;
                    },
                    get: function(owner, key) {
                        return key === void 0 ? this.cache(owner) : owner[this.expando] && owner[this.expando][camelCase(key)];
                    },
                    access: function(owner, key, value) {
                        if (key === void 0 || key && typeof key === "string" && value === void 0) return this.get(owner, key);
                        this.set(owner, key, value);
                        return value !== void 0 ? value : key;
                    },
                    remove: function(owner, key) {
                        var i, cache = owner[this.expando];
                        if (cache === void 0) return;
                        if (key !== void 0) {
                            if (Array.isArray(key)) key = key.map(camelCase); else {
                                key = camelCase(key);
                                key = key in cache ? [ key ] : key.match(rnothtmlwhite) || [];
                            }
                            i = key.length;
                            while (i--) delete cache[key[i]];
                        }
                        if (key === void 0 || jQuery.isEmptyObject(cache)) if (owner.nodeType) owner[this.expando] = void 0; else delete owner[this.expando];
                    },
                    hasData: function(owner) {
                        var cache = owner[this.expando];
                        return cache !== void 0 && !jQuery.isEmptyObject(cache);
                    }
                };
                var dataPriv = new Data;
                var dataUser = new Data;
                var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
                function getData(data) {
                    if (data === "true") return true;
                    if (data === "false") return false;
                    if (data === "null") return null;
                    if (data === +data + "") return +data;
                    if (rbrace.test(data)) return JSON.parse(data);
                    return data;
                }
                function dataAttr(elem, key, data) {
                    var name;
                    if (data === void 0 && elem.nodeType === 1) {
                        name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
                        data = elem.getAttribute(name);
                        if (typeof data === "string") {
                            try {
                                data = getData(data);
                            } catch (e) {}
                            dataUser.set(elem, key, data);
                        } else data = void 0;
                    }
                    return data;
                }
                jQuery.extend({
                    hasData: function(elem) {
                        return dataUser.hasData(elem) || dataPriv.hasData(elem);
                    },
                    data: function(elem, name, data) {
                        return dataUser.access(elem, name, data);
                    },
                    removeData: function(elem, name) {
                        dataUser.remove(elem, name);
                    },
                    _data: function(elem, name, data) {
                        return dataPriv.access(elem, name, data);
                    },
                    _removeData: function(elem, name) {
                        dataPriv.remove(elem, name);
                    }
                });
                jQuery.fn.extend({
                    data: function(key, value) {
                        var i, name, data, elem = this[0], attrs = elem && elem.attributes;
                        if (key === void 0) {
                            if (this.length) {
                                data = dataUser.get(elem);
                                if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                                    i = attrs.length;
                                    while (i--) if (attrs[i]) {
                                        name = attrs[i].name;
                                        if (name.indexOf("data-") === 0) {
                                            name = camelCase(name.slice(5));
                                            dataAttr(elem, name, data[name]);
                                        }
                                    }
                                    dataPriv.set(elem, "hasDataAttrs", true);
                                }
                            }
                            return data;
                        }
                        if (typeof key === "object") return this.each((function() {
                            dataUser.set(this, key);
                        }));
                        return access(this, (function(value) {
                            var data;
                            if (elem && value === void 0) {
                                data = dataUser.get(elem, key);
                                if (data !== void 0) return data;
                                data = dataAttr(elem, key);
                                if (data !== void 0) return data;
                                return;
                            }
                            this.each((function() {
                                dataUser.set(this, key, value);
                            }));
                        }), null, value, arguments.length > 1, null, true);
                    },
                    removeData: function(key) {
                        return this.each((function() {
                            dataUser.remove(this, key);
                        }));
                    }
                });
                jQuery.extend({
                    queue: function(elem, type, data) {
                        var queue;
                        if (elem) {
                            type = (type || "fx") + "queue";
                            queue = dataPriv.get(elem, type);
                            if (data) if (!queue || Array.isArray(data)) queue = dataPriv.access(elem, type, jQuery.makeArray(data)); else queue.push(data);
                            return queue || [];
                        }
                    },
                    dequeue: function(elem, type) {
                        type = type || "fx";
                        var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function() {
                            jQuery.dequeue(elem, type);
                        };
                        if (fn === "inprogress") {
                            fn = queue.shift();
                            startLength--;
                        }
                        if (fn) {
                            if (type === "fx") queue.unshift("inprogress");
                            delete hooks.stop;
                            fn.call(elem, next, hooks);
                        }
                        if (!startLength && hooks) hooks.empty.fire();
                    },
                    _queueHooks: function(elem, type) {
                        var key = type + "queueHooks";
                        return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
                            empty: jQuery.Callbacks("once memory").add((function() {
                                dataPriv.remove(elem, [ type + "queue", key ]);
                            }))
                        });
                    }
                });
                jQuery.fn.extend({
                    queue: function(type, data) {
                        var setter = 2;
                        if (typeof type !== "string") {
                            data = type;
                            type = "fx";
                            setter--;
                        }
                        if (arguments.length < setter) return jQuery.queue(this[0], type);
                        return data === void 0 ? this : this.each((function() {
                            var queue = jQuery.queue(this, type, data);
                            jQuery._queueHooks(this, type);
                            if (type === "fx" && queue[0] !== "inprogress") jQuery.dequeue(this, type);
                        }));
                    },
                    dequeue: function(type) {
                        return this.each((function() {
                            jQuery.dequeue(this, type);
                        }));
                    },
                    clearQueue: function(type) {
                        return this.queue(type || "fx", []);
                    },
                    promise: function(type, obj) {
                        var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function() {
                            if (!--count) defer.resolveWith(elements, [ elements ]);
                        };
                        if (typeof type !== "string") {
                            obj = type;
                            type = void 0;
                        }
                        type = type || "fx";
                        while (i--) {
                            tmp = dataPriv.get(elements[i], type + "queueHooks");
                            if (tmp && tmp.empty) {
                                count++;
                                tmp.empty.add(resolve);
                            }
                        }
                        resolve();
                        return defer.promise(obj);
                    }
                });
                var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
                var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
                var cssExpand = [ "Top", "Right", "Bottom", "Left" ];
                var documentElement = document.documentElement;
                var isAttached = function(elem) {
                    return jQuery.contains(elem.ownerDocument, elem);
                }, composed = {
                    composed: true
                };
                if (documentElement.getRootNode) isAttached = function(elem) {
                    return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
                };
                var isHiddenWithinTree = function(elem, el) {
                    elem = el || elem;
                    return elem.style.display === "none" || elem.style.display === "" && isAttached(elem) && jQuery.css(elem, "display") === "none";
                };
                function adjustCSS(elem, prop, valueParts, tween) {
                    var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
                        return tween.cur();
                    } : function() {
                        return jQuery.css(elem, prop, "");
                    }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"), initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
                    if (initialInUnit && initialInUnit[3] !== unit) {
                        initial /= 2;
                        unit = unit || initialInUnit[3];
                        initialInUnit = +initial || 1;
                        while (maxIterations--) {
                            jQuery.style(elem, prop, initialInUnit + unit);
                            if ((1 - scale) * (1 - (scale = currentValue() / initial || .5)) <= 0) maxIterations = 0;
                            initialInUnit /= scale;
                        }
                        initialInUnit *= 2;
                        jQuery.style(elem, prop, initialInUnit + unit);
                        valueParts = valueParts || [];
                    }
                    if (valueParts) {
                        initialInUnit = +initialInUnit || +initial || 0;
                        adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
                        if (tween) {
                            tween.unit = unit;
                            tween.start = initialInUnit;
                            tween.end = adjusted;
                        }
                    }
                    return adjusted;
                }
                var defaultDisplayMap = {};
                function getDefaultDisplay(elem) {
                    var temp, doc = elem.ownerDocument, nodeName = elem.nodeName, display = defaultDisplayMap[nodeName];
                    if (display) return display;
                    temp = doc.body.appendChild(doc.createElement(nodeName));
                    display = jQuery.css(temp, "display");
                    temp.parentNode.removeChild(temp);
                    if (display === "none") display = "block";
                    defaultDisplayMap[nodeName] = display;
                    return display;
                }
                function showHide(elements, show) {
                    var display, elem, values = [], index = 0, length = elements.length;
                    for (;index < length; index++) {
                        elem = elements[index];
                        if (!elem.style) continue;
                        display = elem.style.display;
                        if (show) {
                            if (display === "none") {
                                values[index] = dataPriv.get(elem, "display") || null;
                                if (!values[index]) elem.style.display = "";
                            }
                            if (elem.style.display === "" && isHiddenWithinTree(elem)) values[index] = getDefaultDisplay(elem);
                        } else if (display !== "none") {
                            values[index] = "none";
                            dataPriv.set(elem, "display", display);
                        }
                    }
                    for (index = 0; index < length; index++) if (values[index] != null) elements[index].style.display = values[index];
                    return elements;
                }
                jQuery.fn.extend({
                    show: function() {
                        return showHide(this, true);
                    },
                    hide: function() {
                        return showHide(this);
                    },
                    toggle: function(state) {
                        if (typeof state === "boolean") return state ? this.show() : this.hide();
                        return this.each((function() {
                            if (isHiddenWithinTree(this)) jQuery(this).show(); else jQuery(this).hide();
                        }));
                    }
                });
                var rcheckableType = /^(?:checkbox|radio)$/i;
                var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
                var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
                (function() {
                    var fragment = document.createDocumentFragment(), div = fragment.appendChild(document.createElement("div")), input = document.createElement("input");
                    input.setAttribute("type", "radio");
                    input.setAttribute("checked", "checked");
                    input.setAttribute("name", "t");
                    div.appendChild(input);
                    support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
                    div.innerHTML = "<textarea>x</textarea>";
                    support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
                    div.innerHTML = "<option></option>";
                    support.option = !!div.lastChild;
                })();
                var wrapMap = {
                    thead: [ 1, "<table>", "</table>" ],
                    col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
                    tr: [ 2, "<table><tbody>", "</tbody></table>" ],
                    td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
                    _default: [ 0, "", "" ]
                };
                wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
                wrapMap.th = wrapMap.td;
                if (!support.option) wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
                function getAll(context, tag) {
                    var ret;
                    if (typeof context.getElementsByTagName !== "undefined") ret = context.getElementsByTagName(tag || "*"); else if (typeof context.querySelectorAll !== "undefined") ret = context.querySelectorAll(tag || "*"); else ret = [];
                    if (tag === void 0 || tag && nodeName(context, tag)) return jQuery.merge([ context ], ret);
                    return ret;
                }
                function setGlobalEval(elems, refElements) {
                    var i = 0, l = elems.length;
                    for (;i < l; i++) dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
                }
                var rhtml = /<|&#?\w+;/;
                function buildFragment(elems, context, scripts, selection, ignored) {
                    var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i = 0, l = elems.length;
                    for (;i < l; i++) {
                        elem = elems[i];
                        if (elem || elem === 0) if (toType(elem) === "object") jQuery.merge(nodes, elem.nodeType ? [ elem ] : elem); else if (!rhtml.test(elem)) nodes.push(context.createTextNode(elem)); else {
                            tmp = tmp || fragment.appendChild(context.createElement("div"));
                            tag = (rtagName.exec(elem) || [ "", "" ])[1].toLowerCase();
                            wrap = wrapMap[tag] || wrapMap._default;
                            tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
                            j = wrap[0];
                            while (j--) tmp = tmp.lastChild;
                            jQuery.merge(nodes, tmp.childNodes);
                            tmp = fragment.firstChild;
                            tmp.textContent = "";
                        }
                    }
                    fragment.textContent = "";
                    i = 0;
                    while (elem = nodes[i++]) {
                        if (selection && jQuery.inArray(elem, selection) > -1) {
                            if (ignored) ignored.push(elem);
                            continue;
                        }
                        attached = isAttached(elem);
                        tmp = getAll(fragment.appendChild(elem), "script");
                        if (attached) setGlobalEval(tmp);
                        if (scripts) {
                            j = 0;
                            while (elem = tmp[j++]) if (rscriptType.test(elem.type || "")) scripts.push(elem);
                        }
                    }
                    return fragment;
                }
                var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
                function returnTrue() {
                    return true;
                }
                function returnFalse() {
                    return false;
                }
                function on(elem, types, selector, data, fn, one) {
                    var origFn, type;
                    if (typeof types === "object") {
                        if (typeof selector !== "string") {
                            data = data || selector;
                            selector = void 0;
                        }
                        for (type in types) on(elem, type, selector, data, types[type], one);
                        return elem;
                    }
                    if (data == null && fn == null) {
                        fn = selector;
                        data = selector = void 0;
                    } else if (fn == null) if (typeof selector === "string") {
                        fn = data;
                        data = void 0;
                    } else {
                        fn = data;
                        data = selector;
                        selector = void 0;
                    }
                    if (fn === false) fn = returnFalse; else if (!fn) return elem;
                    if (one === 1) {
                        origFn = fn;
                        fn = function(event) {
                            jQuery().off(event);
                            return origFn.apply(this, arguments);
                        };
                        fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
                    }
                    return elem.each((function() {
                        jQuery.event.add(this, types, fn, data, selector);
                    }));
                }
                jQuery.event = {
                    global: {},
                    add: function(elem, types, handler, data, selector) {
                        var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
                        if (!acceptData(elem)) return;
                        if (handler.handler) {
                            handleObjIn = handler;
                            handler = handleObjIn.handler;
                            selector = handleObjIn.selector;
                        }
                        if (selector) jQuery.find.matchesSelector(documentElement, selector);
                        if (!handler.guid) handler.guid = jQuery.guid++;
                        if (!(events = elemData.events)) events = elemData.events = Object.create(null);
                        if (!(eventHandle = elemData.handle)) eventHandle = elemData.handle = function(e) {
                            return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : void 0;
                        };
                        types = (types || "").match(rnothtmlwhite) || [ "" ];
                        t = types.length;
                        while (t--) {
                            tmp = rtypenamespace.exec(types[t]) || [];
                            type = origType = tmp[1];
                            namespaces = (tmp[2] || "").split(".").sort();
                            if (!type) continue;
                            special = jQuery.event.special[type] || {};
                            type = (selector ? special.delegateType : special.bindType) || type;
                            special = jQuery.event.special[type] || {};
                            handleObj = jQuery.extend({
                                type,
                                origType,
                                data,
                                handler,
                                guid: handler.guid,
                                selector,
                                needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                                namespace: namespaces.join(".")
                            }, handleObjIn);
                            if (!(handlers = events[type])) {
                                handlers = events[type] = [];
                                handlers.delegateCount = 0;
                                if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) if (elem.addEventListener) elem.addEventListener(type, eventHandle);
                            }
                            if (special.add) {
                                special.add.call(elem, handleObj);
                                if (!handleObj.handler.guid) handleObj.handler.guid = handler.guid;
                            }
                            if (selector) handlers.splice(handlers.delegateCount++, 0, handleObj); else handlers.push(handleObj);
                            jQuery.event.global[type] = true;
                        }
                    },
                    remove: function(elem, types, handler, selector, mappedTypes) {
                        var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
                        if (!elemData || !(events = elemData.events)) return;
                        types = (types || "").match(rnothtmlwhite) || [ "" ];
                        t = types.length;
                        while (t--) {
                            tmp = rtypenamespace.exec(types[t]) || [];
                            type = origType = tmp[1];
                            namespaces = (tmp[2] || "").split(".").sort();
                            if (!type) {
                                for (type in events) jQuery.event.remove(elem, type + types[t], handler, selector, true);
                                continue;
                            }
                            special = jQuery.event.special[type] || {};
                            type = (selector ? special.delegateType : special.bindType) || type;
                            handlers = events[type] || [];
                            tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
                            origCount = j = handlers.length;
                            while (j--) {
                                handleObj = handlers[j];
                                if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                                    handlers.splice(j, 1);
                                    if (handleObj.selector) handlers.delegateCount--;
                                    if (special.remove) special.remove.call(elem, handleObj);
                                }
                            }
                            if (origCount && !handlers.length) {
                                if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) jQuery.removeEvent(elem, type, elemData.handle);
                                delete events[type];
                            }
                        }
                        if (jQuery.isEmptyObject(events)) dataPriv.remove(elem, "handle events");
                    },
                    dispatch: function(nativeEvent) {
                        var i, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), event = jQuery.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || Object.create(null))[event.type] || [], special = jQuery.event.special[event.type] || {};
                        args[0] = event;
                        for (i = 1; i < arguments.length; i++) args[i] = arguments[i];
                        event.delegateTarget = this;
                        if (special.preDispatch && special.preDispatch.call(this, event) === false) return;
                        handlerQueue = jQuery.event.handlers.call(this, event, handlers);
                        i = 0;
                        while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
                            event.currentTarget = matched.elem;
                            j = 0;
                            while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
                                event.handleObj = handleObj;
                                event.data = handleObj.data;
                                ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                                if (ret !== void 0) if ((event.result = ret) === false) {
                                    event.preventDefault();
                                    event.stopPropagation();
                                }
                            }
                        }
                        if (special.postDispatch) special.postDispatch.call(this, event);
                        return event.result;
                    },
                    handlers: function(event, handlers) {
                        var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
                        if (delegateCount && cur.nodeType && !(event.type === "click" && event.button >= 1)) for (;cur !== this; cur = cur.parentNode || this) if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                            matchedHandlers = [];
                            matchedSelectors = {};
                            for (i = 0; i < delegateCount; i++) {
                                handleObj = handlers[i];
                                sel = handleObj.selector + " ";
                                if (matchedSelectors[sel] === void 0) matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [ cur ]).length;
                                if (matchedSelectors[sel]) matchedHandlers.push(handleObj);
                            }
                            if (matchedHandlers.length) handlerQueue.push({
                                elem: cur,
                                handlers: matchedHandlers
                            });
                        }
                        cur = this;
                        if (delegateCount < handlers.length) handlerQueue.push({
                            elem: cur,
                            handlers: handlers.slice(delegateCount)
                        });
                        return handlerQueue;
                    },
                    addProp: function(name, hook) {
                        Object.defineProperty(jQuery.Event.prototype, name, {
                            enumerable: true,
                            configurable: true,
                            get: isFunction(hook) ? function() {
                                if (this.originalEvent) return hook(this.originalEvent);
                            } : function() {
                                if (this.originalEvent) return this.originalEvent[name];
                            },
                            set: function(value) {
                                Object.defineProperty(this, name, {
                                    enumerable: true,
                                    configurable: true,
                                    writable: true,
                                    value
                                });
                            }
                        });
                    },
                    fix: function(originalEvent) {
                        return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
                    },
                    special: {
                        load: {
                            noBubble: true
                        },
                        click: {
                            setup: function(data) {
                                var el = this || data;
                                if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) leverageNative(el, "click", true);
                                return false;
                            },
                            trigger: function(data) {
                                var el = this || data;
                                if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) leverageNative(el, "click");
                                return true;
                            },
                            _default: function(event) {
                                var target = event.target;
                                return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
                            }
                        },
                        beforeunload: {
                            postDispatch: function(event) {
                                if (event.result !== void 0 && event.originalEvent) event.originalEvent.returnValue = event.result;
                            }
                        }
                    }
                };
                function leverageNative(el, type, isSetup) {
                    if (!isSetup) {
                        if (dataPriv.get(el, type) === void 0) jQuery.event.add(el, type, returnTrue);
                        return;
                    }
                    dataPriv.set(el, type, false);
                    jQuery.event.add(el, type, {
                        namespace: false,
                        handler: function(event) {
                            var result, saved = dataPriv.get(this, type);
                            if (event.isTrigger & 1 && this[type]) {
                                if (!saved) {
                                    saved = slice.call(arguments);
                                    dataPriv.set(this, type, saved);
                                    this[type]();
                                    result = dataPriv.get(this, type);
                                    dataPriv.set(this, type, false);
                                    if (saved !== result) {
                                        event.stopImmediatePropagation();
                                        event.preventDefault();
                                        return result;
                                    }
                                } else if ((jQuery.event.special[type] || {}).delegateType) event.stopPropagation();
                            } else if (saved) {
                                dataPriv.set(this, type, jQuery.event.trigger(saved[0], saved.slice(1), this));
                                event.stopPropagation();
                                event.isImmediatePropagationStopped = returnTrue;
                            }
                        }
                    });
                }
                jQuery.removeEvent = function(elem, type, handle) {
                    if (elem.removeEventListener) elem.removeEventListener(type, handle);
                };
                jQuery.Event = function(src, props) {
                    if (!(this instanceof jQuery.Event)) return new jQuery.Event(src, props);
                    if (src && src.type) {
                        this.originalEvent = src;
                        this.type = src.type;
                        this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === void 0 && src.returnValue === false ? returnTrue : returnFalse;
                        this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
                        this.currentTarget = src.currentTarget;
                        this.relatedTarget = src.relatedTarget;
                    } else this.type = src;
                    if (props) jQuery.extend(this, props);
                    this.timeStamp = src && src.timeStamp || Date.now();
                    this[jQuery.expando] = true;
                };
                jQuery.Event.prototype = {
                    constructor: jQuery.Event,
                    isDefaultPrevented: returnFalse,
                    isPropagationStopped: returnFalse,
                    isImmediatePropagationStopped: returnFalse,
                    isSimulated: false,
                    preventDefault: function() {
                        var e = this.originalEvent;
                        this.isDefaultPrevented = returnTrue;
                        if (e && !this.isSimulated) e.preventDefault();
                    },
                    stopPropagation: function() {
                        var e = this.originalEvent;
                        this.isPropagationStopped = returnTrue;
                        if (e && !this.isSimulated) e.stopPropagation();
                    },
                    stopImmediatePropagation: function() {
                        var e = this.originalEvent;
                        this.isImmediatePropagationStopped = returnTrue;
                        if (e && !this.isSimulated) e.stopImmediatePropagation();
                        this.stopPropagation();
                    }
                };
                jQuery.each({
                    altKey: true,
                    bubbles: true,
                    cancelable: true,
                    changedTouches: true,
                    ctrlKey: true,
                    detail: true,
                    eventPhase: true,
                    metaKey: true,
                    pageX: true,
                    pageY: true,
                    shiftKey: true,
                    view: true,
                    char: true,
                    code: true,
                    charCode: true,
                    key: true,
                    keyCode: true,
                    button: true,
                    buttons: true,
                    clientX: true,
                    clientY: true,
                    offsetX: true,
                    offsetY: true,
                    pointerId: true,
                    pointerType: true,
                    screenX: true,
                    screenY: true,
                    targetTouches: true,
                    toElement: true,
                    touches: true,
                    which: true
                }, jQuery.event.addProp);
                jQuery.each({
                    focus: "focusin",
                    blur: "focusout"
                }, (function(type, delegateType) {
                    function focusMappedHandler(nativeEvent) {
                        if (document.documentMode) {
                            var handle = dataPriv.get(this, "handle"), event = jQuery.event.fix(nativeEvent);
                            event.type = nativeEvent.type === "focusin" ? "focus" : "blur";
                            event.isSimulated = true;
                            handle(nativeEvent);
                            if (event.target === event.currentTarget) handle(event);
                        } else jQuery.event.simulate(delegateType, nativeEvent.target, jQuery.event.fix(nativeEvent));
                    }
                    jQuery.event.special[type] = {
                        setup: function() {
                            var attaches;
                            leverageNative(this, type, true);
                            if (document.documentMode) {
                                attaches = dataPriv.get(this, delegateType);
                                if (!attaches) this.addEventListener(delegateType, focusMappedHandler);
                                dataPriv.set(this, delegateType, (attaches || 0) + 1);
                            } else return false;
                        },
                        trigger: function() {
                            leverageNative(this, type);
                            return true;
                        },
                        teardown: function() {
                            var attaches;
                            if (document.documentMode) {
                                attaches = dataPriv.get(this, delegateType) - 1;
                                if (!attaches) {
                                    this.removeEventListener(delegateType, focusMappedHandler);
                                    dataPriv.remove(this, delegateType);
                                } else dataPriv.set(this, delegateType, attaches);
                            } else return false;
                        },
                        _default: function(event) {
                            return dataPriv.get(event.target, type);
                        },
                        delegateType
                    };
                    jQuery.event.special[delegateType] = {
                        setup: function() {
                            var doc = this.ownerDocument || this.document || this, dataHolder = document.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType);
                            if (!attaches) if (document.documentMode) this.addEventListener(delegateType, focusMappedHandler); else doc.addEventListener(type, focusMappedHandler, true);
                            dataPriv.set(dataHolder, delegateType, (attaches || 0) + 1);
                        },
                        teardown: function() {
                            var doc = this.ownerDocument || this.document || this, dataHolder = document.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType) - 1;
                            if (!attaches) {
                                if (document.documentMode) this.removeEventListener(delegateType, focusMappedHandler); else doc.removeEventListener(type, focusMappedHandler, true);
                                dataPriv.remove(dataHolder, delegateType);
                            } else dataPriv.set(dataHolder, delegateType, attaches);
                        }
                    };
                }));
                jQuery.each({
                    mouseenter: "mouseover",
                    mouseleave: "mouseout",
                    pointerenter: "pointerover",
                    pointerleave: "pointerout"
                }, (function(orig, fix) {
                    jQuery.event.special[orig] = {
                        delegateType: fix,
                        bindType: fix,
                        handle: function(event) {
                            var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
                            if (!related || related !== target && !jQuery.contains(target, related)) {
                                event.type = handleObj.origType;
                                ret = handleObj.handler.apply(this, arguments);
                                event.type = fix;
                            }
                            return ret;
                        }
                    };
                }));
                jQuery.fn.extend({
                    on: function(types, selector, data, fn) {
                        return on(this, types, selector, data, fn);
                    },
                    one: function(types, selector, data, fn) {
                        return on(this, types, selector, data, fn, 1);
                    },
                    off: function(types, selector, fn) {
                        var handleObj, type;
                        if (types && types.preventDefault && types.handleObj) {
                            handleObj = types.handleObj;
                            jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
                            return this;
                        }
                        if (typeof types === "object") {
                            for (type in types) this.off(type, selector, types[type]);
                            return this;
                        }
                        if (selector === false || typeof selector === "function") {
                            fn = selector;
                            selector = void 0;
                        }
                        if (fn === false) fn = returnFalse;
                        return this.each((function() {
                            jQuery.event.remove(this, types, fn, selector);
                        }));
                    }
                });
                var rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
                function manipulationTarget(elem, content) {
                    if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) return jQuery(elem).children("tbody")[0] || elem;
                    return elem;
                }
                function disableScript(elem) {
                    elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
                    return elem;
                }
                function restoreScript(elem) {
                    if ((elem.type || "").slice(0, 5) === "true/") elem.type = elem.type.slice(5); else elem.removeAttribute("type");
                    return elem;
                }
                function cloneCopyEvent(src, dest) {
                    var i, l, type, pdataOld, udataOld, udataCur, events;
                    if (dest.nodeType !== 1) return;
                    if (dataPriv.hasData(src)) {
                        pdataOld = dataPriv.get(src);
                        events = pdataOld.events;
                        if (events) {
                            dataPriv.remove(dest, "handle events");
                            for (type in events) for (i = 0, l = events[type].length; i < l; i++) jQuery.event.add(dest, type, events[type][i]);
                        }
                    }
                    if (dataUser.hasData(src)) {
                        udataOld = dataUser.access(src);
                        udataCur = jQuery.extend({}, udataOld);
                        dataUser.set(dest, udataCur);
                    }
                }
                function fixInput(src, dest) {
                    var nodeName = dest.nodeName.toLowerCase();
                    if (nodeName === "input" && rcheckableType.test(src.type)) dest.checked = src.checked; else if (nodeName === "input" || nodeName === "textarea") dest.defaultValue = src.defaultValue;
                }
                function domManip(collection, args, callback, ignored) {
                    args = flat(args);
                    var fragment, first, scripts, hasScripts, node, doc, i = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = isFunction(value);
                    if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) return collection.each((function(index) {
                        var self = collection.eq(index);
                        if (valueIsFunction) args[0] = value.call(this, index, self.html());
                        domManip(self, args, callback, ignored);
                    }));
                    if (l) {
                        fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
                        first = fragment.firstChild;
                        if (fragment.childNodes.length === 1) fragment = first;
                        if (first || ignored) {
                            scripts = jQuery.map(getAll(fragment, "script"), disableScript);
                            hasScripts = scripts.length;
                            for (;i < l; i++) {
                                node = fragment;
                                if (i !== iNoClone) {
                                    node = jQuery.clone(node, true, true);
                                    if (hasScripts) jQuery.merge(scripts, getAll(node, "script"));
                                }
                                callback.call(collection[i], node, i);
                            }
                            if (hasScripts) {
                                doc = scripts[scripts.length - 1].ownerDocument;
                                jQuery.map(scripts, restoreScript);
                                for (i = 0; i < hasScripts; i++) {
                                    node = scripts[i];
                                    if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) if (node.src && (node.type || "").toLowerCase() !== "module") {
                                        if (jQuery._evalUrl && !node.noModule) jQuery._evalUrl(node.src, {
                                            nonce: node.nonce || node.getAttribute("nonce")
                                        }, doc);
                                    } else DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                                }
                            }
                        }
                    }
                    return collection;
                }
                function remove(elem, selector, keepData) {
                    var node, nodes = selector ? jQuery.filter(selector, elem) : elem, i = 0;
                    for (;(node = nodes[i]) != null; i++) {
                        if (!keepData && node.nodeType === 1) jQuery.cleanData(getAll(node));
                        if (node.parentNode) {
                            if (keepData && isAttached(node)) setGlobalEval(getAll(node, "script"));
                            node.parentNode.removeChild(node);
                        }
                    }
                    return elem;
                }
                jQuery.extend({
                    htmlPrefilter: function(html) {
                        return html;
                    },
                    clone: function(elem, dataAndEvents, deepDataAndEvents) {
                        var i, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);
                        if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
                            destElements = getAll(clone);
                            srcElements = getAll(elem);
                            for (i = 0, l = srcElements.length; i < l; i++) fixInput(srcElements[i], destElements[i]);
                        }
                        if (dataAndEvents) if (deepDataAndEvents) {
                            srcElements = srcElements || getAll(elem);
                            destElements = destElements || getAll(clone);
                            for (i = 0, l = srcElements.length; i < l; i++) cloneCopyEvent(srcElements[i], destElements[i]);
                        } else cloneCopyEvent(elem, clone);
                        destElements = getAll(clone, "script");
                        if (destElements.length > 0) setGlobalEval(destElements, !inPage && getAll(elem, "script"));
                        return clone;
                    },
                    cleanData: function(elems) {
                        var data, elem, type, special = jQuery.event.special, i = 0;
                        for (;(elem = elems[i]) !== void 0; i++) if (acceptData(elem)) {
                            if (data = elem[dataPriv.expando]) {
                                if (data.events) for (type in data.events) if (special[type]) jQuery.event.remove(elem, type); else jQuery.removeEvent(elem, type, data.handle);
                                elem[dataPriv.expando] = void 0;
                            }
                            if (elem[dataUser.expando]) elem[dataUser.expando] = void 0;
                        }
                    }
                });
                jQuery.fn.extend({
                    detach: function(selector) {
                        return remove(this, selector, true);
                    },
                    remove: function(selector) {
                        return remove(this, selector);
                    },
                    text: function(value) {
                        return access(this, (function(value) {
                            return value === void 0 ? jQuery.text(this) : this.empty().each((function() {
                                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) this.textContent = value;
                            }));
                        }), null, value, arguments.length);
                    },
                    append: function() {
                        return domManip(this, arguments, (function(elem) {
                            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                                var target = manipulationTarget(this, elem);
                                target.appendChild(elem);
                            }
                        }));
                    },
                    prepend: function() {
                        return domManip(this, arguments, (function(elem) {
                            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                                var target = manipulationTarget(this, elem);
                                target.insertBefore(elem, target.firstChild);
                            }
                        }));
                    },
                    before: function() {
                        return domManip(this, arguments, (function(elem) {
                            if (this.parentNode) this.parentNode.insertBefore(elem, this);
                        }));
                    },
                    after: function() {
                        return domManip(this, arguments, (function(elem) {
                            if (this.parentNode) this.parentNode.insertBefore(elem, this.nextSibling);
                        }));
                    },
                    empty: function() {
                        var elem, i = 0;
                        for (;(elem = this[i]) != null; i++) if (elem.nodeType === 1) {
                            jQuery.cleanData(getAll(elem, false));
                            elem.textContent = "";
                        }
                        return this;
                    },
                    clone: function(dataAndEvents, deepDataAndEvents) {
                        dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
                        deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
                        return this.map((function() {
                            return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
                        }));
                    },
                    html: function(value) {
                        return access(this, (function(value) {
                            var elem = this[0] || {}, i = 0, l = this.length;
                            if (value === void 0 && elem.nodeType === 1) return elem.innerHTML;
                            if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || [ "", "" ])[1].toLowerCase()]) {
                                value = jQuery.htmlPrefilter(value);
                                try {
                                    for (;i < l; i++) {
                                        elem = this[i] || {};
                                        if (elem.nodeType === 1) {
                                            jQuery.cleanData(getAll(elem, false));
                                            elem.innerHTML = value;
                                        }
                                    }
                                    elem = 0;
                                } catch (e) {}
                            }
                            if (elem) this.empty().append(value);
                        }), null, value, arguments.length);
                    },
                    replaceWith: function() {
                        var ignored = [];
                        return domManip(this, arguments, (function(elem) {
                            var parent = this.parentNode;
                            if (jQuery.inArray(this, ignored) < 0) {
                                jQuery.cleanData(getAll(this));
                                if (parent) parent.replaceChild(elem, this);
                            }
                        }), ignored);
                    }
                });
                jQuery.each({
                    appendTo: "append",
                    prependTo: "prepend",
                    insertBefore: "before",
                    insertAfter: "after",
                    replaceAll: "replaceWith"
                }, (function(name, original) {
                    jQuery.fn[name] = function(selector) {
                        var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i = 0;
                        for (;i <= last; i++) {
                            elems = i === last ? this : this.clone(true);
                            jQuery(insert[i])[original](elems);
                            push.apply(ret, elems.get());
                        }
                        return this.pushStack(ret);
                    };
                }));
                var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
                var rcustomProp = /^--/;
                var getStyles = function(elem) {
                    var view = elem.ownerDocument.defaultView;
                    if (!view || !view.opener) view = window;
                    return view.getComputedStyle(elem);
                };
                var swap = function(elem, options, callback) {
                    var ret, name, old = {};
                    for (name in options) {
                        old[name] = elem.style[name];
                        elem.style[name] = options[name];
                    }
                    ret = callback.call(elem);
                    for (name in options) elem.style[name] = old[name];
                    return ret;
                };
                var rboxStyle = new RegExp(cssExpand.join("|"), "i");
                (function() {
                    function computeStyleTests() {
                        if (!div) return;
                        container.style.cssText = "position:absolute;left:-11111px;width:60px;" + "margin-top:1px;padding:0;border:0";
                        div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;" + "margin:auto;border:1px;padding:1px;" + "width:60%;top:1%";
                        documentElement.appendChild(container).appendChild(div);
                        var divStyle = window.getComputedStyle(div);
                        pixelPositionVal = divStyle.top !== "1%";
                        reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
                        div.style.right = "60%";
                        pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
                        boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
                        div.style.position = "absolute";
                        scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
                        documentElement.removeChild(container);
                        div = null;
                    }
                    function roundPixelMeasures(measure) {
                        return Math.round(parseFloat(measure));
                    }
                    var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = document.createElement("div"), div = document.createElement("div");
                    if (!div.style) return;
                    div.style.backgroundClip = "content-box";
                    div.cloneNode(true).style.backgroundClip = "";
                    support.clearCloneStyle = div.style.backgroundClip === "content-box";
                    jQuery.extend(support, {
                        boxSizingReliable: function() {
                            computeStyleTests();
                            return boxSizingReliableVal;
                        },
                        pixelBoxStyles: function() {
                            computeStyleTests();
                            return pixelBoxStylesVal;
                        },
                        pixelPosition: function() {
                            computeStyleTests();
                            return pixelPositionVal;
                        },
                        reliableMarginLeft: function() {
                            computeStyleTests();
                            return reliableMarginLeftVal;
                        },
                        scrollboxSize: function() {
                            computeStyleTests();
                            return scrollboxSizeVal;
                        },
                        reliableTrDimensions: function() {
                            var table, tr, trChild, trStyle;
                            if (reliableTrDimensionsVal == null) {
                                table = document.createElement("table");
                                tr = document.createElement("tr");
                                trChild = document.createElement("div");
                                table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
                                tr.style.cssText = "border:1px solid";
                                tr.style.height = "1px";
                                trChild.style.height = "9px";
                                trChild.style.display = "block";
                                documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
                                trStyle = window.getComputedStyle(tr);
                                reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight;
                                documentElement.removeChild(table);
                            }
                            return reliableTrDimensionsVal;
                        }
                    });
                })();
                function curCSS(elem, name, computed) {
                    var width, minWidth, maxWidth, ret, isCustomProp = rcustomProp.test(name), style = elem.style;
                    computed = computed || getStyles(elem);
                    if (computed) {
                        ret = computed.getPropertyValue(name) || computed[name];
                        if (isCustomProp && ret) ret = ret.replace(rtrimCSS, "$1") || void 0;
                        if (ret === "" && !isAttached(elem)) ret = jQuery.style(elem, name);
                        if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
                            width = style.width;
                            minWidth = style.minWidth;
                            maxWidth = style.maxWidth;
                            style.minWidth = style.maxWidth = style.width = ret;
                            ret = computed.width;
                            style.width = width;
                            style.minWidth = minWidth;
                            style.maxWidth = maxWidth;
                        }
                    }
                    return ret !== void 0 ? ret + "" : ret;
                }
                function addGetHookIf(conditionFn, hookFn) {
                    return {
                        get: function() {
                            if (conditionFn()) {
                                delete this.get;
                                return;
                            }
                            return (this.get = hookFn).apply(this, arguments);
                        }
                    };
                }
                var cssPrefixes = [ "Webkit", "Moz", "ms" ], emptyStyle = document.createElement("div").style, vendorProps = {};
                function vendorPropName(name) {
                    var capName = name[0].toUpperCase() + name.slice(1), i = cssPrefixes.length;
                    while (i--) {
                        name = cssPrefixes[i] + capName;
                        if (name in emptyStyle) return name;
                    }
                }
                function finalPropName(name) {
                    var final = jQuery.cssProps[name] || vendorProps[name];
                    if (final) return final;
                    if (name in emptyStyle) return name;
                    return vendorProps[name] = vendorPropName(name) || name;
                }
                var rdisplayswap = /^(none|table(?!-c[ea]).+)/, cssShow = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                }, cssNormalTransform = {
                    letterSpacing: "0",
                    fontWeight: "400"
                };
                function setPositiveNumber(_elem, value, subtract) {
                    var matches = rcssNum.exec(value);
                    return matches ? Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
                }
                function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
                    var i = dimension === "width" ? 1 : 0, extra = 0, delta = 0, marginDelta = 0;
                    if (box === (isBorderBox ? "border" : "content")) return 0;
                    for (;i < 4; i += 2) {
                        if (box === "margin") marginDelta += jQuery.css(elem, box + cssExpand[i], true, styles);
                        if (!isBorderBox) {
                            delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                            if (box !== "padding") delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles); else extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                        } else {
                            if (box === "content") delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                            if (box !== "margin") delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                        }
                    }
                    if (!isBorderBox && computedVal >= 0) delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - .5)) || 0;
                    return delta + marginDelta;
                }
                function getWidthOrHeight(elem, dimension, extra) {
                    var styles = getStyles(elem), boxSizingNeeded = !support.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
                    if (rnumnonpx.test(val)) {
                        if (!extra) return val;
                        val = "auto";
                    }
                    if ((!support.boxSizingReliable() && isBorderBox || !support.reliableTrDimensions() && nodeName(elem, "tr") || val === "auto" || !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") && elem.getClientRects().length) {
                        isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";
                        valueIsBorderBox = offsetProp in elem;
                        if (valueIsBorderBox) val = elem[offsetProp];
                    }
                    val = parseFloat(val) || 0;
                    return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, val) + "px";
                }
                jQuery.extend({
                    cssHooks: {
                        opacity: {
                            get: function(elem, computed) {
                                if (computed) {
                                    var ret = curCSS(elem, "opacity");
                                    return ret === "" ? "1" : ret;
                                }
                            }
                        }
                    },
                    cssNumber: {
                        animationIterationCount: true,
                        aspectRatio: true,
                        borderImageSlice: true,
                        columnCount: true,
                        flexGrow: true,
                        flexShrink: true,
                        fontWeight: true,
                        gridArea: true,
                        gridColumn: true,
                        gridColumnEnd: true,
                        gridColumnStart: true,
                        gridRow: true,
                        gridRowEnd: true,
                        gridRowStart: true,
                        lineHeight: true,
                        opacity: true,
                        order: true,
                        orphans: true,
                        scale: true,
                        widows: true,
                        zIndex: true,
                        zoom: true,
                        fillOpacity: true,
                        floodOpacity: true,
                        stopOpacity: true,
                        strokeMiterlimit: true,
                        strokeOpacity: true
                    },
                    cssProps: {},
                    style: function(elem, name, value, extra) {
                        if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) return;
                        var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
                        if (!isCustomProp) name = finalPropName(origName);
                        hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
                        if (value !== void 0) {
                            type = typeof value;
                            if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
                                value = adjustCSS(elem, name, ret);
                                type = "number";
                            }
                            if (value == null || value !== value) return;
                            if (type === "number" && !isCustomProp) value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
                            if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) style[name] = "inherit";
                            if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== void 0) if (isCustomProp) style.setProperty(name, value); else style[name] = value;
                        } else {
                            if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== void 0) return ret;
                            return style[name];
                        }
                    },
                    css: function(elem, name, extra, styles) {
                        var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
                        if (!isCustomProp) name = finalPropName(origName);
                        hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
                        if (hooks && "get" in hooks) val = hooks.get(elem, true, extra);
                        if (val === void 0) val = curCSS(elem, name, styles);
                        if (val === "normal" && name in cssNormalTransform) val = cssNormalTransform[name];
                        if (extra === "" || extra) {
                            num = parseFloat(val);
                            return extra === true || isFinite(num) ? num || 0 : val;
                        }
                        return val;
                    }
                });
                jQuery.each([ "height", "width" ], (function(_i, dimension) {
                    jQuery.cssHooks[dimension] = {
                        get: function(elem, computed, extra) {
                            if (computed) return rdisplayswap.test(jQuery.css(elem, "display")) && (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, (function() {
                                return getWidthOrHeight(elem, dimension, extra);
                            })) : getWidthOrHeight(elem, dimension, extra);
                        },
                        set: function(elem, value, extra) {
                            var matches, styles = getStyles(elem), scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute", boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles) : 0;
                            if (isBorderBox && scrollboxSizeBuggy) subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - .5);
                            if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
                                elem.style[dimension] = value;
                                value = jQuery.css(elem, dimension);
                            }
                            return setPositiveNumber(elem, value, subtract);
                        }
                    };
                }));
                jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, (function(elem, computed) {
                    if (computed) return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
                        marginLeft: 0
                    }, (function() {
                        return elem.getBoundingClientRect().left;
                    }))) + "px";
                }));
                jQuery.each({
                    margin: "",
                    padding: "",
                    border: "Width"
                }, (function(prefix, suffix) {
                    jQuery.cssHooks[prefix + suffix] = {
                        expand: function(value) {
                            var i = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [ value ];
                            for (;i < 4; i++) expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
                            return expanded;
                        }
                    };
                    if (prefix !== "margin") jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
                }));
                jQuery.fn.extend({
                    css: function(name, value) {
                        return access(this, (function(elem, name, value) {
                            var styles, len, map = {}, i = 0;
                            if (Array.isArray(name)) {
                                styles = getStyles(elem);
                                len = name.length;
                                for (;i < len; i++) map[name[i]] = jQuery.css(elem, name[i], false, styles);
                                return map;
                            }
                            return value !== void 0 ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
                        }), name, value, arguments.length > 1);
                    }
                });
                function Tween(elem, options, prop, end, easing) {
                    return new Tween.prototype.init(elem, options, prop, end, easing);
                }
                jQuery.Tween = Tween;
                Tween.prototype = {
                    constructor: Tween,
                    init: function(elem, options, prop, end, easing, unit) {
                        this.elem = elem;
                        this.prop = prop;
                        this.easing = easing || jQuery.easing._default;
                        this.options = options;
                        this.start = this.now = this.cur();
                        this.end = end;
                        this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
                    },
                    cur: function() {
                        var hooks = Tween.propHooks[this.prop];
                        return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
                    },
                    run: function(percent) {
                        var eased, hooks = Tween.propHooks[this.prop];
                        if (this.options.duration) this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration); else this.pos = eased = percent;
                        this.now = (this.end - this.start) * eased + this.start;
                        if (this.options.step) this.options.step.call(this.elem, this.now, this);
                        if (hooks && hooks.set) hooks.set(this); else Tween.propHooks._default.set(this);
                        return this;
                    }
                };
                Tween.prototype.init.prototype = Tween.prototype;
                Tween.propHooks = {
                    _default: {
                        get: function(tween) {
                            var result;
                            if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) return tween.elem[tween.prop];
                            result = jQuery.css(tween.elem, tween.prop, "");
                            return !result || result === "auto" ? 0 : result;
                        },
                        set: function(tween) {
                            if (jQuery.fx.step[tween.prop]) jQuery.fx.step[tween.prop](tween); else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) jQuery.style(tween.elem, tween.prop, tween.now + tween.unit); else tween.elem[tween.prop] = tween.now;
                        }
                    }
                };
                Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
                    set: function(tween) {
                        if (tween.elem.nodeType && tween.elem.parentNode) tween.elem[tween.prop] = tween.now;
                    }
                };
                jQuery.easing = {
                    linear: function(p) {
                        return p;
                    },
                    swing: function(p) {
                        return .5 - Math.cos(p * Math.PI) / 2;
                    },
                    _default: "swing"
                };
                jQuery.fx = Tween.prototype.init;
                jQuery.fx.step = {};
                var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
                function schedule() {
                    if (inProgress) {
                        if (document.hidden === false && window.requestAnimationFrame) window.requestAnimationFrame(schedule); else window.setTimeout(schedule, jQuery.fx.interval);
                        jQuery.fx.tick();
                    }
                }
                function createFxNow() {
                    window.setTimeout((function() {
                        fxNow = void 0;
                    }));
                    return fxNow = Date.now();
                }
                function genFx(type, includeWidth) {
                    var which, i = 0, attrs = {
                        height: type
                    };
                    includeWidth = includeWidth ? 1 : 0;
                    for (;i < 4; i += 2 - includeWidth) {
                        which = cssExpand[i];
                        attrs["margin" + which] = attrs["padding" + which] = type;
                    }
                    if (includeWidth) attrs.opacity = attrs.width = type;
                    return attrs;
                }
                function createTween(value, prop, animation) {
                    var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
                    for (;index < length; index++) if (tween = collection[index].call(animation, prop, value)) return tween;
                }
                function defaultPrefilter(elem, props, opts) {
                    var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
                    if (!opts.queue) {
                        hooks = jQuery._queueHooks(elem, "fx");
                        if (hooks.unqueued == null) {
                            hooks.unqueued = 0;
                            oldfire = hooks.empty.fire;
                            hooks.empty.fire = function() {
                                if (!hooks.unqueued) oldfire();
                            };
                        }
                        hooks.unqueued++;
                        anim.always((function() {
                            anim.always((function() {
                                hooks.unqueued--;
                                if (!jQuery.queue(elem, "fx").length) hooks.empty.fire();
                            }));
                        }));
                    }
                    for (prop in props) {
                        value = props[prop];
                        if (rfxtypes.test(value)) {
                            delete props[prop];
                            toggle = toggle || value === "toggle";
                            if (value === (hidden ? "hide" : "show")) if (value === "show" && dataShow && dataShow[prop] !== void 0) hidden = true; else continue;
                            orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
                        }
                    }
                    propTween = !jQuery.isEmptyObject(props);
                    if (!propTween && jQuery.isEmptyObject(orig)) return;
                    if (isBox && elem.nodeType === 1) {
                        opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
                        restoreDisplay = dataShow && dataShow.display;
                        if (restoreDisplay == null) restoreDisplay = dataPriv.get(elem, "display");
                        display = jQuery.css(elem, "display");
                        if (display === "none") if (restoreDisplay) display = restoreDisplay; else {
                            showHide([ elem ], true);
                            restoreDisplay = elem.style.display || restoreDisplay;
                            display = jQuery.css(elem, "display");
                            showHide([ elem ]);
                        }
                        if (display === "inline" || display === "inline-block" && restoreDisplay != null) if (jQuery.css(elem, "float") === "none") {
                            if (!propTween) {
                                anim.done((function() {
                                    style.display = restoreDisplay;
                                }));
                                if (restoreDisplay == null) {
                                    display = style.display;
                                    restoreDisplay = display === "none" ? "" : display;
                                }
                            }
                            style.display = "inline-block";
                        }
                    }
                    if (opts.overflow) {
                        style.overflow = "hidden";
                        anim.always((function() {
                            style.overflow = opts.overflow[0];
                            style.overflowX = opts.overflow[1];
                            style.overflowY = opts.overflow[2];
                        }));
                    }
                    propTween = false;
                    for (prop in orig) {
                        if (!propTween) {
                            if (dataShow) {
                                if ("hidden" in dataShow) hidden = dataShow.hidden;
                            } else dataShow = dataPriv.access(elem, "fxshow", {
                                display: restoreDisplay
                            });
                            if (toggle) dataShow.hidden = !hidden;
                            if (hidden) showHide([ elem ], true);
                            anim.done((function() {
                                if (!hidden) showHide([ elem ]);
                                dataPriv.remove(elem, "fxshow");
                                for (prop in orig) jQuery.style(elem, prop, orig[prop]);
                            }));
                        }
                        propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
                        if (!(prop in dataShow)) {
                            dataShow[prop] = propTween.start;
                            if (hidden) {
                                propTween.end = propTween.start;
                                propTween.start = 0;
                            }
                        }
                    }
                }
                function propFilter(props, specialEasing) {
                    var index, name, easing, value, hooks;
                    for (index in props) {
                        name = camelCase(index);
                        easing = specialEasing[name];
                        value = props[index];
                        if (Array.isArray(value)) {
                            easing = value[1];
                            value = props[index] = value[0];
                        }
                        if (index !== name) {
                            props[name] = value;
                            delete props[index];
                        }
                        hooks = jQuery.cssHooks[name];
                        if (hooks && "expand" in hooks) {
                            value = hooks.expand(value);
                            delete props[name];
                            for (index in value) if (!(index in props)) {
                                props[index] = value[index];
                                specialEasing[index] = easing;
                            }
                        } else specialEasing[name] = easing;
                    }
                }
                function Animation(elem, properties, options) {
                    var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery.Deferred().always((function() {
                        delete tick.elem;
                    })), tick = function() {
                        if (stopped) return false;
                        var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index = 0, length = animation.tweens.length;
                        for (;index < length; index++) animation.tweens[index].run(percent);
                        deferred.notifyWith(elem, [ animation, percent, remaining ]);
                        if (percent < 1 && length) return remaining;
                        if (!length) deferred.notifyWith(elem, [ animation, 1, 0 ]);
                        deferred.resolveWith(elem, [ animation ]);
                        return false;
                    }, animation = deferred.promise({
                        elem,
                        props: jQuery.extend({}, properties),
                        opts: jQuery.extend(true, {
                            specialEasing: {},
                            easing: jQuery.easing._default
                        }, options),
                        originalProperties: properties,
                        originalOptions: options,
                        startTime: fxNow || createFxNow(),
                        duration: options.duration,
                        tweens: [],
                        createTween: function(prop, end) {
                            var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                            animation.tweens.push(tween);
                            return tween;
                        },
                        stop: function(gotoEnd) {
                            var index = 0, length = gotoEnd ? animation.tweens.length : 0;
                            if (stopped) return this;
                            stopped = true;
                            for (;index < length; index++) animation.tweens[index].run(1);
                            if (gotoEnd) {
                                deferred.notifyWith(elem, [ animation, 1, 0 ]);
                                deferred.resolveWith(elem, [ animation, gotoEnd ]);
                            } else deferred.rejectWith(elem, [ animation, gotoEnd ]);
                            return this;
                        }
                    }), props = animation.props;
                    propFilter(props, animation.opts.specialEasing);
                    for (;index < length; index++) {
                        result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
                        if (result) {
                            if (isFunction(result.stop)) jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
                            return result;
                        }
                    }
                    jQuery.map(props, createTween, animation);
                    if (isFunction(animation.opts.start)) animation.opts.start.call(elem, animation);
                    animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
                    jQuery.fx.timer(jQuery.extend(tick, {
                        elem,
                        anim: animation,
                        queue: animation.opts.queue
                    }));
                    return animation;
                }
                jQuery.Animation = jQuery.extend(Animation, {
                    tweeners: {
                        "*": [ function(prop, value) {
                            var tween = this.createTween(prop, value);
                            adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
                            return tween;
                        } ]
                    },
                    tweener: function(props, callback) {
                        if (isFunction(props)) {
                            callback = props;
                            props = [ "*" ];
                        } else props = props.match(rnothtmlwhite);
                        var prop, index = 0, length = props.length;
                        for (;index < length; index++) {
                            prop = props[index];
                            Animation.tweeners[prop] = Animation.tweeners[prop] || [];
                            Animation.tweeners[prop].unshift(callback);
                        }
                    },
                    prefilters: [ defaultPrefilter ],
                    prefilter: function(callback, prepend) {
                        if (prepend) Animation.prefilters.unshift(callback); else Animation.prefilters.push(callback);
                    }
                });
                jQuery.speed = function(speed, easing, fn) {
                    var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
                        complete: fn || !fn && easing || isFunction(speed) && speed,
                        duration: speed,
                        easing: fn && easing || easing && !isFunction(easing) && easing
                    };
                    if (jQuery.fx.off) opt.duration = 0; else if (typeof opt.duration !== "number") if (opt.duration in jQuery.fx.speeds) opt.duration = jQuery.fx.speeds[opt.duration]; else opt.duration = jQuery.fx.speeds._default;
                    if (opt.queue == null || opt.queue === true) opt.queue = "fx";
                    opt.old = opt.complete;
                    opt.complete = function() {
                        if (isFunction(opt.old)) opt.old.call(this);
                        if (opt.queue) jQuery.dequeue(this, opt.queue);
                    };
                    return opt;
                };
                jQuery.fn.extend({
                    fadeTo: function(speed, to, easing, callback) {
                        return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({
                            opacity: to
                        }, speed, easing, callback);
                    },
                    animate: function(prop, speed, easing, callback) {
                        var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function() {
                            var anim = Animation(this, jQuery.extend({}, prop), optall);
                            if (empty || dataPriv.get(this, "finish")) anim.stop(true);
                        };
                        doAnimation.finish = doAnimation;
                        return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
                    },
                    stop: function(type, clearQueue, gotoEnd) {
                        var stopQueue = function(hooks) {
                            var stop = hooks.stop;
                            delete hooks.stop;
                            stop(gotoEnd);
                        };
                        if (typeof type !== "string") {
                            gotoEnd = clearQueue;
                            clearQueue = type;
                            type = void 0;
                        }
                        if (clearQueue) this.queue(type || "fx", []);
                        return this.each((function() {
                            var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery.timers, data = dataPriv.get(this);
                            if (index) {
                                if (data[index] && data[index].stop) stopQueue(data[index]);
                            } else for (index in data) if (data[index] && data[index].stop && rrun.test(index)) stopQueue(data[index]);
                            for (index = timers.length; index--; ) if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                                timers[index].anim.stop(gotoEnd);
                                dequeue = false;
                                timers.splice(index, 1);
                            }
                            if (dequeue || !gotoEnd) jQuery.dequeue(this, type);
                        }));
                    },
                    finish: function(type) {
                        if (type !== false) type = type || "fx";
                        return this.each((function() {
                            var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
                            data.finish = true;
                            jQuery.queue(this, type, []);
                            if (hooks && hooks.stop) hooks.stop.call(this, true);
                            for (index = timers.length; index--; ) if (timers[index].elem === this && timers[index].queue === type) {
                                timers[index].anim.stop(true);
                                timers.splice(index, 1);
                            }
                            for (index = 0; index < length; index++) if (queue[index] && queue[index].finish) queue[index].finish.call(this);
                            delete data.finish;
                        }));
                    }
                });
                jQuery.each([ "toggle", "show", "hide" ], (function(_i, name) {
                    var cssFn = jQuery.fn[name];
                    jQuery.fn[name] = function(speed, easing, callback) {
                        return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
                    };
                }));
                jQuery.each({
                    slideDown: genFx("show"),
                    slideUp: genFx("hide"),
                    slideToggle: genFx("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, (function(name, props) {
                    jQuery.fn[name] = function(speed, easing, callback) {
                        return this.animate(props, speed, easing, callback);
                    };
                }));
                jQuery.timers = [];
                jQuery.fx.tick = function() {
                    var timer, i = 0, timers = jQuery.timers;
                    fxNow = Date.now();
                    for (;i < timers.length; i++) {
                        timer = timers[i];
                        if (!timer() && timers[i] === timer) timers.splice(i--, 1);
                    }
                    if (!timers.length) jQuery.fx.stop();
                    fxNow = void 0;
                };
                jQuery.fx.timer = function(timer) {
                    jQuery.timers.push(timer);
                    jQuery.fx.start();
                };
                jQuery.fx.interval = 13;
                jQuery.fx.start = function() {
                    if (inProgress) return;
                    inProgress = true;
                    schedule();
                };
                jQuery.fx.stop = function() {
                    inProgress = null;
                };
                jQuery.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                };
                jQuery.fn.delay = function(time, type) {
                    time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
                    type = type || "fx";
                    return this.queue(type, (function(next, hooks) {
                        var timeout = window.setTimeout(next, time);
                        hooks.stop = function() {
                            window.clearTimeout(timeout);
                        };
                    }));
                };
                (function() {
                    var input = document.createElement("input"), select = document.createElement("select"), opt = select.appendChild(document.createElement("option"));
                    input.type = "checkbox";
                    support.checkOn = input.value !== "";
                    support.optSelected = opt.selected;
                    input = document.createElement("input");
                    input.value = "t";
                    input.type = "radio";
                    support.radioValue = input.value === "t";
                })();
                var boolHook, attrHandle = jQuery.expr.attrHandle;
                jQuery.fn.extend({
                    attr: function(name, value) {
                        return access(this, jQuery.attr, name, value, arguments.length > 1);
                    },
                    removeAttr: function(name) {
                        return this.each((function() {
                            jQuery.removeAttr(this, name);
                        }));
                    }
                });
                jQuery.extend({
                    attr: function(elem, name, value) {
                        var ret, hooks, nType = elem.nodeType;
                        if (nType === 3 || nType === 8 || nType === 2) return;
                        if (typeof elem.getAttribute === "undefined") return jQuery.prop(elem, name, value);
                        if (nType !== 1 || !jQuery.isXMLDoc(elem)) hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : void 0);
                        if (value !== void 0) {
                            if (value === null) {
                                jQuery.removeAttr(elem, name);
                                return;
                            }
                            if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) return ret;
                            elem.setAttribute(name, value + "");
                            return value;
                        }
                        if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) return ret;
                        ret = jQuery.find.attr(elem, name);
                        return ret == null ? void 0 : ret;
                    },
                    attrHooks: {
                        type: {
                            set: function(elem, value) {
                                if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
                                    var val = elem.value;
                                    elem.setAttribute("type", value);
                                    if (val) elem.value = val;
                                    return value;
                                }
                            }
                        }
                    },
                    removeAttr: function(elem, value) {
                        var name, i = 0, attrNames = value && value.match(rnothtmlwhite);
                        if (attrNames && elem.nodeType === 1) while (name = attrNames[i++]) elem.removeAttribute(name);
                    }
                });
                boolHook = {
                    set: function(elem, value, name) {
                        if (value === false) jQuery.removeAttr(elem, name); else elem.setAttribute(name, name);
                        return name;
                    }
                };
                jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), (function(_i, name) {
                    var getter = attrHandle[name] || jQuery.find.attr;
                    attrHandle[name] = function(elem, name, isXML) {
                        var ret, handle, lowercaseName = name.toLowerCase();
                        if (!isXML) {
                            handle = attrHandle[lowercaseName];
                            attrHandle[lowercaseName] = ret;
                            ret = getter(elem, name, isXML) != null ? lowercaseName : null;
                            attrHandle[lowercaseName] = handle;
                        }
                        return ret;
                    };
                }));
                var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
                jQuery.fn.extend({
                    prop: function(name, value) {
                        return access(this, jQuery.prop, name, value, arguments.length > 1);
                    },
                    removeProp: function(name) {
                        return this.each((function() {
                            delete this[jQuery.propFix[name] || name];
                        }));
                    }
                });
                jQuery.extend({
                    prop: function(elem, name, value) {
                        var ret, hooks, nType = elem.nodeType;
                        if (nType === 3 || nType === 8 || nType === 2) return;
                        if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                            name = jQuery.propFix[name] || name;
                            hooks = jQuery.propHooks[name];
                        }
                        if (value !== void 0) {
                            if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) return ret;
                            return elem[name] = value;
                        }
                        if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) return ret;
                        return elem[name];
                    },
                    propHooks: {
                        tabIndex: {
                            get: function(elem) {
                                var tabindex = jQuery.find.attr(elem, "tabindex");
                                if (tabindex) return parseInt(tabindex, 10);
                                if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) return 0;
                                return -1;
                            }
                        }
                    },
                    propFix: {
                        for: "htmlFor",
                        class: "className"
                    }
                });
                if (!support.optSelected) jQuery.propHooks.selected = {
                    get: function(elem) {
                        var parent = elem.parentNode;
                        if (parent && parent.parentNode) parent.parentNode.selectedIndex;
                        return null;
                    },
                    set: function(elem) {
                        var parent = elem.parentNode;
                        if (parent) {
                            parent.selectedIndex;
                            if (parent.parentNode) parent.parentNode.selectedIndex;
                        }
                    }
                };
                jQuery.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], (function() {
                    jQuery.propFix[this.toLowerCase()] = this;
                }));
                function stripAndCollapse(value) {
                    var tokens = value.match(rnothtmlwhite) || [];
                    return tokens.join(" ");
                }
                function getClass(elem) {
                    return elem.getAttribute && elem.getAttribute("class") || "";
                }
                function classesToArray(value) {
                    if (Array.isArray(value)) return value;
                    if (typeof value === "string") return value.match(rnothtmlwhite) || [];
                    return [];
                }
                jQuery.fn.extend({
                    addClass: function(value) {
                        var classNames, cur, curValue, className, i, finalValue;
                        if (isFunction(value)) return this.each((function(j) {
                            jQuery(this).addClass(value.call(this, j, getClass(this)));
                        }));
                        classNames = classesToArray(value);
                        if (classNames.length) return this.each((function() {
                            curValue = getClass(this);
                            cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                            if (cur) {
                                for (i = 0; i < classNames.length; i++) {
                                    className = classNames[i];
                                    if (cur.indexOf(" " + className + " ") < 0) cur += className + " ";
                                }
                                finalValue = stripAndCollapse(cur);
                                if (curValue !== finalValue) this.setAttribute("class", finalValue);
                            }
                        }));
                        return this;
                    },
                    removeClass: function(value) {
                        var classNames, cur, curValue, className, i, finalValue;
                        if (isFunction(value)) return this.each((function(j) {
                            jQuery(this).removeClass(value.call(this, j, getClass(this)));
                        }));
                        if (!arguments.length) return this.attr("class", "");
                        classNames = classesToArray(value);
                        if (classNames.length) return this.each((function() {
                            curValue = getClass(this);
                            cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                            if (cur) {
                                for (i = 0; i < classNames.length; i++) {
                                    className = classNames[i];
                                    while (cur.indexOf(" " + className + " ") > -1) cur = cur.replace(" " + className + " ", " ");
                                }
                                finalValue = stripAndCollapse(cur);
                                if (curValue !== finalValue) this.setAttribute("class", finalValue);
                            }
                        }));
                        return this;
                    },
                    toggleClass: function(value, stateVal) {
                        var classNames, className, i, self, type = typeof value, isValidValue = type === "string" || Array.isArray(value);
                        if (isFunction(value)) return this.each((function(i) {
                            jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
                        }));
                        if (typeof stateVal === "boolean" && isValidValue) return stateVal ? this.addClass(value) : this.removeClass(value);
                        classNames = classesToArray(value);
                        return this.each((function() {
                            if (isValidValue) {
                                self = jQuery(this);
                                for (i = 0; i < classNames.length; i++) {
                                    className = classNames[i];
                                    if (self.hasClass(className)) self.removeClass(className); else self.addClass(className);
                                }
                            } else if (value === void 0 || type === "boolean") {
                                className = getClass(this);
                                if (className) dataPriv.set(this, "__className__", className);
                                if (this.setAttribute) this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
                            }
                        }));
                    },
                    hasClass: function(selector) {
                        var className, elem, i = 0;
                        className = " " + selector + " ";
                        while (elem = this[i++]) if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) return true;
                        return false;
                    }
                });
                var rreturn = /\r/g;
                jQuery.fn.extend({
                    val: function(value) {
                        var hooks, ret, valueIsFunction, elem = this[0];
                        if (!arguments.length) {
                            if (elem) {
                                hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
                                if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== void 0) return ret;
                                ret = elem.value;
                                if (typeof ret === "string") return ret.replace(rreturn, "");
                                return ret == null ? "" : ret;
                            }
                            return;
                        }
                        valueIsFunction = isFunction(value);
                        return this.each((function(i) {
                            var val;
                            if (this.nodeType !== 1) return;
                            if (valueIsFunction) val = value.call(this, i, jQuery(this).val()); else val = value;
                            if (val == null) val = ""; else if (typeof val === "number") val += ""; else if (Array.isArray(val)) val = jQuery.map(val, (function(value) {
                                return value == null ? "" : value + "";
                            }));
                            hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
                            if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === void 0) this.value = val;
                        }));
                    }
                });
                jQuery.extend({
                    valHooks: {
                        option: {
                            get: function(elem) {
                                var val = jQuery.find.attr(elem, "value");
                                return val != null ? val : stripAndCollapse(jQuery.text(elem));
                            }
                        },
                        select: {
                            get: function(elem) {
                                var value, option, i, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max = one ? index + 1 : options.length;
                                if (index < 0) i = max; else i = one ? index : 0;
                                for (;i < max; i++) {
                                    option = options[i];
                                    if ((option.selected || i === index) && !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                                        value = jQuery(option).val();
                                        if (one) return value;
                                        values.push(value);
                                    }
                                }
                                return values;
                            },
                            set: function(elem, value) {
                                var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i = options.length;
                                while (i--) {
                                    option = options[i];
                                    if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) optionSet = true;
                                }
                                if (!optionSet) elem.selectedIndex = -1;
                                return values;
                            }
                        }
                    }
                });
                jQuery.each([ "radio", "checkbox" ], (function() {
                    jQuery.valHooks[this] = {
                        set: function(elem, value) {
                            if (Array.isArray(value)) return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
                        }
                    };
                    if (!support.checkOn) jQuery.valHooks[this].get = function(elem) {
                        return elem.getAttribute("value") === null ? "on" : elem.value;
                    };
                }));
                var location = window.location;
                var nonce = {
                    guid: Date.now()
                };
                var rquery = /\?/;
                jQuery.parseXML = function(data) {
                    var xml, parserErrorElem;
                    if (!data || typeof data !== "string") return null;
                    try {
                        xml = (new window.DOMParser).parseFromString(data, "text/xml");
                    } catch (e) {}
                    parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];
                    if (!xml || parserErrorElem) jQuery.error("Invalid XML: " + (parserErrorElem ? jQuery.map(parserErrorElem.childNodes, (function(el) {
                        return el.textContent;
                    })).join("\n") : data));
                    return xml;
                };
                var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e) {
                    e.stopPropagation();
                };
                jQuery.extend(jQuery.event, {
                    trigger: function(event, data, elem, onlyHandlers) {
                        var i, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [ elem || document ], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
                        cur = lastElement = tmp = elem = elem || document;
                        if (elem.nodeType === 3 || elem.nodeType === 8) return;
                        if (rfocusMorph.test(type + jQuery.event.triggered)) return;
                        if (type.indexOf(".") > -1) {
                            namespaces = type.split(".");
                            type = namespaces.shift();
                            namespaces.sort();
                        }
                        ontype = type.indexOf(":") < 0 && "on" + type;
                        event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
                        event.isTrigger = onlyHandlers ? 2 : 3;
                        event.namespace = namespaces.join(".");
                        event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                        event.result = void 0;
                        if (!event.target) event.target = elem;
                        data = data == null ? [ event ] : jQuery.makeArray(data, [ event ]);
                        special = jQuery.event.special[type] || {};
                        if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) return;
                        if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
                            bubbleType = special.delegateType || type;
                            if (!rfocusMorph.test(bubbleType + type)) cur = cur.parentNode;
                            for (;cur; cur = cur.parentNode) {
                                eventPath.push(cur);
                                tmp = cur;
                            }
                            if (tmp === (elem.ownerDocument || document)) eventPath.push(tmp.defaultView || tmp.parentWindow || window);
                        }
                        i = 0;
                        while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
                            lastElement = cur;
                            event.type = i > 1 ? bubbleType : special.bindType || type;
                            handle = (dataPriv.get(cur, "events") || Object.create(null))[event.type] && dataPriv.get(cur, "handle");
                            if (handle) handle.apply(cur, data);
                            handle = ontype && cur[ontype];
                            if (handle && handle.apply && acceptData(cur)) {
                                event.result = handle.apply(cur, data);
                                if (event.result === false) event.preventDefault();
                            }
                        }
                        event.type = type;
                        if (!onlyHandlers && !event.isDefaultPrevented()) if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                            tmp = elem[ontype];
                            if (tmp) elem[ontype] = null;
                            jQuery.event.triggered = type;
                            if (event.isPropagationStopped()) lastElement.addEventListener(type, stopPropagationCallback);
                            elem[type]();
                            if (event.isPropagationStopped()) lastElement.removeEventListener(type, stopPropagationCallback);
                            jQuery.event.triggered = void 0;
                            if (tmp) elem[ontype] = tmp;
                        }
                        return event.result;
                    },
                    simulate: function(type, elem, event) {
                        var e = jQuery.extend(new jQuery.Event, event, {
                            type,
                            isSimulated: true
                        });
                        jQuery.event.trigger(e, null, elem);
                    }
                });
                jQuery.fn.extend({
                    trigger: function(type, data) {
                        return this.each((function() {
                            jQuery.event.trigger(type, data, this);
                        }));
                    },
                    triggerHandler: function(type, data) {
                        var elem = this[0];
                        if (elem) return jQuery.event.trigger(type, data, elem, true);
                    }
                });
                var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
                function buildParams(prefix, obj, traditional, add) {
                    var name;
                    if (Array.isArray(obj)) jQuery.each(obj, (function(i, v) {
                        if (traditional || rbracket.test(prefix)) add(prefix, v); else buildParams(prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]", v, traditional, add);
                    })); else if (!traditional && toType(obj) === "object") for (name in obj) buildParams(prefix + "[" + name + "]", obj[name], traditional, add); else add(prefix, obj);
                }
                jQuery.param = function(a, traditional) {
                    var prefix, s = [], add = function(key, valueOrFunction) {
                        var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
                        s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
                    };
                    if (a == null) return "";
                    if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) jQuery.each(a, (function() {
                        add(this.name, this.value);
                    })); else for (prefix in a) buildParams(prefix, a[prefix], traditional, add);
                    return s.join("&");
                };
                jQuery.fn.extend({
                    serialize: function() {
                        return jQuery.param(this.serializeArray());
                    },
                    serializeArray: function() {
                        return this.map((function() {
                            var elements = jQuery.prop(this, "elements");
                            return elements ? jQuery.makeArray(elements) : this;
                        })).filter((function() {
                            var type = this.type;
                            return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
                        })).map((function(_i, elem) {
                            var val = jQuery(this).val();
                            if (val == null) return null;
                            if (Array.isArray(val)) return jQuery.map(val, (function(val) {
                                return {
                                    name: elem.name,
                                    value: val.replace(rCRLF, "\r\n")
                                };
                            }));
                            return {
                                name: elem.name,
                                value: val.replace(rCRLF, "\r\n")
                            };
                        })).get();
                    }
                });
                var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/gm, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document.createElement("a");
                originAnchor.href = location.href;
                function addToPrefiltersOrTransports(structure) {
                    return function(dataTypeExpression, func) {
                        if (typeof dataTypeExpression !== "string") {
                            func = dataTypeExpression;
                            dataTypeExpression = "*";
                        }
                        var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
                        if (isFunction(func)) while (dataType = dataTypes[i++]) if (dataType[0] === "+") {
                            dataType = dataType.slice(1) || "*";
                            (structure[dataType] = structure[dataType] || []).unshift(func);
                        } else (structure[dataType] = structure[dataType] || []).push(func);
                    };
                }
                function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
                    var inspected = {}, seekingTransport = structure === transports;
                    function inspect(dataType) {
                        var selected;
                        inspected[dataType] = true;
                        jQuery.each(structure[dataType] || [], (function(_, prefilterOrFactory) {
                            var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                            if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                                options.dataTypes.unshift(dataTypeOrTransport);
                                inspect(dataTypeOrTransport);
                                return false;
                            } else if (seekingTransport) return !(selected = dataTypeOrTransport);
                        }));
                        return selected;
                    }
                    return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
                }
                function ajaxExtend(target, src) {
                    var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
                    for (key in src) if (src[key] !== void 0) (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
                    if (deep) jQuery.extend(true, target, deep);
                    return target;
                }
                function ajaxHandleResponses(s, jqXHR, responses) {
                    var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
                    while (dataTypes[0] === "*") {
                        dataTypes.shift();
                        if (ct === void 0) ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
                    }
                    if (ct) for (type in contents) if (contents[type] && contents[type].test(ct)) {
                        dataTypes.unshift(type);
                        break;
                    }
                    if (dataTypes[0] in responses) finalDataType = dataTypes[0]; else {
                        for (type in responses) {
                            if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                                finalDataType = type;
                                break;
                            }
                            if (!firstDataType) firstDataType = type;
                        }
                        finalDataType = finalDataType || firstDataType;
                    }
                    if (finalDataType) {
                        if (finalDataType !== dataTypes[0]) dataTypes.unshift(finalDataType);
                        return responses[finalDataType];
                    }
                }
                function ajaxConvert(s, response, jqXHR, isSuccess) {
                    var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s.dataTypes.slice();
                    if (dataTypes[1]) for (conv in s.converters) converters[conv.toLowerCase()] = s.converters[conv];
                    current = dataTypes.shift();
                    while (current) {
                        if (s.responseFields[current]) jqXHR[s.responseFields[current]] = response;
                        if (!prev && isSuccess && s.dataFilter) response = s.dataFilter(response, s.dataType);
                        prev = current;
                        current = dataTypes.shift();
                        if (current) if (current === "*") current = prev; else if (prev !== "*" && prev !== current) {
                            conv = converters[prev + " " + current] || converters["* " + current];
                            if (!conv) for (conv2 in converters) {
                                tmp = conv2.split(" ");
                                if (tmp[1] === current) {
                                    conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                                    if (conv) {
                                        if (conv === true) conv = converters[conv2]; else if (converters[conv2] !== true) {
                                            current = tmp[0];
                                            dataTypes.unshift(tmp[1]);
                                        }
                                        break;
                                    }
                                }
                            }
                            if (conv !== true) if (conv && s.throws) response = conv(response); else try {
                                response = conv(response);
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: conv ? e : "No conversion from " + prev + " to " + current
                                };
                            }
                        }
                    }
                    return {
                        state: "success",
                        data: response
                    };
                }
                jQuery.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: location.href,
                        type: "GET",
                        isLocal: rlocalProtocol.test(location.protocol),
                        global: true,
                        processData: true,
                        async: true,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: {
                            "*": allTypes,
                            text: "text/plain",
                            html: "text/html",
                            xml: "application/xml, text/xml",
                            json: "application/json, text/javascript"
                        },
                        contents: {
                            xml: /\bxml\b/,
                            html: /\bhtml/,
                            json: /\bjson\b/
                        },
                        responseFields: {
                            xml: "responseXML",
                            text: "responseText",
                            json: "responseJSON"
                        },
                        converters: {
                            "* text": String,
                            "text html": true,
                            "text json": JSON.parse,
                            "text xml": jQuery.parseXML
                        },
                        flatOptions: {
                            url: true,
                            context: true
                        }
                    },
                    ajaxSetup: function(target, settings) {
                        return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
                    },
                    ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
                    ajaxTransport: addToPrefiltersOrTransports(transports),
                    ajax: function(url, options) {
                        if (typeof url === "object") {
                            options = url;
                            url = void 0;
                        }
                        options = options || {};
                        var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed, fireGlobals, i, uncached, s = jQuery.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
                            readyState: 0,
                            getResponseHeader: function(key) {
                                var match;
                                if (completed) {
                                    if (!responseHeaders) {
                                        responseHeaders = {};
                                        while (match = rheaders.exec(responseHeadersString)) responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                                    }
                                    match = responseHeaders[key.toLowerCase() + " "];
                                }
                                return match == null ? null : match.join(", ");
                            },
                            getAllResponseHeaders: function() {
                                return completed ? responseHeadersString : null;
                            },
                            setRequestHeader: function(name, value) {
                                if (completed == null) {
                                    name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                                    requestHeaders[name] = value;
                                }
                                return this;
                            },
                            overrideMimeType: function(type) {
                                if (completed == null) s.mimeType = type;
                                return this;
                            },
                            statusCode: function(map) {
                                var code;
                                if (map) if (completed) jqXHR.always(map[jqXHR.status]); else for (code in map) statusCode[code] = [ statusCode[code], map[code] ];
                                return this;
                            },
                            abort: function(statusText) {
                                var finalText = statusText || strAbort;
                                if (transport) transport.abort(finalText);
                                done(0, finalText);
                                return this;
                            }
                        };
                        deferred.promise(jqXHR);
                        s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");
                        s.type = options.method || options.type || s.method || s.type;
                        s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [ "" ];
                        if (s.crossDomain == null) {
                            urlAnchor = document.createElement("a");
                            try {
                                urlAnchor.href = s.url;
                                urlAnchor.href = urlAnchor.href;
                                s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
                            } catch (e) {
                                s.crossDomain = true;
                            }
                        }
                        if (s.data && s.processData && typeof s.data !== "string") s.data = jQuery.param(s.data, s.traditional);
                        inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
                        if (completed) return jqXHR;
                        fireGlobals = jQuery.event && s.global;
                        if (fireGlobals && jQuery.active++ === 0) jQuery.event.trigger("ajaxStart");
                        s.type = s.type.toUpperCase();
                        s.hasContent = !rnoContent.test(s.type);
                        cacheURL = s.url.replace(rhash, "");
                        if (!s.hasContent) {
                            uncached = s.url.slice(cacheURL.length);
                            if (s.data && (s.processData || typeof s.data === "string")) {
                                cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
                                delete s.data;
                            }
                            if (s.cache === false) {
                                cacheURL = cacheURL.replace(rantiCache, "$1");
                                uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
                            }
                            s.url = cacheURL + uncached;
                        } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) s.data = s.data.replace(r20, "+");
                        if (s.ifModified) {
                            if (jQuery.lastModified[cacheURL]) jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
                            if (jQuery.etag[cacheURL]) jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
                        }
                        if (s.data && s.hasContent && s.contentType !== false || options.contentType) jqXHR.setRequestHeader("Content-Type", s.contentType);
                        jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
                        for (i in s.headers) jqXHR.setRequestHeader(i, s.headers[i]);
                        if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) return jqXHR.abort();
                        strAbort = "abort";
                        completeDeferred.add(s.complete);
                        jqXHR.done(s.success);
                        jqXHR.fail(s.error);
                        transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
                        if (!transport) done(-1, "No Transport"); else {
                            jqXHR.readyState = 1;
                            if (fireGlobals) globalEventContext.trigger("ajaxSend", [ jqXHR, s ]);
                            if (completed) return jqXHR;
                            if (s.async && s.timeout > 0) timeoutTimer = window.setTimeout((function() {
                                jqXHR.abort("timeout");
                            }), s.timeout);
                            try {
                                completed = false;
                                transport.send(requestHeaders, done);
                            } catch (e) {
                                if (completed) throw e;
                                done(-1, e);
                            }
                        }
                        function done(status, nativeStatusText, responses, headers) {
                            var isSuccess, success, error, response, modified, statusText = nativeStatusText;
                            if (completed) return;
                            completed = true;
                            if (timeoutTimer) window.clearTimeout(timeoutTimer);
                            transport = void 0;
                            responseHeadersString = headers || "";
                            jqXHR.readyState = status > 0 ? 4 : 0;
                            isSuccess = status >= 200 && status < 300 || status === 304;
                            if (responses) response = ajaxHandleResponses(s, jqXHR, responses);
                            if (!isSuccess && jQuery.inArray("script", s.dataTypes) > -1 && jQuery.inArray("json", s.dataTypes) < 0) s.converters["text script"] = function() {};
                            response = ajaxConvert(s, response, jqXHR, isSuccess);
                            if (isSuccess) {
                                if (s.ifModified) {
                                    modified = jqXHR.getResponseHeader("Last-Modified");
                                    if (modified) jQuery.lastModified[cacheURL] = modified;
                                    modified = jqXHR.getResponseHeader("etag");
                                    if (modified) jQuery.etag[cacheURL] = modified;
                                }
                                if (status === 204 || s.type === "HEAD") statusText = "nocontent"; else if (status === 304) statusText = "notmodified"; else {
                                    statusText = response.state;
                                    success = response.data;
                                    error = response.error;
                                    isSuccess = !error;
                                }
                            } else {
                                error = statusText;
                                if (status || !statusText) {
                                    statusText = "error";
                                    if (status < 0) status = 0;
                                }
                            }
                            jqXHR.status = status;
                            jqXHR.statusText = (nativeStatusText || statusText) + "";
                            if (isSuccess) deferred.resolveWith(callbackContext, [ success, statusText, jqXHR ]); else deferred.rejectWith(callbackContext, [ jqXHR, statusText, error ]);
                            jqXHR.statusCode(statusCode);
                            statusCode = void 0;
                            if (fireGlobals) globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [ jqXHR, s, isSuccess ? success : error ]);
                            completeDeferred.fireWith(callbackContext, [ jqXHR, statusText ]);
                            if (fireGlobals) {
                                globalEventContext.trigger("ajaxComplete", [ jqXHR, s ]);
                                if (!--jQuery.active) jQuery.event.trigger("ajaxStop");
                            }
                        }
                        return jqXHR;
                    },
                    getJSON: function(url, data, callback) {
                        return jQuery.get(url, data, callback, "json");
                    },
                    getScript: function(url, callback) {
                        return jQuery.get(url, void 0, callback, "script");
                    }
                });
                jQuery.each([ "get", "post" ], (function(_i, method) {
                    jQuery[method] = function(url, data, callback, type) {
                        if (isFunction(data)) {
                            type = type || callback;
                            callback = data;
                            data = void 0;
                        }
                        return jQuery.ajax(jQuery.extend({
                            url,
                            type: method,
                            dataType: type,
                            data,
                            success: callback
                        }, jQuery.isPlainObject(url) && url));
                    };
                }));
                jQuery.ajaxPrefilter((function(s) {
                    var i;
                    for (i in s.headers) if (i.toLowerCase() === "content-type") s.contentType = s.headers[i] || "";
                }));
                jQuery._evalUrl = function(url, options, doc) {
                    return jQuery.ajax({
                        url,
                        type: "GET",
                        dataType: "script",
                        cache: true,
                        async: false,
                        global: false,
                        converters: {
                            "text script": function() {}
                        },
                        dataFilter: function(response) {
                            jQuery.globalEval(response, options, doc);
                        }
                    });
                };
                jQuery.fn.extend({
                    wrapAll: function(html) {
                        var wrap;
                        if (this[0]) {
                            if (isFunction(html)) html = html.call(this[0]);
                            wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
                            if (this[0].parentNode) wrap.insertBefore(this[0]);
                            wrap.map((function() {
                                var elem = this;
                                while (elem.firstElementChild) elem = elem.firstElementChild;
                                return elem;
                            })).append(this);
                        }
                        return this;
                    },
                    wrapInner: function(html) {
                        if (isFunction(html)) return this.each((function(i) {
                            jQuery(this).wrapInner(html.call(this, i));
                        }));
                        return this.each((function() {
                            var self = jQuery(this), contents = self.contents();
                            if (contents.length) contents.wrapAll(html); else self.append(html);
                        }));
                    },
                    wrap: function(html) {
                        var htmlIsFunction = isFunction(html);
                        return this.each((function(i) {
                            jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
                        }));
                    },
                    unwrap: function(selector) {
                        this.parent(selector).not("body").each((function() {
                            jQuery(this).replaceWith(this.childNodes);
                        }));
                        return this;
                    }
                });
                jQuery.expr.pseudos.hidden = function(elem) {
                    return !jQuery.expr.pseudos.visible(elem);
                };
                jQuery.expr.pseudos.visible = function(elem) {
                    return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
                };
                jQuery.ajaxSettings.xhr = function() {
                    try {
                        return new window.XMLHttpRequest;
                    } catch (e) {}
                };
                var xhrSuccessStatus = {
                    0: 200,
                    1223: 204
                }, xhrSupported = jQuery.ajaxSettings.xhr();
                support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
                support.ajax = xhrSupported = !!xhrSupported;
                jQuery.ajaxTransport((function(options) {
                    var callback, errorCallback;
                    if (support.cors || xhrSupported && !options.crossDomain) return {
                        send: function(headers, complete) {
                            var i, xhr = options.xhr();
                            xhr.open(options.type, options.url, options.async, options.username, options.password);
                            if (options.xhrFields) for (i in options.xhrFields) xhr[i] = options.xhrFields[i];
                            if (options.mimeType && xhr.overrideMimeType) xhr.overrideMimeType(options.mimeType);
                            if (!options.crossDomain && !headers["X-Requested-With"]) headers["X-Requested-With"] = "XMLHttpRequest";
                            for (i in headers) xhr.setRequestHeader(i, headers[i]);
                            callback = function(type) {
                                return function() {
                                    if (callback) {
                                        callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                                        if (type === "abort") xhr.abort(); else if (type === "error") if (typeof xhr.status !== "number") complete(0, "error"); else complete(xhr.status, xhr.statusText); else complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {
                                            binary: xhr.response
                                        } : {
                                            text: xhr.responseText
                                        }, xhr.getAllResponseHeaders());
                                    }
                                };
                            };
                            xhr.onload = callback();
                            errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
                            if (xhr.onabort !== void 0) xhr.onabort = errorCallback; else xhr.onreadystatechange = function() {
                                if (xhr.readyState === 4) window.setTimeout((function() {
                                    if (callback) errorCallback();
                                }));
                            };
                            callback = callback("abort");
                            try {
                                xhr.send(options.hasContent && options.data || null);
                            } catch (e) {
                                if (callback) throw e;
                            }
                        },
                        abort: function() {
                            if (callback) callback();
                        }
                    };
                }));
                jQuery.ajaxPrefilter((function(s) {
                    if (s.crossDomain) s.contents.script = false;
                }));
                jQuery.ajaxSetup({
                    accepts: {
                        script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
                    },
                    contents: {
                        script: /\b(?:java|ecma)script\b/
                    },
                    converters: {
                        "text script": function(text) {
                            jQuery.globalEval(text);
                            return text;
                        }
                    }
                });
                jQuery.ajaxPrefilter("script", (function(s) {
                    if (s.cache === void 0) s.cache = false;
                    if (s.crossDomain) s.type = "GET";
                }));
                jQuery.ajaxTransport("script", (function(s) {
                    if (s.crossDomain || s.scriptAttrs) {
                        var script, callback;
                        return {
                            send: function(_, complete) {
                                script = jQuery("<script>").attr(s.scriptAttrs || {}).prop({
                                    charset: s.scriptCharset,
                                    src: s.url
                                }).on("load error", callback = function(evt) {
                                    script.remove();
                                    callback = null;
                                    if (evt) complete(evt.type === "error" ? 404 : 200, evt.type);
                                });
                                document.head.appendChild(script[0]);
                            },
                            abort: function() {
                                if (callback) callback();
                            }
                        };
                    }
                }));
                var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
                jQuery.ajaxSetup({
                    jsonp: "callback",
                    jsonpCallback: function() {
                        var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce.guid++;
                        this[callback] = true;
                        return callback;
                    }
                });
                jQuery.ajaxPrefilter("json jsonp", (function(s, originalSettings, jqXHR) {
                    var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
                    if (jsonProp || s.dataTypes[0] === "jsonp") {
                        callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
                        if (jsonProp) s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName); else if (s.jsonp !== false) s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
                        s.converters["script json"] = function() {
                            if (!responseContainer) jQuery.error(callbackName + " was not called");
                            return responseContainer[0];
                        };
                        s.dataTypes[0] = "json";
                        overwritten = window[callbackName];
                        window[callbackName] = function() {
                            responseContainer = arguments;
                        };
                        jqXHR.always((function() {
                            if (overwritten === void 0) jQuery(window).removeProp(callbackName); else window[callbackName] = overwritten;
                            if (s[callbackName]) {
                                s.jsonpCallback = originalSettings.jsonpCallback;
                                oldCallbacks.push(callbackName);
                            }
                            if (responseContainer && isFunction(overwritten)) overwritten(responseContainer[0]);
                            responseContainer = overwritten = void 0;
                        }));
                        return "script";
                    }
                }));
                support.createHTMLDocument = function() {
                    var body = document.implementation.createHTMLDocument("").body;
                    body.innerHTML = "<form></form><form></form>";
                    return body.childNodes.length === 2;
                }();
                jQuery.parseHTML = function(data, context, keepScripts) {
                    if (typeof data !== "string") return [];
                    if (typeof context === "boolean") {
                        keepScripts = context;
                        context = false;
                    }
                    var base, parsed, scripts;
                    if (!context) if (support.createHTMLDocument) {
                        context = document.implementation.createHTMLDocument("");
                        base = context.createElement("base");
                        base.href = document.location.href;
                        context.head.appendChild(base);
                    } else context = document;
                    parsed = rsingleTag.exec(data);
                    scripts = !keepScripts && [];
                    if (parsed) return [ context.createElement(parsed[1]) ];
                    parsed = buildFragment([ data ], context, scripts);
                    if (scripts && scripts.length) jQuery(scripts).remove();
                    return jQuery.merge([], parsed.childNodes);
                };
                jQuery.fn.load = function(url, params, callback) {
                    var selector, type, response, self = this, off = url.indexOf(" ");
                    if (off > -1) {
                        selector = stripAndCollapse(url.slice(off));
                        url = url.slice(0, off);
                    }
                    if (isFunction(params)) {
                        callback = params;
                        params = void 0;
                    } else if (params && typeof params === "object") type = "POST";
                    if (self.length > 0) jQuery.ajax({
                        url,
                        type: type || "GET",
                        dataType: "html",
                        data: params
                    }).done((function(responseText) {
                        response = arguments;
                        self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
                    })).always(callback && function(jqXHR, status) {
                        self.each((function() {
                            callback.apply(this, response || [ jqXHR.responseText, status, jqXHR ]);
                        }));
                    });
                    return this;
                };
                jQuery.expr.pseudos.animated = function(elem) {
                    return jQuery.grep(jQuery.timers, (function(fn) {
                        return elem === fn.elem;
                    })).length;
                };
                jQuery.offset = {
                    setOffset: function(elem, options, i) {
                        var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {};
                        if (position === "static") elem.style.position = "relative";
                        curOffset = curElem.offset();
                        curCSSTop = jQuery.css(elem, "top");
                        curCSSLeft = jQuery.css(elem, "left");
                        calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
                        if (calculatePosition) {
                            curPosition = curElem.position();
                            curTop = curPosition.top;
                            curLeft = curPosition.left;
                        } else {
                            curTop = parseFloat(curCSSTop) || 0;
                            curLeft = parseFloat(curCSSLeft) || 0;
                        }
                        if (isFunction(options)) options = options.call(elem, i, jQuery.extend({}, curOffset));
                        if (options.top != null) props.top = options.top - curOffset.top + curTop;
                        if (options.left != null) props.left = options.left - curOffset.left + curLeft;
                        if ("using" in options) options.using.call(elem, props); else curElem.css(props);
                    }
                };
                jQuery.fn.extend({
                    offset: function(options) {
                        if (arguments.length) return options === void 0 ? this : this.each((function(i) {
                            jQuery.offset.setOffset(this, options, i);
                        }));
                        var rect, win, elem = this[0];
                        if (!elem) return;
                        if (!elem.getClientRects().length) return {
                            top: 0,
                            left: 0
                        };
                        rect = elem.getBoundingClientRect();
                        win = elem.ownerDocument.defaultView;
                        return {
                            top: rect.top + win.pageYOffset,
                            left: rect.left + win.pageXOffset
                        };
                    },
                    position: function() {
                        if (!this[0]) return;
                        var offsetParent, offset, doc, elem = this[0], parentOffset = {
                            top: 0,
                            left: 0
                        };
                        if (jQuery.css(elem, "position") === "fixed") offset = elem.getBoundingClientRect(); else {
                            offset = this.offset();
                            doc = elem.ownerDocument;
                            offsetParent = elem.offsetParent || doc.documentElement;
                            while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static") offsetParent = offsetParent.parentNode;
                            if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
                                parentOffset = jQuery(offsetParent).offset();
                                parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
                                parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
                            }
                        }
                        return {
                            top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
                            left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
                        };
                    },
                    offsetParent: function() {
                        return this.map((function() {
                            var offsetParent = this.offsetParent;
                            while (offsetParent && jQuery.css(offsetParent, "position") === "static") offsetParent = offsetParent.offsetParent;
                            return offsetParent || documentElement;
                        }));
                    }
                });
                jQuery.each({
                    scrollLeft: "pageXOffset",
                    scrollTop: "pageYOffset"
                }, (function(method, prop) {
                    var top = "pageYOffset" === prop;
                    jQuery.fn[method] = function(val) {
                        return access(this, (function(elem, method, val) {
                            var win;
                            if (isWindow(elem)) win = elem; else if (elem.nodeType === 9) win = elem.defaultView;
                            if (val === void 0) return win ? win[prop] : elem[method];
                            if (win) win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset); else elem[method] = val;
                        }), method, val, arguments.length);
                    };
                }));
                jQuery.each([ "top", "left" ], (function(_i, prop) {
                    jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, (function(elem, computed) {
                        if (computed) {
                            computed = curCSS(elem, prop);
                            return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
                        }
                    }));
                }));
                jQuery.each({
                    Height: "height",
                    Width: "width"
                }, (function(name, type) {
                    jQuery.each({
                        padding: "inner" + name,
                        content: type,
                        "": "outer" + name
                    }, (function(defaultExtra, funcName) {
                        jQuery.fn[funcName] = function(margin, value) {
                            var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
                            return access(this, (function(elem, type, value) {
                                var doc;
                                if (isWindow(elem)) return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
                                if (elem.nodeType === 9) {
                                    doc = elem.documentElement;
                                    return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
                                }
                                return value === void 0 ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra);
                            }), type, chainable ? margin : void 0, chainable);
                        };
                    }));
                }));
                jQuery.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], (function(_i, type) {
                    jQuery.fn[type] = function(fn) {
                        return this.on(type, fn);
                    };
                }));
                jQuery.fn.extend({
                    bind: function(types, data, fn) {
                        return this.on(types, null, data, fn);
                    },
                    unbind: function(types, fn) {
                        return this.off(types, null, fn);
                    },
                    delegate: function(selector, types, data, fn) {
                        return this.on(types, selector, data, fn);
                    },
                    undelegate: function(selector, types, fn) {
                        return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
                    },
                    hover: function(fnOver, fnOut) {
                        return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
                    }
                });
                jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), (function(_i, name) {
                    jQuery.fn[name] = function(data, fn) {
                        return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
                    };
                }));
                var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
                jQuery.proxy = function(fn, context) {
                    var tmp, args, proxy;
                    if (typeof context === "string") {
                        tmp = fn[context];
                        context = fn;
                        fn = tmp;
                    }
                    if (!isFunction(fn)) return;
                    args = slice.call(arguments, 2);
                    proxy = function() {
                        return fn.apply(context || this, args.concat(slice.call(arguments)));
                    };
                    proxy.guid = fn.guid = fn.guid || jQuery.guid++;
                    return proxy;
                };
                jQuery.holdReady = function(hold) {
                    if (hold) jQuery.readyWait++; else jQuery.ready(true);
                };
                jQuery.isArray = Array.isArray;
                jQuery.parseJSON = JSON.parse;
                jQuery.nodeName = nodeName;
                jQuery.isFunction = isFunction;
                jQuery.isWindow = isWindow;
                jQuery.camelCase = camelCase;
                jQuery.type = toType;
                jQuery.now = Date.now;
                jQuery.isNumeric = function(obj) {
                    var type = jQuery.type(obj);
                    return (type === "number" || type === "string") && !isNaN(obj - parseFloat(obj));
                };
                jQuery.trim = function(text) {
                    return text == null ? "" : (text + "").replace(rtrim, "$1");
                };
                if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
                    return jQuery;
                }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== void 0 && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                var _jQuery = window.jQuery, _$ = window.$;
                jQuery.noConflict = function(deep) {
                    if (window.$ === jQuery) window.$ = _$;
                    if (deep && window.jQuery === jQuery) window.jQuery = _jQuery;
                    return jQuery;
                };
                if (typeof noGlobal === "undefined") window.jQuery = window.$ = jQuery;
                return jQuery;
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        __webpack_require__.d = (exports, definition) => {
            for (var key in definition) if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) Object.defineProperty(exports, key, {
                enumerable: true,
                get: definition[key]
            });
        };
    })();
    (() => {
        __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
    })();
    (() => {
        __webpack_require__.r = exports => {
            if (typeof Symbol !== "undefined" && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
                value: "Module"
            });
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
        };
    })();
    (() => {
        "use strict";
        var lib_namespaceObject = {};
        __webpack_require__.r(lib_namespaceObject);
        __webpack_require__.d(lib_namespaceObject, {
            afterMain: () => afterMain,
            afterRead: () => afterRead,
            afterWrite: () => afterWrite,
            applyStyles: () => modifiers_applyStyles,
            arrow: () => modifiers_arrow,
            auto: () => auto,
            basePlacements: () => basePlacements,
            beforeMain: () => beforeMain,
            beforeRead: () => beforeRead,
            beforeWrite: () => beforeWrite,
            bottom: () => bottom,
            clippingParents: () => clippingParents,
            computeStyles: () => modifiers_computeStyles,
            createPopper: () => popper_createPopper,
            createPopperBase: () => createPopper,
            createPopperLite: () => popper_lite_createPopper,
            detectOverflow: () => detectOverflow,
            end: () => end,
            eventListeners: () => eventListeners,
            flip: () => modifiers_flip,
            hide: () => modifiers_hide,
            left: () => left,
            main: () => main,
            modifierPhases: () => modifierPhases,
            offset: () => modifiers_offset,
            placements: () => enums_placements,
            popper: () => popper,
            popperGenerator: () => popperGenerator,
            popperOffsets: () => modifiers_popperOffsets,
            preventOverflow: () => modifiers_preventOverflow,
            read: () => read,
            reference: () => reference,
            right: () => right,
            start: () => start,
            top: () => enums_top,
            variationPlacements: () => variationPlacements,
            viewport: () => viewport,
            write: () => write
        });
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(webP.height == 2);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((function(support) {
                let className = support === true ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            }));
        }
        __webpack_require__(755);
        function textAreasInit() {
            const items = document.querySelectorAll(".text-field");
            if (items.length) items.forEach((item => {
                const itemField = item.querySelector(".text-field__field");
                if (itemField.tagName === "TEXTAREA") itemField.addEventListener("input", (elem => {
                    elem.target.style.height = "auto";
                    elem.target.style.height = elem.target.scrollHeight + "px";
                }));
                item.addEventListener("focusin", (() => {
                    item.classList.add("_focus");
                }));
                item.addEventListener("focusout", (() => {
                    item.classList.remove("_focus");
                }));
            })); else console.log("Не найдено ни одного text-area");
        }
        textAreasInit();
        function ssr_window_esm_isObject(obj) {
            return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
        }
        function extend(target = {}, src = {}) {
            Object.keys(src).forEach((key => {
                if (typeof target[key] === "undefined") target[key] = src[key]; else if (ssr_window_esm_isObject(src[key]) && ssr_window_esm_isObject(target[key]) && Object.keys(src[key]).length > 0) extend(target[key], src[key]);
            }));
        }
        const ssrDocument = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: {
                blur() {},
                nodeName: ""
            },
            querySelector() {
                return null;
            },
            querySelectorAll() {
                return [];
            },
            getElementById() {
                return null;
            },
            createEvent() {
                return {
                    initEvent() {}
                };
            },
            createElement() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName() {
                        return [];
                    }
                };
            },
            createElementNS() {
                return {};
            },
            importNode() {
                return null;
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };
        function ssr_window_esm_getDocument() {
            const doc = typeof document !== "undefined" ? document : {};
            extend(doc, ssrDocument);
            return doc;
        }
        const ssrWindow = {
            document: ssrDocument,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState() {},
                pushState() {},
                go() {},
                back() {}
            },
            CustomEvent: function CustomEvent() {
                return this;
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle() {
                return {
                    getPropertyValue() {
                        return "";
                    }
                };
            },
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia() {
                return {};
            },
            requestAnimationFrame(callback) {
                if (typeof setTimeout === "undefined") {
                    callback();
                    return null;
                }
                return setTimeout(callback, 0);
            },
            cancelAnimationFrame(id) {
                if (typeof setTimeout === "undefined") return;
                clearTimeout(id);
            }
        };
        function ssr_window_esm_getWindow() {
            const win = typeof window !== "undefined" ? window : {};
            extend(win, ssrWindow);
            return win;
        }
        function deleteProps(obj) {
            const object = obj;
            Object.keys(object).forEach((key => {
                try {
                    object[key] = null;
                } catch (e) {}
                try {
                    delete object[key];
                } catch (e) {}
            }));
        }
        function utils_nextTick(callback, delay = 0) {
            return setTimeout(callback, delay);
        }
        function utils_now() {
            return Date.now();
        }
        function utils_getComputedStyle(el) {
            const window = ssr_window_esm_getWindow();
            let style;
            if (window.getComputedStyle) style = window.getComputedStyle(el, null);
            if (!style && el.currentStyle) style = el.currentStyle;
            if (!style) style = el.style;
            return style;
        }
        function utils_getTranslate(el, axis = "x") {
            const window = ssr_window_esm_getWindow();
            let matrix;
            let curTransform;
            let transformMatrix;
            const curStyle = utils_getComputedStyle(el, null);
            if (window.WebKitCSSMatrix) {
                curTransform = curStyle.transform || curStyle.webkitTransform;
                if (curTransform.split(",").length > 6) curTransform = curTransform.split(", ").map((a => a.replace(",", "."))).join(", ");
                transformMatrix = new window.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
            } else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
                matrix = transformMatrix.toString().split(",");
            }
            if (axis === "x") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); else curTransform = parseFloat(matrix[4]);
            if (axis === "y") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); else curTransform = parseFloat(matrix[5]);
            return curTransform || 0;
        }
        function utils_isObject(o) {
            return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
        }
        function isNode(node) {
            if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") return node instanceof HTMLElement;
            return node && (node.nodeType === 1 || node.nodeType === 11);
        }
        function utils_extend(...args) {
            const to = Object(args[0]);
            const noExtend = [ "__proto__", "constructor", "prototype" ];
            for (let i = 1; i < args.length; i += 1) {
                const nextSource = args[i];
                if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
                    const keysArray = Object.keys(Object(nextSource)).filter((key => noExtend.indexOf(key) < 0));
                    for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                        const nextKey = keysArray[nextIndex];
                        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                        if (desc !== void 0 && desc.enumerable) if (utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]); else if (!utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
                            to[nextKey] = {};
                            if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]);
                        } else to[nextKey] = nextSource[nextKey];
                    }
                }
            }
            return to;
        }
        function utils_setCSSProperty(el, varName, varValue) {
            el.style.setProperty(varName, varValue);
        }
        function animateCSSModeScroll({swiper, targetPosition, side}) {
            const window = ssr_window_esm_getWindow();
            const startPosition = -swiper.translate;
            let startTime = null;
            let time;
            const duration = swiper.params.speed;
            swiper.wrapperEl.style.scrollSnapType = "none";
            window.cancelAnimationFrame(swiper.cssModeFrameID);
            const dir = targetPosition > startPosition ? "next" : "prev";
            const isOutOfBound = (current, target) => dir === "next" && current >= target || dir === "prev" && current <= target;
            const animate = () => {
                time = (new Date).getTime();
                if (startTime === null) startTime = time;
                const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
                const easeProgress = .5 - Math.cos(progress * Math.PI) / 2;
                let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
                if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
                swiper.wrapperEl.scrollTo({
                    [side]: currentPosition
                });
                if (isOutOfBound(currentPosition, targetPosition)) {
                    swiper.wrapperEl.style.overflow = "hidden";
                    swiper.wrapperEl.style.scrollSnapType = "";
                    setTimeout((() => {
                        swiper.wrapperEl.style.overflow = "";
                        swiper.wrapperEl.scrollTo({
                            [side]: currentPosition
                        });
                    }));
                    window.cancelAnimationFrame(swiper.cssModeFrameID);
                    return;
                }
                swiper.cssModeFrameID = window.requestAnimationFrame(animate);
            };
            animate();
        }
        function utils_elementChildren(element, selector = "") {
            return [ ...element.children ].filter((el => el.matches(selector)));
        }
        function utils_createElement(tag, classes = []) {
            const el = document.createElement(tag);
            el.classList.add(...Array.isArray(classes) ? classes : [ classes ]);
            return el;
        }
        function elementPrevAll(el, selector) {
            const prevEls = [];
            while (el.previousElementSibling) {
                const prev = el.previousElementSibling;
                if (selector) {
                    if (prev.matches(selector)) prevEls.push(prev);
                } else prevEls.push(prev);
                el = prev;
            }
            return prevEls;
        }
        function elementNextAll(el, selector) {
            const nextEls = [];
            while (el.nextElementSibling) {
                const next = el.nextElementSibling;
                if (selector) {
                    if (next.matches(selector)) nextEls.push(next);
                } else nextEls.push(next);
                el = next;
            }
            return nextEls;
        }
        function elementStyle(el, prop) {
            const window = ssr_window_esm_getWindow();
            return window.getComputedStyle(el, null).getPropertyValue(prop);
        }
        function utils_elementIndex(el) {
            let child = el;
            let i;
            if (child) {
                i = 0;
                while ((child = child.previousSibling) !== null) if (child.nodeType === 1) i += 1;
                return i;
            }
            return;
        }
        function utils_elementParents(el, selector) {
            const parents = [];
            let parent = el.parentElement;
            while (parent) {
                if (selector) {
                    if (parent.matches(selector)) parents.push(parent);
                } else parents.push(parent);
                parent = parent.parentElement;
            }
            return parents;
        }
        function elementOuterSize(el, size, includeMargins) {
            const window = ssr_window_esm_getWindow();
            if (includeMargins) return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
            return el.offsetWidth;
        }
        let support;
        function calcSupport() {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            return {
                smoothScroll: document.documentElement && document.documentElement.style && "scrollBehavior" in document.documentElement.style,
                touch: !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch)
            };
        }
        function getSupport() {
            if (!support) support = calcSupport();
            return support;
        }
        let deviceCached;
        function calcDevice({userAgent} = {}) {
            const support = getSupport();
            const window = ssr_window_esm_getWindow();
            const platform = window.navigator.platform;
            const ua = userAgent || window.navigator.userAgent;
            const device = {
                ios: false,
                android: false
            };
            const screenWidth = window.screen.width;
            const screenHeight = window.screen.height;
            const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
            let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
            const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
            const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            const windows = platform === "Win32";
            let macos = platform === "MacIntel";
            const iPadScreens = [ "1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810" ];
            if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
                ipad = ua.match(/(Version)\/([\d.]+)/);
                if (!ipad) ipad = [ 0, 1, "13_0_0" ];
                macos = false;
            }
            if (android && !windows) {
                device.os = "android";
                device.android = true;
            }
            if (ipad || iphone || ipod) {
                device.os = "ios";
                device.ios = true;
            }
            return device;
        }
        function getDevice(overrides = {}) {
            if (!deviceCached) deviceCached = calcDevice(overrides);
            return deviceCached;
        }
        let browser;
        function calcBrowser() {
            const window = ssr_window_esm_getWindow();
            let needPerspectiveFix = false;
            function isSafari() {
                const ua = window.navigator.userAgent.toLowerCase();
                return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
            }
            if (isSafari()) {
                const ua = String(window.navigator.userAgent);
                if (ua.includes("Version/")) {
                    const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num => Number(num)));
                    needPerspectiveFix = major < 16 || major === 16 && minor < 2;
                }
            }
            return {
                isSafari: needPerspectiveFix || isSafari(),
                needPerspectiveFix,
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
            };
        }
        function getBrowser() {
            if (!browser) browser = calcBrowser();
            return browser;
        }
        function Resize({swiper, on, emit}) {
            const window = ssr_window_esm_getWindow();
            let observer = null;
            let animationFrame = null;
            const resizeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("beforeResize");
                emit("resize");
            };
            const createObserver = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                observer = new ResizeObserver((entries => {
                    animationFrame = window.requestAnimationFrame((() => {
                        const {width, height} = swiper;
                        let newWidth = width;
                        let newHeight = height;
                        entries.forEach((({contentBoxSize, contentRect, target}) => {
                            if (target && target !== swiper.el) return;
                            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                        }));
                        if (newWidth !== width || newHeight !== height) resizeHandler();
                    }));
                }));
                observer.observe(swiper.el);
            };
            const removeObserver = () => {
                if (animationFrame) window.cancelAnimationFrame(animationFrame);
                if (observer && observer.unobserve && swiper.el) {
                    observer.unobserve(swiper.el);
                    observer = null;
                }
            };
            const orientationChangeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit("orientationchange");
            };
            on("init", (() => {
                if (swiper.params.resizeObserver && typeof window.ResizeObserver !== "undefined") {
                    createObserver();
                    return;
                }
                window.addEventListener("resize", resizeHandler);
                window.addEventListener("orientationchange", orientationChangeHandler);
            }));
            on("destroy", (() => {
                removeObserver();
                window.removeEventListener("resize", resizeHandler);
                window.removeEventListener("orientationchange", orientationChangeHandler);
            }));
        }
        function Observer({swiper, extendParams, on, emit}) {
            const observers = [];
            const window = ssr_window_esm_getWindow();
            const attach = (target, options = {}) => {
                const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
                const observer = new ObserverFunc((mutations => {
                    if (swiper.__preventObserver__) return;
                    if (mutations.length === 1) {
                        emit("observerUpdate", mutations[0]);
                        return;
                    }
                    const observerUpdate = function observerUpdate() {
                        emit("observerUpdate", mutations[0]);
                    };
                    if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate); else window.setTimeout(observerUpdate, 0);
                }));
                observer.observe(target, {
                    attributes: typeof options.attributes === "undefined" ? true : options.attributes,
                    childList: typeof options.childList === "undefined" ? true : options.childList,
                    characterData: typeof options.characterData === "undefined" ? true : options.characterData
                });
                observers.push(observer);
            };
            const init = () => {
                if (!swiper.params.observer) return;
                if (swiper.params.observeParents) {
                    const containerParents = utils_elementParents(swiper.el);
                    for (let i = 0; i < containerParents.length; i += 1) attach(containerParents[i]);
                }
                attach(swiper.el, {
                    childList: swiper.params.observeSlideChildren
                });
                attach(swiper.wrapperEl, {
                    attributes: false
                });
            };
            const destroy = () => {
                observers.forEach((observer => {
                    observer.disconnect();
                }));
                observers.splice(0, observers.length);
            };
            extendParams({
                observer: false,
                observeParents: false,
                observeSlideChildren: false
            });
            on("init", init);
            on("destroy", destroy);
        }
        const events_emitter = {
            on(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                const method = priority ? "unshift" : "push";
                events.split(" ").forEach((event => {
                    if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
                    self.eventsListeners[event][method](handler);
                }));
                return self;
            },
            once(events, handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                function onceHandler(...args) {
                    self.off(events, onceHandler);
                    if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
                    handler.apply(self, args);
                }
                onceHandler.__emitterProxy = handler;
                return self.on(events, onceHandler, priority);
            },
            onAny(handler, priority) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (typeof handler !== "function") return self;
                const method = priority ? "unshift" : "push";
                if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
                return self;
            },
            offAny(handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsAnyListeners) return self;
                const index = self.eventsAnyListeners.indexOf(handler);
                if (index >= 0) self.eventsAnyListeners.splice(index, 1);
                return self;
            },
            off(events, handler) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                events.split(" ").forEach((event => {
                    if (typeof handler === "undefined") self.eventsListeners[event] = []; else if (self.eventsListeners[event]) self.eventsListeners[event].forEach(((eventHandler, index) => {
                        if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
                    }));
                }));
                return self;
            },
            emit(...args) {
                const self = this;
                if (!self.eventsListeners || self.destroyed) return self;
                if (!self.eventsListeners) return self;
                let events;
                let data;
                let context;
                if (typeof args[0] === "string" || Array.isArray(args[0])) {
                    events = args[0];
                    data = args.slice(1, args.length);
                    context = self;
                } else {
                    events = args[0].events;
                    data = args[0].data;
                    context = args[0].context || self;
                }
                data.unshift(context);
                const eventsArray = Array.isArray(events) ? events : events.split(" ");
                eventsArray.forEach((event => {
                    if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler => {
                        eventHandler.apply(context, [ event, ...data ]);
                    }));
                    if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler => {
                        eventHandler.apply(context, data);
                    }));
                }));
                return self;
            }
        };
        function updateSize() {
            const swiper = this;
            let width;
            let height;
            const el = swiper.el;
            if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) width = swiper.params.width; else width = el.clientWidth;
            if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) height = swiper.params.height; else height = el.clientHeight;
            if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) return;
            width = width - parseInt(elementStyle(el, "padding-left") || 0, 10) - parseInt(elementStyle(el, "padding-right") || 0, 10);
            height = height - parseInt(elementStyle(el, "padding-top") || 0, 10) - parseInt(elementStyle(el, "padding-bottom") || 0, 10);
            if (Number.isNaN(width)) width = 0;
            if (Number.isNaN(height)) height = 0;
            Object.assign(swiper, {
                width,
                height,
                size: swiper.isHorizontal() ? width : height
            });
        }
        function updateSlides() {
            const swiper = this;
            function getDirectionLabel(property) {
                if (swiper.isHorizontal()) return property;
                return {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                }[property];
            }
            function getDirectionPropertyValue(node, label) {
                return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
            }
            const params = swiper.params;
            const {wrapperEl, slidesEl, size: swiperSize, rtlTranslate: rtl, wrongRTL} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
            const slides = utils_elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
            const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
            let snapGrid = [];
            const slidesGrid = [];
            const slidesSizesGrid = [];
            let offsetBefore = params.slidesOffsetBefore;
            if (typeof offsetBefore === "function") offsetBefore = params.slidesOffsetBefore.call(swiper);
            let offsetAfter = params.slidesOffsetAfter;
            if (typeof offsetAfter === "function") offsetAfter = params.slidesOffsetAfter.call(swiper);
            const previousSnapGridLength = swiper.snapGrid.length;
            const previousSlidesGridLength = swiper.slidesGrid.length;
            let spaceBetween = params.spaceBetween;
            let slidePosition = -offsetBefore;
            let prevSlideSize = 0;
            let index = 0;
            if (typeof swiperSize === "undefined") return;
            if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize; else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
            swiper.virtualSize = -spaceBetween;
            slides.forEach((slideEl => {
                if (rtl) slideEl.style.marginLeft = ""; else slideEl.style.marginRight = "";
                slideEl.style.marginBottom = "";
                slideEl.style.marginTop = "";
            }));
            if (params.centeredSlides && params.cssMode) {
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
            }
            const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
            if (gridEnabled) swiper.grid.initSlides(slidesLength);
            let slideSize;
            const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key => typeof params.breakpoints[key].slidesPerView !== "undefined")).length > 0;
            for (let i = 0; i < slidesLength; i += 1) {
                slideSize = 0;
                let slide;
                if (slides[i]) slide = slides[i];
                if (gridEnabled) swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
                if (slides[i] && elementStyle(slide, "display") === "none") continue;
                if (params.slidesPerView === "auto") {
                    if (shouldResetSlideSize) slides[i].style[getDirectionLabel("width")] = ``;
                    const slideStyles = getComputedStyle(slide);
                    const currentTransform = slide.style.transform;
                    const currentWebKitTransform = slide.style.webkitTransform;
                    if (currentTransform) slide.style.transform = "none";
                    if (currentWebKitTransform) slide.style.webkitTransform = "none";
                    if (params.roundLengths) slideSize = swiper.isHorizontal() ? elementOuterSize(slide, "width", true) : elementOuterSize(slide, "height", true); else {
                        const width = getDirectionPropertyValue(slideStyles, "width");
                        const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
                        const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
                        const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
                        const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
                        const boxSizing = slideStyles.getPropertyValue("box-sizing");
                        if (boxSizing && boxSizing === "border-box") slideSize = width + marginLeft + marginRight; else {
                            const {clientWidth, offsetWidth} = slide;
                            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                        }
                    }
                    if (currentTransform) slide.style.transform = currentTransform;
                    if (currentWebKitTransform) slide.style.webkitTransform = currentWebKitTransform;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                } else {
                    slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                    if (slides[i]) slides[i].style[getDirectionLabel("width")] = `${slideSize}px`;
                }
                if (slides[i]) slides[i].swiperSlideSize = slideSize;
                slidesSizesGrid.push(slideSize);
                if (params.centeredSlides) {
                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                    if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                } else {
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                    slidePosition = slidePosition + slideSize + spaceBetween;
                }
                swiper.virtualSize += slideSize + spaceBetween;
                prevSlideSize = slideSize;
                index += 1;
            }
            swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
            if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
            if (params.setWrapperSize) wrapperEl.style[getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
            if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
            if (!params.centeredSlides) {
                const newSlidesGrid = [];
                for (let i = 0; i < snapGrid.length; i += 1) {
                    let slidesGridItem = snapGrid[i];
                    if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                    if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
                }
                snapGrid = newSlidesGrid;
                if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
            }
            if (isVirtual && params.loop) {
                const size = slidesSizesGrid[0] + spaceBetween;
                if (params.slidesPerGroup > 1) {
                    const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
                    const groupSize = size * params.slidesPerGroup;
                    for (let i = 0; i < groups; i += 1) snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
                }
                for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
                    if (params.slidesPerGroup === 1) snapGrid.push(snapGrid[snapGrid.length - 1] + size);
                    slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
                    swiper.virtualSize += size;
                }
            }
            if (snapGrid.length === 0) snapGrid = [ 0 ];
            if (spaceBetween !== 0) {
                const key = swiper.isHorizontal() && rtl ? "marginLeft" : getDirectionLabel("marginRight");
                slides.filter(((_, slideIndex) => {
                    if (!params.cssMode || params.loop) return true;
                    if (slideIndex === slides.length - 1) return false;
                    return true;
                })).forEach((slideEl => {
                    slideEl.style[key] = `${spaceBetween}px`;
                }));
            }
            if (params.centeredSlides && params.centeredSlidesBounds) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (spaceBetween || 0);
                }));
                allSlidesSize -= spaceBetween;
                const maxSnap = allSlidesSize - swiperSize;
                snapGrid = snapGrid.map((snap => {
                    if (snap < 0) return -offsetBefore;
                    if (snap > maxSnap) return maxSnap + offsetAfter;
                    return snap;
                }));
            }
            if (params.centerInsufficientSlides) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach((slideSizeValue => {
                    allSlidesSize += slideSizeValue + (spaceBetween || 0);
                }));
                allSlidesSize -= spaceBetween;
                if (allSlidesSize < swiperSize) {
                    const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
                    snapGrid.forEach(((snap, snapIndex) => {
                        snapGrid[snapIndex] = snap - allSlidesOffset;
                    }));
                    slidesGrid.forEach(((snap, snapIndex) => {
                        slidesGrid[snapIndex] = snap + allSlidesOffset;
                    }));
                }
            }
            Object.assign(swiper, {
                slides,
                snapGrid,
                slidesGrid,
                slidesSizesGrid
            });
            if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
                utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
                const addToSnapGrid = -swiper.snapGrid[0];
                const addToSlidesGrid = -swiper.slidesGrid[0];
                swiper.snapGrid = swiper.snapGrid.map((v => v + addToSnapGrid));
                swiper.slidesGrid = swiper.slidesGrid.map((v => v + addToSlidesGrid));
            }
            if (slidesLength !== previousSlidesLength) swiper.emit("slidesLengthChange");
            if (snapGrid.length !== previousSnapGridLength) {
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                swiper.emit("snapGridLengthChange");
            }
            if (slidesGrid.length !== previousSlidesGridLength) swiper.emit("slidesGridLengthChange");
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
                const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
                const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
                if (slidesLength <= params.maxBackfaceHiddenSlides) {
                    if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
                } else if (hasClassBackfaceClassAdded) swiper.el.classList.remove(backFaceHiddenClass);
            }
        }
        function updateAutoHeight(speed) {
            const swiper = this;
            const activeSlides = [];
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            let newHeight = 0;
            let i;
            if (typeof speed === "number") swiper.setTransition(speed); else if (speed === true) swiper.setTransition(swiper.params.speed);
            const getSlideByIndex = index => {
                if (isVirtual) return swiper.slides[swiper.getSlideIndexByData(index)];
                return swiper.slides[index];
            };
            if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) if (swiper.params.centeredSlides) (swiper.visibleSlides || []).forEach((slide => {
                activeSlides.push(slide);
            })); else for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                const index = swiper.activeIndex + i;
                if (index > swiper.slides.length && !isVirtual) break;
                activeSlides.push(getSlideByIndex(index));
            } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
            for (i = 0; i < activeSlides.length; i += 1) if (typeof activeSlides[i] !== "undefined") {
                const height = activeSlides[i].offsetHeight;
                newHeight = height > newHeight ? height : newHeight;
            }
            if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
        }
        function updateSlidesOffset() {
            const swiper = this;
            const slides = swiper.slides;
            const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
            for (let i = 0; i < slides.length; i += 1) slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
        }
        function updateSlidesProgress(translate = this && this.translate || 0) {
            const swiper = this;
            const params = swiper.params;
            const {slides, rtlTranslate: rtl, snapGrid} = swiper;
            if (slides.length === 0) return;
            if (typeof slides[0].swiperSlideOffset === "undefined") swiper.updateSlidesOffset();
            let offsetCenter = -translate;
            if (rtl) offsetCenter = translate;
            slides.forEach((slideEl => {
                slideEl.classList.remove(params.slideVisibleClass);
            }));
            swiper.visibleSlidesIndexes = [];
            swiper.visibleSlides = [];
            let spaceBetween = params.spaceBetween;
            if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size; else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);
            for (let i = 0; i < slides.length; i += 1) {
                const slide = slides[i];
                let slideOffset = slide.swiperSlideOffset;
                if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
                const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
                const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
                const slideBefore = -(offsetCenter - slideOffset);
                const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
                const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
                if (isVisible) {
                    swiper.visibleSlides.push(slide);
                    swiper.visibleSlidesIndexes.push(i);
                    slides[i].classList.add(params.slideVisibleClass);
                }
                slide.progress = rtl ? -slideProgress : slideProgress;
                slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
            }
        }
        function updateProgress(translate) {
            const swiper = this;
            if (typeof translate === "undefined") {
                const multiplier = swiper.rtlTranslate ? -1 : 1;
                translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
            }
            const params = swiper.params;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            let {progress, isBeginning, isEnd, progressLoop} = swiper;
            const wasBeginning = isBeginning;
            const wasEnd = isEnd;
            if (translatesDiff === 0) {
                progress = 0;
                isBeginning = true;
                isEnd = true;
            } else {
                progress = (translate - swiper.minTranslate()) / translatesDiff;
                const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
                const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
                isBeginning = isBeginningRounded || progress <= 0;
                isEnd = isEndRounded || progress >= 1;
                if (isBeginningRounded) progress = 0;
                if (isEndRounded) progress = 1;
            }
            if (params.loop) {
                const firstSlideIndex = swiper.getSlideIndexByData(0);
                const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
                const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
                const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
                const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
                const translateAbs = Math.abs(translate);
                if (translateAbs >= firstSlideTranslate) progressLoop = (translateAbs - firstSlideTranslate) / translateMax; else progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
                if (progressLoop > 1) progressLoop -= 1;
            }
            Object.assign(swiper, {
                progress,
                progressLoop,
                isBeginning,
                isEnd
            });
            if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
            if (isBeginning && !wasBeginning) swiper.emit("reachBeginning toEdge");
            if (isEnd && !wasEnd) swiper.emit("reachEnd toEdge");
            if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit("fromEdge");
            swiper.emit("progress", progress);
        }
        function updateSlidesClasses() {
            const swiper = this;
            const {slides, params, slidesEl, activeIndex} = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const getFilteredSlide = selector => utils_elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
            slides.forEach((slideEl => {
                slideEl.classList.remove(params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
            }));
            let activeSlide;
            if (isVirtual) if (params.loop) {
                let slideIndex = activeIndex - swiper.virtual.slidesBefore;
                if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
                if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
                activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
            } else activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`); else activeSlide = slides[activeIndex];
            if (activeSlide) {
                activeSlide.classList.add(params.slideActiveClass);
                let nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
                if (params.loop && !nextSlide) nextSlide = slides[0];
                if (nextSlide) nextSlide.classList.add(params.slideNextClass);
                let prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
                if (params.loop && !prevSlide === 0) prevSlide = slides[slides.length - 1];
                if (prevSlide) prevSlide.classList.add(params.slidePrevClass);
            }
            swiper.emitSlidesClasses();
        }
        const processLazyPreloader = (swiper, imageEl) => {
            if (!swiper || swiper.destroyed || !swiper.params) return;
            const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
            const slideEl = imageEl.closest(slideSelector());
            if (slideEl) {
                const lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
                if (lazyEl) lazyEl.remove();
            }
        };
        const unlazy = (swiper, index) => {
            if (!swiper.slides[index]) return;
            const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
            if (imageEl) imageEl.removeAttribute("loading");
        };
        const preload = swiper => {
            if (!swiper || swiper.destroyed || !swiper.params) return;
            let amount = swiper.params.lazyPreloadPrevNext;
            const len = swiper.slides.length;
            if (!len || !amount || amount < 0) return;
            amount = Math.min(amount, len);
            const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
            const activeIndex = swiper.activeIndex;
            const slideIndexLastInView = activeIndex + slidesPerView - 1;
            if (swiper.params.rewind) for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
                const realIndex = (i % len + len) % len;
                if (realIndex !== activeIndex && realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
            } else for (let i = Math.max(slideIndexLastInView - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) if (i !== activeIndex && i > slideIndexLastInView) unlazy(swiper, i);
        };
        function getActiveIndexByTranslate(swiper) {
            const {slidesGrid, params} = swiper;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            let activeIndex;
            for (let i = 0; i < slidesGrid.length; i += 1) if (typeof slidesGrid[i + 1] !== "undefined") {
                if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i; else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
            } else if (translate >= slidesGrid[i]) activeIndex = i;
            if (params.normalizeSlideIndex) if (activeIndex < 0 || typeof activeIndex === "undefined") activeIndex = 0;
            return activeIndex;
        }
        function updateActiveIndex(newActiveIndex) {
            const swiper = this;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            const {snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex} = swiper;
            let activeIndex = newActiveIndex;
            let snapIndex;
            const getVirtualRealIndex = aIndex => {
                let realIndex = aIndex - swiper.virtual.slidesBefore;
                if (realIndex < 0) realIndex = swiper.virtual.slides.length + realIndex;
                if (realIndex >= swiper.virtual.slides.length) realIndex -= swiper.virtual.slides.length;
                return realIndex;
            };
            if (typeof activeIndex === "undefined") activeIndex = getActiveIndexByTranslate(swiper);
            if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate); else {
                const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
                snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
            }
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            if (activeIndex === previousIndex) {
                if (snapIndex !== previousSnapIndex) {
                    swiper.snapIndex = snapIndex;
                    swiper.emit("snapIndexChange");
                }
                if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) swiper.realIndex = getVirtualRealIndex(activeIndex);
                return;
            }
            let realIndex;
            if (swiper.virtual && params.virtual.enabled && params.loop) realIndex = getVirtualRealIndex(activeIndex); else if (swiper.slides[activeIndex]) realIndex = parseInt(swiper.slides[activeIndex].getAttribute("data-swiper-slide-index") || activeIndex, 10); else realIndex = activeIndex;
            Object.assign(swiper, {
                previousSnapIndex,
                snapIndex,
                previousRealIndex,
                realIndex,
                previousIndex,
                activeIndex
            });
            if (swiper.initialized) preload(swiper);
            swiper.emit("activeIndexChange");
            swiper.emit("snapIndexChange");
            if (previousRealIndex !== realIndex) swiper.emit("realIndexChange");
            if (swiper.initialized || swiper.params.runCallbacksOnInit) swiper.emit("slideChange");
        }
        function updateClickedSlide(e) {
            const swiper = this;
            const params = swiper.params;
            const slide = e.closest(`.${params.slideClass}, swiper-slide`);
            let slideFound = false;
            let slideIndex;
            if (slide) for (let i = 0; i < swiper.slides.length; i += 1) if (swiper.slides[i] === slide) {
                slideFound = true;
                slideIndex = i;
                break;
            }
            if (slide && slideFound) {
                swiper.clickedSlide = slide;
                if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt(slide.getAttribute("data-swiper-slide-index"), 10); else swiper.clickedIndex = slideIndex;
            } else {
                swiper.clickedSlide = void 0;
                swiper.clickedIndex = void 0;
                return;
            }
            if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
        }
        const update = {
            updateSize,
            updateSlides,
            updateAutoHeight,
            updateSlidesOffset,
            updateSlidesProgress,
            updateProgress,
            updateSlidesClasses,
            updateActiveIndex,
            updateClickedSlide
        };
        function getSwiperTranslate(axis = (this.isHorizontal() ? "x" : "y")) {
            const swiper = this;
            const {params, rtlTranslate: rtl, translate, wrapperEl} = swiper;
            if (params.virtualTranslate) return rtl ? -translate : translate;
            if (params.cssMode) return translate;
            let currentTranslate = utils_getTranslate(wrapperEl, axis);
            currentTranslate += swiper.cssOverflowAdjustment();
            if (rtl) currentTranslate = -currentTranslate;
            return currentTranslate || 0;
        }
        function setTranslate(translate, byController) {
            const swiper = this;
            const {rtlTranslate: rtl, params, wrapperEl, progress} = swiper;
            let x = 0;
            let y = 0;
            const z = 0;
            if (swiper.isHorizontal()) x = rtl ? -translate : translate; else y = translate;
            if (params.roundLengths) {
                x = Math.floor(x);
                y = Math.floor(y);
            }
            swiper.previousTranslate = swiper.translate;
            swiper.translate = swiper.isHorizontal() ? x : y;
            if (params.cssMode) wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y; else if (!params.virtualTranslate) {
                if (swiper.isHorizontal()) x -= swiper.cssOverflowAdjustment(); else y -= swiper.cssOverflowAdjustment();
                wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
            }
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (translatesDiff === 0) newProgress = 0; else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== progress) swiper.updateProgress(translate);
            swiper.emit("setTranslate", swiper.translate, byController);
        }
        function minTranslate() {
            return -this.snapGrid[0];
        }
        function maxTranslate() {
            return -this.snapGrid[this.snapGrid.length - 1];
        }
        function translateTo(translate = 0, speed = this.params.speed, runCallbacks = true, translateBounds = true, internal) {
            const swiper = this;
            const {params, wrapperEl} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition) return false;
            const minTranslate = swiper.minTranslate();
            const maxTranslate = swiper.maxTranslate();
            let newTranslate;
            if (translateBounds && translate > minTranslate) newTranslate = minTranslate; else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate; else newTranslate = translate;
            swiper.updateProgress(newTranslate);
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                if (speed === 0) wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate; else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: -newTranslate,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: -newTranslate,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            if (speed === 0) {
                swiper.setTransition(0);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionEnd");
                }
            } else {
                swiper.setTransition(speed);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionStart");
                }
                if (!swiper.animating) {
                    swiper.animating = true;
                    if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                        if (!swiper || swiper.destroyed) return;
                        if (e.target !== this) return;
                        swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.onTranslateToWrapperTransitionEnd = null;
                        delete swiper.onTranslateToWrapperTransitionEnd;
                        if (runCallbacks) swiper.emit("transitionEnd");
                    };
                    swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                }
            }
            return true;
        }
        const translate = {
            getTranslate: getSwiperTranslate,
            setTranslate,
            minTranslate,
            maxTranslate,
            translateTo
        };
        function setTransition(duration, byController) {
            const swiper = this;
            if (!swiper.params.cssMode) swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
            swiper.emit("setTransition", duration, byController);
        }
        function transitionEmit({swiper, runCallbacks, direction, step}) {
            const {activeIndex, previousIndex} = swiper;
            let dir = direction;
            if (!dir) if (activeIndex > previousIndex) dir = "next"; else if (activeIndex < previousIndex) dir = "prev"; else dir = "reset";
            swiper.emit(`transition${step}`);
            if (runCallbacks && activeIndex !== previousIndex) {
                if (dir === "reset") {
                    swiper.emit(`slideResetTransition${step}`);
                    return;
                }
                swiper.emit(`slideChangeTransition${step}`);
                if (dir === "next") swiper.emit(`slideNextTransition${step}`); else swiper.emit(`slidePrevTransition${step}`);
            }
        }
        function transitionStart(runCallbacks = true, direction) {
            const swiper = this;
            const {params} = swiper;
            if (params.cssMode) return;
            if (params.autoHeight) swiper.updateAutoHeight();
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "Start"
            });
        }
        function transitionEnd(runCallbacks = true, direction) {
            const swiper = this;
            const {params} = swiper;
            swiper.animating = false;
            if (params.cssMode) return;
            swiper.setTransition(0);
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "End"
            });
        }
        const transition = {
            setTransition,
            transitionStart,
            transitionEnd
        };
        function slideTo(index = 0, speed = this.params.speed, runCallbacks = true, internal, initial) {
            if (typeof index === "string") index = parseInt(index, 10);
            const swiper = this;
            let slideIndex = index;
            if (slideIndex < 0) slideIndex = 0;
            const {params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl, enabled} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) return false;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
            let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
            const translate = -snapGrid[snapIndex];
            if (params.normalizeSlideIndex) for (let i = 0; i < slidesGrid.length; i += 1) {
                const normalizedTranslate = -Math.floor(translate * 100);
                const normalizedGrid = Math.floor(slidesGrid[i] * 100);
                const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
                if (typeof slidesGrid[i + 1] !== "undefined") {
                    if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i; else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
                } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
            }
            if (swiper.initialized && slideIndex !== activeIndex) {
                if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) return false;
                if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) if ((activeIndex || 0) !== slideIndex) return false;
            }
            if (slideIndex !== (previousIndex || 0) && runCallbacks) swiper.emit("beforeSlideChangeStart");
            swiper.updateProgress(translate);
            let direction;
            if (slideIndex > activeIndex) direction = "next"; else if (slideIndex < activeIndex) direction = "prev"; else direction = "reset";
            if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
                swiper.updateActiveIndex(slideIndex);
                if (params.autoHeight) swiper.updateAutoHeight();
                swiper.updateSlidesClasses();
                if (params.effect !== "slide") swiper.setTranslate(translate);
                if (direction !== "reset") {
                    swiper.transitionStart(runCallbacks, direction);
                    swiper.transitionEnd(runCallbacks, direction);
                }
                return false;
            }
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                const t = rtl ? translate : -translate;
                if (speed === 0) {
                    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                    if (isVirtual) {
                        swiper.wrapperEl.style.scrollSnapType = "none";
                        swiper._immediateVirtual = true;
                    }
                    if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
                        swiper._cssModeVirtualInitialSet = true;
                        requestAnimationFrame((() => {
                            wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                        }));
                    } else wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                    if (isVirtual) requestAnimationFrame((() => {
                        swiper.wrapperEl.style.scrollSnapType = "";
                        swiper._immediateVirtual = false;
                    }));
                } else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: t,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: t,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            swiper.setTransition(speed);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit("beforeTransitionStart", speed, internal);
            swiper.transitionStart(runCallbacks, direction);
            if (speed === 0) swiper.transitionEnd(runCallbacks, direction); else if (!swiper.animating) {
                swiper.animating = true;
                if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                    if (!swiper || swiper.destroyed) return;
                    if (e.target !== this) return;
                    swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
                    swiper.onSlideToWrapperTransitionEnd = null;
                    delete swiper.onSlideToWrapperTransitionEnd;
                    swiper.transitionEnd(runCallbacks, direction);
                };
                swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
            }
            return true;
        }
        function slideToLoop(index = 0, speed = this.params.speed, runCallbacks = true, internal) {
            if (typeof index === "string") {
                const indexAsNumber = parseInt(index, 10);
                index = indexAsNumber;
            }
            const swiper = this;
            let newIndex = index;
            if (swiper.params.loop) if (swiper.virtual && swiper.params.virtual.enabled) newIndex += swiper.virtual.slidesBefore; else newIndex = swiper.getSlideIndexByData(newIndex);
            return swiper.slideTo(newIndex, speed, runCallbacks, internal);
        }
        function slideNext(speed = this.params.speed, runCallbacks = true, internal) {
            const swiper = this;
            const {enabled, params, animating} = swiper;
            if (!enabled) return swiper;
            let perGroup = params.slidesPerGroup;
            if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
            const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            if (params.loop) {
                if (animating && !isVirtual && params.loopPreventsSliding) return false;
                swiper.loopFix({
                    direction: "next"
                });
                swiper._clientLeft = swiper.wrapperEl.clientLeft;
            }
            if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
            return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
        }
        function slidePrev(speed = this.params.speed, runCallbacks = true, internal) {
            const swiper = this;
            const {params, snapGrid, slidesGrid, rtlTranslate, enabled, animating} = swiper;
            if (!enabled) return swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            if (params.loop) {
                if (animating && !isVirtual && params.loopPreventsSliding) return false;
                swiper.loopFix({
                    direction: "prev"
                });
                swiper._clientLeft = swiper.wrapperEl.clientLeft;
            }
            const translate = rtlTranslate ? swiper.translate : -swiper.translate;
            function normalize(val) {
                if (val < 0) return -Math.floor(Math.abs(val));
                return Math.floor(val);
            }
            const normalizedTranslate = normalize(translate);
            const normalizedSnapGrid = snapGrid.map((val => normalize(val)));
            let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
            if (typeof prevSnap === "undefined" && params.cssMode) {
                let prevSnapIndex;
                snapGrid.forEach(((snap, snapIndex) => {
                    if (normalizedTranslate >= snap) prevSnapIndex = snapIndex;
                }));
                if (typeof prevSnapIndex !== "undefined") prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
            }
            let prevIndex = 0;
            if (typeof prevSnap !== "undefined") {
                prevIndex = slidesGrid.indexOf(prevSnap);
                if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
                if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
                    prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
                    prevIndex = Math.max(prevIndex, 0);
                }
            }
            if (params.rewind && swiper.isBeginning) {
                const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
                return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
            }
            return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
        }
        function slideReset(speed = this.params.speed, runCallbacks = true, internal) {
            const swiper = this;
            return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
        }
        function slideToClosest(speed = this.params.speed, runCallbacks = true, internal, threshold = .5) {
            const swiper = this;
            let index = swiper.activeIndex;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
            const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            if (translate >= swiper.snapGrid[snapIndex]) {
                const currentSnap = swiper.snapGrid[snapIndex];
                const nextSnap = swiper.snapGrid[snapIndex + 1];
                if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
            } else {
                const prevSnap = swiper.snapGrid[snapIndex - 1];
                const currentSnap = swiper.snapGrid[snapIndex];
                if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
            }
            index = Math.max(index, 0);
            index = Math.min(index, swiper.slidesGrid.length - 1);
            return swiper.slideTo(index, speed, runCallbacks, internal);
        }
        function slideToClickedSlide() {
            const swiper = this;
            const {params, slidesEl} = swiper;
            const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
            let slideToIndex = swiper.clickedIndex;
            let realIndex;
            const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
            if (params.loop) {
                if (swiper.animating) return;
                realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
                if (params.centeredSlides) if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                    swiper.loopFix();
                    slideToIndex = swiper.getSlideIndex(utils_elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex); else if (slideToIndex > swiper.slides.length - slidesPerView) {
                    swiper.loopFix();
                    slideToIndex = swiper.getSlideIndex(utils_elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                    utils_nextTick((() => {
                        swiper.slideTo(slideToIndex);
                    }));
                } else swiper.slideTo(slideToIndex);
            } else swiper.slideTo(slideToIndex);
        }
        const slide = {
            slideTo,
            slideToLoop,
            slideNext,
            slidePrev,
            slideReset,
            slideToClosest,
            slideToClickedSlide
        };
        function loopCreate(slideRealIndex) {
            const swiper = this;
            const {params, slidesEl} = swiper;
            if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
            const slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
            slides.forEach(((el, index) => {
                el.setAttribute("data-swiper-slide-index", index);
            }));
            swiper.loopFix({
                slideRealIndex,
                direction: params.centeredSlides ? void 0 : "next"
            });
        }
        function loopFix({slideRealIndex, slideTo = true, direction, setTranslate, activeSlideIndex, byController, byMousewheel} = {}) {
            const swiper = this;
            if (!swiper.params.loop) return;
            swiper.emit("beforeLoopFix");
            const {slides, allowSlidePrev, allowSlideNext, slidesEl, params} = swiper;
            swiper.allowSlidePrev = true;
            swiper.allowSlideNext = true;
            if (swiper.virtual && params.virtual.enabled) {
                if (slideTo) if (!params.centeredSlides && swiper.snapIndex === 0) swiper.slideTo(swiper.virtual.slides.length, 0, false, true); else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true); else if (swiper.snapIndex === swiper.snapGrid.length - 1) swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
                swiper.allowSlidePrev = allowSlidePrev;
                swiper.allowSlideNext = allowSlideNext;
                swiper.emit("loopFix");
                return;
            }
            const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10));
            let loopedSlides = params.loopedSlides || slidesPerView;
            if (loopedSlides % params.slidesPerGroup !== 0) loopedSlides += params.slidesPerGroup - loopedSlides % params.slidesPerGroup;
            swiper.loopedSlides = loopedSlides;
            const prependSlidesIndexes = [];
            const appendSlidesIndexes = [];
            let activeIndex = swiper.activeIndex;
            if (typeof activeSlideIndex === "undefined") activeSlideIndex = swiper.getSlideIndex(swiper.slides.filter((el => el.classList.contains(params.slideActiveClass)))[0]); else activeIndex = activeSlideIndex;
            const isNext = direction === "next" || !direction;
            const isPrev = direction === "prev" || !direction;
            let slidesPrepended = 0;
            let slidesAppended = 0;
            if (activeSlideIndex < loopedSlides) {
                slidesPrepended = Math.max(loopedSlides - activeSlideIndex, params.slidesPerGroup);
                for (let i = 0; i < loopedSlides - activeSlideIndex; i += 1) {
                    const index = i - Math.floor(i / slides.length) * slides.length;
                    prependSlidesIndexes.push(slides.length - index - 1);
                }
            } else if (activeSlideIndex > swiper.slides.length - loopedSlides * 2) {
                slidesAppended = Math.max(activeSlideIndex - (swiper.slides.length - loopedSlides * 2), params.slidesPerGroup);
                for (let i = 0; i < slidesAppended; i += 1) {
                    const index = i - Math.floor(i / slides.length) * slides.length;
                    appendSlidesIndexes.push(index);
                }
            }
            if (isPrev) prependSlidesIndexes.forEach((index => {
                swiper.slides[index].swiperLoopMoveDOM = true;
                slidesEl.prepend(swiper.slides[index]);
                swiper.slides[index].swiperLoopMoveDOM = false;
            }));
            if (isNext) appendSlidesIndexes.forEach((index => {
                swiper.slides[index].swiperLoopMoveDOM = true;
                slidesEl.append(swiper.slides[index]);
                swiper.slides[index].swiperLoopMoveDOM = false;
            }));
            swiper.recalcSlides();
            if (params.slidesPerView === "auto") swiper.updateSlides();
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            if (slideTo) if (prependSlidesIndexes.length > 0 && isPrev) {
                if (typeof slideRealIndex === "undefined") {
                    const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                    const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
                    const diff = newSlideTranslate - currentSlideTranslate;
                    if (byMousewheel) swiper.setTranslate(swiper.translate - diff); else {
                        swiper.slideTo(activeIndex + slidesPrepended, 0, false, true);
                        if (setTranslate) swiper.touches[swiper.isHorizontal() ? "startX" : "startY"] += diff;
                    }
                } else if (setTranslate) swiper.slideToLoop(slideRealIndex, 0, false, true);
            } else if (appendSlidesIndexes.length > 0 && isNext) if (typeof slideRealIndex === "undefined") {
                const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
                const diff = newSlideTranslate - currentSlideTranslate;
                if (byMousewheel) swiper.setTranslate(swiper.translate - diff); else {
                    swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
                    if (setTranslate) swiper.touches[swiper.isHorizontal() ? "startX" : "startY"] += diff;
                }
            } else swiper.slideToLoop(slideRealIndex, 0, false, true);
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.controller && swiper.controller.control && !byController) {
                const loopParams = {
                    slideRealIndex,
                    slideTo: false,
                    direction,
                    setTranslate,
                    activeSlideIndex,
                    byController: true
                };
                if (Array.isArray(swiper.controller.control)) swiper.controller.control.forEach((c => {
                    if (!c.destroyed && c.params.loop) c.loopFix(loopParams);
                })); else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) swiper.controller.control.loopFix(loopParams);
            }
            swiper.emit("loopFix");
        }
        function loopDestroy() {
            const swiper = this;
            const {params, slidesEl} = swiper;
            if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
            swiper.recalcSlides();
            const newSlidesOrder = [];
            swiper.slides.forEach((slideEl => {
                const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
                newSlidesOrder[index] = slideEl;
            }));
            swiper.slides.forEach((slideEl => {
                slideEl.removeAttribute("data-swiper-slide-index");
            }));
            newSlidesOrder.forEach((slideEl => {
                slidesEl.append(slideEl);
            }));
            swiper.recalcSlides();
            swiper.slideTo(swiper.realIndex, 0);
        }
        const loop = {
            loopCreate,
            loopFix,
            loopDestroy
        };
        function setGrabCursor(moving) {
            const swiper = this;
            if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
            if (swiper.isElement) swiper.__preventObserver__ = true;
            el.style.cursor = "move";
            el.style.cursor = moving ? "grabbing" : "grab";
            if (swiper.isElement) requestAnimationFrame((() => {
                swiper.__preventObserver__ = false;
            }));
        }
        function unsetGrabCursor() {
            const swiper = this;
            if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            if (swiper.isElement) swiper.__preventObserver__ = true;
            swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
            if (swiper.isElement) requestAnimationFrame((() => {
                swiper.__preventObserver__ = false;
            }));
        }
        const grab_cursor = {
            setGrabCursor,
            unsetGrabCursor
        };
        function closestElement(selector, base = this) {
            function __closestFrom(el) {
                if (!el || el === ssr_window_esm_getDocument() || el === ssr_window_esm_getWindow()) return null;
                if (el.assignedSlot) el = el.assignedSlot;
                const found = el.closest(selector);
                if (!found && !el.getRootNode) return null;
                return found || __closestFrom(el.getRootNode().host);
            }
            return __closestFrom(base);
        }
        function onTouchStart(event) {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const window = ssr_window_esm_getWindow();
            const data = swiper.touchEventsData;
            data.evCache.push(event);
            const {params, touches, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && event.pointerType === "mouse") return;
            if (swiper.animating && params.preventInteractionOnTransition) return;
            if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            let targetEl = e.target;
            if (params.touchEventsTarget === "wrapper") if (!swiper.wrapperEl.contains(targetEl)) return;
            if ("which" in e && e.which === 3) return;
            if ("button" in e && e.button > 0) return;
            if (data.isTouched && data.isMoved) return;
            const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
            const eventPath = event.composedPath ? event.composedPath() : event.path;
            if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) targetEl = eventPath[0];
            const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
            const isTargetShadow = !!(e.target && e.target.shadowRoot);
            if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
                swiper.allowClick = true;
                return;
            }
            if (params.swipeHandler) if (!targetEl.closest(params.swipeHandler)) return;
            touches.currentX = e.pageX;
            touches.currentY = e.pageY;
            const startX = touches.currentX;
            const startY = touches.currentY;
            const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
            const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
            if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) if (edgeSwipeDetection === "prevent") event.preventDefault(); else return;
            Object.assign(data, {
                isTouched: true,
                isMoved: false,
                allowTouchCallbacks: true,
                isScrolling: void 0,
                startMoving: void 0
            });
            touches.startX = startX;
            touches.startY = startY;
            data.touchStartTime = utils_now();
            swiper.allowClick = true;
            swiper.updateSize();
            swiper.swipeDirection = void 0;
            if (params.threshold > 0) data.allowThresholdMove = false;
            let preventDefault = true;
            if (targetEl.matches(data.focusableElements)) {
                preventDefault = false;
                if (targetEl.nodeName === "SELECT") data.isTouched = false;
            }
            if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl) document.activeElement.blur();
            const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
            if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) e.preventDefault();
            if (swiper.params.freeMode && swiper.params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) swiper.freeMode.onTouchStart();
            swiper.emit("touchStart", e);
        }
        function onTouchMove(event) {
            const document = ssr_window_esm_getDocument();
            const swiper = this;
            const data = swiper.touchEventsData;
            const {params, touches, rtlTranslate: rtl, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && event.pointerType === "mouse") return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (!data.isTouched) {
                if (data.startMoving && data.isScrolling) swiper.emit("touchMoveOpposite", e);
                return;
            }
            const pointerIndex = data.evCache.findIndex((cachedEv => cachedEv.pointerId === e.pointerId));
            if (pointerIndex >= 0) data.evCache[pointerIndex] = e;
            const targetTouch = data.evCache.length > 1 ? data.evCache[0] : e;
            const pageX = targetTouch.pageX;
            const pageY = targetTouch.pageY;
            if (e.preventedByNestedSwiper) {
                touches.startX = pageX;
                touches.startY = pageY;
                return;
            }
            if (!swiper.allowTouchMove) {
                if (!e.target.matches(data.focusableElements)) swiper.allowClick = false;
                if (data.isTouched) {
                    Object.assign(touches, {
                        startX: pageX,
                        startY: pageY,
                        prevX: swiper.touches.currentX,
                        prevY: swiper.touches.currentY,
                        currentX: pageX,
                        currentY: pageY
                    });
                    data.touchStartTime = utils_now();
                }
                return;
            }
            if (params.touchReleaseOnEdges && !params.loop) if (swiper.isVertical()) {
                if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                    data.isTouched = false;
                    data.isMoved = false;
                    return;
                }
            } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
            if (document.activeElement) if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
                data.isMoved = true;
                swiper.allowClick = false;
                return;
            }
            if (data.allowTouchCallbacks) swiper.emit("touchMove", e);
            if (e.targetTouches && e.targetTouches.length > 1) return;
            touches.currentX = pageX;
            touches.currentY = pageY;
            const diffX = touches.currentX - touches.startX;
            const diffY = touches.currentY - touches.startY;
            if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
            if (typeof data.isScrolling === "undefined") {
                let touchAngle;
                if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false; else if (diffX * diffX + diffY * diffY >= 25) {
                    touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
                    data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
                }
            }
            if (data.isScrolling) swiper.emit("touchMoveOpposite", e);
            if (typeof data.startMoving === "undefined") if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
            if (data.isScrolling || swiper.zoom && swiper.params.zoom && swiper.params.zoom.enabled && data.evCache.length > 1) {
                data.isTouched = false;
                return;
            }
            if (!data.startMoving) return;
            swiper.allowClick = false;
            if (!params.cssMode && e.cancelable) e.preventDefault();
            if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
            let diff = swiper.isHorizontal() ? diffX : diffY;
            let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
            if (params.oneWayMovement) {
                diff = Math.abs(diff) * (rtl ? 1 : -1);
                touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
            }
            touches.diff = diff;
            diff *= params.touchRatio;
            if (rtl) {
                diff = -diff;
                touchesDiff = -touchesDiff;
            }
            const prevTouchesDirection = swiper.touchesDirection;
            swiper.swipeDirection = diff > 0 ? "prev" : "next";
            swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
            const isLoop = swiper.params.loop && !params.cssMode;
            if (!data.isMoved) {
                if (isLoop) swiper.loopFix({
                    direction: swiper.swipeDirection
                });
                data.startTranslate = swiper.getTranslate();
                swiper.setTransition(0);
                if (swiper.animating) {
                    const evt = new window.CustomEvent("transitionend", {
                        bubbles: true,
                        cancelable: true
                    });
                    swiper.wrapperEl.dispatchEvent(evt);
                }
                data.allowMomentumBounce = false;
                if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(true);
                swiper.emit("sliderFirstMove", e);
            }
            let loopFixed;
            if (data.isMoved && prevTouchesDirection !== swiper.touchesDirection && isLoop && Math.abs(diff) >= 1) {
                swiper.loopFix({
                    direction: swiper.swipeDirection,
                    setTranslate: true
                });
                loopFixed = true;
            }
            swiper.emit("sliderMove", e);
            data.isMoved = true;
            data.currentTranslate = diff + data.startTranslate;
            let disableParentSwiper = true;
            let resistanceRatio = params.resistanceRatio;
            if (params.touchReleaseOnEdges) resistanceRatio = 0;
            if (diff > 0) {
                if (isLoop && !loopFixed && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.size / 2 : swiper.minTranslate())) swiper.loopFix({
                    direction: "prev",
                    setTranslate: true,
                    activeSlideIndex: 0
                });
                if (data.currentTranslate > swiper.minTranslate()) {
                    disableParentSwiper = false;
                    if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
                }
            } else if (diff < 0) {
                if (isLoop && !loopFixed && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.size / 2 : swiper.maxTranslate())) swiper.loopFix({
                    direction: "next",
                    setTranslate: true,
                    activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
                });
                if (data.currentTranslate < swiper.maxTranslate()) {
                    disableParentSwiper = false;
                    if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
                }
            }
            if (disableParentSwiper) e.preventedByNestedSwiper = true;
            if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
            if (params.threshold > 0) if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                if (!data.allowThresholdMove) {
                    data.allowThresholdMove = true;
                    touches.startX = touches.currentX;
                    touches.startY = touches.currentY;
                    data.currentTranslate = data.startTranslate;
                    touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                    return;
                }
            } else {
                data.currentTranslate = data.startTranslate;
                return;
            }
            if (!params.followFinger || params.cssMode) return;
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
            swiper.updateProgress(data.currentTranslate);
            swiper.setTranslate(data.currentTranslate);
        }
        function onTouchEnd(event) {
            const swiper = this;
            const data = swiper.touchEventsData;
            const pointerIndex = data.evCache.findIndex((cachedEv => cachedEv.pointerId === event.pointerId));
            if (pointerIndex >= 0) data.evCache.splice(pointerIndex, 1);
            if ([ "pointercancel", "pointerout", "pointerleave" ].includes(event.type)) {
                const proceed = event.type === "pointercancel" && (swiper.browser.isSafari || swiper.browser.isWebView);
                if (!proceed) return;
            }
            const {params, touches, rtlTranslate: rtl, slidesGrid, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && event.pointerType === "mouse") return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (data.allowTouchCallbacks) swiper.emit("touchEnd", e);
            data.allowTouchCallbacks = false;
            if (!data.isTouched) {
                if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(false);
            const touchEndTime = utils_now();
            const timeDiff = touchEndTime - data.touchStartTime;
            if (swiper.allowClick) {
                const pathTree = e.path || e.composedPath && e.composedPath();
                swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
                swiper.emit("tap click", e);
                if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit("doubleTap doubleClick", e);
            }
            data.lastClickTime = utils_now();
            utils_nextTick((() => {
                if (!swiper.destroyed) swiper.allowClick = true;
            }));
            if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
                data.isTouched = false;
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            let currentPos;
            if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate; else currentPos = -data.currentTranslate;
            if (params.cssMode) return;
            if (swiper.params.freeMode && params.freeMode.enabled) {
                swiper.freeMode.onTouchEnd({
                    currentPos
                });
                return;
            }
            let stopIndex = 0;
            let groupSize = swiper.slidesSizesGrid[0];
            for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
                const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
                if (typeof slidesGrid[i + increment] !== "undefined") {
                    if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                        stopIndex = i;
                        groupSize = slidesGrid[i + increment] - slidesGrid[i];
                    }
                } else if (currentPos >= slidesGrid[i]) {
                    stopIndex = i;
                    groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
                }
            }
            let rewindFirstIndex = null;
            let rewindLastIndex = null;
            if (params.rewind) if (swiper.isBeginning) rewindLastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1; else if (swiper.isEnd) rewindFirstIndex = 0;
            const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
            const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
            if (timeDiff > params.longSwipesMs) {
                if (!params.longSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                if (swiper.swipeDirection === "next") if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment); else swiper.slideTo(stopIndex);
                if (swiper.swipeDirection === "prev") if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment); else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) swiper.slideTo(rewindLastIndex); else swiper.slideTo(stopIndex);
            } else {
                if (!params.shortSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
                if (!isNavButtonTarget) {
                    if (swiper.swipeDirection === "next") swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
                    if (swiper.swipeDirection === "prev") swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
                } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment); else swiper.slideTo(stopIndex);
            }
        }
        function onResize() {
            const swiper = this;
            const {params, el} = swiper;
            if (el && el.offsetWidth === 0) return;
            if (params.breakpoints) swiper.setBreakpoint();
            const {allowSlideNext, allowSlidePrev, snapGrid} = swiper;
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            swiper.allowSlideNext = true;
            swiper.allowSlidePrev = true;
            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateSlidesClasses();
            const isVirtualLoop = isVirtual && params.loop;
            if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) swiper.slideTo(swiper.slides.length - 1, 0, false, true); else if (swiper.params.loop && !isVirtual) swiper.slideToLoop(swiper.realIndex, 0, false, true); else swiper.slideTo(swiper.activeIndex, 0, false, true);
            if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
                clearTimeout(swiper.autoplay.resizeTimeout);
                swiper.autoplay.resizeTimeout = setTimeout((() => {
                    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.resume();
                }), 500);
            }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
        }
        function onClick(e) {
            const swiper = this;
            if (!swiper.enabled) return;
            if (!swiper.allowClick) {
                if (swiper.params.preventClicks) e.preventDefault();
                if (swiper.params.preventClicksPropagation && swiper.animating) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
            }
        }
        function onScroll() {
            const swiper = this;
            const {wrapperEl, rtlTranslate, enabled} = swiper;
            if (!enabled) return;
            swiper.previousTranslate = swiper.translate;
            if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft; else swiper.translate = -wrapperEl.scrollTop;
            if (swiper.translate === 0) swiper.translate = 0;
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (translatesDiff === 0) newProgress = 0; else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
            if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
            swiper.emit("setTranslate", swiper.translate, false);
        }
        function onLoad(e) {
            const swiper = this;
            processLazyPreloader(swiper, e.target);
            if (swiper.params.cssMode || swiper.params.slidesPerView !== "auto" && !swiper.params.autoHeight) return;
            swiper.update();
        }
        let dummyEventAttached = false;
        function dummyEventListener() {}
        const events = (swiper, method) => {
            const document = ssr_window_esm_getDocument();
            const {params, el, wrapperEl, device} = swiper;
            const capture = !!params.nested;
            const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
            const swiperMethod = method;
            el[domMethod]("pointerdown", swiper.onTouchStart, {
                passive: false
            });
            document[domMethod]("pointermove", swiper.onTouchMove, {
                passive: false,
                capture
            });
            document[domMethod]("pointerup", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointercancel", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointerout", swiper.onTouchEnd, {
                passive: true
            });
            document[domMethod]("pointerleave", swiper.onTouchEnd, {
                passive: true
            });
            if (params.preventClicks || params.preventClicksPropagation) el[domMethod]("click", swiper.onClick, true);
            if (params.cssMode) wrapperEl[domMethod]("scroll", swiper.onScroll);
            if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true); else swiper[swiperMethod]("observerUpdate", onResize, true);
            el[domMethod]("load", swiper.onLoad, {
                capture: true
            });
        };
        function attachEvents() {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            const {params} = swiper;
            swiper.onTouchStart = onTouchStart.bind(swiper);
            swiper.onTouchMove = onTouchMove.bind(swiper);
            swiper.onTouchEnd = onTouchEnd.bind(swiper);
            if (params.cssMode) swiper.onScroll = onScroll.bind(swiper);
            swiper.onClick = onClick.bind(swiper);
            swiper.onLoad = onLoad.bind(swiper);
            if (!dummyEventAttached) {
                document.addEventListener("touchstart", dummyEventListener);
                dummyEventAttached = true;
            }
            events(swiper, "on");
        }
        function detachEvents() {
            const swiper = this;
            events(swiper, "off");
        }
        const core_events = {
            attachEvents,
            detachEvents
        };
        const isGridEnabled = (swiper, params) => swiper.grid && params.grid && params.grid.rows > 1;
        function setBreakpoint() {
            const swiper = this;
            const {realIndex, initialized, params, el} = swiper;
            const breakpoints = params.breakpoints;
            if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;
            const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
            if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
            const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : void 0;
            const breakpointParams = breakpointOnlyParams || swiper.originalParams;
            const wasMultiRow = isGridEnabled(swiper, params);
            const isMultiRow = isGridEnabled(swiper, breakpointParams);
            const wasEnabled = params.enabled;
            if (wasMultiRow && !isMultiRow) {
                el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            } else if (!wasMultiRow && isMultiRow) {
                el.classList.add(`${params.containerModifierClass}grid`);
                if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") el.classList.add(`${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            }
            [ "navigation", "pagination", "scrollbar" ].forEach((prop => {
                const wasModuleEnabled = params[prop] && params[prop].enabled;
                const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
                if (wasModuleEnabled && !isModuleEnabled) swiper[prop].disable();
                if (!wasModuleEnabled && isModuleEnabled) swiper[prop].enable();
            }));
            const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
            const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
            if (directionChanged && initialized) swiper.changeDirection();
            utils_extend(swiper.params, breakpointParams);
            const isEnabled = swiper.params.enabled;
            Object.assign(swiper, {
                allowTouchMove: swiper.params.allowTouchMove,
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev
            });
            if (wasEnabled && !isEnabled) swiper.disable(); else if (!wasEnabled && isEnabled) swiper.enable();
            swiper.currentBreakpoint = breakpoint;
            swiper.emit("_beforeBreakpoint", breakpointParams);
            if (needsReLoop && initialized) {
                swiper.loopDestroy();
                swiper.loopCreate(realIndex);
                swiper.updateSlides();
            }
            swiper.emit("breakpoint", breakpointParams);
        }
        function getBreakpoint(breakpoints, base = "window", containerEl) {
            if (!breakpoints || base === "container" && !containerEl) return;
            let breakpoint = false;
            const window = ssr_window_esm_getWindow();
            const currentHeight = base === "window" ? window.innerHeight : containerEl.clientHeight;
            const points = Object.keys(breakpoints).map((point => {
                if (typeof point === "string" && point.indexOf("@") === 0) {
                    const minRatio = parseFloat(point.substr(1));
                    const value = currentHeight * minRatio;
                    return {
                        value,
                        point
                    };
                }
                return {
                    value: point,
                    point
                };
            }));
            points.sort(((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10)));
            for (let i = 0; i < points.length; i += 1) {
                const {point, value} = points[i];
                if (base === "window") {
                    if (window.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
                } else if (value <= containerEl.clientWidth) breakpoint = point;
            }
            return breakpoint || "max";
        }
        const breakpoints = {
            setBreakpoint,
            getBreakpoint
        };
        function prepareClasses(entries, prefix) {
            const resultClasses = [];
            entries.forEach((item => {
                if (typeof item === "object") Object.keys(item).forEach((classNames => {
                    if (item[classNames]) resultClasses.push(prefix + classNames);
                })); else if (typeof item === "string") resultClasses.push(prefix + item);
            }));
            return resultClasses;
        }
        function addClasses() {
            const swiper = this;
            const {classNames, params, rtl, el, device} = swiper;
            const suffixes = prepareClasses([ "initialized", params.direction, {
                "free-mode": swiper.params.freeMode && params.freeMode.enabled
            }, {
                autoheight: params.autoHeight
            }, {
                rtl
            }, {
                grid: params.grid && params.grid.rows > 1
            }, {
                "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
            }, {
                android: device.android
            }, {
                ios: device.ios
            }, {
                "css-mode": params.cssMode
            }, {
                centered: params.cssMode && params.centeredSlides
            }, {
                "watch-progress": params.watchSlidesProgress
            } ], params.containerModifierClass);
            classNames.push(...suffixes);
            el.classList.add(...classNames);
            swiper.emitContainerClasses();
        }
        function removeClasses_removeClasses() {
            const swiper = this;
            const {el, classNames} = swiper;
            el.classList.remove(...classNames);
            swiper.emitContainerClasses();
        }
        const classes = {
            addClasses,
            removeClasses: removeClasses_removeClasses
        };
        function checkOverflow() {
            const swiper = this;
            const {isLocked: wasLocked, params} = swiper;
            const {slidesOffsetBefore} = params;
            if (slidesOffsetBefore) {
                const lastSlideIndex = swiper.slides.length - 1;
                const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
                swiper.isLocked = swiper.size > lastSlideRightEdge;
            } else swiper.isLocked = swiper.snapGrid.length === 1;
            if (params.allowSlideNext === true) swiper.allowSlideNext = !swiper.isLocked;
            if (params.allowSlidePrev === true) swiper.allowSlidePrev = !swiper.isLocked;
            if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
            if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? "lock" : "unlock");
        }
        const check_overflow = {
            checkOverflow
        };
        const defaults = {
            init: true,
            direction: "horizontal",
            oneWayMovement: false,
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: false,
            updateOnWindowResize: true,
            resizeObserver: true,
            nested: false,
            createElements: false,
            enabled: true,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: false,
            userAgent: null,
            url: null,
            edgeSwipeDetection: false,
            edgeSwipeThreshold: 20,
            autoHeight: false,
            setWrapperSize: false,
            virtualTranslate: false,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: false,
            centeredSlides: false,
            centeredSlidesBounds: false,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: true,
            centerInsufficientSlides: false,
            watchOverflow: true,
            roundLengths: false,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: true,
            allowTouchMove: true,
            threshold: 5,
            touchMoveStopPropagation: false,
            touchStartPreventDefault: true,
            touchStartForcePreventDefault: false,
            touchReleaseOnEdges: false,
            uniqueNavElements: true,
            resistance: true,
            resistanceRatio: .85,
            watchSlidesProgress: false,
            grabCursor: false,
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            loop: false,
            loopedSlides: null,
            loopPreventsSliding: true,
            rewind: false,
            allowSlidePrev: true,
            allowSlideNext: true,
            swipeHandler: null,
            noSwiping: true,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: true,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            slideNextClass: "swiper-slide-next",
            slidePrevClass: "swiper-slide-prev",
            wrapperClass: "swiper-wrapper",
            lazyPreloaderClass: "swiper-lazy-preloader",
            lazyPreloadPrevNext: 0,
            runCallbacksOnInit: true,
            _emitClasses: false
        };
        function moduleExtendParams(params, allModulesParams) {
            return function extendParams(obj = {}) {
                const moduleParamName = Object.keys(obj)[0];
                const moduleParams = obj[moduleParamName];
                if (typeof moduleParams !== "object" || moduleParams === null) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if ([ "navigation", "pagination", "scrollbar" ].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) params[moduleParamName] = {
                    auto: true
                };
                if (!(moduleParamName in params && "enabled" in moduleParams)) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if (params[moduleParamName] === true) params[moduleParamName] = {
                    enabled: true
                };
                if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) params[moduleParamName].enabled = true;
                if (!params[moduleParamName]) params[moduleParamName] = {
                    enabled: false
                };
                utils_extend(allModulesParams, obj);
            };
        }
        const prototypes = {
            eventsEmitter: events_emitter,
            update,
            translate,
            transition,
            slide,
            loop,
            grabCursor: grab_cursor,
            events: core_events,
            breakpoints,
            checkOverflow: check_overflow,
            classes
        };
        const extendedDefaults = {};
        class core_Swiper {
            constructor(...args) {
                let el;
                let params;
                if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") params = args[0]; else [el, params] = args;
                if (!params) params = {};
                params = utils_extend({}, params);
                if (el && !params.el) params.el = el;
                const document = ssr_window_esm_getDocument();
                if (params.el && typeof params.el === "string" && document.querySelectorAll(params.el).length > 1) {
                    const swipers = [];
                    document.querySelectorAll(params.el).forEach((containerEl => {
                        const newParams = utils_extend({}, params, {
                            el: containerEl
                        });
                        swipers.push(new core_Swiper(newParams));
                    }));
                    return swipers;
                }
                const swiper = this;
                swiper.__swiper__ = true;
                swiper.support = getSupport();
                swiper.device = getDevice({
                    userAgent: params.userAgent
                });
                swiper.browser = getBrowser();
                swiper.eventsListeners = {};
                swiper.eventsAnyListeners = [];
                swiper.modules = [ ...swiper.__modules__ ];
                if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
                const allModulesParams = {};
                swiper.modules.forEach((mod => {
                    mod({
                        params,
                        swiper,
                        extendParams: moduleExtendParams(params, allModulesParams),
                        on: swiper.on.bind(swiper),
                        once: swiper.once.bind(swiper),
                        off: swiper.off.bind(swiper),
                        emit: swiper.emit.bind(swiper)
                    });
                }));
                const swiperParams = utils_extend({}, defaults, allModulesParams);
                swiper.params = utils_extend({}, swiperParams, extendedDefaults, params);
                swiper.originalParams = utils_extend({}, swiper.params);
                swiper.passedParams = utils_extend({}, params);
                if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName => {
                    swiper.on(eventName, swiper.params.on[eventName]);
                }));
                if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
                Object.assign(swiper, {
                    enabled: swiper.params.enabled,
                    el,
                    classNames: [],
                    slides: [],
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal() {
                        return swiper.params.direction === "horizontal";
                    },
                    isVertical() {
                        return swiper.params.direction === "vertical";
                    },
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: true,
                    isEnd: false,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: false,
                    cssOverflowAdjustment() {
                        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
                    },
                    allowSlideNext: swiper.params.allowSlideNext,
                    allowSlidePrev: swiper.params.allowSlidePrev,
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: swiper.params.focusableElements,
                        lastClickTime: 0,
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        startMoving: void 0,
                        evCache: []
                    },
                    allowClick: true,
                    allowTouchMove: swiper.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                });
                swiper.emit("_swiper");
                if (swiper.params.init) swiper.init();
                return swiper;
            }
            getSlideIndex(slideEl) {
                const {slidesEl, params} = this;
                const slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
                const firstSlideIndex = utils_elementIndex(slides[0]);
                return utils_elementIndex(slideEl) - firstSlideIndex;
            }
            getSlideIndexByData(index) {
                return this.getSlideIndex(this.slides.filter((slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === index))[0]);
            }
            recalcSlides() {
                const swiper = this;
                const {slidesEl, params} = swiper;
                swiper.slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
            }
            enable() {
                const swiper = this;
                if (swiper.enabled) return;
                swiper.enabled = true;
                if (swiper.params.grabCursor) swiper.setGrabCursor();
                swiper.emit("enable");
            }
            disable() {
                const swiper = this;
                if (!swiper.enabled) return;
                swiper.enabled = false;
                if (swiper.params.grabCursor) swiper.unsetGrabCursor();
                swiper.emit("disable");
            }
            setProgress(progress, speed) {
                const swiper = this;
                progress = Math.min(Math.max(progress, 0), 1);
                const min = swiper.minTranslate();
                const max = swiper.maxTranslate();
                const current = (max - min) * progress + min;
                swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            emitContainerClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const cls = swiper.el.className.split(" ").filter((className => className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0));
                swiper.emit("_containerClasses", cls.join(" "));
            }
            getSlideClasses(slideEl) {
                const swiper = this;
                if (swiper.destroyed) return "";
                return slideEl.className.split(" ").filter((className => className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0)).join(" ");
            }
            emitSlidesClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const updates = [];
                swiper.slides.forEach((slideEl => {
                    const classNames = swiper.getSlideClasses(slideEl);
                    updates.push({
                        slideEl,
                        classNames
                    });
                    swiper.emit("_slideClass", slideEl, classNames);
                }));
                swiper.emit("_slideClasses", updates);
            }
            slidesPerViewDynamic(view = "current", exact = false) {
                const swiper = this;
                const {params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex} = swiper;
                let spv = 1;
                if (params.centeredSlides) {
                    let slideSize = slides[activeIndex].swiperSlideSize;
                    let breakLoop;
                    for (let i = activeIndex + 1; i < slides.length; i += 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                    for (let i = activeIndex - 1; i >= 0; i -= 1) if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                } else if (view === "current") for (let i = activeIndex + 1; i < slides.length; i += 1) {
                    const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                    if (slideInView) spv += 1;
                } else for (let i = activeIndex - 1; i >= 0; i -= 1) {
                    const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                    if (slideInView) spv += 1;
                }
                return spv;
            }
            update() {
                const swiper = this;
                if (!swiper || swiper.destroyed) return;
                const {snapGrid, params} = swiper;
                if (params.breakpoints) swiper.setBreakpoint();
                [ ...swiper.el.querySelectorAll('[loading="lazy"]') ].forEach((imageEl => {
                    if (imageEl.complete) processLazyPreloader(swiper, imageEl);
                }));
                swiper.updateSize();
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();
                function setTranslate() {
                    const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
                    const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                    swiper.setTranslate(newTranslate);
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                }
                let translated;
                if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
                    setTranslate();
                    if (swiper.params.autoHeight) swiper.updateAutoHeight();
                } else {
                    if ((swiper.params.slidesPerView === "auto" || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
                        const slides = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
                        translated = swiper.slideTo(slides.length - 1, 0, false, true);
                    } else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                    if (!translated) setTranslate();
                }
                if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
                swiper.emit("update");
            }
            changeDirection(newDirection, needUpdate = true) {
                const swiper = this;
                const currentDirection = swiper.params.direction;
                if (!newDirection) newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
                if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") return swiper;
                swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
                swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
                swiper.emitContainerClasses();
                swiper.params.direction = newDirection;
                swiper.slides.forEach((slideEl => {
                    if (newDirection === "vertical") slideEl.style.width = ""; else slideEl.style.height = "";
                }));
                swiper.emit("changeDirection");
                if (needUpdate) swiper.update();
                return swiper;
            }
            changeLanguageDirection(direction) {
                const swiper = this;
                if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr") return;
                swiper.rtl = direction === "rtl";
                swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
                if (swiper.rtl) {
                    swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "rtl";
                } else {
                    swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "ltr";
                }
                swiper.update();
            }
            mount(element) {
                const swiper = this;
                if (swiper.mounted) return true;
                let el = element || swiper.params.el;
                if (typeof el === "string") el = document.querySelector(el);
                if (!el) return false;
                el.swiper = swiper;
                if (el.shadowEl) swiper.isElement = true;
                const getWrapperSelector = () => `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
                const getWrapper = () => {
                    if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                        const res = el.shadowRoot.querySelector(getWrapperSelector());
                        return res;
                    }
                    return utils_elementChildren(el, getWrapperSelector())[0];
                };
                let wrapperEl = getWrapper();
                if (!wrapperEl && swiper.params.createElements) {
                    wrapperEl = utils_createElement("div", swiper.params.wrapperClass);
                    el.append(wrapperEl);
                    utils_elementChildren(el, `.${swiper.params.slideClass}`).forEach((slideEl => {
                        wrapperEl.append(slideEl);
                    }));
                }
                Object.assign(swiper, {
                    el,
                    wrapperEl,
                    slidesEl: swiper.isElement ? el : wrapperEl,
                    mounted: true,
                    rtl: el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl",
                    rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl"),
                    wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box"
                });
                return true;
            }
            init(el) {
                const swiper = this;
                if (swiper.initialized) return swiper;
                const mounted = swiper.mount(el);
                if (mounted === false) return swiper;
                swiper.emit("beforeInit");
                if (swiper.params.breakpoints) swiper.setBreakpoint();
                swiper.addClasses();
                swiper.updateSize();
                swiper.updateSlides();
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
                if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true); else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
                if (swiper.params.loop) swiper.loopCreate();
                swiper.attachEvents();
                [ ...swiper.el.querySelectorAll('[loading="lazy"]') ].forEach((imageEl => {
                    if (imageEl.complete) processLazyPreloader(swiper, imageEl); else imageEl.addEventListener("load", (e => {
                        processLazyPreloader(swiper, e.target);
                    }));
                }));
                preload(swiper);
                swiper.initialized = true;
                preload(swiper);
                swiper.emit("init");
                swiper.emit("afterInit");
                return swiper;
            }
            destroy(deleteInstance = true, cleanStyles = true) {
                const swiper = this;
                const {params, el, wrapperEl, slides} = swiper;
                if (typeof swiper.params === "undefined" || swiper.destroyed) return null;
                swiper.emit("beforeDestroy");
                swiper.initialized = false;
                swiper.detachEvents();
                if (params.loop) swiper.loopDestroy();
                if (cleanStyles) {
                    swiper.removeClasses();
                    el.removeAttribute("style");
                    wrapperEl.removeAttribute("style");
                    if (slides && slides.length) slides.forEach((slideEl => {
                        slideEl.classList.remove(params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
                        slideEl.removeAttribute("style");
                        slideEl.removeAttribute("data-swiper-slide-index");
                    }));
                }
                swiper.emit("destroy");
                Object.keys(swiper.eventsListeners).forEach((eventName => {
                    swiper.off(eventName);
                }));
                if (deleteInstance !== false) {
                    swiper.el.swiper = null;
                    deleteProps(swiper);
                }
                swiper.destroyed = true;
                return null;
            }
            static extendDefaults(newDefaults) {
                utils_extend(extendedDefaults, newDefaults);
            }
            static get extendedDefaults() {
                return extendedDefaults;
            }
            static get defaults() {
                return defaults;
            }
            static installModule(mod) {
                if (!core_Swiper.prototype.__modules__) core_Swiper.prototype.__modules__ = [];
                const modules = core_Swiper.prototype.__modules__;
                if (typeof mod === "function" && modules.indexOf(mod) < 0) modules.push(mod);
            }
            static use(module) {
                if (Array.isArray(module)) {
                    module.forEach((m => core_Swiper.installModule(m)));
                    return core_Swiper;
                }
                core_Swiper.installModule(module);
                return core_Swiper;
            }
        }
        Object.keys(prototypes).forEach((prototypeGroup => {
            Object.keys(prototypes[prototypeGroup]).forEach((protoMethod => {
                core_Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
            }));
        }));
        core_Swiper.use([ Resize, Observer ]);
        const core = core_Swiper;
        function create_element_if_not_defined_createElementIfNotDefined(swiper, originalParams, params, checkProps) {
            if (swiper.params.createElements) Object.keys(checkProps).forEach((key => {
                if (!params[key] && params.auto === true) {
                    let element = utils_elementChildren(swiper.el, `.${checkProps[key]}`)[0];
                    if (!element) {
                        element = utils_createElement("div", checkProps[key]);
                        element.className = checkProps[key];
                        swiper.el.append(element);
                    }
                    params[key] = element;
                    originalParams[key] = element;
                }
            }));
            return params;
        }
        function Navigation({swiper, extendParams, on, emit}) {
            extendParams({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: false,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock",
                    navigationDisabledClass: "swiper-navigation-disabled"
                }
            });
            swiper.navigation = {
                nextEl: null,
                prevEl: null
            };
            const makeElementsArray = el => {
                if (!Array.isArray(el)) el = [ el ].filter((e => !!e));
                return el;
            };
            function getEl(el) {
                let res;
                if (el && typeof el === "string" && swiper.isElement) {
                    res = swiper.el.shadowRoot.querySelector(el);
                    if (res) return res;
                }
                if (el) {
                    if (typeof el === "string") res = [ ...document.querySelectorAll(el) ];
                    if (swiper.params.uniqueNavElements && typeof el === "string" && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) res = swiper.el.querySelector(el);
                }
                if (el && !res) return el;
                return res;
            }
            function toggleEl(el, disabled) {
                const params = swiper.params.navigation;
                el = makeElementsArray(el);
                el.forEach((subEl => {
                    if (subEl) {
                        subEl.classList[disabled ? "add" : "remove"](...params.disabledClass.split(" "));
                        if (subEl.tagName === "BUTTON") subEl.disabled = disabled;
                        if (swiper.params.watchOverflow && swiper.enabled) subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
                    }
                }));
            }
            function update() {
                const {nextEl, prevEl} = swiper.navigation;
                if (swiper.params.loop) {
                    toggleEl(prevEl, false);
                    toggleEl(nextEl, false);
                    return;
                }
                toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
                toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
            }
            function onPrevClick(e) {
                e.preventDefault();
                if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slidePrev();
                emit("navigationPrev");
            }
            function onNextClick(e) {
                e.preventDefault();
                if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slideNext();
                emit("navigationNext");
            }
            function init() {
                const params = swiper.params.navigation;
                swiper.params.navigation = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                });
                if (!(params.nextEl || params.prevEl)) return;
                let nextEl = getEl(params.nextEl);
                let prevEl = getEl(params.prevEl);
                Object.assign(swiper.navigation, {
                    nextEl,
                    prevEl
                });
                nextEl = makeElementsArray(nextEl);
                prevEl = makeElementsArray(prevEl);
                const initButton = (el, dir) => {
                    if (el) el.addEventListener("click", dir === "next" ? onNextClick : onPrevClick);
                    if (!swiper.enabled && el) el.classList.add(...params.lockClass.split(" "));
                };
                nextEl.forEach((el => initButton(el, "next")));
                prevEl.forEach((el => initButton(el, "prev")));
            }
            function destroy() {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = makeElementsArray(nextEl);
                prevEl = makeElementsArray(prevEl);
                const destroyButton = (el, dir) => {
                    el.removeEventListener("click", dir === "next" ? onNextClick : onPrevClick);
                    el.classList.remove(...swiper.params.navigation.disabledClass.split(" "));
                };
                nextEl.forEach((el => destroyButton(el, "next")));
                prevEl.forEach((el => destroyButton(el, "prev")));
            }
            on("init", (() => {
                if (swiper.params.navigation.enabled === false) disable(); else {
                    init();
                    update();
                }
            }));
            on("toEdge fromEdge lock unlock", (() => {
                update();
            }));
            on("destroy", (() => {
                destroy();
            }));
            on("enable disable", (() => {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = makeElementsArray(nextEl);
                prevEl = makeElementsArray(prevEl);
                [ ...nextEl, ...prevEl ].filter((el => !!el)).forEach((el => el.classList[swiper.enabled ? "remove" : "add"](swiper.params.navigation.lockClass)));
            }));
            on("click", ((_s, e) => {
                let {nextEl, prevEl} = swiper.navigation;
                nextEl = makeElementsArray(nextEl);
                prevEl = makeElementsArray(prevEl);
                const targetEl = e.target;
                if (swiper.params.navigation.hideOnClick && !prevEl.includes(targetEl) && !nextEl.includes(targetEl)) {
                    if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
                    let isHidden;
                    if (nextEl.length) isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass); else if (prevEl.length) isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
                    if (isHidden === true) emit("navigationShow"); else emit("navigationHide");
                    [ ...nextEl, ...prevEl ].filter((el => !!el)).forEach((el => el.classList.toggle(swiper.params.navigation.hiddenClass)));
                }
            }));
            const enable = () => {
                swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(" "));
                init();
                update();
            };
            const disable = () => {
                swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(" "));
                destroy();
            };
            Object.assign(swiper.navigation, {
                enable,
                disable,
                update,
                init,
                destroy
            });
        }
        function classes_to_selector_classesToSelector(classes = "") {
            return `.${classes.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
        }
        function Pagination({swiper, extendParams, on, emit}) {
            const pfx = "swiper-pagination";
            extendParams({
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: false,
                    hideOnClick: false,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: false,
                    type: "bullets",
                    dynamicBullets: false,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: number => number,
                    formatFractionTotal: number => number,
                    bulletClass: `${pfx}-bullet`,
                    bulletActiveClass: `${pfx}-bullet-active`,
                    modifierClass: `${pfx}-`,
                    currentClass: `${pfx}-current`,
                    totalClass: `${pfx}-total`,
                    hiddenClass: `${pfx}-hidden`,
                    progressbarFillClass: `${pfx}-progressbar-fill`,
                    progressbarOppositeClass: `${pfx}-progressbar-opposite`,
                    clickableClass: `${pfx}-clickable`,
                    lockClass: `${pfx}-lock`,
                    horizontalClass: `${pfx}-horizontal`,
                    verticalClass: `${pfx}-vertical`,
                    paginationDisabledClass: `${pfx}-disabled`
                }
            });
            swiper.pagination = {
                el: null,
                bullets: []
            };
            let bulletSize;
            let dynamicBulletIndex = 0;
            const makeElementsArray = el => {
                if (!Array.isArray(el)) el = [ el ].filter((e => !!e));
                return el;
            };
            function isPaginationDisabled() {
                return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
            }
            function setSideBullets(bulletEl, position) {
                const {bulletActiveClass} = swiper.params.pagination;
                if (!bulletEl) return;
                bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
                if (bulletEl) {
                    bulletEl.classList.add(`${bulletActiveClass}-${position}`);
                    bulletEl = bulletEl[`${position === "prev" ? "previous" : "next"}ElementSibling`];
                    if (bulletEl) bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
                }
            }
            function onBulletClick(e) {
                const bulletEl = e.target.closest(classes_to_selector_classesToSelector(swiper.params.pagination.bulletClass));
                if (!bulletEl) return;
                e.preventDefault();
                const index = utils_elementIndex(bulletEl) * swiper.params.slidesPerGroup;
                if (swiper.params.loop) {
                    if (swiper.realIndex === index) return;
                    const newSlideIndex = swiper.getSlideIndexByData(index);
                    const currentSlideIndex = swiper.getSlideIndexByData(swiper.realIndex);
                    if (newSlideIndex > swiper.slides.length - swiper.loopedSlides) swiper.loopFix({
                        direction: newSlideIndex > currentSlideIndex ? "next" : "prev",
                        activeSlideIndex: newSlideIndex,
                        slideTo: false
                    });
                    swiper.slideToLoop(index);
                } else swiper.slideTo(index);
            }
            function update() {
                const rtl = swiper.rtl;
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                let el = swiper.pagination.el;
                el = makeElementsArray(el);
                let current;
                let previousIndex;
                const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
                const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                if (swiper.params.loop) {
                    previousIndex = swiper.previousRealIndex || 0;
                    current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
                } else if (typeof swiper.snapIndex !== "undefined") {
                    current = swiper.snapIndex;
                    previousIndex = swiper.previousSnapIndex;
                } else {
                    previousIndex = swiper.previousIndex || 0;
                    current = swiper.activeIndex || 0;
                }
                if (params.type === "bullets" && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
                    const bullets = swiper.pagination.bullets;
                    let firstIndex;
                    let lastIndex;
                    let midIndex;
                    if (params.dynamicBullets) {
                        bulletSize = elementOuterSize(bullets[0], swiper.isHorizontal() ? "width" : "height", true);
                        el.forEach((subEl => {
                            subEl.style[swiper.isHorizontal() ? "width" : "height"] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
                        }));
                        if (params.dynamicMainBullets > 1 && previousIndex !== void 0) {
                            dynamicBulletIndex += current - (previousIndex || 0);
                            if (dynamicBulletIndex > params.dynamicMainBullets - 1) dynamicBulletIndex = params.dynamicMainBullets - 1; else if (dynamicBulletIndex < 0) dynamicBulletIndex = 0;
                        }
                        firstIndex = Math.max(current - dynamicBulletIndex, 0);
                        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                        midIndex = (lastIndex + firstIndex) / 2;
                    }
                    bullets.forEach((bulletEl => {
                        const classesToRemove = [ ...[ "", "-next", "-next-next", "-prev", "-prev-prev", "-main" ].map((suffix => `${params.bulletActiveClass}${suffix}`)) ].map((s => typeof s === "string" && s.includes(" ") ? s.split(" ") : s)).flat();
                        bulletEl.classList.remove(...classesToRemove);
                    }));
                    if (el.length > 1) bullets.forEach((bullet => {
                        const bulletIndex = utils_elementIndex(bullet);
                        if (bulletIndex === current) bullet.classList.add(...params.bulletActiveClass.split(" "));
                        if (params.dynamicBullets) {
                            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) bullet.classList.add(...`${params.bulletActiveClass}-main`.split(" "));
                            if (bulletIndex === firstIndex) setSideBullets(bullet, "prev");
                            if (bulletIndex === lastIndex) setSideBullets(bullet, "next");
                        }
                    })); else {
                        const bullet = bullets[current];
                        if (bullet) bullet.classList.add(...params.bulletActiveClass.split(" "));
                        if (params.dynamicBullets) {
                            const firstDisplayedBullet = bullets[firstIndex];
                            const lastDisplayedBullet = bullets[lastIndex];
                            for (let i = firstIndex; i <= lastIndex; i += 1) if (bullets[i]) bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(" "));
                            setSideBullets(firstDisplayedBullet, "prev");
                            setSideBullets(lastDisplayedBullet, "next");
                        }
                    }
                    if (params.dynamicBullets) {
                        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
                        const offsetProp = rtl ? "right" : "left";
                        bullets.forEach((bullet => {
                            bullet.style[swiper.isHorizontal() ? offsetProp : "top"] = `${bulletsOffset}px`;
                        }));
                    }
                }
                el.forEach(((subEl, subElIndex) => {
                    if (params.type === "fraction") {
                        subEl.querySelectorAll(classes_to_selector_classesToSelector(params.currentClass)).forEach((fractionEl => {
                            fractionEl.textContent = params.formatFractionCurrent(current + 1);
                        }));
                        subEl.querySelectorAll(classes_to_selector_classesToSelector(params.totalClass)).forEach((totalEl => {
                            totalEl.textContent = params.formatFractionTotal(total);
                        }));
                    }
                    if (params.type === "progressbar") {
                        let progressbarDirection;
                        if (params.progressbarOpposite) progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal"; else progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
                        const scale = (current + 1) / total;
                        let scaleX = 1;
                        let scaleY = 1;
                        if (progressbarDirection === "horizontal") scaleX = scale; else scaleY = scale;
                        subEl.querySelectorAll(classes_to_selector_classesToSelector(params.progressbarFillClass)).forEach((progressEl => {
                            progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
                            progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
                        }));
                    }
                    if (params.type === "custom" && params.renderCustom) {
                        subEl.innerHTML = params.renderCustom(swiper, current + 1, total);
                        if (subElIndex === 0) emit("paginationRender", subEl);
                    } else {
                        if (subElIndex === 0) emit("paginationRender", subEl);
                        emit("paginationUpdate", subEl);
                    }
                    if (swiper.params.watchOverflow && swiper.enabled) subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
                }));
            }
            function render() {
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
                let el = swiper.pagination.el;
                el = makeElementsArray(el);
                let paginationHTML = "";
                if (params.type === "bullets") {
                    let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                    if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) numberOfBullets = slidesLength;
                    for (let i = 0; i < numberOfBullets; i += 1) if (params.renderBullet) paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass); else paginationHTML += `<${params.bulletElement} class="${params.bulletClass}"></${params.bulletElement}>`;
                }
                if (params.type === "fraction") if (params.renderFraction) paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass); else paginationHTML = `<span class="${params.currentClass}"></span>` + " / " + `<span class="${params.totalClass}"></span>`;
                if (params.type === "progressbar") if (params.renderProgressbar) paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass); else paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
                swiper.pagination.bullets = [];
                el.forEach((subEl => {
                    if (params.type !== "custom") subEl.innerHTML = paginationHTML || "";
                    if (params.type === "bullets") swiper.pagination.bullets.push(...subEl.querySelectorAll(classes_to_selector_classesToSelector(params.bulletClass)));
                }));
                if (params.type !== "custom") emit("paginationRender", el[0]);
            }
            function init() {
                swiper.params.pagination = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
                    el: "swiper-pagination"
                });
                const params = swiper.params.pagination;
                if (!params.el) return;
                let el;
                if (typeof params.el === "string" && swiper.isElement) el = swiper.el.shadowRoot.querySelector(params.el);
                if (!el && typeof params.el === "string") el = [ ...document.querySelectorAll(params.el) ];
                if (!el) el = params.el;
                if (!el || el.length === 0) return;
                if (swiper.params.uniqueNavElements && typeof params.el === "string" && Array.isArray(el) && el.length > 1) {
                    el = [ ...swiper.el.querySelectorAll(params.el) ];
                    if (el.length > 1) el = el.filter((subEl => {
                        if (utils_elementParents(subEl, ".swiper")[0] !== swiper.el) return false;
                        return true;
                    }))[0];
                }
                if (Array.isArray(el) && el.length === 1) el = el[0];
                Object.assign(swiper.pagination, {
                    el
                });
                el = makeElementsArray(el);
                el.forEach((subEl => {
                    if (params.type === "bullets" && params.clickable) subEl.classList.add(params.clickableClass);
                    subEl.classList.add(params.modifierClass + params.type);
                    subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                    if (params.type === "bullets" && params.dynamicBullets) {
                        subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
                        dynamicBulletIndex = 0;
                        if (params.dynamicMainBullets < 1) params.dynamicMainBullets = 1;
                    }
                    if (params.type === "progressbar" && params.progressbarOpposite) subEl.classList.add(params.progressbarOppositeClass);
                    if (params.clickable) subEl.addEventListener("click", onBulletClick);
                    if (!swiper.enabled) subEl.classList.add(params.lockClass);
                }));
            }
            function destroy() {
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                let el = swiper.pagination.el;
                if (el) {
                    el = makeElementsArray(el);
                    el.forEach((subEl => {
                        subEl.classList.remove(params.hiddenClass);
                        subEl.classList.remove(params.modifierClass + params.type);
                        subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                        if (params.clickable) subEl.removeEventListener("click", onBulletClick);
                    }));
                }
                if (swiper.pagination.bullets) swiper.pagination.bullets.forEach((subEl => subEl.classList.remove(...params.bulletActiveClass.split(" "))));
            }
            on("changeDirection", (() => {
                if (!swiper.pagination || !swiper.pagination.el) return;
                const params = swiper.params.pagination;
                let {el} = swiper.pagination;
                el = makeElementsArray(el);
                el.forEach((subEl => {
                    subEl.classList.remove(params.horizontalClass, params.verticalClass);
                    subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                }));
            }));
            on("init", (() => {
                if (swiper.params.pagination.enabled === false) disable(); else {
                    init();
                    render();
                    update();
                }
            }));
            on("activeIndexChange", (() => {
                if (typeof swiper.snapIndex === "undefined") update();
            }));
            on("snapIndexChange", (() => {
                update();
            }));
            on("snapGridLengthChange", (() => {
                render();
                update();
            }));
            on("destroy", (() => {
                destroy();
            }));
            on("enable disable", (() => {
                let {el} = swiper.pagination;
                if (el) {
                    el = makeElementsArray(el);
                    el.forEach((subEl => subEl.classList[swiper.enabled ? "remove" : "add"](swiper.params.pagination.lockClass)));
                }
            }));
            on("lock unlock", (() => {
                update();
            }));
            on("click", ((_s, e) => {
                const targetEl = e.target;
                let {el} = swiper.pagination;
                if (!Array.isArray(el)) el = [ el ].filter((element => !!element));
                if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
                    if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
                    const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
                    if (isHidden === true) emit("paginationShow"); else emit("paginationHide");
                    el.forEach((subEl => subEl.classList.toggle(swiper.params.pagination.hiddenClass)));
                }
            }));
            const enable = () => {
                swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
                let {el} = swiper.pagination;
                if (el) {
                    el = makeElementsArray(el);
                    el.forEach((subEl => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass)));
                }
                init();
                render();
                update();
            };
            const disable = () => {
                swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
                let {el} = swiper.pagination;
                if (el) {
                    el = makeElementsArray(el);
                    el.forEach((subEl => subEl.classList.add(swiper.params.pagination.paginationDisabledClass)));
                }
                destroy();
            };
            Object.assign(swiper.pagination, {
                enable,
                disable,
                render,
                update,
                init,
                destroy
            });
        }
        function buildSliders() {
            let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
            if (sliders) sliders.forEach((slider => {
                slider.parentElement.classList.add("swiper");
                slider.classList.add("swiper-wrapper");
                for (const slide of slider.children) slide.classList.add("swiper-slide");
            }));
        }
        function initSliders() {
            if (document.querySelector(".slider-testimonials")) new core(".slider-testimonials", {
                modules: [ Pagination ],
                observer: true,
                observeParents: true,
                slidesPerView: 1,
                spaceBetween: 32,
                speed: 800,
                pagination: {
                    el: ".slider-testimonials .slider-testimonials__dotts",
                    clickable: true
                },
                on: {}
            });
            if (document.querySelector(".slider-shots")) new core(".slider-shots", {
                modules: [ Navigation ],
                observer: true,
                observeParents: true,
                speed: 800,
                navigation: {
                    prevEl: ".slider-shots .slider-arrow-prev",
                    nextEl: ".slider-shots .slider-arrow-next"
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                        autoHeight: true
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    }
                },
                on: {}
            });
        }
        window.addEventListener("load", (function(e) {
            buildSliders();
            initSliders();
        }));
        var enums_top = "top";
        var bottom = "bottom";
        var right = "right";
        var left = "left";
        var auto = "auto";
        var basePlacements = [ enums_top, bottom, right, left ];
        var start = "start";
        var end = "end";
        var clippingParents = "clippingParents";
        var viewport = "viewport";
        var popper = "popper";
        var reference = "reference";
        var variationPlacements = basePlacements.reduce((function(acc, placement) {
            return acc.concat([ placement + "-" + start, placement + "-" + end ]);
        }), []);
        var enums_placements = [].concat(basePlacements, [ auto ]).reduce((function(acc, placement) {
            return acc.concat([ placement, placement + "-" + start, placement + "-" + end ]);
        }), []);
        var beforeRead = "beforeRead";
        var read = "read";
        var afterRead = "afterRead";
        var beforeMain = "beforeMain";
        var main = "main";
        var afterMain = "afterMain";
        var beforeWrite = "beforeWrite";
        var write = "write";
        var afterWrite = "afterWrite";
        var modifierPhases = [ beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite ];
        function getNodeName(element) {
            return element ? (element.nodeName || "").toLowerCase() : null;
        }
        function getWindow_getWindow(node) {
            if (node == null) return window;
            if (node.toString() !== "[object Window]") {
                var ownerDocument = node.ownerDocument;
                return ownerDocument ? ownerDocument.defaultView || window : window;
            }
            return node;
        }
        function isElement(node) {
            var OwnElement = getWindow_getWindow(node).Element;
            return node instanceof OwnElement || node instanceof Element;
        }
        function isHTMLElement(node) {
            var OwnElement = getWindow_getWindow(node).HTMLElement;
            return node instanceof OwnElement || node instanceof HTMLElement;
        }
        function isShadowRoot(node) {
            if (typeof ShadowRoot === "undefined") return false;
            var OwnElement = getWindow_getWindow(node).ShadowRoot;
            return node instanceof OwnElement || node instanceof ShadowRoot;
        }
        function applyStyles(_ref) {
            var state = _ref.state;
            Object.keys(state.elements).forEach((function(name) {
                var style = state.styles[name] || {};
                var attributes = state.attributes[name] || {};
                var element = state.elements[name];
                if (!isHTMLElement(element) || !getNodeName(element)) return;
                Object.assign(element.style, style);
                Object.keys(attributes).forEach((function(name) {
                    var value = attributes[name];
                    if (value === false) element.removeAttribute(name); else element.setAttribute(name, value === true ? "" : value);
                }));
            }));
        }
        function effect(_ref2) {
            var state = _ref2.state;
            var initialStyles = {
                popper: {
                    position: state.options.strategy,
                    left: "0",
                    top: "0",
                    margin: "0"
                },
                arrow: {
                    position: "absolute"
                },
                reference: {}
            };
            Object.assign(state.elements.popper.style, initialStyles.popper);
            state.styles = initialStyles;
            if (state.elements.arrow) Object.assign(state.elements.arrow.style, initialStyles.arrow);
            return function() {
                Object.keys(state.elements).forEach((function(name) {
                    var element = state.elements[name];
                    var attributes = state.attributes[name] || {};
                    var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
                    var style = styleProperties.reduce((function(style, property) {
                        style[property] = "";
                        return style;
                    }), {});
                    if (!isHTMLElement(element) || !getNodeName(element)) return;
                    Object.assign(element.style, style);
                    Object.keys(attributes).forEach((function(attribute) {
                        element.removeAttribute(attribute);
                    }));
                }));
            };
        }
        const modifiers_applyStyles = {
            name: "applyStyles",
            enabled: true,
            phase: "write",
            fn: applyStyles,
            effect,
            requires: [ "computeStyles" ]
        };
        function getBasePlacement(placement) {
            return placement.split("-")[0];
        }
        var math_max = Math.max;
        var math_min = Math.min;
        var round = Math.round;
        function getUAString() {
            var uaData = navigator.userAgentData;
            if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) return uaData.brands.map((function(item) {
                return item.brand + "/" + item.version;
            })).join(" ");
            return navigator.userAgent;
        }
        function isLayoutViewport() {
            return !/^((?!chrome|android).)*safari/i.test(getUAString());
        }
        function getBoundingClientRect(element, includeScale, isFixedStrategy) {
            if (includeScale === void 0) includeScale = false;
            if (isFixedStrategy === void 0) isFixedStrategy = false;
            var clientRect = element.getBoundingClientRect();
            var scaleX = 1;
            var scaleY = 1;
            if (includeScale && isHTMLElement(element)) {
                scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
                scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
            }
            var _ref = isElement(element) ? getWindow_getWindow(element) : window, visualViewport = _ref.visualViewport;
            var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
            var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
            var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
            var width = clientRect.width / scaleX;
            var height = clientRect.height / scaleY;
            return {
                width,
                height,
                top: y,
                right: x + width,
                bottom: y + height,
                left: x,
                x,
                y
            };
        }
        function getLayoutRect(element) {
            var clientRect = getBoundingClientRect(element);
            var width = element.offsetWidth;
            var height = element.offsetHeight;
            if (Math.abs(clientRect.width - width) <= 1) width = clientRect.width;
            if (Math.abs(clientRect.height - height) <= 1) height = clientRect.height;
            return {
                x: element.offsetLeft,
                y: element.offsetTop,
                width,
                height
            };
        }
        function contains(parent, child) {
            var rootNode = child.getRootNode && child.getRootNode();
            if (parent.contains(child)) return true; else if (rootNode && isShadowRoot(rootNode)) {
                var next = child;
                do {
                    if (next && parent.isSameNode(next)) return true;
                    next = next.parentNode || next.host;
                } while (next);
            }
            return false;
        }
        function getComputedStyle_getComputedStyle(element) {
            return getWindow_getWindow(element).getComputedStyle(element);
        }
        function isTableElement(element) {
            return [ "table", "td", "th" ].indexOf(getNodeName(element)) >= 0;
        }
        function getDocumentElement(element) {
            return ((isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
        }
        function getParentNode(element) {
            if (getNodeName(element) === "html") return element;
            return element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || getDocumentElement(element);
        }
        function getTrueOffsetParent(element) {
            if (!isHTMLElement(element) || getComputedStyle_getComputedStyle(element).position === "fixed") return null;
            return element.offsetParent;
        }
        function getContainingBlock(element) {
            var isFirefox = /firefox/i.test(getUAString());
            var isIE = /Trident/i.test(getUAString());
            if (isIE && isHTMLElement(element)) {
                var elementCss = getComputedStyle_getComputedStyle(element);
                if (elementCss.position === "fixed") return null;
            }
            var currentNode = getParentNode(element);
            if (isShadowRoot(currentNode)) currentNode = currentNode.host;
            while (isHTMLElement(currentNode) && [ "html", "body" ].indexOf(getNodeName(currentNode)) < 0) {
                var css = getComputedStyle_getComputedStyle(currentNode);
                if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || [ "transform", "perspective" ].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") return currentNode; else currentNode = currentNode.parentNode;
            }
            return null;
        }
        function getOffsetParent(element) {
            var window = getWindow_getWindow(element);
            var offsetParent = getTrueOffsetParent(element);
            while (offsetParent && isTableElement(offsetParent) && getComputedStyle_getComputedStyle(offsetParent).position === "static") offsetParent = getTrueOffsetParent(offsetParent);
            if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle_getComputedStyle(offsetParent).position === "static")) return window;
            return offsetParent || getContainingBlock(element) || window;
        }
        function getMainAxisFromPlacement(placement) {
            return [ "top", "bottom" ].indexOf(placement) >= 0 ? "x" : "y";
        }
        function within(min, value, max) {
            return math_max(min, math_min(value, max));
        }
        function withinMaxClamp(min, value, max) {
            var v = within(min, value, max);
            return v > max ? max : v;
        }
        function getFreshSideObject() {
            return {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            };
        }
        function mergePaddingObject(paddingObject) {
            return Object.assign({}, getFreshSideObject(), paddingObject);
        }
        function expandToHashMap(value, keys) {
            return keys.reduce((function(hashMap, key) {
                hashMap[key] = value;
                return hashMap;
            }), {});
        }
        var toPaddingObject = function toPaddingObject(padding, state) {
            padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
                placement: state.placement
            })) : padding;
            return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
        };
        function arrow(_ref) {
            var _state$modifiersData$;
            var state = _ref.state, name = _ref.name, options = _ref.options;
            var arrowElement = state.elements.arrow;
            var popperOffsets = state.modifiersData.popperOffsets;
            var basePlacement = getBasePlacement(state.placement);
            var axis = getMainAxisFromPlacement(basePlacement);
            var isVertical = [ left, right ].indexOf(basePlacement) >= 0;
            var len = isVertical ? "height" : "width";
            if (!arrowElement || !popperOffsets) return;
            var paddingObject = toPaddingObject(options.padding, state);
            var arrowRect = getLayoutRect(arrowElement);
            var minProp = axis === "y" ? enums_top : left;
            var maxProp = axis === "y" ? bottom : right;
            var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
            var startDiff = popperOffsets[axis] - state.rects.reference[axis];
            var arrowOffsetParent = getOffsetParent(arrowElement);
            var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
            var centerToReference = endDiff / 2 - startDiff / 2;
            var min = paddingObject[minProp];
            var max = clientSize - arrowRect[len] - paddingObject[maxProp];
            var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
            var offset = within(min, center, max);
            var axisProp = axis;
            state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, 
            _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
        }
        function arrow_effect(_ref2) {
            var state = _ref2.state, options = _ref2.options;
            var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
            if (arrowElement == null) return;
            if (typeof arrowElement === "string") {
                arrowElement = state.elements.popper.querySelector(arrowElement);
                if (!arrowElement) return;
            }
            if (!contains(state.elements.popper, arrowElement)) return;
            state.elements.arrow = arrowElement;
        }
        const modifiers_arrow = {
            name: "arrow",
            enabled: true,
            phase: "main",
            fn: arrow,
            effect: arrow_effect,
            requires: [ "popperOffsets" ],
            requiresIfExists: [ "preventOverflow" ]
        };
        function getVariation(placement) {
            return placement.split("-")[1];
        }
        var unsetSides = {
            top: "auto",
            right: "auto",
            bottom: "auto",
            left: "auto"
        };
        function roundOffsetsByDPR(_ref, win) {
            var x = _ref.x, y = _ref.y;
            var dpr = win.devicePixelRatio || 1;
            return {
                x: round(x * dpr) / dpr || 0,
                y: round(y * dpr) / dpr || 0
            };
        }
        function mapToStyles(_ref2) {
            var _Object$assign2;
            var popper = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
            var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
            var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
                x,
                y
            }) : {
                x,
                y
            };
            x = _ref3.x;
            y = _ref3.y;
            var hasX = offsets.hasOwnProperty("x");
            var hasY = offsets.hasOwnProperty("y");
            var sideX = left;
            var sideY = enums_top;
            var win = window;
            if (adaptive) {
                var offsetParent = getOffsetParent(popper);
                var heightProp = "clientHeight";
                var widthProp = "clientWidth";
                if (offsetParent === getWindow_getWindow(popper)) {
                    offsetParent = getDocumentElement(popper);
                    if (getComputedStyle_getComputedStyle(offsetParent).position !== "static" && position === "absolute") {
                        heightProp = "scrollHeight";
                        widthProp = "scrollWidth";
                    }
                }
                offsetParent;
                if (placement === enums_top || (placement === left || placement === right) && variation === end) {
                    sideY = bottom;
                    var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
                    y -= offsetY - popperRect.height;
                    y *= gpuAcceleration ? 1 : -1;
                }
                if (placement === left || (placement === enums_top || placement === bottom) && variation === end) {
                    sideX = right;
                    var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
                    x -= offsetX - popperRect.width;
                    x *= gpuAcceleration ? 1 : -1;
                }
            }
            var commonStyles = Object.assign({
                position
            }, adaptive && unsetSides);
            var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
                x,
                y
            }, getWindow_getWindow(popper)) : {
                x,
                y
            };
            x = _ref4.x;
            y = _ref4.y;
            if (gpuAcceleration) {
                var _Object$assign;
                return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", 
                _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", 
                _Object$assign));
            }
            return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", 
            _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
        }
        function computeStyles(_ref5) {
            var state = _ref5.state, options = _ref5.options;
            var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
            var commonStyles = {
                placement: getBasePlacement(state.placement),
                variation: getVariation(state.placement),
                popper: state.elements.popper,
                popperRect: state.rects.popper,
                gpuAcceleration,
                isFixed: state.options.strategy === "fixed"
            };
            if (state.modifiersData.popperOffsets != null) state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
                offsets: state.modifiersData.popperOffsets,
                position: state.options.strategy,
                adaptive,
                roundOffsets
            })));
            if (state.modifiersData.arrow != null) state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
                offsets: state.modifiersData.arrow,
                position: "absolute",
                adaptive: false,
                roundOffsets
            })));
            state.attributes.popper = Object.assign({}, state.attributes.popper, {
                "data-popper-placement": state.placement
            });
        }
        const modifiers_computeStyles = {
            name: "computeStyles",
            enabled: true,
            phase: "beforeWrite",
            fn: computeStyles,
            data: {}
        };
        var passive = {
            passive: true
        };
        function eventListeners_effect(_ref) {
            var state = _ref.state, instance = _ref.instance, options = _ref.options;
            var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
            var window = getWindow_getWindow(state.elements.popper);
            var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
            if (scroll) scrollParents.forEach((function(scrollParent) {
                scrollParent.addEventListener("scroll", instance.update, passive);
            }));
            if (resize) window.addEventListener("resize", instance.update, passive);
            return function() {
                if (scroll) scrollParents.forEach((function(scrollParent) {
                    scrollParent.removeEventListener("scroll", instance.update, passive);
                }));
                if (resize) window.removeEventListener("resize", instance.update, passive);
            };
        }
        const eventListeners = {
            name: "eventListeners",
            enabled: true,
            phase: "write",
            fn: function fn() {},
            effect: eventListeners_effect,
            data: {}
        };
        var hash = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        function getOppositePlacement(placement) {
            return placement.replace(/left|right|bottom|top/g, (function(matched) {
                return hash[matched];
            }));
        }
        var getOppositeVariationPlacement_hash = {
            start: "end",
            end: "start"
        };
        function getOppositeVariationPlacement(placement) {
            return placement.replace(/start|end/g, (function(matched) {
                return getOppositeVariationPlacement_hash[matched];
            }));
        }
        function getWindowScroll(node) {
            var win = getWindow_getWindow(node);
            var scrollLeft = win.pageXOffset;
            var scrollTop = win.pageYOffset;
            return {
                scrollLeft,
                scrollTop
            };
        }
        function getWindowScrollBarX(element) {
            return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
        }
        function getViewportRect(element, strategy) {
            var win = getWindow_getWindow(element);
            var html = getDocumentElement(element);
            var visualViewport = win.visualViewport;
            var width = html.clientWidth;
            var height = html.clientHeight;
            var x = 0;
            var y = 0;
            if (visualViewport) {
                width = visualViewport.width;
                height = visualViewport.height;
                var layoutViewport = isLayoutViewport();
                if (layoutViewport || !layoutViewport && strategy === "fixed") {
                    x = visualViewport.offsetLeft;
                    y = visualViewport.offsetTop;
                }
            }
            return {
                width,
                height,
                x: x + getWindowScrollBarX(element),
                y
            };
        }
        function getDocumentRect(element) {
            var _element$ownerDocumen;
            var html = getDocumentElement(element);
            var winScroll = getWindowScroll(element);
            var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
            var width = math_max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
            var height = math_max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
            var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
            var y = -winScroll.scrollTop;
            if (getComputedStyle_getComputedStyle(body || html).direction === "rtl") x += math_max(html.clientWidth, body ? body.clientWidth : 0) - width;
            return {
                width,
                height,
                x,
                y
            };
        }
        function isScrollParent(element) {
            var _getComputedStyle = getComputedStyle_getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
            return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
        }
        function getScrollParent(node) {
            if ([ "html", "body", "#document" ].indexOf(getNodeName(node)) >= 0) return node.ownerDocument.body;
            if (isHTMLElement(node) && isScrollParent(node)) return node;
            return getScrollParent(getParentNode(node));
        }
        function listScrollParents(element, list) {
            var _element$ownerDocumen;
            if (list === void 0) list = [];
            var scrollParent = getScrollParent(element);
            var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
            var win = getWindow_getWindow(scrollParent);
            var target = isBody ? [ win ].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
            var updatedList = list.concat(target);
            return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)));
        }
        function rectToClientRect(rect) {
            return Object.assign({}, rect, {
                left: rect.x,
                top: rect.y,
                right: rect.x + rect.width,
                bottom: rect.y + rect.height
            });
        }
        function getInnerBoundingClientRect(element, strategy) {
            var rect = getBoundingClientRect(element, false, strategy === "fixed");
            rect.top = rect.top + element.clientTop;
            rect.left = rect.left + element.clientLeft;
            rect.bottom = rect.top + element.clientHeight;
            rect.right = rect.left + element.clientWidth;
            rect.width = element.clientWidth;
            rect.height = element.clientHeight;
            rect.x = rect.left;
            rect.y = rect.top;
            return rect;
        }
        function getClientRectFromMixedType(element, clippingParent, strategy) {
            return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
        }
        function getClippingParents(element) {
            var clippingParents = listScrollParents(getParentNode(element));
            var canEscapeClipping = [ "absolute", "fixed" ].indexOf(getComputedStyle_getComputedStyle(element).position) >= 0;
            var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
            if (!isElement(clipperElement)) return [];
            return clippingParents.filter((function(clippingParent) {
                return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
            }));
        }
        function getClippingRect(element, boundary, rootBoundary, strategy) {
            var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
            var clippingParents = [].concat(mainClippingParents, [ rootBoundary ]);
            var firstClippingParent = clippingParents[0];
            var clippingRect = clippingParents.reduce((function(accRect, clippingParent) {
                var rect = getClientRectFromMixedType(element, clippingParent, strategy);
                accRect.top = math_max(rect.top, accRect.top);
                accRect.right = math_min(rect.right, accRect.right);
                accRect.bottom = math_min(rect.bottom, accRect.bottom);
                accRect.left = math_max(rect.left, accRect.left);
                return accRect;
            }), getClientRectFromMixedType(element, firstClippingParent, strategy));
            clippingRect.width = clippingRect.right - clippingRect.left;
            clippingRect.height = clippingRect.bottom - clippingRect.top;
            clippingRect.x = clippingRect.left;
            clippingRect.y = clippingRect.top;
            return clippingRect;
        }
        function computeOffsets(_ref) {
            var reference = _ref.reference, element = _ref.element, placement = _ref.placement;
            var basePlacement = placement ? getBasePlacement(placement) : null;
            var variation = placement ? getVariation(placement) : null;
            var commonX = reference.x + reference.width / 2 - element.width / 2;
            var commonY = reference.y + reference.height / 2 - element.height / 2;
            var offsets;
            switch (basePlacement) {
              case enums_top:
                offsets = {
                    x: commonX,
                    y: reference.y - element.height
                };
                break;

              case bottom:
                offsets = {
                    x: commonX,
                    y: reference.y + reference.height
                };
                break;

              case right:
                offsets = {
                    x: reference.x + reference.width,
                    y: commonY
                };
                break;

              case left:
                offsets = {
                    x: reference.x - element.width,
                    y: commonY
                };
                break;

              default:
                offsets = {
                    x: reference.x,
                    y: reference.y
                };
            }
            var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
            if (mainAxis != null) {
                var len = mainAxis === "y" ? "height" : "width";
                switch (variation) {
                  case start:
                    offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
                    break;

                  case end:
                    offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
                    break;

                  default:
                }
            }
            return offsets;
        }
        function detectOverflow(state, options) {
            if (options === void 0) options = {};
            var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
            var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
            var altContext = elementContext === popper ? reference : popper;
            var popperRect = state.rects.popper;
            var element = state.elements[altBoundary ? altContext : elementContext];
            var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
            var referenceClientRect = getBoundingClientRect(state.elements.reference);
            var popperOffsets = computeOffsets({
                reference: referenceClientRect,
                element: popperRect,
                strategy: "absolute",
                placement
            });
            var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
            var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
            var overflowOffsets = {
                top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
                bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
                left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
                right: elementClientRect.right - clippingClientRect.right + paddingObject.right
            };
            var offsetData = state.modifiersData.offset;
            if (elementContext === popper && offsetData) {
                var offset = offsetData[placement];
                Object.keys(overflowOffsets).forEach((function(key) {
                    var multiply = [ right, bottom ].indexOf(key) >= 0 ? 1 : -1;
                    var axis = [ enums_top, bottom ].indexOf(key) >= 0 ? "y" : "x";
                    overflowOffsets[key] += offset[axis] * multiply;
                }));
            }
            return overflowOffsets;
        }
        function computeAutoPlacement(state, options) {
            if (options === void 0) options = {};
            var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? enums_placements : _options$allowedAutoP;
            var variation = getVariation(placement);
            var placements = variation ? flipVariations ? variationPlacements : variationPlacements.filter((function(placement) {
                return getVariation(placement) === variation;
            })) : basePlacements;
            var allowedPlacements = placements.filter((function(placement) {
                return allowedAutoPlacements.indexOf(placement) >= 0;
            }));
            if (allowedPlacements.length === 0) allowedPlacements = placements;
            var overflows = allowedPlacements.reduce((function(acc, placement) {
                acc[placement] = detectOverflow(state, {
                    placement,
                    boundary,
                    rootBoundary,
                    padding
                })[getBasePlacement(placement)];
                return acc;
            }), {});
            return Object.keys(overflows).sort((function(a, b) {
                return overflows[a] - overflows[b];
            }));
        }
        function getExpandedFallbackPlacements(placement) {
            if (getBasePlacement(placement) === auto) return [];
            var oppositePlacement = getOppositePlacement(placement);
            return [ getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement) ];
        }
        function flip(_ref) {
            var state = _ref.state, options = _ref.options, name = _ref.name;
            if (state.modifiersData[name]._skip) return;
            var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
            var preferredPlacement = state.options.placement;
            var basePlacement = getBasePlacement(preferredPlacement);
            var isBasePlacement = basePlacement === preferredPlacement;
            var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [ getOppositePlacement(preferredPlacement) ] : getExpandedFallbackPlacements(preferredPlacement));
            var placements = [ preferredPlacement ].concat(fallbackPlacements).reduce((function(acc, placement) {
                return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
                    placement,
                    boundary,
                    rootBoundary,
                    padding,
                    flipVariations,
                    allowedAutoPlacements
                }) : placement);
            }), []);
            var referenceRect = state.rects.reference;
            var popperRect = state.rects.popper;
            var checksMap = new Map;
            var makeFallbackChecks = true;
            var firstFittingPlacement = placements[0];
            for (var i = 0; i < placements.length; i++) {
                var placement = placements[i];
                var _basePlacement = getBasePlacement(placement);
                var isStartVariation = getVariation(placement) === start;
                var isVertical = [ enums_top, bottom ].indexOf(_basePlacement) >= 0;
                var len = isVertical ? "width" : "height";
                var overflow = detectOverflow(state, {
                    placement,
                    boundary,
                    rootBoundary,
                    altBoundary,
                    padding
                });
                var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : enums_top;
                if (referenceRect[len] > popperRect[len]) mainVariationSide = getOppositePlacement(mainVariationSide);
                var altVariationSide = getOppositePlacement(mainVariationSide);
                var checks = [];
                if (checkMainAxis) checks.push(overflow[_basePlacement] <= 0);
                if (checkAltAxis) checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
                if (checks.every((function(check) {
                    return check;
                }))) {
                    firstFittingPlacement = placement;
                    makeFallbackChecks = false;
                    break;
                }
                checksMap.set(placement, checks);
            }
            if (makeFallbackChecks) {
                var numberOfChecks = flipVariations ? 3 : 1;
                var _loop = function _loop(_i) {
                    var fittingPlacement = placements.find((function(placement) {
                        var checks = checksMap.get(placement);
                        if (checks) return checks.slice(0, _i).every((function(check) {
                            return check;
                        }));
                    }));
                    if (fittingPlacement) {
                        firstFittingPlacement = fittingPlacement;
                        return "break";
                    }
                };
                for (var _i = numberOfChecks; _i > 0; _i--) {
                    var _ret = _loop(_i);
                    if (_ret === "break") break;
                }
            }
            if (state.placement !== firstFittingPlacement) {
                state.modifiersData[name]._skip = true;
                state.placement = firstFittingPlacement;
                state.reset = true;
            }
        }
        const modifiers_flip = {
            name: "flip",
            enabled: true,
            phase: "main",
            fn: flip,
            requiresIfExists: [ "offset" ],
            data: {
                _skip: false
            }
        };
        function getSideOffsets(overflow, rect, preventedOffsets) {
            if (preventedOffsets === void 0) preventedOffsets = {
                x: 0,
                y: 0
            };
            return {
                top: overflow.top - rect.height - preventedOffsets.y,
                right: overflow.right - rect.width + preventedOffsets.x,
                bottom: overflow.bottom - rect.height + preventedOffsets.y,
                left: overflow.left - rect.width - preventedOffsets.x
            };
        }
        function isAnySideFullyClipped(overflow) {
            return [ enums_top, right, bottom, left ].some((function(side) {
                return overflow[side] >= 0;
            }));
        }
        function hide(_ref) {
            var state = _ref.state, name = _ref.name;
            var referenceRect = state.rects.reference;
            var popperRect = state.rects.popper;
            var preventedOffsets = state.modifiersData.preventOverflow;
            var referenceOverflow = detectOverflow(state, {
                elementContext: "reference"
            });
            var popperAltOverflow = detectOverflow(state, {
                altBoundary: true
            });
            var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
            var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
            var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
            var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
            state.modifiersData[name] = {
                referenceClippingOffsets,
                popperEscapeOffsets,
                isReferenceHidden,
                hasPopperEscaped
            };
            state.attributes.popper = Object.assign({}, state.attributes.popper, {
                "data-popper-reference-hidden": isReferenceHidden,
                "data-popper-escaped": hasPopperEscaped
            });
        }
        const modifiers_hide = {
            name: "hide",
            enabled: true,
            phase: "main",
            requiresIfExists: [ "preventOverflow" ],
            fn: hide
        };
        function distanceAndSkiddingToXY(placement, rects, offset) {
            var basePlacement = getBasePlacement(placement);
            var invertDistance = [ left, enums_top ].indexOf(basePlacement) >= 0 ? -1 : 1;
            var _ref = typeof offset === "function" ? offset(Object.assign({}, rects, {
                placement
            })) : offset, skidding = _ref[0], distance = _ref[1];
            skidding = skidding || 0;
            distance = (distance || 0) * invertDistance;
            return [ left, right ].indexOf(basePlacement) >= 0 ? {
                x: distance,
                y: skidding
            } : {
                x: skidding,
                y: distance
            };
        }
        function offset(_ref2) {
            var state = _ref2.state, options = _ref2.options, name = _ref2.name;
            var _options$offset = options.offset, offset = _options$offset === void 0 ? [ 0, 0 ] : _options$offset;
            var data = enums_placements.reduce((function(acc, placement) {
                acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
                return acc;
            }), {});
            var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
            if (state.modifiersData.popperOffsets != null) {
                state.modifiersData.popperOffsets.x += x;
                state.modifiersData.popperOffsets.y += y;
            }
            state.modifiersData[name] = data;
        }
        const modifiers_offset = {
            name: "offset",
            enabled: true,
            phase: "main",
            requires: [ "popperOffsets" ],
            fn: offset
        };
        function popperOffsets(_ref) {
            var state = _ref.state, name = _ref.name;
            state.modifiersData[name] = computeOffsets({
                reference: state.rects.reference,
                element: state.rects.popper,
                strategy: "absolute",
                placement: state.placement
            });
        }
        const modifiers_popperOffsets = {
            name: "popperOffsets",
            enabled: true,
            phase: "read",
            fn: popperOffsets,
            data: {}
        };
        function getAltAxis(axis) {
            return axis === "x" ? "y" : "x";
        }
        function preventOverflow(_ref) {
            var state = _ref.state, options = _ref.options, name = _ref.name;
            var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
            var overflow = detectOverflow(state, {
                boundary,
                rootBoundary,
                padding,
                altBoundary
            });
            var basePlacement = getBasePlacement(state.placement);
            var variation = getVariation(state.placement);
            var isBasePlacement = !variation;
            var mainAxis = getMainAxisFromPlacement(basePlacement);
            var altAxis = getAltAxis(mainAxis);
            var popperOffsets = state.modifiersData.popperOffsets;
            var referenceRect = state.rects.reference;
            var popperRect = state.rects.popper;
            var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
                placement: state.placement
            })) : tetherOffset;
            var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
                mainAxis: tetherOffsetValue,
                altAxis: tetherOffsetValue
            } : Object.assign({
                mainAxis: 0,
                altAxis: 0
            }, tetherOffsetValue);
            var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
            var data = {
                x: 0,
                y: 0
            };
            if (!popperOffsets) return;
            if (checkMainAxis) {
                var _offsetModifierState$;
                var mainSide = mainAxis === "y" ? enums_top : left;
                var altSide = mainAxis === "y" ? bottom : right;
                var len = mainAxis === "y" ? "height" : "width";
                var offset = popperOffsets[mainAxis];
                var min = offset + overflow[mainSide];
                var max = offset - overflow[altSide];
                var additive = tether ? -popperRect[len] / 2 : 0;
                var minLen = variation === start ? referenceRect[len] : popperRect[len];
                var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
                var arrowElement = state.elements.arrow;
                var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
                    width: 0,
                    height: 0
                };
                var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
                var arrowPaddingMin = arrowPaddingObject[mainSide];
                var arrowPaddingMax = arrowPaddingObject[altSide];
                var arrowLen = within(0, referenceRect[len], arrowRect[len]);
                var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
                var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
                var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
                var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
                var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
                var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
                var tetherMax = offset + maxOffset - offsetModifierValue;
                var preventedOffset = within(tether ? math_min(min, tetherMin) : min, offset, tether ? math_max(max, tetherMax) : max);
                popperOffsets[mainAxis] = preventedOffset;
                data[mainAxis] = preventedOffset - offset;
            }
            if (checkAltAxis) {
                var _offsetModifierState$2;
                var _mainSide = mainAxis === "x" ? enums_top : left;
                var _altSide = mainAxis === "x" ? bottom : right;
                var _offset = popperOffsets[altAxis];
                var _len = altAxis === "y" ? "height" : "width";
                var _min = _offset + overflow[_mainSide];
                var _max = _offset - overflow[_altSide];
                var isOriginSide = [ enums_top, left ].indexOf(basePlacement) !== -1;
                var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
                var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
                var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
                var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
                popperOffsets[altAxis] = _preventedOffset;
                data[altAxis] = _preventedOffset - _offset;
            }
            state.modifiersData[name] = data;
        }
        const modifiers_preventOverflow = {
            name: "preventOverflow",
            enabled: true,
            phase: "main",
            fn: preventOverflow,
            requiresIfExists: [ "offset" ]
        };
        function getHTMLElementScroll(element) {
            return {
                scrollLeft: element.scrollLeft,
                scrollTop: element.scrollTop
            };
        }
        function getNodeScroll(node) {
            if (node === getWindow_getWindow(node) || !isHTMLElement(node)) return getWindowScroll(node); else return getHTMLElementScroll(node);
        }
        function isElementScaled(element) {
            var rect = element.getBoundingClientRect();
            var scaleX = round(rect.width) / element.offsetWidth || 1;
            var scaleY = round(rect.height) / element.offsetHeight || 1;
            return scaleX !== 1 || scaleY !== 1;
        }
        function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
            if (isFixed === void 0) isFixed = false;
            var isOffsetParentAnElement = isHTMLElement(offsetParent);
            var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
            var documentElement = getDocumentElement(offsetParent);
            var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
            var scroll = {
                scrollLeft: 0,
                scrollTop: 0
            };
            var offsets = {
                x: 0,
                y: 0
            };
            if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
                if (getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) scroll = getNodeScroll(offsetParent);
                if (isHTMLElement(offsetParent)) {
                    offsets = getBoundingClientRect(offsetParent, true);
                    offsets.x += offsetParent.clientLeft;
                    offsets.y += offsetParent.clientTop;
                } else if (documentElement) offsets.x = getWindowScrollBarX(documentElement);
            }
            return {
                x: rect.left + scroll.scrollLeft - offsets.x,
                y: rect.top + scroll.scrollTop - offsets.y,
                width: rect.width,
                height: rect.height
            };
        }
        function order(modifiers) {
            var map = new Map;
            var visited = new Set;
            var result = [];
            modifiers.forEach((function(modifier) {
                map.set(modifier.name, modifier);
            }));
            function sort(modifier) {
                visited.add(modifier.name);
                var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
                requires.forEach((function(dep) {
                    if (!visited.has(dep)) {
                        var depModifier = map.get(dep);
                        if (depModifier) sort(depModifier);
                    }
                }));
                result.push(modifier);
            }
            modifiers.forEach((function(modifier) {
                if (!visited.has(modifier.name)) sort(modifier);
            }));
            return result;
        }
        function orderModifiers(modifiers) {
            var orderedModifiers = order(modifiers);
            return modifierPhases.reduce((function(acc, phase) {
                return acc.concat(orderedModifiers.filter((function(modifier) {
                    return modifier.phase === phase;
                })));
            }), []);
        }
        function debounce(fn) {
            var pending;
            return function() {
                if (!pending) pending = new Promise((function(resolve) {
                    Promise.resolve().then((function() {
                        pending = void 0;
                        resolve(fn());
                    }));
                }));
                return pending;
            };
        }
        function mergeByName(modifiers) {
            var merged = modifiers.reduce((function(merged, current) {
                var existing = merged[current.name];
                merged[current.name] = existing ? Object.assign({}, existing, current, {
                    options: Object.assign({}, existing.options, current.options),
                    data: Object.assign({}, existing.data, current.data)
                }) : current;
                return merged;
            }), {});
            return Object.keys(merged).map((function(key) {
                return merged[key];
            }));
        }
        var DEFAULT_OPTIONS = {
            placement: "bottom",
            modifiers: [],
            strategy: "absolute"
        };
        function areValidElements() {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
            return !args.some((function(element) {
                return !(element && typeof element.getBoundingClientRect === "function");
            }));
        }
        function popperGenerator(generatorOptions) {
            if (generatorOptions === void 0) generatorOptions = {};
            var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
            return function createPopper(reference, popper, options) {
                if (options === void 0) options = defaultOptions;
                var state = {
                    placement: "bottom",
                    orderedModifiers: [],
                    options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
                    modifiersData: {},
                    elements: {
                        reference,
                        popper
                    },
                    attributes: {},
                    styles: {}
                };
                var effectCleanupFns = [];
                var isDestroyed = false;
                var instance = {
                    state,
                    setOptions: function setOptions(setOptionsAction) {
                        var options = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
                        cleanupModifierEffects();
                        state.options = Object.assign({}, defaultOptions, state.options, options);
                        state.scrollParents = {
                            reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
                            popper: listScrollParents(popper)
                        };
                        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers)));
                        state.orderedModifiers = orderedModifiers.filter((function(m) {
                            return m.enabled;
                        }));
                        runModifierEffects();
                        return instance.update();
                    },
                    forceUpdate: function forceUpdate() {
                        if (isDestroyed) return;
                        var _state$elements = state.elements, reference = _state$elements.reference, popper = _state$elements.popper;
                        if (!areValidElements(reference, popper)) return;
                        state.rects = {
                            reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === "fixed"),
                            popper: getLayoutRect(popper)
                        };
                        state.reset = false;
                        state.placement = state.options.placement;
                        state.orderedModifiers.forEach((function(modifier) {
                            return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
                        }));
                        for (var index = 0; index < state.orderedModifiers.length; index++) {
                            if (state.reset === true) {
                                state.reset = false;
                                index = -1;
                                continue;
                            }
                            var _state$orderedModifie = state.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
                            if (typeof fn === "function") state = fn({
                                state,
                                options: _options,
                                name,
                                instance
                            }) || state;
                        }
                    },
                    update: debounce((function() {
                        return new Promise((function(resolve) {
                            instance.forceUpdate();
                            resolve(state);
                        }));
                    })),
                    destroy: function destroy() {
                        cleanupModifierEffects();
                        isDestroyed = true;
                    }
                };
                if (!areValidElements(reference, popper)) return instance;
                instance.setOptions(options).then((function(state) {
                    if (!isDestroyed && options.onFirstUpdate) options.onFirstUpdate(state);
                }));
                function runModifierEffects() {
                    state.orderedModifiers.forEach((function(_ref) {
                        var name = _ref.name, _ref$options = _ref.options, options = _ref$options === void 0 ? {} : _ref$options, effect = _ref.effect;
                        if (typeof effect === "function") {
                            var cleanupFn = effect({
                                state,
                                name,
                                instance,
                                options
                            });
                            var noopFn = function noopFn() {};
                            effectCleanupFns.push(cleanupFn || noopFn);
                        }
                    }));
                }
                function cleanupModifierEffects() {
                    effectCleanupFns.forEach((function(fn) {
                        return fn();
                    }));
                    effectCleanupFns = [];
                }
                return instance;
            };
        }
        var createPopper = popperGenerator();
        var defaultModifiers = [ eventListeners, modifiers_popperOffsets, modifiers_computeStyles, modifiers_applyStyles, modifiers_offset, modifiers_flip, modifiers_preventOverflow, modifiers_arrow, modifiers_hide ];
        var popper_createPopper = popperGenerator({
            defaultModifiers
        });
        var popper_lite_defaultModifiers = [ eventListeners, modifiers_popperOffsets, modifiers_computeStyles, modifiers_applyStyles ];
        var popper_lite_createPopper = popperGenerator({
            defaultModifiers: popper_lite_defaultModifiers
        });
        /*!
  * Bootstrap v5.3.0 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
        const elementMap = new Map;
        const Data = {
            set(element, key, instance) {
                if (!elementMap.has(element)) elementMap.set(element, new Map);
                const instanceMap = elementMap.get(element);
                if (!instanceMap.has(key) && instanceMap.size !== 0) {
                    console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
                    return;
                }
                instanceMap.set(key, instance);
            },
            get(element, key) {
                if (elementMap.has(element)) return elementMap.get(element).get(key) || null;
                return null;
            },
            remove(element, key) {
                if (!elementMap.has(element)) return;
                const instanceMap = elementMap.get(element);
                instanceMap.delete(key);
                if (instanceMap.size === 0) elementMap.delete(element);
            }
        };
        const MAX_UID = 1e6;
        const MILLISECONDS_MULTIPLIER = 1e3;
        const TRANSITION_END = "transitionend";
        const parseSelector = selector => {
            if (selector && window.CSS && window.CSS.escape) selector = selector.replace(/#([^\s"#']+)/g, ((match, id) => `#${CSS.escape(id)}`));
            return selector;
        };
        const toType = object => {
            if (object === null || object === void 0) return `${object}`;
            return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
        };
        const getUID = prefix => {
            do {
                prefix += Math.floor(Math.random() * MAX_UID);
            } while (document.getElementById(prefix));
            return prefix;
        };
        const getTransitionDurationFromElement = element => {
            if (!element) return 0;
            let {transitionDuration, transitionDelay} = window.getComputedStyle(element);
            const floatTransitionDuration = Number.parseFloat(transitionDuration);
            const floatTransitionDelay = Number.parseFloat(transitionDelay);
            if (!floatTransitionDuration && !floatTransitionDelay) return 0;
            transitionDuration = transitionDuration.split(",")[0];
            transitionDelay = transitionDelay.split(",")[0];
            return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
        };
        const triggerTransitionEnd = element => {
            element.dispatchEvent(new Event(TRANSITION_END));
        };
        const bootstrap_esm_isElement = object => {
            if (!object || typeof object !== "object") return false;
            if (typeof object.jquery !== "undefined") object = object[0];
            return typeof object.nodeType !== "undefined";
        };
        const getElement = object => {
            if (bootstrap_esm_isElement(object)) return object.jquery ? object[0] : object;
            if (typeof object === "string" && object.length > 0) return document.querySelector(parseSelector(object));
            return null;
        };
        const isVisible = element => {
            if (!bootstrap_esm_isElement(element) || element.getClientRects().length === 0) return false;
            const elementIsVisible = getComputedStyle(element).getPropertyValue("visibility") === "visible";
            const closedDetails = element.closest("details:not([open])");
            if (!closedDetails) return elementIsVisible;
            if (closedDetails !== element) {
                const summary = element.closest("summary");
                if (summary && summary.parentNode !== closedDetails) return false;
                if (summary === null) return false;
            }
            return elementIsVisible;
        };
        const isDisabled = element => {
            if (!element || element.nodeType !== Node.ELEMENT_NODE) return true;
            if (element.classList.contains("disabled")) return true;
            if (typeof element.disabled !== "undefined") return element.disabled;
            return element.hasAttribute("disabled") && element.getAttribute("disabled") !== "false";
        };
        const findShadowRoot = element => {
            if (!document.documentElement.attachShadow) return null;
            if (typeof element.getRootNode === "function") {
                const root = element.getRootNode();
                return root instanceof ShadowRoot ? root : null;
            }
            if (element instanceof ShadowRoot) return element;
            if (!element.parentNode) return null;
            return findShadowRoot(element.parentNode);
        };
        const noop = () => {};
        const reflow = element => {
            element.offsetHeight;
        };
        const getjQuery = () => {
            if (window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")) return window.jQuery;
            return null;
        };
        const DOMContentLoadedCallbacks = [];
        const onDOMContentLoaded = callback => {
            if (document.readyState === "loading") {
                if (!DOMContentLoadedCallbacks.length) document.addEventListener("DOMContentLoaded", (() => {
                    for (const callback of DOMContentLoadedCallbacks) callback();
                }));
                DOMContentLoadedCallbacks.push(callback);
            } else callback();
        };
        const isRTL = () => document.documentElement.dir === "rtl";
        const defineJQueryPlugin = plugin => {
            onDOMContentLoaded((() => {
                const $ = getjQuery();
                if ($) {
                    const name = plugin.NAME;
                    const JQUERY_NO_CONFLICT = $.fn[name];
                    $.fn[name] = plugin.jQueryInterface;
                    $.fn[name].Constructor = plugin;
                    $.fn[name].noConflict = () => {
                        $.fn[name] = JQUERY_NO_CONFLICT;
                        return plugin.jQueryInterface;
                    };
                }
            }));
        };
        const execute = (possibleCallback, args = [], defaultValue = possibleCallback) => typeof possibleCallback === "function" ? possibleCallback(...args) : defaultValue;
        const executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
            if (!waitForTransition) {
                execute(callback);
                return;
            }
            const durationPadding = 5;
            const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
            let called = false;
            const handler = ({target}) => {
                if (target !== transitionElement) return;
                called = true;
                transitionElement.removeEventListener(TRANSITION_END, handler);
                execute(callback);
            };
            transitionElement.addEventListener(TRANSITION_END, handler);
            setTimeout((() => {
                if (!called) triggerTransitionEnd(transitionElement);
            }), emulatedDuration);
        };
        const getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
            const listLength = list.length;
            let index = list.indexOf(activeElement);
            if (index === -1) return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
            index += shouldGetNext ? 1 : -1;
            if (isCycleAllowed) index = (index + listLength) % listLength;
            return list[Math.max(0, Math.min(index, listLength - 1))];
        };
        const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
        const stripNameRegex = /\..*/;
        const stripUidRegex = /::\d+$/;
        const eventRegistry = {};
        let uidEvent = 1;
        const customEvents = {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        };
        const nativeEvents = new Set([ "click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll" ]);
        function makeEventUid(element, uid) {
            return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
        }
        function getElementEvents(element) {
            const uid = makeEventUid(element);
            element.uidEvent = uid;
            eventRegistry[uid] = eventRegistry[uid] || {};
            return eventRegistry[uid];
        }
        function bootstrapHandler(element, fn) {
            return function handler(event) {
                hydrateObj(event, {
                    delegateTarget: element
                });
                if (handler.oneOff) EventHandler.off(element, event.type, fn);
                return fn.apply(element, [ event ]);
            };
        }
        function bootstrapDelegationHandler(element, selector, fn) {
            return function handler(event) {
                const domElements = element.querySelectorAll(selector);
                for (let {target} = event; target && target !== this; target = target.parentNode) for (const domElement of domElements) {
                    if (domElement !== target) continue;
                    hydrateObj(event, {
                        delegateTarget: target
                    });
                    if (handler.oneOff) EventHandler.off(element, event.type, selector, fn);
                    return fn.apply(target, [ event ]);
                }
            };
        }
        function findHandler(events, callable, delegationSelector = null) {
            return Object.values(events).find((event => event.callable === callable && event.delegationSelector === delegationSelector));
        }
        function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
            const isDelegated = typeof handler === "string";
            const callable = isDelegated ? delegationFunction : handler || delegationFunction;
            let typeEvent = getTypeEvent(originalTypeEvent);
            if (!nativeEvents.has(typeEvent)) typeEvent = originalTypeEvent;
            return [ isDelegated, callable, typeEvent ];
        }
        function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
            if (typeof originalTypeEvent !== "string" || !element) return;
            let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
            if (originalTypeEvent in customEvents) {
                const wrapFunction = fn => function(event) {
                    if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) return fn.call(this, event);
                };
                callable = wrapFunction(callable);
            }
            const events = getElementEvents(element);
            const handlers = events[typeEvent] || (events[typeEvent] = {});
            const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);
            if (previousFunction) {
                previousFunction.oneOff = previousFunction.oneOff && oneOff;
                return;
            }
            const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ""));
            const fn = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
            fn.delegationSelector = isDelegated ? handler : null;
            fn.callable = callable;
            fn.oneOff = oneOff;
            fn.uidEvent = uid;
            handlers[uid] = fn;
            element.addEventListener(typeEvent, fn, isDelegated);
        }
        function removeHandler(element, events, typeEvent, handler, delegationSelector) {
            const fn = findHandler(events[typeEvent], handler, delegationSelector);
            if (!fn) return;
            element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
            delete events[typeEvent][fn.uidEvent];
        }
        function removeNamespacedHandlers(element, events, typeEvent, namespace) {
            const storeElementEvent = events[typeEvent] || {};
            for (const [handlerKey, event] of Object.entries(storeElementEvent)) if (handlerKey.includes(namespace)) removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
        }
        function getTypeEvent(event) {
            event = event.replace(stripNameRegex, "");
            return customEvents[event] || event;
        }
        const EventHandler = {
            on(element, event, handler, delegationFunction) {
                addHandler(element, event, handler, delegationFunction, false);
            },
            one(element, event, handler, delegationFunction) {
                addHandler(element, event, handler, delegationFunction, true);
            },
            off(element, originalTypeEvent, handler, delegationFunction) {
                if (typeof originalTypeEvent !== "string" || !element) return;
                const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
                const inNamespace = typeEvent !== originalTypeEvent;
                const events = getElementEvents(element);
                const storeElementEvent = events[typeEvent] || {};
                const isNamespace = originalTypeEvent.startsWith(".");
                if (typeof callable !== "undefined") {
                    if (!Object.keys(storeElementEvent).length) return;
                    removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
                    return;
                }
                if (isNamespace) for (const elementEvent of Object.keys(events)) removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
                for (const [keyHandlers, event] of Object.entries(storeElementEvent)) {
                    const handlerKey = keyHandlers.replace(stripUidRegex, "");
                    if (!inNamespace || originalTypeEvent.includes(handlerKey)) removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
                }
            },
            trigger(element, event, args) {
                if (typeof event !== "string" || !element) return null;
                const $ = getjQuery();
                const typeEvent = getTypeEvent(event);
                const inNamespace = event !== typeEvent;
                let jQueryEvent = null;
                let bubbles = true;
                let nativeDispatch = true;
                let defaultPrevented = false;
                if (inNamespace && $) {
                    jQueryEvent = $.Event(event, args);
                    $(element).trigger(jQueryEvent);
                    bubbles = !jQueryEvent.isPropagationStopped();
                    nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
                    defaultPrevented = jQueryEvent.isDefaultPrevented();
                }
                const evt = hydrateObj(new Event(event, {
                    bubbles,
                    cancelable: true
                }), args);
                if (defaultPrevented) evt.preventDefault();
                if (nativeDispatch) element.dispatchEvent(evt);
                if (evt.defaultPrevented && jQueryEvent) jQueryEvent.preventDefault();
                return evt;
            }
        };
        function hydrateObj(obj, meta = {}) {
            for (const [key, value] of Object.entries(meta)) try {
                obj[key] = value;
            } catch (_unused) {
                Object.defineProperty(obj, key, {
                    configurable: true,
                    get() {
                        return value;
                    }
                });
            }
            return obj;
        }
        function normalizeData(value) {
            if (value === "true") return true;
            if (value === "false") return false;
            if (value === Number(value).toString()) return Number(value);
            if (value === "" || value === "null") return null;
            if (typeof value !== "string") return value;
            try {
                return JSON.parse(decodeURIComponent(value));
            } catch (_unused) {
                return value;
            }
        }
        function normalizeDataKey(key) {
            return key.replace(/[A-Z]/g, (chr => `-${chr.toLowerCase()}`));
        }
        const Manipulator = {
            setDataAttribute(element, key, value) {
                element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
            },
            removeDataAttribute(element, key) {
                element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
            },
            getDataAttributes(element) {
                if (!element) return {};
                const attributes = {};
                const bsKeys = Object.keys(element.dataset).filter((key => key.startsWith("bs") && !key.startsWith("bsConfig")));
                for (const key of bsKeys) {
                    let pureKey = key.replace(/^bs/, "");
                    pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
                    attributes[pureKey] = normalizeData(element.dataset[key]);
                }
                return attributes;
            },
            getDataAttribute(element, key) {
                return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
            }
        };
        class Config {
            static get Default() {
                return {};
            }
            static get DefaultType() {
                return {};
            }
            static get NAME() {
                throw new Error('You have to implement the static method "NAME", for each component!');
            }
            _getConfig(config) {
                config = this._mergeConfigObj(config);
                config = this._configAfterMerge(config);
                this._typeCheckConfig(config);
                return config;
            }
            _configAfterMerge(config) {
                return config;
            }
            _mergeConfigObj(config, element) {
                const jsonConfig = bootstrap_esm_isElement(element) ? Manipulator.getDataAttribute(element, "config") : {};
                return {
                    ...this.constructor.Default,
                    ...typeof jsonConfig === "object" ? jsonConfig : {},
                    ...bootstrap_esm_isElement(element) ? Manipulator.getDataAttributes(element) : {},
                    ...typeof config === "object" ? config : {}
                };
            }
            _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
                for (const [property, expectedTypes] of Object.entries(configTypes)) {
                    const value = config[property];
                    const valueType = bootstrap_esm_isElement(value) ? "element" : toType(value);
                    if (!new RegExp(expectedTypes).test(valueType)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
                }
            }
        }
        const VERSION = "5.3.0";
        class BaseComponent extends Config {
            constructor(element, config) {
                super();
                element = getElement(element);
                if (!element) return;
                this._element = element;
                this._config = this._getConfig(config);
                Data.set(this._element, this.constructor.DATA_KEY, this);
            }
            dispose() {
                Data.remove(this._element, this.constructor.DATA_KEY);
                EventHandler.off(this._element, this.constructor.EVENT_KEY);
                for (const propertyName of Object.getOwnPropertyNames(this)) this[propertyName] = null;
            }
            _queueCallback(callback, element, isAnimated = true) {
                executeAfterTransition(callback, element, isAnimated);
            }
            _getConfig(config) {
                config = this._mergeConfigObj(config, this._element);
                config = this._configAfterMerge(config);
                this._typeCheckConfig(config);
                return config;
            }
            static getInstance(element) {
                return Data.get(getElement(element), this.DATA_KEY);
            }
            static getOrCreateInstance(element, config = {}) {
                return this.getInstance(element) || new this(element, typeof config === "object" ? config : null);
            }
            static get VERSION() {
                return VERSION;
            }
            static get DATA_KEY() {
                return `bs.${this.NAME}`;
            }
            static get EVENT_KEY() {
                return `.${this.DATA_KEY}`;
            }
            static eventName(name) {
                return `${name}${this.EVENT_KEY}`;
            }
        }
        const getSelector = element => {
            let selector = element.getAttribute("data-bs-target");
            if (!selector || selector === "#") {
                let hrefAttribute = element.getAttribute("href");
                if (!hrefAttribute || !hrefAttribute.includes("#") && !hrefAttribute.startsWith(".")) return null;
                if (hrefAttribute.includes("#") && !hrefAttribute.startsWith("#")) hrefAttribute = `#${hrefAttribute.split("#")[1]}`;
                selector = hrefAttribute && hrefAttribute !== "#" ? hrefAttribute.trim() : null;
            }
            return parseSelector(selector);
        };
        const SelectorEngine = {
            find(selector, element = document.documentElement) {
                return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
            },
            findOne(selector, element = document.documentElement) {
                return Element.prototype.querySelector.call(element, selector);
            },
            children(element, selector) {
                return [].concat(...element.children).filter((child => child.matches(selector)));
            },
            parents(element, selector) {
                const parents = [];
                let ancestor = element.parentNode.closest(selector);
                while (ancestor) {
                    parents.push(ancestor);
                    ancestor = ancestor.parentNode.closest(selector);
                }
                return parents;
            },
            prev(element, selector) {
                let previous = element.previousElementSibling;
                while (previous) {
                    if (previous.matches(selector)) return [ previous ];
                    previous = previous.previousElementSibling;
                }
                return [];
            },
            next(element, selector) {
                let next = element.nextElementSibling;
                while (next) {
                    if (next.matches(selector)) return [ next ];
                    next = next.nextElementSibling;
                }
                return [];
            },
            focusableChildren(element) {
                const focusables = [ "a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]' ].map((selector => `${selector}:not([tabindex^="-"])`)).join(",");
                return this.find(focusables, element).filter((el => !isDisabled(el) && isVisible(el)));
            },
            getSelectorFromElement(element) {
                const selector = getSelector(element);
                if (selector) return SelectorEngine.findOne(selector) ? selector : null;
                return null;
            },
            getElementFromSelector(element) {
                const selector = getSelector(element);
                return selector ? SelectorEngine.findOne(selector) : null;
            },
            getMultipleElementsFromSelector(element) {
                const selector = getSelector(element);
                return selector ? SelectorEngine.find(selector) : [];
            }
        };
        const enableDismissTrigger = (component, method = "hide") => {
            const clickEvent = `click.dismiss${component.EVENT_KEY}`;
            const name = component.NAME;
            EventHandler.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, (function(event) {
                if ([ "A", "AREA" ].includes(this.tagName)) event.preventDefault();
                if (isDisabled(this)) return;
                const target = SelectorEngine.getElementFromSelector(this) || this.closest(`.${name}`);
                const instance = component.getOrCreateInstance(target);
                instance[method]();
            }));
        };
        const NAME$f = "alert";
        const DATA_KEY$a = "bs.alert";
        const EVENT_KEY$b = `.${DATA_KEY$a}`;
        const EVENT_CLOSE = `close${EVENT_KEY$b}`;
        const EVENT_CLOSED = `closed${EVENT_KEY$b}`;
        const CLASS_NAME_FADE$5 = "fade";
        const CLASS_NAME_SHOW$8 = "show";
        class Alert extends BaseComponent {
            static get NAME() {
                return NAME$f;
            }
            close() {
                const closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);
                if (closeEvent.defaultPrevented) return;
                this._element.classList.remove(CLASS_NAME_SHOW$8);
                const isAnimated = this._element.classList.contains(CLASS_NAME_FADE$5);
                this._queueCallback((() => this._destroyElement()), this._element, isAnimated);
            }
            _destroyElement() {
                this._element.remove();
                EventHandler.trigger(this._element, EVENT_CLOSED);
                this.dispose();
            }
            static jQueryInterface(config) {
                return this.each((function() {
                    const data = Alert.getOrCreateInstance(this);
                    if (typeof config !== "string") return;
                    if (data[config] === void 0 || config.startsWith("_") || config === "constructor") throw new TypeError(`No method named "${config}"`);
                    data[config](this);
                }));
            }
        }
        enableDismissTrigger(Alert, "close");
        defineJQueryPlugin(Alert);
        const NAME$e = "button";
        const DATA_KEY$9 = "bs.button";
        const EVENT_KEY$a = `.${DATA_KEY$9}`;
        const DATA_API_KEY$6 = ".data-api";
        const CLASS_NAME_ACTIVE$3 = "active";
        const SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
        const EVENT_CLICK_DATA_API$6 = `click${EVENT_KEY$a}${DATA_API_KEY$6}`;
        class Button extends BaseComponent {
            static get NAME() {
                return NAME$e;
            }
            toggle() {
                this._element.setAttribute("aria-pressed", this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
            }
            static jQueryInterface(config) {
                return this.each((function() {
                    const data = Button.getOrCreateInstance(this);
                    if (config === "toggle") data[config]();
                }));
            }
        }
        EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, (event => {
            event.preventDefault();
            const button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
            const data = Button.getOrCreateInstance(button);
            data.toggle();
        }));
        defineJQueryPlugin(Button);
        const NAME$d = "swipe";
        const EVENT_KEY$9 = ".bs.swipe";
        const EVENT_TOUCHSTART = `touchstart${EVENT_KEY$9}`;
        const EVENT_TOUCHMOVE = `touchmove${EVENT_KEY$9}`;
        const EVENT_TOUCHEND = `touchend${EVENT_KEY$9}`;
        const EVENT_POINTERDOWN = `pointerdown${EVENT_KEY$9}`;
        const EVENT_POINTERUP = `pointerup${EVENT_KEY$9}`;
        const POINTER_TYPE_TOUCH = "touch";
        const POINTER_TYPE_PEN = "pen";
        const CLASS_NAME_POINTER_EVENT = "pointer-event";
        const SWIPE_THRESHOLD = 40;
        const Default$c = {
            endCallback: null,
            leftCallback: null,
            rightCallback: null
        };
        const DefaultType$c = {
            endCallback: "(function|null)",
            leftCallback: "(function|null)",
            rightCallback: "(function|null)"
        };
        class Swipe extends Config {
            constructor(element, config) {
                super();
                this._element = element;
                if (!element || !Swipe.isSupported()) return;
                this._config = this._getConfig(config);
                this._deltaX = 0;
                this._supportPointerEvents = Boolean(window.PointerEvent);
                this._initEvents();
            }
            static get Default() {
                return Default$c;
            }
            static get DefaultType() {
                return DefaultType$c;
            }
            static get NAME() {
                return NAME$d;
            }
            dispose() {
                EventHandler.off(this._element, EVENT_KEY$9);
            }
            _start(event) {
                if (!this._supportPointerEvents) {
                    this._deltaX = event.touches[0].clientX;
                    return;
                }
                if (this._eventIsPointerPenTouch(event)) this._deltaX = event.clientX;
            }
            _end(event) {
                if (this._eventIsPointerPenTouch(event)) this._deltaX = event.clientX - this._deltaX;
                this._handleSwipe();
                execute(this._config.endCallback);
            }
            _move(event) {
                this._deltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this._deltaX;
            }
            _handleSwipe() {
                const absDeltaX = Math.abs(this._deltaX);
                if (absDeltaX <= SWIPE_THRESHOLD) return;
                const direction = absDeltaX / this._deltaX;
                this._deltaX = 0;
                if (!direction) return;
                execute(direction > 0 ? this._config.rightCallback : this._config.leftCallback);
            }
            _initEvents() {
                if (this._supportPointerEvents) {
                    EventHandler.on(this._element, EVENT_POINTERDOWN, (event => this._start(event)));
                    EventHandler.on(this._element, EVENT_POINTERUP, (event => this._end(event)));
                    this._element.classList.add(CLASS_NAME_POINTER_EVENT);
                } else {
                    EventHandler.on(this._element, EVENT_TOUCHSTART, (event => this._start(event)));
                    EventHandler.on(this._element, EVENT_TOUCHMOVE, (event => this._move(event)));
                    EventHandler.on(this._element, EVENT_TOUCHEND, (event => this._end(event)));
                }
            }
            _eventIsPointerPenTouch(event) {
                return this._supportPointerEvents && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
            }
            static isSupported() {
                return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
            }
        }
        const NAME$c = "carousel";
        const DATA_KEY$8 = "bs.carousel";
        const EVENT_KEY$8 = `.${DATA_KEY$8}`;
        const DATA_API_KEY$5 = ".data-api";
        const ARROW_LEFT_KEY$1 = "ArrowLeft";
        const ARROW_RIGHT_KEY$1 = "ArrowRight";
        const TOUCHEVENT_COMPAT_WAIT = 500;
        const ORDER_NEXT = "next";
        const ORDER_PREV = "prev";
        const DIRECTION_LEFT = "left";
        const DIRECTION_RIGHT = "right";
        const EVENT_SLIDE = `slide${EVENT_KEY$8}`;
        const EVENT_SLID = `slid${EVENT_KEY$8}`;
        const EVENT_KEYDOWN$1 = `keydown${EVENT_KEY$8}`;
        const EVENT_MOUSEENTER$1 = `mouseenter${EVENT_KEY$8}`;
        const EVENT_MOUSELEAVE$1 = `mouseleave${EVENT_KEY$8}`;
        const EVENT_DRAG_START = `dragstart${EVENT_KEY$8}`;
        const EVENT_LOAD_DATA_API$3 = `load${EVENT_KEY$8}${DATA_API_KEY$5}`;
        const EVENT_CLICK_DATA_API$5 = `click${EVENT_KEY$8}${DATA_API_KEY$5}`;
        const CLASS_NAME_CAROUSEL = "carousel";
        const CLASS_NAME_ACTIVE$2 = "active";
        const CLASS_NAME_SLIDE = "slide";
        const CLASS_NAME_END = "carousel-item-end";
        const CLASS_NAME_START = "carousel-item-start";
        const CLASS_NAME_NEXT = "carousel-item-next";
        const CLASS_NAME_PREV = "carousel-item-prev";
        const SELECTOR_ACTIVE = ".active";
        const SELECTOR_ITEM = ".carousel-item";
        const SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM;
        const SELECTOR_ITEM_IMG = ".carousel-item img";
        const SELECTOR_INDICATORS = ".carousel-indicators";
        const SELECTOR_DATA_SLIDE = "[data-bs-slide], [data-bs-slide-to]";
        const SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
        const KEY_TO_DIRECTION = {
            [ARROW_LEFT_KEY$1]: DIRECTION_RIGHT,
            [ARROW_RIGHT_KEY$1]: DIRECTION_LEFT
        };
        const Default$b = {
            interval: 5e3,
            keyboard: true,
            pause: "hover",
            ride: false,
            touch: true,
            wrap: true
        };
        const DefaultType$b = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            pause: "(string|boolean)",
            ride: "(boolean|string)",
            touch: "boolean",
            wrap: "boolean"
        };
        class Carousel extends BaseComponent {
            constructor(element, config) {
                super(element, config);
                this._interval = null;
                this._activeElement = null;
                this._isSliding = false;
                this.touchTimeout = null;
                this._swipeHelper = null;
                this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, this._element);
                this._addEventListeners();
                if (this._config.ride === CLASS_NAME_CAROUSEL) this.cycle();
            }
            static get Default() {
                return Default$b;
            }
            static get DefaultType() {
                return DefaultType$b;
            }
            static get NAME() {
                return NAME$c;
            }
            next() {
                this._slide(ORDER_NEXT);
            }
            nextWhenVisible() {
                if (!document.hidden && isVisible(this._element)) this.next();
            }
            prev() {
                this._slide(ORDER_PREV);
            }
            pause() {
                if (this._isSliding) triggerTransitionEnd(this._element);
                this._clearInterval();
            }
            cycle() {
                this._clearInterval();
                this._updateInterval();
                this._interval = setInterval((() => this.nextWhenVisible()), this._config.interval);
            }
            _maybeEnableCycle() {
                if (!this._config.ride) return;
                if (this._isSliding) {
                    EventHandler.one(this._element, EVENT_SLID, (() => this.cycle()));
                    return;
                }
                this.cycle();
            }
            to(index) {
                const items = this._getItems();
                if (index > items.length - 1 || index < 0) return;
                if (this._isSliding) {
                    EventHandler.one(this._element, EVENT_SLID, (() => this.to(index)));
                    return;
                }
                const activeIndex = this._getItemIndex(this._getActive());
                if (activeIndex === index) return;
                const order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;
                this._slide(order, items[index]);
            }
            dispose() {
                if (this._swipeHelper) this._swipeHelper.dispose();
                super.dispose();
            }
            _configAfterMerge(config) {
                config.defaultInterval = config.interval;
                return config;
            }
            _addEventListeners() {
                if (this._config.keyboard) EventHandler.on(this._element, EVENT_KEYDOWN$1, (event => this._keydown(event)));
                if (this._config.pause === "hover") {
                    EventHandler.on(this._element, EVENT_MOUSEENTER$1, (() => this.pause()));
                    EventHandler.on(this._element, EVENT_MOUSELEAVE$1, (() => this._maybeEnableCycle()));
                }
                if (this._config.touch && Swipe.isSupported()) this._addTouchEventListeners();
            }
            _addTouchEventListeners() {
                for (const img of SelectorEngine.find(SELECTOR_ITEM_IMG, this._element)) EventHandler.on(img, EVENT_DRAG_START, (event => event.preventDefault()));
                const endCallBack = () => {
                    if (this._config.pause !== "hover") return;
                    this.pause();
                    if (this.touchTimeout) clearTimeout(this.touchTimeout);
                    this.touchTimeout = setTimeout((() => this._maybeEnableCycle()), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
                };
                const swipeConfig = {
                    leftCallback: () => this._slide(this._directionToOrder(DIRECTION_LEFT)),
                    rightCallback: () => this._slide(this._directionToOrder(DIRECTION_RIGHT)),
                    endCallback: endCallBack
                };
                this._swipeHelper = new Swipe(this._element, swipeConfig);
            }
            _keydown(event) {
                if (/input|textarea/i.test(event.target.tagName)) return;
                const direction = KEY_TO_DIRECTION[event.key];
                if (direction) {
                    event.preventDefault();
                    this._slide(this._directionToOrder(direction));
                }
            }
            _getItemIndex(element) {
                return this._getItems().indexOf(element);
            }
            _setActiveIndicatorElement(index) {
                if (!this._indicatorsElement) return;
                const activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE, this._indicatorsElement);
                activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
                activeIndicator.removeAttribute("aria-current");
                const newActiveIndicator = SelectorEngine.findOne(`[data-bs-slide-to="${index}"]`, this._indicatorsElement);
                if (newActiveIndicator) {
                    newActiveIndicator.classList.add(CLASS_NAME_ACTIVE$2);
                    newActiveIndicator.setAttribute("aria-current", "true");
                }
            }
            _updateInterval() {
                const element = this._activeElement || this._getActive();
                if (!element) return;
                const elementInterval = Number.parseInt(element.getAttribute("data-bs-interval"), 10);
                this._config.interval = elementInterval || this._config.defaultInterval;
            }
            _slide(order, element = null) {
                if (this._isSliding) return;
                const activeElement = this._getActive();
                const isNext = order === ORDER_NEXT;
                const nextElement = element || getNextActiveElement(this._getItems(), activeElement, isNext, this._config.wrap);
                if (nextElement === activeElement) return;
                const nextElementIndex = this._getItemIndex(nextElement);
                const triggerEvent = eventName => EventHandler.trigger(this._element, eventName, {
                    relatedTarget: nextElement,
                    direction: this._orderToDirection(order),
                    from: this._getItemIndex(activeElement),
                    to: nextElementIndex
                });
                const slideEvent = triggerEvent(EVENT_SLIDE);
                if (slideEvent.defaultPrevented) return;
                if (!activeElement || !nextElement) return;
                const isCycling = Boolean(this._interval);
                this.pause();
                this._isSliding = true;
                this._setActiveIndicatorElement(nextElementIndex);
                this._activeElement = nextElement;
                const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
                const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
                nextElement.classList.add(orderClassName);
                reflow(nextElement);
                activeElement.classList.add(directionalClassName);
                nextElement.classList.add(directionalClassName);
                const completeCallBack = () => {
                    nextElement.classList.remove(directionalClassName, orderClassName);
                    nextElement.classList.add(CLASS_NAME_ACTIVE$2);
                    activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
                    this._isSliding = false;
                    triggerEvent(EVENT_SLID);
                };
                this._queueCallback(completeCallBack, activeElement, this._isAnimated());
                if (isCycling) this.cycle();
            }
            _isAnimated() {
                return this._element.classList.contains(CLASS_NAME_SLIDE);
            }
            _getActive() {
                return SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
            }
            _getItems() {
                return SelectorEngine.find(SELECTOR_ITEM, this._element);
            }
            _clearInterval() {
                if (this._interval) {
                    clearInterval(this._interval);
                    this._interval = null;
                }
            }
            _directionToOrder(direction) {
                if (isRTL()) return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
                return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
            }
            _orderToDirection(order) {
                if (isRTL()) return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
                return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
            }
            static jQueryInterface(config) {
                return this.each((function() {
                    const data = Carousel.getOrCreateInstance(this, config);
                    if (typeof config === "number") {
                        data.to(config);
                        return;
                    }
                    if (typeof config === "string") {
                        if (data[config] === void 0 || config.startsWith("_") || config === "constructor") throw new TypeError(`No method named "${config}"`);
                        data[config]();
                    }
                }));
            }
        }
        EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, (function(event) {
            const target = SelectorEngine.getElementFromSelector(this);
            if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) return;
            event.preventDefault();
            const carousel = Carousel.getOrCreateInstance(target);
            const slideIndex = this.getAttribute("data-bs-slide-to");
            if (slideIndex) {
                carousel.to(slideIndex);
                carousel._maybeEnableCycle();
                return;
            }
            if (Manipulator.getDataAttribute(this, "slide") === "next") {
                carousel.next();
                carousel._maybeEnableCycle();
                return;
            }
            carousel.prev();
            carousel._maybeEnableCycle();
        }));
        EventHandler.on(window, EVENT_LOAD_DATA_API$3, (() => {
            const carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);
            for (const carousel of carousels) Carousel.getOrCreateInstance(carousel);
        }));
        defineJQueryPlugin(Carousel);
        const NAME$b = "collapse";
        const DATA_KEY$7 = "bs.collapse";
        const EVENT_KEY$7 = `.${DATA_KEY$7}`;
        const DATA_API_KEY$4 = ".data-api";
        const EVENT_SHOW$6 = `show${EVENT_KEY$7}`;
        const EVENT_SHOWN$6 = `shown${EVENT_KEY$7}`;
        const EVENT_HIDE$6 = `hide${EVENT_KEY$7}`;
        const EVENT_HIDDEN$6 = `hidden${EVENT_KEY$7}`;
        const EVENT_CLICK_DATA_API$4 = `click${EVENT_KEY$7}${DATA_API_KEY$4}`;
        const CLASS_NAME_SHOW$7 = "show";
        const CLASS_NAME_COLLAPSE = "collapse";
        const CLASS_NAME_COLLAPSING = "collapsing";
        const CLASS_NAME_COLLAPSED = "collapsed";
        const CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;
        const CLASS_NAME_HORIZONTAL = "collapse-horizontal";
        const WIDTH = "width";
        const HEIGHT = "height";
        const SELECTOR_ACTIVES = ".collapse.show, .collapse.collapsing";
        const SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
        const Default$a = {
            parent: null,
            toggle: true
        };
        const DefaultType$a = {
            parent: "(null|element)",
            toggle: "boolean"
        };
        class Collapse extends BaseComponent {
            constructor(element, config) {
                super(element, config);
                this._isTransitioning = false;
                this._triggerArray = [];
                const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);
                for (const elem of toggleList) {
                    const selector = SelectorEngine.getSelectorFromElement(elem);
                    const filterElement = SelectorEngine.find(selector).filter((foundElement => foundElement === this._element));
                    if (selector !== null && filterElement.length) this._triggerArray.push(elem);
                }
                this._initializeChildren();
                if (!this._config.parent) this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
                if (this._config.toggle) this.toggle();
            }
            static get Default() {
                return Default$a;
            }
            static get DefaultType() {
                return DefaultType$a;
            }
            static get NAME() {
                return NAME$b;
            }
            toggle() {
                if (this._isShown()) this.hide(); else this.show();
            }
            show() {
                if (this._isTransitioning || this._isShown()) return;
                let activeChildren = [];
                if (this._config.parent) activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter((element => element !== this._element)).map((element => Collapse.getOrCreateInstance(element, {
                    toggle: false
                })));
                if (activeChildren.length && activeChildren[0]._isTransitioning) return;
                const startEvent = EventHandler.trigger(this._element, EVENT_SHOW$6);
                if (startEvent.defaultPrevented) return;
                for (const activeInstance of activeChildren) activeInstance.hide();
                const dimension = this._getDimension();
                this._element.classList.remove(CLASS_NAME_COLLAPSE);
                this._element.classList.add(CLASS_NAME_COLLAPSING);
                this._element.style[dimension] = 0;
                this._addAriaAndCollapsedClass(this._triggerArray, true);
                this._isTransitioning = true;
                const complete = () => {
                    this._isTransitioning = false;
                    this._element.classList.remove(CLASS_NAME_COLLAPSING);
                    this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
                    this._element.style[dimension] = "";
                    EventHandler.trigger(this._element, EVENT_SHOWN$6);
                };
                const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
                const scrollSize = `scroll${capitalizedDimension}`;
                this._queueCallback(complete, this._element, true);
                this._element.style[dimension] = `${this._element[scrollSize]}px`;
            }
            hide() {
                if (this._isTransitioning || !this._isShown()) return;
                const startEvent = EventHandler.trigger(this._element, EVENT_HIDE$6);
                if (startEvent.defaultPrevented) return;
                const dimension = this._getDimension();
                this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
                reflow(this._element);
                this._element.classList.add(CLASS_NAME_COLLAPSING);
                this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);
                for (const trigger of this._triggerArray) {
                    const element = SelectorEngine.getElementFromSelector(trigger);
                    if (element && !this._isShown(element)) this._addAriaAndCollapsedClass([ trigger ], false);
                }
                this._isTransitioning = true;
                const complete = () => {
                    this._isTransitioning = false;
                    this._element.classList.remove(CLASS_NAME_COLLAPSING);
                    this._element.classList.add(CLASS_NAME_COLLAPSE);
                    EventHandler.trigger(this._element, EVENT_HIDDEN$6);
                };
                this._element.style[dimension] = "";
                this._queueCallback(complete, this._element, true);
            }
            _isShown(element = this._element) {
                return element.classList.contains(CLASS_NAME_SHOW$7);
            }
            _configAfterMerge(config) {
                config.toggle = Boolean(config.toggle);
                config.parent = getElement(config.parent);
                return config;
            }
            _getDimension() {
                return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
            }
            _initializeChildren() {
                if (!this._config.parent) return;
                const children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE$4);
                for (const element of children) {
                    const selected = SelectorEngine.getElementFromSelector(element);
                    if (selected) this._addAriaAndCollapsedClass([ element ], this._isShown(selected));
                }
            }
            _getFirstLevelChildren(selector) {
                const children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
                return SelectorEngine.find(selector, this._config.parent).filter((element => !children.includes(element)));
            }
            _addAriaAndCollapsedClass(triggerArray, isOpen) {
                if (!triggerArray.length) return;
                for (const element of triggerArray) {
                    element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);
                    element.setAttribute("aria-expanded", isOpen);
                }
            }
            static jQueryInterface(config) {
                const _config = {};
                if (typeof config === "string" && /show|hide/.test(config)) _config.toggle = false;
                return this.each((function() {
                    const data = Collapse.getOrCreateInstance(this, _config);
                    if (typeof config === "string") {
                        if (typeof data[config] === "undefined") throw new TypeError(`No method named "${config}"`);
                        data[config]();
                    }
                }));
            }
        }
        EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, (function(event) {
            if (event.target.tagName === "A" || event.delegateTarget && event.delegateTarget.tagName === "A") event.preventDefault();
            for (const element of SelectorEngine.getMultipleElementsFromSelector(this)) Collapse.getOrCreateInstance(element, {
                toggle: false
            }).toggle();
        }));
        defineJQueryPlugin(Collapse);
        const NAME$a = "dropdown";
        const DATA_KEY$6 = "bs.dropdown";
        const EVENT_KEY$6 = `.${DATA_KEY$6}`;
        const DATA_API_KEY$3 = ".data-api";
        const ESCAPE_KEY$2 = "Escape";
        const TAB_KEY$1 = "Tab";
        const ARROW_UP_KEY$1 = "ArrowUp";
        const ARROW_DOWN_KEY$1 = "ArrowDown";
        const RIGHT_MOUSE_BUTTON = 2;
        const EVENT_HIDE$5 = `hide${EVENT_KEY$6}`;
        const EVENT_HIDDEN$5 = `hidden${EVENT_KEY$6}`;
        const EVENT_SHOW$5 = `show${EVENT_KEY$6}`;
        const EVENT_SHOWN$5 = `shown${EVENT_KEY$6}`;
        const EVENT_CLICK_DATA_API$3 = `click${EVENT_KEY$6}${DATA_API_KEY$3}`;
        const EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY$6}${DATA_API_KEY$3}`;
        const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY$6}${DATA_API_KEY$3}`;
        const CLASS_NAME_SHOW$6 = "show";
        const CLASS_NAME_DROPUP = "dropup";
        const CLASS_NAME_DROPEND = "dropend";
        const CLASS_NAME_DROPSTART = "dropstart";
        const CLASS_NAME_DROPUP_CENTER = "dropup-center";
        const CLASS_NAME_DROPDOWN_CENTER = "dropdown-center";
        const SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
        const SELECTOR_DATA_TOGGLE_SHOWN = `${SELECTOR_DATA_TOGGLE$3}.${CLASS_NAME_SHOW$6}`;
        const SELECTOR_MENU = ".dropdown-menu";
        const SELECTOR_NAVBAR = ".navbar";
        const SELECTOR_NAVBAR_NAV = ".navbar-nav";
        const SELECTOR_VISIBLE_ITEMS = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)";
        const PLACEMENT_TOP = isRTL() ? "top-end" : "top-start";
        const PLACEMENT_TOPEND = isRTL() ? "top-start" : "top-end";
        const PLACEMENT_BOTTOM = isRTL() ? "bottom-end" : "bottom-start";
        const PLACEMENT_BOTTOMEND = isRTL() ? "bottom-start" : "bottom-end";
        const PLACEMENT_RIGHT = isRTL() ? "left-start" : "right-start";
        const PLACEMENT_LEFT = isRTL() ? "right-start" : "left-start";
        const PLACEMENT_TOPCENTER = "top";
        const PLACEMENT_BOTTOMCENTER = "bottom";
        const Default$9 = {
            autoClose: true,
            boundary: "clippingParents",
            display: "dynamic",
            offset: [ 0, 2 ],
            popperConfig: null,
            reference: "toggle"
        };
        const DefaultType$9 = {
            autoClose: "(boolean|string)",
            boundary: "(string|element)",
            display: "string",
            offset: "(array|string|function)",
            popperConfig: "(null|object|function)",
            reference: "(string|element|object)"
        };
        class Dropdown extends BaseComponent {
            constructor(element, config) {
                super(element, config);
                this._popper = null;
                this._parent = this._element.parentNode;
                this._menu = SelectorEngine.next(this._element, SELECTOR_MENU)[0] || SelectorEngine.prev(this._element, SELECTOR_MENU)[0] || SelectorEngine.findOne(SELECTOR_MENU, this._parent);
                this._inNavbar = this._detectNavbar();
            }
            static get Default() {
                return Default$9;
            }
            static get DefaultType() {
                return DefaultType$9;
            }
            static get NAME() {
                return NAME$a;
            }
            toggle() {
                return this._isShown() ? this.hide() : this.show();
            }
            show() {
                if (isDisabled(this._element) || this._isShown()) return;
                const relatedTarget = {
                    relatedTarget: this._element
                };
                const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$5, relatedTarget);
                if (showEvent.defaultPrevented) return;
                this._createPopper();
                if ("ontouchstart" in document.documentElement && !this._parent.closest(SELECTOR_NAVBAR_NAV)) for (const element of [].concat(...document.body.children)) EventHandler.on(element, "mouseover", noop);
                this._element.focus();
                this._element.setAttribute("aria-expanded", true);
                this._menu.classList.add(CLASS_NAME_SHOW$6);
                this._element.classList.add(CLASS_NAME_SHOW$6);
                EventHandler.trigger(this._element, EVENT_SHOWN$5, relatedTarget);
            }
            hide() {
                if (isDisabled(this._element) || !this._isShown()) return;
                const relatedTarget = {
                    relatedTarget: this._element
                };
                this._completeHide(relatedTarget);
            }
            dispose() {
                if (this._popper) this._popper.destroy();
                super.dispose();
            }
            update() {
                this._inNavbar = this._detectNavbar();
                if (this._popper) this._popper.update();
            }
            _completeHide(relatedTarget) {
                const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$5, relatedTarget);
                if (hideEvent.defaultPrevented) return;
                if ("ontouchstart" in document.documentElement) for (const element of [].concat(...document.body.children)) EventHandler.off(element, "mouseover", noop);
                if (this._popper) this._popper.destroy();
                this._menu.classList.remove(CLASS_NAME_SHOW$6);
                this._element.classList.remove(CLASS_NAME_SHOW$6);
                this._element.setAttribute("aria-expanded", "false");
                Manipulator.removeDataAttribute(this._menu, "popper");
                EventHandler.trigger(this._element, EVENT_HIDDEN$5, relatedTarget);
            }
            _getConfig(config) {
                config = super._getConfig(config);
                if (typeof config.reference === "object" && !bootstrap_esm_isElement(config.reference) && typeof config.reference.getBoundingClientRect !== "function") throw new TypeError(`${NAME$a.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
                return config;
            }
            _createPopper() {
                if (typeof lib_namespaceObject === "undefined") throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                let referenceElement = this._element;
                if (this._config.reference === "parent") referenceElement = this._parent; else if (bootstrap_esm_isElement(this._config.reference)) referenceElement = getElement(this._config.reference); else if (typeof this._config.reference === "object") referenceElement = this._config.reference;
                const popperConfig = this._getPopperConfig();
                this._popper = popper_createPopper(referenceElement, this._menu, popperConfig);
            }
            _isShown() {
                return this._menu.classList.contains(CLASS_NAME_SHOW$6);
            }
            _getPlacement() {
                const parentDropdown = this._parent;
                if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) return PLACEMENT_RIGHT;
                if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) return PLACEMENT_LEFT;
                if (parentDropdown.classList.contains(CLASS_NAME_DROPUP_CENTER)) return PLACEMENT_TOPCENTER;
                if (parentDropdown.classList.contains(CLASS_NAME_DROPDOWN_CENTER)) return PLACEMENT_BOTTOMCENTER;
                const isEnd = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
                if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
                return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
            }
            _detectNavbar() {
                return this._element.closest(SELECTOR_NAVBAR) !== null;
            }
            _getOffset() {
                const {offset} = this._config;
                if (typeof offset === "string") return offset.split(",").map((value => Number.parseInt(value, 10)));
                if (typeof offset === "function") return popperData => offset(popperData, this._element);
                return offset;
            }
            _getPopperConfig() {
                const defaultBsPopperConfig = {
                    placement: this._getPlacement(),
                    modifiers: [ {
                        name: "preventOverflow",
                        options: {
                            boundary: this._config.boundary
                        }
                    }, {
                        name: "offset",
                        options: {
                            offset: this._getOffset()
                        }
                    } ]
                };
                if (this._inNavbar || this._config.display === "static") {
                    Manipulator.setDataAttribute(this._menu, "popper", "static");
                    defaultBsPopperConfig.modifiers = [ {
                        name: "applyStyles",
                        enabled: false
                    } ];
                }
                return {
                    ...defaultBsPopperConfig,
                    ...execute(this._config.popperConfig, [ defaultBsPopperConfig ])
                };
            }
            _selectMenuItem({key, target}) {
                const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter((element => isVisible(element)));
                if (!items.length) return;
                getNextActiveElement(items, target, key === ARROW_DOWN_KEY$1, !items.includes(target)).focus();
            }
            static jQueryInterface(config) {
                return this.each((function() {
                    const data = Dropdown.getOrCreateInstance(this, config);
                    if (typeof config !== "string") return;
                    if (typeof data[config] === "undefined") throw new TypeError(`No method named "${config}"`);
                    data[config]();
                }));
            }
            static clearMenus(event) {
                if (event.button === RIGHT_MOUSE_BUTTON || event.type === "keyup" && event.key !== TAB_KEY$1) return;
                const openToggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE_SHOWN);
                for (const toggle of openToggles) {
                    const context = Dropdown.getInstance(toggle);
                    if (!context || context._config.autoClose === false) continue;
                    const composedPath = event.composedPath();
                    const isMenuTarget = composedPath.includes(context._menu);
                    if (composedPath.includes(context._element) || context._config.autoClose === "inside" && !isMenuTarget || context._config.autoClose === "outside" && isMenuTarget) continue;
                    if (context._menu.contains(event.target) && (event.type === "keyup" && event.key === TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) continue;
                    const relatedTarget = {
                        relatedTarget: context._element
                    };
                    if (event.type === "click") relatedTarget.clickEvent = event;
                    context._completeHide(relatedTarget);
                }
            }
            static dataApiKeydownHandler(event) {
                const isInput = /input|textarea/i.test(event.target.tagName);
                const isEscapeEvent = event.key === ESCAPE_KEY$2;
                const isUpOrDownEvent = [ ARROW_UP_KEY$1, ARROW_DOWN_KEY$1 ].includes(event.key);
                if (!isUpOrDownEvent && !isEscapeEvent) return;
                if (isInput && !isEscapeEvent) return;
                event.preventDefault();
                const getToggleButton = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.next(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.findOne(SELECTOR_DATA_TOGGLE$3, event.delegateTarget.parentNode);
                const instance = Dropdown.getOrCreateInstance(getToggleButton);
                if (isUpOrDownEvent) {
                    event.stopPropagation();
                    instance.show();
                    instance._selectMenuItem(event);
                    return;
                }
                if (instance._isShown()) {
                    event.stopPropagation();
                    instance.hide();
                    getToggleButton.focus();
                }
            }
        }
        EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
        EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
        EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
        EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
        EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, (function(event) {
            event.preventDefault();
            Dropdown.getOrCreateInstance(this).toggle();
        }));
        defineJQueryPlugin(Dropdown);
        const NAME$9 = "backdrop";
        const CLASS_NAME_FADE$4 = "fade";
        const CLASS_NAME_SHOW$5 = "show";
        const EVENT_MOUSEDOWN = `mousedown.bs.${NAME$9}`;
        const Default$8 = {
            className: "modal-backdrop",
            clickCallback: null,
            isAnimated: false,
            isVisible: true,
            rootElement: "body"
        };
        const DefaultType$8 = {
            className: "string",
            clickCallback: "(function|null)",
            isAnimated: "boolean",
            isVisible: "boolean",
            rootElement: "(element|string)"
        };
        class Backdrop extends Config {
            constructor(config) {
                super();
                this._config = this._getConfig(config);
                this._isAppended = false;
                this._element = null;
            }
            static get Default() {
                return Default$8;
            }
            static get DefaultType() {
                return DefaultType$8;
            }
            static get NAME() {
                return NAME$9;
            }
            show(callback) {
                if (!this._config.isVisible) {
                    execute(callback);
                    return;
                }
                this._append();
                const element = this._getElement();
                if (this._config.isAnimated) reflow(element);
                element.classList.add(CLASS_NAME_SHOW$5);
                this._emulateAnimation((() => {
                    execute(callback);
                }));
            }
            hide(callback) {
                if (!this._config.isVisible) {
                    execute(callback);
                    return;
                }
                this._getElement().classList.remove(CLASS_NAME_SHOW$5);
                this._emulateAnimation((() => {
                    this.dispose();
                    execute(callback);
                }));
            }
            dispose() {
                if (!this._isAppended) return;
                EventHandler.off(this._element, EVENT_MOUSEDOWN);
                this._element.remove();
                this._isAppended = false;
            }
            _getElement() {
                if (!this._element) {
                    const backdrop = document.createElement("div");
                    backdrop.className = this._config.className;
                    if (this._config.isAnimated) backdrop.classList.add(CLASS_NAME_FADE$4);
                    this._element = backdrop;
                }
                return this._element;
            }
            _configAfterMerge(config) {
                config.rootElement = getElement(config.rootElement);
                return config;
            }
            _append() {
                if (this._isAppended) return;
                const element = this._getElement();
                this._config.rootElement.append(element);
                EventHandler.on(element, EVENT_MOUSEDOWN, (() => {
                    execute(this._config.clickCallback);
                }));
                this._isAppended = true;
            }
            _emulateAnimation(callback) {
                executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
            }
        }
        const NAME$8 = "focustrap";
        const DATA_KEY$5 = "bs.focustrap";
        const EVENT_KEY$5 = `.${DATA_KEY$5}`;
        const EVENT_FOCUSIN$2 = `focusin${EVENT_KEY$5}`;
        const EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY$5}`;
        const TAB_KEY = "Tab";
        const TAB_NAV_FORWARD = "forward";
        const TAB_NAV_BACKWARD = "backward";
        const Default$7 = {
            autofocus: true,
            trapElement: null
        };
        const DefaultType$7 = {
            autofocus: "boolean",
            trapElement: "element"
        };
        class FocusTrap extends Config {
            constructor(config) {
                super();
                this._config = this._getConfig(config);
                this._isActive = false;
                this._lastTabNavDirection = null;
            }
            static get Default() {
                return Default$7;
            }
            static get DefaultType() {
                return DefaultType$7;
            }
            static get NAME() {
                return NAME$8;
            }
            activate() {
                if (this._isActive) return;
                if (this._config.autofocus) this._config.trapElement.focus();
                EventHandler.off(document, EVENT_KEY$5);
                EventHandler.on(document, EVENT_FOCUSIN$2, (event => this._handleFocusin(event)));
                EventHandler.on(document, EVENT_KEYDOWN_TAB, (event => this._handleKeydown(event)));
                this._isActive = true;
            }
            deactivate() {
                if (!this._isActive) return;
                this._isActive = false;
                EventHandler.off(document, EVENT_KEY$5);
            }
            _handleFocusin(event) {
                const {trapElement} = this._config;
                if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) return;
                const elements = SelectorEngine.focusableChildren(trapElement);
                if (elements.length === 0) trapElement.focus(); else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) elements[elements.length - 1].focus(); else elements[0].focus();
            }
            _handleKeydown(event) {
                if (event.key !== TAB_KEY) return;
                this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
            }
        }
        const SELECTOR_FIXED_CONTENT = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top";
        const SELECTOR_STICKY_CONTENT = ".sticky-top";
        const PROPERTY_PADDING = "padding-right";
        const PROPERTY_MARGIN = "margin-right";
        class ScrollBarHelper {
            constructor() {
                this._element = document.body;
            }
            getWidth() {
                const documentWidth = document.documentElement.clientWidth;
                return Math.abs(window.innerWidth - documentWidth);
            }
            hide() {
                const width = this.getWidth();
                this._disableOverFlow();
                this._setElementAttributes(this._element, PROPERTY_PADDING, (calculatedValue => calculatedValue + width));
                this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, (calculatedValue => calculatedValue + width));
                this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, (calculatedValue => calculatedValue - width));
            }
            reset() {
                this._resetElementAttributes(this._element, "overflow");
                this._resetElementAttributes(this._element, PROPERTY_PADDING);
                this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);
                this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
            }
            isOverflowing() {
                return this.getWidth() > 0;
            }
            _disableOverFlow() {
                this._saveInitialAttribute(this._element, "overflow");
                this._element.style.overflow = "hidden";
            }
            _setElementAttributes(selector, styleProperty, callback) {
                const scrollbarWidth = this.getWidth();
                const manipulationCallBack = element => {
                    if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) return;
                    this._saveInitialAttribute(element, styleProperty);
                    const calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
                    element.style.setProperty(styleProperty, `${callback(Number.parseFloat(calculatedValue))}px`);
                };
                this._applyManipulationCallback(selector, manipulationCallBack);
            }
            _saveInitialAttribute(element, styleProperty) {
                const actualValue = element.style.getPropertyValue(styleProperty);
                if (actualValue) Manipulator.setDataAttribute(element, styleProperty, actualValue);
            }
            _resetElementAttributes(selector, styleProperty) {
                const manipulationCallBack = element => {
                    const value = Manipulator.getDataAttribute(element, styleProperty);
                    if (value === null) {
                        element.style.removeProperty(styleProperty);
                        return;
                    }
                    Manipulator.removeDataAttribute(element, styleProperty);
                    element.style.setProperty(styleProperty, value);
                };
                this._applyManipulationCallback(selector, manipulationCallBack);
            }
            _applyManipulationCallback(selector, callBack) {
                if (bootstrap_esm_isElement(selector)) {
                    callBack(selector);
                    return;
                }
                for (const sel of SelectorEngine.find(selector, this._element)) callBack(sel);
            }
        }
        const NAME$7 = "modal";
        const DATA_KEY$4 = "bs.modal";
        const EVENT_KEY$4 = `.${DATA_KEY$4}`;
        const DATA_API_KEY$2 = ".data-api";
        const ESCAPE_KEY$1 = "Escape";
        const EVENT_HIDE$4 = `hide${EVENT_KEY$4}`;
        const EVENT_HIDE_PREVENTED$1 = `hidePrevented${EVENT_KEY$4}`;
        const EVENT_HIDDEN$4 = `hidden${EVENT_KEY$4}`;
        const EVENT_SHOW$4 = `show${EVENT_KEY$4}`;
        const EVENT_SHOWN$4 = `shown${EVENT_KEY$4}`;
        const EVENT_RESIZE$1 = `resize${EVENT_KEY$4}`;
        const EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY$4}`;
        const EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY$4}`;
        const EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss${EVENT_KEY$4}`;
        const EVENT_CLICK_DATA_API$2 = `click${EVENT_KEY$4}${DATA_API_KEY$2}`;
        const CLASS_NAME_OPEN = "modal-open";
        const CLASS_NAME_FADE$3 = "fade";
        const CLASS_NAME_SHOW$4 = "show";
        const CLASS_NAME_STATIC = "modal-static";
        const OPEN_SELECTOR$1 = ".modal.show";
        const SELECTOR_DIALOG = ".modal-dialog";
        const SELECTOR_MODAL_BODY = ".modal-body";
        const SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
        const Default$6 = {
            backdrop: true,
            focus: true,
            keyboard: true
        };
        const DefaultType$6 = {
            backdrop: "(boolean|string)",
            focus: "boolean",
            keyboard: "boolean"
        };
        class Modal extends BaseComponent {
            constructor(element, config) {
                super(element, config);
                this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
                this._backdrop = this._initializeBackDrop();
                this._focustrap = this._initializeFocusTrap();
                this._isShown = false;
                this._isTransitioning = false;
                this._scrollBar = new ScrollBarHelper;
                this._addEventListeners();
            }
            static get Default() {
                return Default$6;
            }
            static get DefaultType() {
                return DefaultType$6;
            }
            static get NAME() {
                return NAME$7;
            }
            toggle(relatedTarget) {
                return this._isShown ? this.hide() : this.show(relatedTarget);
            }
            show(relatedTarget) {
                if (this._isShown || this._isTransitioning) return;
                const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, {
                    relatedTarget
                });
                if (showEvent.defaultPrevented) return;
                this._isShown = true;
                this._isTransitioning = true;
                this._scrollBar.hide();
                document.body.classList.add(CLASS_NAME_OPEN);
                this._adjustDialog();
                this._backdrop.show((() => this._showElement(relatedTarget)));
            }
            hide() {
                if (!this._isShown || this._isTransitioning) return;
                const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4);
                if (hideEvent.defaultPrevented) return;
                this._isShown = false;
                this._isTransitioning = true;
                this._focustrap.deactivate();
                this._element.classList.remove(CLASS_NAME_SHOW$4);
                this._queueCallback((() => this._hideModal()), this._element, this._isAnimated());
            }
            dispose() {
                EventHandler.off(window, EVENT_KEY$4);
                EventHandler.off(this._dialog, EVENT_KEY$4);
                this._backdrop.dispose();
                this._focustrap.deactivate();
                super.dispose();
            }
            handleUpdate() {
                this._adjustDialog();
            }
            _initializeBackDrop() {
                return new Backdrop({
                    isVisible: Boolean(this._config.backdrop),
                    isAnimated: this._isAnimated()
                });
            }
            _initializeFocusTrap() {
                return new FocusTrap({
                    trapElement: this._element
                });
            }
            _showElement(relatedTarget) {
                if (!document.body.contains(this._element)) document.body.append(this._element);
                this._element.style.display = "block";
                this._element.removeAttribute("aria-hidden");
                this._element.setAttribute("aria-modal", true);
                this._element.setAttribute("role", "dialog");
                this._element.scrollTop = 0;
                const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);
                if (modalBody) modalBody.scrollTop = 0;
                reflow(this._element);
                this._element.classList.add(CLASS_NAME_SHOW$4);
                const transitionComplete = () => {
                    if (this._config.focus) this._focustrap.activate();
                    this._isTransitioning = false;
                    EventHandler.trigger(this._element, EVENT_SHOWN$4, {
                        relatedTarget
                    });
                };
                this._queueCallback(transitionComplete, this._dialog, this._isAnimated());
            }
            _addEventListeners() {
                EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, (event => {
                    if (event.key !== ESCAPE_KEY$1) return;
                    if (this._config.keyboard) {
                        this.hide();
                        return;
                    }
                    this._triggerBackdropTransition();
                }));
                EventHandler.on(window, EVENT_RESIZE$1, (() => {
                    if (this._isShown && !this._isTransitioning) this._adjustDialog();
                }));
                EventHandler.on(this._element, EVENT_MOUSEDOWN_DISMISS, (event => {
                    EventHandler.one(this._element, EVENT_CLICK_DISMISS, (event2 => {
                        if (this._element !== event.target || this._element !== event2.target) return;
                        if (this._config.backdrop === "static") {
                            this._triggerBackdropTransition();
                            return;
                        }
                        if (this._config.backdrop) this.hide();
                    }));
                }));
            }
            _hideModal() {
                this._element.style.display = "none";
                this._element.setAttribute("aria-hidden", true);
                this._element.removeAttribute("aria-modal");
                this._element.removeAttribute("role");
                this._isTransitioning = false;
                this._backdrop.hide((() => {
                    document.body.classList.remove(CLASS_NAME_OPEN);
                    this._resetAdjustments();
                    this._scrollBar.reset();
                    EventHandler.trigger(this._element, EVENT_HIDDEN$4);
                }));
            }
            _isAnimated() {
                return this._element.classList.contains(CLASS_NAME_FADE$3);
            }
            _triggerBackdropTransition() {
                const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED$1);
                if (hideEvent.defaultPrevented) return;
                const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
                const initialOverflowY = this._element.style.overflowY;
                if (initialOverflowY === "hidden" || this._element.classList.contains(CLASS_NAME_STATIC)) return;
                if (!isModalOverflowing) this._element.style.overflowY = "hidden";
                this._element.classList.add(CLASS_NAME_STATIC);
                this._queueCallback((() => {
                    this._element.classList.remove(CLASS_NAME_STATIC);
                    this._queueCallback((() => {
                        this._element.style.overflowY = initialOverflowY;
                    }), this._dialog);
                }), this._dialog);
                this._element.focus();
            }
            _adjustDialog() {
                const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
                const scrollbarWidth = this._scrollBar.getWidth();
                const isBodyOverflowing = scrollbarWidth > 0;
                if (isBodyOverflowing && !isModalOverflowing) {
                    const property = isRTL() ? "paddingLeft" : "paddingRight";
                    this._element.style[property] = `${scrollbarWidth}px`;
                }
                if (!isBodyOverflowing && isModalOverflowing) {
                    const property = isRTL() ? "paddingRight" : "paddingLeft";
                    this._element.style[property] = `${scrollbarWidth}px`;
                }
            }
            _resetAdjustments() {
                this._element.style.paddingLeft = "";
                this._element.style.paddingRight = "";
            }
            static jQueryInterface(config, relatedTarget) {
                return this.each((function() {
                    const data = Modal.getOrCreateInstance(this, config);
                    if (typeof config !== "string") return;
                    if (typeof data[config] === "undefined") throw new TypeError(`No method named "${config}"`);
                    data[config](relatedTarget);
                }));
            }
        }
        EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, (function(event) {
            const target = SelectorEngine.getElementFromSelector(this);
            if ([ "A", "AREA" ].includes(this.tagName)) event.preventDefault();
            EventHandler.one(target, EVENT_SHOW$4, (showEvent => {
                if (showEvent.defaultPrevented) return;
                EventHandler.one(target, EVENT_HIDDEN$4, (() => {
                    if (isVisible(this)) this.focus();
                }));
            }));
            const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR$1);
            if (alreadyOpen) Modal.getInstance(alreadyOpen).hide();
            const data = Modal.getOrCreateInstance(target);
            data.toggle(this);
        }));
        enableDismissTrigger(Modal);
        defineJQueryPlugin(Modal);
        const NAME$6 = "offcanvas";
        const DATA_KEY$3 = "bs.offcanvas";
        const EVENT_KEY$3 = `.${DATA_KEY$3}`;
        const DATA_API_KEY$1 = ".data-api";
        const EVENT_LOAD_DATA_API$2 = `load${EVENT_KEY$3}${DATA_API_KEY$1}`;
        const ESCAPE_KEY = "Escape";
        const CLASS_NAME_SHOW$3 = "show";
        const CLASS_NAME_SHOWING$1 = "showing";
        const CLASS_NAME_HIDING = "hiding";
        const CLASS_NAME_BACKDROP = "offcanvas-backdrop";
        const OPEN_SELECTOR = ".offcanvas.show";
        const EVENT_SHOW$3 = `show${EVENT_KEY$3}`;
        const EVENT_SHOWN$3 = `shown${EVENT_KEY$3}`;
        const EVENT_HIDE$3 = `hide${EVENT_KEY$3}`;
        const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY$3}`;
        const EVENT_HIDDEN$3 = `hidden${EVENT_KEY$3}`;
        const EVENT_RESIZE = `resize${EVENT_KEY$3}`;
        const EVENT_CLICK_DATA_API$1 = `click${EVENT_KEY$3}${DATA_API_KEY$1}`;
        const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY$3}`;
        const SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
        const Default$5 = {
            backdrop: true,
            keyboard: true,
            scroll: false
        };
        const DefaultType$5 = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            scroll: "boolean"
        };
        class Offcanvas extends BaseComponent {
            constructor(element, config) {
                super(element, config);
                this._isShown = false;
                this._backdrop = this._initializeBackDrop();
                this._focustrap = this._initializeFocusTrap();
                this._addEventListeners();
            }
            static get Default() {
                return Default$5;
            }
            static get DefaultType() {
                return DefaultType$5;
            }
            static get NAME() {
                return NAME$6;
            }
            toggle(relatedTarget) {
                return this._isShown ? this.hide() : this.show(relatedTarget);
            }
            show(relatedTarget) {
                if (this._isShown) return;
                const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
                    relatedTarget
                });
                if (showEvent.defaultPrevented) return;
                this._isShown = true;
                this._backdrop.show();
                if (!this._config.scroll) (new ScrollBarHelper).hide();
                this._element.setAttribute("aria-modal", true);
                this._element.setAttribute("role", "dialog");
                this._element.classList.add(CLASS_NAME_SHOWING$1);
                const completeCallBack = () => {
                    if (!this._config.scroll || this._config.backdrop) this._focustrap.activate();
                    this._element.classList.add(CLASS_NAME_SHOW$3);
                    this._element.classList.remove(CLASS_NAME_SHOWING$1);
                    EventHandler.trigger(this._element, EVENT_SHOWN$3, {
                        relatedTarget
                    });
                };
                this._queueCallback(completeCallBack, this._element, true);
            }
            hide() {
                if (!this._isShown) return;
                const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);
                if (hideEvent.defaultPrevented) return;
                this._focustrap.deactivate();
                this._element.blur();
                this._isShown = false;
                this._element.classList.add(CLASS_NAME_HIDING);
                this._backdrop.hide();
                const completeCallback = () => {
                    this._element.classList.remove(CLASS_NAME_SHOW$3, CLASS_NAME_HIDING);
                    this._element.removeAttribute("aria-modal");
                    this._element.removeAttribute("role");
                    if (!this._config.scroll) (new ScrollBarHelper).reset();
                    EventHandler.trigger(this._element, EVENT_HIDDEN$3);
                };
                this._queueCallback(completeCallback, this._element, true);
            }
            dispose() {
                this._backdrop.dispose();
                this._focustrap.deactivate();
                super.dispose();
            }
            _initializeBackDrop() {
                const clickCallback = () => {
                    if (this._config.backdrop === "static") {
                        EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
                        return;
                    }
                    this.hide();
                };
                const isVisible = Boolean(this._config.backdrop);
                return new Backdrop({
                    className: CLASS_NAME_BACKDROP,
                    isVisible,
                    isAnimated: true,
                    rootElement: this._element.parentNode,
                    clickCallback: isVisible ? clickCallback : null
                });
            }
            _initializeFocusTrap() {
                return new FocusTrap({
                    trapElement: this._element
                });
            }
            _addEventListeners() {
                EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, (event => {
                    if (event.key !== ESCAPE_KEY) return;
                    if (this._config.keyboard) {
                        this.hide();
                        return;
                    }
                    EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
                }));
            }
            static jQueryInterface(config) {
                return this.each((function() {
                    const data = Offcanvas.getOrCreateInstance(this, config);
                    if (typeof config !== "string") return;
                    if (data[config] === void 0 || config.startsWith("_") || config === "constructor") throw new TypeError(`No method named "${config}"`);
                    data[config](this);
                }));
            }
        }
        EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, (function(event) {
            const target = SelectorEngine.getElementFromSelector(this);
            if ([ "A", "AREA" ].includes(this.tagName)) event.preventDefault();
            if (isDisabled(this)) return;
            EventHandler.one(target, EVENT_HIDDEN$3, (() => {
                if (isVisible(this)) this.focus();
            }));
            const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);
            if (alreadyOpen && alreadyOpen !== target) Offcanvas.getInstance(alreadyOpen).hide();
            const data = Offcanvas.getOrCreateInstance(target);
            data.toggle(this);
        }));
        EventHandler.on(window, EVENT_LOAD_DATA_API$2, (() => {
            for (const selector of SelectorEngine.find(OPEN_SELECTOR)) Offcanvas.getOrCreateInstance(selector).show();
        }));
        EventHandler.on(window, EVENT_RESIZE, (() => {
            for (const element of SelectorEngine.find("[aria-modal][class*=show][class*=offcanvas-]")) if (getComputedStyle(element).position !== "fixed") Offcanvas.getOrCreateInstance(element).hide();
        }));
        enableDismissTrigger(Offcanvas);
        defineJQueryPlugin(Offcanvas);
        const ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
        const DefaultAllowlist = {
            "*": [ "class", "dir", "id", "lang", "role", ARIA_ATTRIBUTE_PATTERN ],
            a: [ "target", "href", "title", "rel" ],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: [ "src", "srcset", "alt", "title", "width", "height" ],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        };
        const uriAttributes = new Set([ "background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href" ]);
        const SAFE_URL_PATTERN = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i;
        const allowedAttribute = (attribute, allowedAttributeList) => {
            const attributeName = attribute.nodeName.toLowerCase();
            if (allowedAttributeList.includes(attributeName)) {
                if (uriAttributes.has(attributeName)) return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue));
                return true;
            }
            return allowedAttributeList.filter((attributeRegex => attributeRegex instanceof RegExp)).some((regex => regex.test(attributeName)));
        };
        function sanitizeHtml(unsafeHtml, allowList, sanitizeFunction) {
            if (!unsafeHtml.length) return unsafeHtml;
            if (sanitizeFunction && typeof sanitizeFunction === "function") return sanitizeFunction(unsafeHtml);
            const domParser = new window.DOMParser;
            const createdDocument = domParser.parseFromString(unsafeHtml, "text/html");
            const elements = [].concat(...createdDocument.body.querySelectorAll("*"));
            for (const element of elements) {
                const elementName = element.nodeName.toLowerCase();
                if (!Object.keys(allowList).includes(elementName)) {
                    element.remove();
                    continue;
                }
                const attributeList = [].concat(...element.attributes);
                const allowedAttributes = [].concat(allowList["*"] || [], allowList[elementName] || []);
                for (const attribute of attributeList) if (!allowedAttribute(attribute, allowedAttributes)) element.removeAttribute(attribute.nodeName);
            }
            return createdDocument.body.innerHTML;
        }
        const NAME$5 = "TemplateFactory";
        const Default$4 = {
            allowList: DefaultAllowlist,
            content: {},
            extraClass: "",
            html: false,
            sanitize: true,
            sanitizeFn: null,
            template: "<div></div>"
        };
        const DefaultType$4 = {
            allowList: "object",
            content: "object",
            extraClass: "(string|function)",
            html: "boolean",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            template: "string"
        };
        const DefaultContentType = {
            entry: "(string|element|function|null)",
            selector: "(string|element)"
        };
        class TemplateFactory extends Config {
            constructor(config) {
                super();
                this._config = this._getConfig(config);
            }
            static get Default() {
                return Default$4;
            }
            static get DefaultType() {
                return DefaultType$4;
            }
            static get NAME() {
                return NAME$5;
            }
            getContent() {
                return Object.values(this._config.content).map((config => this._resolvePossibleFunction(config))).filter(Boolean);
            }
            hasContent() {
                return this.getContent().length > 0;
            }
            changeContent(content) {
                this._checkContent(content);
                this._config.content = {
                    ...this._config.content,
                    ...content
                };
                return this;
            }
            toHtml() {
                const templateWrapper = document.createElement("div");
                templateWrapper.innerHTML = this._maybeSanitize(this._config.template);
                for (const [selector, text] of Object.entries(this._config.content)) this._setContent(templateWrapper, text, selector);
                const template = templateWrapper.children[0];
                const extraClass = this._resolvePossibleFunction(this._config.extraClass);
                if (extraClass) template.classList.add(...extraClass.split(" "));
                return template;
            }
            _typeCheckConfig(config) {
                super._typeCheckConfig(config);
                this._checkContent(config.content);
            }
            _checkContent(arg) {
                for (const [selector, content] of Object.entries(arg)) super._typeCheckConfig({
                    selector,
                    entry: content
                }, DefaultContentType);
            }
            _setContent(template, content, selector) {
                const templateElement = SelectorEngine.findOne(selector, template);
                if (!templateElement) return;
                content = this._resolvePossibleFunction(content);
                if (!content) {
                    templateElement.remove();
                    return;
                }
                if (bootstrap_esm_isElement(content)) {
                    this._putElementInTemplate(getElement(content), templateElement);
                    return;
                }
                if (this._config.html) {
                    templateElement.innerHTML = this._maybeSanitize(content);
                    return;
                }
                templateElement.textContent = content;
            }
            _maybeSanitize(arg) {
                return this._config.sanitize ? sanitizeHtml(arg, this._config.allowList, this._config.sanitizeFn) : arg;
            }
            _resolvePossibleFunction(arg) {
                return execute(arg, [ this ]);
            }
            _putElementInTemplate(element, templateElement) {
                if (this._config.html) {
                    templateElement.innerHTML = "";
                    templateElement.append(element);
                    return;
                }
                templateElement.textContent = element.textContent;
            }
        }
        const NAME$4 = "tooltip";
        const DISALLOWED_ATTRIBUTES = new Set([ "sanitize", "allowList", "sanitizeFn" ]);
        const CLASS_NAME_FADE$2 = "fade";
        const CLASS_NAME_MODAL = "modal";
        const CLASS_NAME_SHOW$2 = "show";
        const SELECTOR_TOOLTIP_INNER = ".tooltip-inner";
        const SELECTOR_MODAL = `.${CLASS_NAME_MODAL}`;
        const EVENT_MODAL_HIDE = "hide.bs.modal";
        const TRIGGER_HOVER = "hover";
        const TRIGGER_FOCUS = "focus";
        const TRIGGER_CLICK = "click";
        const TRIGGER_MANUAL = "manual";
        const EVENT_HIDE$2 = "hide";
        const EVENT_HIDDEN$2 = "hidden";
        const EVENT_SHOW$2 = "show";
        const EVENT_SHOWN$2 = "shown";
        const EVENT_INSERTED = "inserted";
        const EVENT_CLICK$1 = "click";
        const EVENT_FOCUSIN$1 = "focusin";
        const EVENT_FOCUSOUT$1 = "focusout";
        const EVENT_MOUSEENTER = "mouseenter";
        const EVENT_MOUSELEAVE = "mouseleave";
        const AttachmentMap = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: isRTL() ? "left" : "right",
            BOTTOM: "bottom",
            LEFT: isRTL() ? "right" : "left"
        };
        const Default$3 = {
            allowList: DefaultAllowlist,
            animation: true,
            boundary: "clippingParents",
            container: false,
            customClass: "",
            delay: 0,
            fallbackPlacements: [ "top", "right", "bottom", "left" ],
            html: false,
            offset: [ 0, 6 ],
            placement: "top",
            popperConfig: null,
            sanitize: true,
            sanitizeFn: null,
            selector: false,
            template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div>' + "</div>",
            title: "",
            trigger: "hover focus"
        };
        const DefaultType$3 = {
            allowList: "object",
            animation: "boolean",
            boundary: "(string|element)",
            container: "(string|element|boolean)",
            customClass: "(string|function)",
            delay: "(number|object)",
            fallbackPlacements: "array",
            html: "boolean",
            offset: "(array|string|function)",
            placement: "(string|function)",
            popperConfig: "(null|object|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            selector: "(string|boolean)",
            template: "string",
            title: "(string|element|function)",
            trigger: "string"
        };
        class Tooltip extends BaseComponent {
            constructor(element, config) {
                if (typeof lib_namespaceObject === "undefined") throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                super(element, config);
                this._isEnabled = true;
                this._timeout = 0;
                this._isHovered = null;
                this._activeTrigger = {};
                this._popper = null;
                this._templateFactory = null;
                this._newContent = null;
                this.tip = null;
                this._setListeners();
                if (!this._config.selector) this._fixTitle();
            }
            static get Default() {
                return Default$3;
            }
            static get DefaultType() {
                return DefaultType$3;
            }
            static get NAME() {
                return NAME$4;
            }
            enable() {
                this._isEnabled = true;
            }
            disable() {
                this._isEnabled = false;
            }
            toggleEnabled() {
                this._isEnabled = !this._isEnabled;
            }
            toggle() {
                if (!this._isEnabled) return;
                this._activeTrigger.click = !this._activeTrigger.click;
                if (this._isShown()) {
                    this._leave();
                    return;
                }
                this._enter();
            }
            dispose() {
                clearTimeout(this._timeout);
                EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
                if (this._element.getAttribute("data-bs-original-title")) this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title"));
                this._disposePopper();
                super.dispose();
            }
            show() {
                if (this._element.style.display === "none") throw new Error("Please use show on visible elements");
                if (!(this._isWithContent() && this._isEnabled)) return;
                const showEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOW$2));
                const shadowRoot = findShadowRoot(this._element);
                const isInTheDom = (shadowRoot || this._element.ownerDocument.documentElement).contains(this._element);
                if (showEvent.defaultPrevented || !isInTheDom) return;
                this._disposePopper();
                const tip = this._getTipElement();
                this._element.setAttribute("aria-describedby", tip.getAttribute("id"));
                const {container} = this._config;
                if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
                    container.append(tip);
                    EventHandler.trigger(this._element, this.constructor.eventName(EVENT_INSERTED));
                }
                this._popper = this._createPopper(tip);
                tip.classList.add(CLASS_NAME_SHOW$2);
                if ("ontouchstart" in document.documentElement) for (const element of [].concat(...document.body.children)) EventHandler.on(element, "mouseover", noop);
                const complete = () => {
                    EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOWN$2));
                    if (this._isHovered === false) this._leave();
                    this._isHovered = false;
                };
                this._queueCallback(complete, this.tip, this._isAnimated());
            }
            hide() {
                if (!this._isShown()) return;
                const hideEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDE$2));
                if (hideEvent.defaultPrevented) return;
                const tip = this._getTipElement();
                tip.classList.remove(CLASS_NAME_SHOW$2);
                if ("ontouchstart" in document.documentElement) for (const element of [].concat(...document.body.children)) EventHandler.off(element, "mouseover", noop);
                this._activeTrigger[TRIGGER_CLICK] = false;
                this._activeTrigger[TRIGGER_FOCUS] = false;
                this._activeTrigger[TRIGGER_HOVER] = false;
                this._isHovered = null;
                const complete = () => {
                    if (this._isWithActiveTrigger()) return;
                    if (!this._isHovered) this._disposePopper();
                    this._element.removeAttribute("aria-describedby");
                    EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDDEN$2));
                };
                this._queueCallback(complete, this.tip, this._isAnimated());
            }
            update() {
                if (this._popper) this._popper.update();
            }
            _isWithContent() {
                return Boolean(this._getTitle());
            }
            _getTipElement() {
                if (!this.tip) this.tip = this._createTipElement(this._newContent || this._getContentForTemplate());
                return this.tip;
            }
            _createTipElement(content) {
                const tip = this._getTemplateFactory(content).toHtml();
                if (!tip) return null;
                tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2);
                tip.classList.add(`bs-${this.constructor.NAME}-auto`);
                const tipId = getUID(this.constructor.NAME).toString();
                tip.setAttribute("id", tipId);
                if (this._isAnimated()) tip.classList.add(CLASS_NAME_FADE$2);
                return tip;
            }
            setContent(content) {
                this._newContent = content;
                if (this._isShown()) {
                    this._disposePopper();
                    this.show();
                }
            }
            _getTemplateFactory(content) {
                if (this._templateFactory) this._templateFactory.changeContent(content); else this._templateFactory = new TemplateFactory({
                    ...this._config,
                    content,
                    extraClass: this._resolvePossibleFunction(this._config.customClass)
                });
                return this._templateFactory;
            }
            _getContentForTemplate() {
                return {
                    [SELECTOR_TOOLTIP_INNER]: this._getTitle()
                };
            }
            _getTitle() {
                return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
            }
            _initializeOnDelegatedTarget(event) {
                return this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
            }
            _isAnimated() {
                return this._config.animation || this.tip && this.tip.classList.contains(CLASS_NAME_FADE$2);
            }
            _isShown() {
                return this.tip && this.tip.classList.contains(CLASS_NAME_SHOW$2);
            }
            _createPopper(tip) {
                const placement = execute(this._config.placement, [ this, tip, this._element ]);
                const attachment = AttachmentMap[placement.toUpperCase()];
                return popper_createPopper(this._element, tip, this._getPopperConfig(attachment));
            }
            _getOffset() {
                const {offset} = this._config;
                if (typeof offset === "string") return offset.split(",").map((value => Number.parseInt(value, 10)));
                if (typeof offset === "function") return popperData => offset(popperData, this._element);
                return offset;
            }
            _resolvePossibleFunction(arg) {
                return execute(arg, [ this._element ]);
            }
            _getPopperConfig(attachment) {
                const defaultBsPopperConfig = {
                    placement: attachment,
                    modifiers: [ {
                        name: "flip",
                        options: {
                            fallbackPlacements: this._config.fallbackPlacements
                        }
                    }, {
                        name: "offset",
                        options: {
                            offset: this._getOffset()
                        }
                    }, {
                        name: "preventOverflow",
                        options: {
                            boundary: this._config.boundary
                        }
                    }, {
                        name: "arrow",
                        options: {
                            element: `.${this.constructor.NAME}-arrow`
                        }
                    }, {
                        name: "preSetPlacement",
                        enabled: true,
                        phase: "beforeMain",
                        fn: data => {
                            this._getTipElement().setAttribute("data-popper-placement", data.state.placement);
                        }
                    } ]
                };
                return {
                    ...defaultBsPopperConfig,
                    ...execute(this._config.popperConfig, [ defaultBsPopperConfig ])
                };
            }
            _setListeners() {
                const triggers = this._config.trigger.split(" ");
                for (const trigger of triggers) if (trigger === "click") EventHandler.on(this._element, this.constructor.eventName(EVENT_CLICK$1), this._config.selector, (event => {
                    const context = this._initializeOnDelegatedTarget(event);
                    context.toggle();
                })); else if (trigger !== TRIGGER_MANUAL) {
                    const eventIn = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSEENTER) : this.constructor.eventName(EVENT_FOCUSIN$1);
                    const eventOut = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSELEAVE) : this.constructor.eventName(EVENT_FOCUSOUT$1);
                    EventHandler.on(this._element, eventIn, this._config.selector, (event => {
                        const context = this._initializeOnDelegatedTarget(event);
                        context._activeTrigger[event.type === "focusin" ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
                        context._enter();
                    }));
                    EventHandler.on(this._element, eventOut, this._config.selector, (event => {
                        const context = this._initializeOnDelegatedTarget(event);
                        context._activeTrigger[event.type === "focusout" ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
                        context._leave();
                    }));
                }
                this._hideModalHandler = () => {
                    if (this._element) this.hide();
                };
                EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
            }
            _fixTitle() {
                const title = this._element.getAttribute("title");
                if (!title) return;
                if (!this._element.getAttribute("aria-label") && !this._element.textContent.trim()) this._element.setAttribute("aria-label", title);
                this._element.setAttribute("data-bs-original-title", title);
                this._element.removeAttribute("title");
            }
            _enter() {
                if (this._isShown() || this._isHovered) {
                    this._isHovered = true;
                    return;
                }
                this._isHovered = true;
                this._setTimeout((() => {
                    if (this._isHovered) this.show();
                }), this._config.delay.show);
            }
            _leave() {
                if (this._isWithActiveTrigger()) return;
                this._isHovered = false;
                this._setTimeout((() => {
                    if (!this._isHovered) this.hide();
                }), this._config.delay.hide);
            }
            _setTimeout(handler, timeout) {
                clearTimeout(this._timeout);
                this._timeout = setTimeout(handler, timeout);
            }
            _isWithActiveTrigger() {
                return Object.values(this._activeTrigger).includes(true);
            }
            _getConfig(config) {
                const dataAttributes = Manipulator.getDataAttributes(this._element);
                for (const dataAttribute of Object.keys(dataAttributes)) if (DISALLOWED_ATTRIBUTES.has(dataAttribute)) delete dataAttributes[dataAttribute];
                config = {
                    ...dataAttributes,
                    ...typeof config === "object" && config ? config : {}
                };
                config = this._mergeConfigObj(config);
                config = this._configAfterMerge(config);
                this._typeCheckConfig(config);
                return config;
            }
            _configAfterMerge(config) {
                config.container = config.container === false ? document.body : getElement(config.container);
                if (typeof config.delay === "number") config.delay = {
                    show: config.delay,
                    hide: config.delay
                };
                if (typeof config.title === "number") config.title = config.title.toString();
                if (typeof config.content === "number") config.content = config.content.toString();
                return config;
            }
            _getDelegateConfig() {
                const config = {};
                for (const [key, value] of Object.entries(this._config)) if (this.constructor.Default[key] !== value) config[key] = value;
                config.selector = false;
                config.trigger = "manual";
                return config;
            }
            _disposePopper() {
                if (this._popper) {
                    this._popper.destroy();
                    this._popper = null;
                }
                if (this.tip) {
                    this.tip.remove();
                    this.tip = null;
                }
            }
            static jQueryInterface(config) {
                return this.each((function() {
                    const data = Tooltip.getOrCreateInstance(this, config);
                    if (typeof config !== "string") return;
                    if (typeof data[config] === "undefined") throw new TypeError(`No method named "${config}"`);
                    data[config]();
                }));
            }
        }
        defineJQueryPlugin(Tooltip);
        const NAME$3 = "popover";
        const SELECTOR_TITLE = ".popover-header";
        const SELECTOR_CONTENT = ".popover-body";
        const Default$2 = {
            ...Tooltip.Default,
            content: "",
            offset: [ 0, 8 ],
            placement: "right",
            template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div>' + "</div>",
            trigger: "click"
        };
        const DefaultType$2 = {
            ...Tooltip.DefaultType,
            content: "(null|string|element|function)"
        };
        class Popover extends Tooltip {
            static get Default() {
                return Default$2;
            }
            static get DefaultType() {
                return DefaultType$2;
            }
            static get NAME() {
                return NAME$3;
            }
            _isWithContent() {
                return this._getTitle() || this._getContent();
            }
            _getContentForTemplate() {
                return {
                    [SELECTOR_TITLE]: this._getTitle(),
                    [SELECTOR_CONTENT]: this._getContent()
                };
            }
            _getContent() {
                return this._resolvePossibleFunction(this._config.content);
            }
            static jQueryInterface(config) {
                return this.each((function() {
                    const data = Popover.getOrCreateInstance(this, config);
                    if (typeof config !== "string") return;
                    if (typeof data[config] === "undefined") throw new TypeError(`No method named "${config}"`);
                    data[config]();
                }));
            }
        }
        defineJQueryPlugin(Popover);
        const NAME$2 = "scrollspy";
        const DATA_KEY$2 = "bs.scrollspy";
        const EVENT_KEY$2 = `.${DATA_KEY$2}`;
        const DATA_API_KEY = ".data-api";
        const EVENT_ACTIVATE = `activate${EVENT_KEY$2}`;
        const EVENT_CLICK = `click${EVENT_KEY$2}`;
        const EVENT_LOAD_DATA_API$1 = `load${EVENT_KEY$2}${DATA_API_KEY}`;
        const CLASS_NAME_DROPDOWN_ITEM = "dropdown-item";
        const CLASS_NAME_ACTIVE$1 = "active";
        const SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
        const SELECTOR_TARGET_LINKS = "[href]";
        const SELECTOR_NAV_LIST_GROUP = ".nav, .list-group";
        const SELECTOR_NAV_LINKS = ".nav-link";
        const SELECTOR_NAV_ITEMS = ".nav-item";
        const SELECTOR_LIST_ITEMS = ".list-group-item";
        const SELECTOR_LINK_ITEMS = `${SELECTOR_NAV_LINKS}, ${SELECTOR_NAV_ITEMS} > ${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`;
        const SELECTOR_DROPDOWN = ".dropdown";
        const SELECTOR_DROPDOWN_TOGGLE$1 = ".dropdown-toggle";
        const Default$1 = {
            offset: null,
            rootMargin: "0px 0px -25%",
            smoothScroll: false,
            target: null,
            threshold: [ .1, .5, 1 ]
        };
        const DefaultType$1 = {
            offset: "(number|null)",
            rootMargin: "string",
            smoothScroll: "boolean",
            target: "element",
            threshold: "array"
        };
        class ScrollSpy extends BaseComponent {
            constructor(element, config) {
                super(element, config);
                this._targetLinks = new Map;
                this._observableSections = new Map;
                this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element;
                this._activeTarget = null;
                this._observer = null;
                this._previousScrollData = {
                    visibleEntryTop: 0,
                    parentScrollTop: 0
                };
                this.refresh();
            }
            static get Default() {
                return Default$1;
            }
            static get DefaultType() {
                return DefaultType$1;
            }
            static get NAME() {
                return NAME$2;
            }
            refresh() {
                this._initializeTargetsAndObservables();
                this._maybeEnableSmoothScroll();
                if (this._observer) this._observer.disconnect(); else this._observer = this._getNewObserver();
                for (const section of this._observableSections.values()) this._observer.observe(section);
            }
            dispose() {
                this._observer.disconnect();
                super.dispose();
            }
            _configAfterMerge(config) {
                config.target = getElement(config.target) || document.body;
                config.rootMargin = config.offset ? `${config.offset}px 0px -30%` : config.rootMargin;
                if (typeof config.threshold === "string") config.threshold = config.threshold.split(",").map((value => Number.parseFloat(value)));
                return config;
            }
            _maybeEnableSmoothScroll() {
                if (!this._config.smoothScroll) return;
                EventHandler.off(this._config.target, EVENT_CLICK);
                EventHandler.on(this._config.target, EVENT_CLICK, SELECTOR_TARGET_LINKS, (event => {
                    const observableSection = this._observableSections.get(event.target.hash);
                    if (observableSection) {
                        event.preventDefault();
                        const root = this._rootElement || window;
                        const height = observableSection.offsetTop - this._element.offsetTop;
                        if (root.scrollTo) {
                            root.scrollTo({
                                top: height,
                                behavior: "smooth"
                            });
                            return;
                        }
                        root.scrollTop = height;
                    }
                }));
            }
            _getNewObserver() {
                const options = {
                    root: this._rootElement,
                    threshold: this._config.threshold,
                    rootMargin: this._config.rootMargin
                };
                return new IntersectionObserver((entries => this._observerCallback(entries)), options);
            }
            _observerCallback(entries) {
                const targetElement = entry => this._targetLinks.get(`#${entry.target.id}`);
                const activate = entry => {
                    this._previousScrollData.visibleEntryTop = entry.target.offsetTop;
                    this._process(targetElement(entry));
                };
                const parentScrollTop = (this._rootElement || document.documentElement).scrollTop;
                const userScrollsDown = parentScrollTop >= this._previousScrollData.parentScrollTop;
                this._previousScrollData.parentScrollTop = parentScrollTop;
                for (const entry of entries) {
                    if (!entry.isIntersecting) {
                        this._activeTarget = null;
                        this._clearActiveClass(targetElement(entry));
                        continue;
                    }
                    const entryIsLowerThanPrevious = entry.target.offsetTop >= this._previousScrollData.visibleEntryTop;
                    if (userScrollsDown && entryIsLowerThanPrevious) {
                        activate(entry);
                        if (!parentScrollTop) return;
                        continue;
                    }
                    if (!userScrollsDown && !entryIsLowerThanPrevious) activate(entry);
                }
            }
            _initializeTargetsAndObservables() {
                this._targetLinks = new Map;
                this._observableSections = new Map;
                const targetLinks = SelectorEngine.find(SELECTOR_TARGET_LINKS, this._config.target);
                for (const anchor of targetLinks) {
                    if (!anchor.hash || isDisabled(anchor)) continue;
                    const observableSection = SelectorEngine.findOne(decodeURI(anchor.hash), this._element);
                    if (isVisible(observableSection)) {
                        this._targetLinks.set(decodeURI(anchor.hash), anchor);
                        this._observableSections.set(anchor.hash, observableSection);
                    }
                }
            }
            _process(target) {
                if (this._activeTarget === target) return;
                this._clearActiveClass(this._config.target);
                this._activeTarget = target;
                target.classList.add(CLASS_NAME_ACTIVE$1);
                this._activateParents(target);
                EventHandler.trigger(this._element, EVENT_ACTIVATE, {
                    relatedTarget: target
                });
            }
            _activateParents(target) {
                if (target.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
                    SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, target.closest(SELECTOR_DROPDOWN)).classList.add(CLASS_NAME_ACTIVE$1);
                    return;
                }
                for (const listGroup of SelectorEngine.parents(target, SELECTOR_NAV_LIST_GROUP)) for (const item of SelectorEngine.prev(listGroup, SELECTOR_LINK_ITEMS)) item.classList.add(CLASS_NAME_ACTIVE$1);
            }
            _clearActiveClass(parent) {
                parent.classList.remove(CLASS_NAME_ACTIVE$1);
                const activeNodes = SelectorEngine.find(`${SELECTOR_TARGET_LINKS}.${CLASS_NAME_ACTIVE$1}`, parent);
                for (const node of activeNodes) node.classList.remove(CLASS_NAME_ACTIVE$1);
            }
            static jQueryInterface(config) {
                return this.each((function() {
                    const data = ScrollSpy.getOrCreateInstance(this, config);
                    if (typeof config !== "string") return;
                    if (data[config] === void 0 || config.startsWith("_") || config === "constructor") throw new TypeError(`No method named "${config}"`);
                    data[config]();
                }));
            }
        }
        EventHandler.on(window, EVENT_LOAD_DATA_API$1, (() => {
            for (const spy of SelectorEngine.find(SELECTOR_DATA_SPY)) ScrollSpy.getOrCreateInstance(spy);
        }));
        defineJQueryPlugin(ScrollSpy);
        const NAME$1 = "tab";
        const DATA_KEY$1 = "bs.tab";
        const EVENT_KEY$1 = `.${DATA_KEY$1}`;
        const EVENT_HIDE$1 = `hide${EVENT_KEY$1}`;
        const EVENT_HIDDEN$1 = `hidden${EVENT_KEY$1}`;
        const EVENT_SHOW$1 = `show${EVENT_KEY$1}`;
        const EVENT_SHOWN$1 = `shown${EVENT_KEY$1}`;
        const EVENT_CLICK_DATA_API = `click${EVENT_KEY$1}`;
        const EVENT_KEYDOWN = `keydown${EVENT_KEY$1}`;
        const EVENT_LOAD_DATA_API = `load${EVENT_KEY$1}`;
        const ARROW_LEFT_KEY = "ArrowLeft";
        const ARROW_RIGHT_KEY = "ArrowRight";
        const ARROW_UP_KEY = "ArrowUp";
        const ARROW_DOWN_KEY = "ArrowDown";
        const CLASS_NAME_ACTIVE = "active";
        const CLASS_NAME_FADE$1 = "fade";
        const CLASS_NAME_SHOW$1 = "show";
        const CLASS_DROPDOWN = "dropdown";
        const SELECTOR_DROPDOWN_TOGGLE = ".dropdown-toggle";
        const SELECTOR_DROPDOWN_MENU = ".dropdown-menu";
        const NOT_SELECTOR_DROPDOWN_TOGGLE = ":not(.dropdown-toggle)";
        const SELECTOR_TAB_PANEL = '.list-group, .nav, [role="tablist"]';
        const SELECTOR_OUTER = ".nav-item, .list-group-item";
        const SELECTOR_INNER = `.nav-link${NOT_SELECTOR_DROPDOWN_TOGGLE}, .list-group-item${NOT_SELECTOR_DROPDOWN_TOGGLE}, [role="tab"]${NOT_SELECTOR_DROPDOWN_TOGGLE}`;
        const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
        const SELECTOR_INNER_ELEM = `${SELECTOR_INNER}, ${SELECTOR_DATA_TOGGLE}`;
        const SELECTOR_DATA_TOGGLE_ACTIVE = `.${CLASS_NAME_ACTIVE}[data-bs-toggle="tab"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="pill"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="list"]`;
        class Tab extends BaseComponent {
            constructor(element) {
                super(element);
                this._parent = this._element.closest(SELECTOR_TAB_PANEL);
                if (!this._parent) return;
                this._setInitialAttributes(this._parent, this._getChildren());
                EventHandler.on(this._element, EVENT_KEYDOWN, (event => this._keydown(event)));
            }
            static get NAME() {
                return NAME$1;
            }
            show() {
                const innerElem = this._element;
                if (this._elemIsActive(innerElem)) return;
                const active = this._getActiveElem();
                const hideEvent = active ? EventHandler.trigger(active, EVENT_HIDE$1, {
                    relatedTarget: innerElem
                }) : null;
                const showEvent = EventHandler.trigger(innerElem, EVENT_SHOW$1, {
                    relatedTarget: active
                });
                if (showEvent.defaultPrevented || hideEvent && hideEvent.defaultPrevented) return;
                this._deactivate(active, innerElem);
                this._activate(innerElem, active);
            }
            _activate(element, relatedElem) {
                if (!element) return;
                element.classList.add(CLASS_NAME_ACTIVE);
                this._activate(SelectorEngine.getElementFromSelector(element));
                const complete = () => {
                    if (element.getAttribute("role") !== "tab") {
                        element.classList.add(CLASS_NAME_SHOW$1);
                        return;
                    }
                    element.removeAttribute("tabindex");
                    element.setAttribute("aria-selected", true);
                    this._toggleDropDown(element, true);
                    EventHandler.trigger(element, EVENT_SHOWN$1, {
                        relatedTarget: relatedElem
                    });
                };
                this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
            }
            _deactivate(element, relatedElem) {
                if (!element) return;
                element.classList.remove(CLASS_NAME_ACTIVE);
                element.blur();
                this._deactivate(SelectorEngine.getElementFromSelector(element));
                const complete = () => {
                    if (element.getAttribute("role") !== "tab") {
                        element.classList.remove(CLASS_NAME_SHOW$1);
                        return;
                    }
                    element.setAttribute("aria-selected", false);
                    element.setAttribute("tabindex", "-1");
                    this._toggleDropDown(element, false);
                    EventHandler.trigger(element, EVENT_HIDDEN$1, {
                        relatedTarget: relatedElem
                    });
                };
                this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
            }
            _keydown(event) {
                if (![ ARROW_LEFT_KEY, ARROW_RIGHT_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY ].includes(event.key)) return;
                event.stopPropagation();
                event.preventDefault();
                const isNext = [ ARROW_RIGHT_KEY, ARROW_DOWN_KEY ].includes(event.key);
                const nextActiveElement = getNextActiveElement(this._getChildren().filter((element => !isDisabled(element))), event.target, isNext, true);
                if (nextActiveElement) {
                    nextActiveElement.focus({
                        preventScroll: true
                    });
                    Tab.getOrCreateInstance(nextActiveElement).show();
                }
            }
            _getChildren() {
                return SelectorEngine.find(SELECTOR_INNER_ELEM, this._parent);
            }
            _getActiveElem() {
                return this._getChildren().find((child => this._elemIsActive(child))) || null;
            }
            _setInitialAttributes(parent, children) {
                this._setAttributeIfNotExists(parent, "role", "tablist");
                for (const child of children) this._setInitialAttributesOnChild(child);
            }
            _setInitialAttributesOnChild(child) {
                child = this._getInnerElement(child);
                const isActive = this._elemIsActive(child);
                const outerElem = this._getOuterElement(child);
                child.setAttribute("aria-selected", isActive);
                if (outerElem !== child) this._setAttributeIfNotExists(outerElem, "role", "presentation");
                if (!isActive) child.setAttribute("tabindex", "-1");
                this._setAttributeIfNotExists(child, "role", "tab");
                this._setInitialAttributesOnTargetPanel(child);
            }
            _setInitialAttributesOnTargetPanel(child) {
                const target = SelectorEngine.getElementFromSelector(child);
                if (!target) return;
                this._setAttributeIfNotExists(target, "role", "tabpanel");
                if (child.id) this._setAttributeIfNotExists(target, "aria-labelledby", `${child.id}`);
            }
            _toggleDropDown(element, open) {
                const outerElem = this._getOuterElement(element);
                if (!outerElem.classList.contains(CLASS_DROPDOWN)) return;
                const toggle = (selector, className) => {
                    const element = SelectorEngine.findOne(selector, outerElem);
                    if (element) element.classList.toggle(className, open);
                };
                toggle(SELECTOR_DROPDOWN_TOGGLE, CLASS_NAME_ACTIVE);
                toggle(SELECTOR_DROPDOWN_MENU, CLASS_NAME_SHOW$1);
                outerElem.setAttribute("aria-expanded", open);
            }
            _setAttributeIfNotExists(element, attribute, value) {
                if (!element.hasAttribute(attribute)) element.setAttribute(attribute, value);
            }
            _elemIsActive(elem) {
                return elem.classList.contains(CLASS_NAME_ACTIVE);
            }
            _getInnerElement(elem) {
                return elem.matches(SELECTOR_INNER_ELEM) ? elem : SelectorEngine.findOne(SELECTOR_INNER_ELEM, elem);
            }
            _getOuterElement(elem) {
                return elem.closest(SELECTOR_OUTER) || elem;
            }
            static jQueryInterface(config) {
                return this.each((function() {
                    const data = Tab.getOrCreateInstance(this);
                    if (typeof config !== "string") return;
                    if (data[config] === void 0 || config.startsWith("_") || config === "constructor") throw new TypeError(`No method named "${config}"`);
                    data[config]();
                }));
            }
        }
        EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, (function(event) {
            if ([ "A", "AREA" ].includes(this.tagName)) event.preventDefault();
            if (isDisabled(this)) return;
            Tab.getOrCreateInstance(this).show();
        }));
        EventHandler.on(window, EVENT_LOAD_DATA_API, (() => {
            for (const element of SelectorEngine.find(SELECTOR_DATA_TOGGLE_ACTIVE)) Tab.getOrCreateInstance(element);
        }));
        defineJQueryPlugin(Tab);
        const NAME = "toast";
        const DATA_KEY = "bs.toast";
        const EVENT_KEY = `.${DATA_KEY}`;
        const EVENT_MOUSEOVER = `mouseover${EVENT_KEY}`;
        const EVENT_MOUSEOUT = `mouseout${EVENT_KEY}`;
        const EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
        const EVENT_FOCUSOUT = `focusout${EVENT_KEY}`;
        const EVENT_HIDE = `hide${EVENT_KEY}`;
        const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
        const EVENT_SHOW = `show${EVENT_KEY}`;
        const EVENT_SHOWN = `shown${EVENT_KEY}`;
        const CLASS_NAME_FADE = "fade";
        const CLASS_NAME_HIDE = "hide";
        const CLASS_NAME_SHOW = "show";
        const CLASS_NAME_SHOWING = "showing";
        const DefaultType = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        };
        const Default = {
            animation: true,
            autohide: true,
            delay: 5e3
        };
        class Toast extends BaseComponent {
            constructor(element, config) {
                super(element, config);
                this._timeout = null;
                this._hasMouseInteraction = false;
                this._hasKeyboardInteraction = false;
                this._setListeners();
            }
            static get Default() {
                return Default;
            }
            static get DefaultType() {
                return DefaultType;
            }
            static get NAME() {
                return NAME;
            }
            show() {
                const showEvent = EventHandler.trigger(this._element, EVENT_SHOW);
                if (showEvent.defaultPrevented) return;
                this._clearTimeout();
                if (this._config.animation) this._element.classList.add(CLASS_NAME_FADE);
                const complete = () => {
                    this._element.classList.remove(CLASS_NAME_SHOWING);
                    EventHandler.trigger(this._element, EVENT_SHOWN);
                    this._maybeScheduleHide();
                };
                this._element.classList.remove(CLASS_NAME_HIDE);
                reflow(this._element);
                this._element.classList.add(CLASS_NAME_SHOW, CLASS_NAME_SHOWING);
                this._queueCallback(complete, this._element, this._config.animation);
            }
            hide() {
                if (!this.isShown()) return;
                const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);
                if (hideEvent.defaultPrevented) return;
                const complete = () => {
                    this._element.classList.add(CLASS_NAME_HIDE);
                    this._element.classList.remove(CLASS_NAME_SHOWING, CLASS_NAME_SHOW);
                    EventHandler.trigger(this._element, EVENT_HIDDEN);
                };
                this._element.classList.add(CLASS_NAME_SHOWING);
                this._queueCallback(complete, this._element, this._config.animation);
            }
            dispose() {
                this._clearTimeout();
                if (this.isShown()) this._element.classList.remove(CLASS_NAME_SHOW);
                super.dispose();
            }
            isShown() {
                return this._element.classList.contains(CLASS_NAME_SHOW);
            }
            _maybeScheduleHide() {
                if (!this._config.autohide) return;
                if (this._hasMouseInteraction || this._hasKeyboardInteraction) return;
                this._timeout = setTimeout((() => {
                    this.hide();
                }), this._config.delay);
            }
            _onInteraction(event, isInteracting) {
                switch (event.type) {
                  case "mouseover":
                  case "mouseout":
                    this._hasMouseInteraction = isInteracting;
                    break;

                  case "focusin":
                  case "focusout":
                    this._hasKeyboardInteraction = isInteracting;
                    break;
                }
                if (isInteracting) {
                    this._clearTimeout();
                    return;
                }
                const nextElement = event.relatedTarget;
                if (this._element === nextElement || this._element.contains(nextElement)) return;
                this._maybeScheduleHide();
            }
            _setListeners() {
                EventHandler.on(this._element, EVENT_MOUSEOVER, (event => this._onInteraction(event, true)));
                EventHandler.on(this._element, EVENT_MOUSEOUT, (event => this._onInteraction(event, false)));
                EventHandler.on(this._element, EVENT_FOCUSIN, (event => this._onInteraction(event, true)));
                EventHandler.on(this._element, EVENT_FOCUSOUT, (event => this._onInteraction(event, false)));
            }
            _clearTimeout() {
                clearTimeout(this._timeout);
                this._timeout = null;
            }
            static jQueryInterface(config) {
                return this.each((function() {
                    const data = Toast.getOrCreateInstance(this, config);
                    if (typeof config === "string") {
                        if (typeof data[config] === "undefined") throw new TypeError(`No method named "${config}"`);
                        data[config](this);
                    }
                }));
            }
        }
        enableDismissTrigger(Toast);
        defineJQueryPlugin(Toast);
        let addWindowScrollEvent = false;
        function headerScroll() {
            addWindowScrollEvent = true;
            const header = document.querySelector("header.header");
            const headerShow = header.hasAttribute("data-scroll-show");
            const headerShowTimer = header.dataset.scrollShow ? header.dataset.scrollShow : 500;
            const startPoint = header.dataset.scroll ? header.dataset.scroll : 1;
            let scrollDirection = 0;
            let timer;
            document.addEventListener("windowScroll", (function(e) {
                const scrollTop = window.scrollY;
                clearTimeout(timer);
                if (scrollTop >= startPoint) {
                    !header.classList.contains("_header-scroll") ? header.classList.add("_header-scroll") : null;
                    if (headerShow) {
                        if (scrollTop > scrollDirection) header.classList.contains("_header-show") ? header.classList.remove("_header-show") : null; else !header.classList.contains("_header-show") ? header.classList.add("_header-show") : null;
                        timer = setTimeout((() => {
                            !header.classList.contains("_header-show") ? header.classList.add("_header-show") : null;
                        }), headerShowTimer);
                    }
                } else {
                    header.classList.contains("_header-scroll") ? header.classList.remove("_header-scroll") : null;
                    if (headerShow) header.classList.contains("_header-show") ? header.classList.remove("_header-show") : null;
                }
                scrollDirection = scrollTop <= 0 ? 0 : scrollTop;
            }));
        }
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        class DynamicAdapt {
            constructor(type) {
                this.type = type;
            }
            init() {
                this.оbjects = [];
                this.daClassname = "_dynamic_adapt_";
                this.nodes = [ ...document.querySelectorAll("[data-da]") ];
                this.nodes.forEach((node => {
                    const data = node.dataset.da.trim();
                    const dataArray = data.split(",");
                    const оbject = {};
                    оbject.element = node;
                    оbject.parent = node.parentNode;
                    оbject.destination = document.querySelector(`${dataArray[0].trim()}`);
                    оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
                    оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
                    оbject.index = this.indexInParent(оbject.parent, оbject.element);
                    this.оbjects.push(оbject);
                }));
                this.arraySort(this.оbjects);
                this.mediaQueries = this.оbjects.map((({breakpoint}) => `(${this.type}-width: ${breakpoint}px),${breakpoint}`)).filter(((item, index, self) => self.indexOf(item) === index));
                this.mediaQueries.forEach((media => {
                    const mediaSplit = media.split(",");
                    const matchMedia = window.matchMedia(mediaSplit[0]);
                    const mediaBreakpoint = mediaSplit[1];
                    const оbjectsFilter = this.оbjects.filter((({breakpoint}) => breakpoint === mediaBreakpoint));
                    matchMedia.addEventListener("change", (() => {
                        this.mediaHandler(matchMedia, оbjectsFilter);
                    }));
                    this.mediaHandler(matchMedia, оbjectsFilter);
                }));
            }
            mediaHandler(matchMedia, оbjects) {
                if (matchMedia.matches) оbjects.forEach((оbject => {
                    this.moveTo(оbject.place, оbject.element, оbject.destination);
                })); else оbjects.forEach((({parent, element, index}) => {
                    if (element.classList.contains(this.daClassname)) this.moveBack(parent, element, index);
                }));
            }
            moveTo(place, element, destination) {
                element.classList.add(this.daClassname);
                if (place === "last" || place >= destination.children.length) {
                    destination.append(element);
                    return;
                }
                if (place === "first") {
                    destination.prepend(element);
                    return;
                }
                destination.children[place].before(element);
            }
            moveBack(parent, element, index) {
                element.classList.remove(this.daClassname);
                if (parent.children[index] !== void 0) parent.children[index].before(element); else parent.append(element);
            }
            indexInParent(parent, element) {
                return [ ...parent.children ].indexOf(element);
            }
            arraySort(arr) {
                if (this.type === "min") arr.sort(((a, b) => {
                    if (a.breakpoint === b.breakpoint) {
                        if (a.place === b.place) return 0;
                        if (a.place === "first" || b.place === "last") return -1;
                        if (a.place === "last" || b.place === "first") return 1;
                        return 0;
                    }
                    return a.breakpoint - b.breakpoint;
                })); else {
                    arr.sort(((a, b) => {
                        if (a.breakpoint === b.breakpoint) {
                            if (a.place === b.place) return 0;
                            if (a.place === "first" || b.place === "last") return 1;
                            if (a.place === "last" || b.place === "first") return -1;
                            return 0;
                        }
                        return b.breakpoint - a.breakpoint;
                    }));
                    return;
                }
            }
        }
        const da = new DynamicAdapt("max");
        da.init();
        const t = (t, e = 1e4) => (t = parseFloat(t + "") || 0, Math.round((t + Number.EPSILON) * e) / e), e = function(t) {
            if (!(t && t instanceof Element && t.offsetParent)) return !1;
            const e = t.scrollHeight > t.clientHeight, i = window.getComputedStyle(t).overflowY, n = -1 !== i.indexOf("hidden"), s = -1 !== i.indexOf("visible");
            return e && !n && !s;
        }, i = function(t, n) {
            return !(!t || t === document.body || n && t === n) && (e(t) ? t : i(t.parentElement, n));
        }, n = function(t) {
            var e = (new DOMParser).parseFromString(t, "text/html").body;
            if (e.childElementCount > 1) {
                for (var i = document.createElement("div"); e.firstChild; ) i.appendChild(e.firstChild);
                return i;
            }
            return e.firstChild;
        }, s = t => `${t || ""}`.split(" ").filter((t => !!t)), o = (t, e, i) => {
            s(e).forEach((e => {
                t && t.classList.toggle(e, i || !1);
            }));
        };
        class a {
            constructor(t) {
                Object.defineProperty(this, "pageX", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "pageY", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "clientX", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "clientY", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "id", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "time", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "nativePointer", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), this.nativePointer = t, this.pageX = t.pageX, this.pageY = t.pageY, this.clientX = t.clientX, 
                this.clientY = t.clientY, this.id = self.Touch && t instanceof Touch ? t.identifier : -1, 
                this.time = Date.now();
            }
        }
        const r = {
            passive: !1
        };
        class l {
            constructor(t, {start: e = (() => !0), move: i = (() => {}), end: n = (() => {})}) {
                Object.defineProperty(this, "element", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "startCallback", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "moveCallback", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "endCallback", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "currentPointers", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }), Object.defineProperty(this, "startPointers", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }), this.element = t, this.startCallback = e, this.moveCallback = i, this.endCallback = n;
                for (const t of [ "onPointerStart", "onTouchStart", "onMove", "onTouchEnd", "onPointerEnd", "onWindowBlur" ]) this[t] = this[t].bind(this);
                this.element.addEventListener("mousedown", this.onPointerStart, r), this.element.addEventListener("touchstart", this.onTouchStart, r), 
                this.element.addEventListener("touchmove", this.onMove, r), this.element.addEventListener("touchend", this.onTouchEnd), 
                this.element.addEventListener("touchcancel", this.onTouchEnd);
            }
            onPointerStart(t) {
                if (!t.buttons || 0 !== t.button) return;
                const e = new a(t);
                this.currentPointers.some((t => t.id === e.id)) || this.triggerPointerStart(e, t) && (window.addEventListener("mousemove", this.onMove), 
                window.addEventListener("mouseup", this.onPointerEnd), window.addEventListener("blur", this.onWindowBlur));
            }
            onTouchStart(t) {
                for (const e of Array.from(t.changedTouches || [])) this.triggerPointerStart(new a(e), t);
                window.addEventListener("blur", this.onWindowBlur);
            }
            onMove(t) {
                const e = this.currentPointers.slice(), i = "changedTouches" in t ? Array.from(t.changedTouches || []).map((t => new a(t))) : [ new a(t) ], n = [];
                for (const t of i) {
                    const e = this.currentPointers.findIndex((e => e.id === t.id));
                    e < 0 || (n.push(t), this.currentPointers[e] = t);
                }
                n.length && this.moveCallback(t, this.currentPointers.slice(), e);
            }
            onPointerEnd(t) {
                t.buttons > 0 && 0 !== t.button || (this.triggerPointerEnd(t, new a(t)), window.removeEventListener("mousemove", this.onMove), 
                window.removeEventListener("mouseup", this.onPointerEnd), window.removeEventListener("blur", this.onWindowBlur));
            }
            onTouchEnd(t) {
                for (const e of Array.from(t.changedTouches || [])) this.triggerPointerEnd(t, new a(e));
            }
            triggerPointerStart(t, e) {
                return !!this.startCallback(e, t, this.currentPointers.slice()) && (this.currentPointers.push(t), 
                this.startPointers.push(t), !0);
            }
            triggerPointerEnd(t, e) {
                const i = this.currentPointers.findIndex((t => t.id === e.id));
                i < 0 || (this.currentPointers.splice(i, 1), this.startPointers.splice(i, 1), this.endCallback(t, e, this.currentPointers.slice()));
            }
            onWindowBlur() {
                this.clear();
            }
            clear() {
                for (;this.currentPointers.length; ) {
                    const t = this.currentPointers[this.currentPointers.length - 1];
                    this.currentPointers.splice(this.currentPointers.length - 1, 1), this.startPointers.splice(this.currentPointers.length - 1, 1), 
                    this.endCallback(new Event("touchend", {
                        bubbles: !0,
                        cancelable: !0,
                        clientX: t.clientX,
                        clientY: t.clientY
                    }), t, this.currentPointers.slice());
                }
            }
            stop() {
                this.element.removeEventListener("mousedown", this.onPointerStart, r), this.element.removeEventListener("touchstart", this.onTouchStart, r), 
                this.element.removeEventListener("touchmove", this.onMove, r), this.element.removeEventListener("touchend", this.onTouchEnd), 
                this.element.removeEventListener("touchcancel", this.onTouchEnd), window.removeEventListener("mousemove", this.onMove), 
                window.removeEventListener("mouseup", this.onPointerEnd), window.removeEventListener("blur", this.onWindowBlur);
            }
        }
        function c(t, e) {
            return e ? Math.sqrt(Math.pow(e.clientX - t.clientX, 2) + Math.pow(e.clientY - t.clientY, 2)) : 0;
        }
        function h(t, e) {
            return e ? {
                clientX: (t.clientX + e.clientX) / 2,
                clientY: (t.clientY + e.clientY) / 2
            } : t;
        }
        const d = t => "object" == typeof t && null !== t && t.constructor === Object && "[object Object]" === Object.prototype.toString.call(t), u = (t, ...e) => {
            const i = e.length;
            for (let n = 0; n < i; n++) {
                const i = e[n] || {};
                Object.entries(i).forEach((([e, i]) => {
                    const n = Array.isArray(i) ? [] : {};
                    t[e] || Object.assign(t, {
                        [e]: n
                    }), d(i) ? Object.assign(t[e], u(n, i)) : Array.isArray(i) ? Object.assign(t, {
                        [e]: [ ...i ]
                    }) : Object.assign(t, {
                        [e]: i
                    });
                }));
            }
            return t;
        }, p = function(t, e) {
            return t.split(".").reduce(((t, e) => "object" == typeof t ? t[e] : void 0), e);
        };
        class f {
            constructor(t = {}) {
                Object.defineProperty(this, "options", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }), Object.defineProperty(this, "events", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: new Map
                }), this.setOptions(t);
                for (const t of Object.getOwnPropertyNames(Object.getPrototypeOf(this))) t.startsWith("on") && "function" == typeof this[t] && (this[t] = this[t].bind(this));
            }
            setOptions(t) {
                this.options = t ? u({}, this.constructor.defaults, t) : {};
                for (const [t, e] of Object.entries(this.option("on") || {})) this.on(t, e);
            }
            option(t, ...e) {
                let i = p(t, this.options);
                return i && "function" == typeof i && (i = i.call(this, this, ...e)), i;
            }
            optionFor(t, e, i, ...n) {
                let s = p(e, t);
                var o;
                "string" != typeof (o = s) || isNaN(o) || isNaN(parseFloat(o)) || (s = parseFloat(s)), 
                "true" === s && (s = !0), "false" === s && (s = !1), s && "function" == typeof s && (s = s.call(this, this, t, ...n));
                let a = p(e, this.options);
                return a && "function" == typeof a ? s = a.call(this, this, t, ...n, s) : void 0 === s && (s = a), 
                void 0 === s ? i : s;
            }
            cn(t) {
                const e = this.options.classes;
                return e && e[t] || "";
            }
            localize(t, e = []) {
                t = String(t).replace(/\{\{(\w+).?(\w+)?\}\}/g, ((t, e, i) => {
                    let n = "";
                    return i ? n = this.option(`${e[0] + e.toLowerCase().substring(1)}.l10n.${i}`) : e && (n = this.option(`l10n.${e}`)), 
                    n || (n = t), n;
                }));
                for (let i = 0; i < e.length; i++) t = t.split(e[i][0]).join(e[i][1]);
                return t = t.replace(/\{\{(.*?)\}\}/g, ((t, e) => e));
            }
            on(t, e) {
                let i = [];
                "string" == typeof t ? i = t.split(" ") : Array.isArray(t) && (i = t), this.events || (this.events = new Map), 
                i.forEach((t => {
                    let i = this.events.get(t);
                    i || (this.events.set(t, []), i = []), i.includes(e) || i.push(e), this.events.set(t, i);
                }));
            }
            off(t, e) {
                let i = [];
                "string" == typeof t ? i = t.split(" ") : Array.isArray(t) && (i = t), i.forEach((t => {
                    const i = this.events.get(t);
                    if (Array.isArray(i)) {
                        const t = i.indexOf(e);
                        t > -1 && i.splice(t, 1);
                    }
                }));
            }
            emit(t, ...e) {
                [ ...this.events.get(t) || [] ].forEach((t => t(this, ...e))), "*" !== t && this.emit("*", t, ...e);
            }
        }
        Object.defineProperty(f, "version", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "5.0.19"
        }), Object.defineProperty(f, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {}
        });
        class m extends f {
            constructor(t = {}) {
                super(t), Object.defineProperty(this, "plugins", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {}
                });
            }
            attachPlugins(t = {}) {
                const e = new Map;
                for (const [i, n] of Object.entries(t)) {
                    const t = this.option(i), s = this.plugins[i];
                    s || !1 === t ? s && !1 === t && (s.detach(), delete this.plugins[i]) : e.set(i, new n(this, t || {}));
                }
                for (const [t, i] of e) this.plugins[t] = i, i.attach();
                this.emit("attachPlugins");
            }
            detachPlugins(t) {
                t = t || Object.keys(this.plugins);
                for (const e of t) {
                    const t = this.plugins[e];
                    t && t.detach(), delete this.plugins[e];
                }
                return this.emit("detachPlugins"), this;
            }
        }
        var g;
        !function(t) {
            t[t.Init = 0] = "Init", t[t.Error = 1] = "Error", t[t.Ready = 2] = "Ready", t[t.Panning = 3] = "Panning", 
            t[t.Mousemove = 4] = "Mousemove", t[t.Destroy = 5] = "Destroy";
        }(g || (g = {}));
        const b = [ "a", "b", "c", "d", "e", "f" ], v = {
            PANUP: "Move up",
            PANDOWN: "Move down",
            PANLEFT: "Move left",
            PANRIGHT: "Move right",
            ZOOMIN: "Zoom in",
            ZOOMOUT: "Zoom out",
            TOGGLEZOOM: "Toggle zoom level",
            TOGGLE1TO1: "Toggle zoom level",
            ITERATEZOOM: "Toggle zoom level",
            ROTATECCW: "Rotate counterclockwise",
            ROTATECW: "Rotate clockwise",
            FLIPX: "Flip horizontally",
            FLIPY: "Flip vertically",
            FITX: "Fit horizontally",
            FITY: "Fit vertically",
            RESET: "Reset",
            TOGGLEFS: "Toggle fullscreen"
        }, y = {
            content: null,
            width: "auto",
            height: "auto",
            panMode: "drag",
            touch: !0,
            dragMinThreshold: 3,
            lockAxis: !1,
            mouseMoveFactor: 1,
            mouseMoveFriction: .12,
            zoom: !0,
            pinchToZoom: !0,
            panOnlyZoomed: "auto",
            minScale: 1,
            maxScale: 2,
            friction: .25,
            dragFriction: .35,
            decelFriction: .05,
            click: "toggleZoom",
            dblClick: !1,
            wheel: "zoom",
            wheelLimit: 7,
            spinner: !0,
            bounds: "auto",
            infinite: !1,
            rubberband: !0,
            bounce: !0,
            maxVelocity: 75,
            transformParent: !1,
            classes: {
                content: "f-panzoom__content",
                isLoading: "is-loading",
                canZoomIn: "can-zoom_in",
                canZoomOut: "can-zoom_out",
                isDraggable: "is-draggable",
                isDragging: "is-dragging",
                inFullscreen: "in-fullscreen",
                htmlHasFullscreen: "with-panzoom-in-fullscreen"
            },
            l10n: v
        }, w = '<div class="f-spinner"><svg viewBox="0 0 50 50"><circle cx="25" cy="25" r="20"></circle><circle cx="25" cy="25" r="20"></circle></svg></div>', x = t => t && null !== t && t instanceof Element && "nodeType" in t, S = (t, e) => {
            t && s(e).forEach((e => {
                t.classList.remove(e);
            }));
        }, E = (t, e) => {
            t && s(e).forEach((e => {
                t.classList.add(e);
            }));
        }, P = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: 0,
            f: 0
        };
        let C = null, M = null;
        class T extends m {
            get isTouchDevice() {
                return null === M && (M = window.matchMedia("(hover: none)").matches), M;
            }
            get isMobile() {
                return null === C && (C = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)), 
                C;
            }
            get panMode() {
                return "mousemove" !== this.options.panMode || this.isTouchDevice ? "drag" : "mousemove";
            }
            get panOnlyZoomed() {
                const t = this.options.panOnlyZoomed;
                return "auto" === t ? this.isTouchDevice : t;
            }
            get isInfinite() {
                return this.option("infinite");
            }
            get angle() {
                return 180 * Math.atan2(this.current.b, this.current.a) / Math.PI || 0;
            }
            get targetAngle() {
                return 180 * Math.atan2(this.target.b, this.target.a) / Math.PI || 0;
            }
            get scale() {
                const {a: t, b: e} = this.current;
                return Math.sqrt(t * t + e * e) || 1;
            }
            get targetScale() {
                const {a: t, b: e} = this.target;
                return Math.sqrt(t * t + e * e) || 1;
            }
            get minScale() {
                return this.option("minScale") || 1;
            }
            get fullScale() {
                const {contentRect: t} = this;
                return t.fullWidth / t.fitWidth || 1;
            }
            get maxScale() {
                return this.fullScale * (this.option("maxScale") || 1) || 1;
            }
            get coverScale() {
                const {containerRect: t, contentRect: e} = this, i = Math.max(t.height / e.fitHeight, t.width / e.fitWidth) || 1;
                return Math.min(this.fullScale, i);
            }
            get isScaling() {
                return Math.abs(this.targetScale - this.scale) > 1e-5 && !this.isResting;
            }
            get isContentLoading() {
                const t = this.content;
                return !!(t && t instanceof HTMLImageElement) && !t.complete;
            }
            get isResting() {
                if (this.isBouncingX || this.isBouncingY) return !1;
                for (const t of b) {
                    const e = "e" == t || "f" === t ? .001 : 1e-5;
                    if (Math.abs(this.target[t] - this.current[t]) > e) return !1;
                }
                return !(!this.ignoreBounds && !this.checkBounds().inBounds);
            }
            constructor(t, e = {}, i = {}) {
                var s;
                if (super(e), Object.defineProperty(this, "pointerTracker", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "resizeObserver", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "updateTimer", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "clickTimer", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "rAF", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "isTicking", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }), Object.defineProperty(this, "friction", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "ignoreBounds", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }), Object.defineProperty(this, "isBouncingX", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }), Object.defineProperty(this, "isBouncingY", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }), Object.defineProperty(this, "clicks", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "trackingPoints", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }), Object.defineProperty(this, "pwt", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "cwd", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "pmme", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "state", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: g.Init
                }), Object.defineProperty(this, "isDragging", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }), Object.defineProperty(this, "container", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "content", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "spinner", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "containerRect", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        width: 0,
                        height: 0,
                        innerWidth: 0,
                        innerHeight: 0
                    }
                }), Object.defineProperty(this, "contentRect", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        fullWidth: 0,
                        fullHeight: 0,
                        fitWidth: 0,
                        fitHeight: 0,
                        width: 0,
                        height: 0
                    }
                }), Object.defineProperty(this, "dragStart", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        x: 0,
                        y: 0,
                        top: 0,
                        left: 0,
                        time: 0
                    }
                }), Object.defineProperty(this, "dragOffset", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        x: 0,
                        y: 0,
                        time: 0
                    }
                }), Object.defineProperty(this, "current", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: Object.assign({}, P)
                }), Object.defineProperty(this, "target", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: Object.assign({}, P)
                }), Object.defineProperty(this, "velocity", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        a: 0,
                        b: 0,
                        c: 0,
                        d: 0,
                        e: 0,
                        f: 0
                    }
                }), Object.defineProperty(this, "lockedAxis", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }), !t) throw new Error("Container Element Not Found");
                this.container = t, this.initContent(), this.attachPlugins(Object.assign(Object.assign({}, T.Plugins), i)), 
                this.emit("init");
                const o = this.content;
                if (o.addEventListener("load", this.onLoad), o.addEventListener("error", this.onError), 
                this.isContentLoading) {
                    if (this.option("spinner")) {
                        t.classList.add(this.cn("isLoading"));
                        const e = n(w);
                        !t.contains(o) || o.parentElement instanceof HTMLPictureElement ? this.spinner = t.appendChild(e) : this.spinner = (null === (s = o.parentElement) || void 0 === s ? void 0 : s.insertBefore(e, o)) || null;
                    }
                    this.emit("beforeLoad");
                } else queueMicrotask((() => {
                    this.enable();
                }));
            }
            initContent() {
                const {container: t} = this, e = this.cn("content");
                let i = this.option("content") || t.querySelector(`.${e}`);
                if (i || (i = t.querySelector("img,picture") || t.firstElementChild, i && E(i, e)), 
                i instanceof HTMLPictureElement && (i = i.querySelector("img")), !i) throw new Error("No content found");
                this.content = i;
            }
            onLoad() {
                this.spinner && (this.spinner.remove(), this.spinner = null), this.option("spinner") && this.container.classList.remove(this.cn("isLoading")), 
                this.emit("afterLoad"), this.state === g.Init ? this.enable() : this.updateMetrics();
            }
            onError() {
                this.state !== g.Destroy && (this.spinner && (this.spinner.remove(), this.spinner = null), 
                this.stop(), this.detachEvents(), this.state = g.Error, this.emit("error"));
            }
            attachObserver() {
                var t;
                const e = () => Math.abs(this.containerRect.width - this.container.getBoundingClientRect().width) > .1 || Math.abs(this.containerRect.height - this.container.getBoundingClientRect().height) > .1;
                this.resizeObserver || void 0 === window.ResizeObserver || (this.resizeObserver = new ResizeObserver((() => {
                    this.updateTimer || (e() ? (this.onResize(), this.isMobile && (this.updateTimer = setTimeout((() => {
                        e() && this.onResize(), this.updateTimer = null;
                    }), 500))) : this.updateTimer && (clearTimeout(this.updateTimer), this.updateTimer = null));
                }))), null === (t = this.resizeObserver) || void 0 === t || t.observe(this.container);
            }
            detachObserver() {
                var t;
                null === (t = this.resizeObserver) || void 0 === t || t.disconnect();
            }
            attachEvents() {
                const {container: t} = this;
                t.addEventListener("click", this.onClick, {
                    passive: !1,
                    capture: !1
                }), t.addEventListener("wheel", this.onWheel, {
                    passive: !1
                }), this.pointerTracker = new l(t, {
                    start: this.onPointerDown,
                    move: this.onPointerMove,
                    end: this.onPointerUp
                }), document.addEventListener("mousemove", this.onMouseMove);
            }
            detachEvents() {
                var t;
                const {container: e} = this;
                e.removeEventListener("click", this.onClick, {
                    passive: !1,
                    capture: !1
                }), e.removeEventListener("wheel", this.onWheel, {
                    passive: !1
                }), null === (t = this.pointerTracker) || void 0 === t || t.stop(), this.pointerTracker = null, 
                document.removeEventListener("mousemove", this.onMouseMove), document.removeEventListener("keydown", this.onKeydown, !0), 
                this.clickTimer && (clearTimeout(this.clickTimer), this.clickTimer = null), this.updateTimer && (clearTimeout(this.updateTimer), 
                this.updateTimer = null);
            }
            animate() {
                const t = this.friction;
                this.setTargetForce();
                const e = this.option("maxVelocity");
                for (const i of b) t ? (this.velocity[i] *= 1 - t, e && !this.isScaling && (this.velocity[i] = Math.max(Math.min(this.velocity[i], e), -1 * e)), 
                this.current[i] += this.velocity[i]) : this.current[i] = this.target[i];
                this.setTransform(), this.setEdgeForce(), !this.isResting || this.isDragging ? this.rAF = requestAnimationFrame((() => this.animate())) : this.stop("current");
            }
            setTargetForce() {
                for (const t of b) "e" === t && this.isBouncingX || "f" === t && this.isBouncingY || (this.velocity[t] = (1 / (1 - this.friction) - 1) * (this.target[t] - this.current[t]));
            }
            checkBounds(t = 0, e = 0) {
                const {current: i} = this, n = i.e + t, s = i.f + e, o = this.getBounds(), {x: a, y: r} = o, l = a.min, c = a.max, h = r.min, d = r.max;
                let u = 0, p = 0;
                return l !== 1 / 0 && n < l ? u = l - n : c !== 1 / 0 && n > c && (u = c - n), h !== 1 / 0 && s < h ? p = h - s : d !== 1 / 0 && s > d && (p = d - s), 
                Math.abs(u) < .001 && (u = 0), Math.abs(p) < .001 && (p = 0), Object.assign(Object.assign({}, o), {
                    xDiff: u,
                    yDiff: p,
                    inBounds: !u && !p
                });
            }
            clampTargetBounds() {
                const {target: t} = this, {x: e, y: i} = this.getBounds();
                e.min !== 1 / 0 && (t.e = Math.max(t.e, e.min)), e.max !== 1 / 0 && (t.e = Math.min(t.e, e.max)), 
                i.min !== 1 / 0 && (t.f = Math.max(t.f, i.min)), i.max !== 1 / 0 && (t.f = Math.min(t.f, i.max));
            }
            calculateContentDim(t = this.current) {
                const {content: e, contentRect: i} = this, {fitWidth: n, fitHeight: s, fullWidth: o, fullHeight: a} = i;
                let r = o, l = a;
                if (this.option("zoom") || 0 !== this.angle) {
                    const i = !(e instanceof HTMLImageElement) && ("none" === window.getComputedStyle(e).maxWidth || "none" === window.getComputedStyle(e).maxHeight), c = i ? o : n, h = i ? a : s, d = this.getMatrix(t), u = new DOMPoint(0, 0).matrixTransform(d), p = new DOMPoint(0 + c, 0).matrixTransform(d), f = new DOMPoint(0 + c, 0 + h).matrixTransform(d), m = new DOMPoint(0, 0 + h).matrixTransform(d), g = Math.abs(f.x - u.x), b = Math.abs(f.y - u.y), v = Math.abs(m.x - p.x), y = Math.abs(m.y - p.y);
                    r = Math.max(g, v), l = Math.max(b, y);
                }
                return {
                    contentWidth: r,
                    contentHeight: l
                };
            }
            setEdgeForce() {
                if (this.ignoreBounds || this.isDragging || "mousemove" === this.panMode || this.targetScale < this.scale) return this.isBouncingX = !1, 
                void (this.isBouncingY = !1);
                const {target: t} = this, {x: e, y: i, xDiff: n, yDiff: s} = this.checkBounds();
                const o = this.option("maxVelocity");
                let a = this.velocity.e, r = this.velocity.f;
                0 !== n ? (this.isBouncingX = !0, n * a <= 0 ? a += .14 * n : (a = .14 * n, e.min !== 1 / 0 && (this.target.e = Math.max(t.e, e.min)), 
                e.max !== 1 / 0 && (this.target.e = Math.min(t.e, e.max))), o && (a = Math.max(Math.min(a, o), -1 * o))) : this.isBouncingX = !1, 
                0 !== s ? (this.isBouncingY = !0, s * r <= 0 ? r += .14 * s : (r = .14 * s, i.min !== 1 / 0 && (this.target.f = Math.max(t.f, i.min)), 
                i.max !== 1 / 0 && (this.target.f = Math.min(t.f, i.max))), o && (r = Math.max(Math.min(r, o), -1 * o))) : this.isBouncingY = !1, 
                this.isBouncingX && (this.velocity.e = a), this.isBouncingY && (this.velocity.f = r);
            }
            enable() {
                const {content: t} = this, e = new DOMMatrixReadOnly(window.getComputedStyle(t).transform);
                for (const t of b) this.current[t] = this.target[t] = e[t];
                this.updateMetrics(), this.attachObserver(), this.attachEvents(), this.state = g.Ready, 
                this.emit("ready");
            }
            onClick(t) {
                var e;
                this.isDragging && (null === (e = this.pointerTracker) || void 0 === e || e.clear(), 
                this.trackingPoints = [], this.startDecelAnim());
                const i = t.target;
                if (!i || t.defaultPrevented) return;
                if (i && i.hasAttribute("disabled")) return t.preventDefault(), void t.stopPropagation();
                if ((() => {
                    const t = window.getSelection();
                    return t && "Range" === t.type;
                })() && !i.closest("button")) return;
                const n = i.closest("[data-panzoom-action]"), s = i.closest("[data-panzoom-change]"), o = n || s, a = o && x(o) ? o.dataset : null;
                if (a) {
                    const e = a.panzoomChange, i = a.panzoomAction;
                    if ((e || i) && t.preventDefault(), e) {
                        let t = {};
                        try {
                            t = JSON.parse(e);
                        } catch (t) {
                            console && console.warn("The given data was not valid JSON");
                        }
                        return void this.applyChange(t);
                    }
                    if (i) return void (this[i] && this[i]());
                }
                if (Math.abs(this.dragOffset.x) > 3 || Math.abs(this.dragOffset.y) > 3) return t.preventDefault(), 
                void t.stopPropagation();
                const r = this.content.getBoundingClientRect();
                if (this.dragStart.time && !this.canZoomOut() && (Math.abs(r.x - this.dragStart.x) > 2 || Math.abs(r.y - this.dragStart.y) > 2)) return;
                this.dragStart.time = 0;
                const l = e => {
                    this.option("zoom") && e && "string" == typeof e && /(iterateZoom)|(toggle(Zoom|Full|Cover|Max)|(zoomTo(Fit|Cover|Max)))/.test(e) && "function" == typeof this[e] && (t.preventDefault(), 
                    this[e]({
                        event: t
                    }));
                }, c = this.option("click", t), h = this.option("dblClick", t);
                h ? (this.clicks++, 1 == this.clicks && (this.clickTimer = setTimeout((() => {
                    1 === this.clicks ? (this.emit("click", t), !t.defaultPrevented && c && l(c)) : (this.emit("dblClick", t), 
                    t.defaultPrevented || l(h)), this.clicks = 0, this.clickTimer = null;
                }), 350))) : (this.emit("click", t), !t.defaultPrevented && c && l(c));
            }
            addTrackingPoint(t) {
                const e = this.trackingPoints.filter((t => t.time > Date.now() - 100));
                e.push(t), this.trackingPoints = e;
            }
            onPointerDown(t, e, i) {
                var n;
                this.pwt = 0, this.dragOffset = {
                    x: 0,
                    y: 0,
                    time: 0
                }, this.trackingPoints = [];
                const s = this.content.getBoundingClientRect();
                if (this.dragStart = {
                    x: s.x,
                    y: s.y,
                    top: s.top,
                    left: s.left,
                    time: Date.now()
                }, this.clickTimer) return !1;
                if ("mousemove" === this.panMode && this.targetScale > 1) return t.preventDefault(), 
                t.stopPropagation(), !1;
                if (!i.length) {
                    const e = t.composedPath()[0];
                    if ([ "A", "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO" ].includes(e.nodeName) || e.closest("[contenteditable]") || e.closest("[data-selectable]") || e.closest("[data-draggable]") || e.closest("[data-panzoom-change]") || e.closest("[data-panzoom-action]")) return !1;
                    null === (n = window.getSelection()) || void 0 === n || n.removeAllRanges();
                }
                if ("mousedown" === t.type) t.preventDefault(); else if (Math.abs(this.velocity.a) > .3) return !1;
                return this.target.e = this.current.e, this.target.f = this.current.f, this.stop(), 
                this.isDragging || (this.isDragging = !0, this.addTrackingPoint(e), this.emit("touchStart", t)), 
                !0;
            }
            onPointerMove(e, n, s) {
                if (!1 === this.option("touch", e)) return;
                if (!this.isDragging) return;
                if (n.length < 2 && this.panOnlyZoomed && t(this.targetScale) <= t(this.minScale)) return;
                if (this.emit("touchMove", e), e.defaultPrevented) return;
                this.addTrackingPoint(n[0]);
                const {content: o} = this, a = h(s[0], s[1]), r = h(n[0], n[1]);
                let l = 0, d = 0;
                if (n.length > 1) {
                    const t = o.getBoundingClientRect();
                    l = a.clientX - t.left - .5 * t.width, d = a.clientY - t.top - .5 * t.height;
                }
                const u = c(s[0], s[1]), p = c(n[0], n[1]);
                let f = u ? p / u : 1, m = r.clientX - a.clientX, g = r.clientY - a.clientY;
                this.dragOffset.x += m, this.dragOffset.y += g, this.dragOffset.time = Date.now() - this.dragStart.time;
                let b = t(this.targetScale) === t(this.minScale) && this.option("lockAxis");
                if (b && !this.lockedAxis) if ("xy" === b || "y" === b || "touchmove" === e.type) {
                    if (Math.abs(this.dragOffset.x) < 6 && Math.abs(this.dragOffset.y) < 6) return void e.preventDefault();
                    const t = Math.abs(180 * Math.atan2(this.dragOffset.y, this.dragOffset.x) / Math.PI);
                    this.lockedAxis = t > 45 && t < 135 ? "y" : "x", this.dragOffset.x = 0, this.dragOffset.y = 0, 
                    m = 0, g = 0;
                } else this.lockedAxis = b;
                if (i(e.target, this.content) && (b = "x", this.dragOffset.y = 0), b && "xy" !== b && this.lockedAxis !== b && t(this.targetScale) === t(this.minScale)) return;
                e.cancelable && e.preventDefault(), this.container.classList.add(this.cn("isDragging"));
                const v = this.checkBounds(m, g);
                this.option("rubberband") ? ("x" !== this.isInfinite && (v.xDiff > 0 && m < 0 || v.xDiff < 0 && m > 0) && (m *= Math.max(0, .5 - Math.abs(.75 / this.contentRect.fitWidth * v.xDiff))), 
                "y" !== this.isInfinite && (v.yDiff > 0 && g < 0 || v.yDiff < 0 && g > 0) && (g *= Math.max(0, .5 - Math.abs(.75 / this.contentRect.fitHeight * v.yDiff)))) : (v.xDiff && (m = 0), 
                v.yDiff && (g = 0));
                const y = this.targetScale, w = this.minScale, x = this.maxScale;
                y < .5 * w && (f = Math.max(f, w)), y > 1.5 * x && (f = Math.min(f, x)), "y" === this.lockedAxis && t(y) === t(w) && (m = 0), 
                "x" === this.lockedAxis && t(y) === t(w) && (g = 0), this.applyChange({
                    originX: l,
                    originY: d,
                    panX: m,
                    panY: g,
                    scale: f,
                    friction: this.option("dragFriction"),
                    ignoreBounds: !0
                });
            }
            onPointerUp(t, e, n) {
                if (n.length) return this.dragOffset.x = 0, this.dragOffset.y = 0, void (this.trackingPoints = []);
                this.container.classList.remove(this.cn("isDragging")), this.isDragging && (this.addTrackingPoint(e), 
                this.panOnlyZoomed && this.contentRect.width - this.contentRect.fitWidth < 1 && this.contentRect.height - this.contentRect.fitHeight < 1 && (this.trackingPoints = []), 
                i(t.target, this.content) && "y" === this.lockedAxis && (this.trackingPoints = []), 
                this.emit("touchEnd", t), this.isDragging = !1, this.lockedAxis = !1, this.state !== g.Destroy && (t.defaultPrevented || this.startDecelAnim()));
            }
            startDecelAnim() {
                var e;
                const i = this.isScaling;
                this.rAF && (cancelAnimationFrame(this.rAF), this.rAF = null), this.isBouncingX = !1, 
                this.isBouncingY = !1;
                for (const t of b) this.velocity[t] = 0;
                this.target.e = this.current.e, this.target.f = this.current.f, S(this.container, "is-scaling"), 
                S(this.container, "is-animating"), this.isTicking = !1;
                const {trackingPoints: n} = this, s = n[0], o = n[n.length - 1];
                let a = 0, r = 0, l = 0;
                o && s && (a = o.clientX - s.clientX, r = o.clientY - s.clientY, l = o.time - s.time);
                const c = (null === (e = window.visualViewport) || void 0 === e ? void 0 : e.scale) || 1;
                1 !== c && (a *= c, r *= c);
                let h = 0, d = 0, u = 0, p = 0, f = this.option("decelFriction");
                const m = this.targetScale;
                if (l > 0) {
                    u = Math.abs(a) > 3 ? a / (l / 30) : 0, p = Math.abs(r) > 3 ? r / (l / 30) : 0;
                    const t = this.option("maxVelocity");
                    t && (u = Math.max(Math.min(u, t), -1 * t), p = Math.max(Math.min(p, t), -1 * t));
                }
                u && (h = u / (1 / (1 - f) - 1)), p && (d = p / (1 / (1 - f) - 1)), ("y" === this.option("lockAxis") || "xy" === this.option("lockAxis") && "y" === this.lockedAxis && t(m) === this.minScale) && (h = u = 0), 
                ("x" === this.option("lockAxis") || "xy" === this.option("lockAxis") && "x" === this.lockedAxis && t(m) === this.minScale) && (d = p = 0);
                const g = this.dragOffset.x, v = this.dragOffset.y, y = this.option("dragMinThreshold") || 0;
                Math.abs(g) < y && Math.abs(v) < y && (h = d = 0, u = p = 0), (m < this.minScale - 1e-5 || m > this.maxScale + 1e-5 || i && !h && !d) && (f = .35), 
                this.applyChange({
                    panX: h,
                    panY: d,
                    friction: f
                }), this.emit("decel", u, p, g, v);
            }
            onWheel(t) {
                var e = [ -t.deltaX || 0, -t.deltaY || 0, -t.detail || 0 ].reduce((function(t, e) {
                    return Math.abs(e) > Math.abs(t) ? e : t;
                }));
                const i = Math.max(-1, Math.min(1, e));
                if (this.emit("wheel", t, i), "mousemove" === this.panMode) return;
                if (t.defaultPrevented) return;
                const n = this.option("wheel");
                "pan" === n ? (t.preventDefault(), this.panOnlyZoomed && !this.canZoomOut() || this.applyChange({
                    panX: 2 * -t.deltaX,
                    panY: 2 * -t.deltaY,
                    bounce: !1
                })) : "zoom" === n && !1 !== this.option("zoom") && this.zoomWithWheel(t);
            }
            onMouseMove(t) {
                this.panWithMouse(t);
            }
            onKeydown(t) {
                "Escape" === t.key && this.toggleFS();
            }
            onResize() {
                this.updateMetrics(), this.checkBounds().inBounds || this.requestTick();
            }
            setTransform() {
                this.emit("beforeTransform");
                const {current: e, target: i, content: n, contentRect: s} = this, o = Object.assign({}, P);
                for (const n of b) {
                    const s = "e" == n || "f" === n ? 1e3 : 1e5;
                    o[n] = t(e[n], s), Math.abs(i[n] - e[n]) < ("e" == n || "f" === n ? .51 : .001) && (e[n] = i[n]);
                }
                let {a, b: r, c: l, d: c, e: h, f: d} = o, u = `matrix(${a}, ${r}, ${l}, ${c}, ${h}, ${d})`, p = n.parentElement instanceof HTMLPictureElement ? n.parentElement : n;
                if (this.option("transformParent") && (p = p.parentElement || p), p.style.transform === u) return;
                p.style.transform = u;
                const {contentWidth: f, contentHeight: m} = this.calculateContentDim();
                s.width = f, s.height = m, this.emit("afterTransform");
            }
            updateMetrics(e = !1) {
                var i;
                if (!this || this.state === g.Destroy) return;
                if (this.isContentLoading) return;
                const n = Math.max(1, (null === (i = window.visualViewport) || void 0 === i ? void 0 : i.scale) || 1), {container: s, content: o} = this, a = o instanceof HTMLImageElement, r = s.getBoundingClientRect(), l = getComputedStyle(this.container);
                let c = r.width * n, h = r.height * n;
                const d = parseFloat(l.paddingTop) + parseFloat(l.paddingBottom), u = c - (parseFloat(l.paddingLeft) + parseFloat(l.paddingRight)), p = h - d;
                this.containerRect = {
                    width: c,
                    height: h,
                    innerWidth: u,
                    innerHeight: p
                };
                let f = this.option("width") || "auto", m = this.option("height") || "auto";
                "auto" === f && (f = parseFloat(o.dataset.width || "") || (t => {
                    let e = 0;
                    return e = t instanceof HTMLImageElement ? t.naturalWidth : t instanceof SVGElement ? t.width.baseVal.value : Math.max(t.offsetWidth, t.scrollWidth), 
                    e || 0;
                })(o)), "auto" === m && (m = parseFloat(o.dataset.height || "") || (t => {
                    let e = 0;
                    return e = t instanceof HTMLImageElement ? t.naturalHeight : t instanceof SVGElement ? t.height.baseVal.value : Math.max(t.offsetHeight, t.scrollHeight), 
                    e || 0;
                })(o));
                let b = o.parentElement instanceof HTMLPictureElement ? o.parentElement : o;
                this.option("transformParent") && (b = b.parentElement || b);
                const v = b.getAttribute("style") || "";
                b.style.setProperty("transform", "none", "important"), a && (b.style.width = "", 
                b.style.height = ""), b.offsetHeight;
                const y = o.getBoundingClientRect();
                let w = y.width * n, x = y.height * n, S = 0, E = 0;
                a && (Math.abs(f - w) > 1 || Math.abs(m - x) > 1) && ({width: w, height: x, top: S, left: E} = ((t, e, i, n) => {
                    const s = i / n;
                    return s > t / e ? (i = t, n = t / s) : (i = e * s, n = e), {
                        width: i,
                        height: n,
                        top: .5 * (e - n),
                        left: .5 * (t - i)
                    };
                })(w, x, f, m)), this.contentRect = Object.assign(Object.assign({}, this.contentRect), {
                    top: y.top - r.top + S,
                    bottom: r.bottom - y.bottom + S,
                    left: y.left - r.left + E,
                    right: r.right - y.right + E,
                    fitWidth: w,
                    fitHeight: x,
                    width: w,
                    height: x,
                    fullWidth: f,
                    fullHeight: m
                }), b.style.cssText = v, a && (b.style.width = `${w}px`, b.style.height = `${x}px`), 
                this.setTransform(), !0 !== e && this.emit("refresh"), this.ignoreBounds || (t(this.targetScale) < t(this.minScale) ? this.zoomTo(this.minScale, {
                    friction: 0
                }) : this.targetScale > this.maxScale ? this.zoomTo(this.maxScale, {
                    friction: 0
                }) : this.state === g.Init || this.checkBounds().inBounds || this.requestTick()), 
                this.updateControls();
            }
            getBounds() {
                const e = this.option("bounds");
                if ("auto" !== e) return e;
                const {contentWidth: i, contentHeight: n} = this.calculateContentDim(this.target);
                let s = 0, o = 0, a = 0, r = 0;
                const l = this.option("infinite");
                if (!0 === l || this.lockedAxis && l === this.lockedAxis) s = -1 / 0, a = 1 / 0, 
                o = -1 / 0, r = 1 / 0; else {
                    let {containerRect: e, contentRect: l} = this, c = t(this.contentRect.fitWidth * this.targetScale, 1e3), h = t(this.contentRect.fitHeight * this.targetScale, 1e3), {innerWidth: d, innerHeight: u} = e;
                    if (this.containerRect.width === c && (d = e.width), this.containerRect.width === h && (u = e.height), 
                    i > d) {
                        a = .5 * (i - d), s = -1 * a;
                        let t = .5 * (l.right - l.left);
                        s += t, a += t;
                    }
                    if (this.contentRect.fitWidth > d && i < d && (s -= .5 * (this.contentRect.fitWidth - d), 
                    a -= .5 * (this.contentRect.fitWidth - d)), n > u) {
                        r = .5 * (n - u), o = -1 * r;
                        let t = .5 * (l.bottom - l.top);
                        o += t, r += t;
                    }
                    this.contentRect.fitHeight > u && n < u && (s -= .5 * (this.contentRect.fitHeight - u), 
                    a -= .5 * (this.contentRect.fitHeight - u));
                }
                return {
                    x: {
                        min: s,
                        max: a
                    },
                    y: {
                        min: o,
                        max: r
                    }
                };
            }
            updateControls() {
                const e = this, i = e.container, {panMode: n, contentRect: s, fullScale: a, targetScale: r, coverScale: l, maxScale: c, minScale: h} = e;
                let d = {
                    toggleMax: r - h < .5 * (c - h) ? c : h,
                    toggleCover: r - h < .5 * (l - h) ? l : h,
                    toggleZoom: r - h < .5 * (a - h) ? a : h
                }[e.option("click") || ""] || h, u = e.canZoomIn(), p = e.canZoomOut(), f = p && "drag" === n;
                t(r) < t(h) && !this.panOnlyZoomed && (f = !0), (t(s.width, 1) > t(s.fitWidth, 1) || t(s.height, 1) > t(s.fitHeight, 1)) && (f = !0), 
                t(s.width * r, 1) < t(s.fitWidth, 1) && (f = !1), "mousemove" === n && (f = !1);
                let m = u && t(d) > t(r), g = !m && !f && p && t(d) < t(r);
                o(i, this.cn("canZoomIn"), m), o(i, this.cn("canZoomOut"), g), o(i, this.cn("isDraggable"), f);
                for (const t of i.querySelectorAll('[data-panzoom-action="zoomIn"]')) u ? (t.removeAttribute("disabled"), 
                t.removeAttribute("tabindex")) : (t.setAttribute("disabled", ""), t.setAttribute("tabindex", "-1"));
                for (const t of i.querySelectorAll('[data-panzoom-action="zoomOut"]')) p ? (t.removeAttribute("disabled"), 
                t.removeAttribute("tabindex")) : (t.setAttribute("disabled", ""), t.setAttribute("tabindex", "-1"));
                for (const t of i.querySelectorAll('[data-panzoom-action="toggleZoom"],[data-panzoom-action="iterateZoom"]')) {
                    u || p ? (t.removeAttribute("disabled"), t.removeAttribute("tabindex")) : (t.setAttribute("disabled", ""), 
                    t.setAttribute("tabindex", "-1"));
                    const e = t.querySelector("g");
                    e && (e.style.display = u ? "" : "none");
                }
            }
            panTo({x: t = this.target.e, y: e = this.target.f, scale: i = this.targetScale, friction: n = this.option("friction"), angle: s = 0, originX: o = 0, originY: a = 0, flipX: r = !1, flipY: l = !1, ignoreBounds: c = !1}) {
                this.state !== g.Destroy && this.applyChange({
                    panX: t - this.target.e,
                    panY: e - this.target.f,
                    scale: i / this.targetScale,
                    angle: s,
                    originX: o,
                    originY: a,
                    friction: n,
                    flipX: r,
                    flipY: l,
                    ignoreBounds: c
                });
            }
            applyChange({panX: e = 0, panY: i = 0, scale: n = 1, angle: s = 0, originX: o = -this.current.e, originY: a = -this.current.f, friction: r = this.option("friction"), flipX: l = !1, flipY: c = !1, ignoreBounds: h = !1, bounce: d = this.option("bounce")}) {
                if (this.state === g.Destroy) return;
                this.rAF && (cancelAnimationFrame(this.rAF), this.rAF = null), this.friction = r || 0, 
                this.ignoreBounds = h;
                const {current: u} = this, p = u.e, f = u.f, m = this.getMatrix(this.target);
                let v = (new DOMMatrix).translate(p, f).translate(o, a).translate(e, i);
                if (this.option("zoom")) {
                    if (!h) {
                        const t = this.targetScale, e = this.minScale, i = this.maxScale;
                        t * n < e && (n = e / t), t * n > i && (n = i / t);
                    }
                    v = v.scale(n);
                }
                v = v.translate(-o, -a).translate(-p, -f).multiply(m), s && (v = v.rotate(s)), l && (v = v.scale(-1, 1)), 
                c && (v = v.scale(1, -1));
                for (const e of b) "e" !== e && "f" !== e && (v[e] > this.minScale + 1e-5 || v[e] < this.minScale - 1e-5) ? this.target[e] = v[e] : this.target[e] = t(v[e], 1e3);
                (this.targetScale < this.scale || Math.abs(n - 1) > .1 || "mousemove" === this.panMode || !1 === d) && !h && this.clampTargetBounds(), 
                this.isResting || (this.state = g.Panning, this.requestTick());
            }
            stop(t = !1) {
                if (this.state === g.Init || this.state === g.Destroy) return;
                const e = this.isTicking;
                this.rAF && (cancelAnimationFrame(this.rAF), this.rAF = null), this.isBouncingX = !1, 
                this.isBouncingY = !1;
                for (const e of b) this.velocity[e] = 0, "current" === t ? this.current[e] = this.target[e] : "target" === t && (this.target[e] = this.current[e]);
                this.setTransform(), S(this.container, "is-scaling"), S(this.container, "is-animating"), 
                this.isTicking = !1, this.state = g.Ready, e && (this.emit("endAnimation"), this.updateControls());
            }
            requestTick() {
                this.isTicking || (this.emit("startAnimation"), this.updateControls(), E(this.container, "is-animating"), 
                this.isScaling && E(this.container, "is-scaling")), this.isTicking = !0, this.rAF || (this.rAF = requestAnimationFrame((() => this.animate())));
            }
            panWithMouse(e, i = this.option("mouseMoveFriction")) {
                if (this.pmme = e, "mousemove" !== this.panMode || !e) return;
                if (t(this.targetScale) <= t(this.minScale)) return;
                this.emit("mouseMove", e);
                const {container: n, containerRect: s, contentRect: o} = this, a = s.width, r = s.height, l = n.getBoundingClientRect(), c = (e.clientX || 0) - l.left, h = (e.clientY || 0) - l.top;
                let {contentWidth: d, contentHeight: u} = this.calculateContentDim(this.target);
                const p = this.option("mouseMoveFactor");
                p > 1 && (d !== a && (d *= p), u !== r && (u *= p));
                let f = .5 * (d - a) - c / a * 100 / 100 * (d - a);
                f += .5 * (o.right - o.left);
                let m = .5 * (u - r) - h / r * 100 / 100 * (u - r);
                m += .5 * (o.bottom - o.top), this.applyChange({
                    panX: f - this.target.e,
                    panY: m - this.target.f,
                    friction: i
                });
            }
            zoomWithWheel(e) {
                if (this.state === g.Destroy || this.state === g.Init) return;
                const i = Date.now();
                if (i - this.pwt < 45) return void e.preventDefault();
                this.pwt = i;
                var n = [ -e.deltaX || 0, -e.deltaY || 0, -e.detail || 0 ].reduce((function(t, e) {
                    return Math.abs(e) > Math.abs(t) ? e : t;
                }));
                const s = Math.max(-1, Math.min(1, n)), {targetScale: o, maxScale: a, minScale: r} = this;
                let l = o * (100 + 45 * s) / 100;
                t(l) < t(r) && t(o) <= t(r) ? (this.cwd += Math.abs(s), l = r) : t(l) > t(a) && t(o) >= t(a) ? (this.cwd += Math.abs(s), 
                l = a) : (this.cwd = 0, l = Math.max(Math.min(l, a), r)), this.cwd > this.option("wheelLimit") || (e.preventDefault(), 
                t(l) !== t(o) && this.zoomTo(l, {
                    event: e
                }));
            }
            canZoomIn() {
                return this.option("zoom") && (t(this.contentRect.width, 1) < t(this.contentRect.fitWidth, 1) || t(this.targetScale) < t(this.maxScale));
            }
            canZoomOut() {
                return this.option("zoom") && t(this.targetScale) > t(this.minScale);
            }
            zoomIn(t = 1.25, e) {
                this.zoomTo(this.targetScale * t, e);
            }
            zoomOut(t = .8, e) {
                this.zoomTo(this.targetScale * t, e);
            }
            zoomToFit(t) {
                this.zoomTo("fit", t);
            }
            zoomToCover(t) {
                this.zoomTo("cover", t);
            }
            zoomToFull(t) {
                this.zoomTo("full", t);
            }
            zoomToMax(t) {
                this.zoomTo("max", t);
            }
            toggleZoom(t) {
                this.zoomTo(this.targetScale - this.minScale < .5 * (this.fullScale - this.minScale) ? "full" : "fit", t);
            }
            toggleMax(t) {
                this.zoomTo(this.targetScale - this.minScale < .5 * (this.maxScale - this.minScale) ? "max" : "fit", t);
            }
            toggleCover(t) {
                this.zoomTo(this.targetScale - this.minScale < .5 * (this.coverScale - this.minScale) ? "cover" : "fit", t);
            }
            iterateZoom(t) {
                this.zoomTo("next", t);
            }
            zoomTo(t = 1, {friction: e = "auto", originX: i = 0, originY: n = 0, event: s} = {}) {
                if (this.isContentLoading || this.state === g.Destroy) return;
                const {targetScale: o} = this;
                this.stop();
                let a = 1;
                if ("mousemove" === this.panMode && (s = this.pmme || s), s) {
                    const t = this.content.getBoundingClientRect(), e = s.clientX || 0, o = s.clientY || 0;
                    i = e - t.left - .5 * t.width, n = o - t.top - .5 * t.height;
                }
                const r = this.fullScale, l = this.maxScale;
                let c = this.coverScale;
                "number" == typeof t ? a = t / o : ("next" === t && (r - c < .2 && (c = r), t = o < r - 1e-5 ? "full" : o < l - 1e-5 ? "max" : "fit"), 
                a = "full" === t ? r / o || 1 : "cover" === t ? c / o || 1 : "max" === t ? l / o || 1 : 1 / o || 1), 
                e = "auto" === e ? a > 1 ? .15 : .25 : e, this.applyChange({
                    scale: a,
                    originX: i,
                    originY: n,
                    friction: e
                }), s && "mousemove" === this.panMode && this.panWithMouse(s, e);
            }
            rotateCCW() {
                this.applyChange({
                    angle: -90
                });
            }
            rotateCW() {
                this.applyChange({
                    angle: 90
                });
            }
            flipX() {
                this.applyChange({
                    flipX: !0
                });
            }
            flipY() {
                this.applyChange({
                    flipY: !0
                });
            }
            fitX() {
                this.stop("target");
                const {containerRect: t, contentRect: e, target: i} = this;
                this.applyChange({
                    panX: .5 * t.width - (e.left + .5 * e.fitWidth) - i.e,
                    panY: .5 * t.height - (e.top + .5 * e.fitHeight) - i.f,
                    scale: t.width / e.fitWidth / this.targetScale,
                    originX: 0,
                    originY: 0,
                    ignoreBounds: !0
                });
            }
            fitY() {
                this.stop("target");
                const {containerRect: t, contentRect: e, target: i} = this;
                this.applyChange({
                    panX: .5 * t.width - (e.left + .5 * e.fitWidth) - i.e,
                    panY: .5 * t.innerHeight - (e.top + .5 * e.fitHeight) - i.f,
                    scale: t.height / e.fitHeight / this.targetScale,
                    originX: 0,
                    originY: 0,
                    ignoreBounds: !0
                });
            }
            toggleFS() {
                const {container: t} = this, e = this.cn("inFullscreen"), i = this.cn("htmlHasFullscreen");
                t.classList.toggle(e);
                const n = t.classList.contains(e);
                n ? (document.documentElement.classList.add(i), document.addEventListener("keydown", this.onKeydown, !0)) : (document.documentElement.classList.remove(i), 
                document.removeEventListener("keydown", this.onKeydown, !0)), this.updateMetrics(), 
                this.emit(n ? "enterFS" : "exitFS");
            }
            getMatrix(t = this.current) {
                const {a: e, b: i, c: n, d: s, e: o, f: a} = t;
                return new DOMMatrix([ e, i, n, s, o, a ]);
            }
            reset(t) {
                if (this.state !== g.Init && this.state !== g.Destroy) {
                    this.stop("current");
                    for (const t of b) this.target[t] = P[t];
                    this.target.a = this.minScale, this.target.d = this.minScale, this.clampTargetBounds(), 
                    this.isResting || (this.friction = void 0 === t ? this.option("friction") : t, this.state = g.Panning, 
                    this.requestTick());
                }
            }
            destroy() {
                this.stop(), this.state = g.Destroy, this.detachEvents(), this.detachObserver();
                const {container: t, content: e} = this, i = this.option("classes") || {};
                for (const e of Object.values(i)) t.classList.remove(e + "");
                e && (e.removeEventListener("load", this.onLoad), e.removeEventListener("error", this.onError)), 
                this.detachPlugins();
            }
        }
        Object.defineProperty(T, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: y
        }), Object.defineProperty(T, "Plugins", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {}
        });
        const O = function(t, e) {
            let i = !0;
            return (...n) => {
                i && (i = !1, t(...n), setTimeout((() => {
                    i = !0;
                }), e));
            };
        }, A = (t, e) => {
            let i = [];
            return t.childNodes.forEach((t => {
                t.nodeType !== Node.ELEMENT_NODE || e && !t.matches(e) || i.push(t);
            })), i;
        }, z = {
            viewport: null,
            track: null,
            enabled: !0,
            slides: [],
            axis: "x",
            transition: "fade",
            preload: 1,
            slidesPerPage: "auto",
            initialPage: 0,
            friction: .12,
            Panzoom: {
                decelFriction: .12
            },
            center: !0,
            infinite: !0,
            fill: !0,
            dragFree: !1,
            adaptiveHeight: !1,
            direction: "ltr",
            classes: {
                container: "f-carousel",
                viewport: "f-carousel__viewport",
                track: "f-carousel__track",
                slide: "f-carousel__slide",
                isLTR: "is-ltr",
                isRTL: "is-rtl",
                isHorizontal: "is-horizontal",
                isVertical: "is-vertical",
                inTransition: "in-transition",
                isSelected: "is-selected"
            },
            l10n: {
                NEXT: "Next slide",
                PREV: "Previous slide",
                GOTO: "Go to slide #%d"
            }
        };
        var L;
        !function(t) {
            t[t.Init = 0] = "Init", t[t.Ready = 1] = "Ready", t[t.Destroy = 2] = "Destroy";
        }(L || (L = {}));
        const R = t => {
            if ("string" == typeof t && (t = {
                html: t
            }), !(t instanceof String || t instanceof HTMLElement)) {
                const e = t.thumb;
                void 0 !== e && ("string" == typeof e && (t.thumbSrc = e), e instanceof HTMLImageElement && (t.thumbEl = e, 
                t.thumbElSrc = e.src, t.thumbSrc = e.src), delete t.thumb);
            }
            return Object.assign({
                html: "",
                el: null,
                isDom: !1,
                class: "",
                index: -1,
                dim: 0,
                gap: 0,
                pos: 0,
                transition: !1
            }, t);
        }, k = (t = {}) => Object.assign({
            index: -1,
            slides: [],
            dim: 0,
            pos: -1
        }, t);
        class I extends f {
            constructor(t, e) {
                super(e), Object.defineProperty(this, "instance", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                });
            }
            attach() {}
            detach() {}
        }
        const D = {
            classes: {
                list: "f-carousel__dots",
                isDynamic: "is-dynamic",
                hasDots: "has-dots",
                dot: "f-carousel__dot",
                isBeforePrev: "is-before-prev",
                isPrev: "is-prev",
                isCurrent: "is-current",
                isNext: "is-next",
                isAfterNext: "is-after-next"
            },
            dotTpl: '<button type="button" data-carousel-page="%i" aria-label="{{GOTO}}"><span class="f-carousel__dot" aria-hidden="true"></span></button>',
            dynamicFrom: 11,
            maxCount: 1 / 0,
            minCount: 2
        };
        class F extends I {
            constructor() {
                super(...arguments), Object.defineProperty(this, "isDynamic", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }), Object.defineProperty(this, "list", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                });
            }
            onRefresh() {
                this.refresh();
            }
            build() {
                let t = this.list;
                return t || (t = document.createElement("ul"), E(t, this.cn("list")), t.setAttribute("role", "tablist"), 
                this.instance.container.appendChild(t), E(this.instance.container, this.cn("hasDots")), 
                this.list = t), t;
            }
            refresh() {
                var t;
                const e = this.instance.pages.length, i = Math.min(2, this.option("minCount")), n = Math.max(2e3, this.option("maxCount")), s = this.option("dynamicFrom");
                if (e < i || e > n) return void this.cleanup();
                const a = "number" == typeof s && e > 5 && e >= s, r = !this.list || this.isDynamic !== a || this.list.children.length !== e;
                r && this.cleanup();
                const l = this.build();
                if (o(l, this.cn("isDynamic"), !!a), r) for (let t = 0; t < e; t++) l.append(this.createItem(t));
                let c, h = 0;
                for (const e of [ ...l.children ]) {
                    const i = h === this.instance.page;
                    i && (c = e), o(e, this.cn("isCurrent"), i), null === (t = e.children[0]) || void 0 === t || t.setAttribute("aria-selected", i ? "true" : "false");
                    for (const t of [ "isBeforePrev", "isPrev", "isNext", "isAfterNext" ]) S(e, this.cn(t));
                    h++;
                }
                if (c = c || l.firstChild, a && c) {
                    const t = c.previousElementSibling, e = t && t.previousElementSibling;
                    E(t, this.cn("isPrev")), E(e, this.cn("isBeforePrev"));
                    const i = c.nextElementSibling, n = i && i.nextElementSibling;
                    E(i, this.cn("isNext")), E(n, this.cn("isAfterNext"));
                }
                this.isDynamic = a;
            }
            createItem(t = 0) {
                var e;
                const i = document.createElement("li");
                i.setAttribute("role", "presentation");
                const s = n(this.instance.localize(this.option("dotTpl"), [ [ "%d", t + 1 ] ]).replace(/\%i/g, t + ""));
                return i.appendChild(s), null === (e = i.children[0]) || void 0 === e || e.setAttribute("role", "tab"), 
                i;
            }
            cleanup() {
                this.list && (this.list.remove(), this.list = null), this.isDynamic = !1, S(this.instance.container, this.cn("hasDots"));
            }
            attach() {
                this.instance.on([ "refresh", "change" ], this.onRefresh);
            }
            detach() {
                this.instance.off([ "refresh", "change" ], this.onRefresh), this.cleanup();
            }
        }
        Object.defineProperty(F, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: D
        });
        class j extends I {
            constructor() {
                super(...arguments), Object.defineProperty(this, "container", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "prev", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "next", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                });
            }
            onRefresh() {
                const t = this.instance, e = t.pages.length, i = t.page;
                if (e < 2) return void this.cleanup();
                this.build();
                let n = this.prev, s = this.next;
                n && s && (n.removeAttribute("disabled"), s.removeAttribute("disabled"), t.isInfinite || (i <= 0 && n.setAttribute("disabled", ""), 
                i >= e - 1 && s.setAttribute("disabled", "")));
            }
            createButton(t) {
                const e = this.instance, i = document.createElement("button");
                i.setAttribute("tabindex", "0"), i.setAttribute("title", e.localize(`{{${t.toUpperCase()}}}`)), 
                E(i, this.cn("button") + " " + this.cn("next" === t ? "isNext" : "isPrev"));
                const n = e.isRTL ? "next" === t ? "prev" : "next" : t;
                var s;
                return i.innerHTML = e.localize(this.option(`${n}Tpl`)), i.dataset[`carousel${s = t, 
                s ? s.match("^[a-z]") ? s.charAt(0).toUpperCase() + s.substring(1) : s : ""}`] = "true", 
                i;
            }
            build() {
                let t = this.container;
                t || (this.container = t = document.createElement("div"), E(t, this.cn("container")), 
                this.instance.container.appendChild(t)), this.next || (this.next = t.appendChild(this.createButton("next"))), 
                this.prev || (this.prev = t.appendChild(this.createButton("prev")));
            }
            cleanup() {
                this.prev && this.prev.remove(), this.next && this.next.remove(), this.container && this.container.remove(), 
                this.prev = null, this.next = null, this.container = null;
            }
            attach() {
                this.instance.on([ "refresh", "change" ], this.onRefresh);
            }
            detach() {
                this.instance.off([ "refresh", "change" ], this.onRefresh), this.cleanup();
            }
        }
        Object.defineProperty(j, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {
                classes: {
                    container: "f-carousel__nav",
                    button: "f-button",
                    isNext: "is-next",
                    isPrev: "is-prev"
                },
                nextTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',
                prevTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>'
            }
        });
        class H extends I {
            constructor() {
                super(...arguments), Object.defineProperty(this, "selectedIndex", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "target", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "nav", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                });
            }
            addAsTargetFor(t) {
                this.target = this.instance, this.nav = t, this.attachEvents();
            }
            addAsNavFor(t) {
                this.nav = this.instance, this.target = t, this.attachEvents();
            }
            attachEvents() {
                this.nav && this.target && (this.nav.options.initialSlide = this.target.options.initialPage, 
                this.nav.on("ready", this.onNavReady), this.nav.state === L.Ready && this.onNavReady(this.nav), 
                this.target.on("ready", this.onTargetReady), this.target.state === L.Ready && this.onTargetReady(this.target));
            }
            onNavReady(t) {
                t.on("createSlide", this.onNavCreateSlide), t.on("Panzoom.click", this.onNavClick), 
                t.on("Panzoom.touchEnd", this.onNavTouch), this.onTargetChange();
            }
            onTargetReady(t) {
                t.on("change", this.onTargetChange), t.on("Panzoom.refresh", this.onTargetChange), 
                this.onTargetChange();
            }
            onNavClick(t, e, i) {
                i.pointerType || this.onNavTouch(t, t.panzoom, i);
            }
            onNavTouch(t, e, i) {
                var n, s;
                if (Math.abs(e.dragOffset.x) > 3 || Math.abs(e.dragOffset.y) > 3) return;
                const o = i.target, {nav: a, target: r} = this;
                if (!a || !r || !o) return;
                const l = o.closest("[data-index]");
                if (i.stopPropagation(), i.preventDefault(), !l) return;
                const c = parseInt(l.dataset.index || "", 10) || 0, h = r.getPageForSlide(c), d = a.getPageForSlide(c);
                a.slideTo(d), r.slideTo(h, {
                    friction: (null === (s = null === (n = this.nav) || void 0 === n ? void 0 : n.plugins) || void 0 === s ? void 0 : s.Sync.option("friction")) || 0
                }), this.markSelectedSlide(c);
            }
            onNavCreateSlide(t, e) {
                e.index === this.selectedIndex && this.markSelectedSlide(e.index);
            }
            onTargetChange() {
                const {target: t, nav: e} = this;
                if (!t || !e) return;
                if (e.state !== L.Ready || t.state !== L.Ready) return;
                const i = t.pages[t.page].slides[0].index, n = e.getPageForSlide(i);
                this.markSelectedSlide(i), e.slideTo(n);
            }
            markSelectedSlide(t) {
                const e = this.nav;
                e && e.state === L.Ready && (this.selectedIndex = t, [ ...e.slides ].map((e => {
                    e.el && e.el.classList[e.index === t ? "add" : "remove"]("is-nav-selected");
                })));
            }
            attach() {
                const t = this;
                let e = t.options.target, i = t.options.nav;
                e ? t.addAsNavFor(e) : i && t.addAsTargetFor(i);
            }
            detach() {
                const t = this, e = t.nav, i = t.target;
                e && (e.off("ready", t.onNavReady), e.off("createSlide", t.onNavCreateSlide), e.off("Panzoom.click", t.onNavClick), 
                e.off("Panzoom.touchEnd", t.onNavTouch)), t.nav = null, i && (i.off("ready", t.onTargetReady), 
                i.off("refresh", t.onTargetChange), i.off("change", t.onTargetChange)), t.target = null;
            }
        }
        Object.defineProperty(H, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {
                friction: .35
            }
        });
        const B = {
            Navigation: j,
            Dots: F,
            Sync: H
        };
        class _ extends m {
            get axis() {
                return this.isHorizontal ? "e" : "f";
            }
            get isEnabled() {
                return this.state === L.Ready;
            }
            get isInfinite() {
                let t = !1;
                const {contentDim: e, viewportDim: i, pages: n, slides: s} = this;
                return n.length >= 2 && e + s[0].dim >= i && (t = this.option("infinite")), t;
            }
            get isRTL() {
                return "rtl" === this.option("direction");
            }
            get isHorizontal() {
                return "x" === this.option("axis");
            }
            constructor(t, e = {}, i = {}) {
                if (super(), Object.defineProperty(this, "userOptions", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {}
                }), Object.defineProperty(this, "userPlugins", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {}
                }), Object.defineProperty(this, "bp", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: ""
                }), Object.defineProperty(this, "lp", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "state", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: L.Init
                }), Object.defineProperty(this, "page", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "prevPage", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "container", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "viewport", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "track", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "slides", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }), Object.defineProperty(this, "pages", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }), Object.defineProperty(this, "panzoom", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "inTransition", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: new Set
                }), Object.defineProperty(this, "contentDim", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "viewportDim", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), "string" == typeof t && (t = document.querySelector(t)), !t || !x(t)) throw new Error("No Element found");
                this.container = t, this.slideNext = O(this.slideNext.bind(this), 150), this.slidePrev = O(this.slidePrev.bind(this), 150), 
                this.userOptions = e, this.userPlugins = i, queueMicrotask((() => {
                    this.processOptions();
                }));
            }
            processOptions() {
                const t = u({}, _.defaults, this.userOptions);
                let e = "";
                const i = t.breakpoints;
                if (i && d(i)) for (const [n, s] of Object.entries(i)) window.matchMedia(n).matches && d(s) && (e += n, 
                u(t, s));
                e === this.bp && this.state !== L.Init || (this.bp = e, this.state === L.Ready && (t.initialSlide = this.pages[this.page].slides[0].index), 
                this.state !== L.Init && this.destroy(), super.setOptions(t), !1 === this.option("enabled") ? this.attachEvents() : setTimeout((() => {
                    this.init();
                }), 0));
            }
            init() {
                this.state = L.Init, this.emit("init"), this.attachPlugins(Object.assign(Object.assign({}, _.Plugins), this.userPlugins)), 
                this.initLayout(), this.initSlides(), this.updateMetrics(), this.setInitialPosition(), 
                this.initPanzoom(), this.attachEvents(), this.state = L.Ready, this.emit("ready");
            }
            initLayout() {
                const {container: t} = this, e = this.option("classes");
                E(t, this.cn("container")), o(t, e.isLTR, !this.isRTL), o(t, e.isRTL, this.isRTL), 
                o(t, e.isVertical, !this.isHorizontal), o(t, e.isHorizontal, this.isHorizontal);
                let i = this.option("viewport") || t.querySelector(`.${e.viewport}`);
                i || (i = document.createElement("div"), E(i, e.viewport), i.append(...A(t, `.${e.slide}`)), 
                t.prepend(i));
                let n = this.option("track") || t.querySelector(`.${e.track}`);
                n || (n = document.createElement("div"), E(n, e.track), n.append(...Array.from(i.childNodes))), 
                n.setAttribute("aria-live", "polite"), i.contains(n) || i.prepend(n), this.viewport = i, 
                this.track = n, this.emit("initLayout");
            }
            initSlides() {
                const {track: t} = this;
                if (t) {
                    this.slides = [], [ ...A(t, `.${this.cn("slide")}`) ].forEach((t => {
                        if (x(t)) {
                            const e = R({
                                el: t,
                                isDom: !0,
                                index: this.slides.length
                            });
                            this.slides.push(e), this.emit("initSlide", e, this.slides.length);
                        }
                    }));
                    for (let t of this.option("slides", [])) {
                        const e = R(t);
                        e.index = this.slides.length, this.slides.push(e), this.emit("initSlide", e, this.slides.length);
                    }
                    this.emit("initSlides");
                }
            }
            setInitialPage() {
                let t = 0;
                const e = this.option("initialSlide");
                t = "number" == typeof e ? this.getPageForSlide(e) : parseInt(this.option("initialPage", 0) + "", 10) || 0, 
                this.page = t;
            }
            setInitialPosition() {
                if (!this.track || !this.pages.length) return;
                const t = this.isHorizontal;
                let e = this.page;
                this.pages[e] || (this.page = e = 0);
                const i = this.pages[e].pos * (this.isRTL && t ? 1 : -1), n = t ? `${i}px` : "0", s = t ? "0" : `${i}px`;
                this.track.style.transform = `translate3d(${n}, ${s}, 0) scale(1)`, this.option("adaptiveHeight") && this.setViewportHeight();
            }
            initPanzoom() {
                this.panzoom && (this.panzoom.destroy(), this.panzoom = null);
                const t = this.option("Panzoom") || {};
                this.panzoom = new T(this.viewport, u({}, {
                    content: this.track,
                    zoom: !1,
                    panOnlyZoomed: !1,
                    lockAxis: this.isHorizontal ? "x" : "y",
                    infinite: this.isInfinite,
                    click: !1,
                    dblClick: !1,
                    touch: t => !(this.pages.length < 2 && !t.options.infinite),
                    bounds: () => this.getBounds(),
                    maxVelocity: t => Math.abs(t.target[this.axis] - t.current[this.axis]) < 2 * this.viewportDim ? 100 : 0
                }, t)), this.panzoom.on("*", ((t, e, ...i) => {
                    this.emit(`Panzoom.${e}`, t, ...i);
                })), this.panzoom.on("decel", this.onDecel), this.panzoom.on("refresh", this.onRefresh), 
                this.panzoom.on("beforeTransform", this.onBeforeTransform), this.panzoom.on("endAnimation", this.onEndAnimation);
            }
            attachEvents() {
                const t = this.container;
                t && (t.addEventListener("click", this.onClick, {
                    passive: !1,
                    capture: !1
                }), t.addEventListener("slideTo", this.onSlideTo)), window.addEventListener("resize", this.onResize);
            }
            createPages() {
                let t = [];
                const {contentDim: e, viewportDim: i} = this;
                let n = this.option("slidesPerPage");
                ("number" != typeof n || e <= i) && (n = 1 / 0);
                let s = 0, o = 0, a = 0;
                for (const e of this.slides) (!t.length || o + e.dim > i || a === n) && (t.push(k()), 
                s = t.length - 1, o = 0, a = 0), t[s].slides.push(e), o += e.dim + e.gap, a++;
                return t;
            }
            processPages() {
                const e = this.pages, {contentDim: i, viewportDim: n} = this, s = this.option("center"), o = this.option("fill"), a = o && s && i > n && !this.isInfinite;
                if (e.forEach(((t, e) => {
                    t.index = e, t.pos = t.slides[0].pos, t.dim = 0;
                    for (const [e, i] of t.slides.entries()) t.dim += i.dim, e < t.slides.length - 1 && (t.dim += i.gap);
                    a && t.pos + .5 * t.dim < .5 * n ? t.pos = 0 : a && t.pos + .5 * t.dim >= i - .5 * n ? t.pos = i - n : s && (t.pos += -.5 * (n - t.dim));
                })), e.forEach(((e, s) => {
                    o && !this.isInfinite && i > n && (e.pos = Math.max(e.pos, 0), e.pos = Math.min(e.pos, i - n)), 
                    e.pos = t(e.pos, 1e3), e.dim = t(e.dim, 1e3), e.pos < .1 && e.pos > -.1 && (e.pos = 0);
                })), this.isInfinite) return e;
                const r = [];
                let l;
                return e.forEach((t => {
                    const e = Object.assign({}, t);
                    l && e.pos === l.pos ? (l.dim += e.dim, l.slides = [ ...l.slides, ...e.slides ]) : (e.index = r.length, 
                    l = e, r.push(e));
                })), r;
            }
            getPageFromIndex(t = 0) {
                const e = this.pages.length;
                let i;
                return t = parseInt((t || 0).toString()) || 0, i = this.isInfinite ? (t % e + e) % e : Math.max(Math.min(t, e - 1), 0), 
                i;
            }
            getSlideMetrics(e) {
                var i;
                const n = this.isHorizontal ? "width" : "height";
                let s = 0, o = 0, a = e.el;
                if (a ? s = parseFloat(a.dataset[n] || "") || 0 : (a = document.createElement("div"), 
                a.style.visibility = "hidden", E(a, this.cn("slide") + " " + e.class), (this.track || document.body).prepend(a)), 
                s) a.style[n] = `${s}px`, a.style["width" === n ? "height" : "width"] = ""; else {
                    const t = Math.max(1, (null === (i = window.visualViewport) || void 0 === i ? void 0 : i.scale) || 1);
                    s = a.getBoundingClientRect()[n] * t;
                }
                const r = getComputedStyle(a);
                return "content-box" === r.boxSizing && (this.isHorizontal ? (s += parseFloat(r.paddingLeft) || 0, 
                s += parseFloat(r.paddingRight) || 0) : (s += parseFloat(r.paddingTop) || 0, s += parseFloat(r.paddingBottom) || 0)), 
                o = parseFloat(r[this.isHorizontal ? "marginRight" : "marginBottom"]) || 0, e.el || a.remove(), 
                {
                    dim: t(s, 1e3),
                    gap: t(o, 1e3)
                };
            }
            getBounds() {
                const {isInfinite: t, isRTL: e, isHorizontal: i, pages: n} = this;
                let s = {
                    min: 0,
                    max: 0
                };
                if (t) s = {
                    min: -1 / 0,
                    max: 1 / 0
                }; else if (n.length) {
                    const t = n[0].pos, o = n[n.length - 1].pos;
                    s = e && i ? {
                        min: t,
                        max: o
                    } : {
                        min: -1 * o,
                        max: -1 * t
                    };
                }
                return {
                    x: i ? s : {
                        min: 0,
                        max: 0
                    },
                    y: i ? {
                        min: 0,
                        max: 0
                    } : s
                };
            }
            repositionSlides() {
                let e, {isHorizontal: i, isRTL: n, isInfinite: s, viewport: o, viewportDim: a, contentDim: r, page: l, pages: c, slides: h, panzoom: d} = this, u = 0, p = 0, f = 0, m = 0;
                d ? m = -1 * d.current[this.axis] : c[l] && (m = c[l].pos || 0), e = i ? n ? "right" : "left" : "top", 
                n && i && (m *= -1);
                for (const i of h) i.el ? ("top" === e ? (i.el.style.right = "", i.el.style.left = "") : i.el.style.top = "", 
                i.index !== u ? i.el.style[e] = 0 === p ? "" : `${t(p, 1e3)}px` : i.el.style[e] = "", 
                f += i.dim + i.gap, u++) : p += i.dim + i.gap;
                if (s && f && o) {
                    let n = getComputedStyle(o), s = "padding", l = i ? "Right" : "Bottom", c = parseFloat(n[s + (i ? "Left" : "Top")]);
                    m -= c, a += c, a += parseFloat(n[s + l]);
                    for (const i of h) i.el && (t(i.pos) < t(a) && t(i.pos + i.dim + i.gap) < t(m) && t(m) > t(r - a) && (i.el.style[e] = `${t(p + f, 1e3)}px`), 
                    t(i.pos + i.gap) >= t(r - a) && t(i.pos) > t(m + a) && t(m) < t(a) && (i.el.style[e] = `-${t(f, 1e3)}px`));
                }
                let g, b, v = [ ...this.inTransition ];
                if (v.length > 1 && (g = c[v[0]], b = c[v[1]]), g && b) {
                    let i = 0;
                    for (const n of h) n.el ? this.inTransition.has(n.index) && g.slides.indexOf(n) < 0 && (n.el.style[e] = `${t(i + (g.pos - b.pos), 1e3)}px`) : i += n.dim + n.gap;
                }
            }
            createSlideEl(t) {
                const {track: e, slides: i} = this;
                if (!e || !t) return;
                if (t.el) return;
                const n = document.createElement("div");
                E(n, this.cn("slide")), E(n, t.class), E(n, t.customClass), t.html && (n.innerHTML = t.html);
                const s = [];
                i.forEach(((t, e) => {
                    t.el && s.push(e);
                }));
                const o = t.index;
                let a = null;
                if (s.length) a = i[s.reduce(((t, e) => Math.abs(e - o) < Math.abs(t - o) ? e : t))];
                const r = a && a.el ? a.index < t.index ? a.el.nextSibling : a.el : null;
                e.insertBefore(n, e.contains(r) ? r : null), t.el = n, this.emit("createSlide", t);
            }
            removeSlideEl(t, e = !1) {
                const i = t.el;
                if (!i) return;
                if (S(i, this.cn("isSelected")), t.isDom && !e) return i.removeAttribute("aria-hidden"), 
                i.removeAttribute("data-index"), S(i, this.cn("isSelected")), void (i.style.left = "");
                this.emit("removeSlide", t);
                const n = new CustomEvent("animationend");
                i.dispatchEvent(n), t.el && t.el.remove(), t.el = null;
            }
            transitionTo(e = 0, i = this.option("transition")) {
                if (!i) return !1;
                const {pages: n, panzoom: s} = this;
                e = parseInt((e || 0).toString()) || 0;
                const o = this.getPageFromIndex(e);
                if (!s || !n[o] || n.length < 2 || Math.abs(n[this.page].slides[0].dim - this.viewportDim) > 1) return !1;
                const a = e > this.page ? 1 : -1, r = this.pages[o].pos * (this.isRTL ? 1 : -1);
                if (this.page === o && t(r, 1e3) === t(s.target[this.axis], 1e3)) return !1;
                this.clearTransitions();
                const l = s.isResting;
                E(this.container, this.cn("inTransition"));
                const c = this.pages[this.page].slides[0], h = this.pages[o].slides[0];
                this.inTransition.add(h.index), this.createSlideEl(h);
                let d = c.el, u = h.el;
                l || "slide" === i || (i = "fadeFast", d = null);
                const p = this.isRTL ? "next" : "prev", f = this.isRTL ? "prev" : "next";
                return d && (this.inTransition.add(c.index), c.transition = i, d.addEventListener("animationend", this.onAnimationEnd), 
                d.classList.add(`f-${i}Out`, `to-${a > 0 ? f : p}`)), u && (h.transition = i, u.addEventListener("animationend", this.onAnimationEnd), 
                u.classList.add(`f-${i}In`, `from-${a > 0 ? p : f}`)), s.panTo({
                    x: this.isHorizontal ? r : 0,
                    y: this.isHorizontal ? 0 : r,
                    friction: 0
                }), this.onChange(o), !0;
            }
            manageSlideVisiblity() {
                const t = new Set, e = new Set, i = this.getVisibleSlides(parseFloat(this.option("preload", 0) + "") || 0);
                for (const n of this.slides) i.has(n) ? t.add(n) : e.add(n);
                for (const e of this.inTransition) t.add(this.slides[e]);
                for (const e of t) this.createSlideEl(e), this.lazyLoadSlide(e);
                for (const i of e) t.has(i) || this.removeSlideEl(i);
                this.markSelectedSlides(), this.repositionSlides();
            }
            markSelectedSlides() {
                if (!this.pages[this.page] || !this.pages[this.page].slides) return;
                const t = "aria-hidden";
                let e = this.cn("isSelected");
                if (e) for (const i of this.slides) i.el && (i.el.dataset.index = `${i.index}`, 
                this.pages[this.page].slides.includes(i) ? (i.el.classList.contains(e) || (E(i.el, e), 
                this.emit("selectSlide", i)), i.el.removeAttribute(t)) : (i.el.classList.contains(e) && (S(i.el, e), 
                this.emit("unselectSlide", i)), i.el.setAttribute(t, "true")));
            }
            flipInfiniteTrack() {
                const t = this.panzoom;
                if (!t || !this.isInfinite) return;
                const e = "x" === this.option("axis") ? "e" : "f", {viewportDim: i, contentDim: n} = this;
                let s = t.current[e], o = t.target[e] - s, a = 0, r = .5 * i, l = n;
                this.isRTL && this.isHorizontal ? (s < -r && (a = -1, s += l), s > l - r && (a = 1, 
                s -= l)) : (s > r && (a = 1, s -= l), s < -l + r && (a = -1, s += l)), a && (t.current[e] = s, 
                t.target[e] = s + o);
            }
            lazyLoadSlide(t) {
                const e = this, i = t && t.el;
                if (!i) return;
                const s = new Set, o = "f-fadeIn";
                i.querySelectorAll("[data-lazy-srcset]").forEach((t => {
                    t instanceof HTMLImageElement && s.add(t);
                }));
                let a = Array.from(i.querySelectorAll("[data-lazy-src]"));
                i.dataset.lazySrc && a.push(i), a.map((t => {
                    t instanceof HTMLImageElement ? s.add(t) : x(t) && (t.style.backgroundImage = `url('${t.dataset.lazySrc || ""}')`, 
                    delete t.dataset.lazySrc);
                }));
                const r = (t, i, n) => {
                    n && (n.remove(), n = null), i.complete && (i.classList.add(o), setTimeout((() => {
                        i.classList.remove(o);
                    }), 350), i.style.display = ""), this.option("adaptiveHeight") && t.el && this.pages[this.page].slides.indexOf(t) > -1 && (e.updateMetrics(), 
                    e.setViewportHeight()), this.emit("load", t);
                };
                for (const e of s) {
                    let i = null;
                    e.src = e.dataset.lazySrcset || e.dataset.lazySrc || "", delete e.dataset.lazySrc, 
                    delete e.dataset.lazySrcset, e.style.display = "none", e.addEventListener("error", (() => {
                        r(t, e, i);
                    })), e.addEventListener("load", (() => {
                        r(t, e, i);
                    })), setTimeout((() => {
                        e.parentNode && t.el && (e.complete ? r(t, e, i) : (i = n(w), e.parentNode.insertBefore(i, e)));
                    }), 300);
                }
            }
            onAnimationEnd(t) {
                var e;
                const i = t.target, n = i ? parseInt(i.dataset.index || "", 10) || 0 : -1, s = this.slides[n], o = t.animationName;
                if (!i || !s || !o) return;
                const a = !!this.inTransition.has(n) && s.transition;
                a && o.substring(0, a.length + 2) === `f-${a}` && this.inTransition.delete(n), this.inTransition.size || this.clearTransitions(), 
                n === this.page && (null === (e = this.panzoom) || void 0 === e ? void 0 : e.isResting) && this.emit("settle");
            }
            onDecel(t, e = 0, i = 0, n = 0, s = 0) {
                const {isRTL: o, isHorizontal: a, axis: r, pages: l} = this, c = l.length, h = Math.abs(Math.atan2(i, e) / (Math.PI / 180));
                let d = 0;
                if (d = h > 45 && h < 135 ? a ? 0 : i : a ? e : 0, !c) return;
                const u = this.option("dragFree");
                let p = this.page, f = o && a ? 1 : -1;
                const m = t.target[r] * f, g = t.current[r] * f;
                let {pageIndex: b} = this.getPageFromPosition(m), {pageIndex: v} = this.getPageFromPosition(g);
                u ? this.onChange(b) : (Math.abs(d) > 5 ? (l[p].dim < document.documentElement["client" + (this.isHorizontal ? "Width" : "Height")] - 1 && (p = v), 
                p = o && a ? d < 0 ? p - 1 : p + 1 : d < 0 ? p + 1 : p - 1) : p = 0 === n && 0 === s ? p : v, 
                this.slideTo(p, {
                    transition: !1,
                    friction: t.option("decelFriction")
                }));
            }
            onClick(t) {
                const e = t.target, i = e && x(e) ? e.dataset : null;
                let n, s;
                i && (void 0 !== i.carouselPage ? (s = "slideTo", n = i.carouselPage) : void 0 !== i.carouselNext ? s = "slideNext" : void 0 !== i.carouselPrev && (s = "slidePrev")), 
                s ? (t.preventDefault(), t.stopPropagation(), e && !e.hasAttribute("disabled") && this[s](n)) : this.emit("click", t);
            }
            onSlideTo(t) {
                const e = t.detail || 0;
                this.slideTo(this.getPageForSlide(e), {
                    friction: 0
                });
            }
            onChange(t, e = 0) {
                const i = this.page;
                this.prevPage = i, this.page = t, this.option("adaptiveHeight") && this.setViewportHeight(), 
                t !== i && (this.markSelectedSlides(), this.emit("change", t, i, e));
            }
            onRefresh() {
                let t = this.contentDim, e = this.viewportDim;
                this.updateMetrics(), this.contentDim === t && this.viewportDim === e || this.slideTo(this.page, {
                    friction: 0,
                    transition: !1
                });
            }
            onResize() {
                this.option("breakpoints") && this.processOptions();
            }
            onBeforeTransform(t) {
                this.lp !== t.current[this.axis] && (this.flipInfiniteTrack(), this.manageSlideVisiblity()), 
                this.lp = t.current.e;
            }
            onEndAnimation() {
                this.inTransition.size || this.emit("settle");
            }
            reInit(t = null, e = null) {
                this.destroy(), this.state = L.Init, this.userOptions = t || this.userOptions, this.userPlugins = e || this.userPlugins, 
                this.processOptions();
            }
            slideTo(t = 0, {friction: e = this.option("friction"), transition: i = this.option("transition")} = {}) {
                if (this.state === L.Destroy) return;
                const {axis: n, isHorizontal: s, isRTL: o, pages: a, panzoom: r} = this, l = a.length, c = o && s ? 1 : -1;
                if (!r || !l) return;
                if (this.transitionTo(t, i)) return;
                const h = this.getPageFromIndex(t);
                let d = a[h].pos;
                if (this.isInfinite) {
                    const e = this.contentDim, i = r.target[n] * c;
                    if (2 === l) d += e * Math.floor(parseFloat(t + "") / 2); else {
                        const t = i;
                        d = [ d, d - e, d + e ].reduce((function(e, i) {
                            return Math.abs(i - t) < Math.abs(e - t) ? i : e;
                        }));
                    }
                }
                d *= c, Math.abs(r.target[n] - d) < .1 || (r.panTo({
                    x: s ? d : 0,
                    y: s ? 0 : d,
                    friction: e
                }), this.onChange(h));
            }
            slideToClosest(t) {
                if (this.panzoom) {
                    const {pageIndex: e} = this.getPageFromPosition(this.panzoom.current[this.isHorizontal ? "e" : "f"]);
                    this.slideTo(e, t);
                }
            }
            slideNext() {
                this.slideTo(this.page + 1);
            }
            slidePrev() {
                this.slideTo(this.page - 1);
            }
            clearTransitions() {
                this.inTransition.clear(), S(this.container, this.cn("inTransition"));
                const t = [ "to-prev", "to-next", "from-prev", "from-next" ];
                for (const e of this.slides) {
                    const i = e.el;
                    if (i) {
                        i.removeEventListener("animationend", this.onAnimationEnd), i.classList.remove(...t);
                        const n = e.transition;
                        n && i.classList.remove(`f-${n}Out`, `f-${n}In`);
                    }
                }
                this.manageSlideVisiblity();
            }
            prependSlide(t) {
                var e, i;
                let n = Array.isArray(t) ? t : [ t ];
                for (const t of n.reverse()) this.slides.unshift(R(t));
                for (let t = 0; t < this.slides.length; t++) this.slides[t].index = t;
                const s = (null === (e = this.pages[this.page]) || void 0 === e ? void 0 : e.pos) || 0;
                this.page += n.length, this.updateMetrics();
                const o = (null === (i = this.pages[this.page]) || void 0 === i ? void 0 : i.pos) || 0;
                if (this.panzoom) {
                    const t = this.isRTL ? s - o : o - s;
                    this.panzoom.target.e -= t, this.panzoom.current.e -= t, this.panzoom.requestTick();
                }
            }
            appendSlide(t) {
                let e = Array.isArray(t) ? t : [ t ];
                for (const t of e) {
                    const e = R(t);
                    e.index = this.slides.length, this.slides.push(e), this.emit("initSlide", t, this.slides.length);
                }
                this.updateMetrics();
            }
            removeSlide(t) {
                const e = this.slides.length;
                t = (t % e + e) % e, this.removeSlideEl(this.slides[t], !0), this.slides.splice(t, 1);
                for (let t = 0; t < this.slides.length; t++) this.slides[t].index = t;
                this.updateMetrics(), this.slideTo(this.page, {
                    friction: 0,
                    transition: !1
                });
            }
            updateMetrics() {
                const {panzoom: e, viewport: i, track: n, isHorizontal: s} = this;
                if (!n) return;
                const o = s ? "width" : "height", a = s ? "offsetWidth" : "offsetHeight";
                if (i) {
                    let e = Math.max(i[a], t(i.getBoundingClientRect()[o], 1e3)), n = getComputedStyle(i), r = "padding", l = s ? "Right" : "Bottom";
                    e -= parseFloat(n[r + (s ? "Left" : "Top")]) + parseFloat(n[r + l]), this.viewportDim = e;
                }
                let r, l = this.pages.length, c = 0;
                for (const [e, i] of this.slides.entries()) {
                    let n = 0, s = 0;
                    !i.el && r ? (n = r.dim, s = r.gap) : (({dim: n, gap: s} = this.getSlideMetrics(i)), 
                    r = i), n = t(n, 1e3), s = t(s, 1e3), i.dim = n, i.gap = s, i.pos = c, c += n, (this.isInfinite || e < this.slides.length - 1) && (c += s);
                }
                const h = this.contentDim;
                c = t(c, 1e3), this.contentDim = c, e && (e.contentRect[o] = c, e.contentRect["e" === this.axis ? "fullWidth" : "fullHeight"] = c), 
                this.pages = this.createPages(), this.pages = this.processPages(), this.state === L.Init && this.setInitialPage(), 
                this.page = Math.max(0, Math.min(this.page, this.pages.length - 1)), e && l === this.pages.length && Math.abs(c - h) > .5 && (e.target[this.axis] = -1 * this.pages[this.page].pos, 
                e.current[this.axis] = -1 * this.pages[this.page].pos, e.stop()), this.manageSlideVisiblity(), 
                this.emit("refresh");
            }
            getProgress(e, i = !1) {
                void 0 === e && (e = this.page);
                const n = this, s = n.panzoom, o = n.pages[e] || 0;
                if (!o || !s) return 0;
                let a = -1 * s.current.e, r = n.contentDim;
                var l = [ t((a - o.pos) / (1 * o.dim), 1e3), t((a + r - o.pos) / (1 * o.dim), 1e3), t((a - r - o.pos) / (1 * o.dim), 1e3) ].reduce((function(t, e) {
                    return Math.abs(e) < Math.abs(t) ? e : t;
                }));
                return i ? l : Math.max(-1, Math.min(1, l));
            }
            setViewportHeight() {
                const {page: t, pages: e, viewport: i, isHorizontal: n} = this;
                if (!i || !e[t]) return;
                let s = 0;
                n && this.track && (this.track.style.height = "auto", e[t].slides.forEach((t => {
                    t.el && (s = Math.max(s, t.el.offsetHeight));
                }))), i.style.height = s ? `${s}px` : "";
            }
            getPageForSlide(t) {
                for (const e of this.pages) for (const i of e.slides) if (i.index === t) return e.index;
                return -1;
            }
            getVisibleSlides(t = 0) {
                var e;
                const i = new Set;
                let {contentDim: n, viewportDim: s, pages: o, page: a} = this;
                n = n + (null === (e = this.slides[this.slides.length - 1]) || void 0 === e ? void 0 : e.gap) || 0;
                let r = 0;
                r = this.panzoom ? -1 * this.panzoom.current[this.axis] : o[a] && o[a].pos || 0, 
                this.isInfinite && (r -= Math.floor(r / n) * n), this.isRTL && this.isHorizontal && (r *= -1);
                const l = r - s * t, c = r + s * (t + 1), h = this.isInfinite ? [ -1, 0, 1 ] : [ 0 ];
                for (const t of this.slides) for (const e of h) {
                    const s = t.pos + e * n, o = t.pos + t.dim + t.gap + e * n;
                    s < c && o > l && i.add(t);
                }
                return i;
            }
            getPageFromPosition(t) {
                const {viewportDim: e, contentDim: i} = this, n = this.pages.length, s = this.slides.length, o = this.slides[s - 1];
                let a = 0, r = 0, l = 0;
                const c = this.option("center");
                c && (t += .5 * e), this.isInfinite || (t = Math.max(this.slides[0].pos, Math.min(t, o.pos)));
                const h = i + o.gap;
                l = Math.floor(t / h) || 0, t -= l * h;
                let d = o, u = this.slides.find((e => {
                    const i = t + (d && !c ? .5 * d.dim : 0);
                    return d = e, e.pos <= i && e.pos + e.dim + e.gap > i;
                }));
                return u || (u = o), r = this.getPageForSlide(u.index), a = r + l * n, {
                    page: a,
                    pageIndex: r
                };
            }
            destroy() {
                if ([ L.Destroy ].includes(this.state)) return;
                this.state = L.Destroy;
                const {container: t, viewport: e, track: i, slides: n, panzoom: s} = this, o = this.option("classes");
                t.removeEventListener("click", this.onClick, {
                    passive: !1,
                    capture: !1
                }), t.removeEventListener("slideTo", this.onSlideTo), window.removeEventListener("resize", this.onResize), 
                s && (s.destroy(), this.panzoom = null), n && n.forEach((t => {
                    this.removeSlideEl(t);
                })), this.detachPlugins(), e && e.offsetParent && i && i.offsetParent && e.replaceWith(...i.childNodes);
                for (const [e, i] of Object.entries(o)) "container" !== e && i && t.classList.remove(i);
                this.track = null, this.viewport = null, this.page = 0, this.slides = [];
                const a = this.events.get("ready");
                this.events = new Map, a && this.events.set("ready", a);
            }
        }
        Object.defineProperty(_, "Panzoom", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: T
        }), Object.defineProperty(_, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: z
        }), Object.defineProperty(_, "Plugins", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: B
        });
        const N = function(t) {
            const e = window.pageYOffset, i = window.pageYOffset + window.innerHeight;
            if (!x(t)) return 0;
            const n = t.getBoundingClientRect(), s = n.y + window.pageYOffset, o = n.y + n.height + window.pageYOffset;
            if (e > o || i < s) return 0;
            if (e < s && i > o) return 100;
            if (s < e && o > i) return 100;
            let a = n.height;
            s < e && (a -= window.pageYOffset - s), o > i && (a -= o - i);
            const r = a / window.innerHeight * 100;
            return Math.round(r);
        }, W = !("undefined" == typeof window || !window.document || !window.document.createElement);
        let $;
        const X = [ "a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden]):not(.fancybox-focus-guard)", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])' ].join(","), Y = t => {
            if (t && W) {
                void 0 === $ && document.createElement("div").focus({
                    get preventScroll() {
                        return $ = !0, !1;
                    }
                });
                try {
                    if ($) t.focus({
                        preventScroll: !0
                    }); else {
                        const e = window.pageXOffset || document.body.scrollTop, i = window.pageYOffset || document.body.scrollLeft;
                        t.focus(), document.body.scrollTo({
                            top: e,
                            left: i,
                            behavior: "auto"
                        });
                    }
                } catch (t) {}
            }
        }, q = {
            dragToClose: !0,
            hideScrollbar: !0,
            Carousel: {
                classes: {
                    container: "fancybox__carousel",
                    viewport: "fancybox__viewport",
                    track: "fancybox__track",
                    slide: "fancybox__slide"
                }
            },
            contentClick: "toggleZoom",
            contentDblClick: !1,
            backdropClick: "close",
            animated: !0,
            idle: 3500,
            showClass: "f-zoomInUp",
            hideClass: "f-fadeOut",
            commonCaption: !1,
            parentEl: null,
            startIndex: 0,
            l10n: Object.assign(Object.assign({}, v), {
                CLOSE: "Close",
                NEXT: "Next",
                PREV: "Previous",
                MODAL: "You can close this modal content with the ESC key",
                ERROR: "Something Went Wrong, Please Try Again Later",
                IMAGE_ERROR: "Image Not Found",
                ELEMENT_NOT_FOUND: "HTML Element Not Found",
                AJAX_NOT_FOUND: "Error Loading AJAX : Not Found",
                AJAX_FORBIDDEN: "Error Loading AJAX : Forbidden",
                IFRAME_ERROR: "Error Loading Page",
                TOGGLE_ZOOM: "Toggle zoom level",
                TOGGLE_THUMBS: "Toggle thumbnails",
                TOGGLE_SLIDESHOW: "Toggle slideshow",
                TOGGLE_FULLSCREEN: "Toggle full-screen mode",
                DOWNLOAD: "Download"
            }),
            tpl: {
                closeButton: '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg></button>',
                main: '<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">\n    <div class="fancybox__backdrop"></div>\n    <div class="fancybox__carousel"></div>\n    <div class="fancybox__footer"></div>\n  </div>'
            },
            groupAll: !1,
            groupAttr: "data-fancybox",
            defaultType: "image",
            defaultDisplay: "block",
            autoFocus: !0,
            trapFocus: !0,
            placeFocusBack: !0,
            closeButton: "auto",
            keyboard: {
                Escape: "close",
                Delete: "close",
                Backspace: "close",
                PageUp: "next",
                PageDown: "prev",
                ArrowUp: "prev",
                ArrowDown: "next",
                ArrowRight: "next",
                ArrowLeft: "prev"
            },
            Fullscreen: {
                autoStart: !1
            },
            compact: () => window.matchMedia("(max-width: 578px), (max-height: 578px)").matches,
            wheel: "zoom"
        };
        var V, Z;
        !function(t) {
            t[t.Init = 0] = "Init", t[t.Ready = 1] = "Ready", t[t.Closing = 2] = "Closing", 
            t[t.CustomClosing = 3] = "CustomClosing", t[t.Destroy = 4] = "Destroy";
        }(V || (V = {})), function(t) {
            t[t.Loading = 0] = "Loading", t[t.Opening = 1] = "Opening", t[t.Ready = 2] = "Ready", 
            t[t.Closing = 3] = "Closing";
        }(Z || (Z = {}));
        const G = () => {
            queueMicrotask((() => {
                (() => {
                    const {slug: t, index: e} = U.parseURL(), i = xt.getInstance();
                    if (i && !1 !== i.option("Hash")) {
                        const n = i.carousel;
                        if (t && n) {
                            for (let e of n.slides) if (e.slug && e.slug === t) return n.slideTo(e.index);
                            if (t === i.option("slug")) return n.slideTo(e - 1);
                            const s = i.getSlide(), o = s && s.triggerEl && s.triggerEl.dataset;
                            if (o && o.fancybox === t) return n.slideTo(e - 1);
                        }
                        U.hasSilentClose = !0, i.close();
                    }
                    U.startFromUrl();
                })();
            }));
        };
        class U extends I {
            constructor() {
                super(...arguments), Object.defineProperty(this, "origHash", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: ""
                }), Object.defineProperty(this, "timer", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                });
            }
            onChange() {
                const t = this.instance, e = t.carousel;
                this.timer && clearTimeout(this.timer);
                const i = t.getSlide();
                if (!e || !i) return;
                const n = t.isOpeningSlide(i), s = new URL(document.URL).hash;
                let o, a = i.slug || void 0, r = i.triggerEl || void 0;
                o = a || this.instance.option("slug"), !o && r && r.dataset && (o = r.dataset.fancybox);
                let l = "";
                o && "true" !== o && (l = "#" + o + (!a && e.slides.length > 1 ? "-" + (i.index + 1) : "")), 
                n && (this.origHash = s !== l ? s : ""), l && s !== l && (this.timer = setTimeout((() => {
                    try {
                        t.state === V.Ready && window.history[n ? "pushState" : "replaceState"]({}, document.title, window.location.pathname + window.location.search + l);
                    } catch (t) {}
                }), 300));
            }
            onClose() {
                if (this.timer && clearTimeout(this.timer), !0 !== U.hasSilentClose) try {
                    window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (this.origHash || ""));
                } catch (t) {}
            }
            attach() {
                const t = this.instance;
                t.on("Carousel.ready", this.onChange), t.on("Carousel.change", this.onChange), t.on("close", this.onClose);
            }
            detach() {
                const t = this.instance;
                t.off("Carousel.ready", this.onChange), t.off("Carousel.change", this.onChange), 
                t.off("close", this.onClose);
            }
            static parseURL() {
                const t = window.location.hash.slice(1), e = t.split("-"), i = e[e.length - 1], n = i && /^\+?\d+$/.test(i) && parseInt(e.pop() || "1", 10) || 1;
                return {
                    hash: t,
                    slug: e.join("-"),
                    index: n
                };
            }
            static startFromUrl() {
                if (U.hasSilentClose = !1, xt.getInstance() || !1 === xt.defaults.Hash) return;
                const {hash: t, slug: e, index: i} = U.parseURL();
                if (!e) return;
                let n = document.querySelector(`[data-slug="${t}"]`);
                if (n && n.dispatchEvent(new CustomEvent("click", {
                    bubbles: !0,
                    cancelable: !0
                })), xt.getInstance()) return;
                const s = document.querySelectorAll(`[data-fancybox="${e}"]`);
                s.length && (n = s[i - 1], n && n.dispatchEvent(new CustomEvent("click", {
                    bubbles: !0,
                    cancelable: !0
                })));
            }
            static destroy() {
                window.removeEventListener("hashchange", G, !1);
            }
        }
        function K() {
            window.addEventListener("hashchange", G, !1), setTimeout((() => {
                U.startFromUrl();
            }), 500);
        }
        Object.defineProperty(U, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {}
        }), Object.defineProperty(U, "hasSilentClose", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1
        }), W && (/complete|interactive|loaded/.test(document.readyState) ? K() : document.addEventListener("DOMContentLoaded", K));
        class J extends I {
            onCreateSlide(t, e, i) {
                const n = this.instance.optionFor(i, "src") || "";
                i.el && "image" === i.type && "string" == typeof n && this.setImage(i, n);
            }
            onRemoveSlide(t, e, i) {
                i.panzoom && i.panzoom.destroy(), i.panzoom = void 0, i.imageEl = void 0;
            }
            onChange(t, e, i, n) {
                for (const t of e.slides) {
                    const e = t.panzoom;
                    e && t.index !== i && e.reset(.35);
                }
            }
            onClose() {
                var t;
                const e = this.instance, i = e.container, n = e.getSlide();
                if (!i || !i.parentElement || !n) return;
                const {el: s, contentEl: o, panzoom: a} = n, r = n.thumbElSrc;
                if (!s || !r || !o || !a || a.isContentLoading || a.state === g.Init || a.state === g.Destroy) return;
                a.updateMetrics();
                let l = this.getZoomInfo(n);
                if (!l) return;
                this.instance.state = V.CustomClosing, i.classList.remove("is-zooming-in"), i.classList.add("is-zooming-out"), 
                o.style.backgroundImage = `url('${r}')`;
                const c = i.getBoundingClientRect();
                1 === ((null === (t = window.visualViewport) || void 0 === t ? void 0 : t.scale) || 1) && Object.assign(i.style, {
                    position: "absolute",
                    top: `${window.pageYOffset}px`,
                    left: `${window.pageXOffset}px`,
                    bottom: "auto",
                    right: "auto",
                    width: `${c.width}px`,
                    height: `${c.height}px`,
                    overflow: "hidden"
                });
                const {x: h, y: d, scale: u, opacity: p} = l;
                if (p) {
                    const t = ((t, e, i, n) => {
                        const s = e - t, o = n - i;
                        return e => i + ((e - t) / s * o || 0);
                    })(a.scale, u, 1, 0);
                    a.on("afterTransform", (() => {
                        o.style.opacity = t(a.scale) + "";
                    }));
                }
                a.on("endAnimation", (() => {
                    e.destroy();
                })), a.target.a = u, a.target.b = 0, a.target.c = 0, a.target.d = u, a.panTo({
                    x: h,
                    y: d,
                    scale: u,
                    friction: p ? .2 : .33,
                    ignoreBounds: !0
                }), a.isResting && e.destroy();
            }
            setImage(t, e) {
                const i = this.instance;
                t.src = e, this.process(t, e).then((e => {
                    var n;
                    const s = t.contentEl, o = t.imageEl, a = t.thumbElSrc;
                    if (i.isClosing() || !s || !o) return;
                    s.offsetHeight;
                    const r = !!i.isOpeningSlide(t) && this.getZoomInfo(t);
                    if (this.option("protected")) {
                        null === (n = t.el) || void 0 === n || n.addEventListener("contextmenu", (t => {
                            t.preventDefault();
                        }));
                        const e = document.createElement("div");
                        E(e, "fancybox-protected"), s.appendChild(e);
                    }
                    if (a && r) {
                        const n = e.contentRect, o = Math.max(n.fullWidth, n.fullHeight);
                        let c = null;
                        !r.opacity && o > 1200 && (c = document.createElement("img"), E(c, "fancybox-ghost"), 
                        c.src = a, s.appendChild(c));
                        const h = () => {
                            c && (E(c, "f-fadeFastOut"), setTimeout((() => {
                                c && (c.remove(), c = null);
                            }), 200));
                        };
                        (l = a, new Promise(((t, e) => {
                            const i = new Image;
                            i.onload = t, i.onerror = e, i.src = l;
                        }))).then((() => {
                            t.state = Z.Opening, this.instance.emit("reveal", t), this.zoomIn(t).then((() => {
                                h(), this.instance.done(t);
                            }), (() => {
                                i.hideLoading(t);
                            })), c && setTimeout((() => {
                                h();
                            }), o > 2500 ? 800 : 200);
                        }), (() => {
                            i.hideLoading(t), i.revealContent(t);
                        }));
                    } else {
                        const n = this.optionFor(t, "initialSize"), s = this.optionFor(t, "zoom"), o = {
                            event: i.prevMouseMoveEvent || i.options.event,
                            friction: s ? .12 : 0
                        };
                        let a = i.optionFor(t, "showClass") || void 0, r = !0;
                        i.isOpeningSlide(t) && ("full" === n ? e.zoomToFull(o) : "cover" === n ? e.zoomToCover(o) : "max" === n ? e.zoomToMax(o) : r = !1, 
                        e.stop("current")), r && a && (a = e.isDragging ? "f-fadeIn" : ""), i.revealContent(t, a);
                    }
                    var l;
                }), (() => {
                    i.setError(t, "{{IMAGE_ERROR}}");
                }));
            }
            process(t, e) {
                return new Promise(((i, s) => {
                    var o, a;
                    const r = this.instance, l = t.el;
                    r.clearContent(t), r.showLoading(t);
                    let c = this.optionFor(t, "content");
                    "string" == typeof c && (c = n(c)), c && x(c) || (c = document.createElement("img"), 
                    c instanceof HTMLImageElement && (c.src = e || "", c.alt = (null === (o = t.caption) || void 0 === o ? void 0 : o.replace(/<[^>]+>/gi, "").substring(0, 1e3)) || `Image ${t.index + 1} of ${null === (a = r.carousel) || void 0 === a ? void 0 : a.pages.length}`, 
                    c.draggable = !1, t.srcset && c.setAttribute("srcset", t.srcset)), t.sizes && c.setAttribute("sizes", t.sizes)), 
                    c.classList.add("fancybox-image"), t.imageEl = c, r.setContent(t, c, !1);
                    t.panzoom = new T(l, u({}, this.option("Panzoom") || {}, {
                        content: c,
                        width: r.optionFor(t, "width", "auto"),
                        height: r.optionFor(t, "height", "auto"),
                        wheel: () => {
                            const t = r.option("wheel");
                            return ("zoom" === t || "pan" == t) && t;
                        },
                        click: (e, i) => {
                            var n, s;
                            if (r.isCompact || r.isClosing()) return !1;
                            if (t.index !== (null === (n = r.getSlide()) || void 0 === n ? void 0 : n.index)) return !1;
                            let o = !i || i.target && (null === (s = t.contentEl) || void 0 === s ? void 0 : s.contains(i.target));
                            return r.option(o ? "contentClick" : "backdropClick") || !1;
                        },
                        dblClick: () => r.isCompact ? "toggleZoom" : r.option("contentDblClick") || !1,
                        spinner: !1,
                        panOnlyZoomed: !0,
                        wheelLimit: 1 / 0,
                        transformParent: !0,
                        on: {
                            ready: t => {
                                i(t);
                            },
                            error: () => {
                                s();
                            },
                            destroy: () => {
                                s();
                            }
                        }
                    }));
                }));
            }
            zoomIn(t) {
                return new Promise(((e, i) => {
                    const n = this.instance, s = n.container, {panzoom: o, contentEl: a, el: r} = t;
                    o && o.updateMetrics();
                    const l = this.getZoomInfo(t);
                    if (!(l && r && a && o && s)) return void i();
                    const {x: c, y: h, scale: d, opacity: u} = l, p = () => {
                        t.state !== Z.Closing && (u && (a.style.opacity = Math.max(Math.min(1, 1 - (1 - o.scale) / (1 - d)), 0) + ""), 
                        o.scale >= 1 && o.scale > o.targetScale - .1 && e(o));
                    }, f = t => {
                        S(s, "is-zooming-in"), t.scale < .99 || t.scale > 1.01 || (a.style.opacity = "", 
                        t.off("endAnimation", f), t.off("touchStart", f), t.off("afterTransform", p), e(t));
                    };
                    o.on("endAnimation", f), o.on("touchStart", f), o.on("afterTransform", p), o.on([ "error", "destroy" ], (() => {
                        i();
                    })), o.panTo({
                        x: c,
                        y: h,
                        scale: d,
                        friction: 0,
                        ignoreBounds: !0
                    }), o.stop("current");
                    const m = {
                        event: "mousemove" === o.panMode ? n.prevMouseMoveEvent || n.options.event : void 0
                    }, g = this.optionFor(t, "initialSize");
                    E(s, "is-zooming-in"), n.hideLoading(t), "full" === g ? o.zoomToFull(m) : "cover" === g ? o.zoomToCover(m) : "max" === g ? o.zoomToMax(m) : o.reset(.172);
                }));
            }
            getZoomInfo(t) {
                var e;
                const {el: i, imageEl: n, thumbEl: s, panzoom: o} = t;
                if (!i || !n || !s || !o || N(s) < 3 || !this.optionFor(t, "zoom") || this.instance.state === V.Destroy) return !1;
                if (1 !== ((null === (e = window.visualViewport) || void 0 === e ? void 0 : e.scale) || 1)) return !1;
                let {top: a, left: r, width: l, height: c} = s.getBoundingClientRect(), {top: h, left: d, fitWidth: u, fitHeight: p} = o.contentRect;
                if (!(l && c && u && p)) return !1;
                const f = o.container.getBoundingClientRect();
                d += f.left, h += f.top;
                const m = -1 * (d + .5 * u - (r + .5 * l)), g = -1 * (h + .5 * p - (a + .5 * c)), b = l / u;
                let v = this.option("zoomOpacity") || !1;
                return "auto" === v && (v = Math.abs(l / c - u / p) > .1), {
                    x: m,
                    y: g,
                    scale: b,
                    opacity: v
                };
            }
            attach() {
                const t = this, e = t.instance;
                e.on("Carousel.change", t.onChange), e.on("Carousel.createSlide", t.onCreateSlide), 
                e.on("Carousel.removeSlide", t.onRemoveSlide), e.on("close", t.onClose);
            }
            detach() {
                const t = this, e = t.instance;
                e.off("Carousel.change", t.onChange), e.off("Carousel.createSlide", t.onCreateSlide), 
                e.off("Carousel.removeSlide", t.onRemoveSlide), e.off("close", t.onClose);
            }
        }
        Object.defineProperty(J, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {
                initialSize: "fit",
                Panzoom: {
                    maxScale: 1
                },
                protected: !1,
                zoom: !0,
                zoomOpacity: "auto"
            }
        });
        const Q = (t, e = {}) => {
            const i = new URL(t), n = new URLSearchParams(i.search), s = new URLSearchParams;
            for (const [t, i] of [ ...n, ...Object.entries(e) ]) {
                let e = i.toString();
                "t" === t ? s.set("start", parseInt(e).toString()) : s.set(t, e);
            }
            let o = s.toString(), a = t.match(/#t=((.*)?\d+s)/);
            return a && (o += `#t=${a[1]}`), o;
        }, tt = {
            ajax: null,
            autoSize: !0,
            iframeAttr: {
                allow: "autoplay; fullscreen",
                scrolling: "auto"
            },
            preload: !0,
            videoAutoplay: !0,
            videoRatio: 16 / 9,
            videoTpl: '<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos.</video>',
            videoFormat: "",
            vimeo: {
                byline: 1,
                color: "00adef",
                controls: 1,
                dnt: 1,
                muted: 0
            },
            youtube: {
                controls: 1,
                enablejsapi: 1,
                nocookie: 1,
                rel: 0,
                fs: 1
            }
        }, et = [ "image", "html", "ajax", "inline", "clone", "iframe", "map", "pdf", "html5video", "youtube", "vimeo", "video" ];
        class it extends I {
            onInitSlide(t, e, i) {
                this.processType(i);
            }
            onCreateSlide(t, e, i) {
                this.setContent(i);
            }
            onRemoveSlide(t, e, i) {
                i.xhr && (i.xhr.abort(), i.xhr = null);
                const n = i.iframeEl;
                n && (n.onload = n.onerror = null, n.src = "//about:blank", i.iframeEl = null);
                const s = i.contentEl, o = i.placeholderEl;
                if ("inline" === i.type && s && o) s.classList.remove("fancybox__content"), "none" !== s.style.display && (s.style.display = "none"), 
                o.parentNode && o.parentNode.insertBefore(s, o), o.remove(), i.contentEl = void 0, 
                i.placeholderEl = void 0; else for (;i.el && i.el.firstChild; ) i.el.removeChild(i.el.firstChild);
            }
            onSelectSlide(t, e, i) {
                i.state === Z.Ready && this.playVideo();
            }
            onUnselectSlide(t, e, i) {
                var n, s;
                if ("html5video" === i.type) {
                    try {
                        null === (s = null === (n = i.el) || void 0 === n ? void 0 : n.querySelector("video")) || void 0 === s || s.pause();
                    } catch (t) {}
                    return;
                }
                let o;
                "vimeo" === i.type ? o = {
                    method: "pause",
                    value: "true"
                } : "youtube" === i.type && (o = {
                    event: "command",
                    func: "pauseVideo"
                }), o && i.iframeEl && i.iframeEl.contentWindow && i.iframeEl.contentWindow.postMessage(JSON.stringify(o), "*"), 
                i.poller && clearTimeout(i.poller);
            }
            onDone(t, e) {
                t.isCurrentSlide(e) && !t.isClosing() && this.playVideo();
            }
            onRefresh(t, e) {
                e.slides.forEach((t => {
                    t.el && (this.setAspectRatio(t), this.resizeIframe(t));
                }));
            }
            onMessage(t) {
                try {
                    let e = JSON.parse(t.data);
                    if ("https://player.vimeo.com" === t.origin) {
                        if ("ready" === e.event) for (let e of Array.from(document.getElementsByClassName("fancybox__iframe"))) e instanceof HTMLIFrameElement && e.contentWindow === t.source && (e.dataset.ready = "true");
                    } else if (t.origin.match(/^https:\/\/(www.)?youtube(-nocookie)?.com$/) && "onReady" === e.event) {
                        const t = document.getElementById(e.id);
                        t && (t.dataset.ready = "true");
                    }
                } catch (t) {}
            }
            loadAjaxContent(t) {
                const e = this.instance.optionFor(t, "src") || "";
                this.instance.showLoading(t);
                const i = this.instance, n = new XMLHttpRequest;
                i.showLoading(t), n.onreadystatechange = function() {
                    n.readyState === XMLHttpRequest.DONE && i.state === V.Ready && (i.hideLoading(t), 
                    200 === n.status ? i.setContent(t, n.responseText) : i.setError(t, 404 === n.status ? "{{AJAX_NOT_FOUND}}" : "{{AJAX_FORBIDDEN}}"));
                };
                const s = t.ajax || null;
                n.open(s ? "POST" : "GET", e + ""), n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), 
                n.setRequestHeader("X-Requested-With", "XMLHttpRequest"), n.send(s), t.xhr = n;
            }
            setInlineContent(t) {
                let e = null;
                if (x(t.src)) e = t.src; else if ("string" == typeof t.src) {
                    const i = t.src.split("#", 2).pop();
                    e = i ? document.getElementById(i) : null;
                }
                if (e) {
                    if ("clone" === t.type || e.closest(".fancybox__slide")) {
                        e = e.cloneNode(!0);
                        const i = e.dataset.animationName;
                        i && (e.classList.remove(i), delete e.dataset.animationName);
                        let n = e.getAttribute("id");
                        n = n ? `${n}--clone` : `clone-${this.instance.id}-${t.index}`, e.setAttribute("id", n);
                    } else if (e.parentNode) {
                        const i = document.createElement("div");
                        i.classList.add("fancybox-placeholder"), e.parentNode.insertBefore(i, e), t.placeholderEl = i;
                    }
                    this.instance.setContent(t, e);
                } else this.instance.setError(t, "{{ELEMENT_NOT_FOUND}}");
            }
            setIframeContent(t) {
                const {src: e, el: i} = t;
                if (!e || "string" != typeof e || !i) return;
                const n = this.instance, s = document.createElement("iframe");
                s.className = "fancybox__iframe", s.setAttribute("id", `fancybox__iframe_${n.id}_${t.index}`);
                for (const [e, i] of Object.entries(this.optionFor(t, "iframeAttr") || {})) s.setAttribute(e, i);
                s.onerror = () => {
                    n.setError(t, "{{IFRAME_ERROR}}");
                }, t.iframeEl = s;
                const o = this.optionFor(t, "preload");
                if (i.classList.add("is-loading"), "iframe" !== t.type || !1 === o) return s.setAttribute("src", t.src + ""), 
                this.resizeIframe(t), void n.setContent(t, s);
                n.showLoading(t), s.onload = () => {
                    if (!s.src.length) return;
                    const e = "true" !== s.dataset.ready;
                    s.dataset.ready = "true", this.resizeIframe(t), e ? n.revealContent(t) : n.hideLoading(t);
                }, s.setAttribute("src", e), n.setContent(t, s, !1);
            }
            resizeIframe(t) {
                const e = t.iframeEl, i = null == e ? void 0 : e.parentElement;
                if (!e || !i) return;
                let n = t.autoSize, s = t.width || 0, o = t.height || 0;
                s && o && (n = !1);
                const a = i && i.style;
                if (!1 !== t.preload && !1 !== n && a) try {
                    const t = window.getComputedStyle(i), n = parseFloat(t.paddingLeft) + parseFloat(t.paddingRight), r = parseFloat(t.paddingTop) + parseFloat(t.paddingBottom), l = e.contentWindow;
                    if (l) {
                        const t = l.document, e = t.getElementsByTagName("html")[0], i = t.body;
                        a.width = "", i.style.overflow = "hidden", s = s || e.scrollWidth + n, a.width = `${s}px`, 
                        i.style.overflow = "", a.flex = "0 0 auto", a.height = `${i.scrollHeight}px`, o = e.scrollHeight + r;
                    }
                } catch (t) {}
                if (s || o) {
                    const t = {
                        flex: "0 1 auto",
                        width: "",
                        height: ""
                    };
                    s && (t.width = `${s}px`), o && (t.height = `${o}px`), Object.assign(a, t);
                }
            }
            playVideo() {
                const t = this.instance.getSlide();
                if (!t) return;
                const {el: e} = t;
                if (!e || !e.offsetParent) return;
                if (!this.optionFor(t, "videoAutoplay")) return;
                if ("html5video" === t.type) try {
                    const t = e.querySelector("video");
                    if (t) {
                        const e = t.play();
                        void 0 !== e && e.then((() => {})).catch((e => {
                            t.muted = !0, t.play();
                        }));
                    }
                } catch (t) {}
                if ("youtube" !== t.type && "vimeo" !== t.type) return;
                const i = () => {
                    if (t.iframeEl && t.iframeEl.contentWindow) {
                        let e;
                        if ("true" === t.iframeEl.dataset.ready) return e = "youtube" === t.type ? {
                            event: "command",
                            func: "playVideo"
                        } : {
                            method: "play",
                            value: "true"
                        }, e && t.iframeEl.contentWindow.postMessage(JSON.stringify(e), "*"), void (t.poller = void 0);
                        "youtube" === t.type && (e = {
                            event: "listening",
                            id: t.iframeEl.getAttribute("id")
                        }, t.iframeEl.contentWindow.postMessage(JSON.stringify(e), "*"));
                    }
                    t.poller = setTimeout(i, 250);
                };
                i();
            }
            processType(t) {
                if (t.html) return t.type = "html", t.src = t.html, void (t.html = "");
                const e = this.instance.optionFor(t, "src", "");
                if (!e || "string" != typeof e) return;
                let i = t.type, n = null;
                if (n = e.match(/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|shorts\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i)) {
                    const s = this.optionFor(t, "youtube"), {nocookie: o} = s, a = function(t, e) {
                        var i = {};
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (i[n] = t[n]);
                        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                            var s = 0;
                            for (n = Object.getOwnPropertySymbols(t); s < n.length; s++) e.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[s]) && (i[n[s]] = t[n[s]]);
                        }
                        return i;
                    }(s, [ "nocookie" ]), r = `www.youtube${o ? "-nocookie" : ""}.com`, l = Q(e, a), c = encodeURIComponent(n[2]);
                    t.videoId = c, t.src = `https://${r}/embed/${c}?${l}`, t.thumbSrc = t.thumbSrc || `https://i.ytimg.com/vi/${c}/mqdefault.jpg`, 
                    i = "youtube";
                } else if (n = e.match(/^.+vimeo.com\/(?:\/)?([\d]+)((\/|\?h=)([a-z0-9]+))?(.*)?/)) {
                    const s = Q(e, this.optionFor(t, "vimeo")), o = encodeURIComponent(n[1]), a = n[4] || "";
                    t.videoId = o, t.src = `https://player.vimeo.com/video/${o}?${a ? `h=${a}${s ? "&" : ""}` : ""}${s}`, 
                    i = "vimeo";
                }
                if (!i && t.triggerEl) {
                    const e = t.triggerEl.dataset.type;
                    et.includes(e) && (i = e);
                }
                i || "string" == typeof e && ("#" === e.charAt(0) ? i = "inline" : (n = e.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (i = "html5video", 
                t.videoFormat = t.videoFormat || "video/" + ("ogv" === n[1] ? "ogg" : n[1])) : e.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? i = "image" : e.match(/\.(pdf)((\?|#).*)?$/i) ? i = "pdf" : (n = e.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i)) ? (t.src = `https://maps.google.${n[1]}/?ll=${(n[2] ? n[2] + "&z=" + Math.floor(parseFloat(n[3])) + (n[4] ? n[4].replace(/^\//, "&") : "") : n[4] + "").replace(/\?/, "&")}&output=${n[4] && n[4].indexOf("layer=c") > 0 ? "svembed" : "embed"}`, 
                i = "map") : (n = e.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i)) && (t.src = `https://maps.google.${n[1]}/maps?q=${n[2].replace("query=", "q=").replace("api=1", "")}&output=embed`, 
                i = "map")), i = i || this.instance.option("defaultType"), t.type = i, "image" === i && (t.thumbSrc = t.thumbSrc || t.src);
            }
            setContent(t) {
                const e = this.instance.optionFor(t, "src") || "";
                if (t && t.type && e) {
                    switch (t.type) {
                      case "html":
                        this.instance.setContent(t, e);
                        break;

                      case "html5video":
                        const i = this.option("videoTpl");
                        i && this.instance.setContent(t, i.replace(/\{\{src\}\}/gi, e + "").replace(/\{\{format\}\}/gi, this.optionFor(t, "videoFormat") || "").replace(/\{\{poster\}\}/gi, t.poster || t.thumbSrc || ""));
                        break;

                      case "inline":
                      case "clone":
                        this.setInlineContent(t);
                        break;

                      case "ajax":
                        this.loadAjaxContent(t);
                        break;

                      case "pdf":
                      case "map":
                      case "youtube":
                      case "vimeo":
                        t.preload = !1;

                      case "iframe":
                        this.setIframeContent(t);
                    }
                    this.setAspectRatio(t);
                }
            }
            setAspectRatio(t) {
                var e;
                const i = t.contentEl, n = this.optionFor(t, "videoRatio"), s = null === (e = t.el) || void 0 === e ? void 0 : e.getBoundingClientRect();
                if (!(i && s && n && 1 !== n && t.type && [ "video", "youtube", "vimeo", "html5video" ].includes(t.type))) return;
                const o = s.width, a = s.height;
                i.style.aspectRatio = n + "", i.style.width = o / a > n ? "auto" : "", i.style.height = o / a > n ? "" : "auto";
            }
            attach() {
                const t = this, e = t.instance;
                e.on("Carousel.initSlide", t.onInitSlide), e.on("Carousel.createSlide", t.onCreateSlide), 
                e.on("Carousel.removeSlide", t.onRemoveSlide), e.on("Carousel.selectSlide", t.onSelectSlide), 
                e.on("Carousel.unselectSlide", t.onUnselectSlide), e.on("Carousel.Panzoom.refresh", t.onRefresh), 
                e.on("done", t.onDone), window.addEventListener("message", t.onMessage);
            }
            detach() {
                const t = this, e = t.instance;
                e.off("Carousel.initSlide", t.onInitSlide), e.off("Carousel.createSlide", t.onCreateSlide), 
                e.off("Carousel.removeSlide", t.onRemoveSlide), e.off("Carousel.selectSlide", t.onSelectSlide), 
                e.off("Carousel.unselectSlide", t.onUnselectSlide), e.off("Carousel.Panzoom.refresh", t.onRefresh), 
                e.off("done", t.onDone), window.removeEventListener("message", t.onMessage);
            }
        }
        Object.defineProperty(it, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: tt
        });
        class nt extends I {
            constructor() {
                super(...arguments), Object.defineProperty(this, "state", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "ready"
                }), Object.defineProperty(this, "inHover", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }), Object.defineProperty(this, "timer", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "progressBar", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                });
            }
            get isActive() {
                return "ready" !== this.state;
            }
            onReady(t) {
                this.option("autoStart") && (t.isInfinite || t.page < t.pages.length - 1) && this.start();
            }
            onChange() {
                var t;
                (null === (t = this.instance.panzoom) || void 0 === t ? void 0 : t.isResting) || (this.removeProgressBar(), 
                this.pause());
            }
            onSettle() {
                this.resume();
            }
            onVisibilityChange() {
                "visible" === document.visibilityState ? this.resume() : this.pause();
            }
            onMouseEnter() {
                this.inHover = !0, this.pause();
            }
            onMouseLeave() {
                var t;
                this.inHover = !1, (null === (t = this.instance.panzoom) || void 0 === t ? void 0 : t.isResting) && this.resume();
            }
            onTimerEnd() {
                const t = this.instance;
                "play" === this.state && (t.isInfinite || t.page !== t.pages.length - 1 ? t.slideNext() : t.slideTo(0));
            }
            removeProgressBar() {
                this.progressBar && (this.progressBar.remove(), this.progressBar = null);
            }
            createProgressBar() {
                var t;
                if (!this.option("showProgress")) return null;
                this.removeProgressBar();
                const e = this.instance, i = (null === (t = e.pages[e.page]) || void 0 === t ? void 0 : t.slides) || [];
                let n = this.option("progressParentEl");
                if (n || (n = (1 === i.length ? i[0].el : null) || e.viewport), !n) return null;
                const s = document.createElement("div");
                return E(s, "f-progress"), n.prepend(s), this.progressBar = s, s.offsetHeight, s;
            }
            set() {
                const t = this, e = t.instance;
                if (e.pages.length < 2) return;
                if (t.timer) return;
                const i = t.option("timeout");
                t.state = "play", E(e.container, "has-autoplay");
                let n = t.createProgressBar();
                n && (n.style.transitionDuration = `${i}ms`, n.style.transform = "scaleX(1)"), t.timer = setTimeout((() => {
                    t.timer = null, t.inHover || t.onTimerEnd();
                }), i), t.emit("set");
            }
            clear() {
                const t = this;
                t.timer && (clearTimeout(t.timer), t.timer = null), t.removeProgressBar();
            }
            start() {
                const t = this;
                if (t.set(), "ready" !== t.state) {
                    if (t.option("pauseOnHover")) {
                        const e = t.instance.container;
                        e.addEventListener("mouseenter", t.onMouseEnter, !1), e.addEventListener("mouseleave", t.onMouseLeave, !1);
                    }
                    document.addEventListener("visibilitychange", t.onVisibilityChange, !1), t.emit("start");
                }
            }
            stop() {
                const t = this, e = t.state, i = t.instance.container;
                t.clear(), t.state = "ready", i.removeEventListener("mouseenter", t.onMouseEnter, !1), 
                i.removeEventListener("mouseleave", t.onMouseLeave, !1), document.removeEventListener("visibilitychange", t.onVisibilityChange, !1), 
                S(i, "has-autoplay"), "ready" !== e && t.emit("stop");
            }
            pause() {
                const t = this;
                "play" === t.state && (t.state = "pause", t.clear(), t.emit("pause"));
            }
            resume() {
                const t = this, e = t.instance;
                if (e.isInfinite || e.page !== e.pages.length - 1) if ("play" !== t.state) {
                    if ("pause" === t.state && !t.inHover) {
                        const e = new Event("resume", {
                            bubbles: !0,
                            cancelable: !0
                        });
                        t.emit("resume", e), e.defaultPrevented || t.set();
                    }
                } else t.set(); else t.stop();
            }
            toggle() {
                "play" === this.state || "pause" === this.state ? this.stop() : this.start();
            }
            attach() {
                const t = this, e = t.instance;
                e.on("ready", t.onReady), e.on("Panzoom.startAnimation", t.onChange), e.on("Panzoom.endAnimation", t.onSettle), 
                e.on("Panzoom.touchMove", t.onChange);
            }
            detach() {
                const t = this, e = t.instance;
                e.off("ready", t.onReady), e.off("Panzoom.startAnimation", t.onChange), e.off("Panzoom.endAnimation", t.onSettle), 
                e.off("Panzoom.touchMove", t.onChange), t.stop();
            }
        }
        Object.defineProperty(nt, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {
                autoStart: !0,
                pauseOnHover: !0,
                progressParentEl: null,
                showProgress: !0,
                timeout: 3e3
            }
        });
        class st extends I {
            constructor() {
                super(...arguments), Object.defineProperty(this, "ref", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                });
            }
            onPrepare(t) {
                const e = t.carousel;
                if (!e) return;
                const i = t.container;
                i && (e.options.Autoplay = u({
                    autoStart: !1
                }, this.option("Autoplay") || {}, {
                    pauseOnHover: !1,
                    timeout: this.option("timeout"),
                    progressParentEl: () => this.option("progressParentEl") || null,
                    on: {
                        start: () => {
                            t.emit("startSlideshow");
                        },
                        set: e => {
                            var n;
                            i.classList.add("has-slideshow"), (null === (n = t.getSlide()) || void 0 === n ? void 0 : n.state) !== Z.Ready && e.pause();
                        },
                        stop: () => {
                            i.classList.remove("has-slideshow"), t.isCompact || t.endIdle(), t.emit("endSlideshow");
                        },
                        resume: (e, i) => {
                            var n, s, o;
                            !i || !i.cancelable || (null === (n = t.getSlide()) || void 0 === n ? void 0 : n.state) === Z.Ready && (null === (o = null === (s = t.carousel) || void 0 === s ? void 0 : s.panzoom) || void 0 === o ? void 0 : o.isResting) || i.preventDefault();
                        }
                    }
                }), e.attachPlugins({
                    Autoplay: nt
                }), this.ref = e.plugins.Autoplay);
            }
            onReady(t) {
                const e = t.carousel, i = this.ref;
                e && i && this.option("playOnStart") && (e.isInfinite || e.page < e.pages.length - 1) && i.start();
            }
            onDone(t, e) {
                const i = this.ref;
                if (!i) return;
                const n = e.panzoom;
                n && n.on("startAnimation", (() => {
                    t.isCurrentSlide(e) && i.stop();
                })), t.isCurrentSlide(e) && i.resume();
            }
            onKeydown(t, e) {
                var i;
                const n = this.ref;
                n && e === this.option("key") && "BUTTON" !== (null === (i = document.activeElement) || void 0 === i ? void 0 : i.nodeName) && n.toggle();
            }
            attach() {
                const t = this, e = t.instance;
                e.on("Carousel.init", t.onPrepare), e.on("Carousel.ready", t.onReady), e.on("done", t.onDone), 
                e.on("keydown", t.onKeydown);
            }
            detach() {
                const t = this, e = t.instance;
                e.off("Carousel.init", t.onPrepare), e.off("Carousel.ready", t.onReady), e.off("done", t.onDone), 
                e.off("keydown", t.onKeydown);
            }
        }
        Object.defineProperty(st, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {
                key: " ",
                playOnStart: !1,
                progressParentEl: t => {
                    var e;
                    return (null === (e = t.instance.container) || void 0 === e ? void 0 : e.querySelector(".fancybox__toolbar [data-fancybox-toggle-slideshow]")) || t.instance.container;
                },
                timeout: 3e3
            }
        });
        const ot = {
            classes: {
                container: "f-thumbs f-carousel__thumbs",
                viewport: "f-thumbs__viewport",
                track: "f-thumbs__track",
                slide: "f-thumbs__slide",
                isResting: "is-resting",
                isSelected: "is-selected",
                isLoading: "is-loading",
                hasThumbs: "has-thumbs"
            },
            minCount: 2,
            parentEl: null,
            thumbTpl: '<button class="f-thumbs__slide__button" tabindex="0" type="button" aria-label="{{GOTO}}" data-carousel-index="%i"><img class="f-thumbs__slide__img" data-lazy-src="{{%s}}" alt="" /></button>',
            type: "modern"
        };
        var at;
        !function(t) {
            t[t.Init = 0] = "Init", t[t.Ready = 1] = "Ready", t[t.Hidden = 2] = "Hidden", t[t.Disabled = 3] = "Disabled";
        }(at || (at = {}));
        let rt = class extends I {
            constructor() {
                super(...arguments), Object.defineProperty(this, "type", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "modern"
                }), Object.defineProperty(this, "container", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "track", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "carousel", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "panzoom", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "thumbWidth", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "thumbClipWidth", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "thumbHeight", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "thumbGap", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "thumbExtraGap", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "shouldCenter", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !0
                }), Object.defineProperty(this, "state", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: at.Init
                });
            }
            formatThumb(t, e) {
                return this.instance.localize(e, [ [ "%i", t.index ], [ "%d", t.index + 1 ], [ "%s", t.thumbSrc || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" ] ]);
            }
            getSlides() {
                const t = [], e = this.option("thumbTpl") || "";
                if (e) for (const i of this.instance.slides || []) {
                    let n = "";
                    i.type && (n = `for-${i.type}`, i.type && [ "video", "youtube", "vimeo", "html5video" ].includes(i.type) && (n += " for-video")), 
                    t.push({
                        html: this.formatThumb(i, e),
                        customClass: n
                    });
                }
                return t;
            }
            onInitSlide(t, e) {
                const i = e.el;
                i && (e.thumbSrc = i.dataset.thumbSrc || e.thumbSrc || "", e.thumbClipWidth = parseFloat(i.dataset.thumbClipWidth || "") || e.thumbClipWidth || 0, 
                e.thumbHeight = parseFloat(i.dataset.thumbHeight || "") || e.thumbHeight || 0);
            }
            onInitSlides() {
                this.state === at.Init && this.build();
            }
            onRefreshM() {
                this.refreshModern();
            }
            onChangeM() {
                "modern" === this.type && (this.shouldCenter = !0, this.centerModern());
            }
            onClickModern(t) {
                t.preventDefault(), t.stopPropagation();
                const e = this.instance, i = e.page, n = t => {
                    if (t) {
                        const e = t.closest("[data-carousel-index]");
                        if (e) return parseInt(e.dataset.carouselIndex || "", 10) || 0;
                    }
                    return -1;
                }, s = (t, e) => {
                    const i = document.elementFromPoint(t, e);
                    return i ? n(i) : -1;
                };
                let o = n(t.target);
                o < 0 && (o = s(t.clientX + this.thumbGap, t.clientY), o === i && (o = i - 1)), 
                o < 0 && (o = s(t.clientX - this.thumbGap, t.clientY), o === i && (o = i + 1)), 
                o < 0 && (o = (e => {
                    let n = s(t.clientX - e, t.clientY), a = s(t.clientX + e, t.clientY);
                    return o < 0 && n === i && (o = i + 1), o < 0 && a === i && (o = i - 1), o;
                })(this.thumbExtraGap)), o === i ? this.centerModern() : o > -1 && o < e.pages.length && e.slideTo(o);
            }
            onTransformM() {
                if ("modern" !== this.type) return;
                const {instance: t, container: e, track: i} = this, n = t.panzoom;
                if (!(e && i && n && this.panzoom)) return;
                o(e, this.cn("isResting"), n.state !== g.Init && n.isResting);
                const s = this.thumbGap, a = this.thumbExtraGap, r = this.thumbClipWidth;
                let l = 0, c = 0, h = 0;
                for (const e of t.slides) {
                    let i = e.index, n = e.thumbSlideEl;
                    if (!n) continue;
                    o(n, this.cn("isSelected"), i === t.page), c = 1 - Math.abs(t.getProgress(i)), n.style.setProperty("--progress", c ? c + "" : "");
                    const d = .5 * ((e.thumbWidth || 0) - r);
                    l += s, l += d, c && (l -= c * (d + a)), n.style.setProperty("--shift", l - s + ""), 
                    l += d, c && (l -= c * (d + a)), l -= s, 0 === i && (h = a * c);
                }
                i && (i.style.setProperty("--left", h + ""), i.style.setProperty("--width", l + h + s + a * c + "")), 
                this.shouldCenter && this.centerModern();
            }
            buildClassic() {
                const {container: t, track: e} = this, i = this.getSlides();
                if (!t || !e || !i) return;
                const n = new this.instance.constructor(t, u({
                    track: e,
                    infinite: !1,
                    center: !0,
                    fill: !0,
                    dragFree: !0,
                    slidesPerPage: 1,
                    transition: !1,
                    Dots: !1,
                    Navigation: !1,
                    classes: {
                        container: "f-thumbs",
                        viewport: "f-thumbs__viewport",
                        track: "f-thumbs__track",
                        slide: "f-thumbs__slide"
                    }
                }, this.option("Carousel") || {}, {
                    Sync: {
                        target: this.instance
                    },
                    slides: i
                }));
                this.carousel = n, this.track = e, n.on("ready", (() => {
                    this.emit("ready");
                })), n.on("createSlide", ((t, e) => {
                    this.emit("createSlide", e, e.el);
                }));
            }
            buildModern() {
                if ("modern" !== this.type) return;
                const {container: t, track: e, instance: i} = this, s = this.option("thumbTpl") || "";
                if (!t || !e || !s) return;
                E(t, "is-horizontal"), this.updateModern();
                for (const t of i.slides || []) {
                    const i = document.createElement("div");
                    if (E(i, this.cn("slide")), t.type) {
                        let e = `for-${t.type}`;
                        [ "video", "youtube", "vimeo", "html5video" ].includes(t.type) && (e += " for-video"), 
                        E(i, e);
                    }
                    i.appendChild(n(this.formatThumb(t, s))), this.emit("createSlide", t, i), t.thumbSlideEl = i, 
                    e.appendChild(i), this.resizeModernSlide(t);
                }
                const o = new i.constructor.Panzoom(t, {
                    content: e,
                    lockAxis: "x",
                    zoom: !1,
                    panOnlyZoomed: !1,
                    bounds: () => {
                        let t = 0, e = 0, n = i.slides[0], s = i.slides[i.slides.length - 1], o = i.slides[i.page];
                        return n && s && o && (e = -1 * this.getModernThumbPos(0), 0 !== i.page && (e += .5 * (n.thumbWidth || 0)), 
                        t = -1 * this.getModernThumbPos(i.slides.length - 1), i.page !== i.slides.length - 1 && (t += (s.thumbWidth || 0) - (o.thumbWidth || 0) - .5 * (s.thumbWidth || 0))), 
                        {
                            x: {
                                min: t,
                                max: e
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        };
                    }
                });
                o.on("touchStart", ((t, e) => {
                    this.shouldCenter = !1;
                })), o.on("click", ((t, e) => this.onClickModern(e))), o.on("ready", (() => {
                    this.centerModern(), this.emit("ready");
                })), o.on([ "afterTransform", "refresh" ], (t => {
                    this.lazyLoadModern();
                })), this.panzoom = o, this.refreshModern();
            }
            updateModern() {
                if ("modern" !== this.type) return;
                const {container: t} = this;
                t && (this.thumbGap = parseFloat(getComputedStyle(t).getPropertyValue("--f-thumb-gap")) || 0, 
                this.thumbExtraGap = parseFloat(getComputedStyle(t).getPropertyValue("--f-thumb-extra-gap")) || 0, 
                this.thumbWidth = parseFloat(getComputedStyle(t).getPropertyValue("--f-thumb-width")) || 40, 
                this.thumbClipWidth = parseFloat(getComputedStyle(t).getPropertyValue("--f-thumb-clip-width")) || 40, 
                this.thumbHeight = parseFloat(getComputedStyle(t).getPropertyValue("--f-thumb-height")) || 40);
            }
            refreshModern() {
                var t;
                if ("modern" === this.type) {
                    this.updateModern();
                    for (const t of this.instance.slides || []) this.resizeModernSlide(t);
                    this.onTransformM(), null === (t = this.panzoom) || void 0 === t || t.updateMetrics(!0), 
                    this.centerModern(0);
                }
            }
            centerModern(e) {
                const i = this.instance, {container: n, panzoom: s} = this;
                if (!n || !s || s.state === g.Init) return;
                const o = i.page;
                let a = this.getModernThumbPos(o), r = a;
                for (let t = i.page - 3; t < i.page + 3; t++) {
                    if (t < 0 || t > i.pages.length - 1 || t === i.page) continue;
                    const e = 1 - Math.abs(i.getProgress(t));
                    e > 0 && e < 1 && (r += e * (this.getModernThumbPos(t) - a));
                }
                let l = 100;
                void 0 === e && (e = .2, i.inTransition.size > 0 && (e = .12), Math.abs(-1 * s.current.e - r) > s.containerRect.width && (e = .5, 
                l = 0)), s.options.maxVelocity = l, s.applyChange({
                    panX: t(-1 * r - s.target.e, 1e3),
                    friction: null === i.prevPage ? 0 : e
                });
            }
            lazyLoadModern() {
                const {instance: t, panzoom: e} = this;
                if (!e) return;
                const i = -1 * e.current.e || 0;
                let s = this.getModernThumbPos(t.page);
                if (e.state !== g.Init || 0 === s) for (const s of t.slides || []) {
                    const t = s.thumbSlideEl;
                    if (!t) continue;
                    const o = t.querySelector("img[data-lazy-src]"), a = s.index, r = this.getModernThumbPos(a), l = i - .5 * e.containerRect.innerWidth, c = l + e.containerRect.innerWidth;
                    if (!o || r < l || r > c) continue;
                    let h = o.dataset.lazySrc;
                    if (!h || !h.length) continue;
                    if (delete o.dataset.lazySrc, o.src = h, o.complete) continue;
                    E(t, this.cn("isLoading"));
                    const d = n(w);
                    t.appendChild(d), o.addEventListener("load", (() => {
                        t.offsetParent && (t.classList.remove(this.cn("isLoading")), d.remove());
                    }), !1);
                }
            }
            resizeModernSlide(t) {
                if ("modern" !== this.type) return;
                if (!t.thumbSlideEl) return;
                const e = t.thumbClipWidth && t.thumbHeight ? Math.round(this.thumbHeight * (t.thumbClipWidth / t.thumbHeight)) : this.thumbWidth;
                t.thumbWidth = e;
            }
            getModernThumbPos(e) {
                const i = this.instance.slides[e], n = this.panzoom;
                if (!n || !n.contentRect.fitWidth) return 0;
                let s = n.containerRect.innerWidth, o = n.contentRect.width;
                2 === this.instance.slides.length && (e -= 1, o = 2 * this.thumbClipWidth);
                let a = e * (this.thumbClipWidth + this.thumbGap) + this.thumbExtraGap + .5 * (i.thumbWidth || 0);
                return a -= o > s ? .5 * s : .5 * o, t(a || 0, 1);
            }
            build() {
                const t = this.instance, e = t.container, i = this.option("minCount") || 0;
                if (i) {
                    let e = 0;
                    for (const i of t.slides || []) i.thumbSrc && e++;
                    if (e < i) return this.cleanup(), void (this.state = at.Disabled);
                }
                const n = this.option("type");
                if ([ "modern", "classic" ].indexOf(n) < 0) return void (this.state = at.Disabled);
                this.type = n;
                const s = document.createElement("div");
                E(s, this.cn("container")), E(s, `is-${n}`);
                const o = this.option("parentEl");
                o ? o.appendChild(s) : e.after(s), this.container = s, E(e, this.cn("hasThumbs"));
                const a = document.createElement("div");
                E(a, this.cn("track")), s.appendChild(a), this.track = a, "classic" === n ? this.buildClassic() : this.buildModern(), 
                this.state = at.Ready, s.addEventListener("click", (e => {
                    setTimeout((() => {
                        var e;
                        null === (e = null == s ? void 0 : s.querySelector(`[data-carousel-index="${t.page}"]`)) || void 0 === e || e.focus();
                    }), 100);
                }));
            }
            cleanup() {
                this.carousel && this.carousel.destroy(), this.carousel = null, this.panzoom && this.panzoom.destroy(), 
                this.panzoom = null, this.container && this.container.remove(), this.container = null, 
                this.track = null, this.state = at.Init, S(this.instance.container, this.cn("hasThumbs"));
            }
            attach() {
                const t = this, e = t.instance;
                e.on("initSlide", t.onInitSlide), e.state === L.Init ? e.on("initSlides", t.onInitSlides) : t.onInitSlides(), 
                e.on("Panzoom.afterTransform", t.onTransformM), e.on("Panzoom.refresh", t.onRefreshM), 
                e.on("change", t.onChangeM);
            }
            detach() {
                const t = this, e = t.instance;
                e.off("initSlide", t.onInitSlide), e.off("initSlides", t.onInitSlides), e.off("Panzoom.afterTransform", t.onTransformM), 
                e.off("Panzoom.refresh", t.onRefreshM), e.off("change", t.onChangeM), t.cleanup();
            }
        };
        Object.defineProperty(rt, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ot
        });
        const lt = Object.assign(Object.assign({}, ot), {
            key: "t",
            showOnStart: !0,
            parentEl: null
        });
        class ct extends I {
            constructor() {
                super(...arguments), Object.defineProperty(this, "ref", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "hidden", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                });
            }
            get isEnabled() {
                const t = this.ref;
                return t && t.state !== at.Disabled;
            }
            get isHidden() {
                return this.hidden;
            }
            onInit() {
                var t;
                const e = this, i = e.instance, n = i.carousel;
                if (e.ref || !n) return;
                const s = e.option("parentEl") || i.footer || i.container;
                if (!s) return;
                const o = u({}, e.options, {
                    parentEl: s,
                    classes: {
                        container: "f-thumbs fancybox__thumbs"
                    },
                    Carousel: {
                        Sync: {
                            friction: i.option("Carousel.friction") || 0
                        }
                    },
                    on: {
                        ready: t => {
                            const i = t.container;
                            i && this.hidden && (e.refresh(), i.style.transition = "none", e.hide(), i.offsetHeight, 
                            queueMicrotask((() => {
                                i.style.transition = "", e.show();
                            })));
                        }
                    }
                });
                o.Carousel = o.Carousel || {}, o.Carousel.on = u((null === (t = e.options.Carousel) || void 0 === t ? void 0 : t.on) || {}, {
                    click: (t, e) => {
                        e.stopPropagation();
                    }
                }), n.options.Thumbs = o, n.attachPlugins({
                    Thumbs: rt
                }), e.ref = n.plugins.Thumbs, e.option("showOnStart") || (e.ref.state = at.Hidden, 
                e.hidden = !0);
            }
            onResize() {
                var t;
                const e = null === (t = this.ref) || void 0 === t ? void 0 : t.container;
                e && (e.style.maxHeight = "");
            }
            onKeydown(t, e) {
                const i = this.option("key");
                i && i === e && this.toggle();
            }
            toggle() {
                const t = this.ref;
                t && t.state !== at.Disabled && (t.state !== at.Hidden ? this.hidden ? this.show() : this.hide() : t.build());
            }
            show() {
                const t = this.ref, e = t && t.state !== at.Disabled && t.container;
                e && (this.refresh(), e.offsetHeight, e.removeAttribute("aria-hidden"), e.classList.remove("is-hidden"), 
                this.hidden = !1);
            }
            hide() {
                const t = this.ref, e = t && t.container;
                e && (this.refresh(), e.offsetHeight, e.classList.add("is-hidden"), e.setAttribute("aria-hidden", "true")), 
                this.hidden = !0;
            }
            refresh() {
                const t = this.ref;
                if (!t || t.state === at.Disabled) return;
                const e = t.container, i = (null == e ? void 0 : e.firstChild) || null;
                e && i && i.childNodes.length && (e.style.maxHeight = `${i.getBoundingClientRect().height}px`);
            }
            attach() {
                const t = this, e = t.instance;
                e.state === V.Init ? e.on("Carousel.init", t.onInit) : t.onInit(), e.on("resize", t.onResize), 
                e.on("keydown", t.onKeydown);
            }
            detach() {
                var t;
                const e = this, i = e.instance;
                i.off("Carousel.init", e.onInit), i.off("resize", e.onResize), i.off("keydown", e.onKeydown), 
                null === (t = i.carousel) || void 0 === t || t.detachPlugins([ "Thumbs" ]), e.ref = null;
            }
        }
        Object.defineProperty(ct, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: lt
        });
        const ht = {
            panLeft: {
                icon: '<svg><path d="M5 12h14M5 12l6 6M5 12l6-6"/></svg>',
                change: {
                    panX: -100
                }
            },
            panRight: {
                icon: '<svg><path d="M5 12h14M13 18l6-6M13 6l6 6"/></svg>',
                change: {
                    panX: 100
                }
            },
            panUp: {
                icon: '<svg><path d="M12 5v14M18 11l-6-6M6 11l6-6"/></svg>',
                change: {
                    panY: -100
                }
            },
            panDown: {
                icon: '<svg><path d="M12 5v14M18 13l-6 6M6 13l6 6"/></svg>',
                change: {
                    panY: 100
                }
            },
            zoomIn: {
                icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>',
                action: "zoomIn"
            },
            zoomOut: {
                icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
                action: "zoomOut"
            },
            toggle1to1: {
                icon: '<svg><path d="M3.51 3.07c5.74.02 11.48-.02 17.22.02 1.37.1 2.34 1.64 2.18 3.13 0 4.08.02 8.16 0 12.23-.1 1.54-1.47 2.64-2.79 2.46-5.61-.01-11.24.02-16.86-.01-1.36-.12-2.33-1.65-2.17-3.14 0-4.07-.02-8.16 0-12.23.1-1.36 1.22-2.48 2.42-2.46Z"/><path d="M5.65 8.54h1.49v6.92m8.94-6.92h1.49v6.92M11.5 9.4v.02m0 5.18v0"/></svg>',
                action: "toggleZoom"
            },
            toggleZoom: {
                icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
                action: "toggleZoom"
            },
            iterateZoom: {
                icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
                action: "iterateZoom"
            },
            rotateCCW: {
                icon: '<svg><path d="M15 4.55a8 8 0 0 0-6 14.9M9 15v5H4M18.37 7.16v.01M13 19.94v.01M16.84 18.37v.01M19.37 15.1v.01M19.94 11v.01"/></svg>',
                action: "rotateCCW"
            },
            rotateCW: {
                icon: '<svg><path d="M9 4.55a8 8 0 0 1 6 14.9M15 15v5h5M5.63 7.16v.01M4.06 11v.01M4.63 15.1v.01M7.16 18.37v.01M11 19.94v.01"/></svg>',
                action: "rotateCW"
            },
            flipX: {
                icon: '<svg style="stroke-width: 1.3"><path d="M12 3v18M16 7v10h5L16 7M8 7v10H3L8 7"/></svg>',
                action: "flipX"
            },
            flipY: {
                icon: '<svg style="stroke-width: 1.3"><path d="M3 12h18M7 16h10L7 21v-5M7 8h10L7 3v5"/></svg>',
                action: "flipY"
            },
            fitX: {
                icon: '<svg><path d="M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6M10 18H3M21 18h-7M6 15l-3 3 3 3M18 15l3 3-3 3"/></svg>',
                action: "fitX"
            },
            fitY: {
                icon: '<svg><path d="M12 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6M18 14v7M18 3v7M15 18l3 3 3-3M15 6l3-3 3 3"/></svg>',
                action: "fitY"
            },
            reset: {
                icon: '<svg><path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/></svg>',
                action: "reset"
            },
            toggleFS: {
                icon: '<svg><g><path d="M14.5 9.5 21 3m0 0h-6m6 0v6M3 21l6.5-6.5M3 21v-6m0 6h6"/></g><g><path d="m14 10 7-7m-7 7h6m-6 0V4M3 21l7-7m0 0v6m0-6H4"/></g></svg>',
                action: "toggleFS"
            }
        };
        var dt;
        !function(t) {
            t[t.Init = 0] = "Init", t[t.Ready = 1] = "Ready", t[t.Disabled = 2] = "Disabled";
        }(dt || (dt = {}));
        const ut = {
            absolute: "auto",
            display: {
                left: [ "infobar" ],
                middle: [],
                right: [ "iterateZoom", "slideshow", "fullscreen", "thumbs", "close" ]
            },
            enabled: "auto",
            items: {
                infobar: {
                    tpl: '<div class="fancybox__infobar" tabindex="-1"><span data-fancybox-current-index></span>/<span data-fancybox-count></span></div>'
                },
                download: {
                    tpl: '<a class="f-button" title="{{DOWNLOAD}}" data-fancybox-download href="javasript:;"><svg><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12"/></svg></a>'
                },
                prev: {
                    tpl: '<button class="f-button" title="{{PREV}}" data-fancybox-prev><svg><path d="m15 6-6 6 6 6"/></svg></button>'
                },
                next: {
                    tpl: '<button class="f-button" title="{{NEXT}}" data-fancybox-next><svg><path d="m9 6 6 6-6 6"/></svg></button>'
                },
                slideshow: {
                    tpl: '<button class="f-button" title="{{TOGGLE_SLIDESHOW}}" data-fancybox-toggle-slideshow><svg><g><path d="M8 4v16l13 -8z"></path></g><g><path d="M8 4v15M17 4v15"/></g></svg></button>'
                },
                fullscreen: {
                    tpl: '<button class="f-button" title="{{TOGGLE_FULLSCREEN}}" data-fancybox-toggle-fullscreen><svg><g><path d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v2M16 20h2a2 2 0 0 0 2-2v-2"/></g><g><path d="M15 19v-2a2 2 0 0 1 2-2h2M15 5v2a2 2 0 0 0 2 2h2M5 15h2a2 2 0 0 1 2 2v2M5 9h2a2 2 0 0 0 2-2V5"/></g></svg></button>'
                },
                thumbs: {
                    tpl: '<button class="f-button" title="{{TOGGLE_THUMBS}}" data-fancybox-toggle-thumbs><svg><circle cx="5.5" cy="5.5" r="1"/><circle cx="12" cy="5.5" r="1"/><circle cx="18.5" cy="5.5" r="1"/><circle cx="5.5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="18.5" cy="12" r="1"/><circle cx="5.5" cy="18.5" r="1"/><circle cx="12" cy="18.5" r="1"/><circle cx="18.5" cy="18.5" r="1"/></svg></button>'
                },
                close: {
                    tpl: '<button class="f-button" title="{{CLOSE}}" data-fancybox-close><svg><path d="m19.5 4.5-15 15M4.5 4.5l15 15"/></svg></button>'
                }
            },
            parentEl: null
        }, pt = {
            tabindex: "-1",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg"
        };
        class ft extends I {
            constructor() {
                super(...arguments), Object.defineProperty(this, "state", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: dt.Init
                }), Object.defineProperty(this, "container", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                });
            }
            onReady(t) {
                var e;
                if (!t.carousel) return;
                let i = this.option("display"), n = this.option("absolute"), s = this.option("enabled");
                if ("auto" === s) {
                    const t = this.instance.carousel;
                    let e = 0;
                    if (t) for (const i of t.slides) (i.panzoom || "image" === i.type) && e++;
                    e || (s = !1);
                }
                s || (i = void 0);
                let o = 0;
                const a = {
                    left: [],
                    middle: [],
                    right: []
                };
                if (i) for (const t of [ "left", "middle", "right" ]) for (const n of i[t]) {
                    const i = this.createEl(n);
                    i && (null === (e = a[t]) || void 0 === e || e.push(i), o++);
                }
                let r = null;
                if (o && (r = this.createContainer()), r) {
                    for (const [t, e] of Object.entries(a)) {
                        const i = document.createElement("div");
                        E(i, "fancybox__toolbar__column is-" + t);
                        for (const t of e) i.appendChild(t);
                        "auto" !== n || "middle" !== t || e.length || (n = !0), r.appendChild(i);
                    }
                    !0 === n && E(r, "is-absolute"), this.state = dt.Ready, this.onRefresh();
                } else this.state = dt.Disabled;
            }
            onClick(t) {
                var e, i;
                const n = this.instance, s = n.getSlide(), o = null == s ? void 0 : s.panzoom, a = t.target, r = a && x(a) ? a.dataset : null;
                if (!r) return;
                if (void 0 !== r.fancyboxToggleThumbs) return t.preventDefault(), t.stopPropagation(), 
                void (null === (e = n.plugins.Thumbs) || void 0 === e || e.toggle());
                if (void 0 !== r.fancyboxToggleFullscreen) return t.preventDefault(), t.stopPropagation(), 
                void this.instance.toggleFullscreen();
                if (void 0 !== r.fancyboxToggleSlideshow) {
                    t.preventDefault(), t.stopPropagation();
                    const e = null === (i = n.carousel) || void 0 === i ? void 0 : i.plugins.Autoplay;
                    let s = e.isActive;
                    return o && "mousemove" === o.panMode && !s && o.reset(), void (s ? e.stop() : e.start());
                }
                const l = r.panzoomAction, c = r.panzoomChange;
                if ((c || l) && (t.preventDefault(), t.stopPropagation()), c) {
                    let t = {};
                    try {
                        t = JSON.parse(c);
                    } catch (t) {}
                    o && o.applyChange(t);
                } else l && o && o[l] && o[l]();
            }
            onChange() {
                this.onRefresh();
            }
            onRefresh() {
                if (this.instance.isClosing()) return;
                const t = this.container;
                if (!t) return;
                const e = this.instance.getSlide();
                if (!e || e.state !== Z.Ready) return;
                const i = e && !e.error && e.panzoom;
                for (const e of t.querySelectorAll("[data-panzoom-action]")) i ? (e.removeAttribute("disabled"), 
                e.removeAttribute("tabindex")) : (e.setAttribute("disabled", ""), e.setAttribute("tabindex", "-1"));
                let n = i && i.canZoomIn(), s = i && i.canZoomOut();
                for (const e of t.querySelectorAll('[data-panzoom-action="zoomIn"]')) n ? (e.removeAttribute("disabled"), 
                e.removeAttribute("tabindex")) : (e.setAttribute("disabled", ""), e.setAttribute("tabindex", "-1"));
                for (const e of t.querySelectorAll('[data-panzoom-action="zoomOut"]')) s ? (e.removeAttribute("disabled"), 
                e.removeAttribute("tabindex")) : (e.setAttribute("disabled", ""), e.setAttribute("tabindex", "-1"));
                for (const e of t.querySelectorAll('[data-panzoom-action="toggleZoom"],[data-panzoom-action="iterateZoom"]')) {
                    s || n ? (e.removeAttribute("disabled"), e.removeAttribute("tabindex")) : (e.setAttribute("disabled", ""), 
                    e.setAttribute("tabindex", "-1"));
                    const t = e.querySelector("g");
                    t && (t.style.display = n ? "" : "none");
                }
            }
            onDone(t, e) {
                var i;
                null === (i = e.panzoom) || void 0 === i || i.on("afterTransform", (() => {
                    this.instance.isCurrentSlide(e) && this.onRefresh();
                })), this.instance.isCurrentSlide(e) && this.onRefresh();
            }
            createContainer() {
                const t = this.instance.container;
                if (!t) return null;
                const e = this.option("parentEl") || t, i = document.createElement("div");
                return E(i, "fancybox__toolbar"), e.prepend(i), i.addEventListener("click", this.onClick, {
                    passive: !1,
                    capture: !0
                }), t && E(t, "has-toolbar"), this.container = i, i;
            }
            createEl(t) {
                const e = this.instance, i = e.carousel;
                if (!i) return null;
                if ("toggleFS" === t) return null;
                if ("fullscreen" === t && !e.fsAPI) return null;
                let s = null;
                const o = i.slides.length || 0;
                let a = 0, r = 0;
                for (const t of i.slides) (t.panzoom || "image" === t.type) && a++, ("image" === t.type || t.downloadSrc) && r++;
                if (o < 2 && [ "infobar", "prev", "next" ].includes(t)) return s;
                if (void 0 !== ht[t] && !a) return null;
                if ("download" === t && !r) return null;
                if ("thumbs" === t) {
                    const t = e.plugins.Thumbs;
                    if (!t || !t.isEnabled) return null;
                }
                if ("slideshow" === t) if (!i.plugins.Autoplay || o < 2) return null;
                if (void 0 !== ht[t]) {
                    const e = ht[t];
                    s = document.createElement("button"), s.setAttribute("title", this.instance.localize(`{{${t.toUpperCase()}}}`)), 
                    E(s, "f-button"), e.action && (s.dataset.panzoomAction = e.action), e.change && (s.dataset.panzoomChange = JSON.stringify(e.change)), 
                    s.appendChild(n(this.instance.localize(e.icon)));
                } else {
                    const e = (this.option("items") || [])[t];
                    e && (s = n(this.instance.localize(e.tpl)), "function" == typeof e.click && s.addEventListener("click", (t => {
                        t.preventDefault(), t.stopPropagation(), "function" == typeof e.click && e.click.call(this, this, t);
                    })));
                }
                const l = null == s ? void 0 : s.querySelector("svg");
                if (l) for (const [t, e] of Object.entries(pt)) l.getAttribute(t) || l.setAttribute(t, String(e));
                return s;
            }
            removeContainer() {
                const t = this.container;
                t && t.remove(), this.container = null, this.state = dt.Disabled;
                const e = this.instance.container;
                e && S(e, "has-toolbar");
            }
            attach() {
                const t = this, e = t.instance;
                e.on("Carousel.initSlides", t.onReady), e.on("done", t.onDone), e.on("reveal", t.onChange), 
                e.on("Carousel.change", t.onChange), t.onReady(t.instance);
            }
            detach() {
                const t = this, e = t.instance;
                e.off("Carousel.initSlides", t.onReady), e.off("done", t.onDone), e.off("reveal", t.onChange), 
                e.off("Carousel.change", t.onChange), t.removeContainer();
            }
        }
        Object.defineProperty(ft, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ut
        });
        const mt = {
            Hash: U,
            Html: it,
            Images: J,
            Slideshow: st,
            Thumbs: ct,
            Toolbar: ft
        }, gt = function() {
            var t = window.getSelection();
            return t && "Range" === t.type;
        };
        let bt = null, vt = null;
        const yt = new Map;
        let wt = 0;
        class xt extends m {
            get isIdle() {
                return this.idle;
            }
            get isCompact() {
                return this.option("compact");
            }
            constructor(t = [], e = {}, i = {}) {
                super(e), Object.defineProperty(this, "userSlides", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }), Object.defineProperty(this, "userPlugins", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {}
                }), Object.defineProperty(this, "idle", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }), Object.defineProperty(this, "idleTimer", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "clickTimer", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "pwt", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "ignoreFocusChange", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }), Object.defineProperty(this, "state", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: V.Init
                }), Object.defineProperty(this, "id", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }), Object.defineProperty(this, "container", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "footer", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "caption", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "carousel", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "lastFocus", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }), Object.defineProperty(this, "prevMouseMoveEvent", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, "fsAPI", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }), this.fsAPI = (() => {
                    let t, e = "", i = "", n = "";
                    return document.fullscreenEnabled ? (e = "requestFullscreen", i = "exitFullscreen", 
                    n = "fullscreenElement") : document.webkitFullscreenEnabled && (e = "webkitRequestFullscreen", 
                    i = "webkitExitFullscreen", n = "webkitFullscreenElement"), e && (t = {
                        request: function(t) {
                            return "webkitRequestFullscreen" === e ? t[e](Element.ALLOW_KEYBOARD_INPUT) : t[e]();
                        },
                        exit: function() {
                            return document[n] && document[i]();
                        },
                        isFullscreen: function() {
                            return document[n];
                        }
                    }), t;
                })(), this.id = e.id || ++wt, yt.set(this.id, this), this.userSlides = t, this.userPlugins = i, 
                queueMicrotask((() => {
                    this.init();
                }));
            }
            init() {
                if (this.state === V.Destroy) return;
                this.state = V.Init, this.attachPlugins(Object.assign(Object.assign({}, xt.Plugins), this.userPlugins)), 
                this.emit("init"), !0 === this.option("hideScrollbar") && (() => {
                    if (!W) return;
                    const t = document.body;
                    if (t.classList.contains("hide-scrollbar")) return;
                    let e = window.innerWidth - document.documentElement.getBoundingClientRect().width;
                    e < 0 && (e = 0);
                    const i = t.currentStyle || window.getComputedStyle(t), n = parseFloat(i.marginRight);
                    document.documentElement.style.setProperty("--fancybox-scrollbar-compensate", `${e}px`), 
                    n && t.style.setProperty("--fancybox-body-margin", `${n}px`), t.classList.add("hide-scrollbar");
                })(), this.initLayout(), this.scale();
                const t = () => {
                    this.initCarousel(this.userSlides), this.state = V.Ready, this.attachEvents(), this.emit("ready"), 
                    setTimeout((() => {
                        this.container && this.container.setAttribute("aria-hidden", "false");
                    }), 16);
                }, e = this.fsAPI;
                this.option("Fullscreen.autoStart") && e && !e.isFullscreen() ? e.request(this.container).then((() => t())).catch((() => t())) : t();
            }
            initLayout() {
                var t, e;
                const i = this.option("parentEl") || document.body, s = n(this.localize(this.option("tpl.main") || ""));
                s && (s.setAttribute("id", `fancybox-${this.id}`), s.setAttribute("aria-label", this.localize("{{MODAL}}")), 
                s.classList.toggle("is-compact", this.isCompact), E(s, this.option("mainClass") || ""), 
                this.container = s, this.footer = s.querySelector(".fancybox__footer"), i.appendChild(s), 
                E(document.documentElement, "with-fancybox"), bt && vt || (bt = document.createElement("span"), 
                E(bt, "fancybox-focus-guard"), bt.setAttribute("tabindex", "0"), bt.setAttribute("aria-hidden", "true"), 
                bt.setAttribute("aria-label", "Focus guard"), vt = bt.cloneNode(), null === (t = s.parentElement) || void 0 === t || t.insertBefore(bt, s), 
                null === (e = s.parentElement) || void 0 === e || e.append(vt)), this.option("animated") && (E(s, "is-animated"), 
                setTimeout((() => {
                    this.isClosing() || S(s, "is-animated");
                }), 350)), this.emit("initLayout"));
            }
            initCarousel(t) {
                const i = this.container;
                if (!i) return;
                const n = i.querySelector(".fancybox__carousel");
                if (!n) return;
                const s = this.carousel = new _(n, u({}, {
                    slides: t,
                    transition: "fade",
                    Panzoom: {
                        lockAxis: this.option("dragToClose") ? "xy" : "x",
                        infinite: !!this.option("dragToClose") && "y"
                    },
                    Dots: !1,
                    Navigation: {
                        classes: {
                            container: "fancybox__nav",
                            button: "f-button",
                            isNext: "is-next",
                            isPrev: "is-prev"
                        }
                    },
                    initialPage: this.option("startIndex"),
                    l10n: this.option("l10n")
                }, this.option("Carousel") || {}));
                s.on("*", ((t, e, ...i) => {
                    this.emit(`Carousel.${e}`, t, ...i);
                })), s.on([ "ready", "change" ], (() => {
                    var t;
                    const e = this.getSlide();
                    e && (null === (t = e.panzoom) || void 0 === t || t.updateControls()), this.manageCaption(e);
                })), this.on("Carousel.removeSlide", ((t, e, i) => {
                    i.contentEl && (i.contentEl.remove(), i.contentEl = void 0);
                    const n = i.el;
                    n && (S(n, "has-error"), S(n, "has-unknown"), S(n, `has-${i.type || "unknown"}`)), 
                    i.closeBtnEl && i.closeBtnEl.remove(), i.closeBtnEl = void 0, i.captionEl && i.captionEl.remove(), 
                    i.captionEl = void 0, i.spinnerEl && i.spinnerEl.remove(), i.spinnerEl = void 0, 
                    i.state = void 0;
                })), s.on("Panzoom.touchStart", (() => {
                    this.isCompact || this.endIdle();
                })), s.on("settle", (() => {
                    this.idleTimer || this.isCompact || !this.option("idle") || this.setIdle(), this.option("autoFocus") && this.checkFocus();
                })), this.option("dragToClose") && (s.on("Panzoom.afterTransform", ((t, i) => {
                    const n = this.getSlide();
                    if (n && e(n.el)) return;
                    const s = this.container;
                    if (s) {
                        const t = Math.abs(i.current.f), e = t < 1 ? "" : Math.max(.5, Math.min(1, 1 - t / i.contentRect.fitHeight * 1.5));
                        s.style.setProperty("--fancybox-ts", e ? "0s" : ""), s.style.setProperty("--fancybox-opacity", e + "");
                    }
                })), s.on("Panzoom.touchEnd", ((t, i, n) => {
                    var s;
                    const o = this.getSlide();
                    if (o && e(o.el)) return;
                    if (i.isMobile && document.activeElement && -1 !== [ "TEXTAREA", "INPUT" ].indexOf(null === (s = document.activeElement) || void 0 === s ? void 0 : s.nodeName)) return;
                    const a = Math.abs(i.dragOffset.y);
                    "y" === i.lockedAxis && (a >= 200 || a >= 50 && i.dragOffset.time < 300) && (n && n.cancelable && n.preventDefault(), 
                    this.close(n, "f-throwOut" + (i.current.f < 0 ? "Up" : "Down")));
                }))), s.on("change", (t => {
                    var e;
                    let i = null === (e = this.getSlide()) || void 0 === e ? void 0 : e.triggerEl;
                    if (i) {
                        const e = new CustomEvent("slideTo", {
                            bubbles: !0,
                            cancelable: !0,
                            detail: t.page
                        });
                        i.dispatchEvent(e);
                    }
                })), s.on([ "refresh", "change" ], (t => {
                    const e = this.container;
                    if (!e) return;
                    for (const i of e.querySelectorAll("[data-fancybox-current-index]")) i.innerHTML = t.page + 1;
                    for (const i of e.querySelectorAll("[data-fancybox-count]")) i.innerHTML = t.pages.length;
                    if (!t.isInfinite) {
                        for (const i of e.querySelectorAll("[data-fancybox-next]")) t.page < t.pages.length - 1 ? (i.removeAttribute("disabled"), 
                        i.removeAttribute("tabindex")) : (i.setAttribute("disabled", ""), i.setAttribute("tabindex", "-1"));
                        for (const i of e.querySelectorAll("[data-fancybox-prev]")) t.page > 0 ? (i.removeAttribute("disabled"), 
                        i.removeAttribute("tabindex")) : (i.setAttribute("disabled", ""), i.setAttribute("tabindex", "-1"));
                    }
                    const i = this.getSlide();
                    if (!i) return;
                    let n = i.downloadSrc || "";
                    n || "image" !== i.type || i.error || "string" != typeof i.src || (n = i.src);
                    const s = "disabled", o = "tabindex", a = "download", r = "href";
                    for (const t of e.querySelectorAll("[data-fancybox-download]")) {
                        const e = i.downloadFilename;
                        n ? (t.removeAttribute(s), t.removeAttribute(o), t.setAttribute(r, n), t.setAttribute(a, e || n), 
                        t.setAttribute("target", "_blank")) : (t.setAttribute(s, ""), t.setAttribute(o, "-1"), 
                        t.removeAttribute(r), t.removeAttribute(a));
                    }
                })), this.emit("initCarousel");
            }
            attachEvents() {
                const t = this, e = t.container;
                if (!e) return;
                e.addEventListener("click", t.onClick, {
                    passive: !1,
                    capture: !1
                }), e.addEventListener("wheel", t.onWheel, {
                    passive: !1,
                    capture: !1
                }), document.addEventListener("keydown", t.onKeydown, {
                    passive: !1,
                    capture: !0
                }), document.addEventListener("visibilitychange", t.onVisibilityChange, !1), document.addEventListener("mousemove", t.onMousemove), 
                t.option("trapFocus") && document.addEventListener("focus", t.onFocus, !0), window.addEventListener("resize", t.onResize);
                const i = window.visualViewport;
                i && (i.addEventListener("scroll", t.onResize), i.addEventListener("resize", t.onResize));
            }
            detachEvents() {
                const t = this, e = t.container;
                if (!e) return;
                document.removeEventListener("keydown", t.onKeydown, {
                    passive: !1,
                    capture: !0
                }), e.removeEventListener("wheel", t.onWheel, {
                    passive: !1,
                    capture: !1
                }), e.removeEventListener("click", t.onClick, {
                    passive: !1,
                    capture: !1
                }), document.removeEventListener("mousemove", t.onMousemove), window.removeEventListener("resize", t.onResize);
                const i = window.visualViewport;
                i && (i.removeEventListener("resize", t.onResize), i.removeEventListener("scroll", t.onResize)), 
                document.removeEventListener("visibilitychange", t.onVisibilityChange, !1), document.removeEventListener("focus", t.onFocus, !0);
            }
            scale() {
                const t = this.container;
                if (!t) return;
                const e = window.visualViewport, i = Math.max(1, (null == e ? void 0 : e.scale) || 1);
                let n = "", s = "", o = "";
                if (e && i > 1) {
                    let t = `${e.offsetLeft}px`, a = `${e.offsetTop}px`;
                    n = e.width * i + "px", s = e.height * i + "px", o = `translate3d(${t}, ${a}, 0) scale(${1 / i})`;
                }
                t.style.transform = o, t.style.width = n, t.style.height = s;
            }
            onClick(t) {
                var e, i;
                const {container: n, isCompact: s} = this;
                if (!n || this.isClosing()) return;
                !s && this.option("idle") && this.resetIdle();
                const o = document.activeElement;
                if (gt() && o && n.contains(o)) return;
                const a = t.composedPath()[0];
                if (a === (null === (e = this.carousel) || void 0 === e ? void 0 : e.container)) return;
                if (a.closest(".f-spinner") || a.closest("[data-fancybox-close]")) return t.preventDefault(), 
                void this.close(t);
                if (a.closest("[data-fancybox-prev]")) return t.preventDefault(), void this.prev();
                if (a.closest("[data-fancybox-next]")) return t.preventDefault(), void this.next();
                if (s && "image" === (null === (i = this.getSlide()) || void 0 === i ? void 0 : i.type)) return void (this.clickTimer ? (clearTimeout(this.clickTimer), 
                this.clickTimer = null) : this.clickTimer = setTimeout((() => {
                    this.toggleIdle(), this.clickTimer = null;
                }), 350));
                if (this.emit("click", t), t.defaultPrevented) return;
                let r = !1;
                if (a.closest(".fancybox__content")) {
                    if (o) {
                        if (o.closest("[contenteditable]")) return;
                        a.matches(X) || o.blur();
                    }
                    if (gt()) return;
                    r = this.option("contentClick");
                } else a.closest(".fancybox__carousel") && !a.matches(X) && (r = this.option("backdropClick"));
                "close" === r ? (t.preventDefault(), this.close(t)) : "next" === r ? (t.preventDefault(), 
                this.next()) : "prev" === r && (t.preventDefault(), this.prev());
            }
            onWheel(t) {
                var e;
                let i = this.option("wheel", t);
                (null === (e = t.target) || void 0 === e ? void 0 : e.closest(".fancybox__thumbs")) && (i = "slide");
                const n = "slide" === i, s = [ -t.deltaX || 0, -t.deltaY || 0, -t.detail || 0 ].reduce((function(t, e) {
                    return Math.abs(e) > Math.abs(t) ? e : t;
                })), o = Math.max(-1, Math.min(1, s)), a = Date.now();
                this.pwt && a - this.pwt < 300 ? n && t.preventDefault() : (this.pwt = a, this.emit("wheel", t), 
                t.defaultPrevented || ("close" === i ? (t.preventDefault(), this.close(t)) : "slide" === i && (t.preventDefault(), 
                this[o > 0 ? "prev" : "next"]())));
            }
            onKeydown(t) {
                if (!this.isTopmost()) return;
                this.isCompact || !this.option("idle") || this.isClosing() || this.resetIdle();
                const e = t.key, i = this.option("keyboard");
                if (!i || t.ctrlKey || t.altKey || t.shiftKey) return;
                const n = t.composedPath()[0], s = document.activeElement && document.activeElement.classList, o = s && s.contains("f-button") || n.dataset.carouselPage || n.dataset.carouselIndex;
                if ("Escape" !== e && !o && x(n)) if (n.isContentEditable || -1 !== [ "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO" ].indexOf(n.nodeName)) return;
                this.emit("keydown", e, t);
                const a = i[e];
                "function" == typeof this[a] && (t.preventDefault(), this[a]());
            }
            onResize() {
                const t = this.container;
                if (!t) return;
                const e = this.isCompact;
                t.classList.toggle("is-compact", e), this.manageCaption(this.getSlide()), this.isCompact ? this.clearIdle() : this.endIdle(), 
                this.scale(), this.emit("resize");
            }
            onFocus(t) {
                this.isTopmost() && this.checkFocus(t);
            }
            onMousemove(t) {
                this.prevMouseMoveEvent = t, !this.isCompact && this.option("idle") && this.resetIdle();
            }
            onVisibilityChange() {
                "visible" === document.visibilityState ? this.checkFocus() : this.endIdle();
            }
            manageCloseBtn(t) {
                const e = this.optionFor(t, "closeButton") || !1;
                if ("auto" === e) {
                    const t = this.plugins.Toolbar;
                    if (t && t.state === dt.Ready) return;
                }
                if (!e) return;
                if (!t.contentEl || t.closeBtnEl) return;
                const i = this.option("tpl.closeButton");
                if (i) {
                    const e = n(this.localize(i));
                    t.closeBtnEl = t.contentEl.appendChild(e), t.el && E(t.el, "has-close-btn");
                }
            }
            manageCaption(t) {
                var e, i;
                const n = "fancybox__caption", s = "has-caption", o = this.container;
                if (!o) return;
                const a = this.isCompact || this.option("commonCaption"), r = !a;
                if (this.caption && this.stop(this.caption), r && this.caption && (this.caption.remove(), 
                this.caption = null), a && !this.caption) for (const t of (null === (e = this.carousel) || void 0 === e ? void 0 : e.slides) || []) t.captionEl && (t.captionEl.remove(), 
                t.captionEl = void 0, S(t.el, s), null === (i = t.el) || void 0 === i || i.removeAttribute("aria-labelledby"));
                if (t || (t = this.getSlide()), !t || a && !this.isCurrentSlide(t)) return;
                const l = t.el;
                let c = this.optionFor(t, "caption", "");
                if ("string" != typeof c || !c.length) return void (a && this.caption && this.animate(this.caption, "f-fadeOut", (() => {
                    var t;
                    null === (t = this.caption) || void 0 === t || t.remove(), this.caption = null;
                })));
                let h = null;
                if (r) {
                    if (h = t.captionEl || null, l && !h) {
                        const e = `fancybox__caption_${this.id}_${t.index}`;
                        h = document.createElement("div"), E(h, n), h.setAttribute("id", e), t.captionEl = l.appendChild(h), 
                        E(l, s), l.setAttribute("aria-labelledby", e);
                    }
                } else {
                    if (h = this.caption, h || (h = o.querySelector("." + n)), !h) {
                        h = document.createElement("div"), h.dataset.fancyboxCaption = "", E(h, n), h.innerHTML = c;
                        (this.footer || o).prepend(h);
                    }
                    E(o, s), this.caption = h;
                }
                h && (h.innerHTML = c);
            }
            checkFocus(t) {
                var e;
                const i = document.activeElement || null;
                i && (null === (e = this.container) || void 0 === e ? void 0 : e.contains(i)) || this.focus(t);
            }
            focus(t) {
                var e;
                if (this.ignoreFocusChange) return;
                const i = document.activeElement || null, n = (null == t ? void 0 : t.target) || null, s = this.container, o = this.getSlide();
                if (!s || !(null === (e = this.carousel) || void 0 === e ? void 0 : e.viewport)) return;
                if (!t && i && s.contains(i)) return;
                const a = o && o.state === Z.Ready ? o.el : null;
                if (!a || a.contains(i) || s === i) return;
                t && t.cancelable && t.preventDefault(), this.ignoreFocusChange = !0;
                const r = Array.from(s.querySelectorAll(X));
                let l = [], c = null;
                for (let t of r) {
                    const e = !t.offsetParent || t.closest('[aria-hidden="true"]'), i = a && a.contains(t), n = !this.carousel.viewport.contains(t);
                    t === s || (i || n) && !e ? (l.push(t), void 0 !== t.dataset.origTabindex && (t.tabIndex = parseFloat(t.dataset.origTabindex)), 
                    t.removeAttribute("data-orig-tabindex"), !t.hasAttribute("autoFocus") && c || (c = t)) : (t.dataset.origTabindex = void 0 === t.dataset.origTabindex ? t.getAttribute("tabindex") || void 0 : t.dataset.origTabindex, 
                    t.tabIndex = -1);
                }
                let h = null;
                t ? (!n || l.indexOf(n) < 0) && (h = c || s, l.length && (i === vt ? h = l[0] : this.lastFocus !== s && i !== bt || (h = l[l.length - 1]))) : h = o && "image" === o.type ? s : c || s, 
                h && Y(h), this.lastFocus = document.activeElement, this.ignoreFocusChange = !1;
            }
            next() {
                const t = this.carousel;
                t && t.pages.length > 1 && t.slideNext();
            }
            prev() {
                const t = this.carousel;
                t && t.pages.length > 1 && t.slidePrev();
            }
            jumpTo(...t) {
                this.carousel && this.carousel.slideTo(...t);
            }
            isTopmost() {
                var t;
                return (null === (t = xt.getInstance()) || void 0 === t ? void 0 : t.id) == this.id;
            }
            animate(t = null, e = "", i) {
                if (!t || !e) return void (i && i());
                this.stop(t);
                const n = s => {
                    s.target === t && t.dataset.animationName && (t.removeEventListener("animationend", n), 
                    delete t.dataset.animationName, i && i(), S(t, e));
                };
                t.dataset.animationName = e, t.addEventListener("animationend", n), E(t, e);
            }
            stop(t) {
                t && t.dispatchEvent(new CustomEvent("animationend", {
                    bubbles: !1,
                    cancelable: !0,
                    currentTarget: t
                }));
            }
            setContent(t, e = "", i = !0) {
                if (this.isClosing()) return;
                const s = t.el;
                if (!s) return;
                let o = null;
                if (x(e) ? o = e : (o = n(e + ""), x(o) || (o = document.createElement("div"), o.innerHTML = e + "")), 
                [ "img", "picture", "iframe", "video", "audio" ].includes(o.nodeName.toLowerCase())) {
                    const t = document.createElement("div");
                    t.appendChild(o), o = t;
                }
                x(o) && t.filter && !t.error && (o = o.querySelector(t.filter)), o && x(o) ? (E(o, "fancybox__content"), 
                t.id && o.setAttribute("id", t.id), "none" !== o.style.display && "none" !== getComputedStyle(o).getPropertyValue("display") || (o.style.display = t.display || this.option("defaultDisplay") || "flex"), 
                s.classList.add(`has-${t.error ? "error" : t.type || "unknown"}`), s.prepend(o), 
                t.contentEl = o, i && this.revealContent(t), this.manageCloseBtn(t), this.manageCaption(t)) : this.setError(t, "{{ELEMENT_NOT_FOUND}}");
            }
            revealContent(t, e) {
                const i = t.el, n = t.contentEl;
                i && n && (this.emit("reveal", t), this.hideLoading(t), t.state = Z.Opening, (e = this.isOpeningSlide(t) ? void 0 === e ? this.optionFor(t, "showClass") : e : "f-fadeIn") ? this.animate(n, e, (() => {
                    this.done(t);
                })) : this.done(t));
            }
            done(t) {
                this.isClosing() || (t.state = Z.Ready, this.emit("done", t), E(t.el, "is-done"), 
                this.isCurrentSlide(t) && this.option("autoFocus") && queueMicrotask((() => {
                    this.option("autoFocus") && (this.option("autoFocus") ? this.focus() : this.checkFocus());
                })), this.isOpeningSlide(t) && !this.isCompact && this.option("idle") && this.setIdle());
            }
            isCurrentSlide(t) {
                const e = this.getSlide();
                return !(!t || !e) && e.index === t.index;
            }
            isOpeningSlide(t) {
                var e, i;
                return null === (null === (e = this.carousel) || void 0 === e ? void 0 : e.prevPage) && t.index === (null === (i = this.getSlide()) || void 0 === i ? void 0 : i.index);
            }
            showLoading(t) {
                t.state = Z.Loading;
                const e = t.el;
                if (!e) return;
                E(e, "is-loading"), this.emit("loading", t), t.spinnerEl || setTimeout((() => {
                    if (!this.isClosing() && !t.spinnerEl && t.state === Z.Loading) {
                        let i = n(w);
                        t.spinnerEl = i, e.prepend(i), this.animate(i, "f-fadeIn");
                    }
                }), 250);
            }
            hideLoading(t) {
                const e = t.el;
                if (!e) return;
                const i = t.spinnerEl;
                this.isClosing() ? null == i || i.remove() : (S(e, "is-loading"), i && this.animate(i, "f-fadeOut", (() => {
                    i.remove();
                })), t.state === Z.Loading && (this.emit("loaded", t), t.state = Z.Ready));
            }
            setError(t, e) {
                if (this.isClosing()) return;
                const i = new Event("error", {
                    bubbles: !0,
                    cancelable: !0
                });
                if (this.emit("error", i, t), i.defaultPrevented) return;
                t.error = e, this.hideLoading(t), this.clearContent(t);
                const n = document.createElement("div");
                n.classList.add("fancybox-error"), n.innerHTML = this.localize(e || "<p>{{ERROR}}</p>"), 
                this.setContent(t, n);
            }
            clearContent(t) {
                var e;
                null === (e = this.carousel) || void 0 === e || e.emit("removeSlide", t);
            }
            getSlide() {
                var t;
                const e = this.carousel;
                return (null === (t = null == e ? void 0 : e.pages[null == e ? void 0 : e.page]) || void 0 === t ? void 0 : t.slides[0]) || void 0;
            }
            close(t, e) {
                if (this.isClosing()) return;
                const i = new Event("shouldClose", {
                    bubbles: !0,
                    cancelable: !0
                });
                if (this.emit("shouldClose", i, t), i.defaultPrevented) return;
                t && t.cancelable && (t.preventDefault(), t.stopPropagation());
                const n = this.fsAPI, s = () => {
                    this.proceedClose(t, e);
                };
                n && n.isFullscreen() ? Promise.resolve(n.exit()).then((() => s())) : s();
            }
            clearIdle() {
                this.idleTimer && clearTimeout(this.idleTimer), this.idleTimer = null;
            }
            setIdle(t = !1) {
                const e = () => {
                    this.clearIdle(), this.idle = !0, E(this.container, "is-idle"), this.emit("setIdle");
                };
                if (this.clearIdle(), !this.isClosing()) if (t) e(); else {
                    const t = this.option("idle");
                    t && (this.idleTimer = setTimeout(e, t));
                }
            }
            endIdle() {
                this.clearIdle(), this.idle && !this.isClosing() && (this.idle = !1, S(this.container, "is-idle"), 
                this.emit("endIdle"));
            }
            resetIdle() {
                this.endIdle(), this.setIdle();
            }
            toggleIdle() {
                this.idle ? this.endIdle() : this.setIdle(!0);
            }
            toggleFullscreen() {
                const t = this.fsAPI;
                t && (t.isFullscreen() ? t.exit() : this.container && t.request(this.container));
            }
            isClosing() {
                return [ V.Closing, V.CustomClosing, V.Destroy ].includes(this.state);
            }
            proceedClose(t, e) {
                var i, n;
                this.state = V.Closing, this.clearIdle(), this.detachEvents();
                const s = this.container, o = this.carousel, a = this.getSlide(), r = a && this.option("placeFocusBack") ? a.triggerEl || this.option("triggerEl") : null;
                if (r && (N(r) ? Y(r) : r.focus()), s && (E(s, "is-closing"), s.setAttribute("aria-hidden", "true"), 
                this.option("animated") && E(s, "is-animated"), s.style.pointerEvents = "none"), 
                o) {
                    o.clearTransitions(), null === (i = o.panzoom) || void 0 === i || i.destroy(), null === (n = o.plugins.Navigation) || void 0 === n || n.detach();
                    for (const t of o.slides) {
                        t.state = Z.Closing, this.hideLoading(t);
                        const e = t.contentEl;
                        e && this.stop(e);
                        const i = null == t ? void 0 : t.panzoom;
                        i && (i.stop(), i.detachEvents(), i.detachObserver()), this.isCurrentSlide(t) || o.emit("removeSlide", t);
                    }
                }
                this.emit("close", t), this.state !== V.CustomClosing ? (void 0 === e && a && (e = this.optionFor(a, "hideClass")), 
                e && a ? (this.animate(a.contentEl, e, (() => {
                    o && o.emit("removeSlide", a);
                })), setTimeout((() => {
                    this.destroy();
                }), 500)) : this.destroy()) : setTimeout((() => {
                    this.destroy();
                }), 500);
            }
            destroy() {
                var t;
                if (this.state === V.Destroy) return;
                this.state = V.Destroy, null === (t = this.carousel) || void 0 === t || t.destroy();
                const e = this.container;
                e && e.remove(), yt.delete(this.id);
                const i = xt.getInstance();
                i ? i.focus() : (bt && (bt.remove(), bt = null), vt && (vt.remove(), vt = null), 
                S(document.documentElement, "with-fancybox"), (() => {
                    if (!W) return;
                    const t = document, e = t.body;
                    e.classList.remove("hide-scrollbar"), e.style.setProperty("--fancybox-body-margin", ""), 
                    t.documentElement.style.setProperty("--fancybox-scrollbar-compensate", "");
                })(), this.emit("destroy"));
            }
            static bind(t, e, i) {
                if (!W) return;
                let n, s = "", o = {};
                if (void 0 === t ? n = document.body : "string" == typeof t ? (n = document.body, 
                s = t, "object" == typeof e && (o = e || {})) : (n = t, "string" == typeof e && (s = e), 
                "object" == typeof i && (o = i || {})), !n || !x(n)) return;
                s = s || "[data-fancybox]";
                const a = xt.openers.get(n) || new Map;
                a.set(s, o), xt.openers.set(n, a), 1 === a.size && n.addEventListener("click", xt.fromEvent);
            }
            static unbind(t, e) {
                let i, n = "";
                if ("string" == typeof t ? (i = document.body, n = t) : (i = t, "string" == typeof e && (n = e)), 
                !i) return;
                const s = xt.openers.get(i);
                s && n && s.delete(n), n && s || (xt.openers.delete(i), i.removeEventListener("click", xt.fromEvent));
            }
            static destroy() {
                let t;
                for (;t = xt.getInstance(); ) t.destroy();
                for (const t of xt.openers.keys()) t.removeEventListener("click", xt.fromEvent);
                xt.openers = new Map;
            }
            static fromEvent(t) {
                if (t.defaultPrevented) return;
                if (t.button && 0 !== t.button) return;
                if (t.ctrlKey || t.metaKey || t.shiftKey) return;
                let e = t.composedPath()[0];
                const i = e.closest("[data-fancybox-trigger]");
                if (i) {
                    const t = i.dataset.fancyboxTrigger || "", n = document.querySelectorAll(`[data-fancybox="${t}"]`), s = parseInt(i.dataset.fancyboxIndex || "", 10) || 0;
                    e = n[s] || e;
                }
                if (!(e && e instanceof Element)) return;
                let n, s, o, a;
                if ([ ...xt.openers ].reverse().find((([t, i]) => !(!t.contains(e) || ![ ...i ].reverse().find((([i, r]) => {
                    let l = e.closest(i);
                    return !!l && (n = t, s = i, o = l, a = r, !0);
                }))))), !n || !s || !o) return;
                a = a || {}, t.preventDefault(), e = o;
                let r = [], l = u({}, q, a);
                l.event = t, l.triggerEl = e, l.delegate = i;
                const c = l.groupAll, h = l.groupAttr, d = h && e ? e.getAttribute(`${h}`) : "";
                if ((!e || d || c) && (r = [].slice.call(n.querySelectorAll(s))), e && !c && (r = d ? r.filter((t => t.getAttribute(`${h}`) === d)) : [ e ]), 
                !r.length) return;
                const p = xt.getInstance();
                return p && p.options.triggerEl && r.indexOf(p.options.triggerEl) > -1 ? void 0 : (e && (l.startIndex = r.indexOf(e)), 
                xt.fromNodes(r, l));
            }
            static fromSelector(t, e) {
                let i = null, n = "";
                if ("string" == typeof t ? (i = document.body, n = t) : t instanceof HTMLElement && "string" == typeof e && (i = t, 
                n = e), !i || !n) return !1;
                const s = xt.openers.get(i);
                if (!s) return !1;
                const o = s.get(n);
                return !!o && xt.fromNodes(Array.from(i.querySelectorAll(n)), o);
            }
            static fromNodes(t, e) {
                e = u({}, q, e || {});
                const i = [];
                for (const n of t) {
                    const t = n.dataset || {}, s = t.src || n.getAttribute("href") || n.getAttribute("currentSrc") || n.getAttribute("src") || void 0;
                    let o;
                    const a = e.delegate;
                    let r;
                    a && i.length === e.startIndex && (o = a instanceof HTMLImageElement ? a : a.querySelector("img:not([aria-hidden])")), 
                    o || (o = n instanceof HTMLImageElement ? n : n.querySelector("img:not([aria-hidden])")), 
                    o && (r = o.currentSrc || o.src || void 0, !r && o.dataset && (r = o.dataset.lazySrc || o.dataset.src || void 0));
                    const l = {
                        src: s,
                        triggerEl: n,
                        thumbEl: o,
                        thumbElSrc: r,
                        thumbSrc: r
                    };
                    for (const e in t) "fancybox" !== e && (l[e] = t[e] + "");
                    i.push(l);
                }
                return new xt(i, e);
            }
            static getInstance(t) {
                if (t) return yt.get(t);
                return Array.from(yt.values()).reverse().find((t => !t.isClosing() && t)) || null;
            }
            static getSlide() {
                var t;
                return (null === (t = xt.getInstance()) || void 0 === t ? void 0 : t.getSlide()) || null;
            }
            static show(t = [], e = {}) {
                return new xt(t, e);
            }
            static next() {
                const t = xt.getInstance();
                t && t.next();
            }
            static prev() {
                const t = xt.getInstance();
                t && t.prev();
            }
            static close(t = !0, ...e) {
                if (t) for (const t of yt.values()) t.close(...e); else {
                    const t = xt.getInstance();
                    t && t.close(...e);
                }
            }
        }
        Object.defineProperty(xt, "version", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "5.0.19"
        }), Object.defineProperty(xt, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: q
        }), Object.defineProperty(xt, "Plugins", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: mt
        }), Object.defineProperty(xt, "openers", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: new Map
        });
        window.onload = () => {
            correctInit();
            categoryInit();
            window.addEventListener("resize", (e => {
                if (e.target.innerWidth > 767.98) document.body.classList.remove("menu-show");
                resetCorrectContainers(getCorrectContainers());
                correctContainers(getCorrectContainers());
            }));
            document.addEventListener("click", (e => {
                const targetElement = e.target;
                if (targetElement.closest(".menu__icon")) {
                    document.body.classList.toggle("menu-show");
                    document.body.classList.toggle("overflow-hidden");
                } else if (!targetElement.closest(".menu__body")) {
                    document.body.classList.remove("menu-show");
                    document.body.classList.remove("overflow-hidden");
                }
                if (targetElement.hasAttribute("data-fancybox")) document.querySelector(".fancybox__container").style.maxWidth = "none";
            }));
            function getCorrectContainers() {
                return document.querySelectorAll("[data-correct-container]");
            }
            function correctContainers(containers) {
                let loggsResult = [];
                containers.forEach((container => {
                    loggsResult.push(correctContainer(container));
                }));
                correctLoggs(loggsResult);
            }
            function correctLoggs(loggsResult) {
                const containerIndex = 0;
                const dataContainerIndex = 1;
                let index = 0;
                loggsResult.forEach((log => {
                    if (log[containerIndex]) {
                        console.log(`Контейнер №${++index} необходимо скорректировать по высоте`);
                        console.log(log[dataContainerIndex]);
                    }
                }));
            }
            function correctContainer(container) {
                const cols = container.querySelectorAll("[data-correct-col]");
                const cells = container.querySelectorAll("[data-correct-row]");
                const colCount = cols.length;
                const rowCount = cells.length / colCount;
                const rows = [];
                for (let i = 0; i < rowCount; i++) {
                    const temp = [];
                    for (let j = 0; j < colCount; j++) temp.push(0);
                    rows.push(temp);
                }
                for (let i = 0; i < cols.length; i++) {
                    const curCol = cols[i].querySelectorAll("[data-correct-row]");
                    for (let j = 0; j < curCol.length; j++) rows[j][i] = curCol[j];
                }
                const dataHeightGeneral = [];
                let dataHeightRows = [];
                for (let i = 0; i < rowCount; i++) {
                    const temp = [];
                    for (let j = 0; j < colCount; j++) temp.push(0);
                    dataHeightRows.push(temp);
                }
                let dataHeightCols = [];
                cells.forEach((row => {
                    dataHeightGeneral.push(row.offsetHeight);
                }));
                let index = 0;
                let colData = [];
                for (let i = 0; i <= dataHeightGeneral.length; i++) {
                    if (i > 0 && i % rowCount === 0) {
                        index = 0;
                        dataHeightCols.push(colData);
                        colData = [];
                        if (i === dataHeightGeneral.length) break;
                    }
                    colData[index++] = dataHeightGeneral[i];
                }
                for (let i = 0; i < dataHeightCols.length; i++) for (let j = 0; j < dataHeightCols[i].length; j++) dataHeightRows[j][i] = dataHeightCols[i][j];
                let rowsObjects = [];
                for (let i = 0; i < dataHeightRows.length; i++) {
                    let rowObject = {
                        isCorrect: false,
                        maxHeight: 0
                    };
                    let maxVal = dataHeightRows[i][0];
                    for (let j = 1; j < dataHeightRows[i].length; j++) if (Math.max(dataHeightRows[i][j]) > maxVal) {
                        maxVal = Math.max(dataHeightRows[i][j]);
                        rowObject.isCorrect = true;
                    }
                    rowObject.maxHeight = maxVal;
                    rowsObjects.push(rowObject);
                }
                let isContainerCorrect = false;
                for (let i = 0; i < rowsObjects.length; i++) if (rowsObjects[i].isCorrect) {
                    isContainerCorrect = true;
                    for (let j = 0; j < colCount; j++) rows[i][j].style.height = `${rowsObjects[i].maxHeight}px`;
                }
                return [ isContainerCorrect, rowsObjects ];
            }
            function resetCorrectContainers(containers) {
                containers.forEach((container => {
                    resetCorrectContainer(container);
                }));
            }
            function resetCorrectContainer(container) {
                const cells = container.querySelectorAll("[data-correct-row]");
                cells.forEach((cell => {
                    cell.style.removeProperty("height");
                }));
            }
            function correctInit() {
                const correctItemsContainer = getCorrectContainers();
                if (correctItemsContainer.length) {
                    console.log(`Найдено контейнеров для корректировки: ${correctItemsContainer.length}`);
                    correctContainers(correctItemsContainer);
                }
            }
            function categoryGetButtons() {
                return document.querySelectorAll("[data-category-button]");
            }
            function categoryGetContainers() {
                return document.querySelectorAll("[data-category-container]");
            }
            function categoryEventsInit(categoryButtons, callback) {
                categoryButtons.forEach((categoryButton => {
                    categoryButton.addEventListener("click", (ev => {
                        callback(categoryButton, ev);
                    }));
                }));
            }
            function categoryAction(button, event) {
                const categoryButtons = categoryGetButtons();
                const categoryContainers = categoryGetContainers();
                categoryContainersActionHide(categoryContainers);
                categoryButtonsClassRemove(categoryButtons);
                const categoryContainer = document.querySelector(`[data-category-container="${button.dataset.categoryButton}"]`);
                categoryContainer.style.removeProperty("display");
                button.classList.add("_active");
                resetCorrectContainers(getCorrectContainers());
                correctContainers(getCorrectContainers());
                console.log("Контейнер показан");
            }
            function categoryContainersActionHide(categoryContainers) {
                let count = 0;
                categoryContainers.forEach((container => {
                    container.style.display = "none";
                    count++;
                }));
                console.log(`Контейнеров скрыто: ${count}`);
            }
            function categoryContainersHide(categoryContainers) {
                let count = 0;
                categoryContainers.forEach((container => {
                    if (!container.classList.contains("_active")) {
                        container.style.display = "none";
                        count++;
                    }
                }));
                console.log(`Контейнеров скрыто: ${count}`);
            }
            function categoryButtonsClassRemove(categoryButtons) {
                categoryButtons.forEach((button => {
                    button.classList.remove("_active");
                }));
            }
            function categoryInit() {
                const categoryButtons = categoryGetButtons();
                const categoryContainers = categoryGetContainers();
                categoryEventsInit(categoryButtons, categoryAction);
                if (categoryButtons.length === categoryContainers.length) console.log(`Катерогий найдено: ${categoryButtons.length}`);
                categoryContainersHide(categoryContainers);
            }
        };
        xt.bind("[data-fancybox]", {});
        window["FLS"] = true;
        isWebp();
        headerScroll();
    })();
})();