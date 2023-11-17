import { RuleTester } from 'eslint';
import rule from '../../lib/rules/no-start-and-trailing-spaces-in-translations';

const options = [];
const parserOptions = { ecmaVersion: 6, sourceType: "module" };
const ruleTester = new RuleTester();

ruleTester.run('no-start-and-trailing-spaces-in-translations', rule, {
    valid: [
        // t
        {
            code: `const a = t\`test\`;`,
            options,
            parserOptions,
        },
        {
            code: `const a = t\`test test\`;`,
            options,
            parserOptions,
        },
        {
            code: `const a = t\`\``,
            options,
            parserOptions,
        },
    ],
    invalid: [
        // t with space at start
        {
            code: `const a = t\` test\`;`,
            options,
            parserOptions,
            errors: [{ message: `You can't use whitespace character at the start of translated strings.` }]
        },

        // t with space at end
        {
            code: `const a = t\`test \`;`,
            options,
            parserOptions,
            errors: [{ message: `You can't use whitespace character at the end of translated strings.` }]
        },

        // t with space start with expressions
        {
            code: `const a = t\` test \${a} test\`;`,
            options,
            parserOptions,
            errors: [{ message: `You can't use whitespace character at the start of translated strings.` }]
        },

        // t with space end with expressions
        {
            code: `const a = t\`test \${a} test \`;`,
            options,
            parserOptions,
            errors: [{ message: `You can't use whitespace character at the end of translated strings.` }]
        },

        // jt with space at start
        {
            code: `const a = jt\` test\`;`,
            options,
            parserOptions,
            errors: [{ message: `You can't use whitespace character at the start of translated strings.` }]
        },

        // jt with space at end
        {
            code: `const a = jt\`test \`;`,
            options,
            parserOptions,
            errors: [{ message: `You can't use whitespace character at the end of translated strings.` }]
        },

        // jt with space start with expressions
        {
            code: `const a = jt\` test \${a} test\`;`,
            options,
            parserOptions,
            errors: [{ message: `You can't use whitespace character at the start of translated strings.` }]
        },

        // jt with space end with expressions
        {
            code: `const a = jt\`test \${a} test \`;`,
            options,
            parserOptions,
            errors: [{ message: `You can't use whitespace character at the end of translated strings.` }]
        },

        // gettext with space at start
        {
            code: `const a = gettext(" test");`,
            options,
            parserOptions,
            errors: [{ message: `You can't use whitespace character at the start of translated strings.` }]
        },

        // gettext with space at end
        {
            code: `const a = gettext("test ");`,
            options,
            parserOptions,
            errors: [{ message: `You can't use whitespace character at the end of translated strings.` }]
        },

        // ngettext with space at start
        {
            code: "const a = ngettext(msgid` test`)",
            options,
            parserOptions,
            errors: [{ message: `You can't use whitespace character at the start of translated strings.` }]
        },

        // ngettext with space at end
        {
            code: "const a = ngettext(msgid`test `)",
            options,
            parserOptions,
            errors: [{ message: `You can't use whitespace character at the end of translated strings.` }]
        },
    ]
})
