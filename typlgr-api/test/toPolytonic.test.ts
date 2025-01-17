import { toPolytonic } from '../src/api';

test.each([
    ["", ""],
    // large alpha
    ["A", "Α"],
    ["A|", "ᾼ"],
    ["'A", "Ά"],
    ["`A", "Ὰ"],
    ["<A", "Ἁ"],
    ["<A|", "ᾉ"],
    ["<'A", "Ἅ"],
    ["<'A|", "ᾍ"],
    ["<`A", "Ἃ"],
    ["<`A|", "ᾋ"],
    ["<~A", "Ἇ"],
    ["<~A|", "ᾏ"],
    [">A", "Ἀ"],
    [">A|", "ᾈ"],
    [">'A", "Ἄ"],
    [">'A|", "ᾌ"],
    [">`A", "Ἂ"],
    [">`A|", "ᾊ"],
    [">~A", "Ἆ"],
    [">~A|", "ᾎ"],
    // large epsilon
    ["E", "Ε"],
    ["'E", "Έ"],
    ["`E", "Ὲ"],
    ["<E", "Ἑ"],
    ["<'E", "Ἕ"],
    ["<`E", "Ἓ"],
    [">E", "Ἐ"],
    [">'E", "Ἔ"],
    [">`E", "Ἒ"],
    // large eta
    ["^E", "Η"],
    ["^E|", "ῌ"],
    ["'^E", "Ή"],
    ["`^E", "Ὴ"],
    ["<^E", "Ἡ"],
    ["<^E|", "ᾙ"],
    ["<'^E", "Ἥ"],
    ["<'^E|", "ᾝ"],
    ["<`^E", "Ἣ"],
    ["<`^E|", "ᾛ"],
    ["<~^E", "Ἧ"],
    ["<~^E|", "ᾟ"],
    [">^E", "Ἠ"],
    [">^E|", "ᾘ"],
    [">'^E", "Ἤ"],
    [">'^E|", "ᾜ"],
    [">`^E", "Ἢ"],
    [">`^E|", "ᾚ"],
    [">~^E", "Ἦ"],
    [">~^E|", "ᾞ"],
    // large iota
    ["I", "Ι"],
    ["'I", "Ί"],
    ["`I", "Ὶ"],
    ["<I", "Ἱ"],
    ["<'I", "Ἵ"],
    ["<`I", "Ἳ"],
    ["<~I", "Ἷ"],
    [">I", "Ἰ"],
    [">'I", "Ἴ"],
    [">`I", "Ἲ"],
    [">~I", "Ἶ"],
    ["\"I", "Ϊ"],
    // large omicron
    ["O", "Ο"],
    ["'O", "Ό"],
    ["`O", "Ὸ"],
    ["<O", "Ὁ"],
    ["<'O", "Ὅ"],
    ["<`O", "Ὃ"],
    [">O", "Ὀ"],
    [">'O", "Ὄ"],
    [">`O", "Ὂ"],
    // large upsilon
    ["U", "Υ"],
    ["'U", "Ύ"],
    ["`U", "Ὺ"],
    ["<U", "Ὑ"],
    ["<'U", "Ὕ"],
    ["<`U", "Ὓ"],
    ["<~U", "Ὗ"],
    ["\"U", "Ϋ"],
    ["Y", "Υ"],
    ["'Y", "Ύ"],
    ["`Y", "Ὺ"],
    ["<Y", "Ὑ"],
    ["<'Y", "Ὕ"],
    ["<`Y", "Ὓ"],
    ["<~Y", "Ὗ"],
    ["\"Y", "Ϋ"],
    // large omega
    ["^O", "Ω"],
    ["^O|", "ῼ"],
    ["'^O", "Ώ"],
    ["`^O", "Ὼ"],
    ["<^O", "Ὡ"],
    ["<^O|", "ᾩ"],
    ["<'^O", "Ὥ"],
    ["<'^O|", "ᾭ"],
    ["<`^O", "Ὣ"],
    ["<`^O|", "ᾫ"],
    ["<~^O", "Ὧ"],
    ["<~^O|", "ᾯ"],
    [">^O", "Ὠ"],
    [">^O|", "ᾨ"],
    [">'^O", "Ὤ"],
    [">'^O|", "ᾬ"],
    [">`^O", "Ὢ"],
    [">`^O|", "ᾪ"],
    [">~^O", "Ὦ"],
    [">~^O|", "ᾮ"],
    // large consonants
    ["B", "Β"],
    ["G", "Γ"],
    ["D", "Δ"],
    ["Z", "Ζ"],
    ["Th", "Θ"],
    ["K", "Κ"],
    ["L", "Λ"],
    ["M", "Μ"],
    ["N", "Ν"],
    ["NG", "ΓΓ"],
    ["NK", "ΓΚ"],
    ["NX", "ΓΞ"],
    ["NKh", "ΓΧ"],
    ["X", "Ξ"],
    ["R", "Ρ"],
    ["<R", "Ῥ"],
    ["P", "Π"],
    ["S", "Σ"],
    ["T", "Τ"],
    ["Ph", "Φ"],
    ["Kh", "Χ"],
    ["Ps", "Ψ"],
    // small alpha
    ["a", "α"],
    ["a|", "ᾳ"],
    ["'a", "ά"],
    ["'a|", "ᾴ"],
    ["`a", "ὰ"],
    ["`a|", "ᾲ"],
    ["~a", "ᾶ"],
    ["~a|", "ᾷ"],
    ["<a", "ἁ"],
    ["<a|", "ᾁ"],
    ["<'a", "ἅ"],
    ["<'a|", "ᾅ"],
    ["<`a", "ἃ"],
    ["<`a|", "ᾃ"],
    ["<~a", "ἇ"],
    ["<~a|", "ᾇ"],
    [">a", "ἀ"],
    [">a|", "ᾀ"],
    [">'a", "ἄ"],
    [">'a|", "ᾄ"],
    [">`a", "ἂ"],
    [">`a|", "ᾂ"],
    [">~a", "ἆ"],
    [">~a|", "ᾆ"],
    // small epsilon
    ["e", "ε"],
    ["'e", "έ"],
    ["`e", "ὲ"],
    ["<e", "ἑ"],
    ["<'e", "ἕ"],
    ["<`e", "ἓ"],
    [">e", "ἐ"],
    [">'e", "ἔ"],
    [">`e", "ἒ"],
    // small eta
    ["^e", "η"],
    ["^e|", "ῃ"],
    ["'^e", "ή"],
    ["'^e|", "ῄ"],
    ["`^e", "ὴ"],
    ["`^e|", "ῂ"],
    ["~^e", "ῆ"],
    ["~^e|", "ῇ"],
    ["<^e", "ἡ"],
    ["<^e|", "ᾑ"],
    ["<'^e", "ἥ"],
    ["<'^e|", "ᾕ"],
    ["<`^e", "ἣ"],
    ["<`^e|", "ᾓ"],
    ["<~^e", "ἧ"],
    ["<~^e|", "ᾗ"],
    [">^e", "ἠ"],
    [">^e|", "ᾐ"],
    [">'^e", "ἤ"],
    [">'^e|", "ᾔ"],
    [">`^e", "ἢ"],
    [">`^e|", "ᾒ"],
    [">~^e", "ἦ"],
    [">~^e|", "ᾖ"],
    // small iota
    ["i", "ι"],
    ["'i", "ί"],
    ["`i", "ὶ"],
    ["~i", "ῖ"],
    ["<i", "ἱ"],
    ["<'i", "ἵ"],
    ["<`i", "ἳ"],
    ["<~i", "ἷ"],
    [">i", "ἰ"],
    [">'i", "ἴ"],
    [">`i", "ἲ"],
    [">~i", "ἶ"],
    ["\"i", "ϊ"],
    ["\"'i", "ΐ"],
    ["\"`i", "ῒ"],
    ["\"~i", "ῗ"],
    // small omicron
    ["o", "ο"],
    ["'o", "ό"],
    ["`o", "ὸ"],
    ["<o", "ὁ"],
    ["<'o", "ὅ"],
    ["<`o", "ὃ"],
    [">o", "ὀ"],
    [">'o", "ὄ"],
    [">`o", "ὂ"],
    // small upsilon
    ["u", "υ"],
    ["'u", "ύ"],
    ["`u", "ὺ"],
    ["~u", "ῦ"],
    ["<u", "ὑ"],
    ["<'u", "ὕ"],
    ["<`u", "ὓ"],
    ["<~u", "ὗ"],
    [">u", "ὐ"],
    [">'u", "ὔ"],
    [">`u", "ὒ"],
    [">~u", "ὖ"],
    ["\"u", "ϋ"],
    ["\"'u", "ΰ"],
    ["\"`u", "ῢ"],
    ["\"~u", "ῧ"],
    ["y", "υ"],
    ["'y", "ύ"],
    ["`y", "ὺ"],
    ["~y", "ῦ"],
    ["<y", "ὑ"],
    ["<'y", "ὕ"],
    ["<`y", "ὓ"],
    ["<~y", "ὗ"],
    [">y", "ὐ"],
    [">'y", "ὔ"],
    [">`y", "ὒ"],
    [">~y", "ὖ"],
    ["\"y", "ϋ"],
    ["\"'y", "ΰ"],
    ["\"`y", "ῢ"],
    ["\"~y", "ῧ"],
    // small omega
    ["^o", "ω"],
    ["^o|", "ῳ"],
    ["'^o", "ώ"],
    ["'^o|", "ῴ"],
    ["`^o", "ὼ"],
    ["`^o|", "ῲ"],
    ["~^o", "ῶ"],
    ["~^o|", "ῷ"],
    ["<^o", "ὡ"],
    ["<^o|", "ᾡ"],
    ["<'^o", "ὥ"],
    ["<'^o|", "ᾥ"],
    ["<`^o", "ὣ"],
    ["<`^o|", "ᾣ"],
    ["<~^o", "ὧ"],
    ["<~^o|", "ᾧ"],
    [">^o", "ὠ"],
    [">^o|", "ᾠ"],
    [">'^o", "ὤ"],
    [">'^o|", "ᾤ"],
    [">`^o", "ὢ"],
    [">`^o|", "ᾢ"],
    [">~^o", "ὦ"],
    [">~^o|", "ᾦ"],
    // small consonants
    ["b", "β"],
    ["g", "γ"],
    ["d", "δ"],
    ["z", "ζ"],
    ["k", "κ"],
    ["th", "θ"],
    ["k", "κ"],
    ["l", "λ"],
    ["m", "μ"],
    ["n", "ν"],
    ["ng", "γγ"],
    ["nk", "γκ"],
    ["nx", "γξ"],
    ["nkh", "γχ"],
    ["x", "ξ"],
    ["p", "π"],
    ["s", "ς"],
    ["sa", "σα"],
    ["ssa", "σσα"],
    ["c", "σ"],
    ["t", "τ"],
    ["ph", "φ"],
    ["kh", "χ"],
    ["ps", "ψ"],
    // punctuations
    [",", ","],
    [";", "·"],
    [".", "."],
    ["?", ";"],
    ["d'", "δ'"],
    // white space
    [" ", " "],
    ["\t", "\t"],
    ["\n", "\n"],
    ["\r\n", "\r\n"],
    // parenthesis
    ["-", "-"],
    ["(", "("],
    [")", ")"],
    ["[", "["],
    ["]", "]"],
    ["<", "<"],
    [">", ">"],
    // others
    ["あ", "あ"],
])("from %s to %s", (ascii, unicode) => {
    expect(toPolytonic(ascii)).toStrictEqual(unicode);
});