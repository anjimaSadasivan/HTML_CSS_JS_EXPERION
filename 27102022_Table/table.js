let text = document.getElementById("text_width");
text.style.display="none"
let text_1 = document.getElementById("text_height");
text.style.display="none"
let text_2 = document.getElementById("text_depth");
text_2.style.display="none"
let text_3 = document.getElementById("text_weight");
text_3.style.display="none"


function mywidthFunction() {
    var checkBox = document.getElementById("widthCheck");
    var text = document.getElementById("text");
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
       text.style.display = "none";
    }
  }

  function myheightFunction() {
    var checkBox = document.getElementById("heightCheck");
    var text = document.getElementById("text_1");
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
       text.style.display = "none";
    }
  }
  function mydepthFunction() {
    var checkBox = document.getElementById("depthCheck");
    var text = document.getElementById("text_2");
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
       text.style.display = "none";
    }
  }

  function myweightFunction() {
    var checkBox = document.getElementById("weightCheck");
    var text = document.getElementById("text_3");
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
       text.style.display = "none";
    }
  }
  
  