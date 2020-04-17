    var block = [
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0]
    ];

    var tub = [
        [0,0,0,0,0],
        [0,0,1,0,0],
        [0,1,0,1,0],
        [0,0,1,0,0],
        [0,0,0,0,0],
    ];


    var hive = [
        [0,0,0,0,0,0],
        [0,0,1,1,0,0],
        [0,1,0,0,1,0],
        [0,0,1,1,0,0],
        [0,0,0,0,0,0]
    ];

    var loaf = [
        [0,0,0,0,0,0],
        [0,0,0,1,0,0],
        [0,0,1,0,1,0],
        [0,1,0,0,1,0],
        [0,0,1,1,0,0],
        [0,0,0,0,0,0]
    ];

    var barge = [
        [0,0,0,0,0,0,0],
        [0,0,1,0,0,0,0],
        [0,1,0,1,0,0,0],
        [0,0,1,0,1,0,0],
        [0,0,0,1,0,0,0],
        [0,0,0,0,0,0,0]
    ];

    var boat = [
        [0,0,0,0,0],
        [0,1,1,0,0],
        [0,1,0,1,0],
        [0,0,1,0,0],
        [0,0,0,0,0]
    ];

    var ship = [
        [0,0,0,0,0],
        [0,1,1,0,0],
        [0,1,0,1,0],
        [0,0,1,1,0],
        [0,0,0,0,0]
    ];

     HORTON.structures = [];

     HORTON.structures.push({"id":1,  "name": 'block', "width" : 4, "height": 4, 'struct': block, 'color': '#f00', 'asymm': 0});
     HORTON.structures.push({"id":2,"name": 'hive', "width" : 6, "height": 5, 'struct': hive, 'color': '#ff0', 'asymm': 2});
     HORTON.structures.push({"id":3,"name": 'loaf', "width" : 6, "height": 6, 'struct': loaf, 'color': '#00f', 'asymm': 4});
     HORTON.structures.push({"id":4,"name": 'tub', "width" : 5, "height": 5, 'struct': tub, 'color': '#f0f', 'asymm': 0});
     HORTON.structures.push({"id":5,"name": 'barge', "width" : 7, "height": 6, 'struct': barge, 'color': '#f0f', 'asymm': 2});
     HORTON.structures.push({"id":6,"name": 'boat', "width" : 5, "height": 5, 'struct': boat, 'color': '#f0f', 'asymm': 4});
     HORTON.structures.push({"id":7,"name": 'ship', "width" : 5, "height": 5, 'struct': ship, 'color': '#f0f', 'asymm': 2});

//Structurile statice (still life) sunt structuri care raman identice de la o genratie la alta prin jocul regulilor. Acestea sunt foarte multe, aici se pot adauga
// Structura este definita de:
//   name - string, numele structurii cu care va aparea in interfata
//   width - latimea structurii - latimea matricii in care este continuta structura (numarul de coloane)
//   height - inaltimea structurii, inaltimea matricii in care este continuta structura (numarul de linii)
//   struct - matricea in care este continuta structura (width/height, 0 reprezinta o celula moarta, 1 o celula vie)
//   color - culoarea cu care va fi afisata structura
//   asymm - asimetria structurii. Anumite structuri sunt asimetrice si pot aparea fie ca in matricea struct, fie rotite
//          asymm 0 - structura este cautata doar in modul in care apare in matrice
//          asymm 2 - structura va fi cautata in modul in care apare in matrice precum si rotita cu 90 de grade
//          asumm 4 - structura este cautata in modul in care apare in matrice precum si rotita cu 90. 180 si 270 de grade
//      asimetria trebuie specificata corect!
//   software-ul nu identifica structurile aflate exact la marginea gridului


     HORTON.positions = [];

// functie adaugata la obiectul Array care permite transpunerea

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
        if (this[i].length !== dlen) throw new Error("Index Error!");
    }

    for (var i = 0; i < dlen; ++i) {
        newA[i] = [];
        for (var j = 0, l = tlen; j < l; j++) {
            newA[i][j] = this[j][i];
        }
    }
    return newA;
});


// cauta structurile statice in grid si le afiseaza

function findStructures() {
    HORTON.stills = {};
    HORTON.positions = {};
    resetColorsOgre();
    for (var i = 0; i < HORTON.structures.length; i++) {
        HORTON.stills[HORTON.structures[i].id] = 0;
        var positions = findOneStructure(HORTON.structures[i]);
        if (positions)
        {
            HORTON.positions[HORTON.structures[i].id] = [];
            for (var k = 0; k < positions.length; k++) {
                HORTON.stills[HORTON.structures[i].id]++;
                HORTON.positions[HORTON.structures[i].id].push(positions[k]);
            }
        }
    }

     for (var key in HORTON.stills) {
        if (HORTON.stills[key] > 0) {
//            positionsreport = positionsreport + key + ' ' + HORTON.stills[key].toString() + '<br>';

            if (HORTON.positions[key]) {
                for (var h = 0; h < HORTON.structures.length; h++) {
                    if (key == HORTON.structures[h].id) {
                      colorStructure(HORTON.structures[h],HORTON.positions[key]);

                      document.getElementById('struct-' + key.toString()).innerHTML=HORTON.structures[h].name + ': ' + HORTON.stills[key].toString();
                    }
                }
            }
        }
     }


//     document.getElementById('stillsreport').innerHTML = positionsreport;
}

// coloreaza o structura statica gasita

function colorStructure(structure, positions) {
    for (var k = 0; k < positions.length; k++) {
        if (positions[k].rotation == 0) {
            for (var i = positions[k].vert; i < (positions[k].vert + structure.height); i++) {
                for (var j = positions[k].horiz; j < (positions[k].horiz + structure.width); j++) {
                    var cell = document.getElementById(i + "_" + j);
                    if (HORTON.grid[i][j] == 1) {
                        cell.setAttribute("style", "background-color: " + structure.color);
                        cell.classList.add("highlight");
                    }
                }
            }
        } else if (positions[k].rotation == 1) {
            for (var i = positions[k].vert; i < (positions[k].vert + structure.width); i++) {
                for (var j = positions[k].horiz; j < (positions[k].horiz + structure.height); j++) {
                    var cell = document.getElementById(i + "_" + j);
                    if (HORTON.grid[i][j] == 1) {
                        cell.setAttribute("style", "background-color: " + structure.color);
                        cell.classList.add("highlight");
                    }
                }
            }
        } else if (positions[k].rotation == 2) {
            for (var i = positions[k].vert; i < (positions[k].vert + structure.height); i++) {
                for (var j = positions[k].horiz; j < (positions[k].horiz + structure.width); j++) {
                    var cell = document.getElementById(i + "_" + j);
                    if (HORTON.grid[i][j] == 1) {
                        cell.setAttribute("style", "background-color: " + structure.color);
                        cell.classList.add("highlight");
                    }
                }
            }
        } else if (positions[k].rotation == 3) {
            for (var i = positions[k].vert; i < (positions[k].vert + structure.width); i++) {
                for (var j = positions[k].horiz; j < (positions[k].horiz + structure.height); j++) {
                    var cell = document.getElementById(i + "_" + j);
                    if (HORTON.grid[i][j] == 1) {
                        cell.setAttribute("style", "background-color: " + structure.color);
                        cell.classList.add("highlight");
                    }
                }
            }
        }

    }

}

//deep Clone face o copie absoluta a unui array, care nu mai are nici o legatura cu arrayul original.

function deepClone(array) {
    return JSON.parse(JSON.stringify(array));
}

//identifica o anumita structura in grid.

function findOneStructure(structure) {
    var copyarray = deepClone(structure.struct);
    var positions = [];

    if (structure.asymm == 0) {
        var testarray = copyarray;
        for (var i = 0; i <= (HORTON.rows - structure.height); i++) {
            for (var j = 0; j <= (HORTON.cols - structure.width); j++) {
                var part = twodSlice(i, j, structure.width, structure.height);
                    if (XORSum(structure.width, structure.height, testarray, part) == 0) {
                        positions.push({'horiz': j, 'vert': i, rotation: 0});
                    }
            }
        }

    } else if (structure.asymm == 4) {

        var testarray = copyarray;
        for (var i = 0; i <= (HORTON.rows - structure.height); i++) {
            for (var j = 0; j <= (HORTON.cols - structure.width); j++) {
                var part = twodSlice(i, j, structure.width, structure.height);
                    if (XORSum(structure.width, structure.height, testarray, part) == 0) {
                        positions.push({'horiz': j, 'vert': i, rotation: 0});
                    }
            }
        }

        //rotim 90
        // console.log('rotate 90');
        var testarray = rotatep90(copyarray);
        // printme(testarray);
        for (var i = 0; i <= (HORTON.rows - structure.width); i++) {
            for (var j = 0; j <= (HORTON.cols - structure.height); j++) {
                var part = twodSlice(i, j, structure.height, structure.width);
                if (XORSum(structure.height, structure.width, testarray, part) == 0) {
                        positions.push({'horiz': j, 'vert': i, rotation: 1});
                }
            }
        }
        // console.log('rotate 180');
        var testarray = rotatep90(rotatep90(copyarray));
        // printme(testarray);
         for (var i = 0; i <= (HORTON.rows - structure.height); i++) {
            for (var j = 0; j <= (HORTON.cols - structure.width); j++) {
                var part = twodSlice(i, j, structure.width, structure.height);
                if (XORSum(structure.width, structure.height, testarray, part) == 0) {
                        positions.push({'horiz': j, 'vert': i, rotation: 2});
                }
            }
        }

        //rotim 90
        // console.log('rotate -90');
        var testarray = rotatep90(rotatep90(rotatep90(copyarray)));
        // printme(testarray);
        for (var i = 0; i <= (HORTON.rows - structure.width); i++) {
            for (var j = 0; j <= (HORTON.cols - structure.height); j++) {
                var part = twodSlice(i, j, structure.height, structure.width);
                if (XORSum(structure.height, structure.width, testarray, part) == 0) {
                        positions.push({'horiz': j, 'vert': i, rotation: 3});
                }
            }
        }
    } else if (structure.asymm == 2) {
        //nu lucram pe arrayul principal ca il facem praf
        var testarray = copyarray;
        for (var i = 0; i <= (HORTON.rows - structure.height); i++) {
            for (var j = 0; j <= (HORTON.cols - structure.width); j++) {
                var part = twodSlice(i, j, structure.width, structure.height);
                     if (XORSum(structure.width, structure.height, testarray, part) == 0) {
                        positions.push({'horiz': j, 'vert': i, rotation: 0});
                    }
            }
        }

        //rotim 90
         var testarray = rotatep90(copyarray);
         for (var i = 0; i <= (HORTON.rows - structure.width); i++) {
            for (var j = 0; j <= (HORTON.cols - structure.height); j++) {
                var part = twodSlice(i, j, structure.height, structure.width);
                if (XORSum(structure.height, structure.width, testarray, part) == 0) {
                        positions.push({'horiz': j, 'vert': i, rotation: 1});
                }
            }
        }
    }
    return positions;
}

// suma XOR a doua matrici de dimensiuni identice: suma este 0 daca ele au aceleasi elemente pe aceleasi pozitii

function XORSum(width, height, arr1, arr2) {
    var xorsum = 0;

    for (var i = 0; i < height; i++) {
          for (var j = 0; j < width; j++) {
              if (arr1[i][j] != arr2[i][j]) {
                    xorsum++;
                }
          }
      }
    return xorsum;
}

//functia afiseaza toate stills-urile in containerul stillsreport

function displayStills() {
    for (var i = 0; i < HORTON.structures.length; i++) {
           var structcontainer = buildStillTable(HORTON.structures[i]);
           document.getElementById('stillsreport').appendChild(structcontainer);
    }
}

function H_displayStills(container) {
    console.log(container);
    for (var i = 0; i < HORTON.structures.length; i++) {
           var structcontainer = buildStillTable(HORTON.structures[i]);
           document.getElementById(container).appendChild(structcontainer);
    }
}




function buildStillTable(struct) {

    var structcontainer = document.createElement("div");
    structcontainer.classList.add("stilldisplay");

    var table = document.createElement("table");
    table.classList.add("stilltable");

    for (var i = 0; i < struct.height; i++) {
        var tr = document.createElement("tr");
        for (var j = 0; j < struct.width; j++) {//
            var cell = document.createElement("td");
            if (struct.struct[i][j] == 1) {
//            cell.setAttribute("id", i + "_" + j);
                cell.setAttribute("style", "background-color: " + struct.color);
            }
        tr.appendChild(cell);
        }
       table.appendChild(tr);
    }
    structcontainer.appendChild(table);
    var namescontainer = document.createElement("div");
    namescontainer.classList.add('stillname');
    namescontainer.setAttribute('id', 'struct-' + struct.id.toString());
    namescontainer.innerHTML = struct.name;
    structcontainer.appendChild(namescontainer);
    return structcontainer;
}




//returneaza un slice bidimensional al matricii

function twodSlice(row, col, width, height) {
    var slice = []
    for (var i = row; i < (row+height); i++) {
        slice.push(HORTON.grid[i].slice(col, (col + width)));
    }
    return slice;
}


//afiseaza starea fiecarei celule pentru modul 2

function displayDying() {
    resetColorsOgre();
    for (var i = 0; i < HORTON.rows; i++) {
        for (var j = 0; j < HORTON.cols; j++) {
            if (HORTON.grid[i][j] == 1 && HORTON.nextGrid[i][j] == 0) {
                var cell = document.getElementById(i + "_" + j);
                cell.style.backgroundColor = "#c5283d";
                HORTON.deaths ++;

            } else if (HORTON.grid[i][j] == 0 && HORTON.nextGrid[i][j] == 1) {
                var cell = document.getElementById(i + "_" + j);
                cell.style.backgroundColor = "#ffc857";
            } else if (HORTON.grid[i][j] == 1 && HORTON.nextGrid[i][j] == 1) {
                var cell = document.getElementById(i + "_" + j);
                cell.style.backgroundColor = "#92aa83";
                HORTON.births ++;
            }
        }
    }
    updateDeathReport();
}


function updateDeathReport() {
    var report = '<span style="color: #ffc857;">Total morti: ' + HORTON.deaths + '</span><br><span style="color: #c5283d;">' + ' Total nasteri: ' + HORTON.births + '</span>';
    document.getElementById('deathsreport').innerHTML = report;
}





//roteste cu 90 de grade in directia acelor de ceas

function rotatep90 (matrix) {
    var tmatrix = matrix.slice();
    var res = reverseRows(tmatrix.transpose());
    return res;
}

//roteste cu 90 de grade in directia inversa acelor de ceas
function rotaten90 (matrix) {
    var tmatrix = matrix.slice();
    var res = transpose(reverseRows(tmatrix));
    return res;
}

//inverseaza randurile matricii
function reverseRows (matrix) {
    var result = [];
    for (var i = 0; i < matrix.length; i++) {
        result.push(matrix[i].reverse());
    }
    return result;
}

