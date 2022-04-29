# Prevents ttag usage on a module scope level

## Rule Details

It is not a good practice to use ttag variables declaration on a module scope. Such as:

***BAD:***

```js
import { t } from 'ttag';

const text = t`hello`;
```

Reason for this is that `t` function will be called once, and language switch will not have effect on those variables. Instead you should consider to use something like


***GOOD:***

```js
import { t } from 'ttag';

const text = () => t`hello`;
```

### Example:
Let's consider we have this configuration in `.eslintrc`:

```json
{
  "plugins": ["ttag"],
  "rules": {
    "ttag/no-module-declaration": 2
  }
}
```


### The following patterns are considered as errors:

```js
import { t } from 'ttag';

const text = t`hello`;
```

