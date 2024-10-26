import { toWordsList } from '../src/api';

test.each([
    ["", []],
    ["α", ["α"]],
    ["δ'", ["δ'"]],
    ["ὁ ἄνθρώπός τις", ["ὁ", "ἄνθρώπός", "τις"]],
])("from %s to %s", (text, words) => {
    expect(toWordsList(text)).toStrictEqual(words);
});
