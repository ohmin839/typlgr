function calcScore(text: string): number {
    return addScoreDialesis(text,
            addScoreBreath(text,
            addScoreAccent(text,
            addScoreIotaSubscriptum(text))));
}

function addScoreDialesis(text: string, score=0): number {
    if (text.includes('"')) {
        return 4 ** 3 + score;
    } else {
        return score;
    }
}

function addScoreBreath(text: string, score=0): number {
    if (text.includes('<')) {
        return 4 ** 2 * 1 + score;
    } else if (text.includes('>')) {
        return 4 ** 2 * 2 + score;
    } else {
        return score;
    }
}

function addScoreAccent(text: string, score=0): number {
    if (text.includes("'")) {
        return 4 ** 1 * 1 + score;
    } else if (text.includes('\`')) {
        return 4 ** 1 * 2 + score;
    } else if (text.includes('~')) {
        return 4 ** 1 * 3 + score;
    } else {
        return score;
    }
}

function addScoreIotaSubscriptum(text: string, score=0): number {
    if (text.includes('|')) {
        return 1 + score;
    } else {
        return score;
    }
}

function convertLargeAlpha(text: string): string {
    let score = calcScore(text);
    switch (score) {
        case  1: return "\u1FBC"; // A|
        case  4: return "\u1FBB"; // 'A
        // case  5: return "\uxxxx"; // 'A|
        case  8: return "\u1FBA"; // `A
        // case  9: return "\uxxxx"; // `A|
        // case 12: return "\uxxxx"; // ~A
        // case 13: return "\uxxxx"; // ~A|
        case 16: return "\u1F09"; // <A
        case 17: return "\u1F89"; // <A|
        case 20: return "\u1F0D"; // <'A
        case 21: return "\u1F8D"; // <'A|
        case 24: return "\u1F0B"; // <`A
        case 25: return "\u1F8B"; // <`A|
        case 28: return "\u1F0F"; // <~A
        case 29: return "\u1F8F"; // <`A|
        case 32: return "\u1F08"; // >A
        case 33: return "\u1F88"; // >A|
        case 36: return "\u1F0C"; // >'A
        case 37: return "\u1F8C"; // >'A|
        case 40: return "\u1F0A"; // >`A
        case 41: return "\u1F8A"; // >`A|
        case 44: return "\u1F0E"; // >~A
        case 45: return "\u1F8E"; // >~A|
        default: return "\u0391"; // A        
    }
}

function convertLargeEpsilon(text: string): string {
    let score = calcScore(text);
    switch (score) {
        case  4: return "\u1FC9"; // 'E
        case  8: return "\u1FC8"; // `E
        case 16: return "\u1F19"; // <E
        case 20: return "\u1F1D"; // <'E
        case 24: return "\u1F1B"; // <`E
        case 32: return "\u1F18"; // >E
        case 36: return "\u1F1C"; // >'E
        case 40: return "\u1F1A"; // >`E
        default: return "\u0395"; // E        
    }
}

function convertLargeEta(text: string): string {
    let score = calcScore(text);
    switch (score) {
        case  1: return "\u1FCC"; // ^E|
        case  4: return "\u1FCB"; // '^E
        // case  5: return "\uxxxx"; // '^E|
        case  8: return "\u1FCA"; // `^E
        // case  9: return "\uxxxx"; // `^E|
        // case 12: return "\uxxxx"; // ~^E
        // case 13: return "\uxxxx"; // ~^E|
        case 16: return "\u1F29"; // <^E
        case 17: return "\u1F99"; // <^E|
        case 20: return "\u1F2D"; // <'^E
        case 21: return "\u1F9D"; // <'^E|
        case 24: return "\u1F2B"; // <`^E
        case 25: return "\u1F9B"; // <`^E|
        case 28: return "\u1F2F"; // <~^E
        case 29: return "\u1F9F"; // <`^E|
        case 32: return "\u1F28"; // >^E
        case 33: return "\u1F98"; // >^E|
        case 36: return "\u1F2C"; // >'^E
        case 37: return "\u1F9C"; // >'^E|
        case 40: return "\u1F2A"; // >`^E
        case 41: return "\u1F9A"; // >`^E|
        case 44: return "\u1F2E"; // >~^E
        case 45: return "\u1F9E"; // >~^E|
        default: return "\u0397"; // ^E
    }
}

function convertLargeIota(text: string): string {
    let score = calcScore(text);
    switch (score) {
        case  4: return "\u1FDB"; // 'I
        case  8: return "\u1FDA"; // `I
        // case  12: return "\uxxxx"; // ~I
        case 16: return "\u1F39"; // <I
        case 20: return "\u1F3D"; // <'I
        case 24: return "\u1F3B"; // <`I
        case 28: return "\u1F3F"; // <~I
        case 32: return "\u1F38"; // >I
        case 36: return "\u1F3C"; // >'I
        case 40: return "\u1F3A"; // >`I
        case 44: return "\u1F3E"; // >~I
        case 64: return "\u03AA"; // "I
        default: return "\u0399"; // I
    }
}

function convertLargeOmicron(text: string): string {
    let score = calcScore(text);
    switch (score) {
        case  4: return "\u1FF9"; // 'O
        case  8: return "\u1FF8"; // `O
        case 16: return "\u1F49"; // <O
        case 20: return "\u1F4D"; // <'O
        case 24: return "\u1F4B"; // <`O
        case 32: return "\u1F48"; // >O
        case 36: return "\u1F4C"; // >'O
        case 40: return "\u1F4A"; // >`O
        default: return "\u039F"; // O
    }
}

function convertLargeUpsilon(text: string): string {
    let score = calcScore(text);
    switch (score) {
        case  4: return "\u1FEB"; // 'Y
        case  8: return "\u1FEA"; // `Y
        // case  12: return "\uxxxx"; // ~Y
        case 16: return "\u1F59"; // <Y
        case 20: return "\u1F5D"; // <'Y
        case 24: return "\u1F5B"; // <`Y
        case 28: return "\u1F5F"; // <~Y
        case 64: return "\u03AB"; // "Y
        default: return "\u03A5"; // Y
    }
}

function convertLargeOmega(text: string): string {
    let score = calcScore(text);
    switch (score) {
        case  1: return "\u1FFC"; // ^O|
        case  4: return "\u1FFB"; // '^O
        // case  5: return "\uxxxx"; // '^O|
        case  8: return "\u1FFA"; // `^O
        // case  9: return "\uxxxx"; // `^O|
        // case 12: return "\uxxxx"; // ~^O
        // case 13: return "\uxxxx"; // ~^O|
        case 16: return "\u1F69"; // <^O
        case 17: return "\u1FA9"; // <^O|
        case 20: return "\u1F6D"; // <'^O
        case 21: return "\u1FAD"; // <'^O|
        case 24: return "\u1F6B"; // <`^O
        case 25: return "\u1FAB"; // <`^O|
        case 28: return "\u1F6F"; // <~^O
        case 29: return "\u1FAF"; // <`^O|
        case 32: return "\u1F68"; // >^O
        case 33: return "\u1FA8"; // >^O|
        case 36: return "\u1F6C"; // >'^O
        case 37: return "\u1FAC"; // >'^O|
        case 40: return "\u1F6A"; // >`^O
        case 41: return "\u1FAA"; // >`^O|
        case 44: return "\u1F6E"; // >~^O
        case 45: return "\u1FAE"; // >~^O|
        default: return "\u03A9"; // ^O
    }
}

function convertLargeRho(text: string): string {
    let score = calcScore(text);
    switch (score) {
        case 16: return "\u1FEC"; // <R
        default: return "\u03A1"; // R
    }
}

function convertSmallAlpha(text: string): string {
    let score = calcScore(text);
    switch (score) {
        case  1: return "\u1FB3"; // a|
        case  4: return "\u1F71"; // 'a
        case  5: return "\u1FB4"; // 'a|
        case  8: return "\u1F70"; // `a
        case  9: return "\u1FB2"; // `a|
        case 12: return "\u1FB6"; // ~a
        case 13: return "\u1FB7"; // ~a|
        case 16: return "\u1F01"; // <a
        case 17: return "\u1F81"; // <a|
        case 20: return "\u1F05"; // <'a
        case 21: return "\u1F85"; // <'a|
        case 24: return "\u1F03"; // <`a
        case 25: return "\u1F83"; // <`a|
        case 28: return "\u1F07"; // <~a
        case 29: return "\u1F87"; // <`a|
        case 32: return "\u1F00"; // >a
        case 33: return "\u1F80"; // >a|
        case 36: return "\u1F04"; // >'a
        case 37: return "\u1F84"; // >'a|
        case 40: return "\u1F02"; // >`a
        case 41: return "\u1F82"; // >`a|
        case 44: return "\u1F06"; // >~a
        case 45: return "\u1F86"; // >~a|
        default: return "\u03B1"; // a
    }
}

function convertSmallEpsilon(text: string): string {
    let score = calcScore(text);
    switch (score) {
        case  4: return "\u1F73"; // 'e
        case  8: return "\u1F72"; // `e
        case 16: return "\u1F11"; // <e
        case 20: return "\u1F15"; // <'e
        case 24: return "\u1F13"; // <`e
        case 32: return "\u1F10"; // >e
        case 36: return "\u1F14"; // >'e
        case 40: return "\u1F12"; // >`e
        default: return "\u03B5"; // e
    }
}

function convertSmallEta(text: string): string {
    let score = calcScore(text);
    switch (score) {
        case  1: return "\u1FC3"; // ^e|
        case  4: return "\u1F75"; // '^e
        case  5: return "\u1FC4"; // '^e|
        case  8: return "\u1F74"; // `^e
        case  9: return "\u1FC2"; // `^e|
        case 12: return "\u1FC6"; // ~^e
        case 13: return "\u1FC7"; // ~^e|
        case 16: return "\u1F21"; // <^e
        case 17: return "\u1F91"; // <^e|
        case 20: return "\u1F25"; // <'^e
        case 21: return "\u1F95"; // <'^e|
        case 24: return "\u1F23"; // <`^e
        case 25: return "\u1F93"; // <`^e|
        case 28: return "\u1F27"; // <~^e
        case 29: return "\u1F97"; // <`^e|
        case 32: return "\u1F20"; // >^e
        case 33: return "\u1F90"; // >^e|
        case 36: return "\u1F24"; // >'^e
        case 37: return "\u1F94"; // >'^e|
        case 40: return "\u1F22"; // >`^e
        case 41: return "\u1F92"; // >`^e|
        case 44: return "\u1F26"; // >~^e
        case 45: return "\u1F96"; // >~^e|
        default: return "\u03B7"; // ^e
    }
}

function convertSmallIota(text: string): string {
    let score = calcScore(text);
    switch (score) {
        case  4: return "\u1F77"; // 'i
        case  8: return "\u1F76"; // `i
        case 12: return "\u1FD6"; // ~i
        case 16: return "\u1F31"; // <i
        case 20: return "\u1F35"; // <'i
        case 24: return "\u1F33"; // <`i
        case 28: return "\u1F37"; // <~i
        case 32: return "\u1F30"; // >i
        case 36: return "\u1F34"; // >'i
        case 40: return "\u1F32"; // >`i
        case 44: return "\u1F36"; // >~i
        case 64: return "\u03CA"; // "i
        case 68: return "\u1FD3"; // "'i
        case 72: return "\u1FD2"; // "`i
        case 76: return "\u1FD7"; // "~i
        default: return "\u03B9"; // i 
    }
}

function convertSmallOmicron(text: string): string {
    let score = calcScore(text);
    switch (score) {
        case  4: return "\u1F79"; // 'o
        case  8: return "\u1F78"; // `o
        case 16: return "\u1F41"; // <o
        case 20: return "\u1F45"; // <'o
        case 24: return "\u1F43"; // <`o
        case 32: return "\u1F40"; // >o
        case 36: return "\u1F44"; // >'o
        case 40: return "\u1F42"; // >`o
        default: return "\u03BF"; // o
    }
}

function convertSmallUpsilon(text: string): string {
    let score = calcScore(text);
    switch (score) {
        case  4: return "\u1F7B"; // 'y
        case  8: return "\u1F7A"; // `y
        case 12: return "\u1FE6"; // ~y
        case 16: return "\u1F51"; // <y
        case 20: return "\u1F55"; // <'y
        case 24: return "\u1F53"; // <`y
        case 28: return "\u1F57"; // <~y
        case 32: return "\u1F50"; // >y
        case 36: return "\u1F54"; // >'y
        case 40: return "\u1F52"; // >`y
        case 44: return "\u1F56"; // >~y
        case 64: return "\u03CB"; // "y
        case 68: return "\u1FE3"; // "'y
        case 72: return "\u1FE2"; // "`y
        case 76: return "\u1FE7"; // "~y
        default: return "\u03C5"; // y
    }
}

function convertSmallOmega(text: string): string {
    let score  = calcScore(text);
    switch (score) {
        case  1: return "\u1FF3"; // ^o|
        case  4: return "\u1F7D"; // '^o
        case  5: return "\u1FF4"; // '^o|
        case  8: return "\u1F7C"; // `^o
        case  9: return "\u1FF2"; // `^o|
        case 12: return "\u1FF6"; // ~^o
        case 13: return "\u1FF7"; // ~^o|
        case 16: return "\u1F61"; // <^o
        case 17: return "\u1FA1"; // <^o|
        case 20: return "\u1F65"; // <'^o
        case 21: return "\u1FA5"; // <'^o|
        case 24: return "\u1F63"; // <`^o
        case 25: return "\u1FA3"; // <`^o|
        case 28: return "\u1F67"; // <~^o
        case 29: return "\u1FA7"; // <`^o|
        case 32: return "\u1F60"; // >^o
        case 33: return "\u1FA0"; // >^o|
        case 36: return "\u1F64"; // >'^o
        case 37: return "\u1FA4"; // >'^o|
        case 40: return "\u1F62"; // >`^o
        case 41: return "\u1FA2"; // >`^o|
        case 44: return "\u1F66"; // >~^o
        case 45: return "\u1FA6"; // >~^o|
        default: return "\u03C9"; // ^o
    }
}

function convertSmallRho(text: string): string {
    let score = calcScore(text);
    switch (score) {
        case 16: return "\u1FE5"; // <r
        case 32: return "\u1FE4"; // >r
        default: return "\u03C1"; // r
    }
}

export {
    convertLargeAlpha,
    convertLargeEpsilon,
    convertLargeEta,
    convertLargeIota,
    convertLargeOmicron,
    convertLargeUpsilon,
    convertLargeOmega,
    convertLargeRho,
    convertSmallAlpha,
    convertSmallEpsilon,
    convertSmallEta,
    convertSmallIota,
    convertSmallOmicron,
    convertSmallUpsilon,
    convertSmallOmega,
    convertSmallRho,
}