import { parse as converter } from './converter.js';
function toPolytonic (text: string): string {
    let result = converter(text);
    return result.ast?.value ?? '';
}

import { parse as collector } from './collector.js';
function toWordsList(text: string): Array<string> {
    let result = collector(text);
    return result.ast?.value ?? [];
}

export {
    toPolytonic,
    toWordsList
};