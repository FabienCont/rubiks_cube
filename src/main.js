import './scss/main.scss';

if ('serviceWorker' in navigator) {
 window.addEventListener('load', () => {
   navigator.serviceWorker.register('/service-worker.js').then(registration => {
     console.log('SW registered: ', registration);
   }).catch(registrationError => {
     console.log('SW registration failed: ', registrationError);
   });
 });
}

  var container =document.querySelector("body");
var dragItem=document.querySelector(".rubiks_cube");;
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
     if (e.type === "touchstart") {
       initialX = e.touches[0].clientX - xOffset;
       initialY = e.touches[0].clientY - yOffset;
     } else {
       initialX = e.clientX - xOffset;
       initialY = e.clientY - yOffset;
     }

     if (e.target === dragItem|| container.contains(e.target) ||e.target === dragItem ) {
       active = true;
     }
   }

   function dragEnd(e) {
     initialX = currentX;
     initialY = currentY;

     active = false;
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
     }
   }

   function setTranslate(xPos, yPos, el) {
     el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
   }

   function setRotate(xPos,yPos,el){
     el.style.transform = "rotateY("+ xPos/2 +"deg) rotateX("+ -yPos/2+"deg)";
   }
