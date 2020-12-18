const stripHtml = require('string-strip-html');

function sanitize(array) {
    array.forEach(e => {
        if (typeof e === 'string') {
            e = stripHtml(e);
        }
    });

    return array;
}

module.exports = { sanitize };