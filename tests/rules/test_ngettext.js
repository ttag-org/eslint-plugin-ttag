const rule = require( '../../lib/rules/ngettext' );
const RuleTester = require( 'eslint' ).RuleTester;
const ruleTester = new RuleTester();

ruleTester.run('ngettext', rule, {
    valid: [
        'some()'
    ],
    invalid: [
    ]
} );
