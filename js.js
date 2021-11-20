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