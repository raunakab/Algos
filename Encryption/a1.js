const assert = require('assert');

const encryption = s => {
    const length = s.length;
    const adder = Math.ceil(Math.sqrt(length));

    let i = 0;
    let offset = 0;
    let processed = 0;

    let encrypted = '';

    while (offset < adder) {
        encrypted += s[i];
        processed += 1;

        if (i + adder >= length) {
            if (processed !== length) encrypted += ' ';

            offset += 1;
            i = offset;
        } else i += adder;
    }

    return encrypted;
};

console.log(encryption('chillout'));
console.log(encryption('feedthedog'));

assert(encryption('chillout') === 'clu hlt io');
