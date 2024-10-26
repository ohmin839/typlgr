#!/usr/bin/env node

import { toPolytonic } from 'typlgr-api';
import readline from 'readline';

let rl = readline.createInterface({
    input: process.stdin
});

rl.on("line", function(line) {
    let converted = toPolytonic(line);
    console.log(converted);
});
