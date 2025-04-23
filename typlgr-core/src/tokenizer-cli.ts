#!/usr/bin/env node

import { toTokenList } from './api.js';
import readline from 'readline';

let rl = readline.createInterface({
    input: process.stdin
});

let tokenSet = new Set();
rl.on("line", function(line) {
    let split = toTokenList(line);
    for (let t of split) {
        tokenSet.add(t);
    }
});

rl.on("close", function() {
    for (let t of tokenSet) {
        console.log(t);
    }
});