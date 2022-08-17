

const addnote = document.querySelector("#addnote");
const notes_container=document.querySelector("#notes_container");
const backgroundcolors= document.getElementById("backgroundcolor");
const bgcolors=document.getElementById("bgcolor");
const textcolors=document.getElementById("textcolor");
const textareas = document.getElementsByClassName("text__area");
var notecount = 0;

function setbgcolor(note){
    note.lastElementChild.style.backgroundColor=localStorage.getItem(note.id+ "bgdcolor");
}

function bgcolor(e) {
    e.parentElement.nextElementSibling.nextElementSibling.firstChild.style.backgroundColor=e.value;
    localStorage.setItem(e.parentElement.parentElement.id + "bgdcolor", e.value);
    return localStorage.getItem(e.parentElement.parentElement.id + "bgdcolor");
}

function Textcolor(event){
       event.parentElement.nextElementSibling.nextElementSibling.firstChild.style.color=event.value;
       localStorage.setItem("txtcolor", event.value);
       return localStorage.getItem("txtcolor");
     }


function addNoteBGColor() {
    let i=1;
            var note = document.getElementById(i+"NoteID");
            while(note != null) {
                setbgcolor(note);
                i++;
                note = document.getElementById(i+"NoteID");
            }
        }

addnote.addEventListener("click", function(){
    addNote();
})

const saveNotes = () => {
    const notes=document.querySelectorAll(".note textarea")
    
    
    const data=[];
    notes.forEach((note) => {
        data.push(note.value);
        
    });
    

    if(data.length === 0){
        localStorage.removeItem("notes");
    }
    else{
        localStorage.setItem("notes", JSON.stringify(data));
    }
   
}



const addNote = (text="") => {
   const note=document.createElement("div");
   note.classList.add("note");
   notecount++;
   note.setAttribute("id", notecount + "NoteID");
  
   note.innerHTML=`
   <div class="toolbar">
            <input type="color" class="bgcolor" id="backgroundcolor">
            <input type="color" class="textcolor" id="Textcolor">
            <i class="save fa-solid fa-floppy-disk"></i>
            <i class="trash fa-solid fa-trash"></i>
    </div>
    <textarea id="emoji" class="text__area" placeholder="Type your notes here....">${text}</textarea>
   `;



    note.querySelector(".bgcolor").addEventListener("change", function(e){
        bgcolor(this);
        saveNotes();
    })

    note.querySelector(".textcolor").addEventListener("change", function(event){
        Textcolor(this);
        saveNotes();
    })

    note.querySelector(".trash").addEventListener("click", function(){
        note.remove();
        saveNotes();
    })

    note.querySelector(".save").addEventListener("click", function(){
        saveNotes();
    })

    note.querySelector("textarea").addEventListener("focusout", function(){
        saveNotes();
    })

   notes_container.append(note);
   saveNotes();

   $("textarea").emojioneArea({

    pickerPosition: "bottom"
});
}


    function refreshmain(){
        var lsnotes = JSON.parse(localStorage.getItem("notes"));
       

        if(lsnotes ===  null){
            addNote();
        }
        else{
            lsnotes.forEach((lsNote) => {
                addNote(lsNote);
            });
        }

        
    }

refreshmain();
addNoteBGColor();
 



















