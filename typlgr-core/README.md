# typlgr-core
`typlgr-core` provides some APIs and CLIs.

## API
- `toPolytonic` function converts ASCII strings into strings in polytonic Greek.
- `toTokenList` function splits texts in polytonic Greek into tokens.
```typescript
import { toPolytonic, toTokenList } from 'typlgr-core';

let converted = toPolytonic("<o >'anthr^op'os tis");
console.log(converted); // ὁ ἄνθρωπός τις

let split = toTokenList(converted);
console.log(split); // [ 'ὁ', 'ἄνθρωπός', 'τις' ]
```

## CLI

### typlgrconv
`typlgrconv` command converts ASCII strings into strings in polytonic Greek.
```bash
$ echo "<o >'anthr^op'os tis" | typlgrconv
ὁ ἄνθρωπός τις
```

### typlgrtknz
`typlgrtknz` command extracts tokens uniquely from texts in polytonic Greek.
```bash
$ head -n1 alpha.txt | typlgrconv | typlgrtknz
Πάντες
ἄνθρωποι
τοῦ
εἰδέναι
ὀρέγονται
φύσει
.
σημεῖον
δ'
```
