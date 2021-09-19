var input=document.getElementById("userinput");
var button=document.getElementById("enter");
var ul=document.querySelector("ul");
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
function doneTask(element)
{
    if(element.target.tagName === "li")
    {   
        element.target.classList.toggle("done");
        
    }
}
function deleteListElement(element)
{
    if(element.target.className==="remove")
    {
        element.target.parentElement.remove();
    }
}
function handleUlClick(element)
{
    doneTask(element);
    deleteListElement(element);
}
ul.addEventListener("click",handleUlClick);
button.addEventListener("click",addListAfterClick);
input.addEventListener("keypress",addListAfterKeypress);