const toDoItems = document.getElementsByClassName("todo-list-items")[0];
const input1 = document.getElementById("input");
const trashIcon = document.getElementById("trash");
let listscounts = document.getElementsByClassName("countlist");


let listcount=0;
let checkcount=0;
let checkstyle=0;



function addtodo(){

    

    let todotext = input1.value;
   
    let divparent = document.createElement("div");
    let divchild = document.createElement("div");
    let checkIcon = document.createElement("i");
    let trashIcon = document.createElement("i");

    divparent.className="item";
    
    divparent.innerHTML='<div>'+todotext+'</div>';

    checkIcon.className="bi bi-patch-check-fill";
    checkIcon.style.color="ligthgray";
    checkIcon.addEventListener("click", function(){
        checkcount++;
        checkstyle=1;

        checkIcon.style.color="limegreen";
        $(".countlist").text("Concepts Progress : "+checkcount + "/" + listcount);
    });

    divchild.appendChild(checkIcon);

    trashIcon.className= "bi bi-trash3-fill";
    trashIcon.style.color="darkhgray";
    trashIcon.addEventListener("click", function(event){

        if(event.target.parentElement.firstChild.style.color == "limegreen"){
            checkstyle=1;
        }
        else{
            checkstyle=0;
        }

        
        if(checkcount > 0 && checkstyle === 0){
            listcount--;
        }
        else if(checkcount > 0 && checkstyle === 1){
            listcount--;
            checkcount--;
        }
        
       divparent.remove();
       $(".countlist").text("Concepts Progress : "+checkcount + "/" + listcount);
    });

    if(todotext){
        divchild.appendChild(trashIcon);
        divparent.appendChild(divchild);
        toDoItems.appendChild(divparent);
        listcount++;
    }

    input1.value="";

    // listscounts.innerHTML= checkcount + "/" + listcount;

    $(".countlist").text("Concepts Progress : "+checkcount + "/" + listcount);

}