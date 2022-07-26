const addBtn = document.getElementById("add");

const notes = JSON.parse(localStorage.getItem("notes"));
//if a note is already present then new will be added accordingly(i.e, next to already present note).
if(notes){
  notes.forEach((note) =>{
    addNewNote(note); //Calling addNewNote function()
  });
}

addBtn.addEventListener("click", () =>{//we add a event listener for addnote button
  addNewNote(); //we call addNewNote function() for creating new notes.
});
 //function addNewNote() creates as many notes u want.
function addNewNote(text = ""){
  const note = document.createElement("div"); //Here we create a div element for note window.
  note.classList.add("note");
 //Now we creting the structure of note window with buttons and icons
        //Next we create another div and add textarea where the note is stored.
  note.innerHTML = `
    <div class="notes">
      <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
      </div>
      <div class="main ${text ? "" : "hidden"}"></div>
      <textarea class="${text ? "hidden" : ""}"></textarea>
    </div>
  `;

  const editBtn = note.querySelector(".edit");//Now we declare variable for edit note button
  const deleteBtn = note.querySelector(".delete"); //Now we declare variable for delete note button

  const main = note.querySelector(".main");//Now we declare variable for main div.
  const textArea = note.querySelector("textarea");//Now we declare variable for Notes textarea.

  textArea.value = text;   //we place the text inside textarea.
  main.innerHTML = marked(text); //we mark note as marked.

  editBtn.addEventListener("click", () =>{  //we add a eventListener for edit note button.
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  deleteBtn.addEventListener("click", () =>{ //we add a eventListener for delete note button.
    note.remove();

    updateLocalStorage(); //We call updateLocalStorage().
  });

  textArea.addEventListener("input", (e) =>{//we add a eventListener for textarea.
    const { value } = e.target; //On user Input we add the input into the text area
    main.innerHTML = marked(value);

    updateLocalStorage(); //We call updateLocalStorage() function to keep the note updated
  });

  document.body.appendChild(note);
}
//Fucntion UpdateLocalStorage() is to update local storage on actions such as edit,delete & add new note.
function updateLocalStorage(){
  const notesTxt = document.querySelectorAll("textarea");
  const notes = [];

  notesTxt.forEach((note) => {
    notes.push(note.value);
  });

  localStorage.setItem("notes", JSON.stringify(notes)); //we push every notes to local storage.
}
