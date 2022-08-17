let bsperformance = 0;
let htmlperformance = 0;
let cssperformance = 0;
let jsperformance = 0;

let bscheckboxes = document.getElementsByClassName("bs-chk");
let csscheckboxes = document.getElementsByClassName("css-chk");
let htmlcheckboxes = document.getElementsByClassName("html-chk");
let jscheckboxes = document.getElementsByClassName("js-chk");
let explore = document.getElementById("explore");




for(let i of bscheckboxes){
i.addEventListener("click", function(){
    if(this.checked==true){
        bsperformance = bsperformance + 10;
        $(".bs-performance span").text(bsperformance+"%");
    }
    else{
        bsperformance = bsperformance - 10;
        $(".bs-performance span").text(bsperformance+"%");
    }
  
});
}


for(let i of csscheckboxes){
    i.addEventListener("click", function(){
        if(this.checked==true){
            cssperformance = cssperformance + 10;
            $(".css-performance span").text(cssperformance+"%");
        }
        else{
            cssperformance = cssperformance - 10;
            $(".css-performance span").text(cssperformance+"%");
        }
      
    });
    }


for(let i of htmlcheckboxes){
    i.addEventListener("click", function(){
        if(this.checked==true){
            htmlperformance = htmlperformance + 10;
            $(".html-performance span").text(htmlperformance+"%");
        }
        else{
            htmlperformance = htmlperformance - 10;
            $(".html-performance span").text(htmlperformance+"%");
        }
          
    });
}

for(let i of jscheckboxes){
    i.addEventListener("click", function(){
        if(this.checked==true){
            jsperformance = jsperformance + 10;
            $(".js-performance span").text(jsperformance+"%");
        }
        else{
            jsperformance = jsperformance - 10;
            $(".js-performance span").text(jsperformance+"%");
        }
              
    });
}


function explorefunc(){
    if(jsperformance == 100 && cssperformance == 100 && htmlperformance == 100 && bsperformance == 100)
    {
        $("#explore-todolist").show();
    }
    else{
        $("#explore-todolist").hide();
        alert("please complete the course");
    }

}


