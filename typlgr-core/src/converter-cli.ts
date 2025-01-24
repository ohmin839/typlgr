#!/usr/bin/env node

import { toPolytonic } from './api.js';
import readline from 'readline';

let rl = readline.createInterface({
    input: process.stdin
});

rl.on("line", function(line) {
    let converted = toPolytonic(line);
    console.log(converted);
});
