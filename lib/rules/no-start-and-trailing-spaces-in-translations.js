const {isTtag, isjTtag, isGettextFn, isNgettextFn} = require('../utils');

const startSpaceCharacterMsg = "You can't use whitespace character at the start of translated strings.";
const endSpaceCharacterMsg = "You can't use whitespace character at the end of translated strings.";

module.exports = {
    meta: {
        docs: {
            description: 'Forbids ttag usage on a module scope',
        }
    },
    create(context) {
        return {
            TaggedTemplateExpression(node) {
                const istTagVar = isTtag(node) || isjTtag(node)
                if (!istTagVar) return;
                const quasis = node.quasi.quasis;
                if (!quasis.length) return;
                const firstQuasis = quasis[0];
                const lastQuasis = quasis[quasis.length - 1];
                if (firstQuasis.value.raw.startsWith(' ')) {
                    context.report({node, message: startSpaceCharacterMsg});
                    return;
                }
                if (lastQuasis.value.raw.endsWith(' ')) {
                    context.report({node, message: endSpaceCharacterMsg});
                    return;
                }
            },
            CallExpression(node) {
                if (isGettextFn(node)) {
                    if (!node.arguments.length) return;
                    const firstArgument = node.arguments[0];
                    if (firstArgument.type === 'Literal') {
                        const value = firstArgument.value;
                        if (value.startsWith(' ')) {
                            context.report({node, message: startSpaceCharacterMsg});
                            return;
                        }
                        if (value.endsWith(' ')) {
                            context.report({node, message: endSpaceCharacterMsg});
                            return;
                        }
                    }
                }

                if (isNgettextFn(node)) {
                    if (!node.arguments.length) return;
                    const firstArgument = node.arguments[0];
                    const quasis = firstArgument.quasi.quasis;
                    if (!quasis.length) return;
                    const firstQuasis = quasis[0];
                    const lastQuasis = quasis[quasis.length - 1];
                    if (firstQuasis.value.raw.startsWith(' ')) {
                        context.report({node, message: startSpaceCharacterMsg});
                        return;
                    }
                    if (lastQuasis.value.raw.endsWith(' ')) {
                        context.report({node, message: endSpaceCharacterMsg});
                        return;
                    }
                }
            }
        }
    }
}
