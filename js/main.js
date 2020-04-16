

// Initializare
function H_initialize() {

//aici va trebui sa verificam toate componentele, containere, functii, etc.


//

    HORTON.playing = false;
    HORTON.grid = new Array(HORTON.rows);
    HORTON.nextGrid = new Array(HORTON.rows);
    HORTON.timer = '';
    HORTON.sumCurrent = 0;
    HORTON.sumNext = 0;
    HORTON.stableCycles = 0;
    HORTON.cycles = 0;

    //elementele de interfata

    document.getElementById('i_rows').value = HORTON.rows;
    document.getElementById('i_cols').value = HORTON.cols;
    document.getElementById('i_speed').value = HORTON.reproductionTime;
    document.getElementById('i_mod').value = HORTON.mode;

    var istart = document.getElementById("i_start");

    console.log(istart);

    if (HORTON.scenes.length > 0) {
         for (var i = 0; i < HORTON.scenes.length; i++) {
            var option = document.createElement("option");
            option.text = HORTON.scenes[i].name;
            option.value = HORTON.scenes[i].id;
            console.log(option);
            istart.appendChild(option);
         }
    }

    createTable();
    initializeGrids();
    resetGrids();
    setupControlButtons();
}

//goleste si defineste cele doua griduri
function initializeGrids() {
    HORTON.grid = [];
    HORTON.nextGrid = [];
    for (var i = 0; i < HORTON.rows; i++) {
        HORTON.grid[i] = new Array(HORTON.cols);
        HORTON.nextGrid[i] = new Array(HORTON.cols);
    }
}

//umple gridurile cu 0
function resetGrids() {
    for (var i = 0; i < HORTON.rows; i++) {
        for (var j = 0; j < HORTON.cols; j++) {
            HORTON.grid[i][j] = 0;
            HORTON.nextGrid[i][j] = 0;
        }
    }
}

//copiaza gridul urmator in gridul curent si apoi il goleste
function copyAndResetGrid() {
    for (var i = 0; i < HORTON.rows; i++) {
        for (var j = 0; j < HORTON.cols; j++) {
            HORTON.grid[i][j] = HORTON.nextGrid[i][j];
            HORTON.nextGrid[i][j] = 0;
        }
    }
}

// creaza tabelul de afisare a gridului
function createTable() {
    var gridContainer = document.getElementById('gridContainer');
    if (!gridContainer) {
        // Throw error
        console.error("Nu exista containerul pentru crearea tabelului");
    }
    var table = document.createElement("table");

    for (var i = 0; i < HORTON.rows; i++) {
        var tr = document.createElement("tr");
        for (var j = 0; j < HORTON.cols; j++) {//
            var cell = document.createElement("td");
            cell.setAttribute("id", i + "_" + j);
            cell.setAttribute("class", "dead");
            cell.onclick = cellClickHandler;
            tr.appendChild(cell);
        }
        table.appendChild(tr);
    }
    gridContainer.appendChild(table);
}


function redrawGrid() {
    document.getElementById('gridContainer').innerHTML = "";
    createTable();
    initializeGrids();
    resetGrids();
}

// permite modificarea unei celule din vie in moarta

function cellClickHandler() {
        var rowcol = this.id.split("_");
        var row = rowcol[0];
        var col = rowcol[1];

        var classes = this.getAttribute("class");
        if(classes.indexOf("live") > -1) {
            this.setAttribute("class", "dead");
            HORTON.grid[row][col] = 0;
        } else {
            this.setAttribute("class", "live");
            HORTON.grid[row][col] = 1;
        }

    }

// seteaza celulele din tabel conform gridului
function updateView() {
     for (var i = 0; i < HORTON.rows; i++) {
         for (var j = 0; j < HORTON.cols; j++) {
             var cell = document.getElementById(i + "_" + j);
             if (HORTON.grid[i][j] == 0) {
                 cell.setAttribute("class", "dead");
             } else {
                 cell.setAttribute("class", "live");
             }
         }
     }
}

//seteaza evenimentele pentru elementele de control
function setupControlButtons() {
    // Schimba dimensiunea gridului
    var changeButton = document.getElementById('change');
    changeButton.onclick = changeButtonHandler;

    // Start / Stop
    var startButton = document.getElementById('start');
    startButton.onclick = startButtonHandler;

    // Goleste gridul
    var clearButton = document.getElementById('clear');
    clearButton.onclick = clearButtonHandler;

    // populeaza aleator gridul
    // var randomButton = document.getElementById("random");
    // randomButton.onclick = randomButtonHandler;

    // Modifica modul de afisare
    var modeselect = document.getElementById("i_mod");
    modeselect.onchange = modeChangeHandler;

    // Modifica viteza de evolutie
    var slider = document.getElementById("i_speed");
    slider.onchange = sliderChangeHandler;

    var start = document.getElementById("i_start");
    start.onchange = startChangeHandler;
}


function startChangeHandler() {
    console.log(this.value);
    //random population
    if (this.value == 1) {
        populateRandom();
    } else if (this.value > 1) {
        populateStructure(this.value);
    }
}

function populateStructure(structid) {
    if (HORTON.scenes.length > 0) {
        for (var i = 0; i < HORTON.scenes.length; i++) {
            if (HORTON.scenes[i].id == structid) {
                //refacem gridul cu noile dimensiuni
                HORTON.cols = HORTON.scenes[i].scenewidth;
                HORTON.rows = HORTON.scenes[i].sceneheight;
                document.getElementById('i_rows').value = HORTON.rows;
                document.getElementById('i_cols').value = HORTON.cols;

                if (HORTON.playing) {
                    HORTON.playing = false;
                    clearTimeout(HORTON.timer);
                }
                initializeGrids();
                resetGrids();
                document.getElementById('gridContainer').innerHTML = "";
                createTable();
                placeScene(HORTON.scenes[i]);
                console.log(HORTON.grid);
//                redrawGrid();
            }
        }
    }
}


function placeScene(scene) {
     for (var i = 0; i < scene.blockheight; i++) {
         for (var j = 0; j < scene.blockwidth; j++) {
            if (scene.struct[i][j] == 1) {
                console.log('placing one at: ' + (i + scene.blocky).toString() + ' ' + (j + scene.blockx).toString());
                HORTON.grid[i + scene.blocky][j+scene.blockx] = 1;
                var cell = document.getElementById((i + scene.blocky) + "_" + (j + scene.blockx));
                cell.setAttribute("class", "live");
            }
         }
     }
}

//handler pentru schimbarea modului de afisare
function modeChangeHandler() {
    console.log(this.value);
    if (this.value == 0) {
        resetColorsOgre();
        document.getElementById('stillsreport').innerHTML = '';
    }
    HORTON.mode = this.value;
}

// handler pentru popularea aleatoare
function populateRandom() {
    if (HORTON.playing) return;
    clearButtonHandler();
    for (var i = 0; i < HORTON.rows; i++) {
        for (var j = 0; j < HORTON.cols; j++) {
            var isLive = Math.round(Math.random());
            if (isLive == 1) {
                var cell = document.getElementById(i + "_" + j);
                cell.setAttribute("class", "live");
                HORTON.grid[i][j] = 1;
            }
        }
    }
}

// handler pentru modificarea sliderului de viteza
function sliderChangeHandler() {
    clearTimeout(HORTON.timer);
    HORTON.reproductionTime = this.value;
    if (HORTON.playing) {
        HORTON.timer = setTimeout(play, HORTON.reproductionTime);
    }
}


//goleste gridul
function clearButtonHandler() {
    HORTON.playing = false;
    var startButton = document.getElementById('start');
    startButton.innerHTML = "Start";
    clearTimeout(HORTON.timer);

    var cellsList = document.getElementsByClassName("live");
    var cells = [];
    for (var i = 0; i < cellsList.length; i++) {
        cells.push(cellsList[i]);
    }
    for (var i = 0; i < cells.length; i++) {
        cells[i].setAttribute("class", "dead");
    }
    resetColorsOgre();
    resetGrids;
}

// porneste/opreste simularea
function startButtonHandler() {
    if (HORTON.playing) {
        console.log("Pause the game");
        HORTON.playing = false;
        this.innerHTML = "Continue";
        clearTimeout(HORTON.timer);
    } else {
        console.log("Continue the game");
        HORTON.playing = true;
        this.innerHTML = "Pause";
        play();
    }
}

//schimba numarul de randuri si de coloane cf. elementelor de interfata
function changeButtonHandler() {
    console.log('changeButtonHandler');
    var rowsInput = document.getElementById('i_rows').value;
    var colsInput = document.getElementById('i_cols').value;
    if (rowsInput == 0 || colsInput == 0) {
        alert("Numarul de randuri si numarul de coloane trebuie sa fie mai mari decat 0");
    } else {
        console.log('changing grid');
        HORTON.cols = colsInput;
        HORTON.rows = rowsInput;
        if (HORTON.playing) {
            HORTON.playing = false;
            clearTimeout(HORTON.timer);
        }
        redrawGrid()
    }
}



// ruleaza simularea
function play() {
    if (HORTON.mode == 1) {
        findStructures();
    }
    console.log('nex generation');
    nextGeneration();
    if (HORTON.mode == 2) {
        displayDying();
    }
    console.log('copy and reset');
    copyAndResetGrid();
    console.log('updateview');
    updateView();
    if (HORTON.playing) {
        HORTON.timer = setTimeout(play, HORTON.reproductionTime);
    }
}


//genereaza noua generatie. Odata cu aceasta calculeaza modificarile de populatie si raporteaza
//numarul de cicluri si stabilitatea populatiei.

function nextGeneration() {
    HORTON.sumCurrent = 0;
    HORTON.sumNext = 0;
    HORTON.cycles++;
    document.getElementById('gamereport').innerHTML = "Cicluri: "+ HORTON.cycles;
    for (var i = 0; i < HORTON.rows; i++) {
        for (var j = 0; j < HORTON.cols; j++) {
            applyRules(i, j);
            HORTON.sumCurrent += HORTON.grid[i][j];
        }
    }
    sumNextGrid();

    if (HORTON.sumCurrent == HORTON.sumNext) {
        console.log('stable population');
        HORTON.stableCycles++;
        if (HORTON.stableCycles > 10) {
            document.getElementById('gamereport').innerHTML = "Cicluri: "+ HORTON.cycles + " populatie stabila";
        }
    }


}

// calculeaza suma tuturor celulelor vii din gridul urmatoarei generatii

function sumNextGrid() {
     for (var i = 0; i < HORTON.rows; i++) {
        for (var j = 0; j < HORTON.cols; j++) {
            applyRules(i, j);
            HORTON.sumNext += HORTON.nextGrid[i][j];
        }
    }
}

// reseteaza toate culorile  din grid
function resetColorsOgre() {
       for (var i = 0; i < HORTON.rows; i++) {
        for (var j = 0; j < HORTON.cols; j++) {
                var cell = document.getElementById(i + "_" + j);
                cell.style.backgroundColor = "";
        }
    }
}



function printme(arr) {
     console.log('-----------');
     for (var i = 0; i < arr.length; i++) {
         var line = '';
         for (var j = 0; j < arr[i].length; j++) {
            line = line + (arr[i][j].toString());
         }
         console.log( i.toString() + ': ' + line);
     }
     console.log('-----------');
}



// Aplica regulile pentru o celula
// Orice celula cie si are mai putin de doi vecini vii moare de izolare
// Orice celula vie care are doi sau trei vecini traieste
// Orice celula vie care are mai mult de trei vecini moare de inghesuiala
// Orice celula moarta care are exact trei vecini va deveni o celula vie (reproducere)

function applyRules(row, col) {
    var numNeighbors = countNeighbors(row, col);
    if (HORTON.grid[row][col] == 1) {
        if (numNeighbors < 2) {
            HORTON.nextGrid[row][col] = 0;
        } else if (numNeighbors == 2 || numNeighbors == 3) {
            HORTON.nextGrid[row][col] = 1;
        } else if (numNeighbors > 3) {
            HORTON.nextGrid[row][col] = 0;
        }
    } else if (HORTON.grid[row][col] == 0) {
            if (numNeighbors == 3) {
                HORTON.nextGrid[row][col] = 1;
            }
        }
    }

//numara vecinii unei anumite celule

function countNeighbors(row, col) {
    var count = 0;
    if (row-1 >= 0) {
        if (HORTON.grid[row-1][col] == 1) count++;
    }
    if (row-1 >= 0 && col-1 >= 0) {
        if (HORTON.grid[row-1][col-1] == 1) count++;
    }
    if (row-1 >= 0 && col+1 < HORTON.cols) {
        if (HORTON.grid[row-1][col+1] == 1) count++;
    }
    if (col-1 >= 0) {
        if (HORTON.grid[row][col-1] == 1) count++;
    }
    if (col+1 < HORTON.cols) {
        if (HORTON.grid[row][col+1] == 1) count++;
    }
    if (row+1 < HORTON.rows) {
        if (HORTON.grid[row+1][col] == 1) count++;
    }
    if (row+1 < HORTON.rows && col-1 >= 0) {
        if (HORTON.grid[row+1][col-1] == 1) count++;
    }
    if (row+1 < HORTON.rows && col+1 < HORTON.cols) {
        if (HORTON.grid[row+1][col+1] == 1) count++;
    }
    return count;
}



window.onload = H_initialize;