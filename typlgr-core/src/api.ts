import { parse as converter } from './converter-peg.js';
function toPolytonic (text: string): string {
    let result = converter(text);
    return result.ast?.value ?? '';
}

import { parse as tokenizer } from './tokenizer-peg.js';
function toTokenList(text: string): Array<string> {
    let result = tokenizer(text);
    return result.ast?.value ?? [];
}

export {
    toPolytonic,
    toTokenList,
};