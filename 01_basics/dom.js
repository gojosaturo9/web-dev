/* window objec the window object represents an open window in a browser. it is browser's object(not javascript's)
& is automaticall created by browser.

 selecting with id
document.getElementById("myid")

 selecting with classdocument.getElementsByClassName("class")

selecting with tag
document.getElementsByTagName("mytag")

 querry selector
document.querySelector("")
document.querySelectorAll("")
class always used in querry selector with (.)

propertiestagName:- returns tag for element nodesinnerText:- returns the text content of the element and all its children
 innerHTML:- returns the plain text with HTML contents in the element
 textContent:- returns textual content even for hidden elements

let h2 = document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText=h2.innerText+"from physics wallah";

let divs = document.querySelectorAll(".box");

let idx =1;
for (div of divs){
   div of divs =`new unique value ${idx}`;
    idx++;
}

 attributes  
getAttribute(Attr)

setAttribute(attr,value)

Node.style to give some style

div.style.backgroundColor= "green";

 exmaple 2  div.style.textSize ="";

 insert elements

 Node.append(el) adds at the end of the Node(inside)

Node.prepend(el) adds at the start of the Node(inside)

Node.before(el) adds before the NodeList(outside)

Node.after(el) adds after the nodes (outside)


let element = document.createElement("button");
    element.innerText="click me !";  document.querySelector("body").prepend("h1");/*

     delete element 
    node.remove() to remove the nodes

     append child and remove child mdn documentation*/