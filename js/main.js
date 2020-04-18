
//TODO: big refactoring

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
    HORTON.births = 0;
    HORTON.deaths = 0;
    HORTON.runmode = 1; //continuous

    //elementele de interfata

    //hash


    // populeaza selectul de scene
    var istart = document.getElementById("i_start");

    if (HORTON.scenes.length > 0) {
         for (var i = 0; i < HORTON.scenes.length; i++) {
            var option = document.createElement("option");
            option.text = HORTON.scenes[i].name;
            option.value = HORTON.scenes[i].id;
            istart.appendChild(option);
         }
    }

    if (window.location.hash) {
        var pieces = window.location.hash.split('-');
        //update la select
        document.getElementById('i_start').value = pieces[1];
        populateStructure(pieces[1]);
    } else {
        document.getElementById('i_rows').value = HORTON.rows;
        document.getElementById('i_cols').value = HORTON.cols;
        document.getElementById('i_speed').value = HORTON.reproductionTime;
        document.getElementById('i_mod').value = HORTON.mode;
        createTable();
        initializeGrids();
        resetGrids();
    }

    setupControlButtons();

}

function clearGridToStart() {
    console.log('F: ' + arguments.callee.name);
    console.log('Runmode: ' + HORTON.runmode);
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
    HORTON.sumCurrent = 0;
    HORTON.sumNext = 0;
    HORTON.stableCycles = 0;
    HORTON.cycles = 0;
    HORTON.births = 0;
    HORTON.deaths = 0;

    resetColorsOgre();
    initializeGrids();
    resetGrids;
    resetInterface();

}


function resetInterface() {
    //resetam randomul la empty
    document.getElementById('i_start').value = 0;
    document.getElementById('deathsreport').innerHTML = "";
    document.getElementById('gamereport').innerHTML = "";
    document.getElementById('populationdisplay').innerHTML = "";
}


//goleste si defineste cele doua griduri
function initializeGrids() {
    console.log('F: ' + arguments.callee.name);
    console.log('Runmode: ' + HORTON.runmode);
    HORTON.grid = [];
    HORTON.nextGrid = [];
    for (var i = 0; i < HORTON.rows; i++) {
        HORTON.grid[i] = new Array(HORTON.cols);
        HORTON.nextGrid[i] = new Array(HORTON.cols);
    }
}

//umple gridurile cu 0
function resetGrids() {
    console.log('F: ' + arguments.callee.name);
    console.log('Runmode: ' + HORTON.runmode);
    for (var i = 0; i < HORTON.rows; i++) {
        for (var j = 0; j < HORTON.cols; j++) {
            HORTON.grid[i][j] = 0;
            HORTON.nextGrid[i][j] = 0;
        }
    }
}

//copiaza gridul urmator in gridul curent si apoi il goleste
function copyAndResetGrid() {
    console.log('F: ' + arguments.callee.name);
    console.log('Runmode: ' + HORTON.runmode);
    for (var i = 0; i < HORTON.rows; i++) {
        for (var j = 0; j < HORTON.cols; j++) {
            HORTON.grid[i][j] = HORTON.nextGrid[i][j];
            HORTON.nextGrid[i][j] = 0;
        }
    }
}

// creaza tabelul de afisare a gridului
function createTable() {
    console.log('F: ' + arguments.callee.name);
    console.log('Runmode: ' + HORTON.runmode);
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


function displaySumCurrent() {
    console.log('F: ' + arguments.callee.name);
    console.log('Runmode: ' + HORTON.runmode);
    //how the fuck do we do this?
    // we need a table. We add a column to the table? mai bine incercam sa adaugam un rand
    var dtable = document.getElementById('populationdisplay');
    console.log(dtable);
    //randul poate avea valori pornind de la 0 pana la HORTON.rows * HORTON.cols Daca o celula are 2 pixeli
    //si incercam sa afisam pe 200 de pixeli, avem 100 de celule, trebuie sa scalam valoarea curenta
    var maxpixels = 100;
    var cvalue = Math.round((HORTON.sumCurrent * 100) / (HORTON.rows * HORTON.cols));
    console.log('cvalue is: ' + cvalue);
    console.log('top part is: ' + HORTON.sumCurrent * 100);
    console.log('sumcurrent: ' + HORTON.sumCurrent);
    console.log('Bottom part: ' + HORTON.rows * HORTON.cols);

    var tr = document.createElement("tr");

    for  (var i = 0; i < maxpixels; i++) {

        var cell = document.createElement("td");
//        cell.setAttribute("class", "populationcell");
        if (i < cvalue) {
              cell.setAttribute("style", "background-color: #92aa83;border-bottom:1px solid  #1D2528;");
        }
        tr.appendChild(cell);
    }
    dtable.appendChild(tr);

//    document.getElementById('populationreport').scrollIntoView({ behavior: 'smooth', block: 'end' });

      document.getElementById('populationdisplay').scrollIntoView(false);


}

function redrawGrid() {
    console.log('F: ' + arguments.callee.name);
    console.log('Runmode: ' + HORTON.runmode);
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
            HORTON.sumCurrent--;
        } else {
            this.setAttribute("class", "live");
            HORTON.grid[row][col] = 1;
            HORTON.sumCurrent++;
        }

    }

// seteaza celulele din tabel conform gridului
function updateView() {
    console.log('F: ' + arguments.callee.name);
    console.log('Runmode: ' + HORTON.runmode);
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
    console.log('F: ' + arguments.callee.name);
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
                HORTON.grid[i + scene.blocky][j+scene.blockx] = 1;
                var cell = document.getElementById((i + scene.blocky) + "_" + (j + scene.blockx));
                cell.setAttribute("class", "live");
                HORTON.sumCurrent++;
            }
         }
     }
}

//handler pentru schimbarea modului de afisare
function modeChangeHandler() {
    if (this.value == 0) {
        resetColorsOgre();
        document.getElementById('stillsreport').innerHTML = '';
    }
    if (this.value == 1) {
        displayStills();
    }
    HORTON.mode = this.value;
}

// handler pentru popularea aleatoare
function populateRandom() {
    console.log('F: ' + arguments.callee.name);
    if (HORTON.playing) return;
//    clearButtonHandler();

    for (var i = 0; i < HORTON.rows; i++) {
        for (var j = 0; j < HORTON.cols; j++) {
            HORTON.nextGrid[i][j] = 0;
            var isLive = Math.round(Math.random());
            if (isLive == 1) {
                var cell = document.getElementById(i + "_" + j);
                cell.setAttribute("class", "live");
                HORTON.grid[i][j] = 1;
                HORTON.sumCurrent++;
            }
        }
    }

    console.log(HORTON.grid);
    console.log(HORTON.nextGrid);
}

// handler pentru modificarea sliderului de viteza
function sliderChangeHandler() {
    var startButton = document.getElementById('start');
    if (this.value == 1000) {
        //switch to step-by-step mode
        console.log('switching to runmode 0');
        clearTimeout(HORTON.timer);
        startButton.innerHTML = "Pasul urmator";
        HORTON.runmode = 0;
    } else {
        console.log('setting runmode 1');
        if (HORTON.playing == 1) {
            startButton.innerHTML = "Pauza";
        } else if (HORTON.playing == 0) {
            startButton.innerHTML = "Ruleaza";
        }
        clearTimeout(HORTON.timer);
        HORTON.reproductionTime = this.value;
        HORTON.runmode = 1;
        if (HORTON.playing) {
            HORTON.timer = setTimeout(play, HORTON.reproductionTime);
        }
    }
}


//goleste gridul
function clearButtonHandler() {
    clearGridToStart();
}

// porneste/opreste simularea
function startButtonHandler() {
    //daca gridul e gol, nu pornim

     console.log(HORTON.grid);
     console.log(HORTON.nextGrid);

     //
    // console.log('Sum current' + HORTON.sumCurrent);
    // console.log('Sum next' + HORTON.sumNext);
    //
    // sumCurrentGrid();
    // sumNextGrid();
    //
    // console.log('Sum current after' + HORTON.sumCurrent);
    // console.log('Sum next after' + HORTON.sumNext);


    if (HORTON.sumCurrent > 0 || HORTON.sumNext > 0) {

        if (HORTON.runmode == 0) {
            play();
        } else if (HORTON.runmode == 1) {
            if (HORTON.playing) {
                console.log("Pause the game");
                HORTON.playing = false;
                this.innerHTML = "Ruleaza";
                clearTimeout(HORTON.timer);
            } else {
                console.log("Continue the game");
                HORTON.playing = true;
                this.innerHTML = "Pauza";
                play();
            }
        }
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
    console.log('F: ' + arguments.callee.name);
        //oprim daca sumCurrent e 0
        console.log('SumCurrent: ' + HORTON.sumCurrent);
        if (HORTON.sumCurrent > 0) {
            console.log('RM play 1' + HORTON.runmode);
            if (HORTON.mode == 1) {
                findStructures();
            }
            console.log('RM play 2' + HORTON.runmode);
            nextGeneration();
            console.log('RM play 3' + HORTON.runmode);
            if (HORTON.mode == 2) {
                displayDying();
            }
            copyAndResetGrid();
            updateView();
            if (HORTON.runmode == 0) {
                console.log('--- runmode 0 ------');
            } else if (HORTON.runmode == 1) {
                console.log('--- runmode 1 ------');
                if (HORTON.playing) {
                    HORTON.timer = setTimeout(play, HORTON.reproductionTime);
                }
            }
        }
}



//genereaza noua generatie. Odata cu aceasta calculeaza modificarile de populatie si raporteaza
//numarul de cicluri si stabilitatea populatiei.

function nextGeneration() {
    console.log('F: ' + arguments.callee.name);
    console.log('Runmode: ' + HORTON.runmode);
    HORTON.sumCurrent = 0;
    HORTON.sumNext = 0;
    HORTON.cycles++;
    for (var i = 0; i < HORTON.rows; i++) {
        for (var j = 0; j < HORTON.cols; j++) {
            applyRules(i, j);
        }
    }

    printme(HORTON.grid);

    for (var i = 0; i < HORTON.rows; i++) {
        for (var j = 0; j < HORTON.cols; j++) {
            HORTON.sumCurrent += HORTON.grid[i][j];
        }
    }

    console.log('SumCurrent nextgen: ' +HORTON.sumCurrent );

    document.getElementById('gamereport').innerHTML = "Cicluri: "+ HORTON.cycles + ' (populatie: ' + HORTON.sumCurrent + ')';
    sumNextGrid();

    if (HORTON.sumCurrent == HORTON.sumNext) {
        HORTON.stableCycles++;
        if (HORTON.stableCycles > 10) {
            document.getElementById('gamereport').innerHTML = "Cicluri: "+ HORTON.cycles + " ( populatie  " + HORTON.sumCurrent + " stabila)";
        }
    } else {
        HORTON.stableCycles == 0;
    }
    displaySumCurrent();
}

// calculeaza suma tuturor celulelor vii din gridul urmatoarei generatii

function sumNextGrid() {
    console.log('F: ' + arguments.callee.name);
    console.log('Runmode: ' + HORTON.runmode);
    HORTON.sumNext = 0;
     for (var i = 0; i < HORTON.rows; i++) {
        for (var j = 0; j < HORTON.cols; j++) {
            HORTON.sumNext += HORTON.nextGrid[i][j];
        }
    }
}


function sumCurrentGrid() {
    console.log('sum current');
    console.log('rows: ' + HORTON.rows);
    console.log('cols: ' + HORTON.cols);

    for (var i = 0; i < HORTON.rows; i++) {
        for (var j = 0; j < HORTON.cols; j++) {
           // console.log(HORTON.grid[i][j]);
            HORTON.sumCurrent += HORTON.grid[i][j];
        }
    }
}


// reseteaza toate culorile  din grid
function resetColorsOgre() {
    console.log('F: ' + arguments.callee.name);
    console.log('Runmode: ' + HORTON.runmode);
       for (var i = 0; i < HORTON.rows; i++) {
        for (var j = 0; j < HORTON.cols; j++) {
                var cell = document.getElementById(i + "_" + j);
                cell.style.backgroundColor = "";
        }
    }
}



function printme(arr) {
    console.log('F: ' + arguments.callee.name);
    console.log('Runmode: ' + HORTON.runmode);
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