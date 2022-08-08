function myMove() {
    let id = null;
    const elem = document.getElementById("animate");   
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, );
     function frame() {
      if (pos == 350) {
        clearInterval(id);
      } 
      
      else {
        pos++; 
        elem.style.left = pos + "px"; 
        }
      }
  }