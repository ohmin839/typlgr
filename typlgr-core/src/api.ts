import { parse as converter } from './converter-peg.js';
function toPolytonic (text: string): string {
    let result = converter(text);
    return result.ast?.value ?? '';
}

import { parse as collector } from './collector-peg.js';
function toWordsList(text: string): Array<string> {
    let result = collector(text);
    return result.ast?.value ?? [];
}

export {
    toPolytonic,
    toWordsList
};