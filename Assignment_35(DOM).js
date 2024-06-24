// DOM - (Document Object model) When a webpage is loaded on browser then the browser creates a Document object model of that page to acess the HTML elements.
/*
                         Document
                            
                     Root element(HTML)
         
         Element                                  Element
         (head)                                    (body)

         title                           href        <a>         <h1-h9>

                           (DOM Tree)
*/

// Select the HTML element by Various process
/*
  1. Find HTML element by ID : document.getElementById("Id name")
  2. Find HTML element by tag name : document.getElementsByTagName("enter tag")
  3. Find HTML element by class name : document.getElementsByClassName("Class name")
  4. Find HTML element by css selectors : document.querySelector("pass query or queries")
  5. Find HTML element by css selectors :  document.querySelectorAll("queries pass")
  */
 /* select the body of HTML

  let b = document.body
  b.style.backgroundColor='red'

  */ 

 /* example of getElementById
  const get_id = document.getElementById('box1')
  get_id.style.backgroundColor='orange' change the css property
 */ 

//  Find HTML element by tag name and  Find HTML element by class name is same as getElementID

// const qu = document.querySelectorAll('.container .box');
// qu.style.backgroundColor='green'
/*
   Modifying HTML 
1. Changing HTML content using inner HTML

inner HTML - The inner HTML is essentially the content enclosed by a tag, including any nested HTML elements and text.
Tag - Tags are enclosed in angle brackets (< >) and typically come in pairs. div is a tag.

Element - Elements are the complete structure defined by a pair of tags and the content between them.

ex - <div id="example">This is <b>bold text</b> inside the div.</div>

<div> and </div> are tags.
<b> and </b> are tags.

<div id="example">This is <b>bold text</b> inside the div.</div> is a div element.
<b>bold text</b> is a b element.

Advantages of inner HTML -
1. Dynamic Content Updates
innerHTML allows developers to easily update the content of an element on the fly. This is particularly useful for creating interactive and dynamic web applications where content needs to change without refreshing the page.

*/
 //inner HTML use-
 //select HTML element then apply inner HTML
const update = document.getElementById('box1');
// HTML change
update.innerHTML = "<h2>HTML</h2>"
//Change the attribute(CSS) of HTML
update.style.fontSize = "10px"
// Image change
//document.getElementById('my-image').src = 'background1.jpg'
//In one step i select the element and change attribute(CSS)
// document.getElementById('para').style.color = "orange"; 

// But first you select the element then store some where the it is easy for you.
//const p = document.getElementById('para')
//p.style.fontSize="20px"
//p.style.color = 'orange'


// Modifying class in HTML
/*   
1. Add a class
element.classList.add("my_class");
2. Remove a class
element.classList.remove("my_class")
3. toggle a class
element.classList.toggle("my_class")

*/
// Single Ckass-
// box1.classList.add('round-box')

// This property is work on multiple class

const boxes = document.getElementsByClassName('box')
for(let i=0;i<boxes.length;i++)
boxes[i].classList.add('round-box')


// Remove a class
box3.classList.remove('round-box')

// Toggle a class is basically use in event handling so read this on event handling


// Create a new elemnt i.e not present in HTML file and append in HTML

// Example of Create a new elemnt
const ele = document.createElement('p') // paragraph element is create
ele.innerText = 'This is a new paragraph in this HTML file'
ele.classList.add('box') // if you want to add some class in the new element

const sel = document.getElementById('con'); // must connect new elemnt with existing elemnt for example p is a new elemnt and i want to add it with the con id.

sel.appendChild(ele);
