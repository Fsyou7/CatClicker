

// let element = document.createElement(tagName[, options]);
// clear the screen for testing
// document.body.innerHTML = '';
// document.body.style.background="white";

// var num = [1, 2, 3, 4, 5];

// // Let's loop over the numbers in our array
// for (var i = 0; i <0; i++) {

//     // This is the number we're on...
//     var num = nums[i];

//     // We're creating a DOM element for the number
//     var elem = document.createElement('div');
//     elem.textContent = num;

//     // ... and when we click, alert the value of `num`
//     elem.addEventListener('click', function() {
//         alert(num);
//     });

//     // finally, let's add this element to the document
//     document.body.appendChild(elem);
// };


//document.body.innerHTML = '';
document.body.style.background="white";

//Array of cat objects with name and image pairs
var cats = [{name: "Socks", img: "socks.jpg"}, {name: "Boots", img :"boots.jpg"}, {name: "Carrot", img: "carrot.jpg"}, {name: "Tom", img: "tom.jpg"}, {name: "Garfield", img: "garfield.jpg"}];




// Creating a list of cats from the cats array

var catList = document.getElementById("catList");   // Create a ul element with an id called catList
cats.forEach(element => {
    var listItem = document.createElement("li");    // Create a <li> element
    listItem.innerHTML = element.name;              // Insert text to the li from the name of the cat object
    catList.appendChild(listItem);                  // Append <li> to <ul> with id="catList"
});


//add this element to the document
document.body.appendChild(catList);

// //Create cat elements to display from the cats array
// var catCreator = function(name, img){
//     //
//     let catClickCount = 0;
    

// }

// let cat1ClickCount = 0;
// let cat2ClickCount = 0;

// var cat1Listener = document.getElementById('cat1');
// cat1Listener.addEventListener('click', function(){
//   //the element has been clicked... do stuff here
//   cat1ClickCount++;
//   var cat1Clicks = document.getElementById('cat1clicks').innerHTML = cat1ClickCount;
// }, false);

// var cat2Listener = document.getElementById('cat2');
// cat2Listener.addEventListener('click', function(){
//   //the element has been clicked... do stuff here
//   cat2ClickCount++;
//   var cat2Clicks = document.getElementById('cat2clicks').innerHTML = cat2ClickCount;
// }, false);
