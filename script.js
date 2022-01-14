var nodelist = document.getElementsByTagName("LI");

var i ;
var textinput = document.getElementById("myInput");
 textinput.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("myBtn").click();
    }
  });
 for (i=0 ; i< nodelist.length; i++) {

    var span = document.createElement("Span");
    var Txt = document.createTextNode("\u00D7");

    span.className = "close";

    span.appendChild(Txt);
    nodelist[i].appendChild(span);
 }

  var close = document.getElementsByClassName("close");

  var i;
   
  for( i = 0 ; i < close.length; i++) {
      
     close[i].onclick = function() {

        var div = this.parentElement;

        div.style.display = "none" ;
      }
  }

   function newElement() {
        var li = document.createElement("LI");
        var inputValue = document.getElementById("myInput").value;

        var t = document.createTextNode(inputValue);
        li.appendChild(t);

        if(inputValue === "") {
            alert("you must write something") ;
        } else {

            document.getElementById("myUL").appendChild(li);
            li.className = "list-group-item" ;

        }
        document.getElementById("myInput").value = "" ;

        var span = document.createElement("Span");
         var text = document.createTextNode("\u00D7");
         span. className = "close" ;

         span.appendChild(text);
         li.appendChild(span) ;

         for(i = 0; i< close.length; i++) {
             close[i].onclick = function() {
                 var div = this.parentElement;
                 div.style.display = "none" ;
             }
         }
   }