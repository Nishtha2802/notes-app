const adddTitle = document.getElementById("adddTitle");
const adddText = document.getElementById("adddText");
const adddNoteButtton = document.getElementById("adddNote");
const notesDiv = document.getElementById("notes");
showNotes();

function adddNotes() {
    let notes=localStorage.getItem('notes');
    if(notes==='null'){
        notes=[];
    }else{
        notes=JSON.parse(notes);
    }
    if (adddText.value == '') {
        alert("Addd Your Notes")
        return;
    }
    const noteObj = {
        title: adddTitle.value,
        text: adddText.value,
    }
    adddTitle.value="";
    adddText.value="";
    notes.push(noteObj);
    localStorage.setItem('notes',JSON.stringify(notes));
    showNotes();
}

function showNotes() {
    let notesHTML = '';
    let notes=localStorage.getItem('notes');
    if(notes==='null'){

    return;
    }else{
        notes=JSON.parse(notes);
    }
    for (let i = 0; i < notes.length; i++) {
        notesHTML += `<div class="note">
        <button class="deleteNote" id=${i} onclick="deleteNote(${i})">Delete</button>
        <div class="title">${notes[i].title === "" ? "NOTE" : notes[i].title}</div>
            <div class="text">${notes[i].text}</div>
    </div>`
    }
    notesDiv.innerHTML = notesHTML;
}

function deleteNote(ind){
    let notes=localStorage.getItem('notes');
    if(notes==='null'){
       return;
    }else{
        notes=JSON.parse(notes);
    }
    notes.splice(ind,1);
    localStorage.setItem("notes",JSON.stringify(notes));
    showNotes();

}
adddNoteButtton.addEventListener('click', adddNotes);