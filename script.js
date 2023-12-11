//get all elements from collapsible class
let coll = document.getElementsByClassName("MenuButtons");
//i variable for loop
//forloop through each element in collapsible
for (let i = 0; i < coll.length; i++) {
  //click event for Menu Buttons
  coll[i].addEventListener("click", function () {
    //active toggle
    this.classList.toggle("active");
    //sets max height to content
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
