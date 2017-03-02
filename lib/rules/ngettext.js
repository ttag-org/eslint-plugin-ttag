const check = (context) => (node) => {
};

module.exports = {
    meta: {
        docs: {
            description: 'Validate c-3po functions'
        },
    },
    create(context) {
        return {
            CallExpression: check(context),
            TaggedTemplateExpression: check(context),
        }
    }
};

