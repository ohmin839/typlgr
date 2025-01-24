# typlgr-core
`typlgr-core` provides some APIs and CLIs.

## API
- `toPolytonic` function converts ASCII strings into strings in polytonic Greek.
- `toWordsList` function splits texts in polytonic Greek into words.
```typescript
import { toPolytonic, toWordsList } from 'typlgr-core';

let converted = toPolytonic("<o >'anthr^op'os tis");
console.log(converted); // ὁ ἄνθρωπός τις

let split = toWordsList(converted);
console.log(split); // [ 'ὁ', 'ἄνθρωπός', 'τις' ]
```

## CLI

### typlgrconv
`typlgrconv` command converts ASCII strings into strings in polytonic Greek.
```bash
$ echo "<o >'anthr^op'os tis" | typlgrconv
ὁ ἄνθρωπός τις
```

### typlgrcoll
`typlgrcoll` command extracts words uniquely from texts in polytonic Greek.
```bash
$ cat alpha.txt | typlgrconv | typlgrcoll
Πάντες
ἄνθρωποι
τοῦ
εἰδέναι
ὀρέγονται
φύσει
σημεῖον
δ'
...
```
