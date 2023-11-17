function isTtag(node) {
    return node?.tag?.name === 't';
};

function isjTtag(node) {
    return node?.tag?.name === 'jt';
};

function isGettextFn(node) {
    return node?.callee?.name === 'gettext';
};

function isNgettextFn(node) {
    return node?.callee?.name === 'ngettext';
};

module.exports = { isTtag, isjTtag, isGettextFn, isNgettextFn };
