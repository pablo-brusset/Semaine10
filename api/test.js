var key= '4af82c6da86a0849d5dbf65bdc3a8d9d';
var url="https://api.themoviedb.org/3/discover/movie?api_key="+ key;

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       //document.getElementById("demo").innerHTML = this.responseText;
       console.log(this.response);
       var e = this;
       e = JSON.parse(this.responseText);
       console.log(e);
      }
      else{
          console.log("error");
      }
    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
  }
loadDoc();