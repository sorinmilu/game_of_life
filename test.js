Array.prototype.transpose || (Array.prototype.transpose = function() {
    if (!this.length) {
        return [];
    }

    if (this[0] instanceof Array) {
        var tlen = this.length,
            dlen = this[0].length,
            newA = new Array(dlen);
    } else {
        throw new Error("ceva nu merge");
    }

    for (var i = tlen; i--;) {
        if (this[i].length !== dlen) throw new Error("Index Error! 不揃いな林檎たち（・∀・）");
    }

    for (var i = 0; i < dlen; ++i) {
        newA[i] = [];
        for (var j = 0, l = tlen; j < l; j++) {
            newA[i][j] = this[j][i];
        }
    }

    return newA;
});




var vhive = [
        [0,0,0,0,0],
        [0,0,1,0,0],
        [0,1,0,1,0],
        [0,1,0,1,0],
        [0,0,1,0,0],
        [0,0,0,0,0]
];

console.log(vhive);
console.log('------------------------');
console.log(vhive.transpose());



