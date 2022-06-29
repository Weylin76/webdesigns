let reqInputs = document.querySelectorAll("input:required");

reqInputs.forEach(input => {
    input.addEventListener("blur", myFunction);
});

function myFunction(event) {
    event.target.classList.add("shake");
    setTimeout(function(){
    event.target.classList.remove("shake");
     }, 1000)
}