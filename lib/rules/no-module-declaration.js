function isTtag(node) {
    return node?.tag?.name === 't';
};

function isjTtag(node) {
    return node?.tag?.name === 'jt';
};

function isGettextFn(node) {
    return node?.callee?.name === 'gettext';
};

function isNgettextFn(node) {
    return node?.callee?.name === 'ngettext';
};

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
                const scope = context.getScope().type;
                if (scope === 'module') {
                    context.report({ node, message: "You can't declare ttag variables in a module scope." });
                }
            },
            CallExpression(node) {
                const isTtagFn = isGettextFn(node) || isNgettextFn(node);
                if (!isTtagFn) return;
                const scope = context.getScope().type;
                if (scope === 'module') {
                    context.report({ node, message: "You can't declare ttag functions in a module scope." });
                }
            }
        }
    }
}

