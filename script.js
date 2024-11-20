function genera(){
    let n = parseInt(document.getElementById("n").value);
    let forma = parseInt(document.getElementById("forma").value)
    let col=n;
    let rig=n;
    let divtabella=document.getElementById("tabella");
    let tabella = document.createElement("table");

    document.getElementById("tabella").innerHTML = "";
    switch (forma){
        case 1:
            qpieno(rig, col, tabella);
            break;
        case 2:
            qvuoto(rig, col, tabella);
            break;
        case 3:
            triangolo(rig, col, tabella);
            break;
        case 4:
            labirinto(rig, col, tabella);
            break;
    }
    divtabella.appendChild(tabella);
}

function qpieno(rig, col, tabella){
    for(i=0; rig>i; i++){
        const riga= document.createElement('tr');
        for(j=0; col>j; j++){
            const colonna = document.createElement('td');
            let stella = document.createTextNode(' * ');
            colonna.appendChild(stella);
            riga.appendChild(colonna);
        }
        tabella.appendChild(riga);
    }
}

function qvuoto(rig, col, tabella){
    for(i=0; rig>i; i++){
        const riga= document.createElement('tr');
        if (i == 0 || i == rig-1){
            for(j=0; col>j; j++){
            const colonna = document.createElement('td');
            let stella = document.createTextNode(' * ');
            colonna.appendChild(stella);
            riga.appendChild(colonna);
            }
        }else{
        for(j=0; col>j; j++){
            const colonna = document.createElement('td');
            if (j==0 || j== col-1 ){
                let stella = document.createTextNode(' * ');
                colonna.appendChild(stella);
            }else{
                let stella = document.createTextNode('  ');
                colonna.appendChild(stella);
            }
            riga.appendChild(colonna);
        }
    }
        tabella.appendChild(riga);
    }
}

function triangolo(rig, col, tabella){
    let cont = 0;
    for(i=0; rig>i; i++){
        const riga = document.createElement('tr');
        for (j=0; j<=cont; j++){
            const colonna= document.createElement('td');
            let stella = document.createTextNode(' * ');
            colonna.appendChild(stella);
            riga.appendChild(colonna);
        }
        cont++;
        tabella.appendChild(riga);
    }
}

function labirinto(rig, col, tabella){
    for(i=0; rig>i; i++){
        const riga = document.createElement('tr');
        for (j=0; col>j; j++){
            let rnd = Math.round(Math.random()*1);
            const colonna= document.createElement('td');
            if(rnd==0){
                let stella = document.createTextNode(' *' );
                colonna.appendChild(stella);
            }else{
                let stella = document.createTextNode(' + ');
                colonna.appendChild(stella);
            }
            riga.appendChild(colonna);
        }
        tabella.appendChild(riga);
    }
}