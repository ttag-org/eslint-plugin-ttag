# Prevents spaces in translations phrases on start and end

## Rule Details

It is not a good practice to control indentation by adding spaces to start and end of phrases, those can be lost in translations. This can potentially lead to bugs in some locales:

***BAD:***

```js
import { t } from 'ttag';

const text = t` hello`;
const text = t`hello `;
```


***GOOD:***

```js
import { t } from 'ttag';

const text = t`hello`;
```

### Example:
Let's consider we have this configuration in `.eslintrc`:

```json
{
  "plugins": ["ttag"],
  "rules": {
    "ttag/no-start-and-trailing-spaces-in-translations": 2
  }
}
```


### The following patterns are considered as errors:

```js
import { t } from 'ttag';

const text = t` hello`;
const text2 = jt` hello`;
const text3 = gettext(' hello');
const ngettext = ngettext(msgid` hello`, `hello`);
```
