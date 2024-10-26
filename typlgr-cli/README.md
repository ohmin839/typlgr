# typlgr-cli
`typlgr-cli` provides minimum CLIs.

## Conversion CLI
`typlgrconv` command converts ASCII strings into strings in polytonic Greek.
```bash
$ echo ">'anthr^opos" | typlgrconv
ἄνθρώπός
```

## Collection CLI
`typlgrcoll` command splits texts in polytonic Greek into words:
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
