/**
 * @fileoverview Disallow using the method includes
 * @author froguard
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/no-includes');
var RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
var errors = [{ message: '(Array|String).includes is not supported in IOS8-.'}];

ruleTester.run("no-includes", rule, {
    valid: [
        { 
            code: "_.includes(arr, a) && lodash.includes([1, 2, 3], 2);", 
            options: [
                {
                    'ignore': [
                        '_',
                        'lodash'
                    ]
                }
            ] 
        },
        "str.charAt(0);",
        "str.slice(8, -1);",
        "arr.indexOf(x);",
        "includes(x);",
        "func(x);"
    ],
    invalid: [ 
        {
            code: "[1, 2, 3, 4].includes(1);",
            errors
        }, 
        {
            code: "[1, 2, 3, 4].includes(2, 1);",
            errors
        },
        {
            code: "arr.includes(a);",
            errors
        },  
        {
            code: "_.includes(bar, x);",
            errors
        }, 
        {
            code: "str.includes(s);",
            errors
        },
        {
            code: "'helloworld'.includes('hello');",
            errors
        }, 
        {
            code: "this.includes('hello');",
            errors
        }
    ]
});
