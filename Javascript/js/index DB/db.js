// creat database in indexedDB
let db = null;
const btnCreateDB = document.getElementById("createDB");
const dbInput = document.getElementById("txtDB");
btnCreateDB.addEventListener("click",createDB);

const addbtn = document.getElementById("add");
addbtn.addEventListener("click",addNote);
function addNote(){
    const note={
        title:"appointment",
        text:"I have today no appointment"
    };
    const dbNote = db.transaction("personal-notes","readwrite");
    dbNote.onerror = function(e){
        alert(`error:${e.target}`);
        const pNote = dbNote.objectStore("personal-notes");
        pNote.add(note);
    }
}

function createDB(){
     const dbName = dbInput.value;
     const dbVersion = document.getElementById("txtVersion").value;
     const request = indexedDB.open(dbName,dbVersion);
     // on upgrade needed
     request.onupgradeneeded=function(e){
     db = e.target.result;
        alert(`Upgrade is called the DB name : ${db.name} with version : ${db.version}`);
     const privateNotes = db.createObjectStore("personal-notes");
     const todoNotes = db.createObjectStore("todo-notes");
     }
     // on success
    request.onsuccess=function(e){
        db = e.target.result;
        alert(`Success is called the DB name : ${db.name} with version : ${db.version}`);
    }
    //on Error
    request.onerror = function(e){
        db = e.target.result;
        alert(`Error: ${e.target.error} is found`);
    }
}