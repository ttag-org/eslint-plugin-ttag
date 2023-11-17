import { RuleTester } from 'eslint';
import rule from '../../lib/rules/no-module-declaration';

const options = [];
const parserOptions = { ecmaVersion: 6, sourceType: "module" };
const ruleTester = new RuleTester();
const filename = 'packages/test/some/file.js';

ruleTester.run('no-module-declaration', rule, {
    valid: [
        // t
        {
            filename,
            code: `const a = w\`test\`;`,
            options,
            parserOptions,
        },
        {
            code: `const a = () => t\`test\`;`,
            options,
            filename,
            parserOptions,
        },
        // jt
        {
            filename,
            code: `const a = () => jt\`test\`;`,
            options,
            parserOptions,
        },
        // gettext
        {
            code: `const a = () => gettext('test')`,
            options,
            filename,
            parserOptions,
        },
        // ngettext
        {
            code: `const a = () => ngettext('test')`,
            options,
            filename,
            parserOptions,
            errors: [{ message: `You can't declare ttag functions in a module scope.` }]
        },
    ],
    invalid: [
        // t
        {
            code: `const a = t\`test\`;`,
            options,
            filename,
            parserOptions,
            errors: [{ message: `You can't declare ttag variables in a module scope.` }]
        },
        {
            code: `const a = { d: t\`test\` };`,
            options,
            filename,
            parserOptions,
            errors: [{ message: `You can't declare ttag variables in a module scope.` }]
        },
        {
            code: `a.test = { d: t\`test\` };`,
            options,
            filename,
            parserOptions,
            errors: [{ message: `You can't declare ttag variables in a module scope.` }]
        },
        // jt
        {
            code: `const a = jt\`test\`;`,
            options,
            filename,
            parserOptions,
            errors: [{ message: `You can't declare ttag variables in a module scope.` }]
        },
        // gettext
        {
            code: `const a = gettext('test')`,
            options,
            filename,
            parserOptions,
            errors: [{ message: `You can't declare ttag functions in a module scope.` }]
        },
        // ngettext
        {
            code: `const a = ngettext('test')`,
            options,
            filename,
            parserOptions,
            errors: [{ message: `You can't declare ttag functions in a module scope.` }]
        },
    ]
})