var topic1__content = document.querySelector("#topic1__content--holder");
var topic2__content = document.querySelector("#topic2__content--holder");
var topic3__content = document.querySelector("#topic3__content--holder");
var topic4__content = document.querySelector("#topic4__content--holder");
var taskl__content = document.querySelector("#task1__content--holder");
var task2__content = document.querySelector("#task2__content--holder");
var task3__content = document.querySelector("#task3__content--holder");
var t1__htmlcode = document.querySelector(".T1html__code--section");
var t1__csscode = document.querySelector(".T1css__code--section");
var t1__jscode = document.querySelector(".T1js__code--section");
var t2__htmlcode = document.querySelector(".T2html__code--section");
var t2__csscode = document.querySelector(".T2css__code--section");
var t2__jscode = document.querySelector(".T2js__code--section");



function topic1()
{
    topic1__content.classList.remove("hide");
    topic2__content.classList.add("hide");
    topic3__content.classList.add("hide");
    topic4__content.classList.add("hide");
}

function topic2()
{
    topic1__content.classList.add("hide");
    topic2__content.classList.remove("hide");
    topic3__content.classList.add("hide");
    topic4__content.classList.add("hide");
}

function topic3()
{
    topic1__content.classList.add("hide");
    topic2__content.classList.add("hide");
    topic3__content.classList.remove("hide");
    topic4__content.classList.add("hide");
}

function topic4()
{
    topic1__content.classList.add("hide");
    topic2__content.classList.add("hide");
    topic3__content.classList.add("hide");
    topic4__content.classList.remove("hide");
}


function task1()
{
    taskl__content.classList.remove("hide");
    task2__content.classList.add("hide");
    task3__content.classList.add("hide");
}

function task2()
{
    taskl__content.classList.add("hide");
    task2__content.classList.remove("hide");
    task3__content.classList.add("hide");
}

function task3()
{
    taskl__content.classList.add("hide");
    task2__content.classList.add("hide");
    task3__content.classList.remove("hide");
}


function task1htmlcode()
{
    t1__htmlcode.classList.remove("hide");
    t1__csscode.classList.add("hide");
    t1__jscode.classList.add("hide");
}

function task1csscode()
{
    t1__htmlcode.classList.add("hide");
    t1__csscode.classList.remove("hide");
    t1__jscode.classList.add("hide");
}

function task1jscode()
{
    t1__htmlcode.classList.add("hide");
    t1__csscode.classList.add("hide");
    t1__jscode.classList.remove("hide");
}

/*Task 2*/
function task2htmlcode()
{
    t2__htmlcode.classList.remove("hide");
    t2__csscode.classList.add("hide");
    t2__jscode.classList.add("hide");
}

function task2csscode()
{
    t2__htmlcode.classList.add("hide");
    t2__csscode.classList.remove("hide");
    t2__jscode.classList.add("hide");
}

function task2jscode()
{
    t2__htmlcode.classList.add("hide");
    t2__csscode.classList.add("hide");
    t2__jscode.classList.remove("hide");
}
