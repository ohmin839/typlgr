# typlgr-api
`typlgr-api` provides minimum APIs.

## Conversion API
`toPolytonic` function converts ASCII strings into strings in polytonic Greek.
```typescript
import { toPolytonic } from 'typlgr-api';
let converted = toPolytonic(">'anthr^opos");
console.log(converted); // ἄνθρώπός
```

## Collection API
`toWordsList` function splits texts in polytonic Greek into words:
```typescript
import { toPolytonic, toWordsList } from 'typlgr-api';
let converted = toPolytonic('ὁ ἄνθρώπός τις');
let split = toWordsList(converted);
console.log(split); // [ 'ὁ', 'ἄνθρώπός', 'τις' ]
```

## Conversion Rules
(Under construction)