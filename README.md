# basicInterviewStuff


**1. What is a potential pitfall with using typeof bar === "object" to determine if bar is an object? How can this pitfall be avoided?**

Although `typeof bar === "object"` is a reliable way of checking if `bar` is an object, the surprising gotcha in JavaScript is that `null` is also considered an object!

Therefore, the following code will, to the surprise of most developers, log `true` (not `false`) to the console:

`var bar = null;`
`console.log(typeof bar === "object");  // logs true!`
As long as one is aware of this, the problem can easily be avoided by also checking if bar is null:

`console.log((bar !== null) && (typeof bar === "object"));  // logs false`

**2. What is the significance of, and reason for, wrapping the entire content of a JavaScript source file in a function block?**

This is an increasingly common practice, employed by many popular JavaScript libraries (jQuery, Node.js, etc.). This technique creates a closure around the entire contents of the file which, perhaps most importantly, creates a private namespace and thereby helps avoid potential name clashes between different JavaScript modules and libraries.

Another feature of this technique is to allow for an easily referenceable (presumably shorter) alias for a global variable. This is often used, for example, in jQuery plugins. jQuery allows you to disable the `$` reference to the jQuery namespace, using `jQuery.noConflict()`. If this has been done, your code can still use `$` employing this closure technique, as follows:

`(function($) { /* jQuery plugin code referencing $ */ } )(jQuery);`

**3. What is the significance, and what are the benefits, of including 'use strict' at the beginning of a JavaScript source file?**

The short and most important answer here is that `use strict` is a way to voluntarily enforce stricter parsing and error handling on your JavaScript code at runtime. Code errors that would otherwise have been ignored or would have failed silently will now generate errors or throw exceptions. In general, it is a good practice.

Some of the key benefits of strict mode include:

* Makes debugging easier. Code errors that would otherwise have been ignored or would have failed silently will now generate errors or throw exceptions, alerting you sooner to problems in your code and directing you more quickly to their source.
* Prevents accidental globals. Without strict mode, assigning a value to an undeclared variable automatically creates a global variable with that name. This is one of the most common errors in JavaScript. In strict mode, attempting to do so throws an error.
* Eliminates `this` coercion. Without strict mode, a reference to a `this` value of null or undefined is automatically coerced to the global. This can cause many headfakes and pull-out-your-hair kind of bugs. In strict mode, referencing a `this` value of null or undefined throws an error.
* Disallows duplicate property names or parameter values. Strict mode throws an error when it detects a duplicate named property in an object (e.g., `var object = {foo: "bar", foo: "baz"};`) or a duplicate named argument for a function (e.g., `function foo(val1, val2, val1){}`), thereby catching what is almost certainly a bug in your code that you might otherwise have wasted lots of time tracking down.
* Makes `eval()` safer. There are some differences in the way `eval()` behaves in strict mode and in non-strict mode. Most significantly, in strict mode, variables and functions declared inside of an `eval()` statement are not created in the containing scope (they are created in the containing scope in non-strict mode, which can also be a common source of problems).
* Throws error on invalid usage of `delete`. The delete operator (used to remove properties from objects) cannot be used on non-configurable properties of the object. Non-strict code will fail silently when an attempt is made to `delete` a non-configurable property, whereas strict mode will throw an error in such a case.

**4. What is NaN? What is its type? How can you reliably test if a value is equal to NaN?**

The NaN property represents a value that is “not a number”. This special value results from an operation that could not be performed either because one of the operands was non-numeric (e.g., "abc" / 4), or because the result of the operation is non-numeric (e.g., an attempt to divide by zero).

While this seems straightforward enough, there are a couple of somewhat surprising characteristics of NaN that can result in hair-pulling bugs if one is not aware of them.

For one thing, although NaN means “not a number”, its type is, believe it or not, Number:

`console.log(typeof NaN === "number");  // logs "true"`
Additionally, NaN compared to anything – even itself! – is false:

`console.log(NaN === NaN);  // logs "false"`
A semi-reliable way to test whether a number is equal to NaN is with the built-in function isNaN(), but even using isNaN() is an imperfect solution.

A better solution would either be to use value !== value, which would only produce true if the value is equal to NaN. Also, ES6 offers a new Number.isNaN() function, which is a different and more reliable than the old global isNaN() function.

**5. What will the code below output? Explain your answer.**

`console.log(0.1 + 0.2);`

`console.log(0.1 + 0.2 == 0.3);`

An educated answer to this question would simply be: “You can’t be sure. it might print out “0.3” and “true”, or it might not. Numbers in JavaScript are all treated with floating point precision, and as such, may not always yield the expected results.”

The example provided above is classic case that demonstrates this issue. Surprisingly, it will print out:

`0.30000000000000004`

`false`

**6. Discuss possible ways to write a function isInteger(x) that determines if x is an integer.**

This may sound trivial and, in fact, it is trivial with ECMAscript 6 which introduces a new `Number.isInteger()` function for precisely this purpose. However, prior to ECMAScript 6, this is a bit more complicated, since no equivalent of the `Number.isInteger()` method is provided.

The issue is that, in the ECMAScript specification, integers only exist conceptually; i.e., numeric values are always stored as floating point values.

With that in mind, the simplest and cleanest pre-ECMAScript-6 solution (which is also sufficiently robust to return false even if a non-numeric value such as a string or null is passed to the function) would be the following: `function isInteger(x) { return (x^0) === x; } `

The following solution would also work, although not as elegant as the one above: `function isInteger(x) { return Math.round(x) === x; }`

Note that Math.ceil() or Math.floor() could be used equally well (instead of Math.round()) in the above implementation.

Or alternatively:`function isInteger(x) { return (typeof x === 'number') && (x % 1 === 0); }`

One fairly common incorrect solution is the following: `function isInteger(x) { return parseInt(x, 10) === x; }`

While this parseInt-based approach will work well for many values of x, once x becomes quite large, it will fail to work properly. The problem is that parseInt() coerces its first parameter to a string before parsing digits. Therefore, once the number becomes sufficiently large, its string representation will be presented in exponential form (e.g., 1e+21). Accordingly, parseInt() will then try to parse 1e+21, but will stop parsing when it reaches the e character and will therefore return a value of 1. Observe:

`> String(1000000000000000000000)`

`'1e+21'`

`> parseInt(1000000000000000000000, 10)`

`1`

`> parseInt(1000000000000000000000, 10) === 1000000000000000000000`

`false`

**7. What will be the output when the following code is executed? Explain.**

`console.log(false == '0')`
`console.log(false === '0')`

The code will output:

`true`

`false`

In JavaScript, there are two sets of equality operators. The triple-equal operator `===` behaves like any traditional equality operator would: evaluates to true if the two expressions on either of its sides have the same type and the same value. The double-equal operator, however, tries to coerce the values before comparing them. It is therefore generally good practice to use the `===` rather than `==`. The same holds true for `!==` vs `!=`.