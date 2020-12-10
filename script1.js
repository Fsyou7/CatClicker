//Create a page based on the objects in an array.  The object initializes with two parameters: name and image
var cats = [{name: "Socks", img: "socks.jpg"}, {name: "Boots", img :"boots.jpg"}, {name: "Carrot", img: "carrot.jpg"}, {name: "Tom", img: "tom.jpg"}, {name: "Garfield", img: "garfield.jpg"}];

// Define variables for all the elements that change on the page
var catList = document.getElementById("catList");   // Save the ul element with an id called catList to a variable
var clickedCatName = document.getElementById("selectedCatName");    // Save the p element with an id called selectedCatName to a variable
var clickedCatImg = document.getElementById("selectedCatImg");      // Save the img element with an id of selectedCatImg to a variable
var clickedCatCounter = document.getElementById("clickCounterDisplay");    // Save the p element with an id called selectedCatName to a variable
// var currentCat;
// var catObject; 
// Create an HTML nav element of cats from the cats array
// cats.forEach(element => {                           // Iterate over the cats array
for (var i = 0; i < cats.length; i++){
    var cat = cats[i];
    var listItem = document.createElement("p");    // Create a <p> element
    listItem.innerHTML = cat.name;              // Insert text into the p from the name of the cat object
    cat.counter = 0;                            // Add a counter to the element object
    
    // Assign this function to the cat object
    cat.clickAction = (function (catCopy){
        return function (){
            catCopy.counter++;
            if(catCopy.counter === 1){
                clickedCatCounter.innerHTML = catCopy.name + " has been clicked " + catCopy.counter + " time";// Update the DOM
            } else {
                clickedCatCounter.innerHTML = catCopy.name + " has been clicked " + catCopy.counter + " times";// Update the DOM
            }
            
        };
    }(cat));

    // Add click listeners on each list item which displays a cat's image and assigns a function that increments that cat's counter when the image is clicked
    listItem.addEventListener("click", (function (catCopy){
        return function(){
                clickedCatImg.onclick = catCopy.clickAction;
                clickedCatName.innerHTML = "";              // Clear the text of the element
                clickedCatName.innerHTML = catCopy.name;        // Change the p element's HTML to the cat name
                clickedCatImg.src = "images/" + catCopy.img;    // Change the img element's src to that of the cat image
                clickedCatCounter.innerHTML = catCopy.name + " has been clicked " + catCopy.counter + " times";// Update the DOM
        };
    })(cat));
    
    catList.appendChild(listItem);                  // Append <li> to the <ul> with the id="catList"
};

//add this element to the document
document.body.appendChild(catList);