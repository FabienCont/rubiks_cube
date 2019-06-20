import './header.scss';
import './rubiks.scss';

if ('serviceWorker' in navigator) {
 window.addEventListener('load', () => {
   navigator.serviceWorker.register('/service-worker.js').then(registration => {
     console.log('SW registered: ', registration);
   }).catch(registrationError => {
     console.log('SW registration failed: ', registrationError);
   });
 });
}
// Add the image to our existing div.
  var dragItem=document.querySelector(".rubiks_cube");
  var container =document.querySelector("body");

  var mode="rotate";
   var active = false;
   var currentX;
   var currentY;
   var initialX;
   var initialY;
   var xOffset = 0;
   var yOffset = 0;

   container.addEventListener("touchstart", dragStart, false);
   container.addEventListener("touchend", dragEnd, false);
   container.addEventListener("touchmove", drag, false);

   container.addEventListener("mousedown", dragStart, false);
   container.addEventListener("mouseup", dragEnd, false);
   container.addEventListener("mousemove", drag, false);

   function dragStart(e) {
     console.log("dragStart")
     if (e.type === "touchstart") {
       initialX = e.touches[0].clientX - xOffset;
       initialY = e.touches[0].clientY - yOffset;
     } else {
       initialX = e.clientX - xOffset;
       initialY = e.clientY - yOffset;
     }

 console.log("dragStart target="+e.target)
    if (e.target === dragItem||dragItem.contains(e.target)) {
        console.log("dragStart active")
       active = true;
     }
   }

   function dragEnd(e) {
     initialX = currentX;
     initialY = currentY;

     active = false;
      console.log("dragEnd")
   }

   function drag(e) {
     if (active) {

       e.preventDefault();

       if (e.type === "touchmove") {
         currentX = e.touches[0].clientX - initialX;
         currentY = e.touches[0].clientY - initialY;
       } else {
         currentX = e.clientX - initialX;
         currentY = e.clientY - initialY;
       }

       xOffset = currentX;
       yOffset = currentY;
       if(mode=="translate"){
         setTranslate(currentX, currentY, dragItem);
       }else {
         setRotate(currentX, currentY, dragItem);
       }
        console.log("drag x="+currentX+"; y="+currentY);
     }
   }

   function setTranslate(xPos, yPos, el) {
     el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
   }

   function setRotate(xPos,yPos,el){
     el.style.transform = "rotateY("+ xPos/2 +"deg) rotateX("+ -yPos/2+"deg)";
   }
