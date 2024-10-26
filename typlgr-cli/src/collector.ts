#!/usr/bin/env node

import { toWordsList } from 'typlgr-api';
import readline from 'readline';

let rl = readline.createInterface({
    input: process.stdin
});

let wordsSet = new Set();
rl.on("line", function(line) {
    let split = toWordsList(line);
    for (let w of split) {
        wordsSet.add(w);
    }
});

rl.on("close", function() {
    for (let w of wordsSet) {
        console.log(w);
    }
});