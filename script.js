var requestSpan = document.querySelector("#requests");
var connectionSpan = document.querySelector("#connections");
var username = document.querySelector("#username");

function accept(id) {
    var element = document.querySelector(id);
    element.remove();
    requestSpan.innerText--;
    connectionSpan.innerText++;
}

function ignore(id) {
    var element = document.querySelector(id);
    element.remove();
    requestSpan.innerText--;
}


function edit() {
    nameChange.innerText = "Santa Clause";
}



// function add(){
//     document.querySelector("#addCounter").innerText++;
// }


// function hide(){
//     document.querySelector("#toddS").remove();
// }

// function hide2(){
//     document.querySelector("#philK").remove();
// }

// var addCounter = 444;

// function add() {
//     addCounter++;
//     addCounterElement.innerText = addCounter;
//     console.log(addCounter);
// }




