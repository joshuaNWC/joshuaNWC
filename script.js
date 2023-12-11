//get all elements from collapsible class
let coll = document.getElementsByClassName("MenuButtons");
//i variable for loop
let i;
//forloop through each element in collapsible
for (i = 0; i < coll.length; i++) {
  //click event for Menu Buttons
  coll[i].addEventListener("click", function () {
    //Gets the content in the Html
    let content = this.nextElementSibling;
    //Sets Height to Content Height
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
