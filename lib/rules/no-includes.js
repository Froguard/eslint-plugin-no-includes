/**
 * @fileoverview Disallow using the method indexOf
 * @author froguard
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        schema: [
            {
                type: "object",
                properties: {
                    ignore: {
                        type: "array",
                        items: {
                            type: "string"
                        }
                    },
                    errMsg: {
                        type: "string"
                    }
                }
            }
        ]
    },
    create(context) {
        let config = context.options[0] || {};
        let { ignore, errMsg } = config || {};
        return {
            CallExpression: function (node) {
                let callee = node.callee;
                if (callee) {
                    let { property,  object} = callee;
                    let methodName = property && property.name || ''; 
                    let callerName = object && object.name || '';
                    if(methodName === 'includes'){
                        if(!ignore || !ignore.length || !ignore.includes(callerName)) {
                            context.report(node, errMsg || '(Array|String).includes is not supported in IOS8-.');
                        }
                    }
                }
            }
        };
    }
};




