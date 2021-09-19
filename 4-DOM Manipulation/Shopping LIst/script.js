var input=document.getElementById("userinput");
var button=document.getElementById("enter");
var ul=document.querySelector("ul");
var deletes=document.querySelectorAll(".remove");
var li=document.querySelectorAll("li");
function inputLength()
{
    return input.value.length;
}
function createListElement()
{
    var li=document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    var bt=document.createElement("button");
    bt.appendChild(document.createTextNode("X"));
    bt.classList.add("remove");
    li.appendChild(bt);
    ul.appendChild(li);
    input.value="";
}
function addListAfterClick()
{
    if(inputLength()>0)
    createListElement();
}
function addListAfterKeypress(Event)
{

    if(inputLength()>0 && Event.keyCode===13 )
    createListElement();
}
deletes.forEach(btn => {
    // Attach event listener. Note to preserve the button this-reference
    // by using the non-shorthand function
    btn.addEventListener('click', function() {
      var li = this.parentNode
      li.remove()
    })
  })
li.forEach(btn => {
    // Attach event listener. Note to preserve the button this-reference
    // by using the non-shorthand function
    btn.addEventListener('click', function() {
      this.classList.toggle("done");
    })
  })
button.addEventListener("click",addListAfterClick);
input.addEventListener("keypress",addListAfterKeypress);