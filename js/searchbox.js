let concepts=["HTML Basics", "HTML", "Tags", "Elements", "Self closing tags","Div","Class","Id"];

let sortedConcepts=concepts.sort(); // sorting concepts in ascending order

// reference to the input value
let input = document.getElementById("input");

// Executing the keyup function where after pressing a key in keyboard
input.addEventListener("keyup", (e) => {
    /*initially remove all elements because when user delete a letter or add another
        letter to the input then we will get clear output*/
        removeElements();
    // loop through above array
    for (let i of sortedConcepts){
        //converting input to lowercase and compare with each string of the list.
        
        if(i.toLowerCase().startsWith(input.value.toLowerCase()) && input.value != ""){
            // create li element to the list
            let listItem = document.createElement("li");
            // one common classname
            listItem.classList.add("list-items");
            listItem.style.cursor="pointer";
            listItem.setAttribute("onclick", "displayConcepts('"+i+" ')"); 
            //Display matched part in bold
            let word = "<b>" + i.substring(0, input.value.length) + "</b>";
            word += i.substring(input.value.length);
            // display the value in the array
            listItem.innerHTML=word;
            document.querySelector(".list").appendChild(listItem);
        }
    } 
});

// defining displayConcepts function

function displayConcepts(value){
    input.value=value;
    removeElements();
}


function removeElements(){
    // clear the elements
    let items=document.querySelectorAll(".list-items");
    items.forEach((item) => {
        item.remove();
    });

}



