
var gridCss = '<link rel="stylesheet" href="gridview.css" type="text/css">';
var headinnerHTML = document.querySelector('link').innerHTML;
var flexCss = '<link rel="stylesheet" href="gridview.css" type="text/css">'

var gridview = false;

document.getElementById("mygridbtn").addEventListener("click", function(){ 
  if (gridview == false) {
    document.querySelector("link[href='flexview.css']").href = "gridview.css";
    gridview = true;
  }
});
document.getElementById("myflexbtn").addEventListener("click", function(){ 
  if (gridview == true) {
    document.querySelector("link[href='gridview.css']").href = "flexview.css";
    gridview = false;
  }
});

 /*
  document.querySelector('head').innerHTML += '<link rel="stylesheet" href="styles.css" type="text/css"/>';


  if (document.styleSheets[0].href = "style.css") {
    x = 1+1;
    alert("terekiba")
  }
  else {
    alert('ayterekbern')
  }


  **********************************

var headinnerHTML = document.querySelector('link').innerHTML;
var gridCss = '<link rel="stylesheet" href="gridview.css" type="text/css">';
var flexCss = '<link rel="stylesheet" href="gridview.css" type="text/css">'
var gridview = false;

document.getElementById("mygridbtn").addEventListener("click", function(){ 
  if (gridview == false) {
   headinnerHTML -= flexCss;
   headinnerHTML += gridCss;
    gridview = true;
  }
});
document.getElementById("myflexbtn").addEventListener("click", function(){ 
  if (gridview == true) {
    headinnerHTML -= gridCss;
    headinnerHTML += flexCss;
    gridview = false;
  }
});

  */