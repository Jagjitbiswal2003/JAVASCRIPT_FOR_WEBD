// Event - it allows you to write a JS code that react to certain situation.Ex - 1.The user click on mouse button , 2.A form fied being changed etc.

// Two ways to handle a event
/* 
1. By using an Event Handler
2. By addind an Event Listener
*/

// Event Handler - 
/*    
 1.onclick - This event handler invokes a js code when a click action perfom in HTML elemnt.
 2.onload -  This event handler invokes a js code when a window or image finishes loading.
 3.onmouseover- This event handler invokes a js code when we place a mouse over a spesific link or object.
 read more from the link in the event.html
*/


  /* Event Handler  - 

  const myfunction = ()  =>{
  const sel = document.getElementById('box1')
  sel.innerHTML='<h4>Invoked Onclick</h4>'
  sel.style.backgroundColor='orange'
}

//Mouse event is define same as onclick.

// Keyboard event is not work in normal div it works on form.

const KeypressEvent = () => {
    console.log("Onkeypress event is invoked!");
  }
  */
 /* Event Listner - in event listner the events are almost same as event handler.
 In event listner you cant define the function and use that function in HTML element  */

 //Intially we have to select the elemnt where we use event listner
const acc = document.getElementById('box2')
//add event listner - 
// event listner syntax - element.addEventListner('event',callback(mostly anonymous function))
acc.addEventListener('click',(e) =>{
    console.log('Event listner click is invoked',e)
})
// Here the e is an event object which gives all info about the event.

// By default the event follows bublling behaviour - the inner element always takes the event.
// capture behaviour - first the event works on outer element if the outer element is not conatain the event then it moves to inner and check and so on.



