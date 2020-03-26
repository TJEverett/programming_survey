var countRust = 0;
var countJavascript = 0;
var countPython = 0;

var pointCheck = function(toCheck){
  if (toCheck === "rust"){
    countRust = countRust + 1;
  } else if (toCheck === "javascript"){
    countJavascript = countJavascript + 1;
  } else if (toCheck === "python"){
    countPython = countPython + 1;
  };
};

var displayResult = function(){
  if (countRust >= countJavascript && countRust > countPython){
    jQuery(".language").text("Rust");
  } else if (countJavascript >= countPython && countJavascript > countRust){
    jQuery(".language").text("JavaScript");
  } else if (countPython >= countRust && countPython > countJavascript){
    jQuery(".language").text("Python");
  };
  jQuery(".responce").show();
};

jQuery(document).ready(function(){
  jQuery("#languageQuiz").submit(function(event){
    event.preventDefault();

    var food = jQuery("#foodstuff").val()
    var gem = jQuery("#gemstone").val();
    var color = jQuery("#color").val();
    var letter = jQuery("#letter").val();
    var flower = jQuery("#flower").val();

    if (!(food === null || gem === null || color === null || letter === null || flower === null)){
      pointCheck(food);
      pointCheck(gem);
      pointCheck(color);
      pointCheck(letter);
      pointCheck(flower);

      displayResult();
      jQuery(".questions").hide();
    } else {
      alert("Please select an answer for each question");
    };
  });
});