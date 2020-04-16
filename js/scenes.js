 var dart = [
        [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,0,1,0,0,0,0,0,0],
        [0,0,0,0,0,1,0,0,0,1,0,0,0,0,0],
        [0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,1,1,0,0,0,1,1,0,0,0,0],
        [0,0,1,0,0,0,1,0,1,0,0,0,1,0,0],
        [0,1,1,0,0,0,1,0,1,0,0,0,1,1,0],
        [1,0,0,0,0,0,1,0,1,0,0,0,0,0,1],
        [0,1,0,1,1,0,1,0,1,0,1,1,0,1,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ];

var ship = [
[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0],
[0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0],
[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0],
[0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0],
[0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0],
[0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0],
[0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0],
[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0],
[0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0],
[1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0],
[0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0]
];

var test = [
    [0,0,0],
    [0,1,0],
    [0,0,0],
];

var pufferfish = [
[0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],
[0,0,1,1,1,0,0,0,0,0,1,1,1,0,0],
[0,1,1,0,0,1,0,0,0,1,0,0,1,1,0],
[0,0,0,1,1,1,0,0,0,1,1,1,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,1,0,0,0,0,0,1,0,0,0,0],
[0,0,1,0,0,1,0,0,0,1,0,0,1,0,0],
[1,0,0,0,0,0,1,0,1,0,0,0,0,0,1],
[1,1,0,0,0,0,1,0,1,0,0,0,0,1,1],
[0,0,0,0,0,0,1,0,1,0,0,0,0,0,0],
[0,0,0,1,0,1,0,0,0,1,0,1,0,0,0],
[0,0,0,0,1,0,0,0,0,0,1,0,0,0,0],
];

var statorless = [
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[0,1,1,0,0,0,0,0,0,0,0,0,1,1,0],
[1,0,0,0,0,1,1,0,1,1,0,0,0,0,1],
[1,1,0,1,0,0,0,0,0,0,0,1,0,1,1],
[0,1,0,1,0,0,1,0,1,0,0,1,0,1,0],
[0,0,1,0,1,0,0,0,0,0,1,0,1,0,0],
[0,0,1,1,1,0,0,0,0,0,1,1,1,0,0],
[0,0,1,1,1,0,0,0,0,0,1,1,1,0,0],
[0,0,1,0,1,0,0,0,0,0,1,0,1,0,0],
[0,1,0,1,0,0,1,0,1,0,0,1,0,1,0],
[1,1,0,1,0,0,0,0,0,0,0,1,0,1,1],
[1,0,0,0,0,1,1,0,1,1,0,0,0,0,1],
[0,1,1,0,0,0,0,0,0,0,0,0,1,1,0],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    ];

var voldiag = [
[0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
[1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0],
[1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0],
[0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0],
[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0],
[0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0],
[0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0],
];


var spider = [
[0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
[0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0],
[1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1],
[1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1],
[0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0],
[0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0],
[0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0],
[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
];

var P6H1V0 = [
    [0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0],
    [1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1],
    [0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0],
    [0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
 ];


var lobster = [
    [0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1],
    [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1],
    [0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1],
    [1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0],
    [0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0],
    [0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];

var gosperglider = [
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
[1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];


var wickstretcher = [
[0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
[0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1],
[0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1],
[1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1],
[0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
[0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
[0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
[0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
[0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1],
[0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1],
[0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];


var ripjhc = [
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,0,0,0],
    [0,0,0,1,0,1,0,0,0],
    [0,0,0,1,0,1,0,0,0],
    [0,0,0,0,1,0,0,0,0],
    [0,1,0,1,1,1,0,0,0],
    [0,0,1,0,1,0,1,0,0],
    [0,0,0,0,1,0,0,1,0],
    [0,0,0,1,0,1,0,0,0],
    [0,0,0,1,0,1,0,0,0],
    [0,0,0,0,0,0,0,0,0],
];


var smallexploder = [
    [0,0,0,0,0],
    [0,0,1,0,0],
    [0,1,1,1,0],
    [0,1,0,1,0],
    [0,0,1,0,0],
    [0,0,0,0,0],
];

var exploder = [
    [1,0,1,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,1,0,1],
];

var tumbler = [
    [0,0,1,1,0,1,1,0,0],
    [0,0,1,1,0,1,1,0,0],
    [0,0,0,1,0,1,0,0,0],
    [0,1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1,0],
    [0,1,1,0,0,0,1,1,0],
];

var tencell = [
    [1,1,1,1,1,1,1,1,1,1]
];

     HORTON.scenes = [];

     // id mai mare decat 2

     HORTON.scenes.push({"id": 2,
                         "name": 'Dart (David Bell)',
                         "description": "Dart este un tip special de structura numita \"nava spatiala\" - cea mai mica nava spatiala cunoscuta. Aceasta se deplaseaza vertical cu schimbari de structura",
                         "blockwidth" : 15,
                         "blockheight": 11,
                         'struct': dart,
                         "scenewidth": 19, "sceneheight": 60, "blockx": 2, "blocky": 40});
     HORTON.scenes.push({"id": 3, "name": 'Pufferfish spaceship (Ivan Fomichev)',
                         "description": "Sunt mai multe tipuri de astfel de structuri, in general sunt nave spatiale construite cu ajutorul uneia sau mai multe structuri de tip pufferfish",
                         "blockwidth" : 53, "blockheight": 37, 'struct': ship, "scenewidth": 60, "sceneheight": 90, "blockx": 3, "blocky": 50});
     HORTON.scenes.push({"id": 4, "name": 'Statorless (Josh Ball)', "blockwidth" : 15, "blockheight": 14, 'struct': statorless, "scenewidth": 20, "sceneheight": 20, "blockx": 2, "blocky": 2});
     HORTON.scenes.push({"id": 5, "name": 'Pufferfish (David Bell)', "blockwidth" : 15, "blockheight": 12, 'struct': pufferfish, "scenewidth": 19, "sceneheight": 40, "blockx": 2, "blocky": 25});
     HORTON.scenes.push({"id": 6, "name": 'Voldiag (Unknown)', "blockwidth" : 26, "blockheight": 26, 'struct': voldiag, "scenewidth": 30, "sceneheight": 30, "blockx": 2, "blocky": 2});
     HORTON.scenes.push({"id": 7, "name": 'Spider (David Bell)', "blockwidth" : 27, "blockheight": 8, 'struct': spider, "scenewidth": 33, "sceneheight": 50, "blockx": 3, "blocky": 30});
     HORTON.scenes.push({"id": 8, "name": '56P6H1V0 (Hartmut Holzwart)', "blockwidth" : 26, "blockheight": 12, 'struct': P6H1V0, "scenewidth": 33, "sceneheight": 50, "blockx": 3, "blocky": 30});
     HORTON.scenes.push({"id": 9, "name": 'Lobster (Matthias Merzenich)', "blockwidth" : 26, "blockheight": 26, 'struct': lobster, "scenewidth": 50, "sceneheight": 50, "blockx": 2, "blocky": 20});
     HORTON.scenes.push({"id": 10, "name": 'Gosper Glider', "blockwidth" : 36, "blockheight": 9, 'struct': gosperglider, "scenewidth": 50, "sceneheight": 50, "blockx": 2, "blocky": 20});
     HORTON.scenes.push({"id": 11, "name": 'WickStretcher', "blockwidth" : 49, "blockheight": 16, 'struct': wickstretcher, "scenewidth": 90, "sceneheight": 30, "blockx": 2, "blocky": 8});
     HORTON.scenes.push({"id": 12, "name": 'RIP John Conway (xkcd.com)', "blockwidth" : 9, "blockheight": 11, 'struct': ripjhc, "scenewidth": 30, "sceneheight": 30, "blockx": 10, "blocky": 10});
     HORTON.scenes.push({"id": 13, "name": 'Small Exploder', "blockwidth" : 5, "blockheight": 5, 'struct': smallexploder, "scenewidth": 30, "sceneheight": 30, "blockx": 10, "blocky": 10});
     HORTON.scenes.push({"id": 14, "name": 'Exploder', "blockwidth" : 5, "blockheight": 6, 'struct': exploder, "scenewidth": 30, "sceneheight": 30, "blockx": 10, "blocky": 10});
     HORTON.scenes.push({"id": 15, "name": 'Tumbler', "blockwidth" : 9, "blockheight": 6, 'struct': tumbler, "scenewidth": 30, "sceneheight": 30, "blockx": 10, "blocky": 10});
     HORTON.scenes.push({"id": 16, "name": 'ten cell row', "blockwidth" : 10, "blockheight": 1, 'struct': tencell, "scenewidth": 30, "sceneheight": 20, "blockx": 10, "blocky": 10});




function H_displayScenes(container) {
    for (var i = 0; i < HORTON.scenes.length; i++) {
           var structcontainer = buildSceneTable(HORTON.scenes[i]);
           document.getElementById(container).appendChild(structcontainer);
    }
}


function buildSceneTable(struct) {
 //   console.log(struct);
    var structcontainer = document.createElement("div");
    structcontainer.classList.add("scenedisplay");
    var structsize = Math.max(struct.blockheight, struct.blockwidth);

    var table = document.createElement("table");
    if (structsize <= 10) {
        table.classList.add("smallscenetable");
    } else if  (structsize > 10 && structsize <= 25) {
        table.classList.add("mediumscenetable");
    } else if  (structsize > 25 ) {
        table.classList.add("largescenetable");
    }

    for (var i = 0; i < struct.blockheight; i++) {
        var tr = document.createElement("tr");
        for (var j = 0; j < struct.blockwidth; j++) {//
            var cell = document.createElement("td");
            if (struct.struct[i][j] == 1) {
//            cell.setAttribute("id", i + "_" + j);
                cell.setAttribute("style", "background-color: #92aa83;");
            }
        tr.appendChild(cell);
        }
       table.appendChild(tr);
    }
    structcontainer.appendChild(table);
    var namescontainer = document.createElement("div");
    namescontainer.classList.add('stillname');
    namescontainer.setAttribute('id', 'struct-' + struct.id.toString());
    if (struct.description) {
        var newhtml = '<div class="structname">' + struct.name + '</div><div class="structdescription">' + struct.description + '</div';
    } else {
        var newhtml = '<div class="structname">' + struct.name + '</div>';
    }

    console.log(newhtml);
    namescontainer.innerHTML = newhtml;

    structcontainer.appendChild(namescontainer);
    return structcontainer;
}

